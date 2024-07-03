<template>
  <app-layout>
    <template v-slot:main-content>
      <main class="min-h-screen w-full bg-[#F5F5F5] pl-[260px]">
        <AppHorizontalNavigation />
        <section class="p-9">
          <Tab
            @click="
              $router.push({
                name: 'Department',
                params: { id: 'departments' },
              })
            "
          />
        </section>
        <section class="p-10">
          <div class="mx-3 my-12 w-full border border-gray-300">
            <div class="my-4 w-full border-gray-200 p-4">
              <div class="grid grid-cols-2">
                <div class="text-[24px] text-lg font-semibold">
                  Schedules and Reports
                </div>
                <div class="flex flex-row items-end justify-end">
                  <div class="flex flex-row-reverse">
                    <div class="mx-5 flex items-center">
                      <input
                        placeholder="Search"
                        class="w-[230px] rounded-l-md border border-r-0 border-secondary p-2 focus:outline-none"
                      />
                      <button
                        class="rounded-r-md border border-secondary bg-primary-gray px-3 py-2.5"
                      >
                        <img src="../../../../assets/search-white.svg" alt="" />
                      </button>
                    </div>
                    <div class="mx-3">
                      <select
                        class="w-[230px] rounded-md border border-secondary p-2.5 focus:outline-none"
                      >
                        <option value="" selected>Sort Custom Fields</option>
                        <option value="email">Email</option>
                        <option value="phone">Phone</option>
                        <option value="name">Name</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div
                v-for="(schedule, index) in existingDailySchedules"
                :key="index"
                class="my-8 grid grid-cols-4 gap-4 shadow-sm"
              >
                <div class="grid grid-cols-1">
                  <div class="font-semibold">{{ schedule.name }}</div>
                  <div class="font-light">{{ schedule.date }}</div>
                </div>
                <div class="flex flex-row items-center">
                  <div
                    class="m-2 h-3 w-full rounded-full bg-green-600 bg-opacity-20"
                  >
                    <div
                      class="h-3 rounded-full bg-green-600"
                      :style="`width: ${Math.round(
                        Math.floor(
                          (schedule.tasks.filter((task) => task.active).length /
                            schedule.tasks.length) *
                            100
                        )
                      )}%`"
                    ></div>
                  </div>
                  <p>
                    {{
                      Math.round(
                        Math.floor(
                          (schedule.tasks.filter((task) => task.active).length /
                            schedule.tasks.length) *
                            100
                        )
                      )
                    }}%
                  </p>
                </div>
                <div class="flex flex-row items-center font-light">
                  {{ schedule.tasks.filter((task) => task.active).length }}/{{
                    schedule.tasks.length
                  }}
                  tasks
                </div>
                <div class="flex flex-row">
                  <div
                    class="h-10 w-full items-start rounded-md border border-gray-500 bg-gray-600 text-center text-white"
                    :class="[
                      schedule.status.toLowerCase().includes('pending')
                        ? 'grid place-content-center rounded border bg-yellow-600 px-4 py-2 capitalize  text-white'
                        : 'grid place-content-center rounded border bg-red-600  px-4 py-2 capitalize  text-white',
                    ]"
                  >
                    {{ schedule.status.split('_').join(' ') }}
                  </div>
                  <div class="mx-7 flex flex-row items-end justify-items-end">
                    <img
                      @click.stop="expandSchedule(schedule.name + '-' + index)"
                      src="../../../../assets/chevron-black.svg"
                      class="cursor-pointer"
                    />
                  </div>
                </div>
                <div
                  :data-schedule="`${schedule.name}-${index}`"
                  class="hidden"
                >
                  <ul>
                    <li
                      v-for="(task, i) in schedule.tasks"
                      class="my-10 text-sm"
                    >
                      <h2 class="my-1 text-base font-semibold uppercase">
                        kpi: {{ task.kpi_id }}
                      </h2>
                      <h2 class="my-1 text-base font-semibold uppercase">
                        Start Time: {{ task.start_time }}
                      </h2>
                      <h2 class="my-1 text-base font-semibold uppercase">
                        End Time: {{ task.end_time }}
                      </h2>

                      <div
                        class="flex items-center py-1 text-base font-semibold capitalize"
                      >
                        <span> Description: {{ task.name }}</span>
                      </div>

                      <div
                        class="flex items-center py-1 text-base font-semibold capitalize"
                      >
                        <span> Status: {{ statuses[task.active] }}</span>
                      </div>

                      <b class="text-lg">Comments</b>
                      <div
                        v-for="(comment, index) in task.comments"
                        class="flex items-center py-1 text-base font-semibold capitalize"
                      >
                        <span>
                          {{ comment.commenter_name }} : {{ comment.content }}
                        </span>
                      </div>

                      <div class="flex items-center text-base font-bold">
                        <input
                          type="checkbox"
                          :checked="task.active"
                          v-model="
                            existingDailySchedules[index].tasks[i].active
                          "
                        />
                        <span>&nbsp;&nbsp;Completed</span>
                      </div>

                      <!-- <div class="my-2">
                        <label class="text-sm font-semibold">Report</label>
                        <textarea
                          type="text"
                          :id="`comment_${task.id}`"
                          placeholder="Enter report"
                          class="block w-full border border-gray-300 bg-transparent p-2 focus:outline-none"
                        ></textarea>
                      </div> -->
                    </li>
                  </ul>
                  <!-- <div class="flex flex-row text-xl">
                    <input
                      type="checkbox"
                      value="1"
                      v-model="existingDailySchedules[index].closeout"
                    />
                    <span>&nbsp;&nbsp;Close Out</span>
                  </div> -->
                  <!-- <button
                    v-if="
                      schedule.active != 'completed' &&
                      schedule.status == 'Approved_Schedule'
                    "
                    :id="`closeOutButton${index}`"
                    @click="sendCloseOut(index)"
                    class="float-right mt-5 rounded-md bg-primary px-6 py-2 text-sm text-white"
                  >
                    Submit Close Out
                  </button> -->
                </div>
              </div>
            </div>
            <div class="my-4 w-full border-gray-200 p-4">
              <div class="my-4 flex flex-row">
                <div class="text-[24px] text-lg font-semibold">
                  Confirmations
                </div>
              </div>
              <div class="my-3 grid grid-cols-4 gap-4 shadow-sm">
                <div class="grid grid-cols-1">
                  <div class="font-semibold">Meetings</div>
                  <div class="font-light">06/01/2024</div>
                </div>
                <div class="flex flex-row items-center">
                  <div
                    class="h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700"
                  >
                    <div
                      class="h-2.5 rounded-full bg-green-600"
                      style="width: 85%"
                    ></div>
                  </div>
                  <div class="mx-2 font-extralight">90%</div>
                </div>
                <div class="flex flex-row items-center">
                  <div class="mx-3 w-full font-light">5/7 attended</div>
                </div>
                <div class="flex flex-row">
                  <div
                    class="h-10 w-full items-start text-center text-white"
                  ></div>
                  <div class="mx-7 flex flex-row items-end justify-items-end">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      fill="none"
                    >
                      <path
                        d="M36 18L24 30L12 18"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </template>
  </app-layout>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import AppHorizontalNavigation from '../../../AppHorizontalNavigation.vue'
import Tab from './Tab.vue'
import workplaceRequestsv2 from '../../../../services/workplaceRequestsv2.js'
const schedules = ref([])

const userId = ref('242')

const expandSchedule = (id) => {
  const div = document.querySelector(`[data-schedule="${id}"]`)
  if ([...div.classList].includes('hidden')) {
    div.classList.remove('hidden')
  } else {
    div.classList.add('hidden')
  }
}

const statuses = ref({
  0: 'pending',
  1: 'completed',
  2: 'approved',
  3: 'rejected',
})

onMounted(() => {
  fetchSchedules()
  getDailySchedules()
})

const getDailySchedules = async (pageNumber) => {
  existingDailySchedules.value = []
  isLoading.value = true
  const { status, data } = await workplaceRequestsv2(
    'get',
    `staff-schedule/daily-schedule?user_id=${userId.value}&per_page=${recordsPerPage.value}&page=${pageNumber}`
  )
  if (status === 200) {
    let results = data.data.results
    existingDailySchedules.value = results.data
    current.value = results.pagination.current_page
    from.value = results.pagination.from
    to.value = results.pagination.to
    pages.value = results.pagination.pages
    total.value = results.pagination.total
    isLoading.value = false
  } else {
    console.error('Failed to fetch daily schedules:', data)
    isLoading.value = false
  }
}

const fetchSchedules = async () => {
  const { status, data } = await workplaceRequestsv2(
    'get',
    `staff-schedule/daily-schedule?staff_id=${userId.value}`
  )
  if (status === 200 && data.data.results) {
    schedules.value = data.data.results
  } else {
    schedules.value = []
  }
}

const existingDailySchedules = ref([])
const isLoading = ref(false)
const recordsPerPage = ref(10)
const current = ref(0)
const from = ref(0)
const to = ref(0)
const pages = ref(0)
const total = ref(0)

getDailySchedules(1)
const ScheduleSummary = ref([])
async function getScheduleSummary() {
  const { status, data } = await workplaceRequestsv2(
    'get',
    'staff-schedule/summary'
  )
  if (status === 200) {
    ScheduleSummary.value = data.data.results.data
  }
}
</script>
