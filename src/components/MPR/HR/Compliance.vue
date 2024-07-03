<template>
    <section class="pl-6 pr-6 pt-5">
        <form class=" border bg-white shadow-sm pl-8 pt-4 pb-4 pr-8 mt-8 items-center justify-center">
              <nav class="flex justify-between font-semibold text-gray-600">
                <div class="flex items-center">
                  <div class="grid grid-cols-1">
                    <span class="text-xl font-semibold"
                      >Compliance Breakdown</span
                    >
                    <!-- <span class="text-sm font-light"
                      >A description body text comes here.</span
                    > -->
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
          <section class="border border-gray-500 rounded-md pl-8 pt-4 pb-4 pr-8 mt-8 ">
            <canvas ref="chartRef" class="p-3"></canvas>
          </section>
       <section>
       </section>
    </section>
   
  </template>
  <script setup>
  import { ref, onMounted} from 'vue';
  import { Chart, registerables } from 'chart.js';

  
  Chart.register(...registerables);

 
 const chartRef = ref(null);
const data1 = ref([
  
  {
    name: 'Mar',
    items: [
      // { name: 'Compliance', value: 30, color: 'orange' },
      { name: 'Disciplinary Point', value: 692, color: 'black' },
      { name: 'Merits', value: 34, color: 'blue' },
      { name: 'Daily Schedule', value: 609, color: 'skyblue' },
      { name: 'Close Outs', value: 341, color: 'gray' },
    ],
  },
]);

const getReport = async(month) => {
  try {
    const { status, data } = await workplaceRequestsv2(
      "get",
      `appraisals/bpu/history?operations/bp/points-and-schedules/summary?month=April`    
    );
    if (status == 200) {
    //  data1.value.items[0]['value'] = 
    }
  } catch (error) {
    
  }
}
onMounted(() => {
  getReport("April")
})
onMounted(() => {

  const ctx = chartRef.value.getContext('2d');
  const chartData = {
    labels: data1.value.map((d) => d.name),
    datasets: data1.value[0].items.map((item, index) => ({
      label: item.name,
      data: data1.value.map((d) => d.items[index].value),
      backgroundColor: item.color,
    })),
  };

  new Chart(ctx, {
    type: 'bar',
    data: chartData,
    options: {
      indexAxis: 'y',
      scales: {
        x: {
          beginAtZero: true,
        },
      },
    },
  });
});



</script>
  