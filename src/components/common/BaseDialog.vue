<template>
  <Dialog
    :pt="{
      root: {
        class: 'bg-sec p-5 rounded-main drop-shadow-main'
      },
      header: {
        class: 'flex flex-col-reverse pt-1 gap-3'
      },
      closeButtonIcon: {
        class: ' font-extrabold'
      },
      mask: {
        class: 'bg-sec/70'
      }
    }"
    v-model:visible="visible"
    modal
    header="Edit Profile"
    :style="{ width: '25rem' }"
  >
    <template #header>
      <BaseDialogHeader :title="headerTitle" :subtitle="headerSubtitle" />
    </template>
    <slot />
  </Dialog>
</template>

<script setup>
import Dialog from 'primevue/dialog';
import BaseDialogHeader from '@/components/common/BaseDialogHeader.vue';

defineProps(['headerTitle', 'headerSubtitle']);
const visible = defineModel();
</script>
