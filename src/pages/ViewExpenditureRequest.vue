<script setup>
import AppPagination from '../components/AppPagination.vue'
import AppLayout from '../layouts/AppLayout.vue';
import AppHorizontalNavigation from '../components/AppHorizontalNavigation.vue';
import coreRequest from '../services/vendor.request'
import { onMounted, ref } from 'vue'


onMounted(() => {
  getRequests()
})

const comment = ref("")


const requests = ref([])

  const getRequests = async () => {
    const { status, data } = await coreRequest("get", `core/expenditure/dhrequest/b.ayonote@suburbanfiberco.com`);
    if (status === 200) {
       requests.value = data.data
    }
  }

  const respondToRequest = async (response, id, comment) => {
    const { status, data } = await coreRequest(
        "post", `core/expenditure/dhaie/approve`, [{
          id: id,
          comment: comment,
          status: response
        }]
    );

    if (status === 200) {
      getRequests()
    }
  }

  const formatAmount = (amount) => {
      // Use toLocaleString to format the amount
      return amount.toLocaleString();
  }


</script>

<template>
  <app-layout>
    <template v-slot:main-content>
      <main class="w-full bg-[#F5F5F5]">
        <AppHorizontalNavigation />
        <section class="p-5">
          <section class="my-5 flex items-end justify-end">
            <div class="flex flex-row-reverse items-center">
              <div class="mx-4 flex items-center">
                <input
                  placeholder="Search"
                  class="w-[230px] rounded-l-md border border-r-0 border-secondary p-2 focus:outline-none"
                />
                <button
                  class="h-full rounded-r-md border border-secondary bg-primary-gray px-3 py-2.5"
                >
                  <img src="../assets/search-white.svg" alt="" />
                </button>
              </div>
              
            </div>
          </section>
          <table class="w-full table-auto border border-secondary text-sm mt-10">
            <thead class="bg-gray-200">
              <tr class="border border-secondary capitalize">
                <th class="border border-secondary p-3">Purchase Order</th>
                <th class="border border-secondary p-3">Item</th>
                <th class="border border-secondary p-3">Requested By</th>
                <th class="border border-secondary p-3">Amount</th>
                <th class="border border-secondary p-3">Reason</th>
                <th class="border border-secondary p-3">Comment</th>
                <th class="border border-secondary p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(request, index) in requests" :key="request.id">
                <td class="border border-secondary p-3 text-center">{{request.purchase_orderid}}</td>
                <td class="border border-secondary p-3 text-center">{{request.purchase_orderid}}</td>
                <td class="border border-secondary p-3 text-center">{{request.product.product_name}}</td>
                <td class="border border-secondary p-3 text-center">{{request.requested_by}}</td>
                <td class="border border-secondary p-3 text-center">{{formatAmount(request.amount)}}</td>
                <td class="border border-secondary p-3 text-center">{{request.reason}}</td>
                <td class="border border-secondary p-3 text-center">
                  <textarea
                  v-model="request.comment" 
                      id="reason"
                      readonly
                      placeholder=".....Comment....."
                      class="my-2 w-[150px] rounded-md border border-gray-300 p-2 text-sm text-gray-900 focus:outline-none focus:ring-0 dark:bg-white dark:text-black dark:placeholder-gray-400"
                      required>
                  </textarea>
                </td>
                <td class="border border-secondary p-3 text-center">
                    <button
                    @click="respondToRequest('approved', request.id, request.comment)"
                      class="mr-2 rounded bg-green-500 px-2 py-1 text-white hover:bg-green-700"
                    >
                      Approved
                    </button>
                    <button
                    @click="respondToRequest('rejected', request.id, request.comment)"
                      class="rounded bg-[#D50036] px-2 py-1 text-white hover:bg-red-400"
                    >
                      Reject
                    </button>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </template>
    <section>
      <AppPagination class="m-10" />
    </section>
  </app-layout>
</template>
