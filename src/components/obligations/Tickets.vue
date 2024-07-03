<script setup>
import { onMounted, ref, computed } from 'vue'
import { useUserStore } from '../../stores/userStore'
import workplaceRequests from '../../services/workplaceRequestsv2'
import LoadingSpinner from '../LoadingSpinner.vue'

onMounted(() => {
  fetchAllNetworkFaults(1)
})

const requestCompleted = ref(false)
const current = ref(1)
const from = ref(0)
const to = ref(0)
const pages = ref(0)
const total = ref(0)
let isloading = true

const allNetworkFaults = ref([])
const fetchAllNetworkFaults = async (pageNumber) => {
  requestCompleted.value = false
  isloading = true
  const { status, data } = await workplaceRequests(
    'get',
    `user/network/faults-all?per_page=10&page=${pageNumber}&source=DIP`
  )

  if (status === 200) {
    isloading = false
    allNetworkFaults.value = data.data.results.data
    current.value = data.data.results.pagination.current
    from.value = data.data.results.pagination.from
    to.value = data.data.results.pagination.to
    pages.value = data.data.results.pagination.pages
    total.value = data.data.results.pagination.total
    requestCompleted.value = true
  } else if (status === 404) {
    isloading = false
    allNetworkFaults.value = null;
    requestCompleted.value = true
  } else {
    isloading = false
    fetchAllNetworkFaults.value = null
  }

  if (status === 401) {
    logoutUser()
  }
}

const logoutUser = () => {
  const userStore = useUserStore()    
  userStore.logout()
}

const pagination = computed(() => {
  return {
    current: current.value,
    from: from.value,
    to: to.value,
    pages: pages.value,
    total: total.value,
  }
})

</script>

<template>
  <section class="my-12 flex flex-row-reverse items-center gap-6">
    <button class="rounded-md border border-secondary py-2 px-4 shadow">
      Export
    </button>
    <!-- <router-link
      :to="{ name: 'create ticket' }"
      class="rounded-md border border-primary bg-primary py-2 px-4 text-white shadow"
    >
      Create Ticket
    </router-link> -->

    <div class="flex items-center">
      <input type="search" placeholder="Search"
        class="w-[230px] rounded-l-md border border-r-0 border-secondary p-2 focus:outline-none" />
      <button class="h-full rounded-r-md border border-secondary bg-primary-gray py-2.5 px-3">
        <img src="../../assets/search-white.svg" alt="" />
      </button>
    </div>

    <select class="rounded-md border border-secondary p-2.5 focus:outline-none">
      <option value="" selected>option 1</option>
      <option value="">option 2</option>
      <option value="">option 3</option>
    </select>
  </section>

  <table class="w-full table-auto border border-secondary text-center text-sm">
    <thead class="bg-gray-200 text-sm ">
      <tr class="border border-secondary">
        <th class="border border-secondary p-3">Ticket Number</th>
        <th class="border border-secondary p-3">Customer Name</th>
        <th class="border border-secondary p-3">Fault Type</th>
        <th class="border border-secondary p-3">Event</th>
        <th class="border border-secondary p-3">Created Date</th>
        <th class="border border-secondary p-3">Channel</th>
        <th class="border border-secondary p-3">Last Update</th>
        <th class="border border-secondary p-3">Action</th>
      </tr>
    </thead>
    <tbody v-if="requestCompleted && allNetworkFaults != null">
      <tr v-for="(item, index) in allNetworkFaults" :key="index">
        <td class="border border-secondary p-4">{{ item.ticket_number }}</td>
        <td class="border border-secondary p-4">{{ item.splitter_name }}</td>
        <td class="border border-secondary p-4">{{ item.network_fault_type }}</td>
        <td class="border border-secondary p-4">{{ item.event }}</td>
        <td class="border border-secondary p-4 ">{{ new Date(item.created_at).toLocaleDateString('en-US', {
                  dateStyle: 'long'
                  }) }}</td>
        <!-- <td class="border border-secondary p-4 ">{{ item.description }}</td> -->
        <td class="border border-secondary p-4">{{ item.source }}</td>
        <td class="border border-secondary p-4">{{ new Date(item.updated_at).toLocaleDateString('en-US', {
                  dateStyle: 'long'
                  }) }}</td>
        <td class="border border-secondary p-4">
          <router-link :to="{ name: 'obligation', params: { id: item.id } }"
            class="text-primary underline">View</router-link>
        </td>
      </tr>
    </tbody>
  </table>
  <loading-spinner v-if="isloading" />


  <AppPagination class="my-8 mx-0" v-if="requestCompleted" :pagination="pagination"
    @fetchRecords="fetchAllNetworkFaults" />
</template>
 