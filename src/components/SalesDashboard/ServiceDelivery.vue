<script setup>
import { onMounted, reactive, ref } from "vue";
import SelectDate from "@/components/SelectDate.vue";
import leadRequest from "@/services/leadRequest";
import { auth } from "@/services/apiGatewayRequest";
import dipRequest from "@/services/dip.request";
import Chart from "../Chart.vue";
const triedRefreshToken = ref(false);

onMounted(() => {
  getSalesSummary();
  getLeadsGeneratedGraph();
  getConversionRate();
  getConversionRateGraph();
  getTotalCustomerPieChart();
});

const getSalesSummary = async () => {
  try {
    const { status, data } = await leadRequest("get", "leads/summary");
    if (status == 401 && triedRefreshToken.value == false) {
      triedRefreshToken.value = true;
      await auth();
      await getSalesSummary();
    }
    if (status == 200) {
      dashboardData.value = data.data.map((e) => {
        return { stat: e.count, title: e.displayName };
      });
      triedRefreshToken.value = false;
    }
    // console.log(dashboardData.value)
  } catch (e) {
    alert(e.message);
  }
};
const getLeadsGeneratedGraph = async () => {
  try {
    const { status, data } = await leadRequest(
      "get",
      "leads/generated-by-gragh"
    );
    if (status == 401 && triedRefreshToken.value == false) {
      triedRefreshToken.value = true;
      await auth();
      await getLeadsGeneratedGraph();
    }
    if (status == 200) {
      generatedGraphData.value.labels = [];
      generatedGraphData.value.datasets[0].data = [];
      data.data.forEach((e) => {
        leadsGeneratedTotal.value += e.total_num;
        generatedGraphData.value.labels.push(e.month);
        generatedGraphData.value.datasets[0].data.push(e.total_num);
      });
      triedRefreshToken.value = false;
      //   alert(status)
    }
  } catch (e) {
    alert(e.message);
  }
};
const getConversionRateGraph = async () => {
  try {
    const { status, data } = await leadRequest(
      "get",
      "leads/conversion-rates-data"
    );
    if (status == 401) {
      // auth()
      // getConversionGeneratedGraph()
    }
    if (status == 200) {
      conversionRateGraphData.value.labels = [];
      conversionRateGraphData.value.datasets[0].data = [];

      data.data.forEach((e) => {
        conversionRateTotal.value += e.total_num
        conversionRateGraphData.value.labels.push(e.month);
        conversionRateGraphData.value.datasets[0].data.push(e.total_num);
      });
      triedRefreshToken.value = false;
      // alert(status)
    }

  } catch (e) {
    alert(e.message);
  }
};

const dipChannel = ref()
const physicalChannel = ref()
const resellerChannel = ref()
const getTotalCustomerPieChart = async () => {
  try {
    const { status, data } = await dipRequest(
      "get",
      "v1/sales/customers/statistics"
    );

    if (status == 200) {
      data2.value.datasets[0].data = [];
      data2.value.datasets[0].data.push(data.result.customers_stat.new_customers)
      data2.value.datasets[0].data.push(data.result.customers_stat.returning_customers)
      dipChannel.value = data.result.channels_stat.dip
      physicalChannel.value =data.result.channels_stat.physical
      resellerChannel.value =data.result.channels_stat.reseller
    }
  } catch (e) {
    alert(e.message);
  }
};
const getConversionRate = async () => {
  try {
    const { status, data } = await leadRequest('get', 'leads/conversion-rates-data')
    if (status == 401) {
      await auth()
      await getConversionRate()
    }
    if (status == 200) {

    }
  } catch (e) {
    alert(e.message)
  }
}

const leadsGeneratedTotal = ref(0);
const conversionRateTotal = ref(0);

const generatedGraphData = ref({
  labels: [],
  datasets: [
    {
      label: "Leads Generated (Per Month)", // Name the series
      data: [], // Specify the data values array
      fill: true,
      borderColor: "red", // Add custom color border (Line)
      backgroundColor: "red", // Add custom color background (Points and Fill)
      borderWidth: 1, // Specify bar border width
    },
  ],
});
const conversionRateGraphData = ref({
  labels: [],
  datasets: [
    {
      label: "Conversion Rate", // Name the series
      data: [], // Specify the data values array
      fill: true,
      borderColor: "blue", // Add custom color border (Line)
      backgroundColor: "blue", // Add custom color background (Points and Fill)
      borderWidth: 1, // Specify bar border width
    },
  ],
});
const data2 = ref({
  labels: ["New customer", "Returning customers"],
  datasets: [
    {
      label: "",
      data: [],
      fill: true,
      backgroundColor: ["#00A676", "#575757"],
      borderColor: "white",
      borderWidth: 1,
    },
  ],
});

const dashboardData = ref([
  {
    stat: "",
    title: "Total Leads",
    description: "overall number of Leads",
  },
  {
    stat: "",
    title: "Total Conversions",
    description: "total number of Leads converted",
  },
]);
</script>

<template>
  <div>
    <section class="my-14 flex w-full flex-nowrap gap-6 overflow-x-scroll overscroll-x-contain">
      <div v-for="item in dashboardData" :key="item.id"
        class="border border-primary-gray rounded-md w-[250px] px-3 py-5 text-sm flex flex-col bg-[url('/src/assets/users.svg')] bg-no-repeat bg-right-bottom bg-white">
        <div class="font-semibold text-3xl mb-4">{{ item.stat }}</div>
        <div class="font-semibold">{{ item.title }}</div>
        <span span class="text-xs"> {{ item.description }}</span>
      </div>
    </section>
    
    <SelectDate />

    <section class="space-y-5">
      <div class="border border-gray-600 rounded-md p-5 bg-white">
        <div class="text-xl font-semibold">Leads Generated(past month)</div>
        <div class="my-10 flex justify-evenly items-center">
          <div class="">
            <p class="font-semibold text-[58px]">{{ leadsGeneratedTotal }}</p>
            <p class="font-semibold text-2xl">Total</p>
          </div>
          <Chart :data="generatedGraphData" type="bar" indexAxis="x" />
        </div>
      </div>

      <div class="border border-gray-600 rounded-md p-5 grid grid-cols-2 bg-white">
        <div>
          <p class="font-semibold text-2xl">Total Customers</p>

          <div class=" py-5 px-3 col-span-1">
            <div class="mt-10 w-[350px]">
              <Chart type="pie" :data="data2" />
            </div>
          </div>

        </div>
        <div class="text-lg font-semibold space-y-4">
          <p class="font-semibold text-2xl">Channels</p>
          <div class="flex justify-between bg-[#F3F3F3] p-3">
            <span>DIP</span>
            <span>{{ dipChannel }}</span>
          </div>
          <div class="flex justify-between p-3">
            <span>Physical</span>
            <span>{{ physicalChannel }}</span>
          </div>
          <div class="flex justify-between bg-[#F3F3F3] p-3">
            <span>Resellers</span>
            <span>{{ resellerChannel }}</span>
          </div>
          <div class="flex justify-between text-green-600 p-3">
            <span></span>
            <span>{{ dipChannel + physicalChannel + resellerChannel }}</span>
          </div>
        </div>
      </div>
      <div class="border border-gray-600 rounded-md p-5 bg-white">
        <div class="flex justify-between">
          <div class="text-xl font-semibold">Conversion Rate</div>
          <div class="text-5xl font-semibold pr-20">{{ conversionRateTotal / 100 }}%</div>
        </div>

        <div class="bg-white py-5">
          <Chart type="line" :data="conversionRateGraphData" indexAxis="x" />
        </div>
      </div>
    </section>
  </div>
</template>
