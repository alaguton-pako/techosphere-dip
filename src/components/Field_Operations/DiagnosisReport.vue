<template>
  <div class="mx-3 w-full border border-gray-300 bg-[#F5F5F5]">
    <div class="mx-1 my-1 w-full border-gray-400 p-8">
      <div class="h-auto rounded p-8 shadow">
        <div class="grid grid-cols-2 gap-4">
          <div class="col-span-1">
            <div class="mb-4 mt-1 w-full rounded-md border p-2">
              <!-- <input
            type="text"
            id="field1"
            name="field1"
            placeholder="Splitter Name"
            class="mt-1 p-2 border w-full rounded-md"
          /> -->
              Customer Name
            </div>

            <div class="mb-4 mt-1 w-full rounded-md border p-2">
              <!-- <input
            type="text"
            id="field2"
            name="field2"
            placeholder="Customer Address"
            class="mt-1 p-2 border w-full rounded-md"
          /> -->
              Customer ID
            </div>
            <!-- <div class="mb-4 mt-1 p-2 border w-full rounded-md">
   
            Phone Number
          </div> -->
            <div class="mb-4 mt-1 w-full rounded-md border p-2">
              <!-- <input
            type="text"
            id="field2"
            name="field2"
            placeholder="Fault Segmentation"
            class="mt-1 p-2 border w-full rounded-md"
          /> -->
              Customer Address
            </div>
          </div>

          <div class="col-span-1">
            <div class="mb-3">
              <input
                :value="routeWorkData.customer_name"
                :readonly="true"
                type="text"
                id="field3"
                name="field3"
                class="mt-1 w-full rounded-md border p-2"
              />
            </div>
            <div class="mb-3">
              <input
                :value="routeWorkData.customer_id"
                :readonly="true"
                type="text"
                id="field3"
                name="field3"
                class="mt-1 w-full rounded-md border p-2"
              />
            </div>

            <div class="mb-3">
              <input
                :value="routeWorkData.address"
                :readonly="true"
                type="text"
                id="field3"
                name="field3"
                class="mt-1 w-full rounded-md border p-2"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="">
        <h2
          class="text-black-300 bg-white-600 font-[Source Sans Pro] mx-10 my-16 flex flex-row rounded-md p-2 text-[25px] font-bold"
        >
          Node Verification
        </h2>
        <div class="flex w-full flex-row gap-4 px-10">
          <div class="mx-2 mb-4 w-1/3">
            <label
              for="dropdown2"
              class="text-md text-black-800 mb-2 block font-semibold"
              >Node Type</label
            >
            <select
              v-model="payload.node_affected"
              id="dropdown2"
              name="dropdown2"
              class="bg-white-500 h-auto w-full rounded-md border border-secondary p-2"
            >
              <option>OLT</option>
              <option>Splitter</option>
              <option>FAT</option>
              <option>FST</option>
              <option>MST</option>
              <option>Closure</option>
              <option>Patch Cord</option>
            </select>
          </div>

          <div class="mb-4 w-1/3">
            <div>
              <label for="name" class="font-semibold">Address</label>
            </div>
            <input
              v-model="payload.address"
              class="my-2 h-auto w-full rounded-md border border-secondary p-2"
              placeholder="enter address"
            />
          </div>
        </div>
        <div class="mt-8 flex w-full flex-row gap-4 px-10">
          <div class="mb-4 w-1/3">
            <div>
              <label for="name" class="font-semibold">NGP Breach:</label>

              <label
                class="relative mx-10 inline-flex cursor-pointer items-center"
              >
                <input type="checkbox" value="" class="peer sr-only" checked />
                <div
                  class="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-orange-500 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-4 peer-focus:ring-orange-300 rtl:peer-checked:after:-translate-x-full dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-orange-800"
                ></div>
                <span
                  class="text-black-900 dark:text-black-300 ms-3 text-sm font-semibold"
                  >Yes</span
                >
              </label>
            </div>
          </div>
          <div class="mx-2 mb-4 w-1/3">
            <div>
              <label for="name" class="mx-1 font-semibold"
                >GPS Coordinates
              </label>
            </div>
            <div class="grid grid-cols-2 gap-4">
              <div>
                <input
                  v-model="payload.latitude"
                  type="text"
                  id="input1"
                  name="input1"
                  class="bg-white-100 mt-1 h-auto w-[156px] rounded-md border border-secondary p-2"
                  placeholder="Enter Latitude"
                />
              </div>

              <div>
                <input
                  v-model="payload.longitude"
                  type="text"
                  id="input2"
                  name="input2"
                  class="bg-white-100 mt-1 h-auto w-[156px] rounded-md border border-secondary p-2"
                  placeholder="Enter Longitude"
                />
              </div>
            </div>
          </div>

          <div class="mb-4 w-1/3">
            <label
              for="dropdown2"
              class="text-md text-black-800 block font-semibold"
              >Number of Cables And Types</label
            >
            <input
              v-model="payload.cables_and_type"
              @input="handleInput"
              type="number"
              class="my-2 h-auto w-2/6 rounded-md border border-secondary p-2"
              placeholder="00:00"
            />
          </div>
          <!-- <div class="w-2/3"></div> -->
        </div>
        <div class="flex w-full flex-row gap-4 px-10"></div>
        <!-- test -->
        <div class="mx-5 mt-8 grid grid-cols-1 gap-4 lg:grid-cols-2">
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
              class="bg-white-500 h-auto w-[460px] rounded-md border border-secondary p-2"
            >
              <option>Verified</option>
              <option>Variance</option>
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
              class="bg-white-500 h-auto w-[460px] rounded-md border border-secondary p-2"
            >
              <option>Yes</option>
              <option>No</option>
              <option>Partially</option>
            </select>
          </div>
        </div>
        <!-- test -->
        <div class="mx-5 mb-4 mt-8">
          <label
            for="picture"
            class="mb-2 block text-sm font-semibold text-gray-600"
            >Node Image</label
          >
          <input
            @change="
              filesChange($event.target.files, 'node_image'),
                (fileCount = $event.target.files.length)
            "
            type="file"
            id="picture"
            name="picture"
            class="h-auto w-full rounded-md border border-secondary p-2"
          />
        </div>
        <h2
          class="text-black-300 bg-white-600 font-[Source Sans Pro] mx-10 my-10 flex flex-row rounded-md p-2 text-[25px] font-bold"
        >
          OTDR Test Result
        </h2>
        <div class="flex w-full flex-row gap-4 px-10">
          <div class="mx-2 mb-4 w-1/4">
            <div>
              <label for="name" class="font-semibold">Splitter</label>
            </div>
            <input
              :value="routeWorkData.splitter"
              readonly
              class="my-2 h-auto w-full rounded-md border border-secondary p-2"
              placeholder="00:00"
            />
          </div>
          <div class="mb-4 w-1/4">
            <div>
              <label for="name" class="font-semibold">Splitter Port</label>
            </div>
            <input
              :value="routeWorkData.port"
              readonly
              class="my-2 h-auto w-full rounded-md border border-secondary p-2"
              placeholder="00:00"
            />
          </div>
          <div class="mb-4 w-1/4">
            <div>
              <label for="name" class="font-semibold">OLT</label>
            </div>
            <input
              :value="routeWorkData.olt"
              type="text"
              readonly
              class="my-2 h-auto w-full rounded-md border border-secondary p-2"
              placeholder="00:00"
            />
          </div>

          <div class="mb-4 w-1/4">
            <label
              for="dropdown2"
              class="text-md text-black-800 block font-semibold"
              >OLT Port</label
            >
            <input
              :value="routeWorkData.olt_port"
              type="text"
              readonly
              class="my-2 h-auto w-full rounded-md border border-secondary p-2"
              placeholder="00:00"
            />
          </div>
        </div>
        <div class="flex w-full flex-row gap-4 px-10">
          <div class="mx-2 mb-4 w-1/3">
            <label
              for="dropdown2"
              class="text-md text-black-800 mb-2 block font-semibold"
              >OTDR Reading</label
            >
            <input
              v-model="payload.otrd_readings"
              type="text"
              id="field3"
              name="field3"
              class="h-auto w-full rounded-md border border-secondary p-2"
              placeholder="Enter OTDR"
            />
          </div>
          <div class="mx-5 mb-4 w-2/3">
            <label
              for="picture"
              class="mb-2 block text-sm font-semibold text-gray-600"
              >OTDR Image</label
            >
            <input
              @change="
                filesChange($event.target.files, 'image'),
                  (fileCount = $event.target.files.length)
              "
              type="file"
              id="picture"
              name="picture"
              class="h-auto w-full rounded-md border border-secondary p-2"
            />
          </div>
        </div>

        <div class="flex w-full flex-row gap-4 px-10"></div>
        <div class="my-6 grid grid-cols-1 gap-4 lg:grid-cols-2"></div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import workplaceRequestsv2 from '../../services/workplaceRequestsv2'
