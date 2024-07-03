<script setup>
import { onMounted, reactive, ref } from 'vue'
import workplaceRequests from '@/services/workplaceRequestsv2'
import { useUserStore } from '../../stores/userStore'
import LoadingSpinner from '../LoadingSpinner.vue'

onMounted(() => {
  getFaultSummary()
  getRecentFaults()
})

const requestCompleted = ref(false)
const recentFaults = ref([])
let isLoading = ref(false);
let count = ref(0)

const getRecentFaults = async () => {
  count.value = 1
  requestCompleted.value = false

  const { status, data } = await workplaceRequests(
    'get',
    'user/network/faults-all?filter=latest&source=DIP'
  )
  if (status === 200) {
    recentFaults.value = data.data.results.data
    requestCompleted.value = true
    count.value = 0;
  } else if (status === 404) {
    count.value = 0;
    // allNetworkFaults.value = null;
    isLoading = false
    requestCompleted.value = true
  } else if (status === 401) {
    count.value = 0;
    logoutUser()
  }
  else {
    count.value = 0;
    fetchAllNetworkFaults.value = null
  }

}
const getFaultSummary = async () => {
  const { status, data } = await workplaceRequests(
    'get',
    'commercial/retail/customer-care/customer-faults?source=DIP'
  )

  if (status === 200) {
    const result = data.data.results.data
    dashboardData[0].stat = result.total_faults
    dashboardData[1].stat = result.total_critical_faults
    dashboardData[2].stat = result.total_major_faults
    dashboardData[3].stat = result.total_minor_faults
    dashboardData[4].stat = result.total_active_faults
    dashboardData[5].stat = result.total_resolved_faults
    isLoading = false
  }

  if (status === 401) {
    isLoading = false
    logoutUser()
  }

  if (status === 404) {
    isLoading = false
  }
}

const logoutUser = () => {
  const userStore = useUserStore()
  userStore.logout()
}

const dashboardData = reactive([
  {
    stat: 0,
    title: 'Total Faults',
    description: 'overall number of network faults',
  },
  {
    stat: 0,
    title: 'Total Critical Faults',
    description: 'Total number of critical network faults',
  },
  {
    stat: 0,
    title: 'Total Major Faults',
    description: 'Total number of major network faults',
  },
  {
    stat: 0,
    title: 'Total Minor Faults',
    description: 'Total number of minor network faults',
  },
  {
    stat: 0,
    title: 'Total Active Faults',
    description: 'total number of active faults',
  },
  {
    stat: 0,
    title: 'Total resolved Faults',
    description: 'total number of resolved faults',
  },
])
</script>


<template>
  <div>

    <section class="my-14 flex w-full flex-nowrap gap-6 overflow-x-scroll overscroll-x-contain">
      <div v-for="item in dashboardData" :key="item.id"
        class="flex-shrink-0 rounded-lg border border-primary-black bg-opacity-90 bg-[url('/waveform.svg')] bg-right-bottom bg-no-repeat px-6 py-4">
        <h2 class="mb-4 text-3xl font-semibold">{{ item.stat }}</h2>
        <div class="font-semibold">{{ item.title }}</div>
        <div class="text-xs">{{ item.description }}</div>
      </div>
    </section>
  
    <LoadingSpinner v-if="count == 1" />
  
    <table v-else class="w-full table-auto border border-secondary text-center text-sm">
      <thead class="bg-gray-200 text-xs uppercase">
        <tr class="border border-secondary">
          <th class="border border-secondary p-3">Ticket Number</th>
          <th class="border border-secondary p-3">Name</th>
          <th class="border border-secondary p-3">Severity</th>
          <!-- <th class="border border-secondary p-3">Alarm Source</th> -->
          <th class="border border-secondary p-3">Event</th>
          <th class="border border-secondary p-3">Channel</th>
          <th class="border border-secondary p-3">Date</th>
          <th class="border border-secondary p-3">Action</th>
        </tr>
      </thead>
      <tbody v-if="requestCompleted">
        <tr v-for="(item, index) in recentFaults" :key="index">
          <td class="border border-secondary p-4">{{ item.ticket_number }}</td>
          <td class="border border-secondary p-4">{{ item.splitter_name }}</td>
          <td class="grid h-full place-items-center border-t border-secondary p-4">
            <div class="py-1 px-5 text-center capitalize text-white" :class="{
              'bg-primary-red': item.severity.toLowerCase() === 'critical',
              'bg-primary-green': item.severity.toLowerCase() === 'minor',
              'bg-primary-yellow': item.severity.toLowerCase() === 'major',
            }">
              {{ item.severity }}
            </div>
          </td>
          <td class="border border-secondary p-4">{{ item.event }}</td>
          <td class="border border-secondary p-4">{{ item.source }}</td>
          <td class="border border-secondary p-4">{{ new Date(item.created_at).toLocaleDateString('en-US', {
            dateStyle: 'long'
          }) }}</td>
          <td class="border border-secondary p-4 text-center">
            <router-link :to="{ name: 'obligation', params: { id: item.id } }"
              class="text-primary underline">View</router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
  

