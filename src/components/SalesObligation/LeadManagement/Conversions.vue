<script setup>
import { computed, onMounted, reactive, ref } from "vue";
import SelectDate from "@/components/SelectDate.vue";
import Search from "@/components/Search.vue";
import AppPagination from "@/components/AppPagination.vue";
import leadRequest from "@/services/leadRequest";
import Summary from "@/components/SalesObligation/LeadManagement/Summary.vue";
import LeadsTable from "@/components/SalesObligation/LeadManagement/LeadsTable.vue";
import { auth } from "../../../services/apiGatewayRequest";

const current = ref(1);
const from = ref(0);
const to = ref(0);
const pages = ref(1);
const total = ref(0);
const recordsPerPage = ref(20);
const start_date = ref(null);
const end_date = ref(null);
const isLoading = ref(true);
const leads = ref([
  {
    id: 2,
    business_name: null,
    contact_firstname: null,
    contact_lastname: null,
    email_address: null,
    source: null,
    product_interest: null,
    stage: null,
    phone_number: null,
    created_at: null,
    leads_assignment: {
      assigned_name: null,
      assigned_email: null,
    },
  },
]);

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
  // isLoading.value = true;
  // start_date.value.setDate(start_date.value.getDate() - 30);
  // start_date.value = start_date.value.toISOString().split("T")[0];
  // end_date.value.setDate(end_date.value.getDate() + 1);
  // end_date.value = end_date.value.toISOString().split("T")[0];
  getLeads(pages.value);
});
const getLeads = async (pageNumber) => {
  try {
    isLoading.value = true;
    leads.value = [];
    let url = `leads/converted?records_per_page=${recordsPerPage.value}&page_number=${pageNumber}`;
    if (start_date.value) {
      url = url + `&start_date=${start_date.value}`;
    }
    if (end_date.value) {
      url = url + `&end_date=${end_date.value}`;
    }
    const { status, data } = await leadRequest("get", url);
    if (status == 200) {
      if (data.result) {
        leads.value = data.result;
        current.value = data.pagination?.current_page;
        from.value = data.pagination?.from;
        to.value = data.pagination?.to;
        pages.value = data.pagination?.pageCount;
        total.value = data.pagination?.totalCount;

        console.log(leads.value);
      }
    }
    if (status == 401) {
      // auth();
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
    <Summary />
    <section>
      <div class="flex justify-end items-center">
        <SelectDate />
        <Search />
      </div>
    </section>

    <section>
      <LeadsTable v-if="!isLoading" :leads="leads" :isLoading="isLoading" :converted="true" />
      <!-- <AppPagination /> -->
    </section>
  </div>
</template>
