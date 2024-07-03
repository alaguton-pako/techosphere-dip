<template>
  <app-layout>
    <template v-slot:main-content>
      <main class="min-h-screen w-full bg-[#F5F5F5] pl-[260px]">
        <AppHorizontalNavigation />
        <section class="p-9"><NameTag :name="route.params.id" /></section>
        <section class="p-10">
          <div class="mx-3 my-12 w-full border border-gray-300">
            <div class="my-4 w-full border-gray-400 p-5">
              <div class="mb-3 pb-5 text-[35px] font-semibold">
                {{ performance.department }}
              </div>
              <div class="mt-5 flex flex-row justify-center">
                <div
                  class="mx-10 flex w-1/2 flex-col place-items-center justify-center gap-10 border border-black bg-white"
                >
                  <circle-progress
                    class="text-[32px]"
                    :percent="performance.analysis?.efficiency"
                    unit="percent"
                    :gradient="{
                      startColor: '#ff0000',
                      stopColor: '#ffff00',
                    }"
                  >
                  </circle-progress>
                  <div class="text-[32px]">
                    Process Efficiency :
                    {{ performance.analysis?.efficiency }} %
                  </div>
                </div>
                <div
                  class="mx-10 flex h-[400px] w-1/2 flex-col place-items-center justify-center gap-10 border border-black bg-white"
                >
                  <circle-progress
                    class="text-[32px]"
                    :percent="performance.analysis?.obligation"
                    unit="percent"
                    :gradient="{
                      startColor: '#ff0000',
                      stopColor: '#ffff00',
                    }"
                  >
                  </circle-progress>
                  <div class="text-[32px]">
                    Completed Obligation :{{
                      performance.analysis?.obligation
                    }}
                    %
                  </div>
                </div>
              </div>
              <section
                class="my-12 flex flex-row-reverse items-end justify-between"
              >
                <div class="flex flex-row-reverse items-center">
                  <div class="mx-4 flex items-center">
                    <input
                      placeholder="Search"
                      class="w-[230px] rounded-l-md border border-r-0 border-secondary p-2 focus:outline-none"
                    />
                    <button
                      class="h-full rounded-r-md border border-secondary bg-primary-gray px-3 py-2.5"
                    >
                      <img src="../../../../assets/search-white.svg" alt="" />
                    </button>
                  </div>
                  <div>
                    <input
                      datepicker
                      datepicker-format="mm/dd/yyyy"
                      type="date"
                      class="block w-[230px] rounded-lg border border-gray-300 bg-gray-50 p-2.5 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-400 dark:bg-gray-400 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                      placeholder="Select date"
                    />
                  </div>
                </div>
              </section>
              <table
                class="my-12 w-full table-auto border border-secondary text-sm"
              >
                <thead class="bg-gray-200">
                  <tr class="border border-secondary capitalize">
                    <th class="border border-secondary p-3">Staff Number</th>
                    <th class="border border-secondary p-2">Name</th>
                    <th class="border border-secondary p-3">Unit</th>
                    <th class="border border-secondary p-3">Role</th>
                    <th class="border border-secondary p-3">
                      Compliance Rating(%)
                    </th>
                    <th class="border border-secondary p-3">
                      Efficiency Rating(%)
                    </th>
                    <th class="border border-secondary p-3">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(employee, index) in employees" :key="index">
                    <td class="border border-secondary p-3 text-center">
                      {{ employee.id }}
                    </td>
                    <td class="border border-secondary p-3 text-center">
                      {{ employee.name }}
                    </td>
                    <td class="border border-secondary p-3 text-center">
                      {{ employee.unit }}
                    </td>
                    <td class="border border-secondary p-3 text-center">
                      {{ employee.role }}
                    </td>
                    <td class="border border-secondary p-3 text-center">
                      {{ employee.compliance }}%
                    </td>
                    <td class="border border-secondary p-3 text-center">
                      {{ employee.efficiency }}%
                    </td>
                    <td
                      class="border border-secondary p-3 text-center underline"
                    >
                      <router-link
                        to="/performance-management/employee-performance"
                      >
                        View</router-link
                      >
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
    </template>
  </app-layout>
</template>
<script setup>
import AppHorizontalNavigation from '../../../AppHorizontalNavigation.vue'
import NameTag from '../Appraisal/NameTag.vue'
import CircleProgress from 'vue3-circle-progress'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import workplaceRequestsv2 from '../../../../services/workplaceRequestsv2'
import Swal from 'sweetalert2'

onMounted(() => {
  getEmployee()
})

const route = useRoute()
const performance = ref({
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
})
const employees = ref({
  id: 1,
  name: '',
  unit: 'Operations',
  role: '',
  compliance: 0,
  efficiency: 0,
})

const getEmployee = async () => {
  try {
    const { status, data } = await workplaceRequestsv2(
      'get',
      'staff-schedule/department/breakdown/1'
    )
    if (status === 200) {
      const deptAnalysis = data.data.data.dept_analysis ?? {
        department: {},
        analysis: {},
      }
      const users = data.data.data.users ?? []

      performance.value = {
        ...deptAnalysis.department,
        analysis: deptAnalysis.analysis,
      }

      employees.value = users
    } else {
      performance.value = { department: {}, analysis: {} }
      employees.value = []
    }
  } catch (e) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: e.message,
    })
    performance.value = { department: {}, analysis: {} }
    employees.value = []
  }
}
</script>
