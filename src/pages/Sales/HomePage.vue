<script setup>
import { ref, reactive, onMounted, computed } from "vue";
import DateAndSearch from '../../components/DateAndSearch.vue'
import AppHorizontalNavigation from '../../components/AppHorizontalNavigation.vue'
import AppLayout from '../../layouts/AppLayout.vue'
import AppPagination from '../../components/AppPagination.vue'
import { useUserStore } from '../../stores/userStore.js'
import workplaceRequestsv2 from '../../services/workplaceRequestsv2'
import LoadingSpinner from "@/components/LoadingSpinner.vue";
import Swal from "sweetalert2";

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
const addingDailySchedule = ref(false);
const selected = ref(new Date().toISOString().split("T")[0]);
const currentDate = ref(new Date().toISOString().split("T")[0]);
onMounted(() => {
  getScheduleSummary();
  getSelectKPIdata();
  getDailySchedules();
});

const statuses = ref({ 0: "pending", 1: "completed", 2: "approved", 3: "rejected" })



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

const ScheduleSummary = ref([]);
async function getScheduleSummary() {
  const { status, data } = await workplaceRequestsv2(
    "get",
    "staff-schedule/summary"
  );
  if (status === 200) {
    ScheduleSummary.value = data.data.results.data;
  }
}

const selectKPI = ref([]);
async function getSelectKPIdata() {
  const { status, data } = await workplaceRequestsv2("get", "kpi/all");
  if (status === 200) {
    selectKPI.value = data.data.results.data;
  }
}

