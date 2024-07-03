<template>
    <!-- Create daily schedule -->
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
            <img src="../assets/left-arrow.svg" alt="" class="mr-2 w-2.5" />
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

        <section class="lg:border-b-4 lg:border-secondary-gray pb-14">
          <div
            v-for="(task, i) in newDailySchedules.tasks"
            :key="i"
            class="lg:mt-8 lg:grid lg:grid-cols-12 lg:gap-6"
          >
            <div class="col-span-3">
              <label htmlFor="kpi">Select KPI </label>
              <select
                id="kpi"
                required
                class="block border border-gray-300 p-2 focus:outline-none"
                v-model="newDailySchedules.tasks[i].kpi_id"
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


            <div
              :key="targetKey"
              class="flex flex-col w-32"
            >
              <label :for="'kpi' + i">Select Target </label>
              <select
                :id="'kpi' + i"
                required
                class="border border-gray-300 p-2 focus:outline-none"
                v-model="task.objective_id"
              >
                <option disabled value="">-- Select Target --</option>
                <option
                  v-for="(measure, index) in newDailySchedules.tasks[i].selectedMeasures"
                  :key="index"
                  :value="measure.id"
                >
                  {{ measure.measure }}
                </option>
              </select>
            </div>

            <div class="lg:col-span-4">
              <label for="task" class="lg:font-medium capitalize">task</label>
              <input
                v-model="newDailySchedules.tasks[i].name"
                required
                type="text"
                :id="`task-${index}`"
                class="lg:task-name lg:block lg:w-11/12 lg:border lg:border-gray-300 lg:p-2 lg:focus:outline-none"
                @input="(event) => (newTaskName = event.target.value)"
              />
            </div>

            <div class="lg:relative col-span-2">
              <label for="Start" class="lg:font-medium">Start</label>
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
                <img src="../assets/trash.svg" alt="" />
              </button>
            </div>
          </div>
        </section>
        <input
          type="save"
          name=""
          id="saveScheduleButton"
          value="  Save daily schedule"
          class="lg:float-right mt-12 block rounded-md cursor-pointer bg-primary px-3 py-2 text-white"
        @click="savedSchedule"
        />
      </form>
    </div>
  <!-- Create daily schedule end -->
</template>
<script setup>
import { ref, reactive, onMounted, computed, defineProps } from "vue";
import TimeSlots from "../../components/TimeSlots.vue";
import Datepicker from "vue3-datepicker";
import workplaceRequestsv2 from "../../services/workplaceRequestsv2";
import { useUserStore } from "../../stores/userStore";
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

const selectKPI = ref([]);
async function getSelectKPIdata() {
  const { status, data } = await workplaceRequestsv2("get", "kpi/all");
  if (status === 200) {
    selectKPI.value = data.data.results.data;
  }
}
const props = defineProps({
  addingDailySchedule: Boolean,
});

const task = ref([ 
  {
    kpi_id: null,
    name: null,
    start_time: null,
    end_time: null,
  }
])
const tasks = ref([ 
  {
    kpi_id: null,
    name: null,
    start_time: null,
    end_time: null,
  }
])

const saveSchedule = ref([])

const closeModal = () =>  {
  emits('close-modal')
}

const emits = defineEmits(['close-modal', 'save-schedule']);

// async function sendSchedule() {
//   let btn = document.getElementById("submitScheduleButton");
//   let label = btn.innerHTML;
//   btn.innerHTML = "Loading .....";
//   btn.setAttribute("disabled", true);
//   try {
//     newDailySchedules.name = `${selected.value
//       }_Daily_Schedule_${userStore.$state.user.name.split(" ").join("_")}`;
//     const { status, data } = await workplaceRequestsv2(
//       "post",
//       "staff-schedule/create",
//       newDailySchedules
//     );
//     if (status == 200 || status == 201) {
//       Swal.fire({
//         icon: "success",
//         title: "Submitted", 
//         text: "Daily Schedule submitted successfully",
//       });
//       // resetInputs(index);
//       newDailySchedules = {
//         name: "",
//         tasks: [
//           {
//             kpi_id: null,
//             start_time: "",
//             end_time: "",
//             name: "",
//           },
//         ],
//       };
//     } else {
//       Swal.fire({
//         icon: "info",
//         title: "Bad Request",
//         text: data?.data.message ? data?.data?.message : "Invalid Request",
//       });
//     }
//     // });
//   } catch (e) {
//     Swal.fire({
//       icon: "info",
//       title: "Info",
//       text: e.message,
//     });
//   }

//   btn.innerHTML = label;
//   btn.removeAttribute("disabled");
//   addingDailySchedule.value = false;
//   getScheduleSummary();
//   getDailySchedules();
// }

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
    //
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

const savedSchedule = (data) => {
  emits('save-schedule', data)
  console.log('Saving schedule');
};


const selectedMeasures = ref([])

const selectMeasure = async(kpi_id, index) => {
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


