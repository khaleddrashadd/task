<template>
  <div>
    <TheSummeryItem title="Services cost" currency="SAR" price="450.0" />
    <TheSummeryItem title="Additions fees" currency="SAR" price="2,000.0" />
    <TheSummeryItem title="VAT" currency="SAR" price=" 100.0" />
    <TheSummeryItem title="Total" currency="SAR" price="2,450.0" class="font-bold" />
  </div>
</template>

<script setup>
import TheSummeryItem from '@/components/bookRide/summery/TheSummeryItem.vue';
</script>

<style lang="scss" scoped></style>
