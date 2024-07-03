<template>
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
    <tbody v-if="isLoading == false">
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
          {{ core.actual_rating }}
        </td>
        <td class="border border-secondary p-3 text-center underline">
          {{ core.percentage }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import workplaceRequestsv2 from '../../../../services/workplaceRequestsv2'
import Swal from 'sweetalert2'

const props = defineProps(['id'])
const isLoading = ref(false)
const route = useRoute()
onMounted(() => {
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
    isLoading.value = true
    const { status, data } = await workplaceRequestsv2(
      'get',
      `appraisals/${props.id}/core-values`
    )
    if (status == 200) {
      coreValues.value = data.data.data
    }
  } catch (e) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: e.message,
    })
  } finally {
    isLoading.value = false
  }
}
</script>
