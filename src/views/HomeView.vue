<template>
  <div class="relative">
    <div class="h-screen object-cover">
      <img class="h-full w-full object-cover" :src="map" alt="map image" />
    </div>

    <div class="fixed left-4 z-50 top-16 sm:w-[448px] w-10/12">
      <BaseCard class="p-4 w-full bg-sec overflow-x-hidden h-[calc(100vh-80px)]">
        <div>
          <BaseTitle>Book a Ride</BaseTitle>
          <BaseDropDown
            :options="rideTypes"
            label="Ride type"
            placeholder="Select type of ride"
            v-model="selectedRideType"
          />
          <div :class="{ hidden: !selectedRideType }" class="mt-3">
            <div class="flex items-center gap-3 mb-5">
              <BaseCheckbox
                :isBinary="true"
                label="This ride book for another person"
                id="isAnotherPerson"
                v-model="selected"
              />
            </div>
            <BaseDropDown
              :options="airports"
              label="From"
              placeholder="Select airport"
              v-model="selectedAirport"
            />
            <div class="mt-3">
              <BaseInputText
                v-model="location"
                placeholder="Select destiny"
                id="location"
                :readonly="true"
                label="To"
                class="cursor-pointer"
                @click="openLocationDialog"
              />
            </div>
            <div
              class="mt-3 flex bg-[#f6f6f6] rounded-main py-1 has-[:focus-visible]:border-main has-[:focus-visible]:border-2"
            >
              <DatePicker v-model="date" class="w-1/2">
                <template #default="{ togglePopover }">
                  <BaseInputText
                    label="Trip Date"
                    placeholder="Pickup Date"
                    class="border-r-2 h-[38px] peer-focus-visible:border-main"
                    readonly
                    sm
                    v-model="formattedDate"
                    @click="togglePopover"
                  />
                </template>
              </DatePicker>
              <div class="relative">
                <VueTimepicker
                  id="timepicker"
                  hide-clear-button
                  placeholder="Pickup Time"
                  input-width="100%"
                  class="!h-[38px]"
                  format="hh:mm A"
                  v-model="time"
                />
                <label for="timepicker" class="absolute left-4 top-0 text-xs">Trip Time</label>
              </div>
            </div>
            <div class="mt-3">
              <BaseInputText
                label="Flight number"
                placeholder="Enter flight number"
                v-model="flightNumber"
              />
            </div>
            <CarsSelect />
            <AdditionalFeatures v-model="fees" />
            <div class="my-5">
              <BaseTextArea
                v-model="comment"
                placeholder="Luggage information, special needs or tasks for driver"
                label="A special comment"
              />
            </div>
            <div class="mb-4">
              <BaseTitle>
                <template #sm>Summery</template>
              </BaseTitle>
              <TheSummery class="mt-4" />
            </div>
          </div>
          <PaymentAction @openPaymentDialog="openPaymentDialog" />
        </div>
      </BaseCard>
    </div>
  </div>

  <BaseDialog
    headerTitle="Payment Method"
    headerSubtitle="Please select payment method for your next request"
    v-model="paymentVisible"
  >
    <PaymentContent />
  </BaseDialog>
  <BaseDialog width="auto" headerTitle="Select Pickup location" v-model="locationVisible">
    <LocationContent/>
  </BaseDialog>
</template>

<script setup>
import BaseDialog from '@/components/common/BaseDialog.vue';
import PaymentContent from '@/components/bookRide/payment/PaymentContent.vue';

import { ref, computed } from 'vue';
import VueTimepicker from 'vue3-timepicker';
import CarsSelect from '@/components/bookRide/carSelection/CarsSelect.vue';
import map from '@/assets/img/map.png';
import BaseCard from '@/components/common/BaseCard.vue';
import BaseTitle from '@/components/common/BaseTitle.vue';
import BaseDropDown from '@/components/common/BaseDropDown.vue';
import BaseCheckbox from '@/components/common/BaseCheckbox.vue';
import BaseInputText from '@/components/common/BaseInputText.vue';
import AdditionalFeatures from '@/components/bookRide/fees/AditionalFeatures.vue';
import BaseTextArea from '@/components/common/BaseTextArea.vue';
import TheSummery from '@/components/bookRide/summery/TheSummery.vue';
import PaymentAction from '@/components/bookRide/PaymentAction.vue';
import LocationContent from '@/components/bookRide/LocationContent.vue';

import { DatePicker } from 'v-calendar';

const fees = ref();
const comment = ref(null);

const paymentVisible = ref(false);
const locationVisible = ref(false);
const openPaymentDialog = () => (paymentVisible.value = true);
const openLocationDialog = () => (locationVisible.value = true);

const date = ref(null);
const time = ref(null);
const flightNumber = ref(null);
const formattedDate = computed(() => {
  if (!date.value) return '';
  return new Intl.DateTimeFormat('en-UK', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  }).format(date.value);
});

const rideTypes = ref([
  { name: 'Airport Pickup', id: 1 },
  { name: 'Airport Drop-off', id: 2 },
  { name: 'For a Day', id: 3 },
  { name: 'By Hours', id: 4 }
]);
const selectedRideType = ref(null);
const airports = ref([
  { name: 'Riyadh (RUH)', subtitle: 'King Fahd International Airport', id: 1 },
  { name: 'Jeddah (JED) ', subtitle: 'King Abdulaziz International Airport', id: 2 },
  { name: 'Dammam (DMM)', subtitle: 'King Fahd International Airport Dammam', id: 3 }
]);
const selectedAirport = ref(null);

const selected = ref(false);

const location = ref('Al Thoumamah Rd, An Narjis, Uthman ..');

</script>

<style scoped></style>
