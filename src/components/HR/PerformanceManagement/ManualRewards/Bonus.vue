<template>
  <section class="p-10">
    <div class="my-11 mr-10 flex flex-row-reverse">
      <button
        @click="sendReward"
        class="h-[51px] w-[120px] shrink-0 rounded-md border border-solid bg-[#D50036] pb-3.5 pl-6 pr-7 pt-3.5 text-white"
      >
        SEND
      </button>
    </div>
    <div class="mx-3 my-6 w-full border border-gray-300">
      <div class="my-4 w-full border-gray-400 p-5">
        <form @submit.prevent="sendReward">
          <div class="my-2 grid grid-cols-1 gap-2">
            <div class="mb-4">
              <label
                for="name"
                class="text-md text-black-800 mb-2 block font-semibold"
              >
                Type of Reward</label
              >
              <select
                v-model="type"
                name="dropdown"
                id="dropdown"
                class="w-full rounded-md border p-2"
              >
                <option value="Merit">Merit Points</option>
                <option value="Demerit">Demerit Points</option>
              </select>
            </div>

            <div class="mb-4">
              <div>
                <label for="name" class="font-semibold">Number of Points</label>
              </div>
              <input
                v-model="points"
                type="number"
                id="number"
                name="number"
                class="w-full rounded-md border p-2"
              />
            </div>
            <div class="mb-4">
              <div>
                <label for="name" class="font-semibold"
                  >Reason(s) for Reward</label
                >
              </div>
              <textarea
                v-model="description"
                id="comment"
                class="w-full rounded-md border-0 p-2 text-sm text-gray-900 focus:outline-none focus:ring-0 dark:bg-white dark:text-black dark:placeholder-gray-400"
                required
              ></textarea>
            </div>
            <div class="mb-4">
              <label
                for="dropdown"
                class="text-md text-black-800 mb-2 block font-semibold"
              >
                Send Points To
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
                class="w-full"
              ></Multiselect>
            </div>
          </div>
          <div class="my-3 flex flex-row">
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
          <div class="my-7 grid-cols-1 gap-4 pb-6 lg:grid-cols-1">
            <div class="mx-2 mb-4">
              <label
                for="picture"
                class="mb-2 block text-sm font-semibold text-gray-600"
                >Upload Supporting Evidence/ Documentation</label
              >
              <input
                type="file"
                @change="onFileChanged($event)"
                accept="image/*"
                capture
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref, onMounted, defineEmits, computed, watchEffect } from 'vue'
import workplaceRequestsv2 from '../../../../services/workplaceRequestsv2.js'
import Swal from 'sweetalert2'
import Multiselect from 'vue-multiselect'
import 'vue-multiselect/dist/vue-multiselect.css'

const type = ref(null)
const description = ref(null)
const points = ref(null)
const evidence = ref(null)
const defaulter_id = ref([])
const defaulters = ref([])
const file = ref(null)

const emit = defineEmits(['formSubmitted'])

onMounted(() => {
  getDefaulter()
})

const sendReward = async () => {
  try {
    const ids = defaulter_id.value.map((item) => item.id)
    let payload = new FormData()
    payload.append('type', type.value)
    payload.append('points', points.value)
    payload.append('description', description.value)

    // Append each ID individually
    ids.forEach((id) => {
      payload.append('defaulter_id[]', id)
    })

    if (file.value) {
      payload.append('evidence', file.value)
    }
    const { status, data } = await workplaceRequestsv2(
      'post',
      `operations/bp/reward/create`,
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
        text: 'Points Sent Successfully',
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
  type.value = null
  description.value = null
  points.value = null
  evidence.value = null
  defaulter_id.value = []
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
