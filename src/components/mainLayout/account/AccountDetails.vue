<template>
  <div class="hidden lg:flex">
    <div class="text-sec flex flex-col items-end pr-6 border-r-[0.5px] border-r-white/30">
      <span class="text-xs">Balance</span>
      <span>50,600.0 SAR</span>
    </div>
    <div class="pl-6 cursor-pointer">
      <SplitButton
        :pt="{
          button: {
            root: {
              style: 'display:none'
            }
          },
          menu: {
            root: {
              class: 'p-3'
            }
          }
        }"
        icon="pi pi-check"
        menuButtonIcon="pi pi-cog"
        :model="[1]"
      >
        <template #menubuttonicon>
          <AccountInfo />
        </template>
        <template #item>
          <AccountMenu />
        </template>
      </SplitButton>
    </div>
  </div>
</template>

<script setup>
import SplitButton from 'primevue/splitbutton';
import AccountInfo from '@/components/mainLayout/account/AccountInfo.vue';
import AccountMenu from '@/components/mainLayout/menu/AccountMenu.vue';
</script>

<style lang="scss" scoped></style>
