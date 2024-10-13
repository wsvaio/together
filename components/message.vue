<script setup lang="ts">
const { show, messages = [] } = defineProps<{
  show?: boolean;
  messages?: { nickname: string; message: string; timestamp: number }[];
}>();
</script>

<template>
  <div
    min="w-8em h-8em" w="max" box="border" p=".5em"
    text="white 12px"
    flex="~ col" gap=".25em" :style="{
      boxShadow: show ? '0 0 0 1px rgba(255,255,255)' : undefined,
      color: show ? 'rgba(255,255,255)' : 'rgba(255,255,255,0.5)',
      textShadow: show ? '0 0 1px black' : undefined,
    }"
  >
    <div v-for="item in messages" pointer-events="none">
      <!-- <div>{{ item.nickname }}：</div> -->
      <div>{{ `${item.nickname}：${item.message}` }}</div>
    </div>
  </div>
</template>
