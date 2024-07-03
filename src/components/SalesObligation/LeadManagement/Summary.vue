<template>
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
</template>
<script setup>
import leadRequest from "@/services/leadRequest";
import { onMounted, ref } from "vue";
import { auth } from "../../../services/apiGatewayRequest";
const getSalesSummary = async () => {
  try {
    const { status, data } = await leadRequest("get", "leads/summary");
    if (status == 401) {
      auth();
      getSalesSummary();
    }
    if (status == 200) {
      dashboardData.value = data.data.map((e) => {
        return { stat: e.count, title: e.displayName };
      });
    }
    // console.log(dashboardData.value)
  } catch (e) {
    console.log(e);
    alert(e.message);
  }
};
onMounted(()=>{
    getSalesSummary();
})
const dashboardData = ref([
  {
    stat: 0,
    title: "Total Leads",
    description: "overall number of Leads",
  },
  // {
  //   stat: "400",
  //   title: "Total Conversions",
  //   description: "total number of Leads converted",
  // },
]);
</script>
