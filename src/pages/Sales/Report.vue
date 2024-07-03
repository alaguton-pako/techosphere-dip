<template>
  <app-layout>
    <template v-slot:main-content>
      <main class="w-full bg-[#F5F5F5] pl-[260px]">
        <AppHorizontalNavigation />
        <section class="mt-8 p-12">
          <div class="flex">
            <div class="my-1">
              <img src="../../assets/fi-chevron.svg" alt="" class="cursor-pointer" />
            </div>

            <div class="flex flex-col">
              <div class="text-[35px] font-semibold">Daily Schedule</div>
              <p>Update and Send Daily Schedule and Close out report</p>
            </div>
          </div>
          <div class="mt-8 flex">
            <div class="flex flex-col">
              <label for="name" class="text-md text-black-800 mb-2 block font-semibold"
                >Date</label
              >

              <div class="flex flex-row gap-28">
                <input
                  v-model="selected"
                  type="date"
                  name="current-date"
                  id="current-date"
                  class="bg-gray-100 w-full border border-gray-500 p-2"
                  :min="currentDate"
                />
                <div class="relative inline-block text-left">
                  <button
                    @click="toggleDropdown"
                    class="h-[51px] w-[180px] rounded-md border border-solid border-[transparent] bg-[#D50036] pb-3.5 pl-7 pr-7 pt-3.5 text-white"
                  >
                    <div class="flex w-72">+ Add Schedule</div>
                  </button>

                  <div
                    v-if="showDropdown"
                    class="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabindex="-1"
                  >
                    <div class="py-1" role="none">
                      <a
                        href="#"
                        class="block border-b border-gray-200 px-4 py-2 text-sm text-gray-700"
                        role="menuitem"
                        tabindex="-1"
                        id="menu-item-0"
                        @click="addingDailySchedule = true"
                        >Task</a
                      >
                      <a
                        href="#"
                        class="block px-4 py-2 text-sm text-gray-700"
                        role="menuitem"
                        tabindex="-1"
                        id="menu-item-1"
                        @click="openModal"
                        >Visitation</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Modal-Begin -->
          <main
            v-if="showModal"
            class="fixed left-0 top-0 z-50 grid h-screen w-screen place-items-center overflow-y-scroll overscroll-y-contain bg-primary-black bg-opacity-30 px-32 py-16"
          >
            <div class="bg-white px-28 pb-32 pt-16">
              <div class="w-full max-w-md rounded-lg p-4">
                <div class="mb-4 flex items-center justify-between">
                  <button
                    class="my-6 ml-auto grid h-10 w-10 place-content-center rounded-full border border-primary text-xl text-primary"
                    @click="closeModal"
                  >
                    <span class="sr-only">Close</span>
                    𝖷
                  </button>
                </div>
                <section class="space-y-5">
                  <div class="mb-10 w-full bg-red-600 p-3 text-white">
                    <p>Visitation Schedule</p>
                  </div>
                  <div class="flex flex-col">
                    <label for="">Select KPI:*</label>
                    <select
                      name=""
                      id="kpi"
                      v-model="visitation.kpi_id"
                      class="border border-gray-600 bg-white p-2"
                      @change="updateKpiName()"
                    >
                      <option selected disabled>-- Select KPI --</option>
                      <option
                        v-for="(KPI, index) in selectKPI"
                        :key="index"
                        :value="KPI.id"
                      >
                        {{ KPI.name }}-{{ KPI.type }}
                      </option>
                    </select>
                  </div>
                  <div class="flex flex-col">
                    <label for="">Name of Lead:*</label>
                    <select
                      name=""
                      id="business_name"
                      v-model="visitation.name_of_lead"
                      class="border border-gray-600 bg-white p-2"
                    >
                      <option selected disabled>-- Name of Lead --</option>
                      <option
                        v-for="(lead, index) in leads"
                        :key="lead.id"
                        :value="lead.business_name"
                      >
                        {{ lead.business_name }}
                      </option>
                    </select>
                  </div>
                  <div class="flex flex-col">
                    <label for="">Purpose of Visit:*</label>
                    <select
                      name=""
                      id=""
                      v-model="visitation.purpose_of_visit"
                      class="border border-gray-600 bg-white p-2"
                    >
                      <option value="" selected disabled class="text-gray-400">
                        Customer Survey
                      </option>
                      <option>Complaint</option>
                      <option>Proposal Submission/ Collection</option>
                      <option>Follow-up Visit</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div class="flex flex-col">
                    <label for="">Dependencies:*</label>
                    <div class="grid grid-cols-4 gap-3">
                      <div class="mb-4 flex flex-row">
                        <input
                          type="checkbox"
                          id="transportation"
                          v-model="visitation.dependency.transport"
                          class="..."
                        />
                        <label for="transportation" class="mx-2">Transportation</label>
                      </div>
                      <div class="mx-3 mb-4 flex flex-row">
                        <input
                          type="checkbox"
                          id="installer"
                          v-model="visitation.dependency.installer"
                          class="mx-2"
                        />
                        <label for="installer" class="mx-2">Installer</label>
                      </div>
                      <div class="mb-4 flex flex-row">
                        <input
                          type="checkbox"
                          id="proposal"
                          v-model="visitation.dependency.proposal"
                          class="..."
                        />
                        <label for="proposal" class="mx-2">Proposal</label>
                      </div>
                      <div class="mb-4 flex flex-row">
                        <input
                          type="checkbox"
                          id="other"
                          v-model="visitation.dependency.other"
                          class="..."
                        />
                        <label for="other" class="mx-2">Other</label>
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-col">
                    <label for="">Comment:*</label>
                    <textarea
                      v-model="visitation.comments"
                      id="comment"
                      rows="4"
                      class="text-black-800 my-2 w-full rounded-md border border-gray-200 text-sm focus:outline-none focus:ring-0 dark:bg-white dark:text-black dark:placeholder-gray-400"
                    >
                    </textarea>
                  </div>
                  <div class="flex items-center justify-center">
                    <div class="flex">
                      <label>Date:</label>
                      <Calendar
                        v-model="visitation.date"
                        showIcon
                        class="mx-3 border border-black p-1"
                      />
                    </div>
                    <div class="flex">
                      <label>Time:</label>
                      <Calendar
                        id="calendar-timeonly"
                        v-model="visitation.time"
                        timeOnly
                        class="mx-3 border border-black p-1"
                      />
                    </div>
                  </div>

                  <div class="my-5 flex items-center justify-center space-x-6">
                    <input
                      type="save"
                      :value="loading ? 'Loading...' : 'Save'"
                      :disabled="loading"
                      class="mt-16 block w-full cursor-pointer rounded-md bg-[#D50036] px-6 py-2 text-center text-white"
                      readonly
                      @click="saveForm"
                    />

                    <input
                      type="cancel"
                      :value="loading ? 'Loading...' : 'Cancel'"
                      :disabled="loading"
                      class="mt-16 block w-full cursor-pointer rounded-md border-gray-400 border px-6 py-2 text-center text-black"
                      @click="showModal = false"
                    />
                  </div>
                </section>
              </div>
            </div>
          </main>
          <!-- modal-end -->
          <!-- Create daily schedule -->
          <app-modal v-if="addingDailySchedule">
            <template v-slot:modal-content>
              <div>
                <form @submit.prevent="addingDailySchedule">
                  <button
                    class="ml-auto grid h-10 w-10 place-content-center rounded-full border border-primary text-xl text-primary"
                    type="button"
                    @click="closeModal"
                  >
                    𝖷
                  </button>
                  <header>
                    <span
                      class="lg:mb-2 lg:flex lg:cursor-pointer lg:items-center"
                      @click="addingDailySchedule = false"
                    >
                      <img src="#" alt="" class="mr-2 w-2.5" />
                      <h1 class="lg:text-2xl lg:font-bold">Daily Schedule</h1>
                    </span>
                    <div>Update and Send Daily Schedule & Close out report</div>
                  </header>

                  <div class="lg:mb-12 lg:mt-20 lg:flex lg:items-end capitalize">
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
                      class="lg:ml-6 rounded-md bg-primary px-3 py-2 text-white"
                      @click="addTask()"
                    >
                      ＋ Add KPI
                    </button>
                  </div>

                  <form class="lg:border-b-4 lg:border-secondary-gray pb-14">
                    <div
                      v-for="(task, i) in newDailySchedules.tasks"
                      :key="i"
                      class="lg:mt-8 lg:flex lg:flex-row lg:gap-4"
                    >
                      <div class="flex flex-col w-32">
                        <label htmlFor="kpi">Select KPI </label>
                        <select
                          id="kpi"
                          required
                          class="border border-gray-300 p-2 focus:outline-none"
                          v-model="newDailySchedules.tasks[i].kpi_id"
                          @change="updateTaskKpiName($event.target.value, i)"
                          
                        >
                          <option selected disabled>-- Select KPI --</option>
                          <option
                            v-for="(KPI, index) in selectKPI"
                            :key="index"
                            :value="KPI.id"

                          >
                            {{ KPI.name }}-{{ KPI.type }}
                          </option>
                        </select>
                      </div>

                      <div :key="targetKey" class="flex flex-col w-32">
                        <label :for="'kpi' + i">Select Measure </label>
                        <select
                          :id="'kpi' + i"
                          required
                          class="border border-gray-300 p-2 focus:outline-none"
                          v-model="task.objective_id"
                        >
                          <option disabled value="">-- Select Measure --</option>
                          <option
                            v-for="(measure, index) in newDailySchedules.tasks[i]
                              .selectedMeasures"
                            :key="index"
                            :value="measure.id"
                          >
                            {{ measure.measure }}
                          </option>
                        </select>
                      </div>

                      <div class="lg:flex lg:flex-col">
                        <label for="task" class="lg:font-medium capitalize">task</label>
                        <input
                          v-model="newDailySchedules.tasks[i].name"
                          required
                          type="text"
                          :id="`task-${index}`"
                          class="lg:task-name lg:border lg:border-gray-300 lg:p-2 lg:px-4 focus:outline-none"
                          @input="(event) => (newTaskName = event.target.value)"
                        />
                      </div>

                      <div class="lg:flex lg:flex-col">
                        <label for="Start" class="lg:font-medium">Start</label>
                        <input
                          type="datetime-local"
                          required
                          v-model="newDailySchedules.tasks[i].start_time"
                          :id="`Start-${index}`"
                          class="lg:start-time lg:border lg:border-gray-300 lg:p-2 lg:px-4 focus:outline-none"
                        />
                        <TimeSlots
                          data-start-time
                          @pickTime="(payload) => pickTime(payload)"
                        />
                      </div>
                      <div class="lg:flex lg:flex-col">
                        <label for="End" class="font-medium">End</label>
                        <input
                          type="datetime-local"
                          required
                          v-model="newDailySchedules.tasks[i].end_time"
                          :id="`End-${index}`"
                          class="lg:end-time lg:border lg:border-gray-300 lg:p-2 lg:px-4 focus:outline-none"
                        />
                        <TimeSlots
                          data-end-time
                          @pickTime="(time) => pickTime(time, $event)"
                        />
                      </div>

                      <div class="flex items-end">
                        <button
                          v-if="i + 1 === newDailySchedules.tasks.length"
                          type="button"
                          class="rounded-md bg-primary px-3 py-2 text-xl text-white w-10 flex justify-center items-center place-content-center"
                          @click="addTask()"
                        >
                          ＋
                        </button>

                        <button
                          v-else
                          type="button"
                          class="rounded-md bg-primary px-3 py-2 text-xl text-white w-10 flex justify-center items-center place-content-center"
                          @click="deleteTask(i)"
                        >
                          <img src="#" alt="" />
                        </button>
                      </div>
                    </div>
                  </form>
                  <input
                    type="submit"
                    name=""
                    id="saveScheduleButton"
                    value="Save daily schedule"
                    class="lg:float-right mt-12 block rounded-md cursor-pointer bg-primary px-3 py-2 text-white"
                    readonly
                    @click="closeModal"
                  />
                </form>
              </div>
            </template>
          </app-modal>
          <!-- Create daily schedule end -->
          <section>
            <div v-if="hasData">
              <div
                v-for="(task, index) in newDailySchedules.tasks"
                :key="index"
                class="visitation-item schedule-row flex flex-row mt-6 gap-12 rounded-lg bg-transparent p-4"
              >
                <div v-if="task.type === 'visitation'" class="flex flex-row gap-3">
                  <div class="flex flex-col items-center justify-between">
                    <span class="font-bold">Select KPI:</span>
                    <input
                      type="text"
                      readonly
                      v-model="task.kpi_name"
                      class="block w-28 border border-gray-300 p-2 focus:outline-none"
                    />
                  </div>
                  <div class="flex flex-col first-line:items-center justify-between">
                    <span class="font-bold">Name of Lead:</span>
                    <input
                      type="text"
                      readonly
                      v-model="task.name_of_lead"
                      class="block w-56 border border-gray-300 p-2 focus:outline-none"
                    />
                  </div>
                  <div class="flex flex-col items-center justify-between">
                    <span class="font-bold">Purpose of Visit:</span>
                    <input
                      type="text"
                      readonly
                      v-model="task.purpose_of_visit"
                      class="block w-56 border border-gray-300 p-2 focus:outline-none"
                    />
                  </div>
                  <div class="flex flex-col items-center justify-between">
                    <span class="font-bold">Dependencies:</span>
                    <div class="flex flex-row">
                      <div class="flex flex-row p-3">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 12 22C17.53 22 22 17.53 22 12C22 6.47 17.53 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM15.59 7L12 10.59L8.41 7L7 8.41L10.59 12L7 15.59L8.41 17L12 13.41L15.59 17L17 15.59L13.41 12L17 8.41L15.59 7Z"
                            fill="#D50036"
                          />
                        </svg>
                        <div class="flex flex-column">
                          <span v-if="task.dependency.transport" class="mx-2"
                            >Transportation</span
                          >
                          <span v-if="task.dependency.proposal" class="mx-2"
                            >Proposal</span
                          >
                          <span v-if="task.dependency.other">Other</span>
                        </div>
                      </div>
                      <div class="flex flex-row p-3">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 12 22C17.53 22 22 17.53 22 12C22 6.47 17.53 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM15.59 7L12 10.59L8.41 7L7 8.41L10.59 12L7 15.59L8.41 17L12 13.41L15.59 17L17 15.59L13.41 12L17 8.41L15.59 7Z"
                            fill="#D50036"
                          />
                        </svg>
                        <span v-if="task.dependency.installer" class="mx-2"
                          >Installer</span
                        >
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-col items-center justify-between">
                    <span class="font-bold">Comment:</span>
                    <textarea
                      type="text"
                      v-model="task.comments"
                      placeholder="Enter report"
                      readonly
                      class="block w-56 border border-gray-300 bg-transparent p-2 focus:outline-none"
                    ></textarea>
                  </div>
                  <div class="flex flex-col items-center justify-between">
                    <span class="font-bold">Date:</span>
                    <div class="border border-gray-300 p-2 focus:outline-none w-auto">
                      {{ formatDate(task.date) }}
                    </div>
                  </div>
                  <div class="flex flex-col items-center justify-between">
                    <span class="font-bold">Time:</span>
                    <div class="border border-gray-300 p-2 focus:outline-none w-16">
                      {{ convertDateStringToTime(task.time) }}
                    </div>
                  </div>
                  <button
                    @click="removeSchedule(index)"
                    class="delete-icon mt-2 self-end rounded bg-red-500 p-2 text-white w-12 items-center justify-center place-content-center flex"
                  >
                    <img src="../../assets/trash.svg" alt="" class="cursor-pointer" />
                  </button>
                </div>
                <div
                  v-else
                  class="task-item schedule-row mt-8 flex flex-row gap-10 rounded-lg bg-transparent p-2"
                >
                  <div class="flex flex-col items-center justify-between">
                    <span class="font-bold">Select KPI:</span>
                    <input
                      type="text"
                      readonly
                      v-model="task.kpi_name"
                      class="block w-28 border border-gray-300 p-2 focus:outline-none"
                    />
                  </div>
                  <div class="flex flex-col items-center justify-between">
                    <span class="font-bold">Name of Task:</span>
                    <input
                      type="text"
                      readonly
                      v-model="task.name"
                      class="block w-72 border border-gray-300 p-2 focus:outline-none"
                    />
                  </div>
                  <div class="flex flex-col items-center justify-between">
                    <span class="font-bold">Start Time:</span>
                    <input
                      type="text"
                      readonly
                      v-model="task.start_time"
                      class="block w-auto border border-gray-300 p-2 focus:outline-none"
                    />
                  </div>
                  <div class="flex flex-col items-center justify-between">
                    <span class="font-bold">End Time:</span>
                    <input
                      type="text"
                      readonly
                      v-model="task.end_time"
                      class="block w-auto border border-gray-300 p-2 focus:outline-none"
                    />
                  </div>
                  <button
                    @click="removeSchedule(index)"
                    class="delete-icon mt-2 self-end rounded bg-red-500 p-2 text-white w-12 items-center justify-center place-content-center flex"
                  >
                    <img src="../../assets/trash.svg" alt="" class="cursor-pointer" />
                  </button>
                </div>
                <div></div>
              </div>
            </div>
            <div
              v-else
              class="mt-12 flex place-content-center items-center justify-center"
            >
              <div class="flex flex-col">
                <img
                  src="../../assets/cloud.svg"
                  alt="No Task"
                  class="cursor-pointer place-content-center"
                />
              </div>
              <!-- image placeholder for page -->
            </div>
            <div class="mr-5 flex flex-row-reverse gap-4 items-end">
              <input
                type="submit"
                name=""
                id="submitScheduleButton"
                @click="sendSchedule"
                value="Send daily schedule"
                class="lg:float-right mt-12 block rounded-md cursor-pointer bg-primary px-3 py-2 text-white"
                readonly
                :disabled="!hasData"
              />
            </div>
          </section>
        </section>
      </main>
    </template>
  </app-layout>
