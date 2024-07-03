<script setup>
import AppPagination from '../AppPagination.vue'
import AppLayout from '../../layouts/AppLayout.vue'
import AppHorizontalNavigation from '../AppHorizontalNavigation.vue'
import { onMounted, ref } from 'vue'
// import vendorRequest from '../../services/vendor.request.js';
import expenditureRequests from '@/services/expenditureRequests'
import { useUserStore } from '../../stores/userStore'
import $ from 'jquery'
import 'datatables.net-dt'
import 'datatables.net-dt/css/dataTables.dataTables.min.css'

const userStore = useUserStore()

const isLoading = ref(false)

onMounted(() => {
  getRequests()
})

const datatable = () => {
  $(function () {
    $('#table').DataTable({
      ordering: false,
      bDestroy: true,
      pageLength: 5,
      lengthMenu: [
        [5, 10, 20],
        [5, 10, 20],
      ],
    })
  })
}

const getDhRequests = async () => {
  const { status, data } = await expenditureRequests(
    'get',
    `core/expenditure/dhrequest/${userStore.$state.user.email}`
  )
  if (status === 200) {
    requests.value = data.data
    datatable()
  }
}

const convDate = (val) => {
  const unixTimestamp = val * 1000

  // Create a new Date object using the Unix timestamp
  const date = new Date(unixTimestamp)

  // Format the date as a string
  const formattedDate = date.toLocaleString()

  return formattedDate
}
const comment = ref('')

const requests = ref([])

const getRequests = async () => {
  if (userStore.$state.user.position == 'CTO') {
    getDhRequests()
  } else {
    const { status, data } = await expenditureRequests(
      'get',
      `core/expenditure/all-aies`
    )
    if (status === 200) {
      requests.value = data.data
      datatable()
    }
    console.log(data.data)
  }
}

const amount_payable = ref(0)

const respondToRequest = async (id, amount) => {
  const { status, data } = await expenditureRequests(
    'post',
    `core/expenditure/pay/` + id + `/${amount}`
  )

  if (status === 200) {
    getRequests()
  }
}

const approveRequest = async (response, id, comment) => {
  const { status, data } = await expenditureRequests(
    'post',
    `core/expenditure/dhaie/approve`,
    [
      {
        id: id,
        comment: comment,
        status: response,
      },
    ]
  )
}

const procureItem = async (id, amount) => {
  const { status, data } = await expenditureRequests(
    'post',
    `core/expenditure/aie/procure`,
    {
      id: id,
      amount: amount,
    }
  )

  if (status === 200) {
    getRequests()
  }
}

const formatAmount = (amount) => {
  return amount.toLocaleString()
}
</script>

