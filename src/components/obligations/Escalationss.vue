<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'
import { useRoute } from 'vue-router'
import { useUserStore } from '../../stores/userStore'
import workplaceRequests from '@/services/workplaceRequestsv2'
const store = useUserStore()
const route = useRoute()
const props = defineProps(['eventData', 'isAdmin'])
// onMounted(() => {
//   getEscalationData()
// })
const escalationData = ref('')
const getEscalationData = async () => {
  const { status, data } = await workplaceRequests(
    'get',
    'network-fault/get-escalations?per_page=10&page=1&source=DIP'
  )

  if (status === 200) {
    escalationData.value = data.data.results.data[0].faultsEscalated
  }
}
</script>

<template>
  <div>
    <table
      class="mt-4 w-full table-auto border border-secondary text-center text-sm"
    >
      <thead class="bg-gray-200 text-sm uppercase">
        <tr class="border border-secondary">
          <th class="border border-secondary p-3">fault id</th>
          <th class="border border-secondary p-3">ticket no</th>
          <th class="border border-secondary p-3">escalated to</th>
          <th class="border border-secondary p-3">Description</th>
          <th class="border border-secondary p-3">assigned by</th>
          <th class="border border-secondary p-3">date escalated</th>
        </tr>
      </thead>
      <tbody>
        <tr class="" v-for="(item, index) in escalationData" :key="index">
          <td class="border border-secondary px-3 py-4">{{ item.fault_id }}</td>
          <td class="border border-secondary">{{ item.ticket_no }}</td>
          <td class="border border-secondary">{{ item.escalated_to }}</td>
          <td class="border border-secondary">{{ item.description }}</td>
          <td class="border border-secondary">
            {{ item.assigned_by || 'N/A' }}
          </td>
          <td class="border border-secondary">{{ item.date_escalated }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
