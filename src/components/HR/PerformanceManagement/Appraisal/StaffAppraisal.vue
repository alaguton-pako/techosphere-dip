<script setup>
import AppHorizontalNavigation from '../../../AppHorizontalNavigation.vue'
import NameTag from './NameTag.vue'
import workplaceRequestsv2 from '../../../../services/workplaceRequestsv2'
import PerformanceRating from './PerformanceRating.vue'
import DetailsBar from '../../ViewEmployeeRecords/DetailsBar.vue'
import Tab from '../ObligationPerformance/Tab.vue'
import { onMounted, ref, computed } from 'vue'
import { useRoute } from 'vue-router'
const isLoading = ref(false)
const route = useRoute()

const current = ref(1)
const from = ref(0)
const to = ref(0)
const pages = ref(1)
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
  getStaffAppraisalDetail()
})
const staffAppraisal = ref(null)
const staffDetail = ref('')
const getStaffAppraisalDetail = async () => {
  try {
    isLoading.value = true;
    const { status, data } = await workplaceRequestsv2(
      'get',
      `appraisals/user/${route.params.id}/all?per_page=${20}&page=${1}`
    )

    if (status == 200) {
      staffDetail.value = data.data.data.staff_details
      staffAppraisal.value = data.data.data.appraisals
      // current.value = data.data.pagination.current
      // from.value = data.data.pagination.from
      // to.value = data.data.pagination.to
      // pages.value = data.data.pagination.pages
      // total.value = data.data.pagination.total
    }
  } catch (e) {

  }finally{
    isLoading.value = false
  }
}
const appraisalID = ref(null)
const performanceRating = ref(false)
const allAppraisals = ref(true)
const displayPerformanceRating = (id) => {
  appraisalID.value = id
  performanceRating.value = true
  allAppraisals.value = false
}
</script>

<template>
  <app-layout>
    <template v-slot:main-content>
      <main class="w-full bg-[#F5F5F5] pl-[260px]">
        <AppHorizontalNavigation />
        <!-- <section class="p-9">
          <Tab @click="$router.push({ name: 'performance-management' })" />
        </section> -->
        <section class="p-10">
          <section><DetailsBar /></section>
          <div class="mx-3 w-full border border-gray-300">
            <div class="mx-1 my-1 w-full border-gray-400 p-5">
              <div class="grid grid-cols-5 border-b-white bg-gray-200">
                <div class="border-b-white">
                  <label
                    for="name"
                    class="text-md text-black-800 mx-2 my-2 mb-2 block font-semibold"
                    >Full Name:</label
                  >
                </div>
                <div
                  class="text-md text-black-800 mx-28 my-2 mb-2 block w-80 font-light"
                >
                  {{ staffDetail.fullname }}
                </div>
              </div>
              <div class="grid grid-cols-5 border-gray-200">
                <div class="">
                  <label
                    for="name"
                    class="text-md text-black-800 mx-2 my-2 mb-2 block font-semibold"
                    >Role Applied For:</label
                  >
                </div>
                <div
                  class="text-md text-black-800 mx-28 my-2 mb-2 block w-80 font-light"
                >
                  {{ staffDetail.role }}
                </div>
              </div>
              <div class="grid grid-cols-5 border-gray-200 bg-gray-200">
                <div class="">
                  <label
                    for="name"
                    class="text-md text-black-800 mx-2 my-2 mb-2 block font-semibold"
                    >Staff ID:</label
                  >
                </div>
                <div
                  class="text-md text-black-800 mx-28 my-2 mb-2 block w-80 font-light"
                >
                  {{ staffDetail.staff }}
                </div>
              </div>
              <div class="grid grid-cols-5 border-b-white">
                <div class="">
                  <label
                    for="name"
                    class="text-md text-black-800 mx-2 block font-semibold"
                    >Status:</label
                  >
                </div>

                <div class="ml-28 text-black">
                  <button
                    class="border-suburbanblack my-2 w-[121px] border border-solid"
                    :class="{
                      'border-green-400 py-1 text-green-400':
                        staffDetail.status === 'Active',
                    }"
                  >
                    {{ staffDetail.status }}
                  </button>
                </div>
              </div>
              <div class="grid grid-cols-5 border-b-white bg-gray-200">
                <div class="">
                  <label
                    for="name"
                    class="text-md text-black-800 mx-2 my-2 mb-2 block font-semibold"
                    >Start Date:</label
                  >
                </div>
                <div
                  class="text-md text-black-800 mx-28 my-2 mb-2 block w-80 font-light"
                >
                  {{ staffDetail.start_date }}
                </div>
              </div>
            </div>
          </div>
          <PerformanceRating v-if="performanceRating" :id="appraisalID" />
          <div v-if="allAppraisals">
            <div class="mx-3 w-full">
              <div class="my-1 w-full border-gray-400">
                <div class="flex h-[41px] w-full flex-row bg-black">
                  <div class="mx-2 flex flex-row justify-start">
                    <div class="mx-2 my-2 font-semibold text-white">
                      Appraisals
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <table
              class="mx-3 w-full table-fixed border border-secondary text-sm"
            >
              <thead class="bg-gray-200">
                <tr class="border border-secondary capitalize">
                  <th class="border border-secondary p-3">Month</th>
                  <th class="border border-secondary p-3">Date Created</th>
                  <th class="border border-secondary p-3">Status</th>
                  <th class="border border-secondary p-3">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(appraisal, index) in staffAppraisal" :key="index">
                  <td class="border border-secondary p-3 text-center">
                    {{ appraisal.month }}
                  </td>
                  <td class="border border-secondary p-3 text-center">
                    {{ appraisal.date_created }}
                  </td>
                  <td class="border border-secondary p-3 text-center">
                    <div
                      class="border-suburbanblack border py-2 text-center"
                      :class="{
                        'border-green-400 py-1 text-green-400':
                          appraisal.status === 'Submitted',
                      }"
                    >
                      {{ appraisal.status }}
                    </div>
                  </td>
                  <td
                    class="cursor-pointer border border-secondary p-3 text-center"
                    @click="displayPerformanceRating(appraisal.id)"
                  >
                    <div class="py-2 text-center underline">View</div>
                  </td>
                </tr>
              </tbody>
            </table>
            <!-- Pagination -->
            <AppPagination
              class="m-10"
              :pagination="pagination"
              @fetchRecords="getStaffAppraisalDetail"
            />
          </div>
        </section>
      </main>
    </template>
  </app-layout>
</template>
