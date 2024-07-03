<template>
  <section>
    <DynamicHorizontalNavigation />
    <nav class="flex items-center bg-white p-3 font-semibold text-gray-600">
      <div class="btn mx-4 text-center capitalize" v-for="item in adminNavItems" :key="item.id">
        <button :class="{
          'text-primary': activeTab === item.id,
        }" @click="switchGenTab(item.id)">
          {{ item.label }}
        </button>
      </div>
    </nav>
  </section>
  <section>
    <GeneralCalendar v-if="activeTab == 1" />
    <!-- <Meeting v-if="activeTab==2"/> -->
    <Minutes :activeTab="4" v-if="activeTab == 4" @switchMainTab="switchGenTab" />
    <Targets v-if="activeTab == 3" />
  </section>
  <section v-if="activeTab == 2">
    <div>
      <section class="pt-4 mx-6">
        <nav class="flex items-center border border-gray-200 bg-white p-3 font-semibold text-gray-600">
          <div class="btn mx-4 text-center capitalize">
            <button @click="goBack" class="text-black flex flex-row">
              <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                fill="none" viewBox="0 0 8 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13" />
              </svg>
              &nbsp;&nbsp;Back
            </button>
          </div>
        </nav>
      </section>
      <section class="py-10 mx-5">
        <div class="w-full flex justify-end items-end mb-5">
          <button id="submitTaskButton" @click="toggleActionPointForm = true"
            class="bg-red-600 text-white font-bold py-2 px-6 mx-1 border rounded">
            Add Action Point
          </button>
          <button @click="toggleMinuterUploadModal = true"
            class="bg-white-500 font-bold py-2 px-6 border rounded border-gray-700">
            Upload Minutes
          </button>
        </div>
        <div>
          <nav class="flex items-center border border-gray-200 bg-black p-3 font-semibold text-white">
            <div class="btn mx-4 text-center capitalize">
              <span class="text-white">
                Meeting Details
              </span>
            </div>
          </nav>
        </div>
        <div>
          <div class="px-10 flex flex-row text-xl border border-grey-800 bg-gray-200 h-20">
            <div class="w-1/4 flex items-center">
              Event Name :
            </div>
            <div class="w-3/4 flex items-center">
              {{ meeting.title }}
            </div>
          </div>
          <div class="px-10 flex flex-row border border-white-800 bg-white-900 h-20">
            <div class="w-1/4 flex items-center">Type of Event</div>
            <div class="w-3/4 flex items-center">Meeting</div>
          </div>
          <div class="px-10 flex flex-row border border-white-800 bg-gray-200 h-20">
            <div class="w-1/4 flex items-center">Venue</div>
            <div class="w-3/4 flex items-center">{{ meeting.venue }}</div>
          </div>
          <div class="px-10 flex flex-row border border-white-800 bg-white-900 h-20">
            <div class="w-1/4 flex items-center">Start Date</div>
            <div class="w-3/4 flex items-center">{{ meeting.data }}</div>
          </div>

          <div class="px-10 flex flex-row border border-white-800 bg-white-900 h-20">
            <div class="w-1/4 flex items-center">Time</div>
            <div class="w-3/4 flex items-center">{{ meeting.start_time }}</div>
          </div>
          <div class="px-10 flex flex-row border border-white-800 bg-gray-200 h-20">
            <div class="w-1/4 flex items-center">Frequency</div>
            <div class="w-3/4 flex items-center">{{ meeting.frequency }}</div>
          </div>
          <!-- <div
            class="px-10 flex flex-row border border-white-800 bg-white-900 h-20"
          >
            <div class="w-1/4 flex items-center">Invitees</div>
            <div class="w-3/4 flex items-center">
              <span class="bg-green-200 mx-5">All Commercial Departments</span>
              <span class="bg-yellow-200 mx-5">All BPU</span>
              <span class="bg-white-200 mx-5">Rachael Ubong</span>
              <span class="bg-white-200 mx-5">Tolba Hanz</span>
            </div>
          </div> -->
          <div class="px-10 flex flex-row border border-white-800 bg-gray-200 h-20">
            <div class="w-1/4 flex items-center">Created By</div>
            <div class="w-3/4 flex items-center text-grey-100">
              {{ meeting.created_by }}
            </div>
          </div>
          <div class="px-10 flex flex-row border border-white-800 bg-white-900 h-auto">
            <div class="w-1/4 flex items-center">Agenda</div>
            <div class="w-3/4 flex items-center">
              <ol type="1">
                <li v-for="(agenda, index) in meeting.agenda" :key="index">
                  {{ agenda.agenda }}.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section class="mx-10 border border-black-600 mt-10">
        <ListActionPoint :actionPoints="meeting.action_point" />
      </section>
      <section class="mx-10 border border-black-600 mt-10">
        <ListMinutes :minutes="meeting.minutes" />
      </section>
      <section class="mx-10 border border-black-600">
        <div class="flex flex-row item-center" v-if="toggleActionPointForm">
          <div id="popup-modal" tabindex="-1"
            class="fixed top-0 left-0 grid h-screen w-screen place-items-center overflow-y-scroll overscroll-y-contain bg-primary-black bg-opacity-30 px-32 py-16 z-50">
            <div class="relative w-1/2">
              <!-- <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div class="p-6 text-center"> -->
              <NewActionPoint @reloadMinute="reloadMinute" @closeTabs="toggleActionPointForm = false" />
              <!-- </div>
              </div> -->
            </div>
          </div>
        </div>
      </section>
      <section class="mx-10 border border-black-600">
        <div class="flex flex-row item-center" v-if="toggleMinuterUploadModal">
          <div id="popup-modal" tabindex="-1"
            class="fixed top-0 left-0 grid h-screen w-screen place-items-center overflow-y-scroll overscroll-y-contain bg-primary-black bg-opacity-30 px-32 py-16 z-50">
            <div class="relative w-1/2">
              <!-- <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div class="p-6 text-center"> -->
              <MinuteUpload @reloadMinute="reloadMinute" @closeTabs="toggleMinuterUploadModal = false" />
              <!-- </div>
              </div> -->
            </div>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>


