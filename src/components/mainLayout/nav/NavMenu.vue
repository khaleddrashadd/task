<template>
  <BaseCard class="min-w-[252px]">
    <MenuItem class="border-b-[0.5px] border-b-main/10">
      <router-link to="/company-profile">Company Profile</router-link>
    </MenuItem>
    <MenuItem class="border-b-[0.5px] border-b-main/10">
      <router-link to="/">Book a Ride</router-link>
    </MenuItem>
    <MenuItem>
      <router-link to="/rides">Rides</router-link>
    </MenuItem>
  </BaseCard>
</template>

<script setup>
import BaseCard from '@/components/common/BaseCard.vue';
import MenuItem from '@/components/mainLayout/menu/MenuItem.vue';
</script>

<style lang="scss" scoped></style>
