import { dateFormat } from "@wsvaio/utils";
import { deleteEmptyRoom } from "~/server/services/room";

export default defineTask({
  meta: {
    name: "deleteEmptyRoom",
    description: "删除空房间"
  },
  run(ev) {
    console.log(dateFormat(new Date()), "删除空房间", ev);
    deleteEmptyRoom();
    return {};
  },
});
