<template>
  <div>
    <div class="grid grid-cols-2 gap-4" v-if="!isLoading">
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
import GaugeChart from "@/components/GaugeChart.vue";
import { onMounted, ref } from "vue";
import workplaceRequestsv2 from "../../services/workplaceRequestsv2";
import Swal from "sweetalert2";
const isLoading = ref(false);
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
const getPerformanceOverview = async () => {
  try {
    const { status, data } = await workplaceRequestsv2(
      "get",
      "staff-performance/overview"
    );
    if (status == 200) {
      performanceData.value = data.data.results.data;
      departments.value = [];
      Object.values(performanceData.value).forEach((v, k) => {
        let chartData = {
          name: "finance",
          size: "400",
          gauge: 0,
        };
        chartData.name=v.department
        v.analysis.compliance > 0 ? chartData.gauge=Math.round(v.analysis.compliance):0
        chartData.size='400'
        departments.value.push(chartData);
      });
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
const departments = ref([
  {
    name: "COMMERCIAL",
    size: "400",
    gauge: 70,
  },
  {
    name: "finance",
    size: "400",
    gauge: 45,
  },
  {
    name: "OPERATIONS",
    size: "400",
    gauge: 38,
  },
  {
    name: "STRATEGY/INNOVATION",
    size: "400",
    gauge: 39,
  },
  {
    name: "TECHNOLOGY",
    size: "400",
    gauge: 99,
  },
]);
</script>
