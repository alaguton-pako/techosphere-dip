<script setup>
import { ref, onMounted, computed } from 'vue'
import axios from 'axios'
import AppLayout from '../layouts/AppLayout.vue'
import AppHorizontalNavigation from '../components/AppHorizontalNavigation.vue'
import AppPagination from '../components/AppPagination.vue'
import { useUserStore } from '../stores/userStore'
import { useFormatter } from '../composables/NumberFormatter'
import LoadingSpinner from '@/components/LoadingSpinner.vue'
import envVariables from '@/config/config.js'
import Swal from 'sweetalert2'
const activeTab = ref('all customers')
const filterParam = ref(null)

const store = useUserStore()
const customerData = ref(null)
let totalCustomers = ref(null)
const tabItems = ['All Customers', 'business internet', 'business wifi']
const toggleTab = (data) => (activeTab.value = data)

const searchField = ref('')
const searchPayload = ref({ search_field: {} })
const searchParam = ref('')
const requestComplete = ref(false)
const notification = ref(null)
const customersList = ref([])
const current = ref(1)
const from = ref(0)
const to = ref(0)
const pages = ref(1)
const total = ref(0)
const recordsPerPage = ref(20)
const isloading = ref(true)
const isNotFound = ref(false)
const isServerError = ref(false)

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

const getCustomers = async (pageNumber) => {
  try {
    if (searchParam.value) {
      searchPayload.value.search_field = {}
      searchPayload.value.search_field[searchField.value] = searchParam.value
    }
    if (current.value < 1 || (pages.value > 0 && current.value > pages.value)) {
      isloading.value = false
      return
    }
    isloading.value = true
    const res = await axios.post(
      `${envVariables.CUSTOMERSERVICEAPP_BASE_URL}?filter=${filterParam.value}&page_number=${pageNumber}&search=${searchParam.value}&records_per_page=${recordsPerPage.value}`,
      searchPayload.value,
      {
        headers: {
          Authorization: `Bearer ${store.$state.customerToken}`,
        },
      }
    )
    if (res.status == 200) {
      current.value = res.data.pagination.current_page
      from.value = res.data.pagination.from
      to.value = res.data.pagination.to
      pages.value = res.data.pagination.pageCount
      total.value = res.data.pagination.totalCount
      totalCustomers = res.data.pagination.totalCount
      requestComplete.value = true
      customerData.value = res.data.data
      // console.log(res)
    } else if (res.status == 500) {
      isServerError.value = true
    } else if (res.status == 404) {
      isNotFound.value = true
    }
    isloading.value = false
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: error.message,
    })
    console.error('Error fetching data:', error)
  }
}

onMounted(() => {
  getCustomers(current.value)
})
</script>

<template>
  <app-layout>
    <template v-slot:main-content>
      <main class="w-full bg-[#F5F5F5] pl-[260px]">
        <AppHorizontalNavigation />
        <section class="p-10">
          <nav
            class="flex items-center border border-gray-200 bg-white p-3 font-semibold capitalize text-gray-600"
          >
            <span
              v-for="(item, index) in tabItems"
              :key="index"
              class="mx-6 cursor-pointer text-center"
              :class="{
                'text-primary': activeTab.toLowerCase() === item.toLowerCase(),
              }"
              @click.stop="
                (event) => {
                  toggleTab(event.target.textContent.toLowerCase())
                  filterParam =
                    event.target.textContent.toLowerCase() === 'all customers'
                      ? null
                      : event.target.textContent.toLowerCase().replace(' ', '_')
                  searchPayload.search_field = {}
                  getCustomers(current)
                }
              "
              >{{ item }}
            </span>
          </nav>

          <section class="my-12 flex items-end justify-between">
            <div
              class="grid w-[250px] place-content-center rounded bg-primary-black py-6 text-center text-white"
            >
              <h2 class="text-xl capitalize">{{ activeTab }}</h2>
              <div class="text-[35px] font-bold">{{ totalCustomers }}</div>
            </div>
            <div class="flex flex-row-reverse items-center">
              <div class="mx-4 flex items-center">
                <input
                  v-model="searchParam"
                  type="search"
                  placeholder="Search"
                  class="w-[230px] rounded-l-md border border-r-0 border-secondary p-2 focus:outline-none"
                />
                <button
                  @click.prevent="getCustomers(current)"
                  class="h-full rounded-r-md border border-secondary bg-primary-gray px-3 py-2.5"
                >
                  <img src="../assets/search-white.svg" alt="" />
                </button>
              </div>

              <select
                class="rounded-md border border-secondary p-2.5 focus:outline-none"
                v-model="searchField"
              >
                <option value="" selected>Search Custom Fields</option>
                <option value="email">Email</option>
                <option value="phone">Phone</option>
                <option value="name">Name</option>
              </select>
            </div>
          </section>

          <table class="w-full table-auto border border-secondary text-sm">
            <thead class="bg-gray-200">
              <tr class="border border-secondary capitalize">
                <th class="border border-secondary p-2">Name</th>
                <th class="border border-secondary p-3">Email Address</th>
                <th class="border border-secondary p-3">Phone number</th>
                <th class="border border-secondary p-3">Address</th>
                <th class="border border-secondary p-3">product name</th>
                <th class="border border-secondary p-3">Plan</th>
              </tr>
            </thead>
            <div
              class="p-5 text-2xl font-semibold text-red-600"
              v-if="isServerError"
            >
              Internal Server Error : Please try Again
            </div>
            <div
              class="p-5 text-2xl font-semibold text-red-600"
              v-if="isNotFound"
            >
              Page Not Found: Please try Again
            </div>
            <tbody>
              <tr v-for="(item, index) in customerData" :key="index">
                <td class="border border-secondary p-4">
                  <div class="font-medium text-primary underline">
                    {{ item.business_name }}
                  </div>

                  <!-- <router-link
                    v-else
                    :to="{
                      name: 'customerDetail',
                      params: { id: item.customer.id },
                    }"
                    class="font-medium text-primary underline"
                    >{{ item.business_name }}
                  </router-link> -->
                </td>

                <td class="border border-secondary p-3">
                  {{ item.customer.email_address }}
                </td>

                <td class="border border-secondary p-3">
                  {{ item.customer.phone }}
                </td>
                <td class="border border-secondary p-3">
                  {{ item.customer.home_address }}
                </td>
                <td class="border border-secondary p-3">
                  {{ item.subscription_name }}
                </td>
                <td class="border border-secondary p-3">
                  {{ item.name_of_plan }}
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <loading-spinner v-if="isloading" />
        <!-- Pagination -->
        <AppPagination
          class="m-10"
          v-if="requestComplete"
          :pagination="pagination"
          @fetchRecords="getCustomers"
        />
      </main>
    </template>
  </app-layout>
</template>
