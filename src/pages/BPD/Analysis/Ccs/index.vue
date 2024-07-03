<script setup>
import tickets from "@/pages/BPD/Analysis/tickets.vue";
import SelectDate from "@/components/SelectDate.vue";
import Chart from "../../../../components/Chart.vue";
import { onMounted, ref } from "vue";
import workplaceRequestsv2 from "../../../../services/workplaceRequestsv2";

const selectedDepartment = ref(1);
const selectedUnit = ref(1);
const departments = ref([]);
const units = ref([]);
const regions = ref([]);
const teams = ref([]);
const timeSlots = ref([]);
const selectedFilter = ref("");
const selectedFilerFieldValue = ref("");
const endDate = ref("");
const selectedEntity = ref("");
const isLoadingChart = ref(false);
const setEntity = (value) => {
  selectedEntity.value = value;
};
onMounted(() => {
  getDepartmentTrends();
  getUnitTrends();
  getDepartments();
  getUnits();
  getRegion();
  getTeams();
  getTimeSlots();
});

const getDepartments = async () => {
  try {
    const { status, data } = await workplaceRequestsv2(
      "get",
      "users/get-all-departments"
    );
    if (status == 200) {
      departments.value = data.data.results.data;
    }
    console.log("departments", data);
  } catch (e) {}
};
const getTeams = async () => {
  try {
    const { status, data } = await workplaceRequestsv2("get", "teams/all");
    if (status == 200) {
      teams.value = data;
    }
  } catch (e) {}
};
const getUnits = async () => {
  try {
    const { status, data } = await workplaceRequestsv2(
      "get",
      "users/get-all-units"
    );
    if (status == 200) {
      units.value = data.data.results.data;
    }
  } catch (e) {}
};
const getRegion = async () => {
  try {
    const { status, data } = await workplaceRequestsv2("get", "regions/all");
    if (status == 200) {
      regions.value = data.data.results.data;
    }
  } catch (e) {}
};
const getTimeSlots = async () => {
  try {
    const { status, data } = await workplaceRequestsv2(
      "get",
      "assignment/get-time-slots"
    );
    if (status == 200) {
      timeSlots.value = data.data.results.data;
    }
    console.log("time slots", data);
  } catch (e) {}
};
const getDepartmentTrends = async () => {
  try {
    const { status, data } = await workplaceRequestsv2(
      "get",
      `trends-analysis/department/${selectedDepartment.value}?separator=months`
    );
    if (status == 200) {
      console.log("department trends", data);
    }
  } catch (e) {}
};
const getUnitTrends = async () => {
  try {
    const { status, data } = await workplaceRequestsv2(
      "get",
      `trends-analysis/unit/${selectedUnit.value}?separator=months`
    );
    if (status == 200) {
      // console.log("unit trends", data);
    }
  } catch (e) {}
};

const setChartData = (value) => {
  isLoadingChart.value = true;
  data3.value = value;
  isLoadingChart.value = false;
};
const data3 = ref({
  labels: [],
  datasets: [
    {
      label: "Compliance", // Name the series
      data: [], // Specify the data values array
      fill: false,
      borderColor: "#F3722C", // Add custom color border (Line)
      backgroundColor: "#F3722C", // Add custom color background (Points and Fill)
      borderWidth: 1, // Specify bar border width
    },
    {
      label: "Compliance", // Name the series
      data: [], // Specify the data values array
      fill: false,
      borderColor: "#3cba9f", // Add custom color border (Line)
      backgroundColor: "#3cba9f", // Add custom color background (Points and Fill)
      borderWidth: 1, // Specify bar border width
    },
  ],
});
</script>

<template>
  <div class=" ">
    <tickets />
      
    </div>
</template>

<style scope>
canvas {
  width: 100% !important;
}
</style>
