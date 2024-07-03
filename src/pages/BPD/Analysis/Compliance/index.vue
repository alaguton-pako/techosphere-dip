<script setup>
import filterBy from "@/pages/BPD/Analysis/filterBy.vue";
import SelectDate from "@/components/SelectDate.vue";
import GaugeChart from "@/components/GaugeChart.vue";
import workplaceRequestsv2 from "../../../../services/workplaceRequestsv2";
import { onMounted, ref } from "vue";
import Swal from "sweetalert2";
const isLoading = ref(false);
const filter = ref("company");
const openTab = ref("departments");
const units = ref([]);
const departments = ref([]);
const chartValues = ref();
const unitPerformanceData = ref([]);
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

const start_date = ref('')
const end_date = ref('')

const formatDate = (date) => {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Month is 0-indexed
  const day = date.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
}
// Set end_date to today's date
const today = new Date();
end_date.value = formatDate(today);

// Set start_date to the first day of the current month
const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
start_date.value = formatDate(firstDayOfMonth);


const diagnosisPerformance = ref({
  data_source_schedule: {
    compliance_percentage: 0,
    performance_percentage: 0,
    efficiency_percentage: 0,
    total_expected_score: 0,
    total_scores: 0,
    total_expected_percentage: 100,
    total_percentage: 0,
    resolution_stats: {
      fault: 0,
      installation: 0,
    },
  },
});
onMounted(() => {
  getPerformanceOverview();
  getUnitPerformanceOverview();
});
const getPerformanceOverview = async () => {
  try {
    const { status, data } = await workplaceRequestsv2(
      "get",
      `staff-performance/overview?start_date=${start_date.value}&&end_date=${end_date.value}`
    );
    if (status == 200) {
      performanceData.value = data.data.results.data;
      departments.value = [];
      Object.values(performanceData.value).forEach((v, k) => {
        departments.value.push(v.department);
      });
    }
    computeChartValues();
  } catch (e) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: e.message,
    });
  }
};

const setFilter = (value) => {
  filter.value = value;
  computeChartValues();
};

const getUnitPerformanceOverview = async () => {
  try {
    const { status, data } = await workplaceRequestsv2(
      "get",
      `staff-performance/units/overview?${start_date.value}&&end_date=${end_date.value}`
    );
    unitPerformanceData.value = data.data.results.data;
    units.value = [];
    Object.values(unitPerformanceData.value).forEach((v, k) => {
      units.value.push(v?.unit);
    });
    // console.log(units.value);
  } catch (e) {
    alert(e.message);
  }
};

const computeChartValues = () => {
  isLoading.value = true;
  if (filter.value == "company") {
    let count = 0;
    Object.values(performanceData.value).forEach((v, k) => {
      count++;
      chartValues.value += v.analysis.compliance;
      //   chartValues.value.efficiency += v.analysis.efficiency;
    });
    chartValues.value = chartValues.value / count;
    // chartValues.value.obligation = chartValues.value.obligation / count;
  } else if (filter.value == "units") {
    let count = 0;
    Object.values(unitPerformanceData.value).forEach((v, k) => {
      count++;
      chartValues.value += v.analysis.compliance;
      //   chartValues.value.efficiency += v.analysis.efficiency;
    });
    chartValues.value = chartValues.value / count;
    // chartValues.value.obligation = chartValues.value.obligation / count;
  } else {
    if (openTab.value == "departments") {
      //   chartValues.value.efficiency =
      //     performanceData.value[filter.value].analysis.efficiency;
      chartValues.value =
        performanceData.value[filter.value].analysis.compliance;
    }
    if (openTab.value == "units") {
      chartValues.value =
        unitPerformanceData.value[filter.value].analysis.compliance;
      //   chartValues.value.obligation =
      //     unitPerformanceData.value[filter.value].analysis.obligation;
    }
  }
  isLoading.value = false;
};

const setTeamURLPath = (teamid) => {
  if (!start_date.value) {
    let date = new Date();
    let month = date.getMonth().toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });
    let year = date.getFullYear();
    start_date.value = `${year}-${month}-01`;
  }
  if (!end_date.value) {
    let day = "31";
    let date = new Date();
    let month = date.getMonth().toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });
    let year = date.getFullYear();
    const thirtys = ["04", "06", "09", "11"];
    if (thirtys.includes(month)) {
      day = "30";
    } else if (month == "02") {
      day = "28";
    }
    end_date.value = `${year}-${month}-${day}`;
  }

  return `${teamid}/${start_date.value}/${end_date.value}`;
};

const setTeam = (value) => {
  getTeamPerformance(value);
};

const getTeamPerformance = async (team) => {
  try {
    const urlPath = setTeamURLPath(team.id);
    let url = "";

    //create dynamic url based on team role to get performance
    if (team.role == "diagnosis") {
      url = `reports/suburban/diagnosis/${urlPath}`;
      const { status, data } = await ccsRequests("get", url);
      if (status == 200) {
        diagnosisPerformance.value = data;
      }
    } else {
      url = `reports/suburban/${urlPath}`;
      const { status, data } = await ccsRequests("get", url);
      if (status == 200) {
        diagnosisPerformance.value = data;
        chartValues.value =
          diagnosisPerformance.value?.data_source_schedule?.compliance_percentage;
      }
    }
    // alert(status);
  } catch (e) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: e.message,
    });
  }
};
</script>

<template>
  <div class="flex flex-row gap-4">
    <div class="flex justify-between pr-10">
      <filterBy
        @setTeam="setTeam"
        @setFilter="setFilter"
        @setOpenTab="
          (value) => {
            openTab = value;
          }
        "
        :departments="departments"
        :units="units"
      />
    </div>
    <div class="w-full flex flex-col items-center mx-20">
      <SelectDate
        @changeStartDate="
          (value) => {
            start_date = value
            getPerformanceOverview()
            getUnitPerformanceOverview()
          }
        "
        @changeEndDate="(value) => {
          end_date = value
            getPerformanceOverview()
            getUnitPerformanceOverview()
        }"
        class="my-5 flex w-full justify-end"
      />
      <GaugeChart
        v-if="chartValues > 0"
        :size="700"
        :gauge="chartValues"
        :id="`gaugeChart`"
      />
      <!-- <div v-else class="w-5/12">
        <div
          class=" flex flex-col-reverse justify-center border-t-[24px] border-l-[24px] border-r-[24px] border-solid border-red-600 mt-5 ml-2 mr-2 w-auto h-24 rounded-tl-full rounded-tr-full"
        >
          <div class="absolute">
            <span
              class="bg-black relative mx-2"
              style="
                clip-path: polygon(
                  0% 0%,
                  calc(100% - 0.4em) 0%,
                  100% 50%,
                  calc(100% - 0.4em) 100%,
                  0% 100%
                );
              "
            >
              &nbsp;&nbsp;&nbsp;
            </span>
          </div>
          <div class="absolute bottom-0 right-1 left-1 text-2xl">
            0%
          </div>
        </div>
        <div class="w-full flex flex-row">
          <div class="w-1/4">
            0%
          </div>
          <div class="w-1/4"></div>
          <div class="w-1/4"></div>
          <div class="w-1/4">
            100%
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>
