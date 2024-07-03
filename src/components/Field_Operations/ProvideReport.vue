<template>
  <section class="p-10">
    <div class="mx-3 w-full border border-gray-300 p-10">
      <div class="mx-1 my-4 w-full border-gray-400">
        <div class="my-4 flex border-b-white bg-gray-200">
          <div class="mb-4 flex flex-row gap-16 border-b-white">
            <label
              for="name"
              class="text-md text-black-800 mx-2 my-2 mb-2 block font-semibold"
              ><p class="w-40">Customer Name</p></label
            >
            <input
              :value="activationReportData.customer_name"
              type="text"
              id="field3"
              name="field3"
              class="mt-1 w-full rounded-md border p-2"
            />
          </div>
        </div>
        <div class="my-4 flex border-b-white bg-white">
          <div class="mb-4 flex flex-row gap-16 border-b-white">
            <label
              for="name"
              class="text-md text-black-800 mx-2 my-2 mb-2 block font-semibold"
              ><p class="w-40">Customer ID</p></label
            >
            <input
              :value="activationReportData.id"
              type="text"
              id="field3"
              name="field3"
              class="mt-1 w-full rounded-md border p-2"
            />
          </div>
        </div>
        <div class="my-4 flex border-b-white bg-gray-200">
          <div class="mb-4 flex gap-16 border-b-white">
            <label
              for="name"
              class="text-md text-black-800 mx-2 my-2 mb-2 block font-semibold"
              ><p class="w-40">Phone Number</p></label
            >
            <input
              :value="activationReportData.customer_contact"
              type="text"
              id="field3"
              name="field3"
              class="mt-1 w-full rounded-md border p-2"
            />
          </div>
        </div>

        <div class="mt-8 w-full border-gray-400 p-10">
          <div class="mx-10 max-w-4xl">
            <div class="flex flex-row space-x-8">
              <label
                for="dropdown2"
                class="text-md text-black-800 my-4 mb-2 block font-semibold"
                >Number of Cores:</label
              >
              <div class="mb-4 flex items-center">
                <button
                  @click="decrement"
                  class="bg-gray-500 px-4 py-2 text-white"
                >
                  -
                </button>
                <input
                  v-model="payload.no_of_cores"
                  type="text"
                  class="w-16 border p-2 text-center"
                />
                <button
                  @click="increment"
                  class="bg-orange-500 px-4 py-2 text-white"
                >
                  +
                </button>
              </div>
            </div>
            <div
              v-for="(core, index) in payload.cores"
              :key="index"
              class="mt-8 flex flex-row space-x-6"
            >
              <div class="grid grid-cols-4 gap-2">
                <div class="mb-4">
                  <label
                    for="dropdown2"
                    class="text-md text-black-800 mb-2 block font-semibold"
                    >Buffer</label
                  >
                  <input
                    v-model="payload.cores[index].buffer"
                    type="text"
                    id="field1"
                    name="field1"
                    class="h-[60px] w-full rounded-md border p-2"
                    placeholder="Enter Buffer + (index + 1)"
                  />
                </div>
                <div class="mb-4">
                  <label
                    for="dropdown2"
                    class="text-md text-black-800 mb-2 block font-semibold"
                    >Core</label
                  >
                  <input
                    v-model="payload.cores[index].core"
                    type="text"
                    id="field2"
                    name="field2"
                    class="h-[60px] w-full rounded-md border p-2"
                    placeholder="Enter Core"
                  />
                </div>
                <div class="mb-4">
                  <label
                    for="dropdown2"
                    class="text-md text-black-800 mb-2 block font-semibold"
                    >Power Level</label
                  >
                  <input
                    v-model="payload.cores[index].power_level"
                    type="text"
                    id="field3"
                    name="field3"
                    class="h-[60px] w-full rounded-md border p-2"
                    placeholder="Enter Power Level"
                  />
                </div>
                <div class="mb-4">
                  <label
                    for="picture"
                    class="text-black-800 mb-2 block text-sm font-semibold"
                    >Power Level</label
                  >
                  <input
                    @change="
                      filesChange($event.target.files, index),
                        (fileCount = $event.target.files.length)
                    "
                    type="file"
                    id="file"
                    name="file"
                    class="h-[60px] w-[270px] rounded-md border border-gray-400 p-2"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="mb-4 mt-10">
            <div>
              <label for="name" class="font-semibold">Comment</label>
            </div>
            <textarea
              v-model="payload.comment"
              id="comment"
              rows="4"
              class="my-2 w-full rounded-md border border-gray-200 text-sm text-gray-900 focus:outline-none focus:ring-0 dark:bg-white dark:text-black dark:placeholder-gray-400"
              required
              placeholder="........input setbacks and delay comments........."
            >
            </textarea>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Swal from 'sweetalert2'
import workplaceRequestsv2 from '../../services/workplaceRequestsv2'

const props = defineProps(['submitForm'])
const emit = defineEmits(['formSubmitted'])
const count = ref(1)
const maxTabs = 999
const route = useRoute()
const router = useRouter()
const increment = () => {
  if (count.value < maxTabs) {
    payload.value.no_of_cores += 1
    payload.value.cores.push({
      buffer: '',
      core: 0,
      power_level: '',
      image: '',
    })
  }
}

const decrement = () => {
  if (count.value > 1) {
    payload.value.no_of_cores -= 1
    payload.value.cores.pop()
  }
}

onMounted(() => {
  activationReport()
})

const payload = ref({
  no_of_cores: 0,
  // buffer: null,
  cores: [
    {
      buffer: '',
      core: 0,
      power_level: '',
      image: '',
    },
  ],
  // power_level: null,
  comment: null,
  // image: null,
})

watch(
  () => props.submitForm,
  (newValue) => {
    if (newValue == true) {
      // alert("about to submit forms")
      createSplicePoint()
    }
  }
)
const createSplicePoint = async () => {
  try {
    let formData = new FormData()
    formData.append('id', route.params.id)
    formData.append('no_of_cores', payload.value.no_of_cores)
    payload.value.cores.forEach((core) => {
      formData.append('buffer[]', core.buffer)
      formData.append('core[]', core.core)
      formData.append('power_level[]', core.power_level)
      formData.append('image[]', core.image)
    })
    formData.append('comments', payload.value.comment)
    const { status, data } = await workplaceRequestsv2(
      'post',
      `operations/sd/splice-point/report/create`,
      formData
    )
    if (status == 200) {
      router.back()
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

const activationReportData = ref({
  id: null,
  customer_name: '',
  address: '',
  gps_coordinates: {
    latitude: '',
    longitude: '',
  },
  customer_contact: '',
  proposed_splitter: '',
  installer: '',
  'requested_splitters\/FATs': 0,
  is_mobilized: '',
  is_mdu: '',
  no_of_mdu_buildings: null,
  product: '',
  location_type: '',
  nearest_junction_box: '',
  accuracy: null,
  reviewed: 0,
  approved_by: null,
})

const activationReport = async () => {
  try {
    const { status, data } = await workplaceRequestsv2(
      'get',
      `operations/sd/activation/${route.params.id}`
    )
    if (status == 200) {
      activationReportData.value = data?.data?.data
    }
    console.log(data)
  } catch (e) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: e.message,
    })
  }
}

const filesChange = async (value, index) => {
  try {
    payload.value.cores[index].image = value[0]
    // console.log(payload);
  } catch (e) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: e.message,
    })
  }
}

// const tabs = Array.from({ length: maxTabs }, (_, index) => ({
//   id: index + 1,
//   fields: Array.from({ length: index + 1 }, () => '')
// }))
</script>