async function sendSchedule() {
  let btn = document.getElementById("submitScheduleButton");
  let label = btn.innerHTML;
  btn.innerHTML = "Loading .....";
  btn.setAttribute("disabled", true);
  try {
    newDailySchedules.name = `${selected.value
      }_Daily_Schedule_${userStore.$state.user.name.split(" ").join("_")}`;
    const { status, data } = await workplaceRequestsv2(
      "post",
      "staff-schedule/create",
      newDailySchedules
    );
    if (status == 200 || status == 201) {
      Swal.fire({
        icon: "success",
        title: "Submitted",
        text: "Daily Schedule submitted successfully",
      });
      // resetInputs(index);
      newDailySchedules = {
        name: "",
        tasks: [
          {
            kpi_id: null,
            start_time: "",
            end_time: "",
            name: "",
          },
        ],
      };
    } else {
      Swal.fire({
        icon: "info",
        title: "Bad Request",
        text: data?.data.message ? data?.data?.message : "Invalid Request",
      });
    }
    // });
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
  getScheduleSummary();
  getDailySchedules();
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

var newDailySchedules = reactive({
  name: "",
  tasks: [
    {
      kpi_id: null,
      start_time: "",
      end_time: "",
      name: "",
    },
  ],
});

const expandSchedule = (id) => {
  const div = document.querySelector(`[data-schedule="${id}"]`);
  if ([...div.classList].includes("hidden")) {
    div.classList.remove("hidden");
  } else {
    div.classList.add("hidden");
  }
};

const addNewSchedule = () => {
  newDailySchedules.push({
    name: "",
    tasks: [
      {
        kpi_id: null,
        start_time: "",
        end_time: "",
        name: "",
      },
    ],
  });
};

const sendCloseOut = async (index) => {
  try {
    document
      .getElementById("closeOutButton" + index)
      .setAttribute("disabled", true);
    // document.getElementById('closeOutButton'+index).setAttribute('disabled', true)
    // alert(existingDailySchedules.value[index].closeout)

    let submittedSchedule = existingDailySchedules.value[index];
    let tasks = { tasks: [] };
    // let filtereredTasks = submittedSchedule.tasks.filter((e) => {
    //   return e.active == true;
    // });
    tasks.tasks = submittedSchedule.tasks.map((e) => {
      return {
        id: e.id,
        status: e.active == true ? 'completed' : 'pending',
        comment: document.getElementById(`comment_${e.id}`)?.value,
      };
    });
    tasks.schedule_id = submittedSchedule.id;
    // if (existingDailySchedules.value[index].closeout) {
    tasks.closeout = existingDailySchedules.value[index].closeout ? true : false;
    // }
    // return
    const { status, data } = await workplaceRequestsv2(
      "post",
      "staff-schedule/complete-tasks",
      tasks
    );
    if (status === 200 || status == 201) {
      Swal.fire({
        icon: "success",
        title: "success",
        text: "processed successfully",
      });
      getScheduleSummary();
      getDailySchedules();
    }
    document
      .getElementById("closeOutButton" + index)
      .removeAttribute("disabled", true);
  } catch (e) {
    Swal.fire({
      icon: "info",
      title: "Info",
      text: e.message,
    });
  }
};

// Create new task
const newTaskName = ref("");
const newTaskStart = ref("");
const newTaskEnd = ref("");
const newKPI = ref("");
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

const addTask = () => {
  newDailySchedules.tasks.push({
    kpi_id: null,
    start_time: "",
    end_time: "",
    name: "",
  });
  // resetInputs(index);
};

const resetInputs = (index) => {
  // newDailySchedules[index].tasks=newDailySchedules[index].tasks.map(e=>{
  //   return {}
  // });
  newDailySchedules.tasks[i].name = "";
  // const startTimeInput = document.getElementById(`Start-${index}`);
  // const endTimeInput = document.getElementById(`End-${index}`);
  // const taskNameInput = document.getElementById(`task-${index}`);

  // Reset component state
  newTaskName.value = "";
  newTaskStart.value = "";
  newTaskEnd.value = "";

  // Reset input fields
  startTimeInput.value = "";
  endTimeInput.value = "";
  taskNameInput.value = "";
};

const deleteTask = (taskIndex) => {
  newDailySchedules.tasks = newDailySchedules.tasks.splice(taskIndex, 1);
  // const task = schedule.tasks.find((task) => task.id === taskId);
};

const saveSchedule = () => {
  existingDailySchedules.push(...newDailySchedules);
  addingDailySchedule.value = false;
};
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
              {{ ScheduleSummary.average_score || 0 }}%
            </div>
          </div>
          <div
            class="rounded-md border border-secondary-gray bg-white text-center"
          >
            <h2
              class="border-b border-b-secondary-gray py-5 text-lg font-medium"
            >
            Number of Schedules
            </h2>
            <div class="pb-8 pt-3 text-[62px] font-bold">
              {{ ScheduleSummary.number_of_schedules || 0 }}
            </div>
          </div>
          <div
            class="rounded-md border border-secondary-gray bg-white text-center"
          >
            <h2
              class="border-b border-b-secondary-gray py-5 text-lg font-medium"
            >
              Completed Schedules
            </h2>
            <div class="pb-8 pt-3 text-[62px] font-bold">
              {{ ScheduleSummary.completed_schedules || 0 }}
            </div>
          </div>
          <div
            class="rounded-md border border-secondary-gray bg-white text-center"
          >
            <h2
              class="border-b border-b-secondary-gray py-5 text-lg font-medium"
            >
            Pending Schedules
            </h2>
            <div class="pb-8 pt-3 text-[62px] font-bold">
              {{ ScheduleSummary.pending_schedules || 0 }}
            </div>
          </div>
        </section>

        <section class="p-10">
          <DateAndSearch />
          <section
            class="flex justify-between border-b border-gray-100 bg-white p-8 text-gray-600"
          >
            <p class="text-2xl font-semibold">My schedule</p>
              <router-link :to="{ name: 'report' }">
                  <button
                    class=" h-[51px] w-[200px] rounded-md border border-solid border-[transparent] bg-[#D50036] pb-3.5 pl-7 pr-7 pt-3.5 text-white"
                  >
                    <div class="">Send Daily Schedule</div>
                  </button>
                </router-link>
          </section>

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
                    {{ schedule.name }}
                  </div>
                  <div class="text-sm">{{ schedule.date }}</div>
                </div>
                <div class="flex w-52 items-center">
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
                  {{ schedule.status.split("_").join(" ") }}
                </div>
                <img
                  @click.stop="expandSchedule(schedule.name + '-' + index)"
                  src="../../assets/chevron-black.svg"
                  class="cursor-pointer"
                />
              </div>

              <div :data-schedule="`${schedule.name}-${index}`" class="hidden">
                <ul>
            <li v-for="(task, i) in schedule.tasks" class="my-10 text-sm">
              <div v-if="task.type === 'visitation'">
                  <h2 class="my-1 font-semibold text-base uppercase">
                      KPI : {{ task.kpi_id }}
                  </h2>
                  <h2 class="my-1 font-semibold text-base capitalize">
                      Name of Lead: {{task.name_of_lead}}
                  </h2>
                  <h2 class="my-1 font-semibold text-base capitalize">
                      Purpose of Visitation: {{task.purpose_of_visit}}
                  </h2>
                  <div class="flex items-center font-semibold text-base capitalize py-1">
                      <span> Dependencies: {{task.dependencies}} </span>
                  </div>
                  <div class="flex items-center font-semibold text-base capitalize py-1">
                      <span> Date: {{task.date}} Time: {{task.time}}</span>
                  </div>
                  <div class="flex items-center font-semibold text-base capitalize py-1">
                      <span> Status: {{statuses[task.active] }}</span>
                  </div>
                  <div class="flex items-center font-semibold text-base capitalize py-1">
                    <span v-for="(comment, index) in task.comments"> Comment ::{{ task.comment.content }}</span>
                  </div>
                  <div class="flex items-center font-bold text-base">
                      <div>
                          <input type="checkbox" :checked="task.active" v-model="existingDailySchedules[index].tasks[i].active"/>
                          <span>&nbsp;&nbsp;Completed</span>
                      </div>
                  </div>
                  <div class="my-2">
                      <label class="text-sm font-semibold">Report</label>
                      <textarea type="text" :id="`comment_${task.id}`" placeholder="Enter report" class="block w-full border border-gray-300 bg-transparent p-2 focus:outline-none"></textarea>
                  </div>
              </div>
              <div v-else>
                  <h2 class="my-1 font-semibold text-base uppercase">
                      kpi: {{ task.kpi_id }}
                  </h2>
                  <h2 class="my-1 font-semibold text-base capitalize">
                      Start Time: {{ task.start_time }}
                  </h2>
                  <h2 class="my-1 font-semibold text-base capitalize">
                      End Time: {{ task.end_time }}
                  </h2>
                  <div class="flex items-center font-semibold text-base capitalize py-1">
                      <span> Description: {{ task.name }}</span>
                  </div>
                  <div class="flex items-center font-semibold text-base capitalize py-1">
                      <span> Status: {{ statuses[task.active] }}</span>
                  </div>
                  <b class="text-lg">Comments</b>
                  <div v-for="(comment, index) in task.comments"
                  class="flex items-center font-semibold text-base capitalize py-1">
                      <span> 
                      {{comment.commenter_name}} : {{ comment.content }}
                      </span>
                  </div>
                  <div class="flex items-center font-bold text-base">
                      <input type="checkbox" :checked="task.active" v-model="existingDailySchedules[index].tasks[i].active" />
                      <span>&nbsp;&nbsp;Completed</span>
                  </div>
                  <div class="my-2">
                      <label class="text-sm font-semibold">Report</label>
                      <textarea type="text" :id="`comment_${task.id}`" placeholder="Enter report" class="block w-full border border-gray-300 bg-transparent p-2 focus:outline-none"></textarea>
                  </div>
              </div>
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
                  v-if="schedule.active != 'completed' && schedule.status == 'Approved_Schedule'"
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
              @@fetchRecords="getDailySchedules"
            ></AppPagination>
          </section>
        </section>
      </main>
    </template>
  </app-layout>

  <!-- Create daily schedule -->
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
            <img src="../../assets/down-arrow.svg" alt="" class="mr-2 w-2.5" />
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
          <div
            v-for="(task, i) in newDailySchedules.tasks"
            :key="i"
            class="mt-8 grid grid-cols-12 gap-6"
          >
            <div class="col-span-3">
              <label htmlFor="kpi">Select KPI </label>
              <select
                id="kpi"
                required
                class="block border border-gray-300 p-2 focus:outline-none"
                v-model="newDailySchedules.tasks[i].kpi_id"
                @change="selectMeasure($event.target.value, i)"
              >
                <option selected disabled>-- Select KPI --</option>
                <option
                  v-for="(KPI, index) in selectKPI"
                  :key="index"
                  :value="KPI.id"
                  >{{ KPI.name }}-{{ KPI.type }}
                </option>
              </select>
            </div>


            <div class="col-span-4">
              <label for="task" class="font-medium capitalize">task</label>
              <input
                v-model="newDailySchedules.tasks[i].name"
                required
                type="text"
                :id="`task-${index}`"
                class="task-name block w-11/12 border border-gray-300 p-2 focus:outline-none"
                @input="(event) => (newTaskName = event.target.value)"
              />
            </div>

            <div class="relative col-span-2">
              <label for="Start" class="font-medium">Start</label>
              <input
                type="datetime-local"
                required
                v-model="newDailySchedules.tasks[i].start_time"
                :id="`Start-${index}`"
                class="start-time block w-full border border-gray-300 p-2 px-4 focus:outline-none"
              />
              <TimeSlots
                data-start-time
                @pickTime="(payload) => pickTime(payload)"
              />
            </div>
            <div class="relative col-span-2">
              <label for="End" class="font-medium">End</label>
              <input
                type="datetime-local"
                required
                v-model="newDailySchedules.tasks[i].end_time"
                :id="`End-${index}`"
                class="end-time block w-full border border-gray-300 p-2 focus:outline-none"
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
                class="rounded-md bg-primary px-3 py-2 text-xl text-white"
                @click="addTask()"
              >
                ＋
              </button>

              <button
                v-else
                type="button"
                class="rounded-md bg-primary px-3 py-2 text-xl text-white"
                @click="deleteTask(i)"
              >
                <img src="#" alt="" />
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
  <!-- Create daily schedule end -->
</template>
