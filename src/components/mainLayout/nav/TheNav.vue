<template>
  <div class="flex">
    <div class="mr-[70px]">
      <div class="flex items-center gap-5">
        <div class="lg:hidden">
          <SplitButton
            :pt="{
              menuButton: {
                root: {
                  class: 'flex items-center'
                }
              },
              button: {
                root: {
                  class: 'hidden'
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
              <div class="w-6 h-6">
                <img :src="menuIcon" alt="Menu icon" />
              </div>
            </template>
            <template #item>
              <NavMenu />
            </template>
          </SplitButton>
        </div>

        <div class="none w-[141px] h-[28px] flex items-center justify-center">
          <router-link to="/" exact-active-class="text-main" active-class="">
            <img class="w-full" :src="cabrioLogo" alt="Cabrio logo" />
          </router-link>
        </div>
      </div>
    </div>
    <nav class="text-sec hidden lg:block">
      <ul class="flex items-start gap-[40px]">
        <li v-for="nav in navs" :key="nav.id">
          <router-link :to="nav.route">{{ nav.name }}</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import cabrioLogo from '@/assets/img/cabrioLogo.svg';
import menuIcon from '@/assets/icons/menu.svg';
import SplitButton from 'primevue/splitbutton';
import NavMenu from '@/components/mainLayout/nav/NavMenu.vue';
const navs = [
  { id: 1, name: 'Company Profile', route: '/company-profile' },
  { id: 2, name: 'Book a Ride', route: '/' },
  { id: 3, name: 'Rides', route: '/rides' }
];
</script>
