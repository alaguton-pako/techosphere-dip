<script setup>
import { ref, reactive, onMounted, computed, watch, watchEffect } from 'vue'
import AppLayout from '@/layouts/AppLayout.vue'
import AppHorizontalNavigation from '../components/AppHorizontalNavigation.vue'
import AppModal from '../components/AppModal.vue'
import DateAndSearch from '../components/DateAndSearch.vue'
import TimeSlots from '../components/TimeSlots.vue'
import Datepicker from 'vue3-datepicker'
import workplaceRequestsv2 from '../services/workplaceRequestsv2'
import { useUserStore } from '../stores/userStore'
import LoadingSpinner from '@/components/LoadingSpinner.vue'
import AppPagination from '@/components/AppPagination.vue'
import Swal from 'sweetalert2'

const from = ref(0)
const to = ref(0)
const pages = ref(1)
const total = ref(0)
const current = ref(1)
const recordsPerPage = ref(5)
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

const isLoading = ref(false)
const userStore = useUserStore()
const addingDailySchedule = ref(false)
const selected = ref(new Date().toISOString().split('T')[0])
const currentDate = ref(new Date().toISOString().split('T')[0])

const taskComments = ref({})

const isHovered = ref({})

const taskKey = ref(0)
const handleMouseOver = (index) => {
  isHovered.value = {}
  isHovered.value[index] = true
}

const handleMouseLeave = (index) => {
  isHovered.value = {}
  isHovered.value[index] = false
}

// this is the endpoint for getting the currently logged in user shedules ie his task, updated task and sheduled task

</script>

