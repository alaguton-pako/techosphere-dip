<template>
  <div class="mx-3 w-full border border-gray-300 bg-[#F5F5F5] p-8">
    <div class="mx-1 my-1 w-full border-gray-400">
      <nav
        class="text-black-300 bg-white-600 font-[Source Sans Pro] mt-1 flex w-full flex-row rounded-md border p-2 text-[25px] font-bold"
      >
        <div>
          <h2>Site Information</h2>
        </div>
      </nav>
      <div class="my-6 grid grid-cols-2 gap-4">
        <div class="mb-4">
          <div>
            <label for="name" class="font-semibold">Customer Name</label>
          </div>
          <input
            :value="activationReportData.customer_name"
            type="text"
            class="my-2 border border-gray-500 p-2"
            readonly
          />
        </div>
        <div class="mb-4">
          <div>
            <label for="name" class="font-semibold">Customer Address</label>
          </div>
          <input
            :value="activationReportData.address"
            type="text"
            class="my-2 border border-gray-500 p-2"
            readonly
          />
        </div>
        <div class="mb-4">
          <div>
            <label for="name" class="font-semibold">GPS Coordinates</label>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <input
                :value="activationReportData.gps_coordinates.latitude"
                type="text"
                id="input1"
                name="input1"
                class="my-2 border border-gray-500 p-2"
                readonly
              />
            </div>

            <div>
              <input
                :value="activationReportData.gps_coordinates.longitude"
                type="text"
                id="input2"
                name="input2"
                class="my-2 border border-gray-500 p-2"
                readonly
              />
            </div>
          </div>
        </div>
        <div class="mb-4">
          <div>
            <label for="phone" class="font-semibold">Customer Contact</label>
          </div>
          <input
            :value="activationReportData.customer_contact"
            type="text"
            class="my-2 border border-gray-500 p-2"
            readonly
          />
        </div>
        <div class="mb-4">
          <div>
            <label for="name" class="font-semibold">Provisioning Team</label>
          </div>
          <input type="text" class="my-2 border border-gray-500 p-2" readonly />
        </div>
        <div class="mb-4">
          <div>
            <label for="name" class="font-semibold">Installer</label>
          </div>
          <input
            :value="activationReportData.installer"
            type="text"
            class="my-2 border border-gray-500 p-2"
            readonly
          />
        </div>
      </div>

      <h2 class="my-5 mb-4 text-lg font-bold">GPS Coordinates:</h2>

      <div class="flex flex-row gap-4 space-x-32">
        <div>
          <input
            :value="activationReportData.gps_coordinates.latitude"
            type="text"
            id="input1"
            name="input1"
            class="border border-gray-500 p-2"
            readonly
          />
        </div>

        <div>
          <input
            :value="activationReportData.gps_coordinates.longitude"
            type="text"
            id="input2"
            name="input2"
            class="border border-gray-500 p-2"
            readonly
          />
        </div>
      </div>

      <h2
        class="text-black-300 bg-white-600 font-[Source Sans Pro] my-16 flex w-full flex-row rounded-md p-2 text-[25px] font-bold"
      >
        Splice Plan Details
      </h2>
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div class="mb-4">
          <div>
            <label for="name" class="font-semibold">Address</label>
          </div>
          <input
            :value="activationReportData.address"
            type="text"
            class="my-2 border border-gray-500 p-2"
            readonly
          />
        </div>
        <div class="mb-4">
          <div>
            <label for="name" class="mx-1 font-semibold"
              >Expected power level output on splitter: Available ports on
              splitter
            </label>
          </div>
          <div class="my-2 grid grid-cols-3 gap-4">
            <div>
              <input
                type="text"
                id="input1"
                name="input1"
                class="my-2 border border-gray-500 p-2"
                placeholder="insert value"
              />
            </div>

            <div>
              <input
                type="text"
                id="input2"
                name="input2"
                class="my-2 border border-gray-500 p-2"
                placeholder="insert value"
              />
            </div>
          </div>
        </div>
        <div class="mb-4">
          <div>
            <label for="name" class="font-semibold">Backbone Splicing:</label>

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
      </div>
      <h2
        class="text-black-300 bg-white-600 font-[Source Sans Pro] my-16 flex w-full flex-row rounded-md p-2 text-[25px] font-bold"
      >
        Node Verification
      </h2>
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-1">
        <div class="mb-4">
          <label
            for="dropdown2"
            class="text-md text-black-800 mb-2 block font-semibold"
            >Node Type</label
          >
          <select
            v-model="activationReportPayload.fat"
            id="dropdown2"
            name="dropdown2"
            class="bg-white-500 h-auto w-[460px] rounded-md border p-2"
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
      </div>
      <div class="my-3 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div class="mb-4">
          <label
            for="dropdown2"
            class="text-md text-black-800 mb-2 block font-semibold"
            >Verification Status</label
          >
          <select
            v-model="activationReportPayload.variance_status"
            id="dropdown2"
            name="dropdown2"
            class="bg-white-500 h-auto w-[460px] rounded-md border p-2"
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
            v-model="activationReportPayload.labelled"
            id="dropdown2"
            name="dropdown2"
            class="bg-white-500 h-auto w-[460px] rounded-md border p-2"
          >
            <option>Yes</option>
            <option>No</option>
            <option>Partially</option>
          </select>
        </div>
        <div class="mb-4">
          <div>
            <label for="name" class="mx-1 font-semibold"
              >GPS Coordinates
            </label>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <input
                v-model="activationReportPayload.latitude"
                type="text"
                id="input1"
                name="input1"
                class="my-2 border border-gray-500 p-2"
                readonly
              />
            </div>

            <div>
              <input
                v-model="activationReportPayload.longitude"
                type="text"
                id="input2"
                name="input2"
                class="my-2 border border-gray-500 p-2"
                readonly
              />
            </div>
          </div>
        </div>
        <div class="mb-4">
          <div>
            <label for="name" class="font-semibold">Address</label>
          </div>
          <input
            v-model="activationReportPayload.address"
            type="text"
            class="border border-gray-500 p-2"
            readonly
          />
        </div>
      </div>

      <div class="flex flex-row gap-4 pb-4">
        <div class="mb-4">
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
            class="my-2 border border-gray-500 p-2"
          />
        </div>
      </div>
      <div class="my-7 h-auto w-full border-gray-50 bg-white shadow-sm">
        <nav
          class="font-[Source Sans Pro] flex w-full flex-row rounded-md border bg-gray-700 text-[25px] font-semibold"
        >
          <div class="mx-2 my-2 text-[white]">
            <h2>Splice Plan</h2>
          </div>

          <div
            class="font-['Source Sans Pro'] absolute left-[1689px] my-1 h-auto w-[94px] justify-center rounded-md bg-white pb-2 text-center text-base font-normal text-[#D50036]"
          >
            <button
              class="my-2"
              @click="showAddSplicePlanModal = !showAddSplicePlanModal"
            >
              Add Variance
            </button>
          </div>
        </nav>
        <div>
          <SplicePoints :splicePoints="activationReportData.splice_points" />
          <div class="border-b"></div>
        </div>
      </div>
      <AppModal v-if="showAddSplicePlanModal">
        <template #modal-content>
          <div class="flex flex-row-reverse">
            <button
              class="ml-auto grid h-10 w-10 place-content-center rounded-full border border-[#D50036] text-xl text-[#D50036]"
              type="button"
              @click="showAddSplicePlanModal = false"
            >
              𝖷
            </button>
          </div>
          <AddSplicePlan
            @spliceAdded="spliceAdded"
            :splice_plan_id="activationReportData.splice_plan_id"
          />
        </template>
      </AppModal>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref, watch } from 'vue'
