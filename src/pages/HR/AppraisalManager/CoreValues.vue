<template>
  <div class="my-4 flex flex-row-reverse">
    <button
      @click="submitCoreValues"
      class="mx-1 rounded border bg-red-600 px-6 py-2 font-bold text-white"
    >
      Submit
    </button>
  </div>
  <table class="mx-3 w-full table-auto border border-secondary text-sm">
    <thead class="bg-gray-200">
      <tr class="border border-secondary capitalize">
        <th class="border border-secondary p-3">S/N</th>
        <th class="border border-secondary p-3">Core Values</th>
        <th class="border border-secondary p-3">Weightings</th>
        <th class="border border-secondary p-3">Max Rating Obtainable</th>
        <th class="border border-secondary p-3">Actual Rating</th>
        <th class="border border-secondary p-3">Percentage of Max Score</th>
      </tr>
    </thead>
    <tbody v-if="!isLoading">
      <tr v-for="(core, index) in coreValues.core_values" :key="index">
        <td class="border border-secondary p-3 text-center">{{ index + 1 }}</td>
        <td class="border border-secondary p-3 text-center">
          {{ core.core_value }}
        </td>
        <td class="border border-secondary p-3 text-center">
          {{ core.weightings }}
        </td>
        <td class="border border-secondary p-3 text-center">
          {{ core.max_rating }}
        </td>
        <td class="border border-secondary p-3 text-center">
          <div class="mb-4">
            <select
              v-model="payload[index].rating"
              name="dropdown"
              id="dropdown"
              class="w-full border border-gray-500 bg-[#EEEEEE] p-2"
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </td>
        <td class="border border-secondary p-3 text-center">
          {{ core.percentage }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import Swal from 'sweetalert2'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import workplaceRequestsv2 from '../../../services/workplaceRequestsv2'
import { useUserStore } from '@/stores/userStore'

const store = useUserStore()
const isLoading = ref(true)
const route = useRoute()

const payload = ref([
  {
    id: 1,
    rating: 4,
  },
])
onMounted(() => {
  isLoading.value = true
  getCoreValues()
})

const coreValues = ref({
  staff_details: {
    fullname: 'Rachel Ochiche',
    role: 'Network Analyst',
    staff: 253,
    status: 'Active',
    start_date: '21st October 2021',
  },
  core_values: [
    {
      id: 1,
      core_value: 'Team work',
      weightings: 100,
      max_rating: 5,
      actual_rating: 5,
      percentage: 100,
    },
  ],
})

const getCoreValues = async () => {
  try {
    const { status, data } = await workplaceRequestsv2(
      'get',
      `appraisals/${route.params.id}/core-values`
    )
    if (status == 200) {
      coreValues.value = data.data.data

      payload.value = coreValues.value.core_values.map((e) => {
        return { id: e.id, rating: e.actual_rating }
      })
    }
    isLoading.value = false
  } catch (e) {
    console.log(e)
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: e.message,
    })
  }
}

const submitCoreValues = async () => {
  try {
    const { status, data } = await workplaceRequestsv2(
      'post',
      `appraisals/user/core-value/update`,
      {
        core_values: payload.value,
      },
      {
        headers: {
          Authorization: `Bearer ${store.$state.installationToken}`,
        },
      }
    )
    if (status == 422) {
      Swal.fire({
        icon: 'info',
        title: 'Info',
        text: data ? data.message : 'Enter Correct details',
      })
    }
    if (status == 200 || status == 201) {
      Swal.fire({
        icon: 'success',
        title: 'Submitted',
        text: 'Core values updated Successfully',
      })
      setTimeout(function () {
        location.reload()
      }, 2000)
    } else {
      Swal.fire({
        icon: 'info',
        title: 'Enter Valid Details',
        text: data ? data.message : 'Invalid Request',
      })
    }
  } catch (e) {}
}
</script>