</template>
<script setup>
import AppLayout from "../../layouts/AppLayout.vue";
import AppHorizontalNavigation from "../../components/AppHorizontalNavigation.vue";
import AppModal from "../../components/AppModal.vue";
import { ref, computed, reactive, watch, onMounted } from "vue";
import Calendar from "primevue/calendar";
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import workplaceRequestsv2 from "../../services/workplaceRequestsv2";
import { useUserStore } from "../../stores/userStore";
import Swal from "sweetalert2";
import { useRouter } from "vue-router";
import { formatDate } from "../../helpers/utils";
import TimeSlots from "../../components/TimeSlots.vue";
import convertDateStringToTime from "../../helpers/time";
import leadRequest from "../../services/leadRequest.js";

const addingDailySchedule = ref(false);
const errorMessage = ref("");
const button = ref(null);
const time = ref(null);
const showDropdown = ref(false);
const showModal = ref(false);
const schedules = ref([]);
const router = useRouter();

var newDailySchedules = reactive({
  name: "This is a test schedule",
  tasks: [],
});

const visitation = ref({
  kpi: "",
  kpi_name: "",
  name_of_lead: "",
  purpose_of_visit: "",
  dependency: {
    transport: false,
    installer: false,
    proposal: false,
    other: false,
  },
  comments: "",
  type: "visitation",
  date: "",
  time: "",
  dependencies: "",
});
const removeSchedule = (index) => {
  newDailySchedules.tasks.splice(index, 1);
};

