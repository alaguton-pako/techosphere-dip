<template>
  <section>
    <DynamicHorizontalNavigation />
    <nav class="flex items-center bg-white p-3 font-semibold text-gray-600">
      <div
        class="btn mx-4 text-center capitalize"
        v-for="item in adminNavItems"
        :key="item.id"
      >
        <button
          :class="{
            'text-primary': activeTab === item.id,
          }"
          @click="switchGenTab(item.id)"
        >
          {{ item.label }}
        </button>
      </div>
    </nav>
  </section>
  <section>
    <GeneralCalendar v-if="activeTab == 1" />
    <Meeting v-if="activeTab == 2" />
    <Targets v-if="activeTab == 3" />
  </section>
  <section v-if="activeTab == 4">
    <div>
      <section class="flex flex-row py-10 px-10">
        <Card
          v-for="(card, index) in cardsData"
          :key="index"
          :figure="card.figure"
          :title="card.title"
          :bgColor="card.bgColor"
          :textColor="card.textColor"
          :body="card.body"
          heigh="h-48"
          width="w-80"
        />
      </section>
      <section class="pt-4 mx-6">
        <nav
          class="flex items-center border border-gray-200 bg-white p-3 font-semibold text-gray-600"
        >
          <div class="btn mx-4 text-center capitalize">
            <button @click="goBack" class="text-black flex flex-row">
              <svg
                class="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 8 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"
                />
              </svg>
              &nbsp;&nbsp;Back
            </button>
          </div>
        </nav>
      </section>

      <section class="py-10 mx-5">
        <!-- <div class="w-full flex justify-end items-end mb-5">
            <button
              id="submitTaskButton"
              @click="toggleActionPointForm=true"
              class="bg-red-600 text-white font-bold py-2 px-6 mx-1 border rounded"
            >
              Add Action Point
            </button>
            <button
            @click="toggleMinuterUploadModal=true"
              class="bg-white-500 font-bold py-2 px-6 border rounded border-gray-700"
            >
              Upload Minutes
            </button>
          </div> -->
        <div>
          <nav
            class="flex items-center border border-gray-200 bg-black p-3 font-semibold text-white"
          >
            <div class="btn mx-4 text-center capitalize">
              <span class="text-white">
                Meeting Details
              </span>
            </div>
          </nav>
        </div>
        <div>
          <div
            class="px-10 flex flex-row text-xl border border-grey-800 bg-gray-200 h-20"
          >
            <div class="w-1/4 flex items-center">
              Event Name :
            </div>
            <div class="w-3/4 flex items-center">
              {{ meeting.title }}
            </div>
          </div>
          <div
            class="px-10 flex flex-row border border-white-800 bg-white-900 h-20"
          >
            <div class="w-1/4 flex items-center">Type of Event</div>
            <div class="w-3/4 flex items-center">Meeting</div>
          </div>
          <div
            class="px-10 flex flex-row border border-white-800 bg-gray-200 h-20"
          >
            <div class="w-1/4 flex items-center">Venue</div>
            <div class="w-3/4 flex items-center">{{ meeting.venue }}</div>
          </div>
          <div
            class="px-10 flex flex-row border border-white-800 bg-white-900 h-20"
          >
            <div class="w-1/4 flex items-center">Start Date</div>
            <div class="w-3/4 flex items-center">{{ meeting.date }}</div>
          </div>

          <div
            class="px-10 flex flex-row border border-white-800 bg-white-900 h-20"
          >
            <div class="w-1/4 flex items-center">Time</div>
            <div class="w-3/4 flex items-center">{{ meeting.start_time }}</div>
          </div>
          <div
            class="px-10 flex flex-row border border-white-800 bg-gray-200 h-20"
          >
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
          <div
            class="px-10 flex flex-row border border-white-800 bg-gray-200 h-20"
          >
            <div class="w-1/4 flex items-center">Created By</div>
            <div class="w-3/4 flex items-center text-grey-100">
              {{ meeting.created_by }}
            </div>
          </div>
          <div
            class="px-10 flex flex-row border border-white-800 bg-white-900 h-auto"
          >
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
      <section class="mx-20 border border-black-600 mt-10">
        <div>
          <nav
            class="flex items-center border border-gray-200 bg-black p-3 font-semibold text-white"
          >
            <div class="btn mx-4 text-center capitalize">
              <span class="text-white">
                Attendees
              </span>
            </div>
          </nav>
        </div>
        <div class="w-full flex flex-row px-10 py-4">
          <div class="w-2/4">
            <div class="text-base">Did This Meeting Hold?</div>
          </div>
          <div class="w-1/4">
            <select
              id="countries"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            >
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
          <div
            class="w-1/4 flex justify-end"
            v-if="meeting.attendance_status != 'taken'"
          >
            <button
              type="button"
              @click="markAttendance"
              class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
              Save
            </button>
          </div>
          <div
            class="w-1/4 flex justify-end"
            v-else
          >
            <button
              type="button"
              disabled
             
              class="focus:outline-none text-white bg-red-700 hover:bg-green-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
              Marked
            </button>
          </div>
        </div>
        <div>
          <table class="w-full table-auto border border-secondary text-sm">
            <thead class="bg-gray-300">
              <tr class="border border-secondary capitalize">
                <th class="border border-secondary p-2">Invitees</th>
                <th class="border border-secondary p-3">Present</th>
                <th class="border border-secondary p-3">Absent</th>
                <th class="border border-secondary p-3">Late</th>
              </tr>
            </thead>
            <tbody class="">
              <tr
                v-for="(attendee, index) in meeting.attendees"
                :key="index"
                class="border border-secondary capitalize"
                :class="[index % 2 ? 'bg-gray-200' : '']"
              >
                <td class="border border-secondary px-10">
                  {{ attendee.attendee.fullname }}
                </td>
                <td class="border border-secondary p-3">
                  <div class="flex justify-center mb-4">
                    <input
                      :id="`present${attendee.attendee.id}`"
                      type="radio"
                      v-model="attendees[index].status"
                      value="present"
                      :name="`${attendee.attendee.id}`"
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                  </div>
                </td>
                <td class="border border-secondary p-3">
                  <div class="flex justify-center mb-4">
                    <input
                      :id="`absent${attendee.attendee.id}`"
                      type="radio"
                      value="absent"
                      v-model="attendees[index].status"
                      :name="`${attendee.attendee.id}`"
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                  </div>
                </td>
                <td class="border border-secondary p-3">
                  <div class="flex justify-center mb-4">
                    <input
                      :id="`late${attendee.attendee.id}`"
                      type="radio"
                      value="late"
                      v-model="attendees[index].status"
                      :name="`${attendee.attendee.id}`"
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  </section>
</template>
<script setup>
import DynamicHorizontalNavigation from "@/components/DynamicAppHorizontalNavigation.vue";
import { ref, onMounted } from "vue";
import GeneralCalendar from "@/pages/BPD/planning/general/index.vue";
import Targets from "../targets/Main.vue";
import attendanceRequest from "@/services/attendance.request";
import { useRoute } from "vue-router";
import router from "../../../../router";
import Card from "@/components/Card.vue";
import Meeting from "../meeting/Main.vue";
import Swal from "sweetalert2";
const toggleActionPointForm = ref(false);
const toggleMinuterUploadModal = ref(false);
const activeTab = ref(4);
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
const markAttendance = async () => {
  try {
    const id = route?.params.id;
    const { status, data } = await attendanceRequest(
      "post",
      `attendance/mark/${id}?platform=suburban`,
      { attendance: attendees.value }
    );
    if (status == 200) {
      Swal.fire({
        icon: "success",
        title: "Attendance Taking successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      getMeeting(id);
      getMeetingReport(id);
      reloadMinute();
    }
  } catch (e) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: e.message,
    });
  }
};
const attendees = ref([]);
const goBack = () => {
  try {
    router.push({ name: "operation-planning" });
  } catch (e) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: e.message,
    });
  }
};
onMounted(async () => {
  await getMeeting(route?.params.id);
  await getMeetingReport(route?.params.id);
});
const reloadMinute = () => {
  getMeeting(route?.params.id);
  toggleActionPointForm.value = false;
  toggleMinuterUploadModal.value = false;
};
const meeting = ref({});
const getMeeting = async (id) => {
  try {
    const { status, data } = await attendanceRequest(
      "get",
      `attendance/attendees/${id}`
    );
    if (status == 200) {
      meeting.value = data.data;
      attendees.value = meeting.value?.attendees?.map((e) => {
        return { atendeeid: e.attendee_id, status: "" };
      });
      cardsData.value[0].figure = meeting.value?.attendees?.length;
      console.log(attendees.value);
    }
  } catch (e) {
    console.log(e);
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: e.message,
    });
  }
};
const getMeetingReport = async (id) => {
  try {
    const { status, data } = await attendanceRequest(
      "get",
      `attendance/report/${id}`
    );
    if (status == 200) {
      cardsData.value[1].figure = data.data?.present?.length;
      cardsData.value[2].figure = data.data?.absent?.length;
      cardsData.value[3].figure = data.data?.late?.length;

      if (data.data.present.length) {
        data.data?.present?.forEach((element) => {
          let index = attendees.value?.findIndex((e) => {
            return e.atendeeid == element.attendee_id;
          });
          index != -1 ? (attendees.value[index].status = element.status) : "";
        });
      }
      if (data.data?.absent.length) {
        data.data?.absent?.forEach((element) => {
          let index = attendees.value.findIndex((e) => {
            return e.atendeeid == element.attendee_id;
          });
          index != -1 ? (attendees.value[index].status = element.status) : "";
        });
      }
      if (data.data?.late.length) {
        data.data?.late?.forEach((element) => {
          let index = attendees.value.findIndex((e) => {
            return e.atendeeid == element.attendee_id;
          });
          index != -1 ? (attendees.value[index].status = element.status) : "";
        });
      }
    }
  } catch (e) {
    console.log(e);
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: e.message,
    });
  }
};

const cardsData = ref([
  {
    figure: 0,
    bgColor: "bg-black",
    textColor: "text-white",
    title: "Total Invites",
    body: "Overall number of meetings scheduled",
  },
  {
    figure: 0,
    bgColor: "bg-white",
    textColor: "text-black",
    title: "Total Present",
    body: "Total number of scheduled meetings/sessions held",
  },
  {
    figure: 0,
    bgColor: "bg-white",
    textColor: "text-black",
    title: "Total absent",
    body: "Total number of scheduled meetings/sessions missed",
  },
  {
    figure: 0,
    bgColor: "bg-white",
    textColor: "text-black",
    title: "Total late",
    body: "Total number of event minutes submitted",
  },
]);
</script>
