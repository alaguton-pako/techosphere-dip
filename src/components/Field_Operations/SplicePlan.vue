<template>
  <div class="mx-3 w-full border border-gray-300 bg-[#F5F5F5] p-5">
    <div class="mx-1 my-1 w-full border-gray-400">
      <div class="grid h-auto w-full grid-cols-2 rounded-sm bg-white">
        <div
          class="text-black-300 font-[Source Sans Pro] justify-start text-start text-[25px] font-bold"
        >
          Site Information
        </div>
        <div
          class="font-['Source Sans Pro'] my-2 flex flex-row-reverse font-normal text-black"
        >
          Oct 30, 2023 11:35 AM
        </div>
      </div>
      <div class="my-4 flex border-b-white bg-gray-200">
        <div class="mb-4 flex flex-row gap-16 border-b-white">
          <label
            for="name"
            class="text-md text-black-800 mx-2 my-2 mb-2 mt-1 block font-semibold"
            ><p class="w-48"></p>
            Customer Name</label
          >
          <input
            :value="splicePlan.customer_name"
            type="text"
            id="field3"
            name="field3"
            class="mt-1 w-full rounded-md p-2"
            readonly
          />
        </div>
      </div>
      <div class="my-4 flex border-b-white bg-white">
        <div class="mb-4 flex flex-row gap-16 border-b-white">
          <label
            for="name"
            class="text-md text-black-800 mx-2 my-2 mb-2 block font-semibold"
            ><p class="w-48">Customer Address</p></label
          >
          <input
            :value="splicePlan.customer_address"
            type="text"
            id="field3"
            name="field3"
            class="mt-1 w-full rounded-md p-2"
            readonly
          />
        </div>
      </div>
      <div class="my-4 flex border-b-white bg-gray-200">
        <div class="mb-4 flex flex-row gap-16 border-b-white">
          <label
            for="name"
            class="text-md text-black-800 mx-2 my-2 mb-2 block font-semibold"
            ><p class="w-48">GPS Coordinates:</p>
          </label>
          <input
            :value="splicePlan.gps_coordinates"
            type="text"
            id="field3"
            name="field3"
            class="mt-1 w-full rounded-md p-2"
            readonly
          />
        </div>
      </div>
      <div class="my-4 flex border-b-white bg-white">
        <div class="mb-4 flex flex-row gap-16 border-b-white">
          <label
            for="name"
            class="text-md text-black-800 mx-2 my-2 mb-2 block font-semibold"
            ><p class="w-48">Customer Contact:</p></label
          >
          <input
            :value="splicePlan.customer_contact"
            type="text"
            id="field3"
            name="field3"
            class="mt-1 w-full rounded-md p-2"
            readonly
          />
        </div>
      </div>
      <div class="my-4 flex border-b-white bg-gray-200">
        <div class="mb-4 flex gap-16 border-b-white">
          <label
            for="name"
            class="text-md text-black-800 mx-2 my-2 mb-2 block font-semibold"
            ><p class="w-48">Provisioning Team:</p></label
          >
          <input
            :value="splicePlan.provisioning_team"
            type="text"
            id="field3"
            name="field3"
            class="mt-1 w-full rounded-md p-2"
            readonly
          />
        </div>
      </div>
      <div class="my-4 flex border-b-white bg-white">
        <div class="mb-4 flex flex-row gap-16 border-b-white">
          <label
            for="name"
            class="text-md text-black-800 mx-2 my-2 mb-2 block font-semibold"
            ><p class="w-48">Installer:</p></label
          >
          <input
            :value="splicePlan.installer"
            type="text"
            id="field3"
            name="field3"
            class="mt-1 w-full rounded-md p-2"
            readonly
          />
        </div>
      </div>
      <div class="my-4 flex border-b-white bg-gray-200">
        <div class="mb-4 flex flex-row gap-16 border-b-white">
          <label
            for="name"
            class="text-md text-black-800 mx-2 my-2 mb-2 block font-semibold"
            ><p class="w-48">Accuracy:</p></label
          >
          <input
            :value="splicePlan.accuracy"
            type="text"
            id="field3"
            name="field3"
            class="mt-1 w-full rounded-md p-2"
          />
        </div>
      </div>
      <div class="my-4 flex border-b-white bg-white">
        <div class="mb-4 flex flex-row gap-16 border-b-white">
          <label
            for="name"
            class="text-md text-black-800 mx-2 my-2 mb-2 block font-semibold"
            ><p class="w-48">Created By:</p></label
          >
          <input
            :value="splicePlan.created_by"
            type="text"
            id="field3"
            name="field3"
            class="mt-1 w-full rounded-md p-2"
            readonly
          />
        </div>
      </div>
    </div>
    <div class="mx-1 my-1 w-full border-gray-400 p-3">
      <div class="mb-4">
        <nav
          class="text-black-300 font-[Source Sans Pro] mt-1 flex w-full flex-row rounded-md border p-2 text-[25px] font-bold"
        >
          <div>
            <h2>Details</h2>
          </div>

          <div
            class="font-['Source Sans Pro'] absolute left-[1598px] text-center text-base font-normal text-black"
          >
            Oct 30, 2023 11:35 AM
          </div>
        </nav>
      </div>
      <div class="my-4 flex border-b-white bg-gray-200">
        <div class="mb-4 flex flex-row gap-40 border-b-white">
          <label
            for="name"
            class="text-md text-black-800 mx-2 my-2 mb-2 block font-semibold"
            ><p class="w-48">Proposed Splitter:</p></label
          >
          <input
            :value="splicePlan.proposed_splitter"
            type="text"
            id="field3"
            name="field3"
            class="mt-1 w-full rounded-md p-2"
            readonly
          />
        </div>
        <div class="mb-4"></div>
      </div>
      <div class="my-4 flex border-b-white bg-white">
        <div class="mb-4 flex gap-16 border-b-white">
          <label
            for="name"
            class="text-md text-black-800 mx-2 my-2 mb-2 block font-semibold"
            ><p class="w-72">Expected Power level Output on Splitter:</p>
          </label>
          <input
            :value="splicePlan.exp_output"
            type="text"
            id="field3"
            class="mt-1 w-full rounded-md p-2"
            readonly
          />
        </div>
      </div>
      <div class="my-4 flex border-b-white bg-gray-200">
        <div class="mb-4 flex gap-40 border-b-white">
          <label
            for="name"
            class="text-md text-black-800 mx-2 my-2 mb-2 block font-semibold"
            ><p class="w-48"></p>
            Available Ports on Splitter:</label
          >
          <input
            :value="splicePlan.available_ports"
            type="text"
            id="field3"
            class="mt-1 w-full rounded-md p-2"
            readonly
          />
        </div>
      </div>
    </div>
    <div class="mx-1 my-1 w-full border-gray-400 p-3">
      <nav
        class="text-black-300 font-[Source Sans Pro] mt-1 flex w-full flex-row rounded-md border p-2 text-[25px] font-bold"
      >
        <div>
          <h2>Backbone Splicing:</h2>
        </div>

        <label class="relative mx-10 inline-flex cursor-pointer items-center">
          <input type="checkbox" value="" class="peer sr-only" checked />
          <div
            class="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-orange-500 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-4 peer-focus:ring-orange-300 rtl:peer-checked:after:-translate-x-full dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-orange-800"
          ></div>
          <span
            class="text-black-900 dark:text-black-300 ms-3 text-sm font-semibold"
            >yes</span
          >
        </label>

        <div
          class="font-['Source Sans Pro'] absolute left-[1598px] text-center text-base font-normal text-black"
        >
          Oct 30, 2023 11:35 AM
        </div>
      </nav>
      <table class="w-full table-auto border border-secondary text-sm">
        <thead class="bg-gray-400">
          <tr class="border border-secondary capitalize">
            <th class="border border-secondary p-3">S/N:</th>
            <th class="border border-secondary p-3">Name</th>
            <th class="border border-secondary p-3">Type</th>
            <th class="border border-secondary p-3">Location</th>
            <th class="border border-secondary p-3">Latitude</th>
            <th class="border border-secondary p-3">Longitude</th>
            <th class="border border-secondary p-3">Buffer</th>
            <th class="border border-secondary p-3">Core</th>
            <th class="border border-secondary p-3">Schedule Start Date</th>
            <th class="border border-secondary p-3">Start Date</th>
            <th class="border border-secondary p-3">Schedule End Date</th>
            <th class="border border-secondary p-3">End Date</th>
            <th class="border border-secondary p-3">Completed</th>
            <th class="border border-secondary p-3">Action</th>
          </tr>
        </thead>
        <tbody class="items-center justify-center text-center">
          <tr class="border border-secondary">
            <td class="border border-secondary p-3">01</td>
            <td class="border border-secondary p-3">Anthony Adeyi</td>
            <td class="border border-secondary p-3">FAT</td>
            <td class="border border-secondary p-3">
              15 Malcolm Fraser Street,Asokoro, Abuja
            </td>
            <td class="border border-secondary p-3">08.9001.78</td>
            <td class="border border-secondary p-3">9.0054.67</td>
            <td class="border border-secondary p-3">N/A</td>
            <td class="border border-secondary p-3">N/A</td>
            <td class="border border-secondary p-3"></td>
            <td class="border border-secondary p-3"></td>
            <td class="border border-secondary p-3"></td>
            <td class="border border-secondary p-3"></td>
            <td class="border border-secondary p-3">No</td>
            <td class="border border-secondary p-3">
              <a
                href="#"
                class="text-black-600 dark:text-black-500 rounded-md text-center font-semibold hover:underline"
                >Request Removal</a
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import workplaceRequestsv2 from '../../services/workplaceRequestsv2'
const route = useRoute()
const splicePlan = ref({
  id: 344,
  customer_name: '',
  customer_address: '',
  gps_coordinates: '',
  customer_contact: '',
  provisioning_team: null,
  installer: '',
  accuracy: null,
  created_by: '',
  proposed_splitter: '',
  exp_output: '',
  available_ports: null,
  splice_points: [],
})
onMounted(() => {
  getSplicePlan()
})
const getSplicePlan = async () => {
  try {
    const { status, data } = await workplaceRequestsv2(
      'get',
      `operations/sd/activation/${route.params.id}/splice-plan`
    )
    if (status == 200) {
      splicePlan.value = data.data.data
    }

    console.log(data)
  } catch (e) {}
}
//import DiagnosisDate from '../components/DiagnosisDate'
</script>
