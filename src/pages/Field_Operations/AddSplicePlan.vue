<template>
  <div class="w-full bg-transparent">
    <div class="h-auto w-[600]">
      <h2 class="my-5 mb-4 text-2xl font-bold">Add Splice Plan</h2>
      <!-- Your form goes here -->
      <form>
        <div class="my-3 mb-4">
          <label
            for="dropdown"
            class="mb-2 block text-sm font-medium text-gray-600"
            >Select Type</label
          >
          <select
            v-model="payload.type"
            id="dropdown"
            name="dropdown"
            class="w-full rounded border px-3 py-2 focus:border-blue-500 focus:outline-none"
          >
            <option>Joint Box Closure</option>
            <option>FAT</option>
            <!-- <option>Option 3</option> -->
          </select>
        </div>
        <div class="mb-4">
          <!-- <label for="name" class="block text-sm font-semibold text-gray-600">Name</label> -->
          <input
            v-model="payload.name"
            type="text"
            id="name"
            name="name"
            class="w-full rounded border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
            placeholder="Enter Name"
          />
        </div>

        <div class="mb-4">
          <!-- <label for="email" class="block text-sm font-semibold text-gray-600">Email</label> -->
          <input
            v-model="payload.location"
            type="text"
            id="text"
            name="location"
            class="w-full rounded border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
            placeholder="Enter Location"
          />
        </div>

        <h2 class="my-5 mb-4 text-lg font-bold">GPS Coordinates:</h2>

        <div class="grid grid-cols-2 gap-4">
          <div>
            <!-- <label for="input1" class="block text-sm font-medium text-gray-600">Input 1</label> -->
            <input
              v-model="payload.latitude"
              type="text"
              id="input1"
              name="input1"
              class="bg-white-100 mt-1 block w-full rounded-md border p-2"
              placeholder="Enter Latitude"
            />
          </div>

          <div>
            <!-- <label for="input2" class="block text-sm font-medium text-gray-600">Input 2</label> -->
            <input
              v-model="payload.longitude"
              type="text"
              id="input2"
              name="input2"
              class="bg-white-100 mt-1 block w-full rounded-md border p-2"
              placeholder="Enter Longtitude"
            />
          </div>
        </div>

        <div class="my-4 flex justify-center">
          <!-- <router-link to="/pages/ActivationResolutionReport"> -->
          <button
            @click="createSplicePoint"
            type="button"
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
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import workplaceRequestsv2 from '../../services/workplaceRequestsv2'

const props = defineProps(['splice_plan_id'])
const emit = defineEmits(['spliceAdded'])
const route = useRoute()
onMounted(() => {
  getRouteDiagram()
})

const payload = ref({
  spliceplan_id: route.params.id,
  latitude: '',
  longitude: '',
  name: '',
  type: '',
  location: '',
})
// import '@/assets/tailwind.css'
const routeWorkData = ref({
  id: '',
  address: '',
  splitter: '',
  splitter_id: '',
  port: '',
  area: '',
  latitude: '',
  longitude: '',
  olt: '',
  olt_id: '',
  olt_port: '',
  date: '',
})

const getRouteDiagram = async () => {
  try {
    const { status, data } = await workplaceRequestsv2(
      'get',
      `network/fault/${route.params.id}/splitter-information`
    )
    if (status == 200) {
      routeWorkData.value = data?.data?.data
      payload.value.latitude = routeWorkData.value.latitude
      payload.value.longitude = routeWorkData.value.longitude
      payload.value.address = routeWorkData.value.address
      console.log('splitter info', data)
    }
  } catch (e) {
    alert(e.message)
  }
}

const createSplicePoint = async () => {
  try {
    payload.value.spliceplan_id = props.splice_plan_id
    const { status, data } = await workplaceRequestsv2(
      'post',
      `operations/sd/spliceplan/add-splice-point`,
      payload.value
    )
    if (status == 200) {
      emit('spliceAdded')
    }
  } catch (e) {}
}
</script>
<style scoped></style>
