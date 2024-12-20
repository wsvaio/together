export type Room = {
  id: string;
  name: string;
  isPublic: boolean;
  consumers: Consumer[];
  permanent?: boolean;
  timer?: NodeJS.Timeout;
};

export type Consumer = {
  avatar?: string;
  nickname: string;

  status?: string;

  currentTime?: number;
  playbackRate?: number;

  peer: any;
};

export const rooms: Room[] = [];

addRoom({
  name: "公共房间（常驻）",
  isPublic: true,
  permanent: true,
});

export function roomAddConsumer(roomId: string, consumer: Consumer) {
  getRoom(roomId)?.consumers.push(consumer);
}

export function roomDeleteConsumer(roomId: string, peerId: string) {
  const consumers = getRoom(roomId)?.consumers;
  if (consumers) {
    consumers.splice(
      consumers?.findIndex(item => item.peer.id === peerId),
      1
    );
  }
}

export function roomSend(
  roomId: string,
  event: string,
  data?: Record<any, any>
) {
  getRoom(roomId)?.consumers.forEach(item => {
    item.peer.send(
      JSON.stringify({
        event,
        ...data,
      })
    );
  });
}

export function addRoom(
  { name, isPublic, permanent } = {} as { name: string; isPublic: boolean; permanent?: boolean }
) {
  const room = {
    name,
    isPublic,
    id: crypto.randomUUID(),
    permanent,
    consumers: [],
  };
  rooms.push(room);
  Object.defineProperty(room, "timer", { enumerable: false });
  return room;
}

export function getRoom(id: string) {
  return rooms.find(item => item.id == id);
}

export function listRoom(
  { name = "", isPublic, orderBy, page = 1, pageSize = 10 } = {} as {
    name?: string;
    isPublic?: boolean;
    page?: number;
    orderBy?: string;
    pageSize?: number;
  }
) {
  const names = name.split(/\s+/);

  let list = rooms.filter(item => {
    const result: boolean[] = [];
    result.push(names.some(sub => item.name?.includes(sub)));

    if (typeof isPublic === "boolean") {
      result.push(item.isPublic === isPublic);
    }
    return result.every(item => item);
  });

  const total = list.length;

  if (orderBy == "consumer") {
    list = list.toSorted((a, b) => a.consumers.length - b.consumers.length);
  }
  list = list.slice((page - 1) * pageSize, page * pageSize);
  return {
    list,
    page,
    pageSize,
    total,
  };
}

export function deleteRoom(id: string) {
  rooms.splice(
    rooms.findIndex(item => item.id == id),
    1
  );
}

export function deleteEmptyRoom() {
  rooms.filter(item => !item.permanent).forEach(room => {
    if (room.consumers.length) {
      if (!room.timer)
        return;
      clearTimeout(room.timer);
      room.timer = undefined;
    }
    else {
      if (room.timer)
        return;
      room.timer = setTimeout(() => {
        if (room.consumers.length <= 0) {
          deleteRoom(room.id);
        }
        else {
          room.timer = undefined;
        }
      }, 60000);
    }
  });
}