const hasData = computed(() => newDailySchedules.tasks.length > 0);

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value;
};

const openModal = () => {
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
  addingDailySchedule.value = false;
};

const leads = ref([]);
async function getLeadList() {
  const { status, data } = await leadRequest("get", "leads/get-list");
  if (status === 200) {
    leads.value = data.data;
  } else {
    Swal.fire({
      icon: "error",
      title: "Error",
      message: data.message || "Error fetching leads..",
    });
  }
}

const selectKPI = ref([]);
async function getSelectKPIdata() {
  const { status, data } = await workplaceRequestsv2("get", "kpi/all");
  if (status === 200) {
    selectKPI.value = data.data.results.data;
  }
}

const targetKey = ref(0)
const selectedMeasures = ref([]);

const getMeasure = async(kpi_id, index) => {
  const staff_id = userStore.$state.user.user_id
  const { status, data } = await workplaceRequestsv2(
          'get',
          `staff-measure/${staff_id}/${kpi_id}`
        )
        if (status === 200) {
          newDailySchedules.tasks[index].selectedMeasures = data.data.data
          targetKey.value++
        } else {
          selectedMeasures.value = []
        }
}


const saveForm = () => {
  let dependencies = [];
  if (visitation.value.dependency.transport) dependencies.push("transportation");
  if (visitation.value.dependency.installer) dependencies.push("installer");
  if (visitation.value.dependency.proposal) dependencies.push("proposal");
  if (visitation.value.dependency.other) dependencies.push("other");

  visitation.value.dependencies = dependencies.join(",");
  newDailySchedules.tasks.push(visitation.value);
  //console.log(newDailySchedules);

  resetVisitationForm();
  closeModal();
};

