<script setup>
import { onMounted, reactive, ref } from "vue";
import SelectDate from "@/components/SelectDate.vue";
import Chart from "../Chart.vue";
import dipRequest from '@/services/dip.request'
const isLoading = ref(false);
onMounted(() => {
  getPerformance();
  getProductService();
  getSalesRevenue();
})
const data2 = ref({
  labels: [],
  datasets: [
    {
      axis: "y",
      label: "Product Services",
      data: [],
      fill: false,
      backgroundColor: "blue",
      borderColor: "blue",
      borderWidth: 1,
    },
    
  ],
})
const data3 = ref(
  {
    labels: [],
    datasets: [
      {
        label: "Sales Revenue", // Name the series
        data: [], // Specify the data values array
        fill: true,
        borderColor: "red", // Add custom color border (Line)
        backgroundColor: "rgb(253 238 242)", // Add custom color background (Points and Fill)
        borderWidth: 1, // Specify bar border width
      },
    ],
  }

);
const getPerformance = async () => {
  try {
    const { status, data } = await dipRequest('get', 'v1/sales/marketing-performance-statistics')
    if (status == 200) {
      dashboardData[0].stat = data?.result?.total_revenue_sales
      dashboardData[1].stat = data?.result?.total_business_internet_sales
      dashboardData[2].stat = data?.result?.total_business_wifi_sales
    }
    // console.log(data);
  } catch (e) {
    alert(e.message)
  }
}
const productService = ref({ label: [], data: [] });
const salesRevenue = ref({ label: [], data: [] });
const getProductService = async () => {
  try {
    isLoading.value = true;
    const { status, data } = await dipRequest('get', 'v1/sales/statistics/product-services')
    console.log(status)
    if (status == 200) {
      data.result.forEach(element => {
        productService.value.label.push(element.name)
        productService.value.data.push(element.total_amount)

      });
      data2.value.labels = productService.value.label
      data2.value.datasets[0].data = productService.value.data
    }
    isLoading.value = false
    // console.log(data);
  } catch (e) {
    alert(e.message)
  }
}
const getSalesRevenue = async () => {
  try {
    isLoading.value = true;
    const { status, data } = await dipRequest('get', 'v1/sales/graph-data/sales-revenue')
    if (status == 200) {

      data.result.forEach(element => {
        salesRevenue.value.label.push(element?.month)
        salesRevenue.value.data.push(element?.total_amount)
      });

      data3.value.labels = salesRevenue.value.label
      data3.value.datasets[0].data = salesRevenue.value.data
    }
    isLoading.value = false
    // console.log(data);
  } catch (e) {
    alert(e.message)
  }
}
const dashboardData = reactive([
  {
    stat: "",
    title: "Revenue from Total Sales",
    description: "2% Decrease from target",
  },
  {
    stat: "",
    title: "Revenue from Business Internet",
    description: "",
  },
  {
    stat: "",
    title: "Revenue from Business Wifi",
    description: "",
  },
]);
</script>

<template>
  <div>
    <section class="my-14 flex w-full flex-nowrap gap-6 overflow-x-scroll overscroll-x-contain">
      <div v-for="item in dashboardData" :key="item.id"
        class="flex-shrink-0 rounded-lg border border-primary-black bg-opacity-90 bg-right-bottom bg-no-repeat px-6 py-4 bg-[url('/src/assets/banknote.svg')]">
        <div class="font-semibold">{{ item.title }}</div>
        <h2 class="mb-4 text-3xl font-semibold">{{ new Intl.NumberFormat('en-US').format(item.stat) }}</h2>
        <div class="text-xs">{{ item.description }}</div>
      </div>
    </section>
    <SelectDate />
    <section>
      <div class="text-xl font-semibold">Sales Revenue</div>
      <div class="my-10">
        <Chart v-if="!isLoading" type="line" :data="data3" indexAxis="x" />
      </div>

      <div class="bg-white py-5">
        <div class="flex justify-center text-[24px] font-bold my-5">Product Service</div>
        <Chart v-if="!isLoading" type="bar" :data="data2" indexAxis="y" />
      </div>
    </section>
  </div>
</template>
