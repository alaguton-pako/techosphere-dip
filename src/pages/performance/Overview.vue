<template>
  <div class="flex flex-row justify-center">
    <div
      class="mx-10 bg-white border flex flex-col place-items-center justify-center border-black w-1/2"
    >
      <circle-progress
        class="text-[32px]"
        :percent="chartValues.efficiency"
        unit="percent"
        :gradient="{
          // angle: chartValues.efficiency,
          startColor: '#ff0000',
          stopColor: '#ffff00',
        }"
      >
      </circle-progress>
      <div class="text-[32px]">Efficiency :{{ chartValues.efficiency }}%</div>
    </div>
    <div
      class="mx-10 bg-white border flex flex-col justify-center place-items-center h-[400px] border-black w-1/2"
    >
      <circle-progress
        class="text-[32px]"
        :percent="chartValues.obligation"
        unit="percent"
        :gradient="{
          angle: chartValues.obligation,
          startColor: '#ff0000',
          stopColor: '#ffff00',
        }"
      >
      </circle-progress>
      <div class="text-[32px]">Obligation :{{ chartValues.obligation }}%</div>
    </div>
  </div>
</template>

<script setup>
import CircleProgress from "vue3-circle-progress";
import GaugeChart from "@/components/GaugeChart.vue";
import Swal from "sweetalert2";
import { onMounted, ref } from "vue";
import workplaceRequestsv2 from "../../services/workplaceRequestsv2";
const isLoading = ref(false);
const chartValues = ref({
  obligation: 0,
  efficiency: 0,
});
const performanceData = ref({
  Operations: {
    id: 1,
    department: "Operations",
    created_at: "",
    updated_at: "",
    analysis: {
      obligation: 0,
      efficiency: 0,
      compliance: 0,
      score: 0,
    },
  },
  Networks: {
    id: 2,
    department: "Networks",
    created_at: "",
    updated_at: "",
    analysis: {
      obligation: 0,
      efficiency: 0,
      compliance: 0,
      score: 0,
    },
  },
  Marketing: {
    id: 3,
    department: "Marketing",
    created_at: "",
    updated_at: "",
    analysis: {
      obligation: 0,
      efficiency: 0,
      compliance: 0,
      score: 0,
    },
  },
  Finance: {
    id: 4,
    department: "Finance",
    created_at: "",
    updated_at: "",
    analysis: {
      obligation: 0,
      efficiency: 0,
      compliance: 0,
      score: 0,
    },
  },
  Commercial: {
    id: 5,
    department: "Commercial",
    created_at: "",
    updated_at: "",
    analysis: {
      obligation: 0.2857142857142857,
      efficiency: 0,
      compliance: 0,
      score: 0.09523809523809523,
    },
  },
  Management: {
    id: 6,
    department: "Management",
    created_at: "",
    updated_at: "",
    analysis: {
      obligation: 0,
      efficiency: 0,
      compliance: 0,
      score: 0,
    },
  },
  "Customer Experience": {
    id: 7,
    department: "Customer Experience",
    created_at: "",
    updated_at: "",
    analysis: {
      obligation: 0,
      efficiency: 0,
      compliance: 0,
      score: 0,
    },
  },
  "Innovation(Strategy)": {
    id: 8,
    department: "Innovation(Strategy)",
    created_at: "",
    updated_at: "",
    analysis: {
      obligation: 0,
      efficiency: 0,
      compliance: 0,
      score: 0,
    },
  },
});

onMounted(() => {
  isLoading.value = true;
  getPerformanceOverview();
  //   getUnitPerformanceOverview();
});
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
const getPerformanceOverview = async () => {
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
        chartValues.value.efficiency += v.analysis.efficiency;
        chartValues.value.obligation += v.analysis.obligation;
      });
      chartValues.value.efficiency = Math.round(
        chartValues.value.efficiency / 5
      );
      chartValues.value.obligation = Math.round(
        chartValues.value.obligation / 5
      );
    }
    isLoading.value = false;
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
