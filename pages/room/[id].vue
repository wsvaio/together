<script setup lang="ts">
import { compressPicture, filePicker, readAs, sleep, timeFormat } from "@wsvaio/utils";
import type BulletChat from "~/components/bullet-chat.vue";
import type Control from "~/components/control.vue";
import type DragableWindow from "~/components/dragable-window.vue";
import type Player from "~/components/player.vue";
import type Upload from "~/components/upload.vue";

definePageMeta({
  middleware: defineNuxtRouteMiddleware(async to => {
    const id = to.params.id;
    const r: Record<any, any> = await $fetch(`/api/room/${id}`);
    if (!r) {
      return navigateTo("/room/invalid");
    }
    to.params.name = r.name;
  })
});

const route = useRoute();
const roomId = route.params.id;
const roomName = route.params.name;
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
const showEmotion = $ref(false);
// watch(messages, () => {
//   messages.length > 10 && (messages.splice(0, messages.length - 10));
// });
let consumers = $ref<Record<any, any>[]>([]);

const { on, send } = usePlayWs();

on("connected", () => {
  send("in", {
    nickname: user.nickname,
    avatar: user.avatar,
    roomId,
  });
});

on("append:message", async data => {
  messages.push(data);
  bulletChatRef?.bullet(data.message, data.messageType);

  if (data.messageType == "image") {
    await sleep(300);
  }
  await nextTick();

  messageDragableWindowRef?.scrollToBottom();
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
async function handleSendImage(file?: File) {
  if (!file)
    return;
  file = await compressPicture(file, { width: 256, height: 256 });
  const baseUrl: string = await readAs("DataURL", file);
  send("message", {
    roomId,
    type: "consumer",
    nickname: user.nickname,
    message: baseUrl,
    messageType: "image",
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
  <bullet-chat ref="bulletChatRef" pos="!fixed" inset="0" pointer-events="none" />

  <upload
    v-show="!uploadRef?.file" ref="uploadRef" v-model="src" @update:model-value="send('update:consumer', {
      roomId,
      nickname: user.nickname,
      status: '已就绪',
    })"
  />

  <transition name="fade">
    <control-header v-show="show" :title="roomName as string" :filename="uploadRef?.file?.name" @close="handleClose" />
  </transition>

  <transition name="fade">
    <control
      v-show="show" ref="controlRef" :duration="playerRef?.duration"
      :is-play="playerRef?.isPlay"
      :current-time="currentTime" @play="playerRef?.videoRef?.play?.(), playerRef!.videoRef!.currentTime = $event" @pause="playerRef?.videoRef?.pause?.()"
      @change="val => playerRef?.videoRef?.currentTime && (playerRef.videoRef.currentTime = currentTime = val)"
      @sync="send('sync', { roomId, currentTime, nickname: user.nickname })" @message="send('message', {
        roomId,
        type: 'consumer',
        nickname: user.nickname,
        message: $event,
        messageType: 'text',
      })"
      @image="filePicker({
        accept: 'image/*',
        onchange: (ev: any) => handleSendImage(ev?.target?.files?.[0]),
      })"
      @emoticon="showEmotion = true"
    />
  </transition>

  <dragable-window
    ref="messageDragableWindowRef" :title="`互动消息(${messages.length})`" pos="fixed" :disabled="!show"
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

  <emoticon
    v-model="showEmotion" @image="send('message', {
      roomId,
      type: 'consumer',
      nickname: user.nickname,
      message: $event,
      messageType: 'image',
    })"
  />

  <!-- <dragable-box pos="fixed" :disabled="!show" :offset-x="16" :offset-y="64">
    <message :messages="messages" :show="show" />
  </dragable-box> -->
</template>

<!-- <style scoped>
::-webkit-scrollbar {
  display: none;
}
</style> -->
