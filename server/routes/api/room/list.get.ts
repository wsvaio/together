import { listRoom } from "~/server/services/room";

export default defineEventHandler(async event => {
  const query = getQuery(event);
  return listRoom({
    ...query,
    isPublic: query.isPublic === "true" ? true : query.isPublic === "false" ? false : undefined,
  });
});
