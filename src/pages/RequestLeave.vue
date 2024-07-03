<script setup>
import AppLayout from '../layouts/AppLayout.vue'
import AppHorizontalNavigation from '../components/AppHorizontalNavigation.vue'
import { ref, reactive, onMounted } from 'vue'
import axios from 'axios'
import workplaceRequests from '@/services/workplaceRequestsv2'
import { useRouter } from 'vue-router'
const router = useRouter()


const today = ref()
const currentDate = ref()
const startDate = ref('')
const endDate = ref('')
const selectRequest = ref('')
const description = ref('')
const leaveRequestTypes = ref([])

const getLeaveRequestTypes = async () => {
  try {
    const { status, data } = await workplaceRequests(
      'get',
      'leave/get-all-leave-request-type'
    )

    if (status == 200) {
      leaveRequestTypes.value = data.data.results.data
    }
  } catch (e) {
    alert(e.message)
  }
}

const requestLeave = async () => {
  try {
    const { status, data } = await workplaceRequests('post', 'leave/create', {
      currentDate: currentDate.value,
      start_date: startDate.value,
      end_date: endDate.value,
      leave_request_type_id: selectRequest.value,
      description: description.value,
    })
    if (status == 200) {
      router.push({ name: 'requests' })
    }
  } catch (error) {
    console.error('An error occured:', error)
  }
}
</script>

<template>
  <app-layout>
    <template v-slot:main-content>
      <main class="w-full bg-[#F5F5F5] pl-[260px]">
        <AppHorizontalNavigation />
        <header class="m-14 flex items-center justify-between">
          <div
            class="flex cursor-pointer items-center"
            @click="$router.push({ name: 'requests' })"
          >
            <img src="../assets/chevron-black.svg" class="mr-1 rotate-90" />
            <span class="text-xl font-semibold">Back</span>
          </div>
        </header>

        <main class="m-14 bg-white p-12">
          <h1 class="mb-6 text-2xl font-bold">Request</h1>

          <form class="" @submit.prevent="requestLeave">
            <div class="flex flex-col">
              <label for="">Date</label>
              <input
                v-model="currentDate"
                type="date"
                placeholder="21/01/2023"
                name="currentDate"
                id="currentDate"
                class="w-44 border p-3"
              />
            </div>
            <div class="mt-10 flex items-center justify-between">
              <div>
                <label for="">Type of Request</label>
                <select
                  v-model="selectRequest"
                  class="mt-1 block w-96 border border-gray-300 p-3 text-black focus:outline-primary"
                >
                  <option selected>Choose Type of Leave</option>
                  <option
                    :key="leaveRequestType.id"
                    v-for="leaveRequestType in leaveRequestTypes"
                    :value="leaveRequestType.id"
                  >
                    {{ leaveRequestType.name }}
                  </option>
                </select>
              </div>
              <div class="flex flex-col">
                <label for="" class="py-2">Start Date:</label>
                <div
                  class="mr-2 flex border border-gray-400 bg-gray-100 px-3 py-2"
                >
                  <img class="mr-2 pr-1" src="../assets/calendar-icon.svg" />
                  <input
                    v-model="startDate"
                    type="date"
                    name="startDate"
                    id="startDate"
                    class="bg-gray-100"
                    :min="today"
                  />
                </div>
              </div>

              <div class="flex flex-col">
                <label for="" class="py-2">End Date:</label>
                <div
                  class="mr-2 flex border border-gray-400 bg-gray-100 px-3 py-2"
                >
                  <img class="mr-2 pr-1" src="../assets/calendar-icon.svg" />
                  <!-- <button>Go To Date</button> -->
                  <!-- <datepicker v-model="selected" :clearable="true" /> -->
                  <input
                    v-model="endDate"
                    type="date"
                    name="endDate"
                    id="endDate"
                    class="bg-gray-100"
                    :min="startDate"
                  />
                </div>
              </div>
            </div>
            <div class="flex flex-col">
              <label for="" class="mt-5">Description:</label>
              <textarea
                v-model="description"
                name="description"
                id="description"
                rows="6"
                class="w-full border p-5"
              >
              </textarea>
            </div>

            <div class="flex flex-row-reverse pt-6">
              <input
                type="submit"
                class="ml-6 rounded-md bg-primary px-4 py-2 text-white"
                Submit
              />

              <button
                class="rounded-md border border-primary px-4 py-2 text-primary"
              >
                Cancel
              </button>
            </div>
          </form>
        </main>
      </main>
    </template>
  </app-layout>
</template>
