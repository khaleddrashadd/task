import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from '@/router';
import PrimeVue from 'primevue/config';
import 'vue3-timepicker/dist/VueTimepicker.css';
import 'v-calendar/style.css';
import { setupCalendar } from 'v-calendar';
import Tooltip from 'primevue/tooltip';

createApp(App)
  .use(router)
  .use(PrimeVue)
  .use(setupCalendar, {})
  .directive('tooltip', Tooltip)
  .mount('#app');
