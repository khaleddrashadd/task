<template>
  <div :="$attrs" class="cursor-pointer flex items-center gap-3 px-1 py-4">
    <div v-if="icon" class="flex items-center justify-center w-[18px] aspect-square">
      <img :src="icon" alt="icon" />
    </div>
    <span v-if="!$slots.default">{{ title }}</span>
    <div v-else><slot /></div>
  </div>
</template>

<script setup>
defineOptions({
  inheritAttrs: false
});
defineProps(['title', 'icon']);
</script>

<style lang="scss" scoped></style>