<template>
  <app-layout>
    <template v-slot:main-content>
      <main class="w-full bg-[#F5F5F5] pl-[260px]">
        <AppHorizontalNavigation />
        <section class="p-8">
          <section class="my-5 flex items-end justify-end">
            <div class="flex flex-row-reverse items-center">
              <div class="mx-4 flex items-center">
                <!-- <input
                  placeholder="Search"
                  class="w-[230px] rounded-l-md border border-r-0 border-secondary p-2 focus:outline-none"
                /> -->
                <!-- <button
                  class="h-full rounded-r-md border border-secondary bg-primary-gray px-3 py-2.5"
                >
                  <img src="../../assets/search-white.svg" alt="" />
                </button> -->
              </div>
            </div>
          </section>
          <div class="overflow-x-scroll overscroll-x-contain">
            <table
              id="table"
              class="mt-10 w-full table-auto border border-secondary text-sm"
            >
              <thead class="bg-gray-200">
                <tr class="border border-secondary capitalize">
                  <!-- <th class="border border-secondary p-3">Purchase Order</th> -->
                  <th class="border border-secondary p-3">Item</th>
                  <th class="border border-secondary p-3">Requested By</th>
                  <th class="border border-secondary p-3">Amount</th>
                  <!-- <th class="border border-secondary p-3">Reason</th> -->
                  <th class="border border-secondary p-3">Approval By</th>
                  <th class="border border-secondary p-3">Approved On</th>
                  <th class="border border-secondary p-3">Status</th>
                  <th class="border border-secondary p-3">Payment Status</th>
                  <th class="border border-secondary p-3">
                    Procurement Status
                  </th>
                  <th class="border border-secondary p-3">Procured On</th>
                  <th class="border border-secondary p-3">Action</th>
                </tr>
              </thead>
              <tbody v-if="requests.length > 0">
                <tr>
                  <!-- <td class="border border-secondary p-3 text-center">{{request.purchase_orderid}}</td> -->
                  <td class="border border-secondary p-3 text-center">
                    {{ request.product.product_name }}
                  </td>
                  <td class="border border-secondary p-3 text-center">
                    {{ request.requested_by }}
                  </td>
                  <td class="border border-secondary p-3 text-center">
                    {{ formatAmount(request.amount_spendable) }}
                  </td>
                  <!-- <td class="border border-secondary p-3 text-center">{{request.reason}}</td> -->
                  <td class="border border-secondary p-3 text-center">
                    {{ request.dh_approval }}
                  </td>
                  <td
                    class="border border-secondary p-3 text-center"
                    v-if="request.dhapproved_on == null"
                  >
                    N/A
                  </td>
                  <td
                    class="border border-secondary p-3 text-center"
                    v-if="request.dhapproved_on != null"
                  >
                    {{ convDate(request.dhapproved_on) }}
                  </td>
                  <td
                    class="border border-secondary bg-green-600 p-3 text-center text-white"
                    v-if="request.dhapproval_status == 'approved'"
                  >
                    {{ request.dhapproval_status }}
                  </td>
                  <td
                    class="border border-secondary bg-red-600 p-3 text-center text-white"
                    v-if="request.dhapproval_status != 'approved'"
                  >
                    {{ request.dhapproval_status }}
                  </td>
                  <td
                    class="border border-secondary bg-green-600 p-3 text-center text-white"
                    v-if="request.payment_status == 'paid'"
                  >
                    {{ request.payment_status }}
                  </td>
                  <td
                    class="border border-secondary bg-red-600 p-3 text-center text-white"
                    v-if="request.payment_status != 'paid'"
                  >
                    {{ request.payment_status }}
                  </td>
                  <td
                    class="border border-secondary bg-yellow-600 p-3 text-center text-white"
                    v-if="request.procurement_status == 'pending'"
                  >
                    {{ request.procurement_status }}
                  </td>
                  <td
                    class="border border-secondary bg-green-600 p-3 text-center text-white"
                    v-if="request.procurement_status == 'true'"
                  >
                    {{ request.procurement_status }}
                  </td>
                  <td
                    class="border border-secondary p-3 text-center"
                    v-if="request.procured_on == null"
                  >
                    N/A
                  </td>
                  <td
                    class="border border-secondary p-3 text-center"
                    v-if="request.procured_on != null"
                  >
                    {{ convDate(request.procured_on) }}
                  </td>
                  <td
                    class="flex border border-secondary p-3 text-center"
                    v-if="
                      userStore.$state.user.unit == 'Corporate Services' ||
                      userStore.$state.user.unit == 'Finance' ||
                      userStore.$state.user.unit == 'Business Performance'
                    "
                  >
                    <form @submit.prevent="respondToRequest(request.id, 0)">
                      <button
                        v-if="
                          userStore.$state.user.unit == 'Finance' &&
                          request.payment_status != 'paid'
                        "
                        :disabled="request.procured_on == null"
                        class="mr-2 rounded bg-green-500 pb-1 pl-5 pr-5 pt-1 text-white hover:bg-green-700 disabled:bg-slate-600"
                      >
                        Pay
                      </button>
                      <br />
                    </form>
                    <!-- @click="procureItem(request.id,request.procured_amount )" -->
                    <form
                      action=""
                      @submit.prevent="
                        procureItem(request.id, request.procured_amount)
                      "
                    >
                      <label for="">Procured Amount</label>
                      <input
                        :disabled="
                          request.payment_status == 'paid' ||
                          request.procurement_status == 'true' ||
                          request.dhapproval_status == 'rejected'
                        "
                        required
                        type="number"
                        step="any"
                        placeholder="amount"
                        class="m-2 p-1 text-black"
                        v-model="request.procured_amount"
                      />

                      <button
                        type="submit"
                        :disabled="
                          request.procurement_status == 'true' ||
                          request.dhapproval_status == 'rejected'
                        "
                        v-if="
                          userStore.$state.user.unit == 'Corporate Services' ||
                          userStore.$state.user.unit == 'Supply Chain' ||
                          userStore.$state.user.unit == 'Business Performance'
                        "
                        class="rounded bg-blue-500 pb-1 pl-5 pr-5 pt-1 text-white hover:bg-green-700 disabled:bg-slate-500"
                      >
                        Procure
                      </button>
                    </form>
                  </td>
                </tr>
              </tbody>

              <tbody v-else>
                <span class="loader">
                  <!-- No Data -->
                </span>
              </tbody>
            </table>
            <table class="w-full table-auto text-center" id="table">
              <thead>
                <tr>
                  <th>Purchase Order</th>
                  <th>Item</th>
                  <th>Requested By</th>
                  <th>Amount</th>
                  <th>Reason</th>
                  <th>Comment</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>purchase id</td>
                  <!-- <td>{{ request.purchase_orderid }}</td> -->
                  <td>product name</td>
                  <!-- <td>{{ request.product.product_name }}</td> -->
                  <td>requested by</td>
                  <!-- <td>{{ request.requested_by }}</td> -->
                  <td>amount spent</td>
                  <!-- <td>{{ formatAmount(request.amount_spendable) }}</td> -->
                  <td>reason</td>
                  <!-- <td>{{ request.reason }}</td> -->
                  <td class="border border-primary-gray px-3 py-2 text-sm">
                    <textarea name="" id="" cols="30" rows="5"></textarea>
                  </td>
                  <td class="border border-primary-gray px-3 py-2 text-sm">
                    <div class="flex p-2">
                      <button
                        class="mr-2 rounded-md bg-primary-green px-3 py-2 text-xs text-white hover:bg-green-700"
                      >
                        Approve
                      </button>
                      <button
                        class="rounded-md bg-primary-red px-3 py-2 text-xs text-white hover:bg-red-700"
                      >
                        Reject
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </template>
    <section>
      <AppPagination class="m-10" />
    </section>
  </app-layout>
</template>
