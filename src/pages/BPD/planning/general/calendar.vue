<template>
  <div class="border-grey-600 mx-20 border-2 border-solid bg-white">
    <section class="pt-4">
      <div class="flex w-full flex-row px-10">
        <div class="w-1/2">
          <div class="text-xl">Add New Task</div>
          <div class="text-xs">Compulsory Fields*</div>
        </div>
      </div>
    </section>
    <section class="pt-4">
      <form class="w-full px-10" @submit.prevent="createMeeting">
        <div class="-mx-3 mb-6 flex flex-wrap">
          <div class="w-full px-3">
            <label
              class="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
              for="grid-password"
            >
              Event Name*
            </label>
            <input
              class="mb-3 block w-full appearance-none rounded border border-gray-600 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
              id="grid-password"
              type="text"
              placeholder=""
              v-model="newTasks.title"
            />
          </div>
        </div>
        <div class="-mx-3 mb-6 flex flex-wrap">
          <div class="w-full px-3">
            <label
              class="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
              for="grid-password"
            >
              Event Description*
            </label>
            <textarea
              class="mb-3 block w-full appearance-none rounded border border-gray-600 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
              id="grid-password"
              type="text"
              placeholder=""
              v-model="newTasks.description"
            ></textarea>
          </div>
        </div>

        <div class="-mx-3 mb-6 flex flex-wrap">
          <div class="mb-6 w-full px-3 md:mb-0 md:w-1/2">
            <label
              for="countries"
              class="mb-2 block text-xs font-bold tracking-wide text-gray-700"
              >Type of Event</label
            >
            <select
              id="event_type"
              class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
            >
              <option selected>Meeting</option>
            </select>
          </div>

          <div class="w-full px-3 md:w-1/2">
            <label
              for="countries"
              class="mb-2 block text-xs font-bold tracking-wide text-gray-700"
              >Venue</label
            >
            <select
              v-model="newTasks.venue"
              id="countries"
              class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
            >
              <option selected>Select Venue</option>
              <option
                v-for="(venue, index) in venues"
                :key="index"
                :value="venue.name"
              >
                {{ venue.name }}
              </option>
            </select>
          </div>
        </div>
        <div class="-mx-3 mb-6 flex flex-wrap">
          <div class="mb-6 w-full px-3 md:mb-0 md:w-1/2">
            <label
              for="countries"
              class="mb-2 block text-xs font-bold tracking-wide text-gray-700"
              >Start Date</label
            >
            <div class="relative">
              <input
                v-model="newTasks.date"
                name="start"
                type="date"
                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
                placeholder="Select date start"
              />
            </div>
          </div>

          <div class="mb-6 w-full px-3 md:mb-0 md:w-1/2">
            <label
              for="countries"
              class="mb-2 block text-xs font-bold tracking-wide text-gray-700"
              >Start Time</label
            >
            <div class="relative">
              <input
                v-model="newTasks.start_time"
                name="start"
                type="time"
                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
                placeholder="Select date start"
              />
            </div>
          </div>
        </div>

        <div class="-mx-3 mb-6 flex flex-wrap">
          <div class="w-full px-3 md:w-1/2">
            <label
              for="countries"
              class="mb-2 block text-xs font-bold tracking-wide text-gray-700"
              >End Time</label
            >
            <div class="relative">
              <input
                name="start"
                type="time"
                v-model="newTasks.finish_time"
                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
                placeholder="Select date start"
              />
            </div>
          </div>

          <div class="w-full px-3 md:w-1/2">
            <label
              for="countries"
              class="mb-2 block text-xs font-bold tracking-wide text-gray-700"
              >Frequency</label
            >
            <select
              id=""
              v-model="newTasks.frequency"
              class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
            >
              <option value="one_off">One off</option>
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>
          </div>
        </div>
        <div class="-mx-3 mb-6 flex flex-wrap">
          <div class="w-full px-3">
            <label
              class="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
              for="grid-password"
            >
              Send Invitation To*
            </label>

            <MultiSelect
              v-model="newTasks.group"
              :options="
                users.map((e) => {
                  return {
                    email: e.email, fullname: e.name ,
                    name: e.name,
                  }
                })
              "
              :filter="true"
              optionLabel="name"
              placeholder="Select Recipient"
              :maxSelectedLabels="10"
              class="flex w-full flex-row rounded-lg border border-gray-300 bg-white p-2.5">
              <template #header>
                <div class="mb-4 flex items-center">
                  <input
                    id="disabled-checkbox"
                    type="checkbox"
                    @click="selectAll"
                    value=""
                    class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                  />
                  <label
                    for="disabled-checkbox"
                    class="test-base ml-2 text-sm font-medium text-gray-600 dark:text-gray-500"
                    >Select All</label
                  >
                </div>
              </template>
              <template #footer>
                <div class="bg-white px-3 py-2">
                  <b>{{ selectedTarget ? selectedTarget.length : 0 }}</b>
                  item{{
                    (selectedTarget ? selectedTarget.length : 0) > 1 ? 's' : ''
                  }}
                  selected.
                </div>
              </template>
            </MultiSelect>

            <!-- <select
              id="countries"
              v-model="selectedTarget"
              multiple
              @change="changeRecipients"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            >
              <option
                v-for="(user, index) in users"
                :value="{ email: user.email, fullname: user.name }"
                :key="index"
                >{{ user.name }}</option
              >
            </select> -->
          </div>
        </div>
        <div class="-mx-3 mb-6 flex flex-wrap"></div>
        <div class="-mx-3 mb-6 flex flex-wrap">
          <div class="mb-6 w-full px-3 md:mb-0 md:w-1/2">
            <label
              for="countries"
              class="mb-2 block text-sm font-medium text-gray-900"
              >Priority</label
            >
            <select
              v-model="newTasks.priority"
              id="countries"
              class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
            >
              <option value="high">High</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
            </select>
          </div>
          <div class="w-full px-3 md:w-1/2">
            <label
              for="countries"
              class="mb-2 block text-sm font-medium text-gray-900"
              >Created By</label
            >
            <div class="relative">
              <input
                :value="useUserStore().$state.user.name"
                name="start"
                type="text"
                class="block w-full rounded-lg border border-gray-300 p-2.5 pl-10 text-sm text-gray-900"
                placeholder=""
              />
            </div>
          </div>
        </div>
        <div class="mb-2 mt-10 flex flex-wrap">Event Agenda*</div>
        <div
          v-for="(agenda, index) in newTasks.agenda"
          :key="index"
          class="-mx-3 flex flex-wrap"
        >
          <div class="w-full px-3">
            <label
              class="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
              for="grid-password"
            >
              Agenda {{ index + 1 }}
            </label>
            <input
              v-model="newTasks.agenda[index]"
              class="mb-3 block w-full appearance-none rounded border border-gray-200 px-4 py-3 leading-tight text-gray-700"
              id="grid-password"
              type="text"
            />
          </div>
        </div>

        <div class="mb-6 flex flex-wrap">
          <button
            @click="addAgendaField"
            class="flex flex-row rounded-md bg-primary px-3 py-2 text-xl text-white"
            type="button"
          >
            &nbsp;+
          </button>
          <button
            type="button"
            class="mx-5 rounded-md bg-primary px-3 py-2 text-xl text-white"
            @click="deleteAgenda"
          >
            <img src="@/assets/trash.svg" alt="" />
          </button>
        </div>
        <div class="flex w-full items-end justify-end pb-10">
          <button
            id="submitTaskButton"
            class="mx-1 rounded border bg-red-600 px-6 py-2 font-bold text-white"
          >
            Submit
          </button>
          <button
            class="bg-white-500 rounded border border-gray-700 px-6 py-2 font-bold"
          >
            Cancel
          </button>
        </div>
      </form>
      <!-- {{ selectedTarget }} -->
      <!-- <Select2  :options="options"  /> -->
    </section>
  </div>
