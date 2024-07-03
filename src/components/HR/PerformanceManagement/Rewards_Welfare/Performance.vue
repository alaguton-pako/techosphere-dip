<script setup>
import { ref, onMounted, computed } from 'vue'
import MeritButton from './MeritButton.vue'
import workplaceRequestsv2 from '@/services/workplaceRequestsv2'
import Card from '@/components/Card.vue'

const switchTab = (value) => {
  activeTab.value = value
}
const isLoading = ref(false)
// onMounted(() => {
//   isLoading.value = true
//   getMerits()
//   getQuery()
//   getPointsSummary()
// })

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

const queryCurrent = ref(1)
const queryFrom = ref(0)
const queryTo = ref(0)
const queryPages = ref(1)
const queryTotal = ref(0)
const queryRecordsPerPage = ref(20)
const queryPagination = computed(() => {
  return {
    current: queryCurrent.value,
    from: queryFrom.value,
    to: queryTo.value,
    pages: queryPages.value,
    total: queryTotal.value,
    recordsPerPage: queryRecordsPerPage.value,
  }
})
const activeTab = ref(1)
const merits = ref(null)
const getMerits = async (pageNumber) => {
  try {
    const { status, data } = await workplaceRequestsv2(
      'get',
      `operations/bp/points/history?per_page=${recordsPerPage.value}&page=${pageNumber}`
    )
    if (status == 200) {
      merits.value = data.data.data
      current.value = data.data.pagination.current
      from.value = data.data.pagination.from
      to.value = data.data.pagination.to
      pages.value = data.data.pagination.pages
      total.value = data.data.pagination.total
    }
    isLoading.value = false
  } catch (e) {
    console.log(e)
  }
}

const query = ref(null)
const getQuery = async (pageNumber) => {
  try {
    const { status, data } = await workplaceRequestsv2(
      'get',
      `operations/bp/query/all?per_page=${recordsPerPage.value}&page=${pageNumber}`
    )
    if (status == 200) {
      query.value = data.data.data
      queryCurrent.value = data.data.pagination.current
      queryFrom.value = data.data.pagination.from
      queryTo.value = data.data.pagination.to
      queryPages.value = data.data.pagination.pages
      queryTotal.value = data.data.pagination.total
    }
    isLoading.value = false
  } catch (e) {
    console.log(e)
  }
}

const summaryCardsData = () => {
  return [
    {
      figure: 0,
      bgColor: 'bg-[#0F151F]',
      textColor: 'text-white',
      title: 'Total Rewards',
      body: ' Overall number of Merits & Demerits assigned to Staff',
    },
    {
      figure: 0,
      bgColor: 'bg-white',
      textColor: 'text-black',
      border: 'border',
      borderColor: ' border-gray-800',
      title: 'Total number of Demerit points assigned',
      body: '',
    },
    {
      figure: 0,
      bgColor: 'bg-white',
      textColor: 'text-black',
      border: 'border',
      borderColor: ' border-gray-800',
      title: 'Total Merit Points',
      body: 'Total number of Merit points assigned',
    },
  ]
}
const summary = ref(summaryCardsData())

const getPointsSummary = async () => {
  try {
    const { status, data } = await workplaceRequestsv2(
      'get',
      `operations/bp/points/summary`
    )
    if (status == 200) {
      summary.value[0].figure = data.data.data.sum
      summary.value[1].figure = data.data.data.demerit
      summary.value[2].figure = data.data.data.merit
    }
  } catch (e) {}
  isLoading.value = false
}
</script>