<script setup>
import DynamicHorizontalNavigation from "@/components/DynamicAppHorizontalNavigation.vue";
import { ref, onMounted } from "vue";
import NewActionPoint from "./NewActionPoint.vue";
import MinuteUpload from './MinuteUpload.vue'
import ListActionPoint from "./ListActionPoint.vue";
import ListMinutes from "./ListMinutes.vue";
import GeneralCalendar from "@/pages/BPD/planning/general/index.vue";
import Targets from "../targets/Main.vue";
import attendanceRequest from "@/services/attendance.request.js";
import { useRoute } from "vue-router";
import router from "../../../../router";
import Minutes from "../minutes/Main.vue";
import Swal from "sweetalert2";
const toggleActionPointForm = ref(false)
const toggleMinuterUploadModal = ref(false)
const activeTab = ref(2);
const adminNavItems = [
  { id: 1, label: "GENERAL ACTIVITIES CALENDAR" },
  { id: 2, label: "MINUTES AND ACTION POINTS" },
  { id: 3, label: "TARGET & KPIS" },
  { id: 4, label: "MEETING ATTENDANCE" },
];
const route = useRoute();
const switchGenTab = (value) => {
  activeTab.value = value;
};
const goBack = () => {
  try {
    router.push({ name: 'operation-planning' })
  } catch (e) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: e.message ? e.message : "",
    });
  }
}

onMounted(() => {
  getMeeting(route?.params.id);
});
const reloadMinute = () => {
  toggleActionPointForm.value = false
  toggleMinuterUploadModal.value = false
  getMeeting(route?.params.id);
}
const meeting = ref({});
const getMeeting = async (id) => {
  try {
    const { status, data } = await attendanceRequest(
      "get",
      `meetings/details/${id}?platform=suburban`
    );
    if (status == 200) {
      meeting.value = data.data;
    }
  } catch (e) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: e.message ? e.message : "",
    });
  }
};
</script>
