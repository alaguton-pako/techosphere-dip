<template>
  <div class="flex min-h-screen place-items-center justify-center">
    <div class="flex min-h-[620px] w-[378px] justify-center shadow-2xl">
      <div class="w-3/4">
        <div
          class="text-legend-black font-['Source Sans Pro'] justify-start text-left text-2xl font-bold"
        >
          Confirm Resolution
        </div>
        <div class="w-full items-center justify-center">
          <div
            class="font-['Source Sans Pro'] my-16 text-center text-[25px] text-base font-semibold leading-normal text-black"
          >
            What is the status of the work?
          </div>
        </div>
        <div class="my-16">
          <div class="flex w-full justify-center">
            <!-- <router-link
              :to="{
                name: 'FaultResolutionReport',
                params: { id: props.id ? props.id : 0 },
              }"
            > -->
            <button
              @click="completeFault"
              class="font-['Source Sans Pro'] my-2 mb-2 me-2 h-[60px] w-[300px] rounded-lg bg-green-700 px-5 py-2.5 text-lg font-semibold text-white hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Completed
            </button>
            <!-- </router-link> -->
          </div>
          <div class="flex w-full justify-center">
            <router-link :to="{ name: 'resolution-report' }">
              <button
                class="font-['Source Sans Pro'] my-2 mb-2 me-2 h-[60px] w-[300px] rounded-lg bg-yellow-500 px-5 py-2.5 text-lg font-semibold text-white hover:bg-yellow-400 focus:outline-none focus:ring-4 focus:ring-yellow-300 dark:bg-yellow-500 dark:hover:bg-yellow-600 dark:focus:ring-yellow-600"
              >
                Ongoing
              </button>
            </router-link>
          </div>
          <div class="flex w-full justify-center">
            <router-link
              :to="{
                name: 'resolution-report',
                params: { id: props.id ?? 0 },
              }"
            >
              <button
                class="font-['Source Sans Pro'] my-2 mb-2 me-2 h-[60px] w-[290px] rounded-lg bg-red-700 px-7 py-2.5 text-lg font-semibold text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              >
                Not Completed
              </button>
            </router-link>
          </div>
        </div>
      </div>
      <!-- <AppModal
        v-if="showNoFaultConfirmationModal"
        @click="showNoFaultConfirmationModal = !showNoFaultConfirmationModal"
      >
        <template #modal-content>
          <NoFaultConfirmation />
        </template>
      </AppModal> -->
    </div>
  </div>
</template>
<!-- <script setup>
</script> -->
<script setup>
import { onMounted } from 'vue'

const props = defineProps(['id'])
onMounted(() => {
  // alert("Hello Badmous")
})

const completeFault = async () => {
  try {
  } catch (e) {}
}
//import { ref } from 'vue'
//const showNoFaultConfirmationModal = ref(false)
//import { ref } from 'vue'
//import { useRouter } from 'vue-router'
//import AppModal from '../components/AppModal.vue'
//import NoFaultConfirmation from '../pages/NoFaultConfirmation.vue'
</script>
<style scoped></style>
