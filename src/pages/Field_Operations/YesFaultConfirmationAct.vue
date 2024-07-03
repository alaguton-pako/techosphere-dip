<template>
  <div class="w-3/4">
    <div
      class="text--black font-['Source Sans Pro'] justify-start text-left text-2xl font-bold"
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
        <!-- <router-link to="/pages/ActivationResolutionReport"> -->
        <button
          @click="completeFault"
          class="font-['Source Sans Pro'] my-2 mb-2 me-2 h-[60px] w-[300px] rounded-lg bg-green-700 px-5 py-2.5 text-lg font-semibold text-white hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Completed
        </button>
        <!-- </router-link> -->
      </div>
      <div class="flex w-full justify-center">
        <!-- <router-link
              :to="{
                name: 'FaultResolutionReport',
                params: { id: props.id ?? 0 },
              }"
            > -->
        <button
          @click="$emit('showNoFaultResolution')"
          class="font-['Source Sans Pro'] my-2 mb-2 me-2 h-[60px] w-[300px] rounded-lg bg-yellow-500 px-5 py-2.5 text-lg font-semibold text-white hover:bg-yellow-400 focus:outline-none focus:ring-4 focus:ring-yellow-300 dark:bg-yellow-500 dark:hover:bg-yellow-600 dark:focus:ring-yellow-600"
        >
          Ongoing
        </button>
        <!-- </router-link> -->
      </div>
      <div class="flex w-full justify-center">
        <button
          class="font-['Source Sans Pro'] my-2 mb-2 me-2 h-[60px] w-[400px] rounded-lg bg-red-700 px-7 py-2.5 text-lg font-semibold text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          @click="$emit('showNoFaultResolution')"
        >
          Not Completed
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import workplaceRequestsv2 from '../../services/workplaceRequestsv2'
const showNoFaultConfirmationModal = ref(false)
//import { ref } from 'vue'
//import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'
import router from '../../router'
const props = defineProps(['selectedSchedule'])
const completeFault = async () => {
  try {
    const { status, data } = await workplaceRequestsv2(
      'post',
      'network-fault/confirm-resolution',
      {
        fault_id: props.selectedSchedule?.id,
        status: 'completed',
      }
    )
    if (status == 200) {
      Swal.fire({
        icon: 'success',
        title: 'Successful',
        text: 'processed successfully',
      })
      router.push({
        name: 'resolution-report',
        params: { id: props.selectedSchedule.id },
      })
    }
  } catch (e) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'An error occurred, please try again.',
    })
  }
}
</script>
<style scoped></style>
