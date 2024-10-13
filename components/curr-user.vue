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
    min="w-8em h-8em" w="max" box="border"
    text="white 12px" :style="{
    }" grid="~ cols-[max-content_max-content] auto-rows-max" gap=".25em"
    style="text-shadow: 0 0 1px black;"
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
