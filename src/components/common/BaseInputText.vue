<template>
  <div class="relative" :class="{ 'h-[36px]': sm }">
    <InputText
      :placeholder="placeholder"
      :id="id"
      :pt="{
        wrapper: {
          class: 'rounded-main p-2 !max-h-none drop-shadow-main bg-sec mt-4 '
        },
        input: {
          class: 'focus-visible:outline-0'
        }
      }"
      class="bg-[#f6f6f6] w-full focus-visible:outline-none h-full px-4 py-2 rounded-main placeholder:text-sm placeholder:text-main/50 pt-5"
      :class="readonly ? 'cursor-pointer' : ''"
      type="text"
      v-model="value"
      :readonly="readonly"
    />
    <label :for="id" class="text-xs absolute left-4" :class="{ 'top-1': sm }">{{ label }}</label>
  </div>
</template>

<script setup>
import InputText from 'primevue/inputtext';
defineProps(['label', 'readonly', 'id', 'placeholder', 'sm']);
const value = defineModel();
</script>