</template>
<style>
.p-multiselect-filter,
.p-inputtext,
.p-multiselect-items-wrapper {
  /* max-height: 200px; */
  background: white;
  border: solid 1px;
  /* justify-content: center; */
  padding-left: 20px;
}

/* #countries {
  display: none !important;
} */

/* .p-multiselect-filter-container{
    padding-left: 20px;
    color: black;
  } */
</style>

<script setup>
import { ref, onMounted } from 'vue'
import workplaceRequestsv2 from '@/services/workplaceRequestsv2'
import attendanceRequest from '@/services/attendance.request'
import { useUserStore } from '../../../../stores/userStore'
import MultiSelect from 'primevue/multiselect'
const emit = defineEmits(['switchGenTab'])
import Swal from 'sweetalert2'

const selectedCities = ref()
const options = ref(['Batman', 'Robin', 'Joker'])
const cities = ref([
  { name: 'New York', code: 'NY' },
  { name: 'Rome', code: 'RM' }, 
  { name: 'London', code: 'LDN' },
  { name: 'Istanbul', code: 'IST' },
  { name: 'Paris', code: 'PRS' },
])
const users = ref([])
const venues = ref([])
const selectedTarget = ref([])
const createMeeting = async () => {
  try {
    let submitButton = document.getElementById('submitTaskButton')
    submitButton.setAttribute('disabled', true)
    submitButton.innerHTML = 'Processing.....'
    if (!newTasks.value.group.length) {
      Swal.fire({
        icon: 'info',
        title: 'You need to select recipients',
        showConfirmButton: false,
        timer: 1500,
      })
      return
    }
    newTasks.value.created_by = useUserStore().$state.user.name
    // selectedTarget.value = selectedTarget.value.filter((e) => {
    //   return e != null && e != ''
    // })
    // selectedTarget.value = selectedTarget.value.map((e) => {
    //   return e.code
    // })
   

    const { status, data } = await attendanceRequest(
      'post',
      'meetings/store?platform=suburban',
      newTasks.value
    )
    if (status == 200) {
      // alert(data.status)
      emit('switchGenTab', 1)
      Swal.fire({
        icon: 'success',
        title: 'Meeting created successfully',
        showConfirmButton: false,
        timer: 1500,
      })
    } else {
      Swal.fire({
        icon: 'info',
        title: data.message,
        showConfirmButton: false,
        timer: 1500,
      })
    }

    submitButton.removeAttribute('disabled')
    submitButton.innerHTML = 'Submit'
  } catch (e) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: e.message,
    })
  }
}

