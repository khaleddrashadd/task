<template>
  <div>
    <PaymentContentItem
      id="1"
      :selectedMethod="selectedMethod"
      @selectMethod="onSelectMethod"
      :icon="wallet"
      balance="20,450.00"
      balanceType="Company Balance ."
      currency="SAR"
    />
    <PaymentContentItem
      id="2"
      :selectedMethod="selectedMethod"
      @selectMethod="onSelectMethod"
      :icon="wallet"
      balance="2,450.00"
      balanceType="My wallet ."
      currency="SAR"
    />
    <PaymentContentItem
      id="3"
      :selectedMethod="selectedMethod"
      @selectMethod="onSelectMethod"
      :icon="visa"
      balance="5766"
      balanceType="Visa ."
      currency="SAR"
    />

    <PaymentContentItem
      id="4"
      :selectedMethod="selectedMethod"
      @selectMethod="onSelectMethod"
      :icon="amex"
      balance="5736"
      balanceType="Amex ."
      currency="SAR"
    />

    <div class="flex items-center gap-4 py-5">
      <div class="w-5">
        <img class="w-full h-full" :src="add" alt="add" />
      </div>
      <div class="cursor-pointer">
        <span>Add payment method</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import PaymentContentItem from '@/components/bookRide/payment/PaymentContentItem.vue';
import wallet from '@/assets/icons/wallet.svg';
import visa from '@/assets/icons/visa.svg';
import amex from '@/assets/icons/amex.png';
import add from '@/assets/icons/add.svg';

const selectedMethod = ref(null);

const onSelectMethod = (id) => {
  selectedMethod.value = id;
};
</script>
