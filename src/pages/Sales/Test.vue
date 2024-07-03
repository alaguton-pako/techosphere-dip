<script setup>
import DateAndSearch from '../../components/DateAndSearch.vue'
import AppHorizontalNavigation from '../../components/AppHorizontalNavigation.vue'
import AppLayout from '../../layouts/AppLayout.vue'
import AppPagination from '../../components/AppPagination.vue'
import { ref, computed, onMounted, reactive } from 'vue'
import { useUserStore } from '../../stores/userStore.js'
import workplaceRequestsv2 from '../../services/workplaceRequestsv2'
import Datepicker from "vue3-datepicker";
import Swal from "sweetalert2";
const isOpen = ref(false)

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

const selected = ref(new Date().toISOString().split('T')[0])
const currentDate = ref(new Date().toISOString().split("T")[0]);
onMounted(() => {
  getScheduleSummary();
  getSelectKPIdata();
  getDailySchedules();
});

const statuses = ref({ 0: "pending", 1: "completed", 2: "approved", 3: "rejected" })

onMounted(() => {
  getDailySchedules()
})
const existingDailySchedules = ref([
  {
    name: "My daily schedule",
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

const getDailySchedules = async () => {
  // existingDailySchedules.value = [];
  isLoading.value = true;
  const { status, data } = await workplaceRequestsv2(
    "get",
    "staff-schedule/daily-schedule"
  );
  if (status === 200) {
    let results = data.data.results;
    existingDailySchedules.value = results.data;
    console.log(existingDailySchedules);
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

const expandSchedule = (id) => {
  const div = document.querySelector(`[data-schedule="${id}"]`);
  if ([...div.classList].includes("hidden")) {
    div.classList.remove("hidden");
  } else {
    div.classList.add("hidden");
  }
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
    );le
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

const addingDailySchedule = ref(false);


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

<template>
  <app-layout>
    <template v-slot:main-content>
      <main class="lg:w-full bg-[#F5F5F5] lg:pl-[260px]">
        <AppHorizontalNavigation />
        <section class="mt-8 lg:grid lg:grid-cols-4 lg:gap-6 lg:p-10">
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
              10
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
              <!-- {{ ScheduleSummary.number_of_schedules || 0 }} -->
              10
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
              <!-- {{ ScheduleSummary.completed_schedules || 0 }} -->
              12
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
              <!-- {{ ScheduleSummary.completed_schedules || 0 }} -->
              19
            </div>
          </div>
        </section>
        <section class="p-10">
          <DateAndSearch />

          <section
            class="flex flex-col border-b border-gray-100 bg-white p-10 text-gray-600"
          >
            <div class="flex flex-row gap-24 space-x-56">
              <div class="text-start text-[25px] font-semibold text-black">
                <p class="w-80">My Schedule</p>
              </div>
              <div class="">
                <router-link :to="{ name: 'report' }">
                  <button
                    class=" h-[51px] w-[200px] rounded-md border border-solid border-[transparent] bg-[#D50036] pb-3.5 pl-7 pr-7 pt-3.5 text-white"
                  >
                    <div class="">Send Daily Schedule</div>
                  </button>
                </router-link>
              </div>
            </div>
            <div>
              <div
              v-for="(schedule, index) in existingDailySchedules"
              :key="index"
               class="flex justify-between border-b py-14">
                <div>
                  <div class="font-semibold text-black">{{ schedule.name }}</div>
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
                  src="../assets/chevron-black.svg"
                  class="cursor-pointer"
                />
              </div>

               <div :data-schedule="`${schedule.name}-${index}`" class="hidden">
                <ul>
                  <li v-for="(task, i) in schedule.tasks" class="my-10 text-sm">
                    <h2 class="my-1 font-semibold text-base uppercase">
                      kpi: {{ task.kpi_id }}
                    </h2>
                    <h2 class="my-1 font-semibold text-base uppercase">
                      Start Time: {{ task.start_time }}
                    </h2>
                    <h2 class="my-1 font-semibold text-base uppercase">
                      End Time: {{ task.end_time }}
                    </h2>

                    <div
                      class="flex items-center font-semibold text-base capitalize py-1"
                    >
                      <span> Description: {{ task.name }}</span>
                    </div>

                    <div
                      class="flex items-center font-semibold text-base capitalize py-1"
                    >
                      <span> Status: {{ statuses[task.active] }}</span>
                    </div>

                    <div class="flex items-center font-semibold text-base capitalize py-1">
                      <span v-if="task.comments?.length"> Comment :{{ task.comments[task.comments?.length-1].content }}</span>
                      <span v-else>  Comment ::{{ task.comment }}</span>
                    </div>

                    <div class="flex items-center font-bold text-base">
                      <input
                        type="checkbox"
                        :checked="task.active"
                        v-model="existingDailySchedules[index].tasks[i].active"
                      />
                      <span>&nbsp;&nbsp;Completed</span>
                    </div>

                    <div class="my-2">
                      <label class="text-sm font-semibold">Report</label>
                      <input
                        type="text"
                        :id="`comment_${task.id}`"
                        placeholder="Enter report"
                        class="block w-full border border-gray-300 bg-transparent p-2 focus:outline-none"
                      />
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
</template>