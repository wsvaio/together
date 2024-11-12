import { getRoom } from "~/server/services/room";

export default defineEventHandler(event => {
  const id = getRouterParam(event, "id")!;
  return getRoom(id);
});
