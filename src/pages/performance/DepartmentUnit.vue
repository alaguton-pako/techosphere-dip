<template>
  <div>
    <div class="">
      <router-link
        class="flex flex-col my-10"
        v-for="(department, index) in departments"
        :key="index"
        :to="{ name: 'department-obligation-performance', params: { id: 123 } }"
      >
      <div class="grid grid-cols-2">
        <div
        class="mx-10 bg-white border flex flex-col place-items-center justify-center border-black"
        >
        <circle-progress
        class="text-[32px]"
        :percent="department.efficiency"
        unit="percent"
        :gradient="{
          // angle: chartValues.efficiency,
          startColor: '#ff0000',
          stopColor: '#ffff00',
        }"
            >
          </circle-progress>
          <div class="text-[32px]">
            Efficiency :{{ department.efficiency }} %
          </div>
        </div>
        <div
        class="mx-10 bg-white border flex flex-col place-items-center justify-center border-black"
        >
        <circle-progress
        class="text-[32px]"
        :percent="department.obligation"
        unit="percent"
        :gradient="{
          // angle: chartValues.efficiency,
          startColor: '#ff0000',
          stopColor: '#ffff00',
        }"
            >
          </circle-progress>
          <div class="text-[32px]">
            Obligation : {{ department.obligation }}%
          </div>
        </div>
      </div>
      <div class=" text-[34px] text-center">{{ department.name }}</div>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import GaugeChart from "@/components/GaugeChart.vue";
import CircleProgress from "vue3-circle-progress";
import { onMounted, ref } from "vue";
import workplaceRequestsv2 from "../../services/workplaceRequestsv2";
import Swal from "sweetalert2";
const departments = ref([
  {
    name: "COMMERCIAL",
    size: "400",
    efficiency: 70,
    obligation: 70,
  },
]);

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
          name: "COMMERCIAL",
          size: "400",
          efficiency: 70,
          obligation: 70,
        };
        chartData.name = v.department;
        chartData.efficiency = Math.round(v.analysis.efficiency);
        chartData.obligation = Math.round(v.analysis.obligation);
        chartData.size = "400";
        departments.value.push(chartData);
      });
    }
    console.log(departments);
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
