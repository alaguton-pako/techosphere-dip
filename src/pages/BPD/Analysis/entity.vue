<template>
  <div>
    <div class="p-5 bg-white mt-5">
      <div class="bg-white p-3 shadow-md">
        <h2 class="font-semibold text-[#5E6268]">Entity</h2>
      </div>

      <div class="space-y-4 py-3">
        <div>
          <input type="checkbox" name="" id="" class="mx-3" />
          <label for="">All</label>
        </div>
        <div v-for="(entity, index) in entities" :key="index">
          <input
            :checked="entity.label == selectedEntity ? true : false"
            @click="setTrends(entity.label)"
            type="checkbox"
            name=""
            id=""
            class="mx-3"
          />
          <label :class="randomColor(index)" for="">{{ entity.label }}</label>
        </div>
        <!-- <div> 
          <input type="checkbox" name="" id="" class="mx-3" />
          <label for="" class="text-[#F3722C]"
            >Customer Experience/Service</label
          >
        </div>
        <div>
          <input type="checkbox" name="" id="" class="mx-3" />
          <label for="" class="text-[#90BE6D]">Field Operations</label>
        </div>
        <div>
          <input type="checkbox" name="" id="" class="mx-3" />
          <label for="" class="text-[#9E00D5]">Finance</label>
        </div>
        <div>
          <input type="checkbox" name="" id="" class="mx-3" />
          <label for="" class="text-[#0009D5]">Marketing</label>
        </div>
        <div>
          <input type="checkbox" name="" id="" class="mx-3" />
          <label for="" class="text-[#2D9CDB]">Network</label>
        </div>
        <div>
          <input type="checkbox" name="" id="" class="mx-3" />
          <label for="" class="text-[#F94144]">Operations</label>
        </div>
        <div>
          <input type="checkbox" name="" id="" class="mx-3" />
          <label for="" class="text-[#F8961E]">PMO & SDU</label>
        </div>
        <div>
          <input type="checkbox" name="" id="" class="mx-3" />
          <label for="" class="text-[#F980DF]">Sales</label>
        </div>
        <div>
          <input type="checkbox" name="" id="" class="mx-3" />
          <label for="" class="text-[#43AA8B]">Strategy/Innovation</label>
        </div> -->
      </div>

      <div
        class="bg-white p-3 shadow-md mt-8 cursor-pointer"
        @click="openTrendType = !openTrendType"
      >
        <h2 class="font-semibold text-[#5E6268]">Trends & Trend Types</h2>
      </div>

      <div class="space-y-4 py-3" v-if="openTrendType">
        <div v-for="(trend, index) in trends" :key="index">
          <input
            @click="setTrendType(trend)"
            type="checkbox"
            name=""
            :checked="selectedTrendType == trend ? true : false"
            id=""
            class="mx-3"
          />
          <label for="">{{ trend }}</label>
          <div
            class="mx-6"
            v-if="selectedEntity == 'PMO and SDU' && selectedTrendType == trend"
          >
            <input
              :checked="subTrendType == 'Performance' ? true : false"
              @click="setSubTrendType('Performance')"
              type="checkbox"
              name=""
              id=""
              class="mx-3"
            />
            <label for="">Performance</label>
          </div>
          <div
            class="mx-6"
            v-if="selectedEntity == 'PMO and SDU' && selectedTrendType == trend"
          >
            <input
              :checked="subTrendType == 'Compliance' ? true : false"
              @click="setSubTrendType('Compliance')"
              type="checkbox"
              name=""
              id=""
              class="mx-3"
            />
            <label for="">Compliance</label>
          </div>
        </div>
        <!-- <div>
          <input type="checkbox" name="" id="" class="mx-3" />
          <label for="">Quality Control</label>
        </div>

 
        <div class="">
          <input type="checkbox" name="" id="" class="mx-3" />
          <label for="">Testing & Commissioning</label>
        </div> -->
      </div>

      <div
        class="bg-white p-3 shadow-md mt-10 cursor-pointer"
        @click="openScenario = !openScenario"
      >
        <h2 class="font-semibold text-[#5E6268]">Scenarios</h2>
      </div>

      <div v-if="openScenario" class="space-y-4 py-3">
        <div>
          <input
            @click="setScenario('team')"
            type="checkbox"
            :checked="selectedScenario == 'team' ? true : false"
            name=""
            id=""
            class="mx-3"
          />
          <label for="">Team</label>
          <div v-if="selectedScenario == 'team'">
            <div class="mx-3" v-for="(team, index) in props.teams" :key="index">
              <input
                @click="setTeam(team.id)"
                :checked="selectedTeam == team.id ? true : false"
                type="checkbox"
                name=""
                id=""
                class="mx-3"
              />
              <label for="">{{ team.name }}</label>
            </div>
          </div>
        </div>

        <div>
          <input
            @click="setScenario('location')"
            type="checkbox"
            :checked="selectedScenario == 'location' ? true : false"
            name=""
            id=""
            class="mx-3"
          />
          <label for="">Location</label>
          <div v-if="selectedScenario == 'location'">
            <div
              v-for="(region, index) in props.regions"
              :key="index"
              class="mx-6"
            >
              <input
                @click="setTeam(region.id)"
                :checked="selectedLocation == region.id ? true : false"
                type="checkbox"
                name=""
                id=""
                class="mx-3"
              />
              <label for="">{{ region.region }}</label>
            </div>
          </div>
        </div>
        <!-- <div class="mx-6">
          <input type="checkbox" name="" id="" class="mx-3" />
          <label for="">Maitama</label>
        </div>
        <div class="mx-6">
          <input type="checkbox" name="" id="" class="mx-3" />
          <label for="">Wuse 11</label>
        </div>
        <div class="mx-6">
          <input type="checkbox" name="" id="" class="mx-3" />
          <label for="">Wuye</label>
        </div> -->

        <div>
          <input
            @click="setScenario('timeslot')"
            type="checkbox"
            :checked="selectedScenario == 'timeslot' ? true : false"
            name=""
            id=""
            class="mx-3"
          />
          <label for="">Time</label>
          <div v-if="selectedScenario == 'timeslot'">
            <div
              v-for="(timeslot, index) in props.timeSlots"
              :key="index"
              class="mx-6"
            >
              <input
                @click="setTeam(timeslot.id)"
                :checked="selectedTime == timeslot.id ? true : false"
                type="checkbox"
                name=""
                id=""
                class="mx-3"
              />
              <label for="">{{ timeslot.name }}</label>
            </div>
          </div>
        </div>
        <!-- <div>
          <input type="checkbox" name="" id="" class="mx-3" />
          <label for="">Quality</label>
        </div>
        <div>
          <input type="checkbox" name="" id="" class="mx-3" />
          <label for="">Customer Experience</label>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import ccsRequests from "@/services/ccsRequests";
