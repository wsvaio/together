<script setup lang="ts">
import { timeFormat } from "@wsvaio/utils";

defineProps<{
  show?: boolean;
  users?: {
    nickname: "";
    currentTime: string;
  }[];
}>();
</script>

<template>
  <div
    min="w-8em h-8em" w="max" box="border" text="white 12px"
    grid="~ cols-[max-content_max-content] auto-rows-max" p=".5em"
    gap=".25em" :style="{
      boxShadow: show ? '0 0 0 1px rgba(255,255,255)' : undefined,
      color: show ? 'rgba(255,255,255)' : 'rgba(255,255,255,0.5)',
      textShadow: show ? '0 0 1px black' : undefined,
    }"
  >
    <template v-for="item in users">
      <div>
        {{ item.nickname }}
      </div>
      <div>
        ({{ timeFormat(+item.currentTime, "MM:ss") }})
      </div>
    </template>
  </div>
</template>
