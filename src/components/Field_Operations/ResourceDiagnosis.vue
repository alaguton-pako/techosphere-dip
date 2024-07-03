<template>
  <app-layout>
    <template v-slot:main-content>
      <main class="min-h-screen w-full bg-[#F5F5F5] pl-[10px]">
        <div class="p-2">
          <div class="mx-3 w-full border border-gray-300">
            <div class="mx-1 my-1 w-full border-gray-400">
              <div class="flex h-[51px] w-full flex-row gap-96 rounded-sm">
                <div
                  class="text-black-300 font-[Source Sans Pro] justify-start text-start text-[25px] font-bold"
                >
                  <p class="w-64">Site Information</p>
                </div>
                <div
                  class="font-['Source Sans Pro'] mx-72 flex flex-row-reverse font-normal text-black"
                >
                  <p class="w-56">Oct 30, 2023 11:35 AM</p>
                </div>
              </div>
              <div class="my-4 flex border-b-white bg-gray-200">
                <div class="mb-4 flex gap-16 border-b-white">
                  <label
                    for="name"
                    class="text-md text-black-800 mx-2 my-2 mb-2 block font-semibold"
                    >Splitter Name</label
                  >
                </div>
                <div class="mb-4">
                  <label
                    for="name"
                    class="text-md text-black-800 mx-56 my-2 mb-2 block w-80 font-light"
                  >
                    {{ diagnosis.splitter }}
                  </label>
                </div>
              </div>
              <div class="flex gap-16 border-gray-200">
                <div class="mb-4 flex">
                  <label
                    for="name"
                    class="text-md text-black-800 mx-2 my-2 mb-2 block font-semibold"
                    >Customer Address</label
                  >
                </div>
                <div class="mb-4">
                  <label
                    for="name"
                    class="text-md text-black-800 mx-32 my-2 mb-2 block w-96 font-light"
                    >{{ diagnosis.customer_address }}</label
                  >
                </div>
              </div>
              <div class="flex gap-16 border-gray-200 bg-white">
                <div class="mb-4">
                  <label
                    for="name"
                    class="text-md text-black-800 mx-2 my-2 mb-2 block w-56 font-semibold"
                    >GPS Coordinates</label
                  >
                </div>
                <div class="mb-4">
                  <label
                    for="name"
                    class="text-md text-black-800 mx-10 my-2 mb-2 block w-80 font-light"
                  >
                    {{ diagnosis.latitude }}
                  </label>
                </div>
                <div class="mb-4">
                  <label
                    for="name"
                    class="text-md text-black-800 mx-20 my-2 mb-2 block w-80 font-light"
                    >{{ diagnosis.longitude }}</label
                  >
                </div>
              </div>
              <div class="flex gap-16 border-gray-200 bg-gray-200">
                <div class="mb-4">
                  <label
                    for="name"
                    class="text-md text-black-800 mx-2 my-2 mb-2 block font-semibold"
                    >Fault Segmentation</label
                  >
                </div>
                <div class="mb-4">
                  <label
                    for="name"
                    class="text-md text-black-800 mx-28 my-2 mb-2 block w-80 font-light"
                    >{{ diagnosis.fault_segmentation }}</label
                  >
                </div>
              </div>
              <div class="flex gap-16 border-gray-200 bg-white">
                <div class="mb-4">
                  <label
                    for="name"
                    class="text-md text-black-800 mx-2 my-2 mb-2 block font-semibold"
                    >POF</label
                  >
                </div>
                <div class="mb-4">
                  <label
                    for="name"
                    class="text-md text-black-800 mx-56 my-2 mb-2 block w-80 font-light"
                  >
                    {{ diagnosis.affected_node }}</label
                  >
                </div>
              </div>
              <div class="flex gap-16 border-gray-200 bg-gray-200">
                <div class="mb-4">
                  <label
                    for="name"
                    class="text-md text-black-800 mx-2 my-2 mb-2 block font-semibold"
                    >Possible POF</label
                  >
                </div>
                <div class="mb-4">
                  <label
                    for="name"
                    class="text-md text-black-800 mx-40 my-2 mb-2 block w-80 font-light"
                  >
                    {{ diagnosis.affected_node }}</label
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </template>
  </app-layout>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import workplaceRequestsv2 from '../../services/workplaceRequestsv2.js'
import { useRoute } from 'vue-router'

const diagnosis = ref({
  id: 4,
  customer: 'Ashenafi Habetwold',
  customer_address:
    'Flat P5 Setraco Estate Lifecamp , \\n Life Camp, \\nAbuja.',
  fault_type: null,
  status: 'Incomplete',
  reason: 'Inaccurate Diagnosis',
  comment: 'hihihih',
  affected_node: 'Lifecamp',
  splitter: 'LIFECAMP',
  splitter_port: 'Port 20',
  olt: 'GWARINPA',
  olt_port: 'Port 3',
  latitude: '9.073256',
  longitude: '7.403876',
  fault_segmentation: 'Access',
  cause_of_fault: 'Dirty Connector',
  otdr_reading: '0908890',
  team: null,
  date: '2022-08-02T14:58:05.000000Z',
  duration: null,
  diagnosis: '500m of cable damage',
})
const route = useRoute()
// onMounted(() => {
//   getReport()
// })
const getReport = async () => {
  try {
    const { status, data } = await workplaceRequestsv2(
      'get',
      `network/maintenance/maintencance-diagnosis-reports/${route.params.id}`
    )
    if (status == 200) {
      /* empty */
      diagnosis.value = data.data.data
    }
    console.log('diagnosis', data)
  } catch (e) {
    /* empty */

    console.log(e)
  }
}
</script>
