<script setup>
import { reactive, ref, onMounted, computed } from 'vue'
import SelectDate from '@/components/SelectDate.vue'
import Search from '@/components/Search.vue'
import Summary from '@/components/SalesObligation/LeadManagement/Summary.vue'
import workplaceRequestsv3 from '../../services/workplaceRequestv3'
import Swal from 'sweetalert2'
// import AppPagination from '@/AppPagination.vue';

onMounted(() => {
  getWalletShare(current.value)
})

const requestCompleted = ref(false)
const current = ref(1)
const from = ref(0)
const to = ref(0)
const pages = ref(0)
const total = ref(0)
const isLoading = ref(true)

const newLead = ref(false)
const dashboardData = reactive([
  {
    stat: '1300',
    title: 'Total Leads',
    description: 'overall number of Leads',
  },
  {
    stat: '400',
    title: 'Total Conversions',
    description: 'total number of Leads converted',
  },
])

const pagination = computed(() => {
  return {
    current: current.value,
    from: from.value,
    to: to.value,
    pages: pages.value,
    total: total.value,
  }
})

const walletShare = ref([])
const getWalletShare = async (pageNumber) => {
  requestCompleted.value = false
  try {
    const { status, data } = await workplaceRequestsv3(
      'post',
      `wallet-shares?records_per_page=${to.value}&page_number=${pageNumber}`
    )
    if (status == 401) {
    }
    if (status == 200) {
      walletShare.value = data.data
      console.log(data)
      isLoading.value = false
      current.value = data.pagination.current_page
      from.value = data.pagination.current_page
      to.value = data.pagination.size
      pages.value = data.pagination.pageCount
      total.value = data.pagination.totalCount
      requestCompleted.value = true
    }
  } catch (e) {
    alert(e.message)
  }
}

</script>

<template>
  <div>
    <!-- <section class="my-14 flex w-full flex-nowrap gap-6 overflow-x-scroll overscroll-x-contain ">
            <div v-for="(item, index) in dashboardData" :key="index"
                class="border border-primary-gray rounded-md w-[250px] px-3 py-5 text-sm flex flex-col bg-[url('/src/assets/users.svg')] bg-no-repeat bg-right-bottom bg-white"
                :class="{ 'bg-black': index === 0 }">
                <div class="font-semibold text-3xl mb-4">{{ item.stat }}</div>
                <div class="font-semibold">{{ item.title }} </div>
                <span span class="text-xs"> {{ item.description }}</span>
            </div>
        </section> -->
    <Summary></Summary>
    <section>
      <div class="my-5 flex items-center justify-end">
        <Search />
        <div class="flex space-x-3 rounded-md border border-gray-500 px-4 py-2">
          <p>Filter</p>
          <img src="../../assets/down-arrow.svg" alt="" class="w-3" />
        </div>
      </div>
    </section>

    <section>
      <table
        class="w-full table-auto border border-secondary text-center text-sm"
      >
        <thead class="bg-gray-200 text-xs uppercase">
          <tr class="border border-secondary">
            <th class="border border-secondary p-3">#</th>
            <th class="border border-secondary p-3">Business Name</th>
            <th class="border border-secondary p-3">Sector</th>
            <th class="border border-secondary p-3">Profile</th>
            <th class="border border-secondary p-3">Wallet size</th>
            <th class="border border-secondary p-3">action</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(customer, index) in walletShare"
            :key="customer.customer.id"
          >
            <td class="border border-secondary p-4">{{ index + 1 }}</td>
            <td class="border border-secondary p-4 text-left">
              {{ customer.business_name }}
            </td>
            <td class="border border-secondary p-4">
              {{ customer.customer.sector }}
            </td>
            <td class="border border-secondary p-4">
              {{ customer.customer.profile_type }}
            </td>
            <td class="border border-secondary p-4">
              {{
                new Intl.NumberFormat('en-NG', {
                  style: 'currency',
                  currency: 'NGN',
                }).format(customer.customer.wallet_size)
              }}
            </td>
            <td class="border-b border-secondary hover:text-red-600">
              <router-link
                :to="{
                  name: 'key wallet details',
                  params: { id: customer.customer.id },
                }"
                class="underline"
                >View</router-link
              >
            </td>
          </tr>
        </tbody>
      </table>
        <!-- Pagination -->
      <AppPagination
        class="mx-0 my-8"
        v-if="requestCompleted"
        :pagination="pagination"
        @fetchRecords="getWalletShare"
      />
    </section>
  </div>
</template>
