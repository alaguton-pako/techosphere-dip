<script setup>
import AppModal from '@/components/AppModal.vue'
import { onMounted, ref } from 'vue'
const emit = defineEmits(['close', 'createTaskData'])
import workplaceRequestsv2 from '../../services/workplaceRequestsv2';
import MultiSelect from 'primevue/multiselect'
import Collaboration from '../../services/collaboration';
import { useRoute } from 'vue-router';

const route = useRoute();  // Access the current route

const selectedTarget = ref([])
const users = ref([])

const internal = ref([])

const props = defineProps({
  formPayload: Object,
  updateMode: Boolean
})

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
const taskName = ref('')
const weighting = ref('')
const description = ref('')
const isInternalDependency = ref(false)


const generateID = () => {
  return Date.now().toString(36) + Math.random().toString(36).substring(2, 9)
}
const submitButton = async () => {
  const formPayload = {
      task_name : props.formPayload.task_name,
      description : props.formPayload.description,
      start_date:props.formPayload.start_date,
      finish_date :props.formPayload.finish_date,
      weighting :props.formPayload.weighting,
      project_id: route.params.id,
      internal: internal.value,
      task_status: isComplete.value ? "completed" : 'ongoing'
  }
  console.log(formPayload)
  if (props.updateMode) {
    const { status, data } = await Collaboration(
      'put',
      `task/update/${props.formPayload.id}`, 
      formPayload

    )
    if (status === 200) {
      emit('close')
    }
  }else{
    const { status, data } = await Collaboration(
      'post',
      `task/create`, 
      formPayload
    )
    if (status === 200) {
      emit('close')
    }
  }

}


const isComplete = ref(false)

onMounted(()=> {
  getUsers()
})
</script>

<template>
  <div>
    <AppModal>
      <template #modal-content>
        <form @submit.prevent="submitButton">
          <button
            class="my-6 ml-auto grid h-10 w-10 place-content-center rounded-full border border-primary text-xl text-primary"
            type="button"
            @click="$emit('close')"
          >
            𝖷
          </button>
          <main class="my-3">
            <div class="flex flex-col gap-2">
              <div>
                <h1>Kindly fill in the form below to create a new entry</h1>
              </div>
              <section class="space-y-5">
                <div class="mb-10 w-full bg-red-600 p-3 text-white">
                  <p v-if="!props.updateMode">New Task</p>
                  <p v-else>Update Task</p>
                </div>
                <div class="flex flex-col">
                  <label for="">Task Name*</label>
                  <input
                    v-model="props.formPayload.task_name"
                    type="text"
                    class="border border-gray-600 p-2"
                    placeholder="..task name"
                    required
                  />
                </div>
                <div class="flex flex-col">
                  <label for="">Task Description*</label>
                  <textarea
                    v-model="props.formPayload.description"
                    type="text"
                    class="border border-gray-600 p-2"
                    placeholder="...description "
                    required
                  ></textarea>
                </div>
                <div class="flex flex-col">
                  <label for="Start" class="font-medium">Start</label>
                  <input
                    v-model="props.formPayload.start_date"
                    type="datetime-local"
                    class="start-time border border-gray-300 p-2 px-4 focus:outline-none" required
                  />
                  <TimeSlots
                    data-start-time
                    @pickTime="(payload) => pickTime(payload)"
                  />
                </div>
                <div class="flex flex-col">
                  <label for="End" class="font-medium">End</label>
                  <input
                    v-model="props.formPayload.finish_date"
                    type="datetime-local"
                    required
                    :id="`End-${index}`"
                    class="end-time border border-gray-300 p-2 focus:outline-none" 
                  />
                  <TimeSlots
                    data-end-time
                    @pickTime="(time) => pickTime(time, $event)"
                  />
                </div>
                <div class="flex flex-col">
                  <label for="">Weighting*</label>
                  <input
                    v-model="props.formPayload.weighting"
                    type="number"
                    class="border border-gray-600 p-2"
                    placeholder="Include a %age value"
                  />
                </div>
                <div class="flex items-center gap-2" v-if="!updateMode">
                  <label for="">Task dependency*</label>
                  <div class="flex items-center text-base font-bold">
                    <input type="checkbox" @click="isInternalDependency = !isInternalDependency" />
                    <span>&nbsp;&nbsp;Internal</span>
                  </div>
                </div>

                

                <!-- this is what i will be needing for the assigning of task to a specific user -->
                <div class="flex w-full flex-col" v-if="isInternalDependency && !updateMode">
                  <label for="">Assigned To:</label>
                  <MultiSelect
                    v-model="internal"
                    :options="
                      users.map((e) => {
                        return {
                          email: e.email, fullname: e.name ,
                          name: e.name,
                        }
                      })
                    "
                    required
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
                </div>
                <div v-if="!updateMode">
                  <label for="">Dependency*</label>
                  <input
                    v-model="props.formPayload.dependency"
                    type="text"
                    class="w-full border border-gray-600 p-2"
                    placeholder="Input external dependency information"
                  />
                </div>
                <div v-if="props.updateMode">
                  <label class="inline-flex cursor-pointer items-center"> Mark as complete 
                    <input type="checkbox" value="" class="ml-4 peer sr-only" @change="isComplete = !isComplete" />
                    <div
                      class="peer relative h-6 w-11 rounded-full
                       bg-gray-200 after:absolute after:start-[2px] 
                        after:top-[2px] after:h-5 after:w-5 after:rounded-full
                        after:border 
                        after:border-gray-300 
                        after:bg-white 
                        after:transition-all after:content-[''] 
                        peer-checked:bg-blue-600 
                        peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 
                        peer-focus:ring-blue-300 rtl:peer-checked:after:-translate-x-full dark:border-gray-600
                         dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>                    
                  </label>
                </div>

                <div class="border-b-2 border-gray-300"></div>
                <div class="my-5 flex items-center justify-center space-x-6">
                  <button
                    type="submit"
                    class="cursor-pointer rounded-md bg-red-600 px-6 py-2 text-white"
                  >
                    <p>Create</p>
                </button>
                </div>
              </section>
            </div>
          </main>
        </form>
      </template>
    </AppModal>
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


</style>