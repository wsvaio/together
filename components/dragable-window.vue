<script setup lang="ts">
import { useEventListener } from "@vueuse/core";

const { disabled, xAlign = "left", show, title } = defineProps<{
  show?: boolean;
  title: string;
  disabled?: boolean;
  xAlign?: "left" | "right";
}>();

const divRef = $ref<HTMLDivElement>();
const overflowDivRef = $ref<HTMLDivElement>();

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
  load.startX = clientX - x;
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

defineExpose({
  scrollToBottom() {
    overflowDivRef?.scrollTo({
      behavior: "smooth",
      top: overflowDivRef?.scrollHeight,
    });
  }
});
</script>

<template>
  <div
    ref="divRef" min="w-8em h-8em" max="h-50dvmin w-50dvmin" w="max"
    text="white 12px" overflow="auto" flex="~ col" :style="{
      [xAlign]: `${x}px`,
      top: `${y}px`,
      boxShadow: show ? '0 0 0 1px rgba(255,255,255)' : undefined,
      filter: show ? 'drop-shadow(0 0 1px black)' : undefined,
      opacity: show ? 1 : 0.5,
    }"
    @pointerdown.prevent.stop="handleMoveStart" @touchstart.prevent.stop="handleMoveStart"
  >
    <div
      p=".5em" flex="~" items="center" justify="between"
      :style="{
        borderBottom: show ? '1px solid rgba(255,255,255)' : '1px solid rgba(255,255,255,0.5)',
      }"
    >
      <strong>{{ title }}</strong>
      <div v-show="show" class="i-tabler:arrows-move" />
    </div>
    <div
      ref="overflowDivRef"
      p=".5em" flex="1 ~ col" gap="1em" overflow="auto"
      @pointerdown.stop=""
      @touchstart.stop=""
    >
      <slot />
    </div>
  </div>
</template>
