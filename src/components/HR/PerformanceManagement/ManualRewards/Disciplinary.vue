<template>
  <section class="p-10">
    <div class="mr-10 mt-5 flex flex-row-reverse">
      <button
        @click="sendDisciplinary"
        class="h-[51px] w-[120px] shrink-0 rounded-md border border-solid bg-[#D50036] pb-3.5 pl-6 pr-7 pt-3.5 text-white"
      >
        SEND
      </button>
    </div>
    <div class="mx-3 my-12 w-full border border-gray-300">
      <div class="my-4 w-full border-gray-400 p-5">
        <form @submit.prevent="sendDisciplinary">
          <div class="my-2 grid grid-cols-1 gap-2">
            <div class="mb-4">
              <label
                for="name"
                class="text-md text-black-800 mb-2 block font-semibold"
                >Title of Disciplinary Hearing</label
              >
              <input
                v-model="title"
                type="text"
                id="field1"
                name="field1"
                required
                class="w-full border border-gray-500 p-2"
              />
            </div>
            <div class="mb-4">
              <label
                for="name"
                class="text-md text-black-800 mb-2 block font-semibold"
                >Reason of Disciplinary Hearing</label
              >
              <input
                v-model="reason"
                type="text"
                id="field1"
                name="field1"
                class="w-full rounded-md border p-3"
              />
            </div>
            <div class="mb-4">
              <label
                for="name"
                class="text-md text-black-800 mb-2 block font-semibold"
              >
                Priority Level</label
              >
              <select
                v-model="priority"
                name="dropdown"
                id="dropdown"
                class="w-full rounded-md border p-2"
              >
                <option value="first level">High-level</option>
                <option value="second level">Mid-level</option>
                <option value="third level">Low-level</option>
              </select>
            </div>

            <div class="mb-4">
              <div>
                <label for="name" class="font-semibold"
                  >Description of Infraction</label
                >
              </div>
              <textarea
                v-model="description"
                id="comment"
                class="w-full rounded-md border-0 p-2 text-sm text-gray-900 focus:outline-none focus:ring-0 dark:bg-white dark:text-black dark:placeholder-gray-400"
                required
              ></textarea>
            </div>

            <div class="mb-4">
              <label
                for="dropdown"
                class="text-md text-black-800 mb-2 block font-semibold"
              >
                Send Query To
              </label>
              <Multiselect
                v-model="defaulter_id"
                :options="defaulters"
                :multiple="true"
                placeholder="Select one or more names"
                label="name"
                track-by="id"
                :close-on-select="false"
                :clear-on-select="false"
                :preserve-search="true"
                @select="handleSelectionChange"
                @remove="handleSelectionChange"
                id="dropdown"
                class="w-full"
              ></Multiselect>
            </div>
            <div class="mb-4">
              <label
                for="dropdown"
                class="text-md text-black-800 mb-2 block font-semibold"
                >Send Invitation To</label
              >
              <select
                v-model="reported_to"
                id="dropdown"
                class="w-full rounded-md border p-2"
              >
                <option
                  v-for="report in reports"
                  :key="report.id"
                  :value="report.id"
                >
                  {{ report.name }}
                </option>
              </select>
            </div>
          </div>
          <div class="my-3 grid grid-cols-2 gap-4">
            <div class="mb-4">
              <label
                for="date"
                class="text-md text-black-800 mb-2 block font-semibold"
                >Date</label
              >
              <input
                v-model="date"
                type="date"
                id="field1"
                name="field1"
                class="w-full rounded-md border p-2"
              />
            </div>
            <div class="mb-4">
              <label
                for="time"
                class="text-md text-black-800 mb-2 block font-semibold"
                >Time</label
              >
              <input
                v-model="time"
                type="time"
                id="field1"
                name="field1"
                class="w-full rounded-md border p-2"
              />
              <TimeSlots data-time @pickTime="(payload) => pickTime(payload)" />
            </div>
          </div>
          <div class="flex flex-row">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 12 22C17.53 22 22 17.53 22 12C22 6.47 17.53 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM15.59 7L12 10.59L8.41 7L7 8.41L10.59 12L7 15.59L8.41 17L12 13.41L15.59 17L17 15.59L13.41 12L17 8.41L15.59 7Z"
                fill="#D50036"
              />
            </svg>
            <div class="mx-1">No upload(s)</div>
          </div>
          <div class="my-4 grid-cols-1 gap-4 pb-6 lg:grid-cols-1">
            <div class="mx-2 mb-4">
              <label
                for="picture"
                class="mb-2 block text-sm font-semibold text-gray-600"
                >Upload Supporting Evidence/ Documentation</label
              >
              <input type="file" @change="onFileChanged($event)" capture />
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, defineEmits } from 'vue'
import workplaceRequestsv2 from '../../../../services/workplaceRequestsv2.js'
import { useUserStore } from '../../../../stores/userStore.js'
import Multiselect from 'vue-multiselect'
import Swal from 'sweetalert2'

