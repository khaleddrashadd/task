<template>
  <div class="flex items-center gap-6 xl:gap-16">
    <div class="flex gap-3">
      <div class="w-[38px] aspect-square">
        <img :src="userImg" alt="ptofile image" />
      </div>
      <div class="flex flex-col items-start text-sec">
        <span class="leading-5">Khuzimah A.</span>
        <span class="text-xs">Cabrio Co.</span>
      </div>
    </div>
    <div class="h-3 aspect-square px-[2.5px]">
      <img src="@/assets/icons/arrowDown.svg" alt="menu icon" />
    </div>
  </div>
</template>

<script setup>
import userImg from '@/assets/img/userImg.svg';
</script>

<style lang="scss" scoped></style>
