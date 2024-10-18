import { timeFormat, trying } from "@wsvaio/utils";

const map = new Map<any, Record<any, any>>();

function updateUsers() {
  [...map.keys()].forEach(peer => {
    peer.send(
      JSON.stringify({
        event: "update:users",
        users: [...map.values()],
      })
    );
  });
}

function send(event: string, data?: Record<any, any>) {
  [...map.keys()].forEach(peer => {
    peer.send(
      JSON.stringify({
        event,
        ...data,
      })
    );
  });
}
export default defineWebSocketHandler({
  async message(peer, message) {
    // 生产环境下，message居然没有json这个方法，跟dev环境下一致？？？？？？
    const str = message.toString();
    if (str === "ping") {
      peer.send("pong");
    }
    const data = await trying(async () => JSON.parse(str)).catch(() => "");
    if (!data)
      return;

    if (data.event == "in") {
      map.set(peer, { nickname: data.nickname });
      updateUsers();
      send("message", {
        nickname: "系统消息",
        message: `${data.nickname} 来了`,
        timestamp: new Date().getTime(),
      });
    }

    if (data.event == "timeUpdate") {
      const user = map.get(peer);
      if (user) {
        user.currentTime = data.currentTime;
        updateUsers();
      }
    }

    if (data.event == "sync") {
      send("update:currentTime", {
        currentTime: data.currentTime,
      });
      send("message", {
        nickname: "系统消息",
        message: `${data.nickname} 同步了时间至 ${timeFormat(data.currentTime, "MM:ss")}`,
        timestamp: new Date().getTime(),
      });
    }

    if (data.event == "message") {
      send("message", {
        nickname: data.nickname,
        message: data.message,
        timestamp: new Date().getTime(),
      });
    }
  },

  close(peer) {
    if (map.has(peer)) {
      send("message", {
        nickname: "系统消息",
        message: `${map.get(peer)!.nickname} 走了`,
        timestamp: new Date().getTime(),
      });
      map.delete(peer);
      updateUsers();
    }
  },
});
