<script setup>
import AppHorizontalNavigation from '@/components/AppHorizontalNavigation.vue'
import PerformanceTab from '@/components/HR/PerformanceManagement/Appraisal/PerformanceTab.vue'
import CoreValues from './CoreValues.vue'
import EmployeesAppraisal from './EmployeesAppraisal.vue'
import Comments from './Comments.vue'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useUserStore } from '@/stores/userStore'
import Swal from 'sweetalert2'
import workplaceRequestsv2 from '@/services/workplaceRequestsv2'
import { useRouter } from 'vue-router'
const props = defineProps(['id'])
const router = useRouter()
const appraisalID = ref(null)
appraisalID.value = props.id
const store = useUserStore()
let responsible = ref('')

const ID = ref(props.id)

const isLoading = ref(true)
const performanceRating = ref({
  staff_details: {
    fullname: 'Rachel Ochiche',
    role: 'Network Analyst',
    staff: 253,
    status: 'Active',
    start_date: '21st October 2021',
  },
  performance_rating: [
    {
      user_appraisal_kpi_id: 6,
      kpi: '',
      objective: '',
      metric: null,
      target: null,
      responsible: '',
      proof: '',
      comments: '',
    },
  ],
})
onMounted(() => {
  isLoading.value = true
  getAppraisalPerformanceRating()
  // getAutomatedRating()
})
const route = useRoute()
const switchTab = (value) => {
  activeTab.value = value
}
const activeTab = ref(1)
const getAppraisalPerformanceRating = async () => {
  try {
    performanceRating.value = {}
    const { status, data } = await workplaceRequestsv2(
      'get',
      `appraisals/${props.id}/performance-rating`
    )
    if (status == 200) {
      performanceRating.value = data.data?.data
      responsible.value = data.data.data.staff_details.fullname
    }
    isLoading.value = false
  } catch (e) {
    console.log(e)
  }
}
// const automatedeRating = ref(null)
// const compliance = ref(null)
// const efficiency = ref(null)

// const getAutomatedRating = async () => {
//   try {
//     const { status, data } = await workplaceRequestsv2(
//       'get',
//       `appraisals/user/automated-rating/score?appraisal_id=${props.id}`
//     )
//     if (status == 200) {
//       automatedeRating.value = data.data.data
//       compliance.value = automatedeRating.value.compliance
//       efficiency.value = automatedeRating.value.efficiency
//     }
//     isLoading.value = false
//   } catch (e) {
//     console.log(e)
//   }
// }

// const rejectAppraisal = async () => {
//   try {
//     const { data, status, message } = await workplaceRequestsv2(
//       'post',
//       `appraisals/reject`,
//       {
//         id: route.params.id,
//       }
//     )

//     if (status == 403) {
//       Swal.fire({
//         icon: 'info',
//         title: 'Info',
//         text: data ? data.message : 'Error',
//       })
//     }

//     if (status == 200 || status == 201) {
//       Swal.fire({
//         icon: 'success',
//         title: 'Submitted',
//         text: 'Appraisal Rejected',
//       })
//       setTimeout(function () {
//         location.reload()
//       }, 2000)
//     } else {
//       Swal.fire({
//         icon: 'info',
//         title: 'Info',
//         text: data ? data.message : 'Try Again',
//       })
//     }
//   } catch (error) {
//     console.error('Error updating appraisal:', error)
//   }
// }

// const submitPerformanceRating = async () => {
//   try {
//     const { data, status, message } = await workplaceRequestsv2(
//       'post',
//       `appraisals/user/performance-rating/score`,
//       {
//         objectives: performanceRating.value.performance_rating,
//       }
//     )
//     if (status == 422) {
//       Swal.fire({
//         icon: 'info',
//         title: 'Info',
//         text: data ? data.message : 'Enter Correct details',
//       })
//     }
//     if (status == 200 || status == 201) {
//       Swal.fire({
//         icon: 'success',
//         title: 'Submitted',
//         text: 'Rated Successfully',
//       })
//       // setTimeout(function () {
//       //   location.reload()
//       // }, 2000)
//     } else {
//       Swal.fire({
//         icon: 'info',
//         title: 'Enter Valid Details',
//         text: data ? data.message : 'Invalid Request',
//       })
//     }
//   } catch (error) {
//     console.error('Error updating appraisal:', error)
//   }
// }
</script>

