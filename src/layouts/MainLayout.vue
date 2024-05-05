<template>
  <header class="fixed z-40 w-full bg-main left-0 top-0 py-3 lg:px-12 px-4">
    <div class="flex items-center justify-between">
      <TheNav />
      <div>
        <AccountDetails />
      </div>
    </div>
  </header>
  <div>
    <RouterView />
  </div>
</template>

<script setup>
import AccountDetails from '@/components/mainLayout/account/AccountDetails.vue';
import TheNav from '@/components/mainLayout/nav/TheNav.vue';
</script>