function resetVisitationForm() {
  visitation.value = {
    kpi: "",
    kpi_name: "",
    name_of_lead: "",
    purpose_of_visit: "",
    dependency: {
      transport: false,
      installer: false,
      proposal: false,
      other: false,
    },
    comments: "",
    type: "visitation",
    date: "",
    time: "",
    dependencies: "",
  };
}

//updated selected Kpi name
const updateKpiName = () => {
  const selectedKpi = selectKPI.value.find((kpi) => kpi.id === visitation.value.kpi_id);
  if (selectedKpi) {
    visitation.value.kpi_name = selectedKpi.name;

  }
  console.log(visitation.value);
};

const updateTaskKpiName = (kpi, index) => {
  //console.log("testing..", index);
  const selectedKpi = selectKPI.value.find(
    (kpi) => kpi.id === newDailySchedules.tasks[index].kpi_id
  );
  if (selectedKpi) {
    newDailySchedules.tasks[index].kpi_name = selectedKpi.name;
    getMeasure(kpi, index)

  }
};

const loading = ref(false);

function cancelForm() {
  loading.value = false;
  console.log("Form cancelled");
}
async function sendSchedule() {
  let btn = document.getElementById("submitScheduleButton");
  let label = btn.innerHTML;
  btn.innerHTML = "Loading .....";
  btn.setAttribute("disabled", true);

  try {
    newDailySchedules.name = `${
      selected.value
    }_Daily_Schedule_${userStore.$state.user.name.split(" ").join("_")}`;
    const response = await workplaceRequestsv2(
      "post",
      "staff-schedule/create",
      newDailySchedules
    );
    const { status, data } = response;

    if (status == 200 || status == 201) {
      Swal.fire({
        icon: "success",
        title: "Submitted",
        text: "Daily Schedule submitted successfully",
      });
      // resetInputs(index);
      newDailySchedules = {
        name: "",
        tasks: [],
      };
      //redirect here
      router.push({ name: "home-page" });
    } else if (status == 422) {
      console.log(data.errors);
      const valuesArray = Object.values(data.errors);
      Swal.fire({
        icon: "error",
        title: "Bad Request",
        text: valuesArray[0] || "Some fields are missing",
      });
    } else {
      Swal.fire({
        icon: "info",
        title: "Bad Request",
        text: data?.data.message ? data?.data?.message : "Invalid Request",
      });
    }
  } catch (e) {
    Swal.fire({
      icon: "info",
      title: "Info",
      text: e.message,
    });
  }

  btn.innerHTML = label;
  btn.removeAttribute("disabled");
  addingDailySchedule.value = false;
}

