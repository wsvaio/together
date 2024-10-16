<script setup lang="ts">
import { useEventListener } from "@vueuse/core";

const { disabled, xAlign = "left" } = defineProps<{
  disabled?: boolean;
  xAlign?: "left" | "right";
}>();

const divRef = $ref<HTMLDivElement>();

let x = $(defineModel<number>("offsetX", { default: 0 }));
let y = $(defineModel<number>("offsetY", { default: 0 }));

const load = reactive({
  isMove: false,
  startX: 0,
  startY: 0,
});

function handleMoveStart(ev: TouchEvent | PointerEvent) {
  if (disabled)
    return;
  let clientX = 0;
  let clientY = 0;

  if (ev instanceof PointerEvent) {
    clientX = xAlign == "left" ? ev.clientX : (document.documentElement.clientWidth - ev.clientX);
    clientY = ev.clientY;
  }
  else {
    const touch = ev.touches.item(ev.touches.length - 1)!;
    clientX = xAlign == "left" ? touch!.clientX : (document.documentElement.clientWidth - touch!.clientX);
    clientY = touch!.clientY;
  }
  load.isMove = true;
  load.startX = (document.documentElement.clientWidth - clientX) - x;
  load.startY = clientY - y;
}
useEventListener(window, ["pointermove", "touchmove"], ev => {
  if (!load.isMove)
    return;
  let clientX = 0;
  let clientY = 0;
  if (ev instanceof PointerEvent) {
    clientX = xAlign == "left" ? ev.clientX : (document.documentElement.clientWidth - ev.clientX);
    clientY = ev.clientY;
  }
  else {
    const touch = ev.touches.item(ev.touches.length - 1)!;
    clientX = xAlign == "left" ? touch!.clientX : (document.documentElement.clientWidth - touch!.clientX);
    clientY = touch!.clientY;
  }
  x = -load.startX + clientX;
  y = -load.startY + clientY;
}, { capture: true });

useEventListener(window, ["touchend", "pointerup"], _ev => {
  load.isMove = false;
}, { capture: true });
</script>

<template>
  <div
    ref="divRef" :style="{
      [xAlign]: `${x}px`,
      top: `${y}px`,
    }" @pointerdown.prevent.stop="handleMoveStart" @touchstart.prevent.stop="handleMoveStart"
  >
    <slot />
  </div>
</template>
