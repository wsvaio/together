<script setup lang="ts">
defineProps<{
  src?: string;
}>();
defineEmits(["timeupdate", "play", "pause", "ended", "error", "ratechange"]);
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
    preload="auto"
    webkit-playsinline="true"
    playsinline="true"
    x5-video-player-type="h5-page"
    @timeupdate="$emit('timeupdate', $event)"
    @ratechange="$emit('ratechange', $event)"
    @durationchange="() => duration = videoRef!.duration"
    @play="isPlay = true, $emit('play', $event)"
    @pause="isPlay = false, $emit('pause', $event)"
    @ended="isPlay = false, $emit('ended', $event)"
    @error="(ev) => src && $emit('error', ev)"
  />
</template>
