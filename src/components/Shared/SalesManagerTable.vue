<template>
  <table class="w-full table-auto border border-secondary text-center text-sm">
    <thead class="bg-gray-200 text-xs uppercase">
      <tr class="border border-secondary">
        <th class="border border-secondary p-3">#</th>
        <th class="border border-secondary p-3">Business Name</th>
        <th class="border border-secondary p-3">Contact Name</th>
        <th class="border border-secondary p-3">Email</th>
        <th class="border border-secondary p-3">Phone</th>
        <th class="border border-secondary p-3">Registered on</th>

        <th class="border border-secondary p-3">product</th>
        <!-- <th class="border border-secondary p-3">status</th> -->
        <th class="border border-secondary p-3">action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(account, index) in accounts" :key="index">
        <td class="border border-secondary p-4">{{ account.id }}</td>
        <td class="border border-secondary p-4">{{ account.business_name }}</td>
        <td class="border border-secondary p-4">
          {{ account.contact_firstname }} {{ account.contact_lastname }}
        </td>
        <td class="border border-secondary p-4">
          {{ account.email }}
        </td>
        <td class="border border-secondary p-4">{{ account.phone_number }}</td>
        <td class="border border-secondary p-4 text-center">
          <p>{{ }}</p>
          <p>{{ account.date_registered }}</p>
        </td>
        <td class="border border-secondary p-4">{{ account.plan + ' - ' + account.product }}</td>
        <!-- <td class="border border-secondary p-4">
          <div class="text-green-500 border border-green-500 p-2">
            {{ account.source }}
          </div>
        </td> -->
        <td>
          <router-link :to="{
            // name: 'my customer details',customerDetail
            name: 'customerDetail',
            params: { id: account.email },
          }" class="underline">View</router-link>
        </td>
      </tr>
    </tbody>
  </table>
  <!-- <AppPagination /> -->
</template>

<script setup>
import { reactive, ref, computed, onMounted } from "vue";
import leadRequest from "@/services/leadRequest";
import { useUserStore } from "@/stores/userStore.js";
const props = defineProps(["url"]);
const store = useUserStore();
const current = ref(1);
const from = ref(0);
const to = ref(0);
const pages = ref(1);
const total = ref(0);
const recordsPerPage = ref(20);
const start_date = ref("");
const end_date = ref("");
const isLoading = ref(false);
const newLead = ref(false);
const triedRefreshToken = ref(false);
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

onMounted(() => {
  isLoading.value = true;
  // start_date.value.setDate(start_date.value.getDate() - 30);
  // start_date.value = start_date.value.toISOString().split("T")[0];
  // end_date.value.setDate(end_date.value.getDate() + 1);
  // end_date.value = end_date.value.toISOString().split("T")[0];
  getLeads(current.value);
});
const accounts = ref([]);
const getLeads = async (pageNumber) => {
  try {
    isLoading.value = true;
    accounts.value = [];
    const { status, data } = await leadRequest(
      "get",
      `${props.url}records_per_page=${recordsPerPage.value}&page_number=${pageNumber}`
    );
    if (status == 200) {
      accounts.value = data.result;
      current.value = data.pagination?.current_page;
      from.value = data.pagination?.from;
      to.value = data.pagination?.to;
      pages.value = data.pagination?.pageCount;
      total.value = data.pagination?.totalCount;
      triedRefreshToken.value = true;
    }
    if (status == 401 && triedRefreshToken.value == false) {
      triedRefreshToken.value = true;
      await auth();
      await getLeads(pageNumber);
    }
    isLoading.value = false;
  } catch (e) {
    console.log(e);
    alert(e.message);
  }
  isLoading.value = false;
};
</script>
