
<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { formatDate } from '@/helpers/utils.js'
import envVariables from '@/config/config.js';
import LoadingSpinner from "../LoadingSpinner.vue";
const props = defineProps(['email'])
const isLoading=ref(true)
const show = ref(false)
onMounted(() => {
    getSubscriptionHistory()
})
let subscriptionHistory = ref('')
let oneData = ref([1])
const getSubscriptionHistory = async() => {
  isLoading.value=true
  try{
    const data =await axios.get(`${envVariables.DIP_BASE_URL}/transactions/subscriptions?per_page=20&page=1&email=${props.email}`, {
      
    })
    subscriptionHistory.value = data.data.result.data[0]
  }
  catch (error) {
    console.error('Error fetching data:', error);  
  }
  isLoading.value=false
}


</script>


<template lang="">

    
  <table v-if="subscriptionHistory != '' "  class="w-full table-auto border border-secondary text-center text-sm" 
  >
    <thead class="bg-gray-200 text-xs uppercase">
      <tr class="border border-secondary">

        <th class="p-3">Product</th>
        <th>Customer Name</th>
        <th>Subscription Date</th>
        <th>Amount</th>
        <th>Status</th>
        <th>Duration</th>
        <th>Expiry Date</th>
      </tr>
    </thead>
    <tbody v-if="!isLoading">
      <tr
      
        class="border-b border-secondary">
         <td>{{ `${subscriptionHistory.customer.subscription} ${subscriptionHistory.customer.plan}` || 'N/A'}}</td>
        <td>{{ subscriptionHistory.customer.business_name || 'N/A'}}</td>
        <td>{{  formatDate(subscriptionHistory.customer.created_at) || 'N/A'}}</td>
        <td class="text-primary-green">₦{{ subscriptionHistory.total_amount || 'N/A'}}</td>
        <td class="flex flex-col items-center justify-center px-3 py-6 text-xs">
          <span
            class="rounded-full bg-primary-green bg-opacity-20 py-2 px-5 text-center text-primary-green"
            >{{ subscriptionHistory.payment_status || 'N/A'}}</span
          >
        </td>
        <td>{{ subscriptionHistory.payment_frequency || 'N/A'}}</td>
        <td>{{ formatDate(subscriptionHistory.expiry_date ) || 'N/A'}}</td> 
      </tr>
    </tbody>
    <LoadingSpinner v-if="isLoading"></LoadingSpinner>
  </table>
    <!-- <div v-else class="border text-md border-gray-300 p-12 text-lg">
  No Sub Found
</div> -->
</template>





