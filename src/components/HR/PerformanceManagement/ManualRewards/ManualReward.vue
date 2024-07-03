<template>
  <section class="p-10">
    <div class="mr-10 mt-5 flex flex-row-reverse">
      <button
        @click="sendQuery"
        class="h-[51px] w-[120px] shrink-0 rounded-md border border-solid bg-[#D50036] pb-3.5 pl-6 pr-7 pt-3.5 text-white"
      >
        SEND
      </button>
    </div>
    <div class="mt-5 w-full border border-gray-300">
      <div class="my-4 w-full border-gray-400 p-5">
        <form @submit.prevent="sendQuery">
          <div class="my-2 grid grid-cols-1 gap-2">
            <div class="mb-4">
              <label
                for="name"
                class="text-md text-black-800 mb-2 block font-semibold"
                >Title of Query</label
              >
              <input
                v-model="title"
                type="text"
                id="field1"
                name="field1"
                required
                class="w-full border border-gray-500 p-2"
              />
            </div>
            <div class="mb-4">
              <label
                for="name"
                class="text-md text-black-800 mb-2 block font-semibold"
              >
                Priority Level</label
              >
              <select
                v-model="priority"
                name="dropdown"
                id="dropdown"
                class="w-full rounded-md border p-2"
              >
                <option value="first level">1st Warning</option>
                <option value="second level">2nd Warning</option>
                <option value="third level">Final Warning</option>
              </select>
            </div>

            <div class="mb-4">
              <div>
                <label for="name" class="font-semibold"
                  >Description of Infraction</label
                >
              </div>
              <textarea
                v-model="description"
                id="comment"
                required
                class="w-full border border-gray-500 p-2"
              ></textarea>
            </div>
            <div class="mb-4">
              <label
                for="dropdown"
                class="text-md text-black-800 mb-2 block font-semibold"
              >
                Send Query To
              </label>
              <Multiselect
                v-model="defaulter_id"
                :options="defaulters"
                :multiple="true"
                placeholder="Select one or more names"
                label="name"
                track-by="id"
                :close-on-select="false"
                :clear-on-select="false"
                :preserve-search="true"
                @select="handleSelectionChange"
                @remove="handleSelectionChange"
                id="dropdown"
                class="dropdown w-full"
              ></Multiselect>
            </div>
          </div>
          <div class="flex flex-row">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 12 22C17.53 22 22 17.53 22 12C22 6.47 17.53 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM15.59 7L12 10.59L8.41 7L7 8.41L10.59 12L7 15.59L8.41 17L12 13.41L15.59 17L17 15.59L13.41 12L17 8.41L15.59 7Z"
                fill="#D50036"
              />
            </svg>
            <div class="mx-1">No upload(s)</div>
          </div>
          <div class="my-3 grid-cols-1 gap-4 pb-6 lg:grid-cols-1">
            <div class="mx-2 mb-4">
              <label
                for="picture"
                class="mb-2 block text-sm font-semibold text-gray-600"
                >Upload Supporting Evidence/ Documentation</label
              >
              <input type="file" @change="onFileChanged($event)" capture />
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref, onMounted, reactive } from 'vue'
import workplaceRequestsv2 from '../../../../services/workplaceRequestsv2.js'
import Multiselect from 'vue-multiselect'
import 'vue-multiselect/dist/vue-multiselect.css'
import Swal from 'sweetalert2'

const evidence = ref(null)
const title = ref(null)
const priority = ref(null)
const description = ref(null)
const defaulter_id = ref([])
const defaulters = ref([])
const file = ref(null)

onMounted(() => {
  getDefaulter()
})

const sendQuery = async () => {
  try {
    const ids = defaulter_id.value.map((item) => item.id)
    let payload = new FormData()
    payload.append('type', 'query')
    payload.append('title', title.value)
    payload.append('priority', priority.value)
    payload.append('description', description.value)
    ids.forEach((id) => {
      payload.append('defaulter_id[]', id)
    })

    if (file.value) {
      payload.append('evidence', file.value)
    }

    const { status, data } = await workplaceRequestsv2(
      'post',
      `operations/bp/query/create`,
      payload
    )

    if (status == 422) {
      Swal.fire({
        icon: 'info',
        title: 'Info',
        text: data ? data.message : 'Enter Correct details',
      })
    }
    if (status === 200 || status === 201) {
      Swal.fire({
        icon: 'success',
        title: 'Submitted',
        text: 'Query Sent Successfully',
      })
      resetForm()
    }
  } catch (e) {
    console.error('An error occurred', e)
    Swal.fire({
      icon: 'info',
      title: 'Info',
      text: e.message,
    })
  }
}

const resetForm = () => {
  title.value = null
  description.value = null
  priority.value = null
  defaulter_id.value = []
  evidence.value = null
}

const getDefaulter = async () => {
  try {
    const { status, data } = await workplaceRequestsv2(
      'get',
      'users/get-all-users'
    )
    if (status === 200) {
      defaulters.value = data.data.results.data
    } else {
      defaulters.value = []
    }
  } catch (e) {
    console.error('An error occurred', e)
  }
}

function handleSelectionChange() {
  if (!Array.isArray(defaulter_id.value)) {
    console.error('Expected defaulter_id to be an array')
    return
  }
}

function onFileChanged($event) {
  const target = $event.target
  if (target && target.files) {
    file.value = target.files[0]
  }
}
</script>
<style></style>