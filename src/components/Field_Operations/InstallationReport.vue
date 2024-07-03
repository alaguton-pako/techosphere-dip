<template>
  <div class="mx-3 w-full border border-gray-300 bg-[#F5F5F5]">
    <div class="mx-1 my-1 w-full border-gray-400 p-16">
      <div class="mb-4">
        <nav
          class="text-black-300 bg-white-600 font-[Source Sans Pro] mt-1 flex w-full flex-row rounded-md border p-2 text-[15px] font-bold"
        >
            <div class="">
            <span
              class="mx-6 cursor-pointer text-center text-primary"
              >{{ InstallationData.activity }}
            </span>
            </div>
        </nav>
      </div>
      <div class="my-4 flex border-b-white bg-gray-200">
        <div class="mb-4 flex gap-16 border-b-white">
          <label
            for="name"
            class="text-md text-black-800 mx-2 my-2 mb-2 block font-semibold"
            >Full Name</label
          >
        </div>
        <div class="mb-4 mx-14">
          <input
            :value="InstallationData.customer_name"
            type="text"
            id="field1"
            name="field1"
            placeholder=" Full Name"
            class="mt-1 w-full rounded-md border p-2"
          />
        </div>
      </div>

      <div class="flex gap-10 border-gray-200">
        <div class="mb-4 flex">
          <label
            for="name"
            class="text-md text-black-800 mx-2 my-2 mb-2 block font-semibold"
            >Customer ID</label
          >
        </div>
        <div class="mb-4">
          <input
            :value="InstallationData.id"
            type="text"
            id="field2"
            name="field2"
            placeholder="Customer ID"
            class="mt-1 w-full rounded-md border p-2"
          />
        </div>
      </div>
      <div class="flex gap-6 border-gray-200 bg-white">
        <div class="mb-4">
          <label
            for="name"
            class="text-md text-black-800 mx-2 my-2 mb-2 block font-semibold"
            >Phone Number</label
          >
        </div>
        <div class="mb-4">
          <input
            :value="InstallationData.phone_number"
            type="text"
            id="field2"
            name="field2"
            placeholder="Phone"
            class="mt-1 w-full rounded-md border p-2"
          />
        </div>
      </div>
      <div class="flex gap-16 border-gray-200 bg-gray-200">
        <div class="mb-4">
          <label
            for="name"
            class="text-md text-black-800 mx-2 my-2 mb-2 block font-semibold"
            >Address</label
          >
        </div>
        <div class="mb-4 mx-2">
          <input
            :value="InstallationData.address"
            type="text"
            id="field2"
            name="field2"
            placeholder="Address"
            class="mt-1 w-full rounded-md border p-2"
          />
        </div>
      </div>
      <!-- <div class="flex gap-16 border-gray-200 bg-white">
        <div class="mb-4">
          <label
            for="name"
            class="text-md text-black-800 mx-2 my-2 mb-2 block font-semibold"
            >Email Address</label
          >
        </div>
        <div class="mb-4">
          <input
            type="text"
            id="field2"
            name="field2"
            placeholder="E-mail"
            class="mt-1 w-full rounded-md border p-2"
          />
        </div>
      </div> -->
    </div>
    <div class="mx-1 my-1 w-full border-gray-400 p-16">
      <form
        action="#"
        method="POST"
        class="my-5 grid grid-cols-1 gap-8 lg:grid-cols-2"
      >
        <!-- Column 1 -->
        <div class="mb-4">
          <!-- Row 1 -->
          <div class="mb-4">
            <label
              for="picture"
              class="mb-2 block text-sm font-semibold text-gray-600"
              >Upload Picture</label
            >
            <input
            @change="
            filesChange($event.target.files);
            fileCount = $event.target.files.length;
          "
            type="file"
            id="picture"
            name="picture"
              class="rounded-md border border-gray-300 p-2"
            />
            
          </div>

          <!-- Row 2 -->
        </div>
        <div class="mb-4">
          <label
            for="dropdown2"
            class="text-md text-black-800 mb-2 block font-semibold"
            >Issues Encounted</label
          >
          <select
          v-model="installationReportPayload.issues_encountered"
            id="dropdown2"
            name="dropdown2"
            class="h-auto w-[410px] rounded-md border border-gray-500 bg-[#EEEEEE] p-2"
          >
            <option value="option1">Lastmile</option>
            <option value="option2">Advancedmile</option>
            <option value="option3">Distance</option>
          </select>
        </div>
      </form>
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div class="mb-4">
          <div><label for="name">Installation Date</label></div>
          <input
          v-model="installationReportPayload.date" type="date" class="rounded-md border border-gray-300 p-2" />
        </div>
        <div class="mb-4">
          <div><label for="name">Installation Time</label></div>
          <input 
          v-model="installationReportPayload.time" 
           type="time" class="rounded-md border border-gray-300 p-2" />
        </div>
        <div class="mb-4">
          <label
            for="dropdown1"
            class="mb-2 block text-sm font-semibold text-gray-600"
            >Installation Status</label
          >
          <select
          v-model="installationReportPayload.status" 
            id="dropdown1"
            name="status"
            class="h-auto w-[410px] rounded-md border border-gray-500 bg-[#EEEEEE] p-2"
          >
            <option value="completed">Completed</option>
            <option value="not_completed">Incomplete</option>
            <option value="ongoing">Ongoing</option>
          </select>
        </div>
      </div>
      <div class="mb-4 mt-10">
        <div>
          <label for="name" class="font-semibold">Comment</label>
        </div>
        <textarea
        v-model="installationReportPayload.comment"
          id="comment"
          rows="4"
          class="my-2 w-full rounded-md border border-gray-200 text-sm text-gray-900 focus:outline-none focus:ring-0 dark:bg-white dark:text-black dark:placeholder-gray-400"
          required
          placeholder="..............................."
        >
        </textarea>
      </div>
    </div>
  </div>
