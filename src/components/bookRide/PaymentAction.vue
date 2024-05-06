<template>
  <div class="mt-9">
    <div class="flex items-center justify-between mb-4 cursor-pointer" @click="$emit('openDialog')">
      <span class="text-sm">Payment Method</span>
      <div class="flex items-center gap-3">
        <span class="font-bold text-sm"> Balance . SAR 20,450.00 </span>
        <span>
          <img :src="arrowRight" alt="icon" />
        </span>
      </div>
    </div>
    <BaseButton
      :disabled="disabled"
      :btnType="btnType"
      label="Submit"
      class="font-bold"
      @click="
        () => {
          $emit('openPaymentDialog');
          $props.handleSubmit();
        }
      "
    />
  </div>
</template>

<script setup>
import BaseButton from '@/components/common/BaseButton.vue';
import arrowRight from '@/assets/icons/arrowRight.svg';
defineProps(['btnType', 'handleSubmit', 'disabled']);
</script>
