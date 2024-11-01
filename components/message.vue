<script setup lang="ts">
const { messages = [] } = defineProps<{
  messages?: Record<any, any>[];
}>();

const user = useUserStore();
</script>

<template>
  <div v-for="item in messages" lh="[1]">
    <!-- <div>{{ item.nickname }}：</div> -->
    <div v-if="item.type === 'system'" break="all" text="center">
      <small text="[rgba(255,255,255,0.66)]">{{ item.message }}</small>
    </div>
    <!-- <div v-if="item.type === 'consumer'" grid="~ cols-[max-content_1fr] rows-[max-content_1fr]" gap=".25em">
      <van-image
        grid="row-span-full" :src="item.consumer.avatar" rounded="1" overflow="hidden"
        aspect-ratio="[1/1]"
        w="2.5em"
      />

      <small>{{ item.consumer.nickname }}</small>

      <div
        rounded="1 tl-.5"
        justify="self-start" overflow="hidden"
      >
        <img
          v-if="item.messageType == 'image'" align="top" :src="item.message"
          fit="contain"
        />
        <div
          v-else break="all" p=".25em" bg="white"
          text="black"
        >
          {{ `${item.message}` }}
        </div>
      </div>
    </div> -->
    <div
      v-if="item.type === 'consumer'" grid="~ cols-[max-content_1fr] rows-[max-content_1fr]" gap=".25em" :style="{
        direction: item.consumer.nickname == user.nickname ? 'rtl' : 'ltr',
      }"
    >
      <van-image
        grid="row-span-full" :src="item.consumer.avatar" rounded="1" overflow="hidden"
        aspect-ratio="[1/1]"
        w="2.5em" fit="cover"
      />

      <small>{{ item.consumer.nickname }}</small>

      <div
        justify="self-start" overflow="hidden" :style="{
          borderRadius: item.consumer.nickname == user.nickname ? '.25em .125em .25em .25em' : '.125em .25em .25em .25em',
        }"
      >
        <img
          v-if="item.messageType == 'image'" w="full" align="top" :src="item.message"
          fit="contain"
        />
        <div
          v-else break="all" p=".25em" bg="white"
          text="black" style="direction: ltr;"
        >
          {{ item.message || '&nbsp;' }}
        </div>
      </div>
    </div>
  </div>
</template>
