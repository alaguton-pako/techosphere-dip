<template>
  <div class="w-full rounded bg-[#F5F5F5] p-8 shadow">
    <div class="mx-3 w-full border border-gray-300 p-3">
      <div class="mx-1 my-1 w-full border-gray-400">
        <div class="grid h-auto w-full grid-cols-2 rounded-sm">
          <div
            class="text-black-300 font-[Source Sans Pro] justify-start text-start text-[25px] font-bold"
          >
            Site Information
          </div>
          <div
            class="font-['Source Sans Pro'] my-2 flex flex-row-reverse font-normal text-black"
          >
            Oct 30, 2023 11:36 AM    
          </div>
        </div>
        <div class="">
          <div class="my-4 flex flex-row gap-14 border-b-white bg-gray-200">
            <div class="mb-4 border-b-white">
              <label
                for="name"
                class="text-md text-black-800 mx-2 my-2 mb-2 block font-semibold"
                >Customer Name:</label
              >
            </div>
            <div class="mb-4">
              <input
                readonly
                class="text-md text-black-800  my-2 mb-2 block w-full font-light"
                :value="routeWorkData.customer_name"
              />
            </div>
          </div>
          <div class="flex flex-row gap-12 border-gray-200">
            <div class="mb-4 flex">
              <label
                for="name"
                class="text-md text-black-800 mx-2 my-2 mb-2 block font-semibold"
                >Customer Address:</label
              >
            </div>
            <div class="mb-4">
              <input
                readonly
                for="name"
                class="text-md text-black-800 my-2 mb-2 block w-full font-light"
                :value="routeWorkData.address"
              />
            </div>
          </div>
          <div class="my-4 flex flex-row gap-14 border-b-white bg-gray-200">
            <div class="mb-4 border-b-white">
              <label
                for="name"
                class="text-md text-black-800 mx-2 my-2 mb-2 block font-semibold"
                >GPS Coordinates:</label
              >
            </div>
            <div class="mb-4">
              <input
                readonly
                for="name"
                class="text-md text-black-800  my-2 mb-2 block w-full font-light"
                :value="`Lat : ${routeWorkData.gps_coordinates.latitude} Long ${routeWorkData.gps_coordinates.longitude}`"
              />
            </div>
          </div>
          <div class="flex flex-row gap-28 border-gray-200 ">
            <div class="mb-4 flex">
              <label
                for="name"
                class="text-md text-black-800 mx-2 my-2 mb-2 block font-semibold"
                >Installer:</label
              >
            </div>
            <div class="mb-4 mx-1">
              <input
                readonly
                for="name"
                class="text-md text-black-800 my-2 mb-2 block w-full font-light"
                :value="routeWorkData.installer"
              />
            </div>
          </div>
          <div class="flex flex-row gap-14 border-gray-200 bg-gray-200">
            <div class="mb-4 flex">
              <label
                for="name"
                class="text-md text-black-800 mx-2 my-2 mb-2 block font-semibold"
                >Proposed Splitter:</label
              >
            </div>
            <div class="mb-4">
              <input
                readonly
                for="name"
                class="text-md text-black-800  my-2 mb-2 block w-full font-light"
                :value="routeWorkData.proposed_splitter"
              />
            </div>
          </div>

          <div class="flex flex-row gap-28 border-gray-200 ">
            <div class="mb-4 flex">
              <label
                for="name"
                class="text-md text-black-800 mx-2 my-2 mb-2 block font-semibold"
                >Accuracy:</label
              >
            </div>
            <div class="mb-4">
              <input
                readonly
                for="name"
                class="text-md text-black-800 my-2 mb-2 block w-full font-light"
                :value="routeWorkData.accuracy"
              />
            </div>
          </div>
          <div class="flex flex-row gap-28 border-gray-200 bg-gray-200">
            <div class="mb-4 flex">
              <label
                for="name"
                class="text-md text-black-800 mx-2 my-2 mb-2 block font-semibold"
                >Pick Point:</label
              >
            </div>
            <div class="mb-4">
              <input
                readonly
                for="name"
                class="text-md text-black-800 my-2 mb-2 block w-full font-light"
                :value="routeWorkData.pickup_point"
              />
            </div>
          </div>
          <div class="flex flex-row gap-6 border-gray-200 ">
            <div class="mb-4 flex">
              <label
                for="name"
                class="text-md text-black-800 mx-2 my-2 mb-2 block font-semibold"
                >Pick Point Coordinates:</label
              >
            </div>
            <div class="mb-4">
              <input
                readonly
                for="name"
                class="text-md text-black-800 my-2 mb-2 block w-full font-light"
                :value="`Lat : ${routeWorkData.gps_coordinates.latitude} Long: ${routeWorkData.gps_coordinates.longitude}`"
              />
            </div>
          </div>

          <!-- </div> -->

          <!-- <div class="col-span-1"> -->
        </div>
      </div>

      <!-- </div> -->
      <div
        class="my-1 inline-flex h-auto w-full flex-col gap-5 rounded bg-white p-8 shadow"
      >
        <nav
          class="text-black-300 font-[Source Sans Pro] mt-1 flex w-full flex-row rounded-md  p-2 text-[25px] font-bold"
        >
          <div>
            <h2>New Splitters/ FATs</h2>
          </div>

          <div
            class="font-['Source Sans Pro'] absolute left-[1598px] text-center text-base font-normal text-black"
          >
            Oct 30, 2023 11:35 AM
          </div>
        </nav>
        <table class="w-full table-auto border border-secondary text-sm">
          <thead class="bg-gray-200">
            <tr class="border border-secondary capitalize">
              <th class="border border-secondary p-3">S/N:</th>
              <th class="border border-secondary p-3">Name</th>
              <th class="border border-secondary p-3">Type</th>
              <th class="border border-secondary p-3">Location</th>
              <th class="border border-secondary p-3">Latitude</th>
              <th class="border border-secondary p-3">Longitude</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(item, index) in routeWorkData.new_splitter_and_fats"
              :key="index"
            >
              <td class="border border-secondary p-3">
                {{ index + 1 }}
              </td>
              <td class="border border-secondary p-3">
                {{ item.name }}
              </td>
              <td class="border border-secondary p-3">
                {{ item.type }}
              </td>
              <td class="border border-secondary p-3">
                {{ item.location }}
              </td>
              <td class="border border-secondary p-3">
                {{ item.latitude }}
              </td>
              <td class="border border-secondary p-3">
                {{ item.longitude }}
              </td>
            </tr>
          </tbody>
        </table>

        <img
          class="cursor h-auto w-full rounded-lg transition-all duration-300"
          :src="routeWorkData.image"
          alt="image description"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import workplaceRequestsv2 from '../../services/workplaceRequestsv2.js'
const route = useRoute()

onMounted(() => {
  getRouteDiagram()
})

const routeWorkData = ref({
  id: null,
  customer_name: '',
  address: '',
  gps_coordinates: {
    latitude: '',
    longitude: '',
  },
  customer_contact: '',
  installer: '',
  proposed_splitter: '',
  accuracy: '',
  pickup_point: '',
  image: '',
  new_splitter_and_fats: [
    {
      id: null,
      name: '',
      type: '',
      location: '',
      latitude: '',
      longitude: '',
    },
  ],
})

const getRouteDiagram = async () => {
  try {
    const { status, data } = await workplaceRequestsv2(
      'get',
      `operations/sd/routediagram/${route.params.id}`
    )
    if (status == 200) {
      routeWorkData.value = data?.data?.data
    }
  } catch (e) {
    alert(e.message)
  }
}
//import DiagnosisDate from '../components/DiagnosisDate'
</script>