//import { ref } from 'vue'
//import { useRouter } from 'vue-router'
import AppModal from '../../components/AppModal.vue'
import AddSplicePlan from '../../pages/Field_Operations/AddSplicePlan.vue'
import workplaceRequestsv2 from '../../services/workplaceRequestsv2.js'
import { useRoute, useRouter } from 'vue-router'
import SplicePoints from './SplicePoints.vue'
import Swal from 'sweetalert2'
const showAddSplicePlanModal = ref(false)
const route = useRoute()
const router = useRouter()
const props = defineProps(['submitForm'])
const emit = defineEmits(['formSubmitted'])
const activationReportData = ref({
  id: null,
  customer_name: '',
  address: '',
  gps_coordinates: {
    latitude: null,
    longitude: null,
  },
  customer_contact: '',
  proposed_splitter: '',
  exp_output: '',
  available_ports: 0,
  backbone_splicing: false,
  installer: '',
  'requested_splitters/FATs': 1,
  is_mobilized: 'no',
  is_mdu: 'no',
  no_of_mdu_buildings: 0,
  product: '',
  location_type: '',
  nearest_junction_box: '',
  accuracy: null,
  reviewed: 0,
  approved_by: null,
  splice_plan_id: 0,
  splice_points: [],
})
onMounted(() => {
  activationReport()
})

