<script setup lang="ts">
import { timeFormat } from "@wsvaio/utils";

defineProps<{
  duration?: number;
  isPlay?: boolean;
}>();
defineEmits(["play", "pause", "message", "sync", "changeCurrentTime", "changePlaybackRate", "image", "emoticon"]);
let isPinterDown = $ref(false);

const currentTime = $(defineModel("currentTime", { default: 0 }));
const playbackRate = $(defineModel("playbackRate", { default: 1 }));
let currTime = $ref(currentTime);
watch(() => currentTime, () => {
  if (isPinterDown)
    return;
  currTime = currentTime;
});
const message = $ref("");

useEventListener(window, "pointerup", () => {
  isPinterDown = false;
});

const { isFullscreen, toggle, isSupported } = useFullscreen();

defineExpose({
  isSupported,

});
</script>

<template>
  <!-- <div v-if="!isSupported" style="height: 800dvh" /> -->

  <div
    text="white" flex="~ col" gap="1em" pos="fixed"
    bottom="0" right="0" left="0" p="1em"
    style="background: linear-gradient(rgba(0, 0, 0, 0), black)"
  >
    <div flex="~" justify="between">
      <span>{{ `${timeFormat(currTime, "MM:ss")}/${timeFormat(duration, "MM:ss")}` }}</span>

      <van-popover
        :actions="[
          // { text: '4x', value: 4 },
          // { text: '3x', value: 3 },
          // { text: '2.25x', value: 2.25 },
          { text: '2x', value: 2 },
          { text: '1.75x', value: 1.75 },
          { text: '1.5x', value: 1.5 },
          { text: '1.25x', value: 1.25 },
          { text: '1x', value: 1 },
          { text: '0.75x', value: 0.75 },
          { text: '0.5x', value: 0.5 },
          { text: '0.25x', value: 0.25 },
        ]" placement="left-end" @select="$emit('changePlaybackRate', playbackRate = $event.value)"
      >
        <template #reference>
          <span cursor="pointer">{{ `${playbackRate}x` }}</span>
        </template>
      </van-popover>
    </div>

    <van-slider
      v-model="currTime" :button-size="12" :min="0" :max="duration"
      @change="$emit('changeCurrentTime', currentTime = $event)" @pointerdown="isPinterDown = true"
    />
    <div flex="~" gap="1em" items="center">
      <div v-if="!isPlay" class="i-material-symbols:play-arrow-rounded" text="32px" @click="$emit('play', currTime)" />
      <div v-else class="i-material-symbols:pause-rounded" text="32px" @click="$emit('pause')" />

      <refresh-icon-btn
        text="32px" @click="
          $emit('sync')
        "
      />

      <van-field
        v-model="message" placeholder="发个消息吧～" flex="1" rounded="full"
        p="!y-0.5em !x-1em" text="!12px"
        lh="![1]" enterkeyhint="send" @keypress.enter="
          $emit('message', message),
          (message = '')
        "
      />
      <div class="i-mdi:emoticon-happy-outline" text="32px" @click="$emit('emoticon')" />

      <div class="i-lucide:image-up" text="32px" @click="$emit('image')" />

      <div v-if="isSupported" @click="toggle">
        <div v-if="!isFullscreen" class="i-bx:fullscreen" text="32px" />
        <div v-else class="i-bx:exit-fullscreen" text="32px" />
      </div>
    </div>
  </div>
</template>
