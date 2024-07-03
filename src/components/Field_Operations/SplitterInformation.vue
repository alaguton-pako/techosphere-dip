<template>
  <div class="mx-3 w-full border border-gray-300 bg-[#F5F5F5]">
    <div class="mx-1 my-1 w-full border-gray-400 p-8">
      <div class="mb-4">
        <nav
          class="text-black-300 font-[Source Sans Pro] mt-1 flex w-full flex-row rounded-md border p-2 text-[25px] font-bold"
        >
          <div>
            <h2>Splitter Information</h2>
          </div>
        </nav>
      </div>
      <div class="">
        <div class="flex flex-row">
          <div class="mb-4 mt-1 w-1/2 rounded-md border p-2">Port No:</div>
          <div class="mb-3 w-1/2">
            <input
              :value="routeWorkData.port"
              type="readonly"
              id="field3"
              name="field3"
              class="mt-1 w-full rounded-md border p-2"
              readonly
            />
          </div>
        </div>
        <div class="flex flex-row">
          <div class="mb-4 mt-1 w-1/2 rounded-md border p-2">
            Splitter Name:
          </div>
          <div class="mb-3 w-1/2">
            <input
              :value="routeWorkData.splitter"
              type="readonly"
              id="field3"
              name="field3"
              class="mt-1 w-1/2 rounded-md border p-2"
              readonly
            />
          </div>
        </div>
        <div class="flex flex-row">
          <div class="mb-4 mt-1 w-1/2 rounded-md border p-2">Address:</div>
          <div class="mb-3 w-1/2">
            <input
              :value="routeWorkData.address"
              type="readonly"
              id="field3"
              name="field3"
              class="mt-1 w-full rounded-md border p-2"
              readonly
            />
          </div>
        </div>
        <div class="flex flex-row">
          <div class="mb-4 mt-1 w-1/2 rounded-md border p-2">Area:</div>
          <div class="mb-3 w-1/2">
            <input
              :value="routeWorkData.area"
              type="readonly"
              id="field3"
              name="field3"
              class="mt-1 w-full rounded-md border p-2"
              readonly
            />
          </div>
        </div>
        <div class="flex flex-row">
          <div class="mb-4 mt-1 w-1/2 rounded-md border p-2">Latitude:</div>
          <div class="mb-3 w-1/2">
            <input
              :value="routeWorkData.latitude"
              type="readonly"
              id="field3"
              name="field3"
              class="mt-1 w-full rounded-md border p-2"
              readonly
            />
          </div>
        </div>
        <div class="flex flex-row">
          <div class="mb-4 mt-1 w-1/2 rounded-md border p-2">Longitude:</div>
          <div class="mb-3 w-1/2">
            <input
              :value="routeWorkData.longitude"
              type="readonly"
              id="field3"
              name="field3"
              class="mt-1 w-full rounded-md border p-2"
              readonly
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import workplaceRequestsv2 from '../../services/workplaceRequestsv2'
const route = useRoute()

onMounted(() => {
  getSplitterinformation()
})

const routeWorkData = ref({
  id: null,
  address: '',
  splitter: '',
  splitter_id: null,
  port: '',
  area: '',
  latitude: '',
  longitude: '',
  olt: '',
  olt_id: null,
  olt_port: '',
  date: '',
})

const getSplitterinformation = async () => {
  try {
    const { status, data } = await workplaceRequestsv2(
      'get',
      `network/fault/${route.params.id}/splitter-information`
    )
    console.log(data)
    if (status == 200) {
      routeWorkData.value = data?.data?.data
    }
  } catch (e) {
    alert(e.message)
  }
}
//import DiagnosisDate from '../components/DiagnosisDate'
</script>