import workplaceRequestsv2 from "../../../services/workplaceRequestsv2";
const openScenario = ref(false);
const openTrendType = ref(false);
const selectedEntity = ref("");
const trends = ref([]);
const selectedUnit = ref(0);
const selectedTrendType = ref("");
const subTrendType = ref("");
const emit = defineEmits(["setEntity", "setChartData"]);
const year = ref("");
const month = ref("");
const week = ref("");

const chartData = ref({
  labels: ["A", "B", "C", "D"],
  datasets: [
    {
      label: "Compliance", // Name the series
      data: [20, 50, 10, 70], // Specify the data values array
      fill: false,
      borderColor: "#F3722C", // Add custom color border (Line)
      backgroundColor: "#F3722C", // Add custom color background (Points and Fill)
      borderWidth: 1, // Specify bar border width
    },
    {
      label: "Performance", // Name the series
      data: [30, 10, 10, 70], // Specify the data values array
      fill: false,
      borderColor: "#3cba9f", // Add custom color border (Line)
      backgroundColor: "#3cba9f", // Add custom color background (Points and Fill)
      borderWidth: 1, // Specify bar border width
    },
  ],
});
const day = ref("");
const props = defineProps([
  "departments",
  "units",
  "teams",
  "regions",
  "timeSlots",
  "filter",
  "filterValue",
  "endDate",
]);
const selectedScenario = ref("");
const selectedTeam = ref(0);
const selectedLocation = ref(0);
const selectedTime = ref(0);
const entities = ref([
  {
    label: "Sales",
    trends: [
      "Lead generation Performance",
      "Lead qualification Performance",
      "Lead conversion Performance",
    ],
  },
  {
    label: "Marketing",
    trends: [
      "Channel Performance ",
      "Impression Performance",
      "Campaign Performance",
      "Touchpoint Performance",
      "Product Performance",
      "Touchpoint Compliance",
      "Brand Performance",
      "Brand Compliance",
    ],
  },
  {
    label: "Network",
    trends: ["Cable Route Performance ", "Node Compliance"],
  },
  {
    label: "Field Operations",
    trends: ["Obligation Compliance Trend ", "Obligation Performance Trend"],
  },
  {
    label: "PMO and SDU",
    trends: [
      "Installation (Node and Customer installation) ",
      "Quality Control",
      "Testing and Commission",
    ],
  },
  {
    label: "Strategy/Innovation",
    trends: ["SIP Performance & Compliance", "Strategy Impact Performance"],
  },
  {
    label: "Operations",
    trends: [
      "HR Compliance",
      "CSU Compliance",
      "SCU Compliance and Performance",
      "BPU Compliance and Performance",
      "GOC Compliance and Performance",
    ],
  },
  {
    label: "Finance",
    trends: ["P&L Performance ", "WCM Compliance"],
  },
  {
    label: "Customer Experience / Customer Service",
    trends: ["Performance and Compliance ", "Performance"],
  },
]);
console.log(openScenario.value);
const colors = ref([
  "text-[#F3722C]",
  "text-[#90BE6D]",
  "text-[#9E00D5]",
  "text-[#0009D5]",
  "text-[#2D9CDB]",
  "text-[#F94144]",
  "text-[#F8961E]",
  "text-[#F980DF]",
  "text-[#43AA8B]",
]);
onMounted(() => {
  // processPMUQuarterly()
  // processOperationGraphData();
});
const randomColor = (index) => {
  index = index % colors.value.length;
  return colors.value[index];
};