const selectAll = (event) => {
  try {
    if (
      !selectedTarget.value ||
      selectedTarget.value.length != users.value.length
    ) {
      selectedTarget.value = users.value.map((e) => {
        return { email: e.email, fullname: e.name }
      })
      document.querySelectorAll('.p-checkbox-box').forEach((e) => {
        e.classList.add('p-highlight')
        e.innerHTML =
          '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="p-icon p-checkbox-icon undefined" aria-hidden="true" data-pc-section="checkboxicon" style=""><path d="M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z" fill="currentColor"></path></svg>'
      })
    } else {
      selectedTarget.value = null
      document.querySelectorAll('.p-checkbox-box').forEach((e) => {
        e.classList.remove('p-highlight')
        e.innerHTML =
          '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="p-icon p-checkbox-icon" aria-hidden="true" data-pc-section="checkboxicon" style="display: none;"><path d="M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z" fill="currentColor"></path></svg>'
      })
    }
  } catch (e) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: e.message,
    })
  }
}
const newTasks = ref({
  title: '',
  date: '',
  venue: '',
  description: '',
  frequency: '',
  priority: '',
  created_by: '',
  start_time: '',
  finish_time: '',
  group: [],
  agenda: [''],
})

onMounted(() => {
  getUsers()
  getVenues()
})

const showRecipients = () => {
  var select = document.getElementById('recipients')
  select.style.display = 'block'

  // Check if the select element exists
  if (select) {
    // Create a new MouseEvent
    var event = new MouseEvent('mousedown', {
      bubbles: true,
      cancelable: true,
      view: window,
    })

    // Dispatch the mouse event on the select element
    select.click(true)
    select.dispatchEvent(event)
  }
}

const getUsers = async () => {
  try {
    const { status, data } = await workplaceRequestsv2(
      'get',
      'users/get-all-users'
    )
    if (status === 200) {
      users.value = data.data.results.data
    }

    // console.log(users.value);
  } catch (e) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: e.message,
    })
  }
}

const getVenues = async () => {
  try {
    const { status, data } = await attendanceRequest('get', 'meetings/venue')
    if (status == 200) {
      venues.value = data.data
    }
  } catch (e) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: e.message,
    })
  }
}

const addAgendaField = () => {
  newTasks.value.agenda.push('')
}

const deleteAgenda = () => {
  newTasks.value.agenda.pop()
}
</script>
