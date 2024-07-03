<script setup>
import { ref, onMounted } from 'vue'
import AppLayout from '../layouts/AppLayout.vue'
import HorizontalNavigation from '../components/AppHorizontalNavigation.vue'
import DateAndSearch from '../components/DateAndSearch.vue'
import workplaceRequestsv2 from '../services/workplaceRequestsv2'
import Swal from 'sweetalert2'
const kpi = ref(false)
const closeOutReports = ref([])
// onMounted(() => {
//   getCloseReports()
// })

// const expandSchedule = (id) => {
//   const div = document.querySelector(`[data-schedule="${id}"]`)

//   if ([...div.classList].includes('hidden')) {
//     div.classList.remove('hidden')
//   } else {
//     div.classList.add('hidden')
//   }
// }
// const existingDailySchedules = ref([])
// const getCloseReports = async () => {
//   try {
//     const { status, data } = await workplaceRequestsv2(
//       'get',
//       `daily-closeout-report/get-user-closeout-reports`
//     )
//     if (status === 200) {
//       console.log('close out report')
//       console.log(data)
//       existingDailySchedules.value = data.data.results.data
//     }
//   } catch (e) {
//     Swal.fire({
//       icon: 'error',
//       title: 'Oops...',
//       text: e.message,
//     })
//   }
// }
</script>
<template>
  <div>
    <app-layout>
      <template v-slot:main-content>
        <main class="min-h-screen w-full bg-[#F5F5F5] pl-[260px]">
          <HorizontalNavigation />
          <section class="p-10">
            <div class="border bg-white">
              <DateAndSearch />
            </div>
            <div
              class="bg-white px-10"
              v-for="(schedule, index) in existingDailySchedules"
              :key="index"
            >
              <div class="flex justify-between border-b py-14">
                <div>
                  <div class="font-semibold text-black">
                    schedule.name
                    <!-- {{ schedule.name }} -->
                  </div>
                  <div class="text-sm">{{ schedule.date }}</div>
                </div>
                <div class="flex w-52 items-center">
                  <div
                    class="m-2 h-3 w-full rounded-full bg-green-600 bg-opacity-20"
                  >
                    100%
                    <!-- <div class="h-3 rounded-full bg-green-600" :style="`width: ${Math.round(
                      Math.floor(
                        (schedule.tasks.filter((task) => task.active).length /
                          schedule.tasks.length) *
                        100
                      )
                    )}%`"></div> -->
                  </div>
                  <p>
                    <!-- {{
                      Math.round(
                        Math.floor(
                          (schedule.tasks.filter((task) => task.active).length /
                            schedule.tasks.length) *
                            100
                        )
                      )
                    }}% -->
                    60%
                  </p>
                </div>
                <p>
                  <!-- {{ schedule.tasks.filter((task) => task.active).length }}/{{
                    schedule.tasks.length
                  }} -->
                  8 tasks
                </p>
                <div
                  class="grid place-content-center rounded-md border px-3 capitalize text-white"
                  :class="{
                    'border-green-600 bg-green-600':
                      schedule.status.toLowerCase() === 'completed',
                    'border-yellow-600 bg-yellow-600':
                      schedule.status.toLowerCase() === 'pending',
                  }"
                >
                  schedule.status
                  <!-- {{ schedule.status }} -->
                </div>
                <img src="../assets/chevron-black.svg" class="cursor-pointer" />
              </div>

              <div :data-schedule="`${schedule.name}-${index}`" class="hidden">
                <ul>
                  <li class="my-8 text-sm">
                    <h2 class="my-3 font-semibold">KPI: schedule.kpi</h2>
                    <!-- <h2 class="my-3 font-semibold">KPI: {{ schedule.kpi }}</h2> -->
                    <div class="flex items-center">
                      <input type="checkbox" />
                      <span>&nbsp;&nbsp;Completed</span>
                    </div>
                    <div class="flex items-center">
                      <span>task.name</span>
                      <!-- <span>{{ task.name }}</span> -->
                    </div>
                    <div class="my-2">
                      <label class="text-sm font-semibold">Report</label>
                      <input
                        type="text"
                        placeholder="Enter report"
                        class="block w-full border border-gray-300 bg-transparent p-2 focus:outline-none"
                      />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </main>
      </template>
    </app-layout>
  </div>
</template>
