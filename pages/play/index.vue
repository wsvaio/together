<script setup lang="ts">
import type BulletChat from "~/components/bullet-chat.vue";
import type Control from "~/components/control.vue";
import type Player from "~/components/player.vue";
import type Upload from "~/components/upload.vue";

const playerRef = $ref<InstanceType<typeof Player>>();
const controlRef = $ref<InstanceType<typeof Control>>();
const uploadRef = $ref<InstanceType<typeof Upload>>();
const bulletChatRef = $ref<InstanceType<typeof BulletChat>>();
const user = useUserStore();
const clientWidth = document.documentElement.clientWidth;

const src = $ref("");
let currentTime = $ref(0);
const show = $ref(true);
const messages = reactive<{ nickname: string; message: string; timestamp: number }[]>([]);
watch(messages, () => {
  messages.length > 10 && (messages.splice(0, messages.length - 10));
});
let users = $ref<{
  nickname: "";
  currentTime: string;
}[]>([]);

const { on, send } = usePlayWs();

on("message", data => {
  messages.push({
    nickname: data.nickname,
    message: data.message,
    timestamp: data.timestamp,
  });
  bulletChatRef?.bullet(data.message);
});

on("update:currentTime", data => {
  playerRef?.videoRef?.currentTime && (playerRef.videoRef.currentTime = data.currentTime);
  currentTime = data.currentTime;
});

on("update:users", data => {
  console.log(data);
  users = data.users;
});
</script>

<template>
  <div style="height: 800dvh" />

  <player ref="playerRef" :src @click="show = !show" @timeupdate="currentTime = playerRef!.videoRef!.currentTime, send('timeUpdate', { currentTime })" />
  <bullet-chat
    ref="bulletChatRef" pos="!fixed" top="0" left="0"
    right="0"
    h="50dvh" pointer-events="none"
  />

  <upload v-show="!uploadRef?.file" ref="uploadRef" v-model="src" />

  <transition name="fade">
    <control-header v-show="show" :filename="uploadRef?.file?.name" @close="uploadRef?.clear()" />
  </transition>

  <transition name="fade">
    <control
      v-show="show"
      ref="controlRef"
      :duration="playerRef?.duration" :is-play="playerRef?.isPlay" :current-time="currentTime"
      @play="playerRef?.videoRef?.play?.()" @pause="playerRef?.videoRef?.pause?.()"
      @change="val => playerRef?.videoRef?.currentTime && (playerRef.videoRef.currentTime = currentTime = val)"
      @sync="send('sync', { currentTime, nickname: user.nickname })" @message="send('message', {
        nickname: user.nickname,
        message: $event,
      })"
    />
  </transition>

  <dragable-box pos="fixed" :disabled="!show" :offset-x="16" :offset-y="64">
    <message :messages="messages" :show="show" />
  </dragable-box>

  <dragable-box
    pos="fixed" :disabled="!show" x-align="right" :offset-x="16"
    :offset-y="64"
  >
    <transition name="fade">
      <curr-user
        :show="show"
        :users="users"
      />
    </transition>
  </dragable-box>
</template>
