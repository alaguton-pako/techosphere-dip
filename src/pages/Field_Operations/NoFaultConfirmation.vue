<template>
  <div
    class="w-100 flex h-auto place-items-center justify-center bg-transparent"
  >
    <div class="w-96 rounded-lg bg-white p-8 shadow-md">
      <h2 class="my-5 mb-4 text-2xl font-bold">Confirm Resolution</h2>
      <!-- Your form goes here -->
      <form>
        <div class="my-3 mb-4">
          <label
            for="dropdown"
            class="mb-2 block text-sm font-medium text-gray-600"
            >Why was the fault not resolved ?</label
          >
          <select
            v-model="payload.reason"
            id="dropdown"
            name="dropdown"
            class="w-full rounded border px-3 py-2 focus:border-blue-500 focus:outline-none"
          >
            <option selected="">Delay Diagnosis</option>
            <option value="FP">Inability to use tools (IDP,Coordinates)</option>
            <option value="LI">Inaccurate Diagnosis</option>
            <!-- <option value="RE">Route Error</option>
            <option value="CI">Connections Interference</option> -->
          </select>
        </div>

        <h2 class="my-8 mb-4 text-lg font-bold">MSST Details:</h2>

        <div class="mb-4">
          <label for="name" class="block text-sm font-semibold text-gray-600"
            >Customer Name</label
          >
          <input
            v-model="payload.customer"
            type="text"
            id="name"
            name="name"
            class="w-full rounded border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
            placeholder="Enter Name"
          />
        </div>

        <div class="mb-4">
          <label for="email" class="block text-sm font-semibold text-gray-600"
            >Splitter</label
          >
          <input
            v-model="payload.splitter"
            type="email"
            id="email"
            name="location"
            class="w-full rounded border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
            placeholder="Enter Splitter"
          />
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div>
            <label for="input1" class="block text-sm font-medium text-gray-600"
              >Resolution Date</label
            >
            <input
              v-model="payload.date"
              type="date"
              id="input1"
              name="input1"
              class="bg-white-100 mt-1 block w-full rounded-md border p-2"
            />
          </div>

          <div>
            <label for="input2" class="block text-sm font-medium text-gray-600"
              >Duration</label
            >
            <input
              v-model="payload.duration"
              type="text"
              id="input2"
              name="input2"
              class="bg-white-100 mt-1 block w-full rounded-md border p-2"
              placeholder="Enter Duration"
            />
          </div>
        </div>
        <!-- <div class="mb-4">
          <label for="details" class="block text-sm font-semibold text-gray-600"
            >MSST Details</label
          >
          <input
            v-model="payload.details"
            type="text"
            id="email"
            name="location"
            class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            placeholder="Enter Details"
          />
        </div> -->
        <div class="my-5 mb-4">
          <label for="comment" class="block text-sm font-medium text-gray-600"
            >MSST Details</label
          >
          <textarea
            v-model="payload.details"
            id="comment"
            name="comment"
            rows="4"
            class="mt-1 w-full rounded-md border p-2"
            placeholder="Input setbacks / delay comments"
          ></textarea>
        </div>

        <div class="my-4 flex justify-center">
          <!-- <router-link to="/pages/FaultResolutionReport"> -->
          <button
            @click="completeFault"
            type="submit"
            class="rounded-md bg-[#D50036] px-4 py-2 text-white focus:outline-none"
          >
            Submit
          </button>
          <!-- </router-link> -->
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import workplaceRequestsv2 from '../../services/workplaceRequestsv2.js'
import Swal from 'sweetalert2'
import { ref } from 'vue'
const props = defineProps(['selectedSchedule'])
const payload = ref({
  fault_id: props.selectedSchedule?.id,
  status: 'Incomplete',
  reason: null,
  customer: null,
  splitter: null,
  details: null,
  date: null,
  duration: null,
})
const completeFault = async () => {
  try {
    const { status, data } = await workplaceRequestsv2(
      'post',
      'network-fault/confirm-resolution',
      payload.value
    )

    if (status == 200) {
      Swal.fire({
        icon: 'success',
        title: 'Successful',
        text: 'processed successfully',
      })
      router.push({ name: 'schedule' })
    }
  } catch (e) {}
}
</script>

<style scoped></style>
