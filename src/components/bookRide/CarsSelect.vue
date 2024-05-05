<template>
  <div class="my-5">
    <div class="flex justify-between items-center mb-4">
      <BaseTitle>
        <template #sm> Select car class</template>
      </BaseTitle>
      <div class="flex items-center gap-4 justify-end">
        <BaseScrollButton :icon="arrowLeft" direction="left" @handleScroll="handleScroll" />
        <BaseScrollButton :icon="arrowRight" direction="right" @handleScroll="handleScroll" />
      </div>
    </div>
    <ul class="overflow-y-hidden flex w-full gap-4 scroll-smooth snap-mandatory snap-x" ref="el">
      <CarsSelectItem
        @selectCar="onSelectCar"
        title="Pure class"
        carName="Lucid Air Dream"
        :userNum="2"
        :bookNum="2"
        currency="SAR"
        carPrice="850.50"
        :car="car"
        id="1"
        :selectedCar
      />
      <CarsSelectItem
        @selectCar="onSelectCar"
        title="Pure class"
        carName="Lucid Air Dream"
        :userNum="2"
        :bookNum="2"
        currency="SAR"
        carPrice="850.50"
        :car="car"
        id="2"
        :selectedCar
      />
      <CarsSelectItem
        @selectCar="onSelectCar"
        title="Pure class"
        carName="Lucid Air Dream"
        :userNum="2"
        :bookNum="2"
        currency="SAR"
        carPrice="850.50"
        :car="car"
        id="3"
        :selectedCar
      />
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import car from '@/assets/img/car.png';
import CarsSelectItem from '@/components/bookRide/CarsSelectItem.vue';
import BaseScrollButton from '@/components/common/BaseScrollButton.vue';
import BaseTitle from '@/components/common/BaseTitle.vue';
import arrowLeft from '@/assets/icons/arrowLeft.svg';
import arrowRight from '@/assets/icons/arrowRight.svg';

defineProps(['element']);

const selectedCar = ref(null);

const onSelectCar = (id) => {
  selectedCar.value = id;
  console.log(id);
};

const el = ref(null);
const handleScroll = (direction) => {
  if (direction === 'left') {
    el.value.scrollLeft -= 200;
  } else {
    el.value.scrollLeft += 200;
  }
};
</script>

<style scoped>
::-webkit-scrollbar {
  display: none;
}
</style>
