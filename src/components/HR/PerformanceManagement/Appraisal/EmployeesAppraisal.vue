<template>
  <div class="mx-3 w-full border border-gray-300">
    <div v-if="loading" class="mx-1 my-1 w-full border-gray-400 p-5">
      <LoadingSpinner />
    </div>
    <div class="mx-1 my-1 w-full border-gray-400 p-5">
      <div class="my-4 grid grid-cols-5 border-b-white bg-gray-200">
        <div class="mb-4 border-b-white">
          <label
            for="name"
            class="text-md text-black-800 mx-2 my-2 mb-2 block font-semibold"
          ></label>
        </div>
        <div class="mb-4">
          <label
            for="name"
            class="text-md text-black-800 my-2 mb-2 block font-semibold"
            >Work Done</label
          >
        </div>
        <div class="mb-4">
          <label
            for="name"
            class="text-md text-black-800 mx-28 my-2 mb-2 block w-80 font-light"
          ></label>
        </div>
        <div class="mb-4">
          <label
            for="name"
            class="text-md text-black-800 mx-28 my-2 mb-2 block w-80 font-light"
          ></label>
        </div>
        <div class="mb-4">
          <label
            for="name"
            class="text-md text-black-800 mx-28 my-2 mb-2 block w-80 font-semibold"
            >Score</label
          >
        </div>
      </div>
      <div class="grid grid-cols-5 border-gray-200">
        <div class="mb-4">
          <label
            for="name"
            class="text-md text-black-800 mx-2 my-2 mb-2 block font-semibold"
          ></label>
        </div>
        <div class="mb-4">
          <label for="name" class="text-md text-black-800 my-2 mb-2 block w-96"
            >70% Overall Performance Rating</label
          >
        </div>
        <div class="mb-4">
          <label
            for="name"
            class="text-md text-black-800 mx-28 my-2 mb-2 block w-96 font-light"
          ></label>
        </div>
        <div class="mb-4">
          <label
            for="name"
            class="text-md text-black-800 mx-28 my-2 mb-2 block w-96"
          ></label>
        </div>
        <div class="mb-4">
          <label
            for="name"
            class="text-md text-black-800 mx-28 my-2 mb-2 block w-96"
            >{{ appraised.appraised_employees.overall_performance_rating }}
            %
          </label>
        </div>
      </div>
      <div class="grid grid-cols-5 border-gray-200 bg-gray-200">
        <div class="mb-4">
          <label
            for="name"
            class="text-md text-black-800 mx-2 my-2 mb-2 block font-semibold"
          ></label>
        </div>
        <div class="mb-4">
          <label for="name" class="text-md text-black-800 my-2 mb-2 block"
            >30% Core Values</label
          >
        </div>
        <div class="mb-4">
          <label
            for="name"
            class="text-md text-black-800 mx-28 my-2 mb-2 block w-80 font-light"
          ></label>
        </div>
        <div class="mb-4">
          <label
            for="name"
            class="text-md text-black-800 mx-28 my-2 mb-2 block w-80 font-light"
          ></label>
        </div>
        <div class="mb-4">
          <label
            for="name"
            class="text-md text-black-800 mx-28 my-2 mb-2 block w-80"
            >{{ appraised.appraised_employees.core_values }}
            %
          </label>
        </div>
      </div>
      <div class="border border-b-gray-400"></div>
      <div class="grid grid-cols-6 border-b-white bg-white">
        <div class="mb-4">
          <label
            for="name"
            class="text-md text-black-800 mx-2 my-2 mb-2 block font-semibold"
          ></label>
        </div>
        <div class="mb-4">
          <label
            for="name"
            class="text-md text-black-800 mx-28 my-2 mb-2 block w-80 font-light"
          ></label>
        </div>
        <div class="mb-4">
          <label
            for="name"
            class="text-md text-black-800 mx-28 my-2 mb-2 block w-80 font-light"
          ></label>
        </div>

        <div class="grid-col-1 mb-4 grid">
          <div class="mb-4">
            <label
              for="name"
              class="text-md text-black-800 mx-28 my-2 mb-2 block w-80 font-bold"
              >Total Score</label
            >
          </div>
          <div class="mb-4">
            <label
              for="name"
              class="text-md text-black-800 mx-28 my-2 mb-2 block w-80 font-bold"
              >Your Rating/ Total Possible Rating</label
            >
          </div>
          <div class="mb-4">
            <label
              for="name"
              class="text-md text-black-800 mx-28 my-2 mb-2 block w-80 font-bold"
              >Performance Bonus</label
            >
          </div>
        </div>
        <div class="grid-col-1 mb-4 grid items-center pl-7 text-center">
          <div class="mb-4">
            <label
              for="name"
              class="text-md text-black-800 mx-28 my-2 mb-2 block w-80"
            >
              {{ appraised.appraised_employees.total_score }}
              %</label
            >
          </div>
          <div class="mb-4">
            <label
              for="name"
              class="text-md text-black-800 mx-28 my-2 mb-2 block w-80 font-light"
              >{{ appraised.appraised_employees.your_rating }}/{{
                appraised.appraised_employees.total_possible_rating
              }}</label
            >
          </div>
          <div class="mb-4">
            <label
              for="name"
              class="text-md text-black-800 mx-28 my-2 mb-2 block w-80 font-light"
            >
              {{ appraised.appraised_employees.performance_bonus }}
              %</label
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <table
    class="mx-3 my-8 w-[600px] table-auto border border-b border-secondary text-sm"
  >
    <thead class="bg-gray-200">
      <tr class="border border-secondary capitalize">
        <th class="border border-secondary p-3">Rating</th>
        <th class="border border-secondary p-3">Reward</th>
        <th class="border border-secondary p-3">
          Score
          <div class="flex gap-14">
            <div class="mx-10">Min</div>
            <div>Max</div>
          </div>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="border border-secondary text-center">Exceptional</td>
        <td class="border border-secondary text-center">
          50% of Monthly Net Worth
        </td>
        <td class="border border-secondary text-center">
          <div class="grid grid-cols-2">
            <div class="">>4.9</div>
            <div class="border-l-4">5.00</div>
          </div>
        </td>
      </tr>
      <tr>
        <td class="border border-secondary text-center">Outstanding</td>
        <td class="border border-secondary text-center">
          20% of Monthly Net Worth
        </td>
        <td class="border border-secondary text-center">
          <div class="grid grid-cols-2">
            <div class="">>4.5</div>
            <div class="border-l-4">4.90</div>
          </div>
        </td>
      </tr>
      <tr>
        <td class="border border-secondary text-center">Very Good</td>
        <td class="border border-secondary text-center">
          10% of Monthly Net Worth
        </td>
        <td class="border border-secondary text-center">
          <div class="grid grid-cols-2">
            <div class="">>4.0</div>
            <div class="border-l-4">4.50</div>
          </div>
        </td>
      </tr>
      <tr>
        <td class="border border-secondary text-center">Above Average</td>
        <td class="border border-secondary text-center">
          5% of Monthly Net Worth
        </td>
        <td class="border border-secondary text-center">
          <div class="grid grid-cols-2">
            <div class="">>3.5</div>
            <div class="border-l-4">4.00</div>
          </div>
        </td>
      </tr>
      <tr>
        <td class="border border-secondary text-center">Average 11</td>
        <td class="border border-secondary text-center">Typically Meets</td>
        <td class="border border-secondary text-center">
          <div class="grid grid-cols-2">
            <div class="">>2.9</div>
            <div class="border-l-4">3.50</div>
          </div>
        </td>
      </tr>
      <tr>
        <td class="border border-secondary text-center">Average 1</td>
        <td class="border border-secondary text-center">Typically Meets</td>
        <td class="border border-secondary text-center">
          <div class="grid grid-cols-2">
            <div class="">>2.4</div>
            <div class="border-l-4">2.90</div>
          </div>
        </td>
      </tr>
      <tr>
        <td class="border border-secondary text-center">Poor</td>
        <td class="border border-secondary text-center">
          Does Not Meet/5% Deduction/3-month Probation
        </td>
        <td class="border border-secondary text-center">
          <div class="grid grid-cols-2">
            <div class="">>1.9</div>
            <div class="border-l-4">2.40</div>
          </div>
        </td>
      </tr>
      <tr>
        <td class="border border-secondary text-center">Unacceptable</td>
        <td class="border border-secondary text-center">
          Does Not Meet/10% Deduction/1-month Probation
        </td>
        <td class="border border-secondary text-center">
          <div class="grid grid-cols-2">
            <div class="">1.00</div>
            <div class="border-l-4">1.90</div>
          </div>
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
import LoadingSpinner from '../../../LoadingSpinner.vue'
const props = defineProps(['id'])
const loading = ref(false)
const route = useRoute()
onMounted(() => {
  getAppraised()
})

const getAppraised = async () => {
  try {
    loading.value = true
    const { status, data } = await workplaceRequestsv2(
      'get',
      `appraisals/${route.params.id}/appraised-employees`
    )
    if (status == 200) {
      appraised.value = data.data.data
    }
  } catch (e) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: e.message,
    })
  } finally {
    loading.value = false
  }
}
const appraised = ref({
  staff_details: {
    fullname: '',
    role: '',
    staff: 253,
    status: '',
    start_date: '',
  },
  appraised_employees: {
    overall_performance_rating: 0,
    core_values: 0,
    total_score: 0,
    your_rating: '',
    total_possible_rating: 0,
    performance_bonus: 0,
  },
})
</script>
