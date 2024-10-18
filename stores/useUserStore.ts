import { defineStore } from "pinia";

export default defineStore("user", {
  state: () => ({
    nickname: "",
    avatar: "",
  }),
  actions: {

  },
  getters: {},
  persist: true
});
