import { defineNuxtPlugin } from "#app";
import piniaPluginPersist from "@wsvaio/pinia-plugin-persist";

export default defineNuxtPlugin(async nuxtApp => {
  (nuxtApp.$pinia as Record<any, any>).use(
    piniaPluginPersist({
      // key: "blog,
    })
  );
  const user = useUserStore();
  if (!user.nickname) {
    user.nickname = await $fetch("/api/name");
  }
});