import Swal from 'sweetalert2'

const props = defineProps(['submitForm'])
const emit = defineEmits(['formSubmitted'])
const router = useRouter()
const route = useRoute()
onMounted(() => {
  getSplitterInformation()
})

// import '@/assets/tailwind.css'
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

const getSplitterInformation = async () => {
  try {
    const { status, data } = await workplaceRequestsv2(
      'get',
      `network/fault/${route.params.id}/splitter-information`
    )
    if (status == 200) {
      routeWorkData.value = data?.data?.data
      console.log(routeWorkData)
    }
  } catch (e) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: e.message,
    })
  }
}
// const route = useRoute();
watch(
  () => props.submitForm,
  (newValue) => {
    if (newValue == true) {
      sendReport()
    }
  }
)
const filesChange = async (value, label) => {
  try {
    payload.value.node_image = value[0]
    payload.value.image = value[0]
  } catch (e) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: e.message,
    })
  }
}
const payload = ref({
  network_fault_id: route.params.id,
  node_affected: '',
  otrd_readings: '',
  affected_splitter: '',
  affected_olt: '',
  latitude: '',
  longitude: '',
  variance_status: '',
  labelled: '',
  address: '',
  cables_and_type: '',
  image: '',
  node_image: '',
  fault_type: '',
})
const customer = ref({})

