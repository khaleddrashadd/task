<template>
  <div class="flex justify-between mb-2" :="$attrs">
    <span class="text-sm">{{ title }}</span>
    <span class="text-sm">{{ currency }} {{ price }}</span>
  </div>
</template>

<script setup>
defineProps(['title', 'currency', 'price']);
defineOptions({
  inheritAttrs: false
});
</script>
