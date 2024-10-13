<script setup lang="ts">
defineProps<{
  src?: string;
}>();
defineEmits(["timeupdate"]);
const videoRef = $ref<HTMLVideoElement>();

const duration = $ref(0);
const isPlay = $ref(false);

defineExpose({
  duration: $$(duration),
  isPlay: $$(isPlay),
  videoRef: $$(videoRef),
});
</script>

<template>
  <video
    ref="videoRef"
    pos="fixed"
    top="0"
    w="100dvw"
    h="100dvh"
    bg="black"
    :src="src"
    preload="metadata"
    webkit-playsinline="true"
    playsinline="true"
    x5-video-player-type="h5-page"
    @timeupdate="$emit('timeupdate', $event)"
    @durationchange="() => duration = videoRef!.duration"
    @play="isPlay = true"
    @pause="isPlay = false"
    @ended="isPlay = false"
  />
</template>
