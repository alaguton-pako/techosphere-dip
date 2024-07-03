<template>
  <app-layout>
    <template v-slot:main-content>
      <main class="min-h-screen w-full bg-[#F5F5F5]">
        <section class="p-5">
          <div class="mr-10 flex flex-row-reverse">
            <input
              datepicker
              datepicker-format="mm/dd/yyyy"
              type="date"
              class="block w-[250px] rounded-lg border border-gray-300 bg-gray-50 p-2.5 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-400 dark:text-gray-600 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Select date"
            />
          </div>

          <LoadingSpinner v-if="isLoading" />

          <div class="mt-4 p-3">
            <div class="">
              <router-link
                class="my-6 flex flex-col"
                v-for="(department, index) in departments"
                :key="index"
                :to="{ name: 'Department', params: { id: department.name } }"
              >
                <div
                  class="ml-3 flex justify-start text-start text-[37px] font-semibold text-gray-800 underline-offset-2"
                >
                  {{ department.name }}
                  <div class="ml-2 mt-6">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.75 1.5C3.15326 1.5 2.58097 1.73705 2.15901 2.15901C1.73705 2.58097 1.5 3.15326 1.5 3.75V14.25C1.5 14.8467 1.73705 15.419 2.15901 15.841C2.58097 16.2629 3.15326 16.5 3.75 16.5H14.25C14.8467 16.5 15.419 16.2629 15.841 15.841C16.2629 15.419 16.5 14.8467 16.5 14.25V10.905C16.5 10.7061 16.579 10.5153 16.7197 10.3747C16.8603 10.234 17.0511 10.155 17.25 10.155C17.4489 10.155 17.6397 10.234 17.7803 10.3747C17.921 10.5153 18 10.7061 18 10.905V14.25C18 15.2446 17.6049 16.1984 16.9016 16.9016C16.1984 17.6049 15.2446 18 14.25 18H3.75C2.75544 18 1.80161 17.6049 1.09835 16.9016C0.395088 16.1984 0 15.2446 0 14.25V3.75C0 2.75544 0.395088 1.80161 1.09835 1.09835C1.80161 0.395088 2.75544 0 3.75 0H7.095C7.29391 0 7.48468 0.0790178 7.62533 0.21967C7.76598 0.360322 7.845 0.551088 7.845 0.75C7.845 0.948912 7.76598 1.13968 7.62533 1.28033C7.48468 1.42098 7.29391 1.5 7.095 1.5H3.75ZM10.155 0.75C10.155 0.551088 10.234 0.360322 10.3747 0.21967C10.5153 0.0790178 10.7061 0 10.905 0H17.25C17.4489 0 17.6397 0.0790178 17.7803 0.21967C17.921 0.360322 18 0.551088 18 0.75V7.095C18 7.29391 17.921 7.48468 17.7803 7.62533C17.6397 7.76598 17.4489 7.845 17.25 7.845C17.0511 7.845 16.8603 7.76598 16.7197 7.62533C16.579 7.48468 16.5 7.29391 16.5 7.095V2.562L11.4345 7.626C11.3653 7.69763 11.2826 7.75477 11.1911 7.79408C11.0996 7.83338 11.0011 7.85407 10.9016 7.85494C10.802 7.8558 10.7032 7.83683 10.611 7.79912C10.5189 7.76141 10.4351 7.70572 10.3647 7.6353C10.2943 7.56488 10.2386 7.48114 10.2009 7.38897C10.1632 7.29679 10.1442 7.19803 10.1451 7.09845C10.1459 6.99886 10.1666 6.90045 10.2059 6.80895C10.2452 6.71744 10.3024 6.63469 10.374 6.5655L15.4395 1.5H10.9035C10.7046 1.5 10.5138 1.42098 10.3732 1.28033C10.2325 1.13968 10.1535 0.948912 10.1535 0.75H10.155Z"
                        fill="#D50036"
                      />
                    </svg>
                  </div>
                </div>
                <div class="mt-8 grid grid-cols-2">
                  <div
                    class="mx-10 flex flex-col place-items-center justify-center rounded-lg border border-black bg-white pb-3 pt-5"
                  >
                    <circle-progress
                      class="text-[32px]"
                      :percent="department.efficiency"
                      unit="percent"
                      :gradient="{
                        // angle: chartValues.efficiency,
                        startColor: '#ff0000',
                        stopColor: '#ffff00',
                      }"
                    >
                    </circle-progress>
                    <div class="text-[32px]">
                      Process Efficiency : {{ department.efficiency }} %
                    </div>
                  </div>
                  <div
                    class="mx-10 flex flex-col place-items-center justify-center rounded-lg border border-black bg-white pb-3 pt-5"
                  >
                    <circle-progress
                      class="text-[32px]"
                      :percent="department.obligation"
                      unit="percent"
                      :gradient="{
                        // angle: chartValues.efficiency,
                        startColor: '#ff0000',
                        stopColor: '#ffff00',
                      }"
                    >
                    </circle-progress>
                    <div class="text-[32px]">
                      Completed Obligation : {{ department.obligation }}%
                    </div>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </section>
      </main>
    </template>
  </app-layout>