const existingDailySchedules = ref([
  {
    title: "My daily schedule",
    status: "pending",
    date: "22/01/2023",
    kpi: "user profile modules development",
    tasks: [
      {
        id: 1,
        taskName: "convert UI design",
        start: "9am",
        end: "3pm",
        status: "completed",
      },
      {
        id: 2,
        taskName: "integrate backend api",
        start: "3pm",
        end: "5pm",
        status: "completed",
      },
      {
        id: 3,
        taskName: "state management and error handling",
        start: "3pm",
        end: "5pm",
        status: "pending",
      },
    ],
  },
]);


const tasks = ref([
  {
    name: "This is a test schedule",
    tasks: [
      {
        kpi_id: null,
        kpi_name: "",
        name_of_lead: "",
        purpose_of_visit: "",
        dependencies: "",
        date: "",
        time: "",
        comments: "",
        type: "visitation",
      },
      {
        kpi_id: null,
        kpi_name: "",
        name: "",
        start_time: "",
        end_time: "",
      },
    ],
  },
]);
const initComponent = () => {
  try {
    errorMessage.value = "";
  } catch (error) {
    errorMessage.value = `Error initializing component: ${error.message}`;
  }
};

initComponent();

// dailySchedule

const from = ref(0);
const to = ref(0);
const pages = ref(1);
const total = ref(0);
const current = ref(1);
const recordsPerPage = ref(5);
const pagination = computed(() => {
  return {
    current: current.value,
    from: from.value,
    to: to.value,
    pages: pages.value,
    total: total.value,
    recordsPerPage: recordsPerPage.value,
  };
});

