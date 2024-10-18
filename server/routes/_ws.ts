import { merge, timeFormat, trying } from "@wsvaio/utils";
import {
  deleteRoom,
  getRoom,
  roomAddConsumer,
  roomDeleteConsumer,
  rooms,
  roomSend,
} from "./api/room/service";

export default defineWebSocketHandler({
  async message(peer, message) {
    // 生产环境下，message居然没有json这个方法，跟dev环境下一致？？？？？？
    const data = await trying(async () => JSON.parse(message.toString())).catch(
      () => ""
    );
    if (!data)
      return;

    if (data.event == "in") {
      const consumer = {
        currentTime: 0,
        status: "待上传",
        nickname: data.nickname,
        avatar: data.avatar,
        peer,
      };
      Object.defineProperty(consumer, "peer", {
        enumerable: false,
      });
      roomAddConsumer(data.roomId, consumer);

      roomSend(data.roomId, "update:consumers", {
        consumers: getRoom(data.roomId)?.consumers,
      });
      roomSend(data.roomId, "append:message", {
        type: "system",
        message: `${data.nickname} 来了`,
        timestamp: new Date().getTime(),
      });
    }

    // if (data.event == "timeUpdate") {
    //   const user = getRoom(data.roomId)?.consumers.find(
    //     item => item.nickname == data.nickname
    //   );
    //   if (user) {
    //     user.currentTime = data.currentTime;
    //     roomSend(data.roomId, "update:consumers", {
    //       consumers: getRoom(data.roomId)?.consumers,
    //     });
    //   }
    // }

    if (data.event == "update:consumer") {
      const user = getRoom(data.roomId)?.consumers.find(
        item => item.nickname == data.nickname
      );
      if (user) {
        merge(user, data, { has: true });
        roomSend(data.roomId, "update:consumers", {
          consumers: getRoom(data.roomId)?.consumers,
        });
      }
    }

    if (data.event == "sync") {
      roomSend(data.roomId, "update:currentTime", {
        currentTime: data.currentTime,
      });
      roomSend(data.roomId, "append:message", {
        type: "system",
        message: `${data.nickname} 为所有人对齐了时间颗粒度 ${timeFormat(
          data.currentTime,
          "MM:ss"
        )}`,
        timestamp: new Date().getTime(),
      });
    }

    if (data.event == "message") {
      roomSend(data.roomId, "append:message", {
        type: data.type,
        consumer:
          data.type == "consumer"
            ? getRoom(data.roomId)?.consumers.find(
              item => item.nickname == data.nickname
            )
            : undefined,
        message: data.message,
        messageType: data.messageType,
        timestamp: new Date().getTime(),
      });
    }
  },

  close(peer) {
    rooms
      .filter(item => item.consumers.some(sub => sub.peer.id === peer.id))
      .forEach(room => {
        roomSend(room.id, "append:message", {
          type: "system",
          message: `${
            room.consumers.find(item => item.peer.id === peer.id)?.nickname
          } 走了`,
          timestamp: new Date().getTime(),
        });
        roomDeleteConsumer(room.id, peer.id);
        roomSend(room.id, "update:consumers", {
          consumers: room?.consumers,
        });
        if (room.consumers.length <= 0 && !room.permanent) {
          deleteRoom(room.id);
        }
      });
  },
});