</template>
<script setup>
import CircleProgress from 'vue3-circle-progress'
import { onMounted, ref } from 'vue'
import workplaceRequestsv2 from '../../../../services/workplaceRequestsv2'
import Swal from 'sweetalert2'
import { useRouter } from 'vue-router'
import LoadingSpinner from '@/components/LoadingSpinner.vue'

const router = useRouter()
const isLoading = ref(false)
const departments = ref([
  // {
  //   name: 'COMMERCIAL',
  //   size: '400',
  //   efficiency: 0,
  //   obligation: 0,
  // },
  // {
  //   name: 'FINANCE',
  //   size: '400',
  //   efficiency: 0,
  //   obligation: 0,
  // },
  // {
  //   name: 'OPERATIONS',
  //   size: '400',
  //   efficiency: 0,
  //   obligation: 0,
  // },
  // {
  //   name: 'STRATEGY/INNOVATION',
  //   size: '400',
  //   efficiency: 0,
  //   obligation: 0,
  // },
  // {
  //   name: 'TECHNOLOGY',
  //   size: '400',
  //   efficiency: 0,
  //   obligation: 0,
  // },
])

const performanceData = ref({
  Operations: {
    id: 1,
    department: 'Operations',
    created_at: '',
    updated_at: '',
    analysis: {
      obligation: 0,
      efficiency: 0,
      compliance: 0,
      score: 0,
    },
  },
  Networks: {
    id: 2,
    department: 'Networks',
    created_at: '',
    updated_at: '',
    analysis: {
      obligation: 0,
      efficiency: 0,
      compliance: 0,
      score: 0,
    },
  },
  Marketing: {
    id: 3,
    department: 'Marketing',
    created_at: '',
    updated_at: '',
    analysis: {
      obligation: 0,
      efficiency: 0,
      compliance: 0,
      score: 0,
    },
  },
  Finance: {
    id: 4,
    department: 'Finance',
    created_at: '',
    updated_at: '',
    analysis: {
      obligation: 0,
      efficiency: 0,
      compliance: 0,
      score: 0,
    },
  },
  Commercial: {
    id: 5,
    department: 'Commercial',
    created_at: '',
    updated_at: '',
    analysis: {
      obligation: 0,
      efficiency: 0,
      compliance: 0,
      score: 0,
    },
  },
  Management: {
    id: 6,
    department: 'Management',
    created_at: '',
    updated_at: '',
    analysis: {
      obligation: 0,
      efficiency: 0,
      compliance: 0,
      score: 0,
    },
  },
  'Customer Experience': {
    id: 7,
    department: 'Customer Experience',
    created_at: '',
    updated_at: '',
    analysis: {
      obligation: 0,
      efficiency: 0,
      compliance: 0,
      score: 0,
    },
  },
  'Innovation(Strategy)': {
    id: 8,
    department: 'Innovation(Strategy)',
    created_at: '',
    updated_at: '',
    analysis: {
      obligation: 0,
      efficiency: 0,
      compliance: 0,
      score: 0,
    },
  },
  Technology: {
    id: 9,
    department: 'Technology',
    created_at: '',
    updated_at: '',
    analysis: {
      obligation: 0,
      efficiency: 0,
      compliance: 0,
      score: 0,
    },
  },
})
onMounted(() => {
  isLoading.value = true
  getPerformanceOverview()
  //   getUnitPerformanceOverview();
})
const getPerformanceOverview = async () => {
  try {
    const { status, data } = await workplaceRequestsv2(
      'get',
      'staff-performance/overview'
    )
    if (status == 200) {
      performanceData.value = data.data.results.data
      // departments.value = []
      Object.values(performanceData.value).forEach((v, k) => {
        let chartData = {
          name: 'COMMERCIAL',
          size: '400',
          efficiency: 0,
          obligation: 0,
        }
        chartData.name = v.department
        chartData.efficiency = Math.round(v.analysis.efficiency)
        chartData.obligation = Math.round(v.analysis.obligation)
        chartData.size = '400'
        departments.value.push(chartData)
      })
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
</script>
