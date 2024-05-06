<template>
      <div class='relative'>
      <div class="md:w-[645px] rounded-main mt-5">
        <img class="h-full w-full object-cover" :src="map" alt="map image" />
      </div>
      <div class="absolute w-[96%] p-3 top-3 left-3 right-3 flex gap-3 items-center bg-sec rounded-main">
        <span class="text-sm">
          <img :src="pin" alt="marker">
        </span>
        <span class="text-sm">6995 Uthman Ibn Affan Rd, 4636, An Narjis, Riyadh 13324</span>
      </div>
    </div>

</template>

<script setup>
import map from '@/assets/img/map.png';
import pin from '@/assets/icons/pin.svg'
</script>