const setTrends = (label) => {
  const entity = entities.value.find((e) => {
    return e.label == label;
  });
  selectedEntity.value = label;
  emit("setEntity", label);
  trends.value = entity.trends;
  getTrends();
};

const setTrendType = (trendType = "") => {
  if (selectedEntity.value.toLowerCase() == "Operations".toLowerCase()) {
    if (trendType.includes("HR")) {
      selectedUnit.value = 5;
    }
    if (trendType.includes("CSU")) {
      selectedUnit.value = 7;
    }
    if (trendType.includes("SCU")) {
      selectedUnit.value = 2;
    }
    if (trendType.includes("BPU")) {
      selectedUnit.value = 1;
    }
    if (trendType.includes("GOC")) {
      selectedUnit.value = 9;
    }
  }
  console.log(trendType);
  selectedTrendType.value = trendType;
  getTrends();
};

const setSubTrendType = (value) => {
  subTrendType.value = value;
  getTrends();
};

const setScenario = (value) => {
  selectedScenario.value = value;
};
const setTeam = (value) => {
  if (selectedScenario.value == "team") {
    selectedTeam.value = value;
  }
  if (selectedScenario.value == "location") {
    selectedLocation.value = value;
  }
  if (selectedScenario.value == "timeslot") {
    selectedTime.value = value;
  }
  getTrends();
};
const getTrends = () => {
  if (selectedEntity.value == "PMO and SDU") {
    getPMUTrends();
  }
  if (selectedEntity.value == "Operations") {
    getOperationTrends();
  }
};
const getPMUTrends = async () => {
  let response = { status: null, data: null };
  if (props.filter == "hourly") {
    if (selectedScenario.value == "team") {
      const { status, data } = await ccsRequests(
        "get",
        `reports/suburban/trend?filter=${props.filter}&team=${selectedTeam.value}&scenario=team&day=${props.filterValue}`
      );
      processPMDDaily(data?.data);
      // response.data = status;
      // response.data = data;
    }
    if (selectedScenario.value == "location") {
      const { status, data } = await ccsRequests(
        "get",
        `reports/suburban/trend?filter=${props.filter}&team=${selectedTeam.value}&scenario=location&day=${props.filterValue}&zone=${selectedLocation.value}`
      );

      processPMDDaily(data?.data);
      // response.data = status;
      // response.data = data;
    }
    if (selectedScenario.value == "timeslot") {
      const { status, data } = await ccsRequests(
        "get",
        `reports/suburban/trend?filter=${props.filter}&team=${selectedTeam.value}&scenario=time&day=${props.filterValue}&slot=${selectedTime.value}`
      );
      processPMDDaily(data?.data);
      // response.data = status;
      // response.data = data;
    }

    if (response.status == 200) {
      if (response.data?.data) {
        processPMDDaily(response.data.data);
      }
    }
    return;
  } else {
    if (selectedScenario.value == "team") {
      const { status, data } = await ccsRequests(
        "get",
        `reports/suburban/trend?filter=${props.filter}&team=${selectedTeam.value}&scenario=team&start_date=${props.filterValue}&end_date=${props.endDate}`
      );
      processPMUQuarterly(data.data);
      // response.data = status;
      // response.data = data;
    }
    if (selectedScenario.value == "location") {
      const { status, data } = await ccsRequests(
        "get",
        `reports/suburban/trend?filter=${props.filter}&team=${selectedTeam.value}&scenario=location&start_date=${props.filterValue}&end_date=${props.endDate}&zone=${selectedLocation.value}`
      );

      processPMUQuarterly(data.data);
      // response.data = status;
      // response.data = data;
    }
    if (selectedScenario.value == "timeslot") {
      const { status, data } = await ccsRequests(
        "get",
        `reports/suburban/trend?filter=${props.filter}&team=${selectedTeam.value}&scenario=time&start_date=${props.filterValue}&end_date=${props.endDate}&slot=${selectedTime.value}`
      );
      processPMUQuarterly(data.data);
      // response.data = status;
      // response.data = data;
    }
  }
  // if (props.filter == "daily") {
  //   if (selectedScenario.value == "team") {
  //     const { status, data } = await ccsRequests(
  //       "get",
  //       `reports/suburban/trend?filter=${props.filter}&team=${selectedTeam.value}&scenario=team&start_date=${props.filterValue}&end_date=${props.endDate}`
  //     );
  //     processPMUQuarterly(data.data);
  //     // response.data = status;
  //     // response.data = data;
  //   }
  //   if (selectedScenario.value == "location") {
  //     const { status, data } = await ccsRequests(
  //       "get",
  //       `reports/suburban/trend?filter=${props.filter}&team=${selectedTeam.value}&scenario=location&start_date=${props.filterValue}&end_date=${props.endDate}&zone=${selectedLocation.value}`
  //     );

  //     processPMUQuarterly(data.data);
  //     // response.data = status;
  //     // response.data = data;
  //   }
  //   if (selectedScenario.value == "timeslot") {
  //     const { status, data } = await ccsRequests(
  //       "get",
  //       `reports/suburban/trend?filter=${props.filter}&team=${selectedTeam.value}&scenario=time&start_date=${props.filterValue}&end_date=${props.endDate}&slot=${selectedTime.value}`
  //     );
  //     processPMUQuarterly(data.data);
  //     // response.data = status;
  //     // response.data = data;
  //   }

  //   if (response.status == 200) {
  //     if (response.data?.data) {
  //       processPMDDaily(response.data.data);
  //     }
  //   }
  //   return;
  // }
  // if (props.filter == "quarterly" || props.filter == "annually") {
  //   if (selectedScenario.value == "team") {
  //     const { status, data } = await ccsRequests(
  //       "get",
  //       `reports/suburban/trend?filter=${props.filter}&team=${selectedTeam.value}&scenario=team&start_date=${props.filterValue}&end_date=${props.endDate}`
  //     );
  //     processPMUQuarterly(data?.data);
  //     response.status = status;
  //     response.data = data;
  //   }
  //   if (selectedScenario.value == "location") {
  //     const { status, data } = await ccsRequests(
  //       "get",
  //       `reports/suburban/trend?filter=${props.filter}&team=${selectedTeam.value}&scenario=location&start_date=${props.filterValue}&end_date=${props.endDate}&zone=${selectedLocation.value}`
  //     );
  //     processPMUQuarterly(data?.data);
  //     // response.status = status;
  //     // response.data = data;
  //   }
  //   if (selectedScenario.value == "timeslot") {
  //     const { status, data } = await ccsRequests(
  //       "get",
  //       `reports/suburban/trend?filter=${props.filter}&team=${selectedTeam.value}&scenario=time&start_date=${props.filterValue}&end_date=${props.endDate}&slot=${selectedTime.value}`
  //     );
  //     processPMUQuarterly(data.data);
  //     response.status = status;
  //     response.data = data;
  //   }
  //   if (response.status == 200) {
  //     if (response.data?.data) {
  //       processPMUQuarterly(response.data.data);
  //     }
  //   }
  //   return;
  // }
  // if (props.filter == "weekly") {
  //   if (selectedScenario.value == "team") {
  //     const { status, data } = await ccsRequests(
  //       "get",
  //       `reports/suburban/trend?filter=${props.filter}&team=${selectedTeam.value}&scenario=team&start_date=${props.filterValue}&end_date=${props.endDate}`
  //     );
  //     processPMUQuarterly(data.data);
  //     response.status = status;
  //     response.data = data;
  //   }
  //   if (selectedScenario.value == "location") {
  //     const { status, data } = await ccsRequests(
  //       "get",
  //       `reports/suburban/trend?filter=${props.filter}&team=${selectedTeam.value}&scenario=location&start_date=${props.filterValue}&end_date=${props.endDate}&zone=${selectedLocation.value}`
  //     );
  //     processPMUQuarterly(data.data);
  //     // response.status = status;
  //     // response.data = data;
  //   }
  //   if (selectedScenario.value == "timeslot") {
  //     const { status, data } = await ccsRequests(
  //       "get",
  //       `reports/suburban/trend?filter=${props.filter}&team=${selectedTeam.value}&scenario=time&start_date=${props.filterValue}&end_date=${props.endDate}&slot=${selectedTime.value}`
  //     );
  //     processPMUQuarterly(data.data);
  //     response.status = status;
  //     response.data = data;
  //   }

  //   if (response.status == 200) {
  //     if (response.data?.data) {
  //       processPMUQuarterly(response.data.data);
  //     }
  //   }
  //   return;
  // }
  // if (props.filter == "monthly") {
  //   if (selectedScenario.value == "team") {
  //     const { status, data } = await ccsRequests(
  //       "get",
  //       `reports/suburban/trend?filter=${props.filter}&team=${selectedTeam.value}&scenario=team&start_date=${props.filterValue}&end_date=${props.endDate}`
  //     );
  //     processPMUQuarterly(data.data);
  //     response.status = status;
  //     response.data = data;
  //   }
  //   if (selectedScenario.value == "timeslot") {
  //     const { status, data } = await ccsRequests(
  //       "get",
  //       `reports/suburban/trend?filter=${props.filter}&team=${selectedTeam.value}&scenario=time&slot=${selectedTime.value}&start_date=${props.filterValue}&end_date=${props.endDate}`
  //     );
  //     processPMUQuarterly(data?.data);
  //     response.status = status;
  //     response.data = data;
  //   }
  //   if (selectedScenario.value == "location") {
  //     const { status, data } = await ccsRequests(
  //       "get",
  //       `reports/suburban/trend?filter=${props.filter}&team=${selectedTeam.value}&scenario=location&zone=${selectedLocation.value}&start_date=${props.filterValue}&end_date=${props.endDate}`
  //     );
  //     processPMUQuarterly(data.data);
  //     response.status = status;
  //     response.data = data;
  //   }
  // }
};
const getOperationTrends = async () => {
  try {
    if (props.filter == "daily") {
      const { status, data } = await workplaceRequestsv2(
        "get",
        `trends-analysis/unit/${selectedUnit.value}?separator=days&start_date=${props.filterValue}&end_date=${props.endDate}`
      );
      if (status == 200) {
        let res = data?.data?.results?.data;
        if (res.trend) {
          processOperationGraphData(res.trend);
        }
      }
    }
    if (props.filter == "monthly") {
      let dt = new Date(props.filterValue);
      year.value = dt.getFullYear();
      const { status, data } = await workplaceRequestsv2(
        "get",
        `trends-analysis/unit/${selectedUnit.value}?separator=months&year=${year.value}`
      );
      if (status == 200) {
        let res = data?.data?.results?.data;
        if (res.trend) {
          processOperationGraphData(res.trend);
        }
      }
      console.log("report data", data);
    }
    // const {status, data}=await workplaceRequestsv2('get', ``)
  } catch (e) {}
};
watch(
  () => props.filter,
  () => {
    getTrends();
  }
);
watch(
  () => props.filterValue,
  () => {
    getTrends();
  }
);
watch(
  () => props.endDate,
  () => {
    getTrends();
  }
);

