
<script setup>
import { ref, onMounted } from 'vue'
import { formatDate } from '@/helpers/utils.js'
import LoadingSpinner from "../LoadingSpinner.vue";
import axios from 'axios'
import envVariables from '@/config/config.js'
const props = defineProps(['email'])



const isLoading=ref(true)
const paymentHistory = ref([])

onMounted(() => {
  getPaymentHistory()
})
const getPaymentHistory = async (id) => {
  isLoading.value=true
  try {
    const res = await axios.get(
      `${envVariables.DIP_BASE_URL}/transactions?email=${props.email}`
    )
    if (res.status == 200) {
      paymentHistory.value = res.data.result
     
    }
  } catch (error) {
    // console.error('Error fetching data:', error)
  }
  isLoading.value=false
}
</script>


<template lang="">
  <table class="w-full table-auto border border-secondary text-center text-sm">
    <thead class="bg-gray-200 text-xs uppercase">
      <tr class="border border-secondary">
        <th class="p-3">#</th>
        <th>Description</th>
        <th>Reference Number</th>
        <th>Date</th>
        <th>Amount</th>
        <th>Status</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody v-if="!isLoading">
      <tr
        v-for="(payment, index) in paymentHistory"
        class="border-b border-secondary">
        <td>{{ index + 1 }}</td>
        <td>{{ payment.description }}</td>
        <td>{{ payment.reference_number }}</td>
        <td>{{ formatDate(payment.date_paid) }}</td>
        <td class="text-primary-green">₦{{ payment.amount }}</td>
        <td class="flex flex-col items-center justify-center px-3 py-6 text-xs">
          <span
            class="rounded-full bg-primary-green bg-opacity-20 py-2 px-5 text-center text-primary-green"
            >{{ payment.status }}</span
          >
        </td>
        <td>
          <!-- <a href="#" class="text-primary underline">View</a> -->
        </td>
      </tr>
    </tbody>
    <LoadingSpinner v-if="isLoading" />
  </table>
</template>


