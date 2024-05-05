<template>
  <div :="$attrs" class="bg-white p-3 rounded-main mt-3 text-black drop-shadow-main">
    <slot />
  </div>
</template>

<script setup>
defineOptions({
  inheritAttrs: false
});
</script>
