<script setup lang="ts">
import { timeFormat } from "@wsvaio/utils";
import type BulletChat from "~/components/bullet-chat.vue";
import type Control from "~/components/control.vue";
import type DragableWindow from "~/components/dragable-window.vue";
import type Player from "~/components/player.vue";
import type Upload from "~/components/upload.vue";

const route = useRoute();
const roomId = route.params.id;
const playerRef = $ref<InstanceType<typeof Player>>();
const controlRef = $ref<InstanceType<typeof Control>>();
const uploadRef = $ref<InstanceType<typeof Upload>>();
const bulletChatRef = $ref<InstanceType<typeof BulletChat>>();

const messageDragableWindowRef = $ref<InstanceType<typeof DragableWindow>>();
const consumerDragableWindowRef = $ref<InstanceType<typeof DragableWindow>>();
const user = useUserStore();

const src = $ref("");
let currentTime = $ref(0);
const show = $ref(true);
const messages = reactive<Record<any, any>[]>([]);
// watch(messages, () => {
//   messages.length > 10 && (messages.splice(0, messages.length - 10));
// });
let consumers = $ref<Record<any, any>[]>([]);

const { data: room } = useFetch<any>(`/api/room/${roomId}`);
const { on, send } = usePlayWs();

on("connected", () => {
  send("in", {
    nickname: user.nickname,
    avatar: user.avatar,
    roomId,
  });
});

on("append:message", data => {
  messages.push(data);

  nextTick(() => {
    messageDragableWindowRef?.scrollToBottom();
    bulletChatRef?.bullet(data.message, data.messageType);
  });
});

on("update:currentTime", data => {
  playerRef?.videoRef?.currentTime && (playerRef.videoRef.currentTime = data.currentTime);
  currentTime = data.currentTime;
});

on("update:consumers", data => {
  consumers = data.consumers;
  nextTick(() => {
    consumerDragableWindowRef?.scrollToBottom();
  });
});

function handleClose() {
  if (playerRef && playerRef.videoRef) {
    playerRef.isPlay = false;
  }

  uploadRef?.clear();
  send("update:consumer", {
    roomId,
    nickname: user.nickname,
    status: "待上传",
  });
}
</script>

<template>
  <div v-if="!controlRef?.isSupported" h="800dvh" />
  <player
    ref="playerRef" :src @click="show = !show" @timeupdate="currentTime = playerRef!.videoRef!.currentTime, send('update:consumer', {
      roomId,
      nickname: user.nickname,
      currentTime,
    })"
    @play="send('update:consumer', {
      roomId,
      nickname: user.nickname,
      status: '播放中',
    })" @pause="send('update:consumer', {
      roomId,
      nickname: user.nickname,
      status: '暂停中',
    })" @ended="send('update:consumer', {
      roomId,
      nickname: user.nickname,
      status: '播放完毕',
    })" @error="
      send('update:consumer', {
        roomId,
        nickname: user.nickname,
        status: '播放失败',
      })
    "
  />
  <bullet-chat
    ref="bulletChatRef" pos="!fixed" top="0" left="0"
    right="0" h="50dvh" pointer-events="none"
  />

  <upload
    v-show="!uploadRef?.file" ref="uploadRef" v-model="src" @update:model-value="send('update:consumer', {
      roomId,
      nickname: user.nickname,
      status: '已就绪',
    })"
  />

  <transition name="fade">
    <control-header v-show="show" :title="room?.name" :filename="uploadRef?.file?.name" @close="handleClose" />
  </transition>

  <transition name="fade">
    <control
      v-show="show" ref="controlRef" z="100" :duration="playerRef?.duration"
      :is-play="playerRef?.isPlay"
      :current-time="currentTime" @play="playerRef?.videoRef?.play?.(), playerRef!.videoRef!.currentTime = $event" @pause="playerRef?.videoRef?.pause?.()"
      @change="val => playerRef?.videoRef?.currentTime && (playerRef.videoRef.currentTime = currentTime = val)"
      @sync="send('sync', { roomId, currentTime, nickname: user.nickname })" @message="send('message', {
        roomId,
        type: 'consumer',
        nickname: user.nickname,
        message: $event,
        messageType: 'text',
      })" @image="send('message', {
        roomId,
        type: 'consumer',
        nickname: user.nickname,
        message: $event,
        messageType: 'image',
      })"
    />
  </transition>

  <!-- <dragable-box pos="fixed" :disabled="!show" :offset-x="16" :offset-y="64">
    <message :messages="messages" :show="show" />
  </dragable-box> -->

  <dragable-window
    ref="messageDragableWindowRef" title="互动消息" pos="fixed" :disabled="!show"
    :offset-x="16"
    :offset-y="64" :show="show"
  >
    <message :messages="messages" />
  </dragable-window>

  <dragable-window
    ref="consumerDragableWindowRef" :title="`观察者(${consumers.length})`" pos="fixed" :disabled="!show"
    x-align="right"
    :offset-x="16" :offset-y="64" :show="show"
  >
    <consumer
      :consumers="consumers" @sync="currentTime = playerRef!.videoRef!.currentTime = $event.currentTime, send('message', {
        roomId,
        type: 'system',
        // message: `${user.nickname} 同步到了 ${$event.nickname} 的时间 ${timeFormat($event.currentTime, 'MM:ss')}`,
        message: `${user.nickname} 对齐了 ${$event.nickname} 的时间颗粒度 ${timeFormat($event.currentTime, 'MM:ss')}`,
      })"
    />
  </dragable-window>
</template>

<!-- <style scoped>
::-webkit-scrollbar {
  display: none;
}
</style> -->
