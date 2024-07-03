<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import request from "@/services/dip.request";
import Swal from "sweetalert2";
import LoadingSpinner from "../LoadingSpinner.vue";
const isLoading=ref(true)
const subscriptionStatus = ref({
  subscription_status: null,
  expiry_date: null,
  days_left: null,
  amount: null,
});
onMounted;
const props = defineProps(["email"]);
onMounted(() => {
  getSubscriptionStatus();
});
const getSubscriptionStatus = async () => {
  isLoading.value=true
  try {
    const { status, data } = await request(
      "get",
      `transactions/subscription/status?email=${props.email}`
    );
    if (status == 200) {
      subscriptionStatus.value = data.result;
    }
  } catch (e) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: e.message,
    });
  }
  isLoading.value=false
};
</script>
<template>
  <div>
    <main class="relative border border-secondary py-8" v-if="!isLoading">
      <section class="flex px-8 py-3">
        <div class="w-1/5 font-semibold">Subscription Status:</div>
        <span
          class="rounded-md py-1 px-3 text-sm capitalize"
          :class="[
            subscriptionStatus.subscription_status == 'Active'
              ? 'border border-primary-green text-primary-green'
              : 'border border-primary-red text-primary-red',
          ]"
          >{{ subscriptionStatus.subscription_status }}</span
        >
      </section>
      <!-- <section class="flex px-8 py-3">
        <div class="w-1/5 font-semibold">Product Balance:</div>
        <div>{{ subscriptionStatus.product_balance }}</div>
      </section>
      <section class="flex px-8 py-3">
        <div class="w-1/5 font-semibold">E-Wallet:</div>
        <div>{{ subscriptionStatus.ewallet_balance }}</div>
      </section> -->
      <section class="flex px-8 py-3">
        <div class="w-1/5 font-semibold">Expiry Date:</div>
        <div>{{ subscriptionStatus.expiry_date }}</div>
      </section>
      <!-- <section class="flex px-8 py-3">
        <div class="w-1/5 font-semibold">Checkout Date:</div>
        <div>{{ subscriptionStatus.checkout_date }}</div>
      </section> -->
      <section class="flex px-8 py-3">
        <div class="w-1/5 font-semibold">Days Left:</div>
        <div>{{ subscriptionStatus.days_left }}</div>
      </section>
      <section class="flex px-8 py-3">
        <div class="w-1/5 font-semibold">Amount:</div>
        <div>{{ subscriptionStatus.amount }}</div>
      </section>
      <!-- <section class="flex px-8 py-3">
        <div class="w-1/5 font-semibold">Time Used:</div>
        <div>{{ subscriptionStatus.time_used }}</div>
      </section> -->
      <button
        @click="getSubscriptionStatus()"
        class="absolute top-8 right-20 rounded border border-secondary p-2 px-5"
      >
        Refresh
      </button>
    </main>
   
      <LoadingSpinner v-if="isLoading"/>
    <!-- </main> -->
  </div>
</template>
