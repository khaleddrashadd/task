<template>
  <h3 :="$attrs" class="font-bold text-3xl mb-4" v-if="$slots.default">
    <slot />
  </h3>
  <h3 :="$attrs" class="font-bold text-base" v-if="$slots.xs">
    <slot name='xs' />
  </h3>
  <h3 :="$attrs" class="font-bold text-xl" v-if="$slots.sm">
    <slot name='sm' />
  </h3>

</template>

<script setup>
defineOptions({
  inheritAttrs: false,
})
</script>
