<script setup lang="ts">
const { messages = [] } = defineProps<{
  messages?: Record<any, any>[];
}>();
</script>

<template>
  <div v-for="item in messages">
    <!-- <div>{{ item.nickname }}：</div> -->
    <div v-if="item.type === 'system'" break="all">{{ `系统消息：${item.message}` }}</div>
    <div v-if="item.type === 'consumer'">
      <span>{{ `${item.consumer.nickname}：` }}</span>

      <img
        v-if="item.messageType == 'image'"
        align="top" :src="item.message" h="16dvmin"
        object="contain"
      />
      <span v-else break="all">{{ `${item.message}` }}</span>
    </div>
  </div>
</template>
