<script setup>
import { onMounted, ref } from 'vue'
import NoData from '../NoDataYet.vue'
import CreateStrategyModal from './CreateStrategyModal.vue'
import Collaboration from '../../services/collaboration';
const createStrategy = ref(false)
const updateStrategy = ref(false)
const strategyList = ref([])
const activeStrategy = ref({})
const updateComponent = () => {
  getStrategy()
}
const createStrategyData = (formPayload) => {
  createStrategy.value = false
  updateStrategy.value = false
}

const emit = defineEmits(['currentStrategy']);

const selectedStrategy = (id) => {
  const strategy = strategyList.value.find(item => item.id === id);
  activeStrategy.value = strategy;
  emit('currentStrategy', activeStrategy.value);
  console.log('Emitted strategy:', activeStrategy.value);
};
const toggleClose = () => {
  createStrategy.value = false
  updateStrategy.value = false
  activeStrategy.value = {}
  getStrategy()
}

const deleteStrategy = async (id) => {
  const { status, data } = await Collaboration(
    'delete',
    `strategy/delete/${id}`
  )
  if (status === 200) {
    toggleClose()
  }
}
const getStrategy = async () => {
  const { status, data } = await Collaboration(
    'get',
    `strategy`
  )
  if (status === 200) {
    strategyList.value = data.data
    // selectedStrategy(strategyList.value[0].id)
    
  }
}
onMounted(() => {
  getStrategy()
})
</script>

<template lang="">
  <main>
    <div class="h-screen w-full border-r-2 border-gray-300 p-2">
      <div class="flex flex-col gap-4">
        <div v-if="strategyList.length !== 0">
          <button
            class="item-center flex w-[10rem] gap-2 rounded-md bg-[#0e151f] px-2 py-2 text-sm text-white"
            @click="createStrategy = !createStrategy"
          >
            <div class="mt-1">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6 0C6.31826 0 6.62348 0.126428 6.84853 0.351472C7.07357 0.576516 7.2 0.88174 7.2 1.2V4.8H10.8C11.1183 4.8 11.4235 4.92643 11.6485 5.15147C11.8736 5.37652 12 5.68174 12 6C12 6.31826 11.8736 6.62348 11.6485 6.84853C11.4235 7.07357 11.1183 7.2 10.8 7.2H7.2V10.8C7.2 11.1183 7.07357 11.4235 6.84853 11.6485C6.62348 11.8736 6.31826 12 6 12C5.68174 12 5.37652 11.8736 5.15147 11.6485C4.92643 11.4235 4.8 11.1183 4.8 10.8V7.2H1.2C0.88174 7.2 0.576516 7.07357 0.351472 6.84853C0.126428 6.62348 0 6.31826 0 6C0 5.68174 0.126428 5.37652 0.351472 5.15147C0.576516 4.92643 0.88174 4.8 1.2 4.8H4.8V1.2C4.8 0.88174 4.92643 0.576516 5.15147 0.351472C5.37652 0.126428 5.68174 0 6 0Z"
                  fill="white"
                />
              </svg>
            </div>
            New Strategy
          </button>
        </div>
        <div class="">
          <div class="relative">
            <div
              class="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3"
            >
              <svg
                class="h-4 w-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="search by strategy title"
            />
          </div>
        </div>
        <div v-if="strategyList.length == 0">
          <p class="text-center">No data yet</p>
        </div>
        <div class="flex justify-center" v-if="strategyList.length == 0">
          <button
            class="item-center flex w-[10rem] justify-center gap-2 rounded-md bg-[#0e151f] px-2 py-2 text-sm text-white"
            @click="createStrategy = !createStrategy"
          >
            <div class="mt-1">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6 0C6.31826 0 6.62348 0.126428 6.84853 0.351472C7.07357 0.576516 7.2 0.88174 7.2 1.2V4.8H10.8C11.1183 4.8 11.4235 4.92643 11.6485 5.15147C11.8736 5.37652 12 5.68174 12 6C12 6.31826 11.8736 6.62348 11.6485 6.84853C11.4235 7.07357 11.1183 7.2 10.8 7.2H7.2V10.8C7.2 11.1183 7.07357 11.4235 6.84853 11.6485C6.62348 11.8736 6.31826 12 6 12C5.68174 12 5.37652 11.8736 5.15147 11.6485C4.92643 11.4235 4.8 11.1183 4.8 10.8V7.2H1.2C0.88174 7.2 0.576516 7.07357 0.351472 6.84853C0.126428 6.62348 0 6.31826 0 6C0 5.68174 0.126428 5.37652 0.351472 5.15147C0.576516 4.92643 0.88174 4.8 1.2 4.8H4.8V1.2C4.8 0.88174 4.92643 0.576516 5.15147 0.351472C5.37652 0.126428 5.68174 0 6 0Z"
                  fill="white"
                />
              </svg>
            </div>
            New Strategy
          </button>
        </div>

        <div
          @click="selectedStrategy(item.id)"
          class="item-center group relative flex items-center justify-center"
          v-if="strategyList !== 0"
          v-for="(item, index) in strategyList"
          :key="index"
        >
          <ul class="w-full">
            <hr class="my-2 border-t border-gray-600" />
            <li class="text-md">
              <div
                class="flex cursor-pointer flex-col gap-1 rounded-md border p-2 hover:bg-slate-200"
              >
                <span
                  class="rounded-sm bg-slate-400 p-1 text-sm font-semibold text-white"
                  >{{ item.name }}</span
                >
                <div>
                  <span class="text-xs font-semibold">Description : </span>
                  {{ item.description }}
                </div>
                <div>
                  <span class="text-xs font-semibold">Weighting : </span>
                  {{ item.weighting }}
                </div>
                <div>
                  <span class="text-xs font-semibold">Timeline : </span>
                  {{ item.start_date }} -- {{ item.finish_date }}
                </div>
              </div>
            </li>
          </ul>
          <div
            class="absolute right-2 top-0 flex gap-1 rounded-lg bg-white p-1 lg:hidden lg:group-hover:flex"
          >
            <button
              @click.prevent = "deleteStrategy(item.id)"
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
              type="button"
              class="me-2 inline-flex items-center rounded-lg bg-yellow-500 p-2 text-center text-sm font-medium text-white hover:bg-yellow-600 focus:outline-none focus:ring-4 focus:ring-yellow-300 dark:bg-yellow-400 dark:hover:bg-yellow-500 dark:focus:ring-yellow-700"
              @click="updateStrategy = !updateStrategy"
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
      </div>
    </div>
    <div v-if="createStrategy || updateStrategy">
      <CreateStrategyModal
        :key = "updateComponent()"
        @close = toggleClose()
        :updateMode = updateStrategy
        @createStrategyData="createStrategyData"
        :formPayload= "activeStrategy"
      />
    </div>
  </main>
</template>
