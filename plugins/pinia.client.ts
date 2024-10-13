import { defineNuxtPlugin } from "#app";
import piniaPluginPersist from "@wsvaio/pinia-plugin-persist";

export default defineNuxtPlugin(nuxtApp => {
  (nuxtApp.$pinia as Record<any, any>).use(
    piniaPluginPersist({
      // key: "blog,
    })
  );
});
