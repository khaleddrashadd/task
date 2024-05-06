<template>
  <div class="flex items-center">
    <Checkbox
      :="$attrs"
      :binary="isBinary"
      :pt="{
        root: {
          class: `flex items-center justify-center rounded-main ${invalid?'border border-red-500':''}`
        },
        input: {
          class:
            `'rounded-main p-2 cursor-pointer w-[22px] h-[22px] outline-0 border-0 accent-main appearance-none checked:appearance-auto bg-[#F1F1F1] ${invalid?'bg-red-500/10':''}`
        },
        box: { class: 'hidden' }
      }"
      v-model="isSelected"
      :inputId="id"
    />
    <label :for="id" class="mx-2 text-sm cursor-pointer">{{ label }}</label>
  </div>
</template>

<script setup>
import Checkbox from 'primevue/checkbox';
defineOptions({
  inheritAttrs: false
});
defineProps(['label', 'id', 'isBinary','invalid']);

const isSelected = defineModel();
</script>

<style lang="scss" scoped></style>
