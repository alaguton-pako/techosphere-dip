<script setup>
import AppHorizontalNavigation from '../components/AppHorizontalNavigation.vue'
import { useRouter } from 'vue-router'
import NoData from '../components/NoDataYet.vue'
import CreateTaskModal from '../components/collaboration/CreateTaskModal.vue'
import RateStaffModal from '../components/collaboration/RateStaffModal.vue'
import { ref, onMounted, computed } from 'vue'
import Collaboration from '../services/collaboration';

import { useRoute } from 'vue-router'

const payload = ref({
      task_name : null,
      description : null,
      start_date: null,
      finish_date: null,
      weighting :null,
      project_id: null,
      start_date: null,
      finish_date: null,
      task_status: null,
      dependency:null,
      id: null
});
const route = useRoute()
const searchTerm = ref('')
const projectName = ref('')
const openChat = ref(false)
const addNewTask = ref(false)
const editCurrentTask = ref(false)
const editMessage = ref(false)
const taskList = ref([])

const createTaskData = (formPayload) => {
  // console.log(taskList.value)
  taskList.value.push(formPayload)
}
const close = () => {
  addNewTask.value = false
  editCurrentTask.value = false
}

const selectedTask = (id) => {
    const task = taskList.value.find(item => item.id === id);
    payload.value.task_name = task.task_name
    payload.value.description = task.description
    payload.value.start_date = task.start_date,
    payload.value.finish_date = task.finish_date,
    payload.value.weighting = task.weighting,
    payload.value.project_id = task.project.id,
    payload.value.start_date = task.start_date
    payload.value.internal = null
    payload.value.id = task.id
    payload.value.finish_date = task.finish_date
    payload.value.task_status = task.task_status
    payload.value.dependency = task.dependency
}

const toggleClose = () => {
  editCurrentTask.value = false
  addNewTask.value = false  
  getTasks()
}

const editTask = () => {
  editCurrentTask.value = true
  // emit
}
const closeRating = () => {
  payload.value.staff = null
}
const filteredTaskList = computed(() => {
  if (!searchTerm.value.trim()) {
    // If search term is empty, return the original strategy list
    return taskList.value
  } else {
    // Otherwise, filter the strategy list based on the search term
    return taskList.value.filter((item) => {
      // Check if the search term matches the strategy title
      return item.taskName
        .toLowerCase()
        .includes(searchTerm.value.toLowerCase())
    })
  }
})

const deleteTask = async () => {
    const { status, data } = await Collaboration(
      'get',
      `task/${strategy ? strategy.id : null}`
    )
    if (status === 200) {
      taskList.value = data.data;
    }
}

const getTasks = async () => {
    const { status, data } = await Collaboration(
      'get',
      `project/tasks/${route.params.id}`
    )
    if (status === 200) {
      taskList.value = data.data;

    }
}

onMounted(() => {
  getTasks()

  projectName.value = route.query.id || '' // Default value is empty string if id is not provided
})
</script>

