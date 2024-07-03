<script setup>
import { reactive, ref, computed, onMounted } from "vue";
import Search from "@/components/Search.vue";
import AppPagination from "../../AppPagination.vue";
import leadRequest from "@/services/leadRequest";
import dipRequest from "@/services/dip.request";
import workplaceRequestsv2 from "@/services/workplaceRequestsv2";
import { useUserStore } from '../../../stores/userStore'
import { auth } from "../../../services/apiGatewayRequest";

const store = useUserStore()
const current = ref(1);
const from = ref(0);
const to = ref(0);
const pages = ref(1);
const total = ref(0);
const recordsPerPage = ref(20);
const start_date = ref(new Date());
const end_date = ref(new Date());
const isLoading = ref(false);
const pagination = computed(() => {
  return {
    current: current.value,
    from: from.value,
    to: to.value,
    pages: pages.value,
    total: total.value,
    recordsPerPage: recordsPerPage.value,
  };
});

const dashboardData = reactive([
  {
    stat: "0",
    title: "Total Survey Reports",
    description: "Overall number of reports received",
  },
]);
// onMounted(() => {
//   isLoading.value = true;
//   start_date.value.setDate(start_date.value.getDate() - 30);
//   start_date.value = start_date.value.toISOString().split("T")[0];
//   end_date.value.setDate(end_date.value.getDate() + 1);
//   end_date.value = end_date.value.toISOString().split("T")[0];
//   //   getLeads(current.value);
// });
const accounts = ref([]);
const getLeads = async (pageNumber) => {
  try {
    isLoading.value = true;
    accounts.value = [];
    const { status, data } = await leadRequest(
      "get",
      `leads/accounts?email=${store.user.email}&records_per_page=${recordsPerPage.value}&page_number=${pageNumber}&start_date=${start_date.value}&end_date=${end_date.value}`
    );
    if (status == 200) {
      accounts.value = data.data;
      current.value = data.pagination.current_page;
      from.value = data.pagination.from;
      to.value = data.pagination.to;
      pages.value = data.pagination.pageCount;
      total.value = data.pagination.totalCount;
    }
    if (status == 401) {
      auth();
      getLeads(pageNumber);
    }
    isLoading.value = false;
  } catch (e) {
    console.log(e);
    alert(e.message);
  }
  isLoading.value = false;
};
</script>
<template>
  <div>
    <section>
      <div class="flex justify-end items-center py-4">
        <Search />
      </div>
    </section>

    <section>
      <table class="w-full table-auto border border-secondary text-center text-sm">
        <thead class="bg-gray-200 text-xs uppercase">
          <tr class="border border-secondary">
            <th class="border border-secondary p-3">name</th>
            <th class="border border-secondary p-3">total accounts</th>
            <th class="border border-secondary p-3">total active</th>
            <th class="border border-secondary p-3">total inactive</th>
            <th class="border border-secondary p-3">action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border border-secondary p-4">Victor Moses</td>
            <td class="border border-secondary p-4">100</td>
            <td class="border border-secondary p-4">70</td>
            <td class="border border-secondary p-4">30</td>
            <td>
              <router-link :to="{
                name: 'manager details',
                params: { id: 123 },
              }" class="underline cursor-pointer">View</router-link>
            </td>
          </tr>
        </tbody>
      </table>
      <!-- <AppPagination /> -->
    </section>
  </div>
</template>