<template lang="">
  <app-layout>
    <template v-slot:main-content>
      <main class="w-full bg-[#F5F5F5] pl-[260px]">
        <AppHorizontalNavigation />
        <section class="mt-8 grid grid-cols-4 gap-6 p-10">
          <div
            class="rounded-md border border-secondary-gray bg-white text-center"
          >
            <h2
              class="border-b border-b-secondary-gray py-5 text-lg font-medium"
            >
              Average Score
            </h2>
            <div class="pb-8 pt-3 text-[62px] font-bold">
              <!-- {{ ScheduleSummary.average_score || 0 }}% -->
              0%
              <!-- this is a dummy -->
            </div>
          </div>
          <div
            class="rounded-md border border-secondary-gray bg-white text-center"
          >
            <h2
              class="border-b border-b-secondary-gray py-5 text-lg font-medium"
            >
              Number of Tasks
            </h2>
            <div class="pb-8 pt-3 text-[62px] font-bold">
              <!-- {{ ScheduleSummary.number_of_schedules || 0 }} -->
              0
              <!-- this is a dummy -->
            </div>
          </div>
          <div
            class="rounded-md border border-secondary-gray bg-white text-center"
          >
            <h2
              class="border-b border-b-secondary-gray py-5 text-lg font-medium"
            >
              Completed Tasks
            </h2>
            <div class="pb-8 pt-3 text-[62px] font-bold">
              <!-- {{ ScheduleSummary.completed_schedules || 0 }} -->
              0
              <!-- this is a dummy -->
            </div>
          </div>
          <div
            class="rounded-md border border-secondary-gray bg-white text-center"
          >
            <h2
              class="border-b border-b-secondary-gray py-5 text-lg font-medium"
            >
              Pending Tasks
            </h2>
            <div class="pb-8 pt-3 text-[62px] font-bold">
              <!-- {{ ScheduleSummary.pending_schedules || 0 }} -->
              0
              <!-- this is a dummmy -->
            </div>
          </div>
        </section>

        <section class="p-10">
          <DateAndSearch />
          <!-- how do you get this guy right here, it is not looknig like it is been imported -->

          <!-- this is how and where u do your sheduling -->
          <section
            class="flex justify-between border-b border-gray-100 bg-white p-8 text-gray-600"
          >
            <p class="text-2xl font-semibold">My schedule</p>
            <button
              class="mr-14 rounded-md bg-red-600 px-5 py-3 text-white"
              @click="addingDailySchedule = true"
            >
              Send Daily Schedule
            </button>
          </section>
          <!-- this is where the code end for it, i mean for the sheduling functionalities -->

          <!-- And this is the beginnign of the code for all of the shedule the user have created so far -->
          <section
            class="mt-5 flex flex-col border-b border-gray-100 bg-white p-10 text-gray-600"
          >
            <div
              v-for="(schedule, index) in existingDailySchedules"
              :key="index"
            >
              <div class="flex justify-between border-b py-14">
                <div>
                  <div class="font-semibold text-black">
                    <!-- {{ schedule.name }}  -->
                    Shedult Title will show here
                  </div>
                  <div class="text-sm">
                    <!-- {{ schedule.date }} -->
                    shedule date will show here
                  </div>
                </div>
                <div class="flex w-52 items-center">
                  <div
                    class="m-2 h-3 w-full rounded-full bg-green-600 bg-opacity-20"
                    :key="taskKey"
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
                <p>
                  {{ schedule.tasks.filter((task) => task.active).length }}/{{
                    schedule.tasks.length
                  }}
                  tasks
                </p>
                <div
                  class="grid place-content-center rounded-md border px-3 capitalize text-white"
                  :class="[
                    schedule.status.toLowerCase().includes('pending')
                      ? 'grid place-content-center rounded border bg-yellow-600 px-4 py-2 capitalize  text-white'
                      : 'grid place-content-center rounded border bg-red-600  px-4 py-2 capitalize  text-white',
                  ]"
                >
                  {{ schedule.status.split('_').join(' ') }}
                </div>
                <img
                  @click.stop="expandSchedule(schedule.name + '-' + index)"
                  src="../assets/chevron-black.svg"
                  class="cursor-pointer"
                />
              </div>

              <div :data-schedule="`${schedule.name}-${index}`" class="hidden">
                <ul>
                  <li v-for="(task, i) in schedule.tasks" class="my-10 text-sm">
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

                    <div class="w-[75%] border p-2" :key="taskKey">
                      <b class="text-lg">Comments</b>
                      <div
                        v-for="(comment, index) in task.comments"
                        :key="index"
                        class="w-full text-base"
                      >
                        <span v-if="comment.content != null">
                          <!-- Conditional classes based on whether the commenter is the current user -->
                          <div
                            :class="
                              comment.commenter_name ===
                              userStore.$state.user.name
                                ? 'flex justify-end bg-slate-200 pr-1'
                                : 'flex justify-start bg-slate-300 pl-1'
                            "
                            @mouseover="handleMouseOver(comment.id)"
                            @mouseleave="handleMouseLeave(comment.id)"
                          >
                            <!-- Displaying content with the condition of hovering -->
                            <span
                              v-if="
                                comment.commenter_name ===
                                userStore.$state.user.name
                              "
                            >
                              {{ comment.content }}
                              <span
                                v-if="isHovered[comment.id]"
                                class="ml-2 text-xs text-gray-500"
                              >
                                {{ toDateTime(comment.created_at) }}
                              </span>
                            </span>

                            <span v-else class="p-2">
                              <span
                                v-if="isHovered[comment.id]"
                                class="mr-2 text-sm text-gray-500"
                              >
                                {{ comment.commenter_name }}
                                <small>{{
                                  toDateTime(comment.created_at)
                                }}</small>
                              </span>
                              {{ comment.content }}
                            </span>
                          </div>
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

                      <div class="my-2">
                        <label class="text-sm font-semibold">Report</label>
                        <textarea
                          type="text"
                          :id="`comment_${task.id}`"
                          v-model="taskComments[task.id]"
                          placeholder="Enter report"
                          class="block w-full border border-gray-300 bg-transparent p-2 focus:outline-none"
                        ></textarea>
                      </div>
                    </div>
                    <button
                      class="rounded-sm bg-red-500 p-2 text-white hover:bg-red-700"
                      @click.prevent="updateConversation(task.id, schedule.id)"
                    >
                      Send message <span v-if="isLoading" class="loader"></span>
                    </button>
                  </li>
                </ul>
                <div class="flex flex-row text-xl">
                  <input
                    type="checkbox"
                    value="1"
                    v-model="existingDailySchedules[index].closeout"
                  />
                  <span>&nbsp;&nbsp;Close Out</span>
                </div>
                <button
                  v-if="
                    schedule.active != 'completed' &&
                    schedule.status == 'Approved_Schedule'
                  "
                  :id="`closeOutButton${index}`"
                  @click="sendCloseOut(index)"
                  class="float-right mt-5 rounded-md bg-primary px-6 py-2 text-sm text-white"
                >
                  Submit Close Out
                </button>
              </div>
            </div>
            <AppPagination
              :pagination="pagination"
              @fetchRecords="getDailySchedules"
            ></AppPagination>
          </section>
          <!-- this is where the body contents end, i mean the list of created shedules of the logged in users -->
        </section>
      </main>
    </template>
  </app-layout>

  <!-- Create daily schedule (this is the modal for the daily sheduling) -->
  <app-modal v-if="addingDailySchedule">
    <template v-slot:modal-content>
      <form @submit.prevent="sendSchedule">
        <button
          class="ml-auto grid h-10 w-10 place-content-center rounded-full border border-primary text-xl text-primary"
          type="button"
          @click="addingDailySchedule = false"
        >
          𝖷
        </button>
        <header>
          <span
            class="mb-2 flex cursor-pointer items-center"
            @click="addingDailySchedule = false"
          >
            <img src="../assets/left-arrow.svg" alt="" class="mr-2 w-2.5" />
            <h1 class="text-2xl font-bold">Daily Schedule</h1>
          </span>
          <div>Update and Send Daily Schedule & Close out report</div>
        </header>
        <div class="mb-12 mt-20 flex items-end capitalize">
          <div>
            <label for="date" class="font-medium">date</label>
            <div
              class="mr-2 flex rounded border border-gray-400 bg-gray-100 px-3 py-2"
            >
              <input
                v-model="selected"
                type="date"
                name="current-date"
                id="current-date"
                class="bg-gray-100"
                :min="currentDate"
              />
            </div>
          </div>
          <button
            type="button"
            class="ml-6 rounded-md bg-primary px-3 py-2 text-white"
            @click="addTask()"
          >
            ＋ Add KPI
          </button>
        </div>
        <section class="border-b-4 border-secondary-gray pb-14">
          <div class="mt-8 flex flex-row gap-4">
            <div class="flex w-32 flex-col">
              <label htmlFor="kpi">Select KPI </label>
              <select
                id="kpi"
                required
                class="border border-gray-300 p-2 focus:outline-none"
              >
                <option selected disabled>-- Select KPI --</option>
                <option
                  v-for="(kpi, index) in selectKPI"
                  :key="index"
                  :value="kpi.id"
                >
                  {{ kpi.name }}-{{ kpi.type }}
                </option>
              </select>
            </div>
            <div :key="targetKey" class="flex w-32 flex-col">
              <label :for="'kpi' + i">Select Measure </label>
              <select
                :id="'kpi' + i"
                required
                class="border border-gray-300 p-2 focus:outline-none"
                v-model="task.objective_id"
              >
                <option disabled value="">-- Select Measure --</option>
                <option>
                  {{ measure.measure }}
                </option>
              </select>
            </div>
            <div class="flex flex-col">
              <label for="task" class="font-medium capitalize">task</label>
              <input
                class="task-name border border-gray-300 p-2 px-4 focus:outline-none"
              />
            </div>
            <div class="flex flex-col">
              <label for="Start" class="font-medium">Start</label>
              <input
                type="datetime-local"
                class="start-time border border-gray-300 p-2 px-4 focus:outline-none"
              />
              <TimeSlots
                data-start-time
                @pickTime="(payload) => pickTime(payload)"
              />
            </div>
            <div class="flex flex-col">
              <label for="End" class="font-medium">End</label>
              <input
                type="datetime-local"
                required
                :id="`End-${index}`"
                class="end-time border border-gray-300 p-2 focus:outline-none"
              />
              <TimeSlots
                data-end-time
                @pickTime="(time) => pickTime(time, $event)"
              />
            </div>
            <div class="flex items-end">
              <button
                type="button"
                class="rounded-md bg-primary px-3 py-2 text-xl text-white"
                @click="addTask()"
              >
                ＋
              </button>

              <button
                type="button"
                class="rounded-md bg-primary px-3 py-2 text-xl text-white"
              >
                <img src="../assets/trash.svg" alt="" />
              </button>
            </div>
          </div>
        </section>
        <input
          type="submit"
          name=""
          id="submitScheduleButton"
          value="  Send daily schedule"
          class="float-right mt-12 block rounded-md bg-primary px-3 py-2 text-white"
        />
      </form>
    </template>
  </app-modal>
  <!-- Create daily schedule end (this is where the code ends) -->
</template>
