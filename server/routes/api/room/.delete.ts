import { deleteRoom } from "./service";

export default defineEventHandler(event => {
  const query = getQuery(event);
  return deleteRoom(String(query.id));
});
