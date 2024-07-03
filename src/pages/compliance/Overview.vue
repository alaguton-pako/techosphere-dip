<template>
  <div>
    <!-- <SelectDate /> -->
    <div class="loader" v-if="isLoading"></div>
    <div class="" v-if="!isLoading">
      <GaugeChart
        v-for="(department, index) in departments"
        :key="index"
        :size="department.size"
        :id="`gaugeChart${index}`"
        :department="department.name"
        :gauge="department.gauge"
      />
    </div>
  </div>
</template>

<script setup>
import SelectDate from "@/components/SelectDate.vue";
import GaugeChart from "@/components/GaugeChart.vue";
import Swal from "sweetalert2";
import { onMounted, ref } from "vue";
import workplaceRequestsv2 from "../../services/workplaceRequestsv2";
const isLoading = ref(false);
const performanceData = ref();

const departments = ref([
  {
    name: "Compliance",
    size: "400",
    gauge: 0,
  },
]);
const getFirstDayOfMonth= ()=>{
    const today = new Date();
    return new Date(today.getFullYear(), today.getMonth(), 1);
}

const getToday = () => {
    const today = new Date();
    return today;
}

const formatDate = (date) => {
    const year = date.getFullYear().toString();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
}

const start_date = ref(formatDate(getFirstDayOfMonth()));
const end_date = ref(formatDate(getToday()));
// const computeChartValues = () => {
//   isLoading.value = true;
//   if (filter.value == "company") {
//     let count = 0;
//     Object.values(performanceData.value).forEach((v, k) => {
//       count++;
//       chartValues.value += v.analysis.compliance;
//       //   chartValues.value.efficiency += v.analysis.efficiency;
//     });
//     chartValues.value = chartValues.value / count;
//     // chartValues.value.obligation = chartValues.value.obligation / count;
//   } else if (filter.value == "units") {
//     let count = 0;
//     Object.values(unitPerformanceData.value).forEach((v, k) => {
//       count++;
//       chartValues.value += v.analysis.compliance;
//       //   chartValues.value.efficiency += v.analysis.efficiency;
//     });
//     chartValues.value = chartValues.value / count;
//     // chartValues.value.obligation = chartValues.value.obligation / count;
//   } else {
//     if (openTab.value == "departments") {
//       //   chartValues.value.efficiency =
//       //     performanceData.value[filter.value].analysis.efficiency;
//       chartValues.value =
//         performanceData.value[filter.value].analysis.compliance;
//     }
//     if (openTab.value == "units") {
//       chartValues.value =
//         unitPerformanceData.value[filter.value].analysis.compliance;
//       //   chartValues.value.obligation =
//       //     unitPerformanceData.value[filter.value].analysis.obligation;
//     }
//   }
//   isLoading.value = false;
// };
onMounted(() => {
  isLoading.value = true;
  getPerformanceOverview();
  //   getUnitPerformanceOverview();
});
const getPerformanceOverview = async () => {
  isLoading.value = true
  try {
    const { status, data } = await workplaceRequestsv2(
      "get",
      `staff-performance/overview?start_date=${start_date.value}&&end_date=${end_date.value}`    
    );
    if (status == 200) {
      performanceData.value = data.data.results.data;
      let count = 0;
      Object.values(performanceData.value).forEach((v, k) => {
        count++;
        departments.value[0].gauge += v.analysis.compliance;
      });
      departments.value[0].gauge = parseFloat((departments.value[0].gauge / 5).toFixed(2))


     
    }
    isLoading.value = false
    // computeChartValues();
  } catch (e) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: e.message,
    });
  }
};
</script>
