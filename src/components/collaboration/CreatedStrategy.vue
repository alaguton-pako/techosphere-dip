<script setup>
import { onMounted, ref, watch } from 'vue';
import NoData from '../NoDataYet.vue';
import CreateProjectModal from './CreateProjectModal.vue';
import Collaboration from '../../services/collaboration';
import router from '../../router/index'

const updateMode = ref(false);

// Props
const props = defineProps({
  strategy: Object
});

const emit = defineEmits('currentProject', );


// Reactive variables
const createProject = ref(false);
const projectList = ref(props.strategy ? props.strategy.project : {});
const getProjects = async () => {
    const { status, data } = await Collaboration(
      'get',
      `project/${props.strategy ? props.strategy.id : null}`
    )
    if (status === 200) {
      projectList.value = data.data;

    }
  }

  // Watch for strategy changes to update the payload
const payload = ref({
  strategy_name: props.strategy ? props.strategy.name : null,
  project_name: null,
  start_date: null,
  finish_date: null,
  weighting: null,
  description: null,
  strategy_id: props.strategy ? props.strategy.id : null
});

const selectedProject = (id) => {
    const project = projectList.value.find(item => item.id === id);
    payload.value.strategy_name = project.strategy_name
    payload.value.project_name = project.project_name
    payload.value.start_date = project.start_date,
    payload.value.finish_date = project.finish_date,
    payload.value.weighting = project.weighting,
    payload.value.description = project.description,
    payload.value.strategy_id = project.strategy_id
    payload.value.id = project.id
}
  

const goToTasks = (id) => {
  router.push({name:"collaboration-project", params:{id}})
}


const deleteProject = async (id) => {
    const { status, data } = await Collaboration(
      'delete',
      `project/delete/${id}`
    )
    if (status === 200) {
      toggleClose()
    }
  }



watch(() => props.strategy, (newStrategy) => {
  payload.value.strategy_name = newStrategy ? newStrategy.name : null;
  payload.value.strategy_id = newStrategy ? newStrategy.id : null;
  projectList.value = newStrategy ? newStrategy.project : {};
});

// Methods

const toggleClose = () => {
  updateMode.value = false
  createProject.value = false
  payload.value = {
    strategy_name: props.strategy ? props.strategy.name : null,
    project_name: null,
    start_date: null,
    finish_date: null,
    weighting: null,
    description: null,
    strategy_id: props.strategy ? props.strategy.id : null
  }
  getProjects()
}

</script>

<template>
  <div class="mt-2">
    <div class="flex flex-col gap-2">
      <!-- Search Bar -->
      <div>
        <div class="relative">
          <div class="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
            <svg class="h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input type="search" id="default-search" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" placeholder="Search by project title" />
        </div>
      </div>
      
      <!-- Add New Project Button -->
      <div>
        <button class="flex w-[14rem] items-center gap-3 rounded-md bg-[#0e151f] px-2 py-3 text-sm text-white" @click="createProject = true" :disabled="!props.strategy">
          <div class="">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M6 0C6.31826 0 6.62348 0.126428 6.84853 0.351472C7.07357 0.576516 7.2 0.88174 7.2 1.2V4.8H10.8C11.1183 4.8 11.4235 4.92643 11.6485 5.15147C11.8736 5.37652 12 5.68174 12 6C12 6.31826 11.8736 6.62348 11.6485 6.84853C11.4235 7.07357 11.1183 7.2 10.8 7.2H7.2V10.8C7.2 11.1183 7.07357 11.4235 6.84853 11.6485C6.62348 11.8736 6.31826 12 6 12C5.68174 12 5.37652 11.8736 5.15147 11.6485C4.92643 11.4235 4.8 11.1183 4.8 10.8V7.2H1.2C0.88174 7.2 0.576516 7.07357 0.351472 6.84853C0.126428 6.62348 0 6.31826 0 6C0 5.68174 0.126428 5.37652 0.351472 5.15147C0.576516 4.92643 0.88174 4.8 1.2 4.8H4.8V1.2C4.8 0.88174 4.92643 0.576516 5.15147 0.351472C5.37652 0.126428 5.68174 0 6 0Z" fill="white" />
            </svg>
          </div>
          Add New Project To Strategy
        </button>
      </div>
      
      <!-- No Data Component -->
      <div v-if="projectList.length === 0">
        <NoData />
      </div>

      <!-- Project List -->
      <div v-else class="flex flex-wrap gap-2" > 
        <div  @click="selectedProject(item.id)" v-for="(item, index) in projectList" :key="index" class="item-center group relative max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-800">
          <div>
            <a href="#">
              <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{{ item.project_name }}</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ item.description || 'Description not available' }}</p>
            <p class="my-2 text-[#fff]">
              <span class="text-sm">Timeline:</span> {{ item.start_date }} -- {{ item.finish_date }}
            </p>
            <p class="my-2 text-[#fff]">
              <span class="text-sm">Weighting:</span> {{ item.weighting }}
            </p>
            <div class="flex items-center justify-between">
              <button @click="goToTasks(item.id)" class="inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                View more
                <svg class="ms-2 h-3.5 w-3.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </button>
              <span class="me-2 rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300" v-if="item.project_status == 'ongoing'">{{item.project_status}}</span>
              <span class="me-2 rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800 dark:bg-green-900 dark:text-white" v-if="item.project_status == 'completed'">{{item.project_status}}</span>
            </div>
          </div>
          <div class="absolute right-2 top-0 flex gap-1 rounded-lg bg-white p-1 lg:hidden lg:group-hover:flex">
            <button
            @click="deleteProject(item.id)"
            type="button" class="me-2 inline-flex items-center rounded-lg bg-red-700 p-2 text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
              <svg class="h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6h18M8 6V4a1 1 0 011-1h6a1 1 0 011 1v2m4 0v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6h16zM9 10v10m6-10v10" />
              </svg>
              <span class="sr-only">Delete</span>
            </button>

            <button 
              @click="updateMode = !updateMode"
              v-if="item.project_status != 'completed'"
              type="button" class="me-2 inline-flex items-center rounded-lg bg-yellow-500 p-2 text-center text-sm font-medium text-white hover:bg-yellow-600 focus:outline-none focus:ring-4 focus:ring-yellow-300 dark:bg-yellow-400 dark:hover:bg-yellow-500 dark:focus:ring-yellow-700">
              <svg class="h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536M9 11l3.536 3.536M13.414 3H21v7.586M4 21v-7.586l9.414-9.414c.394-.394 1.034-.394 1.414 0l2.122 2.122c.394.394.394 1.034 0 1.414L7.414 21H4z" />
              </svg>
              <span class="sr-only">Edit</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Create Project Modal -->
      <div v-if="createProject || updateMode">
        <CreateProjectModal @close="toggleClose"  :formPayload="payload" :updateMode="updateMode" />
      </div>
    </div>
  </div>
</template>
