<<template>
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
                  <div class="flex flex-col">
                    <label for="">Name of Lead:*</label>
                    <select
                      name=""
                      id=""
                      v-model="tasks[0].tasks[0].name_of_lead"
                      class="border border-gray-600 bg-white p-2"
                    >
                      <option value="" selected disabled class="text-gray-400">
                        Aaron Badmus
                      </option>
                      <option>Clara Dambo</option>
                      <option>Adamu Ali</option>
                      <option>Abdul Chase</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div class="flex flex-col">
                    <label for="">Purpose of Visit:*</label>
                    <select
                      name=""
                      id=""
                      v-model="tasks[0].tasks[0].purpose_of_visit"
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
                          v-model="visitation.transportationChecked"
                          class="..."
                        />
                        <label for="transportation" class="mx-2"
                          >Transportation</label
                        >
                      </div>
                      <div class="mx-3 mb-4 flex flex-row">
                        <input
                          type="checkbox"
                          id="installer"
                          v-model="visitation.installerChecked"
                          class="mx-2"
                        />
                        <label for="installer" class="mx-2">Installer</label>
                      </div>
                      <div class="mb-4 flex flex-row">
                        <input
                          type="checkbox"
                          id="proposal"
                          v-model="visitation.proposalChecked"
                          class="..."
                        />
                        <label for="proposal" class="mx-2">Proposal</label>
                      </div>
                      <div class="mb-4 flex flex-row">
                        <input
                          type="checkbox"
                          id="other"
                          v-model="visitation.otherChecked"
                          class="..."
                        />
                        <label for="other" class="mx-2">Other</label>
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-col">
                    <label for="">Comment:*</label>
                    <textarea
                      v-model="tasks[0].tasks[0].comments"
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
                      v-model="tasks[0].tasks[0].date" 
                      showIcon 
                      class="mx-3" />
                    </div>
                    <div class="flex">
                      <label>Time:</label>
                      <Calendar
                        id="calendar-timeonly"
                        v-model="tasks[0].tasks[0].time"
                        timeOnly
                        class="mx-3"
                      />
                    </div>
                  </div>
                 
                  <div class="my-5 flex items-center justify-center space-x-6">
                   
                    <input type="save" :value="loading ? 'Loading...' : 'Save'" :disabled="loading"
                     class="mt-16 block w-full cursor-pointer rounded-md bg-[#D50036] px-6 py-2 text-center text-white"
                     @click="saveForm" />
                    
                     <input type="cancel" :value="loading ? 'Loading...' : 'Cancel'" :disabled="loading"
                     class="mt-16 block w-full cursor-pointer rounded-md border-gray-400 border px-6 py-2 text-center text-black"
                     @click="cancelForm" />
                    
                  </div>
                </section>
              </div>
            </div>
          </main>
</template>
<script setup>
import AppModal from '../../components/AppModal.vue'
import { ref, computed, reactive, watch, onMounted } from 'vue'
import Calendar from 'primevue/calendar'
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import workplaceRequestsv2 from "../../services/workplaceRequestsv2";
import { useUserStore } from "../../stores/userStore";

const errorMessage = ref('')
const button = ref(null)
const time = ref(null)
const showDropdown = ref(false)
const showModal = ref(false);
const userStore = useUserStore();

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
const newDailySchedule = reactive({
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
//const visitations = ref([]);

const visitation = ref({
  kpi: null,
  name: '',
  purpose: '',
  comments: '',
 transportationChecked:'',
 proposalChecked: '',
 installerChecked:'',
 otherChecked:'',
 type : "visitation",
  date: new Date(),
  time: '',
  dependencies:[],
});
const removeSchedule = (index) => {
  newDailySchedules.value.tasks.splice(index, 1);
};




// const handleCloseModal = () => {
//   addingDailySchedule.value = false
// }

// Methods
const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value
}

const openModal = () => {
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
  addingDailySchedule.value = false
}


const selectKPI = ref([]);
async function getSelectKPIdata() {
  selectKPI.value = [
    {id : 1, name : "test kpi 1"},
    {id : 2, name : "test kpi 2"},
  ];
  // const { status, data } = await workplaceRequestsv2("get", "kpi/all");
  // if (status === 200) {
  //   selectKPI.value = data.data.results.data;
  // }
}

const saveForm = () => {
  let dependencies = [];
  if (visitation.value.transportationChecked) dependencies.push('Transportation');
  if (visitation.value.installerChecked) dependencies.push('Installer');
  if (visitation.value.proposalChecked) dependencies.push('Proposal');
  if (visitation.value.otherChecked) dependencies.push('Other');

  visitation.value.date = new Date();
  visitation.value.dependencies = dependencies;
  visitation.value.time = time;
  visitation.value.name = name_of_lead;
  visitation.value.purpose = purpose_of_visit;
  visitation.value.comments = comments;

  newDailySchedules.tasks.push(visitation.value);
  console.log(newDailySchedules);

  resetVisitationForm();
  closeModal();
};

function resetVisitationForm() {
  visitation.value = {
    kpi: '',
    name: '',
    purpose: '',
    transportationChecked: false,
    installerChecked: false,
    proposalChecked: false,
    otherChecked: false,
    comment: '',
    date: new Date(),
    time: '',
    dependencies: [],
  };
}
const loading = ref(false);const tasks = ref([
  {
    "name": "This is a test schedule",
    "tasks": [
        {
            kpi_id: null,
            name_of_lead : '',
            purpose_of_visit : '',
            dependencies: '',
            date : '',
            time : '',
            comments  : '',
            type : 'visitation'
        },
        {
            kpi_id: 2,
            name: "This is a test task 2",
            start_time : "15:30:00",
            end_time : "15:30:00",
           }
]
}


]);
const initComponent = () => {
  try {
    errorMessage.value = ''
  } catch (error) {
    errorMessage.value = `Error initializing component: ${error.message}`
  }
}

initComponent()

function cancelForm() {
    loading.value = false; 
    console.log('Form cancelled');
}


onMounted(() => {
  getSelectKPIdata();
});











</script>