</template>
<script setup>
import Swal from 'sweetalert2'
import { onMounted, ref, watch} from 'vue'
import { useRoute, useRouter } from 'vue-router'
import workplaceRequestsv2 from '../../services/workplaceRequestsv2'
const route = useRoute()
const router = useRouter()
const props = defineProps(['submitForm'])
const emit = defineEmits(['formSubmitted', 'setActiveTab'])



const InstallationData = ref({
  id: null,
  customer_name: "",
  customer_id: "",
  address: "",
  phone_number: "",
  request_date: "",
  activity: "",
  exp_start_date: "",
  end_date: "",
  status: ""
})

const installationReportPayload = ref({
  date : '',
  time : '',
  image : '',
  issues_encountered : '',
  status : '',
  comment : ''
});

onMounted(() => {
  getInstallationDetails()
})


watch(
  () => props.submitForm,
  (newValue) => {
    if (newValue == true) {
      sendInstallationReport()
    }
  }
)

const sendInstallationReport = async () => {
  try {
    let formData = new FormData()
    formData.append('assignment_id', route.params.id)
    formData.append('date', installationReportPayload.value.date)
    formData.append(
      'time',
      installationReportPayload.value.time
    )
    formData.append('issues', installationReportPayload.value.issues_encountered)
    formData.append('status', installationReportPayload.value.status)
    formData.append('comments', installationReportPayload.value.comment)
    formData.append('image', installationReportPayload.value.image)

    console.log(formData);

    const response = await workplaceRequestsv2(
      'post',
      `operations/sd/installation-report/create`,
      formData
    )

    const {status, data} = response;
 
    if (status == 200) {
      Swal.fire({
        icon: 'success',
        title: 'Successful',
        text: 'processed successfully',
      })
      router.push({ name: 'schedule' })
    }if(status == 422){
      const valuesArray = Object.values(data.errors);

      Swal.fire({
        icon: 'error',
        title: 'Bad Request',
        text: valuesArray[0] || 'Some fields are missing',
      })
    }
    if(status == 404){
      let message = response.data.message
      Swal.fire({
        icon: 'error',
        title: 'Not Found',
        text: message || 'Not Found',
      })
    }
    if(status == 500){
      Swal.fire({
        icon: 'error',
        title: 'Internal Server Error',
        text: 'Internal Server Error',
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
    installationReportPayload.value.image = value[0]
    // console.log(payload);
  } catch (e) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: e.message,
    })
  }
}


const getInstallationDetails = async () => {
  try {
    const { status, data } = await workplaceRequestsv2(
      'get',
      `operations/sd/installation/schedule/${route.params.id}`
    )
    if (status == 200) {
      InstallationData.value = data?.data?.data
    }
  } catch (e) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: e.message,
    })
  }
}
</script>
