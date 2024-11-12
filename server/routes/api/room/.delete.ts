import { deleteRoom } from "~/server/services/room";

export default defineEventHandler(event => {
  const query = getQuery(event);
  return deleteRoom(String(query.id));
});
