<script setup lang="ts">
import { useEventListener } from "@vueuse/core";

const { disabled } = defineProps<{
  disabled?: boolean;

}>();

let x = $(defineModel<number>("offsetX", { default: 0 }));
let y = $(defineModel<number>("offsetY", { default: 0 }));

const load = reactive({
  isMove: false,
  touchStartX: 0,
  touchStartY: 0,
});

function handleTouchStart(ev: TouchEvent) {
  if (disabled)
    return;
  load.isMove = true;
  const touch = ev.touches.item(ev.touches.length - 1)!;
  load.touchStartX = touch.clientX - x;
  load.touchStartY = touch.clientY - y;
}

useEventListener(window, "touchmove", ev => {
  if (load.isMove) {
    const touch = ev.touches.item(ev.touches.length - 1)!;

    x = -load.touchStartX + touch.clientX;
    y = -load.touchStartY + touch.clientY;
  }
}, { capture: true });

useEventListener(window, "touchend", _ev => {
  load.isMove = false;
}, { capture: true });
</script>

<template>
  <div
    :style="{
      left: `${x}px`,
      top: `${y}px`,
    }" @touchstart.prevent.stop="handleTouchStart"
  >
    <slot />
  </div>
</template>