const activationReportPayload = ref({
  fat: null,
  variance_status: true,
  address: null,
  labelled: null,
  latitude: null,
  longitude: null,
  node_image: '',
})

const setRadioValue = (label) => {
  let input = document.getElementById(label)
  if (input.checked) {
    payload.value[label] = 'yes'
  } else {
    payload.value[label] = 'no'
  }
}

watch(
  () => props.submitForm,
  (newValue) => {
    if (newValue == true) {
      sendActivationReport()
    }
  }
)

const sendActivationReport = async () => {
  try {
    // operations / sd / provisioning / activation - report / create;
    let formData = new FormData()
    formData.append('id', route.params.id)
    formData.append('node_type', activationReportPayload.value.fat)
    formData.append(
      'variance_status',
      activationReportPayload.value.variance_status
    )
    formData.append('address', activationReportPayload.value.address)
    formData.append('labelled', activationReportPayload.value.labelled)
    formData.append('latitude', activationReportPayload.value.latitude)
    formData.append('longitude', activationReportPayload.value.longitude)
    formData.append('node_image', activationReportPayload.value.node_image)
    const { status, data } = await workplaceRequestsv2(
      'post',
      `operations/sd/provisioning/activation-report/create`,
      formData
    )

    if (status == 200) {
      Swal.fire({
        icon: 'success',
        title: 'Successful',
        text: 'processed successfully',
      })
      router.push({ name: 'schedule' })
    }
    if (status == 422) {
      const valuesArray = Object.values(data.errors)

      Swal.fire({
        icon: 'error',
        title: 'Bad Request',
        text: valuesArray[0] || 'Some fields are missing',
      })
    }
    emit('formSubmitted')
  } catch (e) {
    console.log(e)
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: e.message,
    })
  }
}

const filesChange = async (value) => {
  try {
    activationReportPayload.value.node_image = value[0]
    // console.log(payload);
  } catch (e) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: e.message,
    })
  }
}

const activationReport = async () => {
  try {
    const { status, data } = await workplaceRequestsv2(
      'get',
      `operations/sd/activation/${route.params.id}`
    )
    if (status == 200) {
      activationReportData.value = data?.data?.data
      activationReportPayload.value.address = activationReportData.value.address
      activationReportPayload.value.latitude =
        activationReportData.value.gps_coordinates.latitude
      activationReportPayload.value.longitude =
        activationReportData.value.gps_coordinates.longitude
    }
  } catch (e) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: e.message,
    })
  }
}

const spliceAdded = () => {
  showAddSplicePlanModal.value = false
  activationReport()
}
</script>
