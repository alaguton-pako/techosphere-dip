<template>
    <section class="pl-6 pr-6 pt-5">
      
      <form class=" border bg-white shadow-sm pl-8 pt-4 pb-4 pr-8 mt-8 items-center justify-center">
              <nav class="flex justify-between font-semibold text-gray-600">
                <div class="flex items-center">
                  <div class="grid grid-cols-1">
                    <span class="text-xl font-semibold">Operational Ratio</span>
                    <!-- <span class="text-sm font-light">Target for the year 75.58%.</span> -->
                  </div>
                </div>
                <!-- <div>
                  <div class="flex items-center justify-center space-x-3">
                    <div class="flex cursor-pointer rounded-md py-2 text-black">
                      <img src="../../../assets/delete_vector.svg" class="mr-1" />
                      <p>Delete</p>
                    </div>
                    <div class="mx-2 flex cursor-pointer rounded-md px-6 py-2">
                      <img src="../../../assets/bars-filter.svg" class="mx-2 mr-1" />
                      <p>Filters</p>
                    </div>
                    <div
                      class="flex cursor-pointer rounded-md border border-gray-400 px-6 py-2"
                    >
                      <img src="../../../assets/export.svg" class="mr-1" />
                      <p class="mx-1">Export</p>
                    </div>
                  </div>
                </div> -->
              </nav>
          </form>
          <div class=" bg-white shadow-md">
          <section class="p-3 mt-4 flex flex-row ">
            <canvas id="lineChart" class="p-3"></canvas>
          </section>
          </div>
          <form class=" border bg-white shadow-sm pl-8 pt-4 pb-4 pr-8 mt-10 items-center justify-center">
              <nav class="flex justify-between font-semibold text-gray-600">
                <div class="flex items-center">
                  <div class="grid grid-cols-1">
                    <span class="text-xl font-semibold">Return on Assets</span>
                    <span class="text-sm font-light">Target for the year 50.08%.</span>
                  </div>
                </div>
                <!-- <div>
                  <div class="flex items-center justify-center space-x-3">
                    <div class="flex cursor-pointer rounded-md py-2 text-black">
                      <img src="../../../assets/delete_vector.svg" class="mr-1" />
                      <p>Delete</p>
                    </div>
                    <div class="mx-2 flex cursor-pointer rounded-md px-6 py-2">
                      <img src="../../../assets/bars-filter.svg" class="mx-2 mr-1" />
                      <p>Filters</p>
                    </div>
                    <div
                      class="flex cursor-pointer rounded-md border border-gray-400 px-6 py-2"
                    >
                      <img src="../../../assets/export.svg" class="mr-1" />
                      <p class="mx-1">Export</p>
                    </div>
                  </div>
                </div> -->
              </nav>
          </form>
          <div class=" bg-white shadow-md">
            <section class="p-3 mt-4 flex flex-row ">
            <!-- <div class="w-1/4 font-semibold text-3xl mr-2 mt-40 ml-8 flex flex-col">1,436 <div class="mx-3">Total</div></div> -->
              <canvas id="barChart" class="w-2/4 p-12"></canvas>
            </section>
          </div>
   </section>
 </template>
 
 <script setup>
 import { ref, onMounted} from 'vue';
import Chart from "chart.js/auto";
 
const chartData = ref(null);
const chartRef = ref(null);

onMounted(() => {
  const ctx = document.getElementById("barChart").getContext("2d");
  chartData.value = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["January", "February", "March", "April"],
      datasets: [
        {
          label: "Return on Assets",
          data: [(56667772.47/912494053), (61015384.5/912494053), (61803413.5/912494053), (55782032.834/912494053)],
          backgroundColor: [
            "#0F52BA",
          ],
          borderColor: [
            "#4B9CD3",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: function(value) {
              return value + '%';
            }
          }
        },
      },
      tooltips: {
        callbacks: {
          label: function(tooltipItem, data) {
            let label = data.datasets[tooltipItem.datasetIndex].label || '';

            if (label) {
              label += ': ';
            }
            label += tooltipItem.yLabel + '%';
            return label;
          }
        }
      }
    },
  });
});



onMounted(() => {
  const ctx = document.getElementById("lineChart").getContext("2d");
  chartRef.value = new Chart(ctx, {
    type: "line",
    data: {
      labels: [ "January", "February",  "March", "April"],
      labels: ["January", "February", "March", "April"],
      datasets: [
      {
        label: "Operational Ratio",
        data: [0,0,(26557357.75 / (61038413.5 + (255000*3))),((49565725.21 + 17671500)/ (55782032.834))], 
        fill: true,
        borderColor: "red", 
        backgroundColor: "rgb(253 238 242)",
        borderWidth: 1, 
      },
      
    ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
});
 </script>