const title = ref(null)
const reason = ref(null)
const priority = ref(null)
const description = ref(null)
const defaulter_id = ref([])
const reported_to = ref(0)
const date = new Date()
const time = ref(null)
const evidence = ref(null)
const defaulters = ref([])
const reports = ref(0)
const file = ref(null)

onMounted(() => {
  getDefaulter()
  getReport()
})

const sendDisciplinary = async () => {
  try {
    let isoDateString = new Date().toISOString()

    const ids = defaulter_id.value.map((item) =>  item.id);
    
    let payload = new FormData();
    payload.append('type', 'dc');
    payload.append('title', title.value);
    payload.append('reason', reason.value);
    payload.append('priority', priority.value);
    payload.append('description', description.value);

    // Append each ID individually
    ids.forEach((id) => {
      payload.append('defaulter_id[]', id)
    })

    payload.append('reported_to', reported_to.value)
    payload.append('date', isoDateString.split('T')[0])
    payload.append('time', time.value)

    if (file.value) {
      payload.append('evidence', file.value)
    }

    const { status, data } = await workplaceRequestsv2(
      'post',
      `operations/bp/query/create`,
      payload
    )
    if (status == 422) {
      Swal.fire({
        icon: 'info',
        title: 'Info',
        text: data ? data.message : 'Enter Correct details',
      })
    }
    if (status === 200 || status === 201) {
      Swal.fire({
        icon: 'success',
        title: 'Submitted',
        text: 'Disciplinary Action Created Successfully',
      })
      resetForm()
    }
  } catch (e) {
    console.error('An error occurred', e)
    Swal.fire({
      icon: 'info',
      title: 'Info',
      text: e.message,
    })
  }
}

const resetForm = () => {
  title.value = null
  reason.value = null
  priority.value = null
  description.value = null
  defaulter_id.value = []
  reported_to.value = 0
  date.value = new Date()
  time.value = null
  evidence.value = null
}

const getDefaulter = async () => {
  try {
    const { status, data } = await workplaceRequestsv2(
      'get',
      'users/get-all-users'
    )
    if (status === 200) {
      defaulters.value = data.data.results.data
    } else {
      console.log(data.data.results.data)
      defaulters.value = data.data.results.data
    }
    // else {
    //   defaulters.value = []
    // }
  } catch (e) {
    console.error('An error occurred', e)
  }
}

const getReport = async () => {
  try {
    const { status, data } = await workplaceRequestsv2(
      'get',
      'users/get-all-users'
    )
    if (status === 200) {
      reports.value = data.data.results.data
    } else {
      console.log(data.data.results.data)
      reports.value = data.data.results.data
    }
    // else {
    //   reports.value = 0
    // }
  } catch (e) {
    console.error('An error occurred', e)
  }
}

function handleSelectionChange() {
  if (!Array.isArray(defaulter_id.value)) {
    console.error('Expected defaulter_id to be an array')
    return
  }
}

  function onFileChanged($event) {
      const target = $event.target;
      if (target && target.files) {
          file.value = target.files[0];
      }
  }

const pickTime = ({ time, event }) => {
  const ul = event.target.parentNode
  ul.dataset.hasOwnProperty('time')
  const input = ul.previousElementSibling

  input.value = time
  ul.dataset.hasOwnProperty('time')
    ? (newTaskStart.value = time)
    : ul.classList.add('hidden')
}
</script>
