<script setup>
import { ref } from 'vue'
import AppModal from '@/components/AppModal.vue'
import Collaboration from '../../services/collaboration';
const emit = defineEmits(['close', 'createStrategyData', ])

const props = defineProps({
  updateMode: Boolean,
  formPayload: Object
})

const isProjectComplete =ref(false)

const submitButton = async () => {
  const payload = {
    project_name : props.formPayload.project_name,
    description : props.formPayload.description,
    start_date : props.formPayload.start_date,
    finish_date : props.formPayload.finish_date,
    weighting : props.formPayload.weighting,
    strategy_id : props.formPayload.strategy_id,
    project_status: isProjectComplete.value ? "completed" : "ongoing"

  }
  
  if (props.updateMode) {
    const { status, data } = await Collaboration(
      'put',
      `project/update/${props.formPayload.id}`, 
      payload
    )
    if (status === 200) {
      emit('close')
    }
  }else{
    const { status, data } = await Collaboration(
      'post',
      `project/create`, 
      payload
    )
    if (status === 200) {
      emit('close')
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
                <h1>Kindly fill in the form below to create a new project</h1>
              </div>
              <section class="space-y-5">
                <div class="mb-10 w-full bg-red-600 p-3 text-white">
                  <p v-if="!updateMode">New Project for {{ props.formPayload.strategy_name }} Strategy</p>
                  <p v-else>Update {{ props.formPayload.project_name }}</p>
                </div>
                <div class="flex flex-col">
                  <label for="">Project Title*</label>
                  <input
                    v-model="props.formPayload.project_name"
                    type="text"
                    class="border border-gray-600 p-2"
                    placeholder="Project Title"
                    required
                  />
                </div>
                <div class="flex flex-col">
                  <label for="">Project Description*</label>
                  <textarea
                    v-model="props.formPayload.description"
                    type="text"
                    class="border border-gray-600 p-2"
                    placeholder="Kindly include a description"
                    required
                  ></textarea>
                </div>
                <div 
                    class="flex flex-col"
                >

                  <label for="Start" class="font-medium">Start</label>
                  <input
                    v-model="props.formPayload.start_date"
                    type="datetime-local"
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
                    max="5"
                    min="1"
                    class="border border-gray-600 p-2"
                    placeholder="Include a value between 1 - 5"
                    required
                    
                  />
                </div>
                <div v-if="props.updateMode"> 
                  <label class="inline-flex cursor-pointer items-center">
                    <input type="checkbox" value="" class="peer sr-only" @change="isProjectComplete = !isProjectComplete" />
                    <div
                      class="peer relative h-6 w-11 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rtl:peer-checked:after:-translate-x-full dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"
                    ></div>
                    
                  </label>
                </div>
                <div class="border-b-2 border-gray-300"></div>
                <div class="my-5 flex items-center justify-center space-x-6">
                  <button
                    type="submit"
                    class="cursor-pointer rounded-md bg-red-600 px-6 py-2 text-white"
                  >
                    <p v-if="!props.updateMode">Create</p>
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
