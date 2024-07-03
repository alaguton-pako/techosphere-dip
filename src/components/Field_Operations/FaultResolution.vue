<template>
  <section class="pr-7">
    <div class="mx-3 w-full border border-gray-300 bg-[#F5F5F5]">
      <div class="mx-1 my-1 w-full border-gray-400 p-8">
        <h2 class="my-5 mb-4 text-lg font-bold">Faults:</h2>

        <div class="grid grid-cols-2 gap-4">
          <div class="mb-4">
            <label
              for="dropdown2"
              class="text-md text-black-800 mb-2 block font-semibold"
              >Fault Type</label
            >
            <select
              v-model="payload.fault_type"
              id="dropdown2"
              name="dropdown2"
              class="bg-white-500 h-[60px] w-[460px] rounded-md border p-2"
            >
              <!-- <option
            v-for="(faultType, index) in faultTypes"
            :key="index"
            :value="faultType.id"
            >{{ faultType.name }}</option
          > -->
              <option>Fiber Cut</option>
              <option>High Attenuation</option>
            </select>
          </div>

          <div class="mb-4">
            <label
              for="dropdown2"
              class="text-md text-black-800 mb-2 block font-semibold"
              >Cause of Fault</label
            >
            <select
              v-model="payload.cause_of_fault"
              id="dropdown2"
              name="dropdown2"
              class="bg-white-500 h-[60px] w-[460px] rounded-md border p-2"
            >
              <option>Theft/Vandalism</option>
              <option>Burnt Cable</option>
              <option>Construction</option>
              <option>Flooding</option>
              <option>Accidental Partial Damage</option>
              <option>Rodents</option>
              <option>Domestic Damage</option>
              <option>Poor Handling of Cable</option>
            </select>
          </div>
        </div>

        <!-- <h2
      class="p-2 text-black-300 my-16 bg-white-600 font-bold font-[Source Sans Pro] text-[25px] w-full flex flex-row rounded-md"
    >
      Market Information
    </h2> -->
        <!-- <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div class="mb-4">
        <label for="dropdown2" class="block text-md font-semibold text-black-800 mb-2"
          >Location Type</label
        >
        <select
          id="dropdown2"
          name="dropdown2"
          class="w-[460px] h-[60px] p-2 border bg-white-500 rounded-md"
        >
          <option value="option1">Residence</option>
          <option value="option2">Commercial</option>
          <option value="option3">Sub-Commercial</option>
        </select>
      </div>
      <div class="mb-4">
        <div>
          <label for="name" class="font-semibold">Is it an MDU?</label>

          <label class="relative inline-flex items-center mx-5 cursor-pointer">
            <input type="checkbox" value="" class="sr-only peer" checked />
            <div
              class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-orange-300 dark:peer-focus:ring-orange-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-orange-500"
            ></div>
            <span class="ms-3 text-sm font-semibold text-black-900 dark:text-black-300">Yes</span>
          </label>
        </div>
        <div>
          <label for="name" class="font-semi-bold">If Yes, Number of MDU</label>
        </div>
        <input
          type="text"
          class="border p-2 w-[120px] h-[60px] rounded-md"
          placeholder="insert value"
        />
      </div>
      <div class="mb-4">
        <label for="dropdown2" class="block text-md font-semibold text-black-800 mb-2"
          >Type of Buildings</label
        >
        <select
          id="dropdown2"
          name="dropdown2"
          class="w-[460px] h-[60px] p-2 border bg-white-500 rounded-md"
        >
          <option value="option1">Duplex</option>
          <option value="option2">Bungalow</option>
          <option value="option3">Plaza</option>
        </select>
      </div>
    </div> -->
        <h2
          class="text-black-300 bg-white-600 font-[Source Sans Pro] my-16 flex w-full flex-row rounded-md p-2 text-[25px] font-bold"
        >
          Node Verification
        </h2>
        <div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div class="mb-4">
            <label
              for="dropdown2"
              class="text-md text-black-800 mb-2 block font-semibold"
              >Node Type</label
            >
            <select
              v-model="payload.node_type"
              id="dropdown2"
              name="dropdown2"
              class="bg-white-500 h-[60px] w-[460px] rounded-md border p-2"
            >
              <option>OLT</option>
              <option>Splitter</option>
              <option>FAT</option>
              <option>FST</option>
              <option>MST</option>
              <option>Closure</option>
              <option>Patch Cord</option>
              <!-- <option>Cable Damage</option> -->
            </select>
          </div>
          <div class="mb-4">
            <div>
              <label for="name" class="font-semibold"
                >Number of Cable and Type</label
              >
            </div>
            <input
              type="text"
              class="h-[60px] w-[120px] rounded-md border p-2"
              placeholder="insert value"
            />
          </div>
          <div class="mb-4">
            <label
              for="dropdown2"
              class="text-md text-black-800 mb-2 block font-semibold"
              >Verification Status</label
            >
            <select
              v-model="payload.variance_status"
              id="dropdown2"
              name="dropdown2"
              class="bg-white-500 h-[60px] w-[460px] rounded-md border p-2"
            >
              <option>Verified</option>
              <option>Variance</option>
              <!-- <option value="option3">Awaiting</option> -->
            </select>
          </div>
          <div class="mb-4">
            <label
              for="dropdown2"
              class="text-md text-black-800 mb-2 block font-semibold"
              >Labelled</label
            >
            <select
              v-model="payload.labelled"
              id="dropdown2"
              name="dropdown2"
              class="bg-white-500 h-[60px] w-[460px] rounded-md border p-2"
            >
              <option>Yes</option>
              <option>No</option>
              <option>Partially</option>
            </select>
          </div>
          <h2 class="my-2 mb-4 text-lg font-bold">GPS Coordinates:</h2>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <input
                v-model="payload.latitude"
                type="text"
                id="input1"
                name="input1"
                class="bg-white-100 mt-1 h-[60px] w-[156px] rounded-md border p-2"
                placeholder="Enter Latitude"
              />
            </div>

            <div>
              <input
                v-model="payload.longitude"
                type="text"
                id="input2"
                name="input2"
                class="bg-white-100 mt-1 h-[60px] w-[156px] rounded-md border p-2"
                placeholder="Enter Longitude"
              />
            </div>
          </div>
          <div class="mb-4">
            <div>
              <label for="name" class="font-semibold">Address</label>
            </div>
            <input
              type="text"
              class="my-2 h-[60px] w-[461px] rounded-md border p-2"
              placeholder="enter address"
            />
          </div>
        </div>
        <div class="lg:grid-cols- grid-cols-1 gap-4">
          <div class="mx-16 mb-4">
            <label
              for="picture"
              class="mb-2 block text-sm font-semibold text-gray-600"
              >Upload Picture</label
            >
            <input
              @change="
                filesChange($event.target.files),
                  (fileCount = $event.target.files.length)
              "
              type="file"
              id="picture"
              name="picture"
              class="w-[1012px] rounded-md border p-2"
            />
          </div>
        </div>

        <h2
          class="text-black-300 bg-white-600 font-[Source Sans Pro] my-16 flex w-full flex-row rounded-md p-2 text-[25px] font-bold"
        >
          Resolution Status
        </h2>
        <div class="grid grid-cols-2 gap-4">
          <div class="mb-4">
            <label
              for="dropdown2"
              class="text-md text-black-800 mb-2 block font-semibold"
              >POF Node</label
            >
            <select
              id="dropdown2"
              name="dropdown2"
              class="bg-white-500 h-[60px] w-[460px] rounded-md border p-2"
            >
              <option>OLT</option>
              <option>Splitter</option>
              <option>FAT</option>
              <option>FST</option>
              <option>MST</option>
              <option>Closure</option>
              <option>Patch Cord</option>
              <option>Cable Damage</option>
            </select>
          </div>
          <div class="mb-4">
            <label
              for="dropdown2"
              class="text-md text-black-800 mb-2 block font-semibold"
              >POF Segment</label
            >
            <select
              id="dropdown2"
              name="dropdown2"
              class="bg-white-500 h-[60px] w-[460px] rounded-md border p-2"
            >
              <option>Last-Mile</option>
              <option>Access</option>
              <option>Distribution Backbone</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { onMounted, ref, watch } from 'vue'
