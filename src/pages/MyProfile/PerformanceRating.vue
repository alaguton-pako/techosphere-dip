<script setup>
import AppHorizontalNavigation from '@/components/AppHorizontalNavigation.vue'
import NameTag from '@/components/HR/PerformanceManagement/Appraisal/NameTag.vue'
import PerformanceTab from '@/components/HR/PerformanceManagement/Appraisal/PerformanceTab.vue'
import CoreValues from '@/components/HR/PerformanceManagement/Appraisal/CoreValues.vue'
import EmployeesAppraisal from '@/components/HR/PerformanceManagement/Appraisal/EmployeesAppraisal.vue'
import Comments from './Comment.vue'
import { onMounted, ref } from 'vue'
import workplaceRequestsv2 from '@/services/workplaceRequestsv2'
import { useRoute } from 'vue-router'
import { useUserStore } from '@/stores/userStore'
import Swal from 'sweetalert2'

import AppModal from '../../components/AppModal.vue'
const store = useUserStore()

let responsible = ref('')
responsible = 'Ahmed' || store.$state.user.name
const isLoading = ref(true)
const initialProofValues = ref([])

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
      id: 2,
      kpi: '',
      objective: '',
      user_appraisal_kpi_id: '',
      metric: null,
      target: null,
      responsible: '',
      proof: '',
    },
  ],
})
const kpi_id = ref()
onMounted(() => {
  isLoading.value = true
  getAppraisalPerformanceRating()
  getAutomatedRating()
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
      `appraisals/${route.params.id}/performance-rating`
    )
    if (status == 200) {
      performanceRating.value = data.data?.data
    }
    isLoading.value = false
  } catch (e) {}
}
const automatedeRating = ref(null)
const compliance = ref(null)
const efficiency = ref(null)

const getAutomatedRating = async () => {
  try {
    const { status, data } = await workplaceRequestsv2(
      'get',
      `appraisals/user/automated-rating/score?appraisal_id=${route.params.id}`
    )
    if (status == 200) {
      automatedeRating.value = data.data.data
      compliance.value = automatedeRating.value.compliance
      efficiency.value = automatedeRating.value.efficiency
    }
    isLoading.value = false
  } catch (e) {
    console.log(e)
  }
}

// const updateAppraisalPerformanceRating = async () => {
//   try {
//     const updatedPerformanceRating =
//       performanceRating.value.performance_rating.map((performance) => {
//         return {
//           user_appraisal_kpi_id: performance.id,
//           proof: performance.proof, // update performance proof
//         }
//       })

//     const { data, status, message } = await workplaceRequestsv2(
//       'post',
//       `appraisals/user/work-done/update`,
//       {
//         objectives: updatedPerformanceRating,
//       }
//     )
//     if (message === 'Success' || status === 404) {
//       // performanceRating.value = data.data?.data || {}
//       console.log( updatedPerformanceRating)
//     }
//   } catch (error) {
//     console.error('Error updating appraisal:', error)
//   }
// }

const updateAppraisalPerformanceRating = async () => {
  try {
    const { data, status, message } = await workplaceRequestsv2(
      'post',
      `appraisals/user/work-done/update`,
      {
        objectives: performanceRating.value.performance_rating,
      }
    )

    if (status == 422) {
      Swal.fire({
        icon: 'info',
        title: 'Info',
        text: data ? data.message : 'Enter Correct details',
      })
    }

    if (status == 200 || status == 201) {
      Swal.fire({
        icon: 'success',
        title: 'Submitted',
        text: 'Updated Successfully',
      })
      setTimeout(function () {
        location.reload()
      }, 2000)
    } else {
      Swal.fire({
        icon: 'info',
        title: 'Enter Valid Details',
        text: data ? data.message : 'Invalid Request',
      })
    }
  } catch (error) {
    console.error('Error updating appraisal:', error)
  }
}

const submitToHR = async () => {
  try {
    const { data, status } = await workplaceRequestsv2(
      `post`,
      `appraisals/send-to-team-lead`,
      {
        id: route.params.id,
      }
    )
    if (status == 403) {
      Swal.fire({
        icon: 'info',
        title: data.message,
        text: data ? data.message : 'Invalid Request',
      })
    }
    if (status == 200 || status == 201) {
      Swal.fire({
        icon: 'success',
        title: 'Submitted',
        text: 'Appraisal Sent Successfully',
      })
      setTimeout(function () {
        location.reload()
      }, 2000)
    } else {
      Swal.fire({
        icon: 'info',
        title: 'Enter Valid Details',
        text: data ? data.message : 'Invalid Request',
      })
    }
  } catch (e) {
    console.log(e)
  }
}
</script>

<template>
  <app-layout>
    <template v-slot:main-content>
      <main class="w-full bg-[#F5F5F5] pl-[260px]">
        <AppHorizontalNavigation />
        <section class="p-9">
          <NameTag :name="performanceRating?.staff_details?.fullname" />
        </section>

        <section class="p-10">
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
                  <th class="border border-secondary p-3">Rating Obtained</th>
                  <th class="border border-secondary p-3">Manager Comment</th>
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
                    <textarea
                      v-model="performance.proof"
                      id="comment"
                      placeholder="write here"
                      class="my-2 w-[350px] rounded-md border border-gray-300 p-2 text-sm text-gray-900 focus:outline-none focus:ring-0 dark:bg-white dark:text-black dark:placeholder-gray-400"
                      required
                    ></textarea>
                  </td>
                  <td class="border border-secondary p-3 text-center">
                    <div v-if="performance.kpi == 'Process Efficiency'">
                      {{ efficiency }}
                    </div>
                    <div v-else-if="performance.kpi == 'Process Compliance'">
                      {{ compliance }}
                    </div>
                    <div v-else>{{ performance.rating }}</div>
                  </td>
                  <td class="w-[200px] border border-secondary p-3 text-center">
                    {{ performance.appraiser_comment }}
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="my-11 mr-10 flex justify-end gap-4">
              <button
                @click="updateAppraisalPerformanceRating"
                class="h-[51px] w-[121px] shrink-0 rounded-md border border-solid bg-[#D50036] pb-3.5 pt-3.5 text-white"
              >
                update
              </button>
              <button
                @click="submitToHR"
                class="h-[51px] w-[121px] shrink-0 rounded-md border border-solid bg-[#D50036] pb-3.5 pt-3.5 text-white"
              >
                Send Appraisal
              </button>
            </div>
          </div>
          <CoreValues v-if="activeTab == 2" />
          <EmployeesAppraisal v-if="activeTab == 3" />
          <Comments v-if="activeTab == 4" />
        </section>
      </main>
    </template>
  </app-layout>
</template>