const isLoading = ref(false);
const userStore = useUserStore();

const selected = ref(new Date().toISOString().split("T")[0]);
const currentDate = ref(new Date().toISOString().split("T")[0]);
onMounted(() => {
  getScheduleSummary();
  getSelectKPIdata();
  getDailySchedules();
  getLeadList();
});
const statuses = ref({ 0: "pending", 1: "completed", 2: "approved", 3: "rejected" });

const selectTimeSlot = (event) => {
  const ul = event.target.nextElementSibling;

  if ([...ul.classList].includes("hidden")) {
    ul.classList.remove("hidden");
  } else {
    ul.classList.add("hidden");
  }
};

const pickTime = ({ time, event }) => {
  const ul = event.target.parentNode;
  ul.dataset.hasOwnProperty("startTime");
  const input = ul.previousElementSibling;

  input.value = time;
  ul.dataset.hasOwnProperty("startTime")
    ? (newTaskStart.value = time)
    : (newTaskEnd.value = time);
  ul.classList.add("hidden");
};

//add input
const addTask = () => {
  newDailySchedules.tasks.push({
    kpi_id: null,
    kpi_name: "",
    start_time: "",
    end_time: "",
    name: "",
  });
  // resetInputs(index)
  //console.log(newDailySchedules);
};

const deleteTask = (taskIndex) => {
  newDailySchedules.tasks = newDailySchedules.tasks.splice(taskIndex, 1);
  // const task = schedule.tasks.find((task) => task.id === taskId);
};

const ScheduleSummary = ref([]);
async function getScheduleSummary() {
  const { status, data } = await workplaceRequestsv2("get", "staff-schedule/summary");
  if (status === 200) {
    ScheduleSummary.value = data.data.results.data;
  }
}
const getDailySchedules = async () => {
  existingDailySchedules.value = [];
  isLoading.value = true;
  const { status, data } = await workplaceRequestsv2(
    "get",
    "staff-schedule/daily-schedule"
  );
  if (status === 200) {
    let results = data.data.results;
    existingDailySchedules.value = results.data;
    current.value = results.pagination.current_page;
    from.value = results.pagination.from;
    to.value = results.pagination.to;
    pages.value = results.pagination.pages;
    total.value = results.pagination.total;
    isLoading.value = false;
  }
};
</script>
<style scoped></style>
