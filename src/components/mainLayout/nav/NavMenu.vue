<template>
  <BaseCard class="min-w-[252px]">
    <MenuItem
      class="border-b-[0.5px] border-b-main/10"
      title="Company Profile"
      @click="() => $router.push('/company-profile')"
    />
    <MenuItem
      class="border-b-[0.5px] border-b-main/10"
      title="Book a Ride"
      @click="() => $router.push('/')"
    />
    <MenuItem title="Rides" @click="() => $router.push('/rides')" />
  </BaseCard>
</template>

<script setup>
import BaseCard from '@/components/common/BaseCard.vue';
import MenuItem from '@/components/mainLayout/menu/MenuItem.vue';
</script>

<style lang="scss" scoped></style>
