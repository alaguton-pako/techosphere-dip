<template>
     <section class="pl-4 pr-4 pt-5">
        <form class=" border bg-white shadow-sm pl-6 pt-4 pb-4 pr-6 mt-6 items-center justify-center">
              <nav class="flex justify-between font-semibold text-gray-600">
                <div class="flex items-center">
                  <div class="grid grid-cols-1">
                    <span class="text-xl font-semibold">Summary</span>
                    <span class="text-sm font-light">A description body text comes here.</span>
                  </div>
                </div>
                <div>
                  <div class="flex items-center justify-center space-x-3">
                    <div class="flex cursor-pointer rounded-md py-2 text-black">
                        <img src="../../../../assets/delete_vector.svg" class="mr-1" />
                        <p>Delete</p>
                       </div>
                    <div class="mx-2 flex cursor-pointer rounded-md px-6 py-2">
                      <img src="../../../../assets/bars-filter.svg" class="mx-2 mr-1" />
                      <p>Filters</p>
                    </div>
                    <div
                      class="flex cursor-pointer rounded-md border border-gray-400 px-6 py-2"
                    >
                      <img src="../../../../assets/export.svg" class="mr-1" />
                      <p class="mx-1">Export</p>
                    </div>
                  </div>
                </div>
              </nav>
          </form>
          <section class="border border-gray-500 rounded-md pl-8 pt-4 pb-4 pr-8 mt-8">
          <canvas ref="chartRef" id="myChart"></canvas>
        </section>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { Chart, registerables } from 'chart.js';
import DepartmentalTab from './DepartmentalTab.vue';
Chart.register(...registerables);


const props = defineProps(['activeTab']);

const chartRef = ref(null);

onMounted(() => {
  createChart();
});

function createChart() { 
  const ctx = chartRef.value.getContext('2d');
  const gradient = ctx.createLinearGradient(0, 0, 0, 450);
  gradient.addColorStop(0, 'rgba(255, 0, 0, 0.5)');
  gradient.addColorStop(0.5, 'rgba(255, 0, 0, 0.25)');
  gradient.addColorStop(1, 'rgba(255, 0, 0, 0)');

  const gradient2 = ctx.createLinearGradient(0, 0, 0, 450);
  gradient2.addColorStop(0, 'rgba(0, 231, 255, 0.9)');
  gradient2.addColorStop(0.5, 'rgba(0, 231, 255, 0.25)');
  gradient2.addColorStop(1, 'rgba(0, 231, 255, 0)');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Operations', 'Finance', 'Marketing'],
      datasets: [{
        label: 'Number of Staff',
        data: [6,20, 50, 94, 30, 45, 59, 15],
        borderColor: "Orange", 
        backgroundColor: "rgb(249 217	249)",
        borderWidth: 1, 
      }, {
        label: 'Average Rating',
        data: [9,80, 60, 90, 40, 80, 60,12],
        borderColor: "violet", 
        backgroundColor: "rgb(249	217 249)",
        borderWidth: 1, 
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            stepSize: 10 
          }
        }
      }
    }
  });
}


</script>
