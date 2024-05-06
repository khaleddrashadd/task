<template>
  <div class="relative">
    <DatePicker v-model="date" :="$attrs">
      <template #default="{ togglePopover }">
        <BaseInputText
          label="Trip Date"
          placeholder="Pickup Date"
          class="border-r-2 h-[38px] peer-focus-visible:border-main"
          readonly
          sm
          :modelValue="formattedDate"
          @click.stop="togglePopover"
        />
        <div
          v-if="icon"
          class="flex items-center justify-center w-[18px] h-[18px] absolute right-3 top-1/2 -translate-y-1/2"
        >
          <img class="w-full h-full" :src="icon" alt="icon" />
        </div>
      </template>
    </DatePicker>
  </div>
</template>

<script setup>
import BaseInputText from '@/components/common/BaseInputText.vue';
import { DatePicker } from 'v-calendar';
import { computed } from 'vue';
defineOptions({
  inheritAttrs: false
});

defineProps(['modelValue', 'icon']);

const date = defineModel();

const formattedDate = computed(() => {
  if (!date.value) return '';
  return new Intl.DateTimeFormat('en-UK', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  }).format(date.value);
});
</script>
