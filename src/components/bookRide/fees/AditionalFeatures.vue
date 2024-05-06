<template>
  <div>
    <div class="flex items-center justify-end">
      <span class="text-sm text-[#898989] mb-4">Fees</span>
    </div>
    <div>
      <div class="flex items-center mb-[18px] justify-between">
        <BaseCheckbox
          :invalid="invalid"
          label="Name-Board"
          v-model="fees"
          id="fees1"
          name="fee"
          value="1"
        />
        <div class="flex items-center text-sm font-bold">
          <span>SAR</span>
          <span>0.0</span>
        </div>
      </div>
      <div class="flex items-center mb-[18px] justify-between">
        <BaseCheckbox
          :invalid="invalid"
          label="Child's seat"
          v-model="fees"
          id="fee2"
          name="fee"
          value="2"
        />
        <div class="flex items-center text-sm font-bold">
          <span>SAR</span>
          <span>130.0</span>
        </div>
      </div>
      <div class="flex items-center mb-[18px] justify-between">
        <BaseCheckbox
          :invalid="invalid"
          label="Altanfithi Accsess"
          v-model="fees"
          id="fee3"
          name="fee"
          value="3"
        />
        <div class="flex items-center text-sm font-bold">
          <span>SAR</span>
          <span>2,000.0</span>
        </div>
      </div>
      <div class="flex items-center justify-between">
        <BaseCheckbox
          :invalid="invalid"
          label="Additional car for luggages"
          v-model="fees"
          id="fee4"
          name="fee"
          value="4"
        />
        <div class="flex items-center text-sm font-bold">
          <span>SAR</span>
          <span>250.0</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import BaseCheckbox from '@/components/common/BaseCheckbox.vue';
defineProps(['invalid']);
const fees = defineModel();
</script>
