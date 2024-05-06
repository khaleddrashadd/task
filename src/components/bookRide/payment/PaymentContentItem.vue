<template>
  <div
    class="border-b border-b-main/20 flex items-center justify-between cursor-pointer"
    :class="selectedMethod === id ? 'font-bold' : ''"
  >
    <div class="flex items-center gap-4 py-5" @click="$emit('selectMethod', id)">
      <div class="w-5">
        <img class="w-full h-full" :src="icon" alt="wallet" />
      </div>
      <div>
        <span>{{ balanceType }} {{ currency }} {{ balance }}</span>
      </div>
    </div>
    <div :class="selectedMethod === id ? 'flex items-center justify-center' : 'hidden'">
      <img :src="tick" alt="selected icon" />
    </div>
  </div>
</template>

<script setup>
import tick from '@/assets/icons/tick.svg';
defineProps(['icon', 'balance', 'balanceType', 'currency', 'id', 'selectedMethod']);
</script>
