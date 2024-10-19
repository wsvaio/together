<script setup lang="ts">
import { sleep } from "@wsvaio/utils";

const divRef = $ref<HTMLDivElement>();

const chats = reactive<{
  content: string;
  type?: string;
  duration: number;
  timestamp: number;
  row: number;
}[]>([]);

async function bullet(chat: string, type?: "string") {
  const duration = (divRef?.clientWidth || screen.width) / ((Math.random() * 50 - 25) + 75);
  const timestamp = new Date().getTime();

  const r = async (row = Math.floor(Math.random() * 5)) => {
    if (chats.filter(item => item.row == row).every(item => item.timestamp + item.duration * 1000 < duration * 1000 + timestamp)) {
      return row;
    }
    else {
      await sleep(100);
      return await r();
    }
  };
  const row = await r();

  const item = {
    content: chat,
    duration,
    timestamp,
    type,
    row,
  };
  chats.push(item);

  setTimeout(() => {
    chats.splice(chats.indexOf(item), 1);
  }, duration * 1000);
}

defineExpose({
  bullet,
});
</script>

<template>
  <div ref="divRef" text="white" class="bullet-chat">
    <div
      v-for="item in chats" :key="item.timestamp" :style="{
        '--duration': `${item.duration}s`,
        'top': `${item.row * 1.5 + 0.5}em`,
      }"
      class="chat"
    >
      <!-- <div>{{ item.nickname }}：</div> -->
      <span v-if="item.type != 'image'">{{ item.content }}</span>
      <img v-else :src="item.content" max="h-16dvmin w-16dvmin" />
    </div>
  </div>
</template>

<style lang="less" scoped>
.bullet-chat {
  position: relative;

  .chat {
    --duration: 5s;
    position: absolute;
    animation: bullet var(--duration) linear 0s 1 both;
    white-space: nowrap;
    text-shadow: 0 0 1px black;
    @keyframes bullet {
      0% {
        left: 100%;
      }

      100% {
        left: 0%;
        transform: translateX(-100%);
      }
    }
  }
}
</style>
