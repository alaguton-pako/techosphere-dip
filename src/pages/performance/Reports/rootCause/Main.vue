<template>
  <div>
    <section class="p-10">
      <div class="flex justify-end">
        <button
          @click="createReport"
          class="rounded-md bg-red-600 px-6 py-2 text-white"
        >
          Send
        </button>
      </div>
      <section class="my-4 space-y-5 border border-gray-400 bg-white p-5">
        <div class="flex flex-col">
          <label for="">Title of Report:</label>
          <input
            type="text"
            v-model="payload.title"
            name=""
            id=""
            class="border border-gray-400 p-2"
          />
        </div>
        <div class="flex flex-col">
          <label for="">Problem Statement/Observation:</label>
          <textarea
            v-model="payload.observation"
            name=""
            id=""
            cols="30"
            rows="5"
            class="border border-gray-400"
          ></textarea>
        </div>
        <div class="flex flex-col">
          <label for="">Send Report To:</label>
          <select
            name=""
            v-model="payload.reported_to"
            id=""
            class="border border-gray-400 p-3"
          >
            <option selected>Select One</option>
            <option
              v-for="(user, index) in users"
              :key="index"
              :value="user.id"
            >
              {{ user.name }}
            </option>
          </select>
        </div>
        <div v-if="!payload.evidence" class="flex space-x-2">
          <img src="../../../../assets/no-upload.svg" alt="" />
          <p class="italic">No upload(s)</p>
        </div>
        <div class="flex flex-col">
          <label for="">Upload Supporting Evidence/Documentation:</label>
          <div class="mt-2 flex border border-gray-400 bg-[#EEEEEE] p-2">
            <img
              src="../../../../assets/arrow.up.upload.svg"
              alt=""
              class="mx-3"
            />
            <input
              @change="
                () => {
                  filesChange($event.target.files)
                  fileCount = $event.target.files.length
                }
              "
              type="file"
            />
          </div>
        </div>
        <div class="flex flex-col">
          <label for="">Recommendation:</label>
          <textarea
            v-model="payload.recommendation"
            name=""
            id=""
            cols="30"
            rows="5"
            class="border border-gray-400"
          ></textarea>
        </div>
      </section>
    </section>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import Swal from 'sweetalert2'
import workplaceRequestsv2 from '../../../../services/workplaceRequestsv2'

onMounted(() => {
  users.value = []
  getUsers()
})
const users = ref([
  {
    id: 254,
    name: 'zainab babayero',
    email: 'salesmanager@suburbanfiberco.com',
  },
])
const payload = ref({
  title: '',
  observation: '',
  reported_to: null,
  evidence: null,
  recommendation: null,
})
const createReport = async () => {
  try {
    let formData = new FormData()
    formData.append('title', payload.value.title)
    formData.append('observation', payload.value.observation)
    formData.append('reported_to', payload.value.reported_to)
    formData.append('evidence', payload.value.evidence)
    formData.append('recommendation', payload.value.recommendation)
    const { status, data } = await workplaceRequestsv2(
      'post',
      'operations/compliance-report/root-cause-analysis/create',
      formData
    )
    if (status == 200) {
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Report submitted successfully',
      })
    }

    if (status != 200) {
      Swal.fire({
        icon: 'info',
        title: 'Oops...',
        text: 'That was not successful',
      })
    }
    console.log('report creation response', data)
  } catch (e) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: e.message,
    })
  }
}

const filesChange = async (value) => {
  try {
    payload.value.evidence = value[0]
  } catch (e) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: e.message,
    })
  }
}

const getUsers = async () => {
  try {
    const { status, data } = await workplaceRequestsv2(
      'get',
      'users/get-all-users'
    )
    if (status === 200) {
      users.value = data.data.results.data
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