<template lang="">
  <app-layout>
    <template v-slot:main-content>
      <main class="min-h-screen w-full bg-[#F5F5F5] pl-[260px]">
        <AppHorizontalNavigation />
        <div class="relative mx-auto mt-3 flex w-[95%] flex-col gap-2">
          <div class="flex items-center gap-2">
            <div>
              <a href="/workplace/collaboration">
                <button
                  type="button"
                  class="me-2 inline-flex items-center rounded-lg bg-[#0e151f] p-2.5 text-center text-sm font-medium text-white hover:bg-[#0b1118] focus:outline-none focus:ring-4 focus:ring-[#0b1118] dark:bg-[#0e151f] dark:hover:bg-[#0b1118] dark:focus:ring-[#0b1118]"
                >
                  <svg
                    class="h-5 w-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 5H1m0 0l4 4M1 5l4-4"
                    />
                  </svg>
                </button>
              </a>
              <span class="sr-only"> Back </span>
            </div>
            <div class="flex w-[40rem] items-center">
              <div class="w-full text-xl">{{ projectName }}</div>
              <div class="w-full">
                <button
                  class="w-[10rem] rounded-md bg-[#0e151f] px-2 py-3 text-sm text-white"
                  @click="addNewTask = true"
                >
                  Add New Task
                </button>
              </div>
            </div>
          </div>
          <div class="w-1/3">
            <input
              type="search"
              id="default-search"
              class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="search by task title"
              v-model="searchTerm"
            />
          </div>
          <div class="w-full" v-if="taskList.length == 0">
            <NoData />
          </div>
          <div class="mt-6 flex flex-wrap gap-2">
            <!-- this is the start edit component for the card -->
            <div
              class="item-center group relative max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-800"
              v-if="taskList !== 0"
              @click="selectedTask(item.id)"
              v-for="(item, index) in taskList"
              :key="index"
            >
              <a href="#">
                <h5
                  class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white"
                >
                  {{ item.task_name }}
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {{ item.description || 'Task description not available' }}
              </p>
              <p class="my-2 text-[#fff]">
                <span class="text-sm"> Timeline : </span>
                {{ item.start_date }} -- {{ item.finish_date }}
              </p>
             
              <div class="my-2 flex items-center gap-1 text-[#fff]">
                <span class="text-sm"> Assignee: </span>
                <div class="cursor-pointer"
                
                 v-for="(staff, index) in item.dependency" :key=index>
                  <span class="text-sm hover:font-bold" 
                  @click="payload.staff = {staff:staff.staff, task:staff.task_id}" 
                  v-if="staff.staff != null">{{staff.staff.name}}    
                    <span class="text-sm" v-if="staff.staff == null">Nil</span>  
                    <span v-if="index < item.dependency.length - 1">,</span>
                  </span>
                     
                </div>
              </div>
              <p class="my-2 text-[#fff]"  v-for="(ext, index) in item.dependency" :key=index>
                      <span class="text-sm"   v-if="ext.description != null"> External dependency : </span>  <span>{{ext.description}}</span>
                    </p>
              <p class="my-2 text-[#fff]">
                <span class="text-sm"> Weighting : </span> {{ item.weighting }} %
              </p>
              <div class="flex items-center justify-between">
                <a
                  class="inline-flex cursor-pointer items-center rounded-lg px-3 py-2 text-center text-sm font-medium text-black focus:outline-none focus:ring-4 dark:bg-white dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  @click="openChat = true"
                >
                  chat
                  <svg
                    class="ms-2 h-4 w-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M7 8h10M7 12h4m-2 8v-4H4a2 2 0 01-2-2V6a2 2 0 012-2h16a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                    />
                  </svg>
                </a>
                <span class="me-2 rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300" v-if="item.task_status == 'ongoing'">{{item.task_status}}</span>
              <span class="me-2 rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800 dark:bg-green-900 dark:text-white" v-if="item.task_status == 'completed'">{{item.task_status}}</span>
            
              </div>
              <div
                class="absolute right-2 top-0 flex gap-1 rounded-lg bg-white p-1 lg:hidden lg:group-hover:flex"
              >
                <button
                  type="button"
                  class="me-2 inline-flex items-center rounded-lg bg-red-700 p-2 text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                >
                  <svg
                    class="h-3 w-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 6h18M8 6V4a1 1 0 011-1h6a1 1 0 011 1v2m4 0v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6h16zM9 10v10m6-10v10"
                    />
                  </svg>
                  <span class="sr-only">Delete</span>
                </button>
                <button
                  v-if="item.task_status == 'ongoing'"
                  type="button"
                  class="me-2 inline-flex items-center rounded-lg bg-yellow-500 p-2 text-center text-sm font-medium text-white hover:bg-yellow-600 focus:outline-none focus:ring-4 focus:ring-yellow-300 dark:bg-yellow-400 dark:hover:bg-yellow-500 dark:focus:ring-yellow-700"
                  @click="editCurrentTask = !editCurrentTask"
                >
                  <svg
                    class="h-3 w-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15.232 5.232l3.536 3.536M9 11l3.536 3.536M13.414 3H21v7.586M4 21v-7.586l9.414-9.414c.394-.394 1.034-.394 1.414 0l2.122 2.122c.394.394.394 1.034 0 1.414L7.414 21H4z"
                    />
                  </svg>
                  <span class="sr-only">Edit</span>
                </button>
              </div>
            </div>
            <!-- this is the end add edit component for the card -->
          </div>
          <!-- This is where the chat component UI begins -->
          <div
            class="fixed left-[65rem] top-0 mt-[6rem] flex h-[100%] w-[25rem] flex-col justify-around bg-[#0e151f] p-2 text-white"
            v-if="openChat"
          >
            <!-- first component in the chat starting -->
            <div>
              <div>
                <div class="flex items-center gap-2">
                  <h5
                    id="drawer-right-label"
                    class="mb-4 inline-flex items-center text-base font-semibold text-gray-500 dark:text-gray-400"
                  >
                    <svg
                      class="me-2.5 h-6 w-6"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      @click="openChat = false"
                    >
                      <path
                        d="M2 0C.9 0 0 .9 0 2v12c0 1.1.9 2 2 2h1v3l3-3h7c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2H2zm0 2h12v12H5.2L4 16.2V14H2V2zm3 3v2h6V5H5zm0 4v2h4V9H5z"
                      />
                    </svg>
                    Get all the twitter designs ready now
                  </h5>
                </div>
                <button
                  type="button"
                  data-drawer-hide="drawer-right-example"
                  aria-controls="drawer-right-example"
                  class="absolute end-2.5 top-2.5 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                  @click="openChat = false"
                >
                  <svg
                    class="h-3 w-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span class="sr-only">Close menu</span>
                </button>
              </div>
              <!-- this is the bubble component -->

              <div class="my-2 flex items-start gap-2.5">
                <img
                  class="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1716277420481-581a5380c225?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Jese image"
                />
                <div
                  class="leading-1.5 flex w-full max-w-[320px] flex-col rounded-e-xl rounded-es-xl border-gray-200 bg-gray-100 p-4 dark:bg-gray-700"
                >
                  <div class="flex items-center space-x-2 rtl:space-x-reverse">
                    <span
                      class="text-sm font-semibold text-gray-900 dark:text-white"
                      >Bonnie Green</span
                    >
                    <span
                      class="text-sm font-normal text-gray-500 dark:text-gray-400"
                      >11:46</span
                    >
                  </div>
                  <p
                    class="py-2.5 text-sm font-normal text-gray-900 dark:text-white"
                  >
                    That's awesome. I think our users will really appreciate the
                    improvements.
                  </p>
                  <span
                    class="text-sm font-normal text-gray-500 dark:text-gray-400"
                    >Delivered</span
                  >
                </div>
                <button
                  id="dropdownMenuIconButton"
                  data-dropdown-toggle="dropdownDots"
                  data-dropdown-placement="bottom-start"
                  class="inline-flex items-center self-center rounded-lg bg-white p-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-50 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800 dark:focus:ring-gray-600"
                  type="button"
                >
                  <svg
                    class="h-4 w-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 4 15"
                  >
                    <path
                      d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                    />
                  </svg>
                </button>
                <div
                  v-if="editMessage"
                  class="z-10 w-40 divide-y divide-gray-100 rounded-lg bg-white shadow dark:divide-gray-600 dark:bg-gray-700"
                >
                  <ul
                    class="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownMenuIconButton"
                  >
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >Reply</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >Forward</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >Copy</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >Report</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >Delete</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <!-- First part component in the chat ending -->

            <!-- second component starting -->
            <!-- this is the input for chatting itself -->
            <div>
              <div
                class="mt-2 flex items-center rounded-md border border-gray-300 px-2 py-1"
              >
                <img
                  src="../assets/paperclip-inactive.svg"
                  alt=""
                  class="mx-6 cursor-pointer"
                />

                <textarea
                  type="text"
                  placeholder="Type your Message"
                  class="w-full resize-none bg-transparent pr-6 pt-3 focus:outline-none"
                ></textarea>
                <button
                  type="button"
                  class="inline-flex items-center rounded-lg bg-[#0e151f] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-500"
                >
                  <img
                    src="../assets/send-icon.svg"
                    alt=""
                    class="cursor-pointer"
                  />
                </button>
              </div>
              <!-- This is where the input feild ends -->
            </div>
          </div>
          <!-- this is where the chat components ends -->
        </div>
        <!-- Second component ending -->
        <!-- Modal -->
        <div v-if="addNewTask || editCurrentTask">
          <CreateTaskModal 
              @close="toggleClose" 
              @createTaskData="createTaskData"  
              :updateMode = editCurrentTask 
              :formPayload = payload
            />
        </div>
        <!-- Modal Ending -->
        <!-- Rate Staff Modal -->
        <div v-if="payload.staff != null">
          <RateStaffModal 
            :payload="payload.staff"
            @close="closeRating" 
          />
        </div>
        <!-- Modal Ending -->
      </main>
    </template>
  </app-layout>
</template>
