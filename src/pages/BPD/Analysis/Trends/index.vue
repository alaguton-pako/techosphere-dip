<script setup>
import entity from "@/pages/BPD/Analysis/entity.vue";
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
    <!-- <div class="flex justify-between pr-10  ">

            <SelectDate />
        </div> -->
    <div class="flex space-x-3">
      <entity
        @setEntity="setEntity"
        @setChartData="setChartData"
        class="w-1/4"
        :departments="departments"
        :units="units"
        :teams="teams"
        :regions="regions"
        :timeSlots="timeSlots"
        :filter="selectedFilter"
        :filterValue="selectedFilerFieldValue"
        :endDate="endDate"
      />
      <section class="bg-white w-3/4">
        <div class="text-xl font-semibold">Company Performance</div>
        <div
          class="mx-10 flex flex-row-reverse sm:flex-row flex-wrap gap-10 space-y-4 sm:space-y-0 items-center pb-4"
        >
          <div class="w-3/12">
            <label
              for="countries"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Select Filter</label
            >
            <select
              v-model="selectedFilter"
              id="countries"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Choose a filter</option>
              <option v-if="selectedEntity != 'Operations'" value="hourly">Hourly</option>
              <option value="daily">Daily</option>
              <option v-if="selectedEntity != 'Operations'" value="weekly"
                >Weekly</option
              >
              <option value="monthly">Monthly</option>
              <option v-if="selectedEntity != 'Operations'" value="quarterly"
                >Quarterly</option
              >
              <option v-if="selectedEntity != 'Operations'" value="annually"
                >Annually</option
              >
            </select>
          </div>
          <div class="w-3/12">
            <label
              for="first_name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >&nbsp;&nbsp;Start Date</label
            >
            <input
              v-model="selectedFilerFieldValue"
              type="date"
              id="first_name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div
            v-if="
              (selectedEntity == 'Operations' && selectedFilter == 'daily') ||
              (selectedEntity == 'PMO and SDU' && selectedFilter != 'hourly')
            "
            class="w-3/12"
          >
            <label
              for="first_name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >&nbsp;&nbsp; End Date</label
            >
            <input
              v-model="endDate"
              type="date"
              id="first_name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
        </div>
        <div class="m-10 w-full">
          <Chart
            v-if="!isLoadingChart"
            type="line"
            :data="data3"
            indexAxis="x"
            :min="0"
            :max="1"
          />
        </div>
      </section>
    </div>
  </div>
</template>

<style scope>
canvas {
  width: 100% !important;
}
</style>
