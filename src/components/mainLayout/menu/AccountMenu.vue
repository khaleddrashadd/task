<template>
  <BaseCard class="min-w-[252px]">
    <MenuItem class=" border-b-[0.5px] border-b-main/10"
      title="Profile Settings"
      :icon="settingIcon"
      @click="() => console.log('profile settings')"
    />
    <MenuItem
      title="العربية"
      :icon="translateIcon"
      @click="() => console.log('profile settings')"
    />
    <div class="flex items-center gap-3 px-1 pt-1">
      <BaseButton :outline="true" label="Logout" @click="() => console.log('logout')" />
    </div>
  </BaseCard>
</template>

<script setup>
import BaseButton from '@/components/common/BaseButton.vue';
import MenuItem from '@/components/mainLayout/menu/MenuItem.vue';
import settingIcon from '@/assets/icons/setting.svg';
import translateIcon from '@/assets/icons/translate.svg';
import BaseCard from '@/components/common/BaseCard.vue';
</script>
