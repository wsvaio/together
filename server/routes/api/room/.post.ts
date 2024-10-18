import { addRoom } from "./service";

export default defineEventHandler(async event => {
  const body = await readBody(event);
  return addRoom(body);
});
