<script setup>
import { ref, onMounted, computed } from 'vue'
import DynamicAppHorizontalNavigation from '@/components/DynamicAppHorizontalNavigation.vue'
import workplaceRequestsv2 from '@/services/workplaceRequestsv2'
import AppPagination from '@/components/AppPagination.vue'
import LoadingSpinner from '@/components/LoadingSpinner.vue'
import Card from '@/components/Card.vue'
import { formatDate } from '@/helpers/utils.js'
import { useRoute } from 'vue-router'
import Swal from 'sweetalert2'
const route = useRoute()
const isLoading = ref(true)
const requestComplete = ref(false)
const isServerError = ref(false)
const isNotFound = ref(false)
const current = ref(1)
const from = ref(0)
const to = ref(0)
const pages = ref(0)
const total = ref(0)
const recordsPerPage = ref(20)

const pagination = computed(() => {
  return {
    current: current.value,
    from: from.value,
    to: to.value,
    pages: pages.value,
    total: total.value,
    recordsPerPage: recordsPerPage.value,
  }
})

onMounted(() => {
  getMonitorDetails(current.value)
})
const monitorDetails = ref('')
const getMonitorDetails = async (pageNumber) => {
  try {
    if (current.value < 1 || (pages.value > 0 && current.value > pages.value)) {
      return
    }
    const { status, data } = await workplaceRequestsv2(
      'get',
      `commercial/retail/customer-care/customer-operations/get-obligations?type=${route.params.id}&page=${pageNumber}&per_page=${recordsPerPage.value}`
    )
    if (status == 200) {
      if (data?.data?.results?.pagination) {
        current.value = data?.data?.results?.pagination?.current
        from.value = data?.data?.results?.pagination?.from
        to.value = data?.data?.results?.pagination?.to
        pages.value = data?.data?.results?.pagination?.pages
        total.value = data?.data?.results?.pagination?.total
      } else {
        recordsPerPage.value = 0
        // current.value=0
      }
      monitorDetails.value = data.data.results.data
      requestComplete.value = true
      // console.log(current.value)
    } else if (status == 500) {
      isServerError.value = true
    } else if (status == 404) {
      isNotFound.value = true
    }
    isLoading.value = false
  } catch (e) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: e.message,
    })
  }
}

const formatlocation = (data) => {
  return data.replace(/\\n/g, '<br>')
}

const cardsData = [
  {
    figure: 0,
    bgColor: 'bg-white',
    textColor: 'text-black',
    title: 'Total Obligations',
    body: 'overall number of obligations within timeline',
  },
  {
    figure: 0,
    bgColor: 'bg-white',
    textColor: 'text-black',
    title: 'Total Completed Obligations',
    body: 'Total number of completed obligations within timeline',
  },
  {
    figure: 0,
    bgColor: 'bg-white',
    textColor: 'text-black',
    title: 'Total Pending Obligations',
    body: 'Total number of pending obligationswithin timeline',
  },
]
</script>

<template>
  <DynamicAppHorizontalNavigation />
  <div class="px-10">
    <div>
      <nav
        class="my-8 mt-6 flex items-center border border-gray-200 bg-white p-3 font-semibold capitalize text-gray-600"
      >
        <span class="mx-6 text-center text-primary"
          >{{ route.params.id?.replace('_', ' - ') }}
        </span>
      </nav>
    </div>
    <div class="my-3 grid grid-cols-4 space-x-3">
      <Card
        v-for="(card, index) in cardsData"
        :key="index"
        :figure="card.figure"
        :title="card.title"
        :bgColor="card.bgColor"
        :textColor="card.textColor"
        :body="card.body"
        heigh="h-48"
        width="w-80"
      />
    </div>
    <div class="my-5 flex justify-end space-x-2">
      <div class="col-span-3">
        <select
          id="kpi"
          class="block border border-gray-300 p-2 focus:outline-none"
        >
          <option disabled selected>Completion status</option>
          <option>Completed</option>
          <option>Pending</option>
          <option>Pending</option>
        </select>
      </div>

      <div class="flex items-center">
        <input
          type="search"
          placeholder="Search"
          class="w-[230px] rounded-l-md border border-r-0 border-secondary p-2 focus:outline-none"
        />
        <button
          class="h-full rounded-r-md border border-secondary bg-primary-gray px-3 py-2"
        >
          <img src="@/assets/search-white.svg" alt="" />
        </button>
      </div>
    </div>

    <table
      class="w-full table-auto border border-secondary text-center text-sm"
    >
      <thead class="bg-gray-200 text-sm uppercase">
        <tr class="border border-secondary">
          <th class="border border-secondary p-3">Customer name</th>
          <th class="border border-secondary p-3">location</th>
          <th class="border border-secondary p-5">request date</th>
          <th class="border border-secondary p-3">fault status</th>
          <th class="border border-secondary p-3">team</th>
          <th class="border border-secondary p-3">duration</th>
          <th class="border border-secondary p-5">plan</th>
          <th class="border border-secondary p-3">Action</th>
        </tr>
      </thead>
      <div class="p-5 text-2xl font-semibold text-red-600" v-if="isServerError">
        Internal Server Error : Please try Again
      </div>
      <div class="p-5 text-2xl font-semibold text-red-600" v-if="isNotFound">
        Page Not Found: Please try Again
      </div>
      <tbody>
        <tr v-for="(item, index) in monitorDetails" :key="index">
          <td class="border border-secondary p-4">{{ item.business_name }}</td>
          <td
            v-html="formatlocation(item.location)"
            class="border border-secondary p-4"
          ></td>
          <td class="border border-secondary p-4">
            {{ formatDate(item.request_date) }}
          </td>
          <td class="border border-secondary p-4">{{ item.status }}</td>
          <td class="border border-secondary p-4">{{ item.team }}</td>
          <td class="border border-secondary p-4">{{ item.duration }}</td>
          <td class="border border-secondary p-4">{{ item.plan }}</td>
          <td class="border border-secondary p-4 text-red-600 underline">
            View
          </td>
        </tr>
      </tbody>
    </table>
    <LoadingSpinner v-if="isLoading" />
  </div>
  <AppPagination
    class="m-10"
    v-if="requestComplete"
    :pagination="pagination"
    @fetchRecords="getMonitorDetails"
  />
</template>
