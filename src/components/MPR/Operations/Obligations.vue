<template>
 <section class="pl-6 pr-6 pt-5">
        <form class=" border bg-white shadow-sm pl-8 pt-4 pb-4 pr-8 mt-8 items-center justify-center">
              <nav class="flex justify-between font-semibold text-gray-600">
                <div class="flex items-center">
                  <div class="grid grid-cols-1 mr-2">
                    <span class="text-xl font-semibold">Performance & Compliance Analysis</span>
                  </div>
                </div>
                <div> 
                  <div class="flex items-center justify-center space-x-3">
                  <div class="flex flex-row-reverse items-center">
                  <div class="ml-2 flex items-center">
                  <input
                   type="date"
                    placeholder=""
                    @change="getPerformanceOverview"
                    required 
                    v-model="start_date"
                    class="p-2 border border-gray-500 w-full mr-2 rounded-sm"
                  />
                  <input
                   type="date"
                    placeholder=""
                    @change="getPerformanceOverview"
                    v-model="end_date"
                    required 
                    class="p-2 border border-gray-500 w-full rounded-sm"
                  />
              </div>
              filter
              <!-- <div>
                <select
                  class=" rounded-sm border border-secondary p-2 focus:outline-none"
                >
                  <option value="" selected>month</option>
                  <option value="1">January</option>
                  <option value="2">February</option>
                  <option value="3">March</option>
                </select>
              </div> -->
            </div>
                  </div>
                </div>
              </nav>
          </form>
          <div class=" bg-white">
          <section class="grid grid-cols-2 gap-6 p-8 mt-6 shadow-md">
            <div class="w-full border border-gray-200 rounded-md p-4" >
              <div v-if="isLoading" class="loader"></div>
              <GaugeChart
                v-if="!isLoading"
                :key="departments[1].key"
                :size="departments[1].size"
                :id="`gaugeChart${11}`"
                :department="departments[1].name"
                :gauge="departments[1].gauge"
              />
            </div>
            <div class="w-full border border-gray-200 rounded-md p-4">
              <div v-if="isLoading" class="loader"></div>
              <GaugeChart
                v-if="!isLoading"
                :key="departments[0].key"
                :size="departments[0].size"
                :id="`gaugeChart${1}`"
                :department="departments[0].name"
                :gauge="departments[0].gauge"
              />
            </div>
            <div class="w-full border border-gray-200 rounded-md p-4">
              <div v-if="isLoading" class="loader"></div>
              <GaugeChart
                v-if="!isLoading"
                :key="departments[2].key"
                :size="departments[2].size"
                :id="`gaugeChart${111}`"
                :department="departments[2].name"
                :gauge="departments[2].gauge"
              />
            </div><br />
            <div class="flex  flex-row justify-center items-center place-content-center pl-40">
              <div v-if="!isLoading" class="flex flex-row justify-center items-center place-content-center ml-96">
                  <button
                    @click="goToBPAD"
                    class=" shrink-0 rounded-md border border-solid bg-orange-500 pb-3.5 pl-6 pr-7 pt-3.5 text-white"
                  >
                   View Analysis
                  </button>
                </div>
            </div>
        </section>
      </div>
  </section>
</template>

<script setup>
import {onMounted, ref} from 'vue'
import { Doughnut } from 'vue-chartjs'
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from 'chart.js'
import workplaceRequestsv2 from '../../../services/workplaceRequestsv2';
import Swal from 'sweetalert2'
import GaugeChart from "@/components/GaugeChart.vue";

ChartJS.register(Tooltip, Legend, ArcElement)

onMounted(() => {
  getPerformanceOverview()
})

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

const isLoading = ref(true)

const goToBPAD = () => {
  window.location.href = 'bpd/analysis'
}
const departments = ref([
  {
    key: 0,
    name: "Compliance",
    size: "400",
    gauge: 0,
  },
  {
    key: 0,
    name: "Obligations",
    size: "400",
    gauge: 0,
  },
  {
    key: 0,
    name: "Efficiency",
    size: "400",
    gauge: 0,
  },
]);

const performanceData = ref()

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
        departments.value[1].gauge += v.analysis.obligation;
        departments.value[2].gauge += v.analysis.efficiency;
      });
      departments.value[0].gauge =// Math.ceil(
        parseFloat((departments.value[0].gauge / 5).toFixed(2))

      // );
      departments.value[0].key++ 

      departments.value[1].gauge = parseFloat((departments.value[1].gauge / 5).toFixed(2))
      departments.value[1].key++ 

      departments.value[2].gauge = parseFloat((departments.value[2].gauge / 5).toFixed(2))
      departments.value[2].key++ 
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