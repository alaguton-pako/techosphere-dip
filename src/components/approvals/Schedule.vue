<script setup>
import { useUserStore } from '@/stores/userStore.js'
import { ref, onMounted, computed } from 'vue'
import AppPagination from '@/components/AppPagination.vue'
import workplaceRequestsv2 from '@/services/workplaceRequestsv2.js'
import Swal from 'sweetalert2'
const from = ref(0)
const to = ref(0)
const pages = ref(1)
const total = ref(0)
const current = ref(1)
const recordsPerPage = ref(20)
const userStore = useUserStore()
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
const approvals = ref([])

const approvalsPayload = ref({
  schedule_id: null,
  status: null,
  tasks: [
    {
      id: 1,
      status: '',
      comment: '',
    },
    {
      id: 2,
      status: '',
      comment: null,
    },
  ],
})

const isHovered = ref({})

const handleMouseOver = (index) => {
  isHovered.value = {}
  isHovered.value[index] = true
}

const handleMouseLeave = (index) => {
  isHovered.value = {}
  isHovered.value[index] = false
}

const toDateTime = (isoDateString) => {
  const date = new Date(isoDateString)

  // Format the date and time as desired
  const formattedDate = date.toLocaleDateString() // Format the date (e.g., "5/1/2024")
  const formattedTime = date.toLocaleTimeString()

  return formattedDate + ' ' + formattedTime
}

const taskComments = ref({})
</script>

<template>
  <div class="bg-white">
    <div class="my-2 border-b bg-white p-10">
      <div class="flex items-center justify-between">
        <div>approval name</div>
        <!-- <div>{{ approval.name }}</div> -->
        <div class="flex items-center justify-center">
          <div class="mx-2 h-3 rounded-lg bg-[#f1f1f1]">
            <div
              class="h-3 rounded-l-lg bg-green-500"
              :style="`width: approval progress in percentage%`"
            ></div>
            <!-- <div
              class="h-3 rounded-l-lg bg-green-500"
              :style="`width:${approval.progress}}%`"
            ></div> -->
          </div>
          <p>approval progress</p>
          <!-- <p>{{ approval.progress }}</p> -->
        </div>
        <div>
          approval.completed_tasks/approval.tasks?.length tasks
          <!-- {{ approval.completed_tasks }}/{{ approval.tasks?.length }}
          tasks -->
        </div>
        <div
          :class="'grid place-content-center rounded border bg-red-600  px-4 py-2 capitalize  text-white'"
        >
          <!-- {{ approval.status.split('_').join(' ') }} -->
          approved ior rejected
        </div>
        <div @click.stop="expandSchedule(approval.name + '-' + index)">
          <img src="@/assets/down-arrow.svg" alt="" />
        </div>
      </div>
      <div class="hidden">
        <ul>
          <li class="my-8 text-sm">
            <h2 class="my-3 font-semibold">KPI: kpi id</h2>
            <!-- <h2 class="my-3 font-semibold">KPI: {{ task.kpi_id }}</h2> -->
            <div class="flex items-center">
              <span>Task Name::&nbsp;</span>
              <!-- <input type="check" :id="`${index}${task.id}`"> -->
              <!-- <img src="../assets/check-square.svg" class="mr-3" /> -->
              <span>task.name</span>
              <!-- <span>{{ task.name }}</span> -->
            </div>
            <div class="flex items-center">
              <span><b>Start Time:&nbsp;</b></span>
              <!-- <input type="check" :id="`${index}${task.id}`"> -->
              <!-- <img src="../assets/check-square.svg" class="mr-3" /> -->
              <span>task.start_time</span>
              <!-- <span>{{ task.start_time }}</span> -->
            </div>
            <div class="flex items-center">
              <span>End Time :&nbsp;</span>
              <!-- <input type="check" :id="`${index}${task.id}`"> -->
              <!-- <img src="../assets/check-square.svg" class="mr-3" /> -->
              <span>task.end_time</span>
              <!-- <span>{{ task.end_time }}</span> -->
            </div>
            <div class="m-3 flex space-x-10 font-semibold">
              <div>
                <label class="pr-3" for="accept">ACCEPT</label>
                <input
                  value="accept"
                  type="radio"
                  :name="`scheduleDecision`"
                  :id="`scheduleAccept`"
                />
              </div>

              <div>
                <label class="px-3" for="reject">REJECT</label>
                <input
                  value="reject"
                  type="radio"
                  :name="`scheduleDecision`"
                  :id="`scheduleReject`"
                />
              </div>
            </div>
            <div class="my-2">
              <b class="text-lg">Comments</b>
              <div class="w-full text-base">
                <span>
                  <!-- Conditional classes based on whether the commenter is the current user -->
                  <div class="flex justify-start bg-slate-300 pl-1">
                    <!-- Displaying content with the condition of hovering -->
                    <span>
                      <!-- {{ comment.content }} -->
                      comment.content
                      <span class="ml-2 text-xs text-gray-500">
                        comment.created_at
                        <!-- {{ toDateTime(comment.created_at) }} -->
                      </span>
                    </span>

                    <span class="p-2">
                      <span class="mr-2 text-sm text-gray-500">
                        <!-- {{ comment.commenter_name }} -->
                        comment.commenter_name
                        <small>comment.created_at</small>
                        <!-- <small>{{ toDateTime(comment.created_at) }}</small> -->
                      </span>
                      <!-- {{ comment.content }} -->
                      comment.content
                    </span>
                  </div>
                </span>
              </div>
            </div>
            <div class="my-2">
              <label class="text-sm font-semibold">Add Comment</label>
              <textarea
                type="text"
                placeholder="Enter comment"
                class="block w-full border border-gray-300 bg-transparent p-2 focus:outline-none"
              ></textarea>
              <button
                class="rounded-sm bg-red-500 p-2 text-white hover:bg-red-700"
              >
                Send message
              </button>
            </div>
          </li>
        </ul>
        <div class="flex space-x-10 font-semibold">
          <div>
            <label class="pr-3" for="accept">ACCEPT</label>
            <input value="accept" type="radio" />
          </div>

          <div>
            <label class="px-3" for="reject">REJECT</label>
            <input value="reject" type="radio" />
          </div>
        </div>

        <button
          type="button"
          class="float-right mt-5 rounded-md bg-primary px-6 py-2 text-sm text-white"
        >
          Submit
        </button>
      </div>
    </div>
    <AppPagination
      :pagination="pagination"
      @@fetchRecords="getPendingSchedule"
    ></AppPagination>
  </div>
</template>