<template>
  <app-layout>
    <template v-slot:main-content>
      <main class="w-full bg-[#F5F5F5]">
        <section class="">
          <section>
            <PerformanceTab :activeTab="activeTab" @switchTab="switchTab" />
          </section>
          <div
            v-if="activeTab == 1"
            class="mx-3 w-full border border-gray-300 p-2"
          >
            <table class="w-full table-auto border border-secondary text-sm">
              <thead class="bg-gray-200">
                <tr class="border border-secondary capitalize">
                  <th class="border border-secondary p-3">S/N</th>
                  <th class="border border-secondary p-3">KPI</th>
                  <th class="border border-secondary p-3">
                    Objectives/ Description
                  </th>
                  <th class="border border-secondary p-3">
                    Metric/ Measurement
                  </th>
                  <th class="border border-secondary p-3">Target</th>
                  <th class="border border-secondary p-3">Responsible</th>
                  <th class="border border-secondary p-3">
                    Proof of Achievements
                  </th>
                  <th class="border border-secondary p-3">
                    Max Rating Obtainable
                  </th>
                  <th class="border border-secondary p-3">Comment</th>
                </tr>
              </thead>
              <tbody v-if="!isLoading">
                <tr
                  v-for="(
                    performance, index
                  ) in performanceRating.performance_rating"
                  :key="index"
                >
                  <td class="border border-secondary p-3 text-center">
                    {{ index + 1 }}
                  </td>
                  <td class="border border-secondary p-3 text-center">
                    {{ performance.kpi }}
                  </td>
                  <td class="border border-secondary p-3 text-center">
                    {{ performance.objective }}
                  </td>
                  <td class="border border-secondary p-3 text-center">
                    {{ performance.metric }}
                  </td>
                  <td class="border border-secondary p-3 text-center">
                    {{ performance.target }}
                  </td>
                  <td class="border border-secondary p-3 text-center">
                    {{ responsible }}
                  </td>
                  <td class="border border-secondary p-3 text-center">
                    {{ performance.proof }}
                  </td>

                  <td class="border border-secondary p-3 text-center">
                    <div>{{ performance.rating }}</div>
                    <!-- <div v-if="performance.kpi == 'Process Efficiency'">
                      {{ efficiency }}
                    </div>
                    <div v-else-if="performance.kpi == 'Process Compliance'">
                      {{ compliance }}
                    </div>
                    <div v-else class="mb-4">
                      <select
                        v-model="performance.rating"
                        name="dropdown"
                        id="dropdown"
                        class="w-full border border-gray-500 bg-[#EEEEEE] p-2"
                      >
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                    </div> -->
                  </td>
                  <td class="border border-secondary p-3 text-center">
                    <div>{{ performance.appraiser_comment }}</div>
                    <!-- <textarea
                      rows="4"
                      cols="100"
                      v-model="performance.comments"
                      id="comment"
                      placeholder="write here"
                      class="my-2 w-full rounded-md border border-gray-300 p-3 text-sm text-gray-900 focus:outline-none focus:ring-0 dark:bg-white dark:text-black dark:placeholder-gray-400"
                      required
                    ></textarea> -->
                  </td>
                </tr>
              </tbody>
            </table>
            <!-- <div class="my-11 mr-10 flex justify-end gap-4">
              <button
                @click="submitPerformanceRating"
                class="h-[51px] shrink-0 rounded-md border border-solid bg-[#D50036] pb-3.5 pl-7 pr-7 pt-3.5 text-white"
              >
                Submit
              </button>
              <button
                @click="rejectAppraisal"
                class="h-[51px] shrink-0 rounded-md border border-solid bg-[#D50036] pb-3.5 pl-7 pr-7 pt-3.5 text-white"
              >
                Reject
              </button>
            </div> -->
          </div>
          <CoreValues v-if="activeTab == 2" :id="ID" />
          <EmployeesAppraisal v-if="activeTab == 3" :id="ID" />
          <Comments v-if="activeTab == 4" :id="ID" />
        </section>
      </main>
    </template>
  </app-layout>
</template>
