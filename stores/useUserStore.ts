import { defineStore } from "pinia";

export default defineStore("user", {
  state: () => ({
    nickname: `匿名用户${Math.floor(Math.random() * 9000 + 1000)}`,
  }),
  actions: {

  },
  getters: {},
  persist: {
    setter(key, value) {
      value.nickname ||= `匿名用户${Math.floor(Math.random() * 9000 + 1000)}`;
      localStorage.setItem(key, JSON.stringify(value));
    },
    getter(key) {
      const value = JSON.parse(localStorage.getItem(key)!);
      return value;
    },
  }
});
