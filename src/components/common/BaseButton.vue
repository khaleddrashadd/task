<template>
  <Button
    class="w-full disabled:cursor-not-allowed disabled:bg-main/5 disabled:text-main/20"
    :pt="pt"
    :="$attrs"
  />
</template>

<script setup>
import Button from 'primevue/button';
import { toRefs } from 'vue';

defineOptions({
  inheritAttrs: false
});

const props = defineProps({
  outline: Boolean
});
const { outline } = toRefs(props);

const pt = {
  root: {
    class: outline.value
      ? 'cursor-pointer bg-transparent border-2 border-main hover:bg-main hover:text-sec duration-300 text-main rounded-main flex items-center justify-center px-4 py-3 w-full'
      : 'cursor-pointer bg-main text-sec duration-300 text-main rounded-main flex items-center justify-center px-4 py-3 w-full'
  }
};
</script>
