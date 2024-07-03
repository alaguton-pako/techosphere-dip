<script setup>
import DateAndSearch from '../../../DateAndSearch.vue'
import { onMounted, ref, computed } from 'vue'
import workplaceRequestsv2 from '../../../../services/workplaceRequestsv2'
import Card from '@/components/Card.vue'
const isLoading = ref(false)

onMounted(() => {
  isLoading.value = true
  getAllAppraisals(current.value)
  getSummary()
})
const current = ref(1)
const from = ref(0)
const to = ref(0)
const pages = ref(1)
const total = ref(0)
const recordsPerPage = ref(20)
const pagination = computed(() => {
  return {
    current: current.value,
    from: from.value,
    to: to.value,
    pages: pages.value,
    total: total.value,
    recordsPerPage: recordsPerPage.value,
  }
})

const allAppraisals = ref([
  {
    id: null,
    name: '',
    department: '',
    role: '',
    user_id: 242,
    status: '',
    submission_date: null,
  },
])

const getAllAppraisals = async (pageNumber) => {
  try {
    isLoading.value = true
    const { status, data } = await workplaceRequestsv2(
      'get',
      `appraisals/all?per_page=${recordsPerPage.value}&page=${pageNumber}`
    )
    if (status == 200) {
      allAppraisals.value = data.data.data
      current.value = data.data.pagination.current
      from.value = data.data.pagination.from
      to.value = data.data.pagination.to
      pages.value = data.data.pagination.pages
      total.value = data.data.pagination.total
    }
  } catch (e) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: e.message,
    })
  } finally {
    isLoading.value = false
  }
}

const summaryCardsData = () => {
  return [
    {
      figure: 0,
      bgColor: 'bg-[#0F151F]',
      textColor: 'text-white',
      title: 'Total Team',
      body: 'Overall number of team members',
    },
    {
      figure: 0,
      bgColor: 'bg-white',
      textColor: 'text-black',
      border: 'border',
      borderColor: ' border-gray-800',
      title: 'Total Appraisals Submitted',
      body: 'Total number of team appraisals submitted',
    },
    {
      figure: 0,
      bgColor: 'bg-white',
      textColor: 'text-black',
      border: 'border',
      borderColor: ' border-gray-800',
      title: 'Total Appraised',
      body: 'Total number of team appraisals graded',
    },
  ]
}
const summary = ref(summaryCardsData())

const getSummary = async () => {
  try {
    isLoading.value = true

    const { status, data } = await workplaceRequestsv2(
      'get',
      `appraisals/summary`
    )
    if (status == 200) {
      summary.value[0].figure = data.data.data.total_team
      summary.value[1].figure = data.data.data.total_submitted
      summary.value[2].figure = data.data.data.total_appraised
    }
  } catch (e) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: e.message,
    })
  } finally {
    isLoading.value = false
  }
}
</script>
<template>
  <app-layout>
    <template v-slot:main-content>
      <main class="w-full bg-[#F5F5F5]">
        <section v-if="isLoading">
          <LoadingSpinner />
        </section>
        <section v-else class="p-10">
          <div class="my-3 grid grid-cols-4 space-x-3">
            <Card
              v-for="(card, index) in summary"
              :key="index"
              :figure="card.figure"
              :title="card.title"
              :bgColor="card.bgColor"
              :textColor="card.textColor"
              :body="card.body"
              heigh="h-48"
              width="w-80"
              :border="card.border"
              :borderColor="card.borderColor"
            />
          </div>

          <section class="my-12 flex">
            <DateAndSearch />
          </section>
          <LoadingSpinner v-if="isLoading" />

          <table
            v-if="!isLoading"
            class="my-12 w-full table-auto border border-secondary text-sm"
          >
            <thead class="bg-gray-200">
              <tr class="border border-secondary capitalize">
                <th class="border border-secondary p-3">Staff Number</th>
                <th class="border border-secondary p-2">Name</th>
                <th class="border border-secondary p-3">Department</th>
                <th class="border border-secondary p-3">Role</th>
                <th class="border border-secondary p-3">Status</th>
                <th class="border border-secondary p-3">Submission Date</th>
                <th class="border border-secondary p-3">Action</th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="(employee, index) in allAppraisals" :key="index">
                <td class="border border-secondary p-3 text-center">
                  {{ employee.user_id }}
                </td>
                <td class="border border-secondary p-3 text-center">
                  {{ employee.name }}
                </td>
                <td class="border border-secondary p-3 text-center">
                  {{ employee.department }}
                </td>
                <td class="border border-secondary p-3 text-center">
                  {{ employee.role }}
                </td>
                <td class="border border-secondary p-3 text-center">
                  <div
                    class="border-suburbanblack border py-2 text-center"
                    :class="{
                      'border-green-400 py-1 text-green-400':
                        employee.status === 'Submitted',
                    }"
                  >
                    {{ employee.status }}
                  </div>
                </td>
                <td class="border border-secondary p-3 text-center">
                  {{ employee.submission_date }}
                </td>
                <td class="border border-secondary p-3 text-center underline">
                  <router-link
                    :to="{
                      name: 'staffappraisal',
                      params: { id: employee.user_id },
                    }"
                  >
                    View</router-link
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <!-- Pagination -->
        <AppPagination
          class="m-10"
          :pagination="pagination"
          @fetchRecords="getAllAppraisals"
        />
      </main>
    </template>
  </app-layout>
</template>