<template>
  <app-layout>
    <template v-slot:main-content>
      <main class="w-full bg-[#F5F5F5]">
        <section class="p-10">
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

          <section class="flex flex-row-reverse items-end justify-between">
            <div class="flex flex-row-reverse items-center">
              <div class="mx-4 flex items-center">
                <input
                  placeholder="Search"
                  class="w-[230px] rounded-l-md border border-r-0 border-secondary p-2 focus:outline-none"
                />
                <button
                  class="h-full rounded-r-md border border-secondary bg-primary-gray px-3 py-2.5"
                >
                  <img src="../../../../assets/search-white.svg" alt="" />
                </button>
              </div>
              <div>
                <select
                  class="w-[230px] rounded-md border border-secondary p-2.5 focus:outline-none"
                >
                  <option value="" selected>Search Custom Fields</option>
                  <option value="email">Email</option>
                  <option value="phone">Phone</option>
                  <option value="name">Name</option>
                </select>
              </div>
            </div>
          </section>
          <section class="">
            <MeritButton :activeTab="activeTab" @switchTab="switchTab" />
          </section>
          <LoadingSpinner v-if="isLoading" />

          <div v-if="activeTab == 1">
            <table
              v-if="!isLoading"
              class="my-3 w-full table-auto border border-secondary text-sm"
            >
              <thead class="bg-gray-200">
                <tr class="border border-secondary capitalize">
                  <th class="border border-secondary p-3">Staff Name</th>
                  <th class="border border-secondary p-3">Role</th>
                  <th class="border border-secondary p-3">Point</th>
                  <th class="border border-secondary p-3">Sanction Type</th>
                  <th class="border border-secondary p-3">Submission Date</th>
                  <th class="border border-secondary p-3">Status</th>
                  <th class="border border-secondary p-3">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(merit, index) in merits" :key="index">
                  <td class="border border-secondary p-3 text-center">
                    {{ merit.user }}
                  </td>
                  <td class="border border-secondary p-3 text-center">
                    {{ merit.role }}
                  </td>
                  <td class="border border-secondary p-3 text-center">
                    {{ merit.points }}
                  </td>
                  <td class="border border-secondary p-3 text-center">
                    {{ merit.type }}
                  </td>
                  <td class="border border-secondary p-3 text-center">
                    {{ merit.date }}
                  </td>
                  <td class="border border-secondary p-3 text-center">
                    <div
                      class="border py-2 text-center uppercase"
                      :class="{
                        'border-gray-400 text-gray-600': merit.status == 'Sent',
                        'border-[#FD4F00] text-[#FD4F00]':
                          merit.status == 'Appealed',
                        'border-[#D50036] text-[#D50036]':
                          merit.status == 'Closed',
                      }"
                    >
                      {{ merit.status }}
                    </div>
                  </td>
                  <td
                    class="cursor-pointer border border-secondary p-3 text-center underline"
                  >
                    <router-link
                      :to="
                        merit.type === 'Demerit'
                          ? { name: 'demerit', params: { id: merit.id } }
                          : { name: 'merit', params: { id: merit.id } }
                      "
                    >
                      View
                    </router-link>
                  </td>
                </tr>
              </tbody>
            </table>
            <!-- Pagination -->
            <AppPagination
              class="m-10"
              :pagination="pagination"
              @fetchRecords="getMerits"
            />
          </div>

          <section v-if="activeTab == 2">
            <table
              v-if="activeTab == 2"
              class="my-3 w-full table-auto border border-secondary text-sm"
            >
              <thead class="bg-gray-200">
                <tr class="border border-secondary capitalize">
                  <th class="border border-secondary p-3">Staff Name</th>
                  <th class="border border-secondary p-3">Role</th>
                  <th class="border border-secondary p-3">Sanction Type</th>
                  <th class="border border-secondary p-3">Submission Date</th>
                  <th class="border border-secondary p-3">Status</th>
                  <th class="border border-secondary p-3">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in query" :key="index">
                  <td class="border border-secondary p-3 text-center">
                    {{ item.name }}
                  </td>
                  <td class="border border-secondary p-3 text-center">
                    {{ item.role }}
                  </td>
                  <td class="border border-secondary p-3 text-center">
                    {{ item.sanction_type }}
                  </td>
                  <td class="border border-secondary p-3 text-center">
                    {{ item.submission_date }}
                  </td>
                  <td class="border border-secondary p-3 text-center">
                    <div
                      class="border py-2 text-center uppercase"
                      :class="{
                        'border-gray-400 text-gray-400': item.status == 'Sent',
                        'border-[#FD4F00] text-[#FD4F00]':
                          item.status == 'Appealed',
                        'border-[#D50036] text-[#D50036]':
                          item.status == 'Closed',
                      }"
                    >
                      {{ item.status }}
                    </div>
                  </td>
                  <td
                    class="cursor-pointer border border-secondary p-3 text-center underline"
                  >
                    <router-link
                      :to="
                        item.sanction_type === 'Disciplinary'
                          ? {
                              name: 'disciplinary-view',
                              params: { id: item.id },
                            }
                          : {
                              name: 'query',
                              params: { id: item.id },
                            }
                      "
                    >
                      View
                    </router-link>
                  </td>
                </tr>
              </tbody>
            </table>
            <!-- Pagination -->
            <AppPagination
              class="m-10"
              :pagination="queryPagination"
              @fetchRecords="getQuery"
            />
          </section>
        </section>
      </main>
    </template>
  </app-layout>
</template>
