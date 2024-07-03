<script setup>
import { reactive, ref, computed, onMounted } from "vue";
import SelectDate from "@/components/SelectDate.vue";
import Search from "@/components/Search.vue";
import leadRequest from "@/services/leadRequest.js";
// import AppPagination from '@/AppPagination.vue'
import SalesManagerTable from "../Shared/SalesManagerTable.vue";
import { useUserStore } from "@/stores/userStore.js";
import { auth } from "../../services/apiGatewayRequest";
const store = useUserStore();
// onMounted(() => {
//   getDashboardData();
// });
const getDashboardData = async () => {
  try {
    const { status, data } = await leadRequest(
      "get",
      `leads/accounts/account-statistics?email=${store.user.email}`
    );
    if (status == 200) {
      if (data?.data?.total_num) {
        dashboardData[0].stat = data.data.total_num;
      }
      if (data?.data?.total_business_wifi_accounts) {
        dashboardData[1].stat = data.data.total_business_wifi_accounts;
      }
      if (data?.data?.total_business_internet_accounts) {
        dashboardData[2].stat = data.data.total_business_internet_accounts;
      }
    }
    if (status == 401) {
      auth();
      getLeads(pageNumber);
    }
    // isLoading.value = false;
  } catch (e) {
    console.log(e.message);
  }
};

const dashboardData = reactive([
  {
    stat: "0",
    title: "Total Accounts",
    description: "overall number of Accounts under you",
  },
  {
    stat: "0",
    title: "Business Wifi",
    description: "Total number of Wifi Customers",
  },
  {
    stat: "0",
    title: "Total Business Wifi",
    description: "Total number of Business Internet Customers",
  },
]);
</script>
<template>
  <div>
    <section
      class="my-14 flex w-full flex-nowrap gap-6 overflow-x-scroll overscroll-x-contain"
    >
      <div
        v-for="(item, index) in dashboardData"
        :key="index"
        class="border border-primary-gray rounded-md w-[250px] px-3 py-5 text-sm flex flex-col bg-[url('/src/assets/users.svg')] bg-no-repeat bg-right-bottom bg-white"
        :class="{ 'bg-black': index === 0 }"
      >
        <div class="font-semibold text-3xl mb-4">{{ item.stat }}</div>
        <div class="font-semibold">{{ item.title }}</div>
        <span span class="text-xs"> {{ item.description }}</span>
      </div>
    </section>
    <!-- <Summary></Summary> -->
    <section>
      <div class="flex justify-end items-center my-5">
        <Search />
        <div class="flex space-x-3 border border-gray-500 px-4 py-2 rounded-md">
          <p>Filter</p>
          <img src="../../assets/down-arrow.svg" alt="" class="w-3" />
        </div>
      </div>
    </section>

    <section>
      <SalesManagerTable :url="`leads/accounts?email=&`" />
    </section>
  </div>
</template>
