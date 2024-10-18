<script setup lang="ts">
import { timeFormat } from "@wsvaio/utils";

defineProps<{
  consumers?: Record<any, any>[];
}>();
defineEmits(["sync"]);
</script>

<template>
  <div grid="~ cols-[1fr_max-content]" items="center" gap=".5em">
    <template v-for="item in consumers">
      <!-- <van-image
        :src="item.avatar" round width="2em" height="2em"
        fit="cover"
      /> -->

      <div>
        <div>
          <span break="all">{{ item.nickname }}</span>
        </div>

        <div>
          <small>{{ item.status }}</small>
          <small>({{ timeFormat(+item.currentTime, "MM:ss") }} )</small>
        </div>
      </div>

      <!-- <div>{{ timeFormat(+item.currentTime, "MM:ss") }}</div> -->

      <!-- <div class="i-material-symbols-light:sync" text="24px" m="-.08em" @click="$emit('sync', item)" /> -->
      <refresh-icon-btn text="24px" m="-.08em" @click="$emit('sync', item)" />
      <!-- <van-image round width="2em" height="2em" fit="cover" /> -->
    </template>
  </div>
</template>
