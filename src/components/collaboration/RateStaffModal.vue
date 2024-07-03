<script setup>
import AppModal from '@/components/AppModal.vue'
const emit = defineEmits('close')
import { ref } from 'vue';
import Collaboration from '../../services/collaboration';


const props = defineProps({
  payload: Object
})

const payload = ref({
  staff_id :props.payload.staff.id,
  task_id :props.payload.task,
  rating :1
})

const submitButton = async () => {
    const { status, data } = await Collaboration(
      'post',
      `task/rate-staff`, 
      payload.value

    )
    if (status === 200) {
      emit('close')
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
            <div class="flex flex-col gap-2 w-full">
              <div>
                <h1 class="text-md text-center font-bold">
                  Rate staff {{props.payload.staff.name }} on task delivered
                </h1>
              </div>
              <section class="space-y-5">
                <div class="flex flex-col">
                  <!-- <label for="">Task Rating*</label> -->
                  <input
                    v-model="payload.rating"
                    type="number"
                    min="1"
                    max="5"
                    class="border border-gray-600 p-2"
                    placeholder=" 1 - 5"
                  />
                </div>
                <div class="border-b-2 border-gray-300"></div>
                <div class="my-5 flex items-center justify-center space-x-6">
                  <button
                    type="submit"
                    id="createLeadButton"
                    class="rounded-md bg-red-600 px-6 py-2 text-white"
                  >
                    <p>Submit</p>
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
