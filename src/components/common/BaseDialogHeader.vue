<template>
  <div class="flex justify-center flex-col gap-2">
    <h4 class="font-bold text-3xl">{{title}}</h4>
    <p v-if='subtitle' class="text-sm">{{subtitle}}</p>
  </div>
</template>

<script setup>
defineProps(['title','subtitle'])
</script>
