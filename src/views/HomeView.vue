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
            @closeDropdown="
              () => {
                setFieldTouched('rideType', true);
                validateField('rideType');
              }
            "
            :invalid="errors.rideType ? true : false"
            :options="rideTypes"
            label="Ride type"
            placeholder="Select type of ride"
            v-model="rideType"
          />
          <span v-if="errors.rideType" class="text-xs text-red-500">{{ errors.rideType }}</span>
          <div :class="{ hidden: !values.rideType }" class="mt-3">
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
              :invalid="errors.airport ? true : false"
              @closeDropdown="
                () => {
                  setFieldTouched('airport', true);
                  validateField('airport');
                }
              "
            />
            <span v-if="errors.airport" class="text-xs text-red-500">{{ errors.airport }}</span>

            <div class="mt-3">
              <BaseInputText
                v-model="location"
                v-bind="locationAttrs"
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
              :class="errors.date || errors.time ? 'border-red-500 border-2' : ''"
            >
              <BaseDatePicker
              :icon="calendar"
                class="w-1/2"
                v-model="date"
                @popover-did-hide="
                  () => {
                    setFieldTouched('date', true);
                    validateField('date');
                  }
                "
              />
              <BaseTimePicker
                :icon="clock"
                @close="
                  () => {
                    setFieldTouched('time', true);
                    validateField('time');
                  }
                "
                close-on-complete
                hide-clear-button
                input-width="100%"
                class="!h-[38px]"
                format="hh:mm A"
                label="Trip Time"
                id="timepicker"
                placeholder="Pickup Time"
                v-model="time"
              />
            </div>
            <span v-if="errors.date" class="text-xs text-red-500 block">{{ errors.date }}</span>
            <span v-if="errors.time" class="text-xs text-red-500 block">{{ errors.time }}</span>
            <div class="mt-3">
              <BaseInputText
                label="Flight number"
                placeholder="Enter flight number"
                v-model="flightNumber"
                v-bind="flightNumberAttrs"
                :invalid="errors.flightNumber ? true : false"
              />
              <span v-if="errors.flightNumber" class="text-xs text-red-500">{{
                errors.flightNumber
              }}</span>
            </div>
            <CarsSelect
              v-model="selectedCar"
              :selectedCar="selectedCar"
              :onSelectCar="onSelectCar"
              :invalid="errors.selectedCar ? true : false"
            />
            <span v-if="errors.selectedCar" class="text-xs text-red-500">{{
              errors.selectedCar
            }}</span>

            <AdditionalFeatures
              :invalid="errors.fees ? true : false"
              v-model="fees"
              v-bind="feesAttrs"
            />
            <span v-if="errors.fees" class="text-xs text-red-500">{{ errors.fees }}</span>

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
          <PaymentAction
            :disabled="Object.values(values).length < 8"
            :handleSubmit="onSubmit"
            @openPaymentDialog="openPaymentDialog"
          />
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
    <LocationContent />
  </BaseDialog>
</template>

<script setup>
import { ref } from 'vue';
import BaseDatePicker from '@/components/common/BaseDatePicker.vue';
import BaseTimePicker from '@/components/common/BaseTimePicker.vue';
import BaseDialog from '@/components/common/BaseDialog.vue';
import PaymentContent from '@/components/bookRide/payment/PaymentContent.vue';
import CarsSelect from '@/components/bookRide/carSelection/CarsSelect.vue';
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
import map from '@/assets/img/map.png';
import bookRideSchema from '@/lib/yup/bookingRideSchema';
import { useForm } from 'vee-validate';
import calendar from '@/assets/icons/calendar.svg';
import clock from '@/assets/icons/clock.svg';

const { errors, handleSubmit, defineField, values, setFieldTouched, validateField } = useForm({
  validationSchema: bookRideSchema,
  validateOnMount: false,
  initialTouched: false,
  initialValues: {
    location: 'Al Thoumamah Rd, An Narjis, Uthman ..'
  }
});

const paymentVisible = ref(false);
const locationVisible = ref(false);
const selected = ref(false);

const comment = ref(null);
const rideTypes = ref([
  { name: 'Airport Pickup', id: 1 },
  { name: 'Airport Drop-off', id: 2 },
  { name: 'For a Day', id: 3 },
  { name: 'By Hours', id: 4 }
]);
const airports = ref([
  { name: 'Riyadh (RUH)', subtitle: 'King Fahd International Airport', id: 1 },
  { name: 'Jeddah (JED) ', subtitle: 'King Abdulaziz International Airport', id: 2 },
  { name: 'Dammam (DMM)', subtitle: 'King Fahd International Airport Dammam', id: 3 }
]);

const [rideType] = defineField('rideType');
const [location, locationAttrs] = defineField('location');
const [date] = defineField('date');
const [time] = defineField('time');
const [flightNumber, flightNumberAttrs] = defineField('flightNumber');
const [fees, feesAttrs] = defineField('fees');
const [selectedAirport] = defineField('airport');
const [selectedCar] = defineField('selectedCar');

const openPaymentDialog = () => (paymentVisible.value = true);
const openLocationDialog = () => (locationVisible.value = true);

const onSubmit = handleSubmit((values) => {
  console.log('submitted');
  console.log(JSON.stringify(values, null, 2));
});
const onSelectCar = (id) => {
  selectedCar.value = id;
};
</script>
