<script setup>
import { ref } from 'vue'
import AppModal from '@/components/AppModal.vue'
import { useUserStore } from '../../stores/userStore'
import Collaboration from '../../services/collaboration';
const store = useUserStore()

const emit = defineEmits(['close', 'createStrategyData'])
const props = defineProps({
  updateMode: Boolean,
  formPayload: Object
})

const submitButton = async () => {
  const payload = {
    fullname : "Ikenna Anikwe",//store.$state.user.name,
    email : "eddyiyke3@gmail.com" ,//store.$state.user.email,
    name : props.formPayload.name,
    description : props.formPayload.description,
    start_date : props.formPayload.start_date,
    finish_date : props.formPayload.finish_date,
    weighting : props.formPayload.weighting
  }

  if (props.updateMode) {
    const { status, data } = await Collaboration(
      'put',
      `strategy/update/${props.formPayload.id}`, 
      payload
    )
    if (status === 200) {
      emit('createStrategyData')
    }
  }else{
    const { status, data } = await Collaboration(
      'post',
      `strategy/create`, 
      payload
    )
    if (status === 200) {
      emit('createStrategyData')
    }
  }

}

 
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
                  <p v-if="!updateMode">New Strategy</p>
                  <p v-else>Update Strategy</p>
                </div>
                <div class="flex flex-col">
                  <label for="">Strategy Name*</label>
                  <input
                    v-model="props.formPayload.name"
                    type="text"
                    class="border border-gray-600 p-2"
                    placeholder="Name"
                    required
                  />
                </div>
                <div class="flex flex-col">
                  <label for="">description*</label>
                  <textarea
                    v-model="props.formPayload.description"
                    type="text"
                    class="border border-gray-600 p-2"
                    placeholder="Description"
                    required
                  ></textarea>
                </div>
                <div class="flex flex-col">
                  <label for="Start" class="font-medium">Start</label>
                  <input
                    type="datetime-local"
                    v-model="props.formPayload.start_date"
                    class="start-time border border-gray-300 p-2 px-4 focus:outline-none"
                    required
                  />
                  <TimeSlots
                    data-start-time
                    @pickTime="(payload) => pickTime(payload)"
                  />
                </div>
                <div class="flex flex-col">
                  <label for="End" class="font-medium">End</label>
                  <input
                    type="datetime-local"
                    required
                    v-model="props.formPayload.finish_date"
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
                    min="1"
                    max="5"
                    class="border border-gray-600 p-2"
                    placeholder="Include a value between 1 - 5"
                    required
                  />
                </div>
                <div class="border-b-2 border-gray-300"></div>
                <div class="my-5 flex items-center justify-center space-x-6">
                  <button
                    type="submit"
                    id="createLeadButton"
                    class="cursor-pointer rounded-md bg-red-600 px-6 py-2 text-white"
                  >
                    <p v-if="!updateMode">Create</p>
                    <p v-else>Update</p>
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
