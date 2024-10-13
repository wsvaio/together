import ReactivityTransform from "@vue-macros/reactivity-transform/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@vant/nuxt", "@unocss/nuxt", "@pinia/nuxt", "@vueuse/nuxt"],
  css: ["~/assets/css/main.less"],
  vant: {
    /** Options */
  },
  vite: {
    plugins: [ReactivityTransform()],
  },
  nitro: {
    experimental: {
      websocket: true,
    },
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
