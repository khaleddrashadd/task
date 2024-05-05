<template>
  <div @click="$emit('handleScroll',direction)" class="cursor-pointer">
    <img :src="icon" alt="icon" />
  </div>
</template>

<script setup>
defineProps(['handleScroll', 'direction', 'icon']);
</script>

<style lang="scss" scoped></style>
