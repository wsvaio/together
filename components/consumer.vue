<script setup lang="ts">
import { timeFormat } from "@wsvaio/utils";

defineProps<{
  consumers?: Record<any, any>[];
}>();
defineEmits(["sync"]);

const user = useUserStore();
</script>

<template>
  <div grid="~ cols-[max-content_1fr_max-content]" items="center" gap=".5em" lh="[1]">
    <template v-for="item in consumers">
      <van-image
        :src="item.avatar" rounded="!1" overflow="hidden" width="2.5em"
        height="2.5em"
        fit="cover"
      />

      <div>
        <div break="all">
          <span>{{ item.nickname }}</span>
          <span v-if="item.nickname == user.nickname">(我)</span>
        </div>

        <small>{{ `${item.status} ${timeFormat(+item.currentTime, "MM:ss")} ${item.playbackRate}x` }}</small>
      </div>

      <!-- <div>{{ timeFormat(+item.currentTime, "MM:ss") }}</div> -->

      <!-- <div class="i-material-symbols-light:sync" text="24px" m="-.08em" @click="$emit('sync', item)" /> -->
      <refresh-icon-btn text="24px" m="-.08em" @click="$emit('sync', item)" />
      <!-- <van-image round width="2em" height="2em" fit="cover" /> -->
    </template>
  </div>
</template>
