import legacy from "@vitejs/plugin-legacy";
import ReactivityTransform from "@vue-macros/reactivity-transform/vite";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@vant/nuxt", "@unocss/nuxt", "@pinia/nuxt", "@vueuse/nuxt", "@nuxt/content"],

  css: ["~/assets/css/main.less", "github-markdown-css"],
  vant: {
    /** Options */
  },
  vite: {
    plugins: [
      ReactivityTransform() as any,
      legacy({
        targets: ["defaults", "not IE 11"],
      }),
    ],
  },
  nitro: {
    experimental: {
      websocket: true,
      tasks: true,
    },

    scheduledTasks: {
      "0 * * * *": ["deleteEmptyRoom"]
    }

  },

  app: {
    head: {
      title: "一起看",
      meta: [
        { name: "author", content: "wsvaio@qq.com" },
        {
          name: "description",
          content: "一起看视频",
        },
        {
          name: "viewport",
          content:
            "width=device-width,initial-scale=1,maximum-scale=1,user-scalable=0,viewport-fit=cover",
        },
      ],
      link: [],
      script: [],
    },
  },
});
