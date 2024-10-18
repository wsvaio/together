<script setup lang="ts">
import { timeFormat } from "@wsvaio/utils";

defineProps<{
  duration?: number;
  isPlay?: boolean;
}>();
defineEmits(["play", "pause", "message", "sync", "change", "image"]);

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

const { isFullscreen, toggle, isSupported } = useFullscreen();

const show = $ref(false);
let q = $ref("");
let first = $ref(1);

const datalist = reactive<any[]>([]);
let { data, execute, status } = $(useAsyncData(async () => await $fetch(`/api/search?q=${q}&first=${first}`), {
  immediate: false,
}));
// const noMore = computed(() => !data?.length);
async function loadmore() {
  first = datalist.length;
  await execute();
  if (!data)
    return;
  datalist.push(...data);
}
async function reload() {
  first = 1;
  await execute();
  datalist.length = 0;
  if (!data)
    return;
  datalist.push(...data);
}
async function reset() {
  q = "";
  first = 1;
  datalist.length = 0;
  data = undefined;
}

defineExpose({
  isSupported
});
</script>

<template>
  <!-- <div v-if="!isSupported" style="height: 800dvh" /> -->

  <div
    text="white" flex="~ col" gap="1em" pos="fixed"
    bottom="0" right="0" left="0" p="1em"
    style="background: linear-gradient(rgba(0, 0, 0, 0), black)"
  >
    <div>
      {{ timeFormat(currTime, "MM:ss") }}/{{
        timeFormat(duration, "MM:ss")
      }}
    </div>

    <van-popup
      v-model:show="show" position="bottom" round z="100"
      @closed="reset()" @open="reload"
    >
      <van-field
        v-model="q" grid="col-span-full" placeholder="搜索" enterkeyhint="search"
        z="100" @keypress.enter="
          reload()
        "
      />

      <van-list
        h="50dvh" :loading="status == 'pending'" overflow="auto"
        p="1em" @load="loadmore()"
      >
        <div grid="~ cols-[repeat(auto-fit,minmax(16dvmin,1fr))] auto-rows-max" gap="1em">
          <van-image
            v-for="item in datalist" :key="item" :src="item" fit="cover"
            aspect-ratio="1/1"
            @click="$emit('image', item), show = false"
          />
        </div>
        <!-- <van-empty v-else description="暂无图片" /> -->
      </van-list>
    </van-popup>

    <van-slider
      v-model="currTime" :button-size="12" :min="0" :max="duration"
      @change="$emit('change', $event)"
      @pointerdown="isPinterDown = true"
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
      <div
        class="i-mdi:emoticon-happy-outline" text="32px" @click="
          show = true
        "
      />

      <div v-if="isSupported" @click="toggle">
        <div v-if="!isFullscreen" class="i-bx:fullscreen" text="32px" />
        <div v-else class="i-bx:exit-fullscreen" text="32px" />
      </div>
    </div>
  </div>
</template>