const getWeek = (date) => {
  let dt = new Date(date).getDate();

  // Use if-else statements for range checks
  if (dt <= 7) {
    return 1;
  } else if (dt <= 14) {
    return 2;
  } else if (dt <= 21) {
    return 3;
  } else if (dt <= 31) {
    return 4;
  }

  // Handle cases where dt is out of the expected range
  return -1; // Or another value indicating an error or out-of-range date
};

const processOperationGraphData = (data) => {
  try {
    // data = {
    //   "2024-01-01": {
    //     obligation: 60,
    //     efficiency: 0,
    //     compliance: 80,
    //     score: 0,
    //   },
    //   "2024-01-02": {
    //     obligation: 30,
    //     efficiency: 0,
    //     compliance: 40,
    //     score: 0,
    //   },
    //   "2024-01-03": {
    //     obligation: 0,
    //     efficiency: 0,
    //     compliance: 0,
    //     score: 0,
    //   },
    //   "2024-01-04": {
    //     obligation: 0,
    //     efficiency: 0,
    //     compliance: 0,
    //     score: 0,
    //   },
    //   "2024-01-05": {
    //     obligation: 0,
    //     efficiency: 0,
    //     compliance: 0,
    //     score: 0,
    //   },
    //   "2024-01-06": {
    //     obligation: 0,
    //     efficiency: 0,
    //     compliance: 0,
    //     score: 0,
    //   },
    //   "2024-01-07": {
    //     obligation: 0,
    //     efficiency: 0,
    //     compliance: 0,
    //     score: 0,
    //   },
    //   "2024-01-08": {
    //     obligation: 0,
    //     efficiency: 0,
    //     compliance: 0,
    //     score: 0,
    //   },
    //   "2024-01-09": {
    //     obligation: 0,
    //     efficiency: 0,
    //     compliance: 0,
    //     score: 0,
    //   },
    //   "2024-01-10": {
    //     obligation: 0,
    //     efficiency: 0,
    //     compliance: 0,
    //     score: 0,
    //   },
    //   "2024-01-11": {
    //     obligation: 0,
    //     efficiency: 0,
    //     compliance: 0,
    //     score: 0,
    //   },
    //   "2024-01-12": {
    //     obligation: 0,
    //     efficiency: 0,
    //     compliance: 0,
    //     score: 0,
    //   },
    //   "2024-01-13": {
    //     obligation: 0,
    //     efficiency: 0,
    //     compliance: 0,
    //     score: 0,
    //   },
    //   "2024-01-14": {
    //     obligation: 0,
    //     efficiency: 0,
    //     compliance: 0,
    //     score: 0,
    //   },
    //   "2024-01-15": {
    //     obligation: 0,
    //     efficiency: 0,
    //     compliance: 0,
    //     score: 0,
    //   },
    //   "2024-01-16": {
    //     obligation: 0,
    //     efficiency: 0,
    //     compliance: 0,
    //     score: 0,
    //   },
    //   "2024-01-17": {
    //     obligation: 0,
    //     efficiency: 0,
    //     compliance: 0,
    //     score: 0,
    //   },
    //   "2024-01-18": {
    //     obligation: 0,
    //     efficiency: 0,
    //     compliance: 0,
    //     score: 0,
    //   },
    //   "2024-01-19": {
    //     obligation: 0,
    //     efficiency: 0,
    //     compliance: 0,
    //     score: 0,
    //   },
    //   "2024-01-20": {
    //     obligation: 0,
    //     efficiency: 0,
    //     compliance: 0,
    //     score: 0,
    //   },
    //   "2024-01-21": {
    //     obligation: 0,
    //     efficiency: 0,
    //     compliance: 0,
    //     score: 0,
    //   },
    //   "2024-01-22": {
    //     obligation: 0,
    //     efficiency: 0,
    //     compliance: 0,
    //     score: 0,
    //   },
    // };
    chartData.value.labels = [];
    chartData.value.datasets[0].data = [];
    chartData.value.datasets[1].data = [];
    Object.entries(data).forEach((k, v) => {
      chartData.value.labels.push(k[0]);
      k[1].compliance > 0 ? chartData.value.datasets[0].data.push(k[1].compliance/100 ):chartData.value.datasets[0].data.push(k[1].compliance );
      k[1].obligation > 0 ? chartData.value.datasets[0].data.push(k[1].obligation/100 ):chartData.value.datasets[0].data.push(k[1].obligation );
      // chartData.value.datasets[1].data.push(k[1].obligation);
    });
    emit("setChartData", chartData.value);
  } catch (e) {}
};

const processPMUQuarterly = (data) => {
  try {
    chartData.value.labels = [];
    chartData.value.datasets[0].data = [];
    chartData.value.datasets[1].data = [];
    Object.entries(data).forEach((k, v) => {
      chartData.value.labels.push(k[0]);
      chartData.value.datasets[0].data.push(k[1].avg_compliance);
      chartData.value.datasets[1].data.push(k[1].avg_performance);
    });
    emit("setChartData", chartData.value);
  } catch (e) {}
};

const processPMDDaily = (data) => {
  try {
    chartData.value.labels = [];
    chartData.value.datasets[0].data = [];
    chartData.value.datasets[1].data = [];
    data.forEach((k, v) => {
      chartData.value.labels.push(v);
      chartData.value.datasets[0].data.push(k.avg_compliance);
      chartData.value.datasets[1].data.push(k.avg_performance);
    });
    emit("setChartData", chartData.value);
  } catch (e) {}
};
</script>
