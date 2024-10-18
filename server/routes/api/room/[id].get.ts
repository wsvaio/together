import { getRoom } from "./service";

export default defineEventHandler(event => {
  const id = getRouterParam(event, "id")!;
  return getRoom(id);
});
