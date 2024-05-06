<template>
  <div class="relative">
    <VueTimepicker :="$attrs" :id="id" :placeholder="placeholder" v-model="time" />
    <label :for="id" class="absolute left-4 top-0 text-xs">{{ label }}</label>
    <div v-if="icon" class="flex items-center justify-center w-[18px] h-[18px] absolute right-3 top-1/2 -translate-y-1/2">
      <img class="w-full h-full" :src="icon" alt="icon" />
    </div>
  </div>
</template>

<script setup>
import VueTimepicker from 'vue3-timepicker';

defineOptions({
  inheritAttrs: false
});
defineProps(['label', 'id', 'placeholder', 'icon']);
const time = defineModel();
</script>
