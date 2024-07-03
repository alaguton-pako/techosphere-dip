<script setup>
import SelectDate from '@/components/SelectDate.vue'
import Search from '@/components/Search.vue'
import { ref, onMounted } from 'vue'
import AppPagination from '@/components/AppPagination.vue'
import Swal from 'sweetalert2'
import workplaceRequestsv2 from '../../../../services/workplaceRequestsv2'
import { useUserStore } from '@/stores/userStore'
import { formatDate } from '@fullcalendar/core'
const emit = defineEmits(['switchGenTab'])
const overview = ref([])
const props = defineProps(['activeTab'])
onMounted(() => {
  getOverview()
})
const getOverview = async () => {
  try {
    const { status, data } = await workplaceRequestsv2(
      'post',
      'operations/compliance-report/overview'
    )
    if (status === 200) {
      overview.value = data.data.data
      console.log(overview.value)
    }
  } catch (e) {
    console.log(e)
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: e.message,
    })
  }
}
</script>

<template>
  <div class="p-10">
    <section>
      <div class="my-6 flex justify-end">
        <SelectDate />
        <Search />
      </div>
      <div>
        <table
          class="w-full table-auto border border-secondary text-center text-sm"
        >
          <thead class="bg-gray-200">
            <tr class="border-secondary uppercase">
              <th class="border border-secondary p-3">S/N</th>
              <th class="border border-secondary p-3">report name</th>
              <th class="border border-secondary p-3">type</th>
              <th class="border border-secondary p-3">created on</th>
              <!-- <th class="border-secondary border-r p-3">
                Status
              </th> -->
              <th class="border-secondary p-3 underline">view</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(ov, index) in overview" :key="index">
              <td class="border border-secondary p-4">{{ index + 1 }}</td>
              <td class="border border-secondary p-3">
                {{ ov.title }}
              </td>
              <td class="border border-secondary p-3">
                {{ ov.type }}
              </td>
              <td class="border border-secondary p-3">
                {{ formatDate(ov.created_at) }}
              </td>
              <!-- <td
                class="border-secondary border-r p-3 text-[#009B2B] flex justify-center"
              >
                <p class="border border-[#009B2B] w-fit p-2">
                  FEEDBACK RECEIVED
                </p>
              </td> -->
              <td class="border border-secondary p-3 underline">View</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>
