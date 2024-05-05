<template>
  <li
    class="w-[200px] h-[235px] flex-shrink-0 rounded-main p-3"
    :class="selectedCar == id ? 'border-main border-2' : 'border-[#B9B9B9] border'"
    @click="() => $emit('selectCar', id)"
  >
    <div class="w-[176px] h-[80px]">
      <img class="h-full w-full" :src="car" alt="" />
    </div>
    <BaseTitle>
      <template #xs>{{ title }}</template>
    </BaseTitle>
    <p class="text-sm">{{ carName }}</p>
    <div class="flex items-center gap-5 mt-2">
      <div class="flex items-center gap-2">
        <span>
          <img :src="peopleIcon" alt="icon" />
        </span>
        <span class="text-sm">{{ userNum }}</span>
      </div>
      <div class="flex items-center gap-2">
        <span>
          <img :src="bagIcon" alt="icon" />
        </span>
        <span class="text-sm">x{{ bookNum }}</span>
      </div>
    </div>
    <div class="flex items-center gap-3 mt-7">
      <span class="font-bold text-base">{{ currency }}</span>
      <span class="font-bold text-base">{{ carPrice }}</span>
    </div>
  </li>
</template>

<script setup>
import peopleIcon from '@/assets/icons/peopleIcon.svg';
import bagIcon from '@/assets/icons/bagIcon.svg';
import BaseTitle from '@/components/common/BaseTitle.vue';

defineProps([
  'title',
  'carName',
  'userNum',
  'bookNum',
  'currency',
  'carPrice',
  'car',
  'id',
  'selectedCar'
]);
</script>