const handleInput = () => {
  console.log('changed');
      // Ensure the input value is a positive integer
      if (
        payload.value.cables_and_type !== null &&
        Number.isInteger(payload.value.cables_and_type) &&
        payload.value.cables_and_type < 0
      ) {
        // If not a positive integer, set it to null or any default positive integer
        payload.value.cables_and_type = null; // or payload.value.cables_and_type = 1;
      }
}

const getDetails = async () => {
  try {
    const { status, data } = await workplaceRequestsv2(
      'get',
      `operations/sd/activation/${route.params.id}`
    )
    if (status == 200) {
      customer.value = data.data.data
      /* empty */
    }
  } catch (e) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: e.message,
    })
  }
}

const sendReport = async () => {
  const splitterId = parseInt(routeWorkData.value.splitter_id)
  const oltId = parseInt(routeWorkData.value.olt_id)

  try {
    let formData = new FormData()
    formData.append('network_fault_id', payload.value.network_fault_id)
    formData.append('node_affected', payload.value.node_affected)
    formData.append(
      'affected_splitter',
      Number.isInteger(splitterId) ? splitterId : ''
    )
    formData.append('affected_olt', Number.isInteger(oltId) ? oltId : '')
    formData.append('affected_olt', routeWorkData.value.olt_id)
    formData.append('otrd_readings', payload.value.otrd_readings)
    formData.append('cause_of_fault', payload.value.cause_of_fault)
    formData.append('image', payload.value.image)
    formData.append('latitude', payload.value.latitude)
    formData.append('longitude', payload.value.longitude)
    formData.append('variance_status', payload.value.variance_status)
    formData.append('address', payload.value.address)
    formData.append('labelled', payload.value.labelled)
    formData.append('node_image', payload.value.node_image)
    formData.append('cables_and_type', payload.value.cables_and_type)
    // formData.append("npg_beach", payload.value.cables_and_type);
    const {status, data} = await workplaceRequestsv2(
      'post',
      'network/maintenance/diagnosis-report/create',
      formData
    )
    if (status == 200) {
      router.push({ name: 'schedule' })
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: data.message || 'Maintenance Diagnosis Report Added Successfully',
      })
      router.push({ name: 'schedule' })
    } else if (status == 422) {
      const valuesArray = Object.values(data.errors);

    Swal.fire({
      icon: 'error',
      title: 'Bad Request',
      text: valuesArray[0] || 'Some fields are missing',
    })
    }
      else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: data.message || 'Unable to process request',
      })
    }
    emit('formSubmitted')
  } catch (e) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: e.message,
    })
  }
}
</script>