import workplaceRequestsv2 from '../../services/workplaceRequestsv2'
import { useRoute, useRouter } from 'vue-router'
import Swal from 'sweetalert2'
const router = useRouter()
const route = useRoute()
const props = defineProps(['submitForm'])
const emit = defineEmits(['formSubmitted'])
watch(
  () => props.submitForm,
  (newValue) => {
    if (newValue == true) {
      submitFaultReport()
    }
  }
)
const payload = ref({
  network_fault_type_id: null,
  fault_type: null,
  latitude: null,
  longitude: null,
  variance_status: null,
  address: null,
  labelled: null,
  fault_id: null,
  cause_of_fault: null,
  pof_node: null,
  pof_segment: null,
  node_type: null,
  node_image: null,
})
const faultTypes = ref([])
const filesChange = async (value) => {
  try {
    payload.value.node_image = value[0]
    // console.log(payload);
  } catch (e) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: e.message,
    })
  }
}
const submitFaultReport = async () => {
  try {
    let formData = new FormData()
    formData.append('fault_type', payload.value.fault_type)
    formData.append('latitude', payload.value.latitude)
    formData.append('longitude', payload.value.longitude)
    formData.append('variance_status', payload.value.variance_status)
    formData.append('address', payload.value.address)
    formData.append('labelled', payload.value.labelled)
    formData.append('fault_id', route.params.id)
    formData.append('cause_of_fault', payload.value.cause_of_fault)
    formData.append('pof_node', payload.value.pof_node)
    formData.append('pof_segment', payload.value.pof_segment)
    formData.append('node_type', payload.value.node_type)
    formData.append('node_image', payload.value.node_image)
    const { status, data } = await workplaceRequestsv2(
      'post',
      'network/fault/resolution-report/create',
      formData
    )
    if (status == 200) {
      Swal.fire({
        icon: 'success',
        title: 'Successful',
        text: 'Submitted successfully',
      })
    } else {
      Swal.fire({
        icon: 'info',
        title: 'Failed',
        text: data.message,
      })
    }
    router.push({ name: 'schedule' })
    emit('formSubmitted')
  } catch (e) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: e.message,
    })
  }
}
const getFaultTypes = async () => {
  try {
    const { status, data } = await workplaceRequestsv2(
      'get',
      'network-fault/fault-types/all'
    )
    console.log('fault types', data)
    if (status == 200) {
      faultTypes.value = data.data
    }
  } catch (e) {}
}
//import FaultRest from '../components/FaultRest.vue'
</script>
