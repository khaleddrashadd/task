<template>
  <div class="relative">
    <Textarea
      v-model="value"
      :pt="{
        root: {
          class: 'resize-none py-3 px-4 text-sm pt-6 bg-[#f6f6f6] rounded-main'
        }
      }"
      autoResize
      :placeholder
      :rows="rows ? rows : 5"
      :cols="cols ? cols : 30"
      class="w-full mt-3"
      id="text"
    />
    <label for="text" class="text-xs absolute left-4 top-4">{{ label }}</label>
  </div>
</template>

<script setup>
import Textarea from 'primevue/textarea';
defineProps(['placeholder', 'rows', 'cols', 'id', 'label']);
const value = defineModel();
</script>
