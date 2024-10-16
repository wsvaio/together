<script setup lang="ts">
import { timeFormat } from "@wsvaio/utils";

defineProps<{
  duration?: number;
  isPlay?: boolean;
}>();
defineEmits(["play", "pause", "message", "sync", "change"]);

let isPinterDown = $ref(false);

const currentTime = defineModel<number>("currentTime");
let currTime = $ref(currentTime.value);
watch(() => currentTime.value, () => {
  if (isPinterDown)
    return;
  currTime = currentTime.value;
});
const message = $ref("");

useEventListener(window, "pointerup", () => {
  isPinterDown = false;
});
</script>

<template>
  <div
    text="white"
    flex="~ col"
    gap="1em"
    pos="fixed"
    bottom="0"
    right="0"
    left="0"
    p="1em"
    style="background: linear-gradient(rgba(0, 0, 0, 0), black)"
  >
    <div>
      {{ timeFormat(currTime, "MM:ss") }}/{{
        timeFormat(duration, "MM:ss")
      }}
    </div>

    <van-slider
      v-model="currTime"
      :button-size="12"
      :min="0"
      :max="duration"
      @change="$emit('change', $event)"
      @pointerdown="isPinterDown = true"
    />
    <div flex="~" gap="1em" items="center">
      <div
        v-if="!isPlay"
        class="i-material-symbols:play-arrow-rounded"
        text="32px"
        @click="$emit('play')"
      />
      <div
        v-else
        class="i-material-symbols:pause-rounded"
        text="32px"
        @click="$emit('pause')"
      />

      <van-field
        v-model="message"
        placeholder="发个消息吧～"
        flex="1"
        rounded="full"
        p="!y-0.5em !x-1em"
        text="!12px"
        lh="![1]"
        enterkeyhint="send"
        @keypress.enter="
          $emit('message', message),
          (message = '')
        "
      />
      <div
        class="i-material-symbols-light:sync"
        text="32px"
        @click="
          $emit('sync')
        "
      />
    </div>
  </div>
</template>
