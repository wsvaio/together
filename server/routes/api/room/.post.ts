import { addRoom } from "~/server/services/room";

export default defineEventHandler(async event => {
  const body = await readBody(event);
  return addRoom(body);
});
