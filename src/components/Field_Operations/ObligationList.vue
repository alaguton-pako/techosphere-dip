<template>
  <table class="w-full table-auto border border-secondary text-sm">
    <thead class="bg-gray-200">
      <tr class="border border-secondary capitalize">
        <th scope="border border-secondary p-3">S/N:</th>
        <th scope="border border-secondary p-3">Customer Name</th>
        <th scope="border border-secondary p-3">Phone Number</th>
        <th scope="border border-secondary p-3">Activity</th>
        <th scope="border border-secondary p-3">Schedule Start Time</th>
        <th scope="border border-secondary p-3">Schedule Completion</th>
        <th scope="border border-secondary p-3">Status</th>
        <th scope="border border-secondary p-3">Action</th>
      </tr>
    </thead>

    <tbody class="text-center">
      <tr
        v-for="(confirmation, index) in confirmations"
        :key="index"
        class="border border-secondary p-3"
      >
        <td class="border border-secondary p-3">{{ index + 1 }}</td>
        <td class="border border-secondary p-3">
          {{ confirmation.customer_name }}
        </td>
        <td class="border border-secondary p-3">
          {{ confirmation.address }}
        </td>
        <td class="border border-secondary p-3">{{ confirmation.activity }}</td>
        <td class="border border-secondary p-3">
          {{ confirmation.scheduled_start_time }}
        </td>
        <td class="border border-secondary p-3">
          {{ confirmation.scheduled_start_time }}
        </td>
        <td class="border border-secondary p-3">{{ confirmation.status }}</td>
        <td
          class="w-48 border border-secondary p-3 underline underline-offset-8"
        >
          <router-link
            :to="{ name: 'view-confirmation', params: { id: confirmation.id } }"
          >
            <a>View Confirmation Request</a>
          </router-link>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import workplaceRequestsv2 from '../../services/workplaceRequestsv2.js'
import LoadingSpinner from '../LoadingSpinner.vue'
onMounted(() => {
  getConfirmation()
})

const confirmations = ref([
  // {
  //   id: null,
  //   customer_name: "",
  //   status: "",
  //   phone: "",
  //   scheduled_start_time: "",
  //   scheduled_completion: "",
  //   address: "",
  //   activity: "",
  // },
])

const getConfirmation = async () => {
  try {
    const { status, data } = await workplaceRequestsv2(
      'get',
      'general/confirmation-requests'
    )
    if (status == 200) {
      confirmations.value = data
    }
  } catch (e) {}
}
</script>
