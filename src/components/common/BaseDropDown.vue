<template>
  <Dropdown
  @hide="$emit('closeDropdown')"
    :placeholder="placeholder"
    class="bg-[#f6f6f6] px-4 py-2 rounded-main flex items-center justify-between"
    :class="invalid ? 'border-2 border-red-500' : 'border-0'"
    :options="options"
    v-model="selectedRideType"
    :id="id"
    :pt="{
      wrapper: {
        class: 'rounded-main p-2 !max-h-none drop-shadow-main bg-sec mt-4 '
      },
      input: {
        class: 'focus-visible:outline-0'
      }
    }"
  >
    <template #value="slotProps">
      <label :for="id" class="text-xs">{{ label }}</label>
      <div v-if="!selectedRideType" class="text-sm text-main/50">{{ slotProps.placeholder }}</div>
      <div v-else class="text-sm text-main font-bold">{{ slotProps.value.name }}</div>
      <div v-if="selectedRideType && slotProps.value.subtitle" class="text-xs text-[#494949]">
        {{ slotProps.value.subtitle }}
      </div>
    </template>
    <template #option="slotProps">
      <BaseCard class="filter-none cursor-pointer hover:bg-main hover:text-sec duration-300">
        {{ slotProps.option.name }}
      </BaseCard>
    </template>
  </Dropdown>
</template>

<script setup>
import Dropdown from 'primevue/dropdown';
import BaseCard from './BaseCard.vue';
defineProps(['label', 'id', 'options', 'placeholder','invalid']);
defineEmits(['closeDropdown']);
const selectedRideType = defineModel();
</script>

<style lang="scss" scoped></style>
