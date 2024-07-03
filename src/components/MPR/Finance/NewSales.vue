<template>
<section class="pl-6 pr-6 pt-5">
     <form class=" border bg-white shadow-sm pl-8 pt-4 pb-4 pr-8 mt-10 items-center justify-center">
             <nav class="flex justify-between font-semibold text-gray-600">
               <div class="flex items-center">
                 <div class="grid grid-cols-1">
                   <span class="text-xl font-semibold">Sales Performance (Unit)</span>
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
         <section class="p-3 mt-4 ">
           <canvas ref="chartRef" class="p-5"></canvas>
         </section>
         </div>
     <form class=" border bg-white shadow-sm pl-8 pt-4 pb-4 pr-8 mt-10 items-center justify-center">
             <nav class="flex justify-between font-semibold text-gray-600">
               <div class="flex items-center">
                 <div class="grid grid-cols-1">
                   <span class="text-xl font-semibold">Sales Revenue Performance (NGN)</span>
                 </div>
               </div>
               <div>
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
               </div>
             </nav>
         </form>
         <div class=" bg-white shadow-md">
         <section class="p-3 mt-4 ">
           <canvas ref="chartRec" class="p-5"></canvas>
         </section>
         </div>
     <form class=" border bg-white shadow-sm pl-8 pt-4 pb-4 pr-8 mt-10 items-center justify-center">
             <nav class="flex justify-between font-semibold text-gray-600">
               <div class="flex items-center">
                 <div class="grid grid-cols-1">
                   <span class="text-xl font-semibold">New Sales Per Product</span>
                   <span class="text-sm font-light">A description body text comes here.</span>
                 </div>
               </div>
               <div>
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
               </div>
             </nav>
         </form>
         <div class=" bg-white shadow-md">
         <section class="p-3 mt-4 ">
           <canvas ref="chartRea" class="p-5"></canvas>
         </section>
         </div>
 </section>
</template>

<script setup>
import { ref, onMounted} from 'vue';
import { Chart, registerables } from 'chart.js';
 Chart.register(...registerables);

const chartRef = ref(null);
const chartRec = ref(null);
const chartRea = ref(null);
const data1 = ref([
{
   name: 'January',
   items: [
     { name: 'Total', value: 14, color: 'Green' },
     { name: 'Business Dual Play', value: 0, color: 'grey' },
     { name: 'Business Triple Play', value: 1, color: 'yellow' },
     { name: 'Business Wifi', value: 0, color: 'red' },
     { name: 'Cloud', value: 13, color: 'blue' },
     { name: 'Managed Services', value: 0, color: 'black' },
     { name: 'Business Triple Play X', value: 0, color: 'indigo' },
   ],
 },
 {
   name: 'February',
   items: [
     { name: 'Total', value: 15, color: 'Green' },
     { name: 'Business Dual Play', value: 3, color: 'grey' },
     { name: 'Business Triple Play', value: 5, color: 'yellow' },
     { name: 'Business Wifi', value: 0, color: 'red' },
     { name: 'Cloud', value: 6, color: 'blue' },
     { name: 'Managed Services', value: 0, color: 'black' },
     { name: 'Business Triple Play X', value: 1, color: 'indigo' },
   ],
 },
 {
   name: 'March',
   items: [
   { name: 'Total', value: 62, color: 'Green' },
     { name: 'Business Dual Play', value: 2, color: 'grey' },
     { name: 'Business Triple Play', value: 0, color: 'yellow' },
     { name: 'Business Wifi', value: 1, color: 'red' },
     { name: 'Cloud', value: 59, color: 'blue' },
     { name: 'Managed Services', value: 0, color: 'black' },
     { name: 'Business Triple Play X', value: 0, color: 'indigo' },
   ],
 },
 {
   name: 'April',
   items: [
   { name: 'Total', value: 92, color: 'Green' },
     { name: 'Business Dual Play', value: 1, color: 'grey' },
     { name: 'Business Triple Play', value: 1, color: 'yellow' },
     { name: 'Business Wifi', value: 0, color: 'red' },
     { name: 'Cloud', value: 88, color: 'blue' },
     { name: 'Managed Services', value: 0, color: 'black' },
     { name: 'Business Triple Play X', value: 2, color: 'indigo' },
   ],
 }

]);
const data2 = ref([
 {
   name: 'January',
   items: [
   { name: 'Total', value: 471833.33, color: 'Green' },
     { name: 'Business Dual Play', value: 471833.33, color: 'grey' },
     { name: 'Business Triple Play', value: 0, color: 'yellow' },
     { name: 'Business Wifi', value: 0, color: 'red' },
     { name: 'Cloud', value: 148726.25, color: 'blue' },
     { name: 'Managed Services', value: 0, color: 'black' },
     { name: 'Business Triple Play X', value: 0, color: 'indigo' },
   ],
 },
 {
   name: 'February',
   items: [
   { name: 'Total', value: 4457804.14, color: 'Green' },
     { name: 'Business Dual Play', value: 974499.99, color: 'grey' },
     { name: 'Business Triple Play', value: 2359166.65, color: 'yellow' },
     { name: 'Business Wifi', value: 0, color: 'red' },
     { name: 'Cloud', value:243956.47, color: 'blue' },
     { name: 'Managed Services', value: 0, color: 'black' },
     { name: 'Business Triple Play X', value: 1124137.5, color: 'indigo' },
   ],
 },
 {
   name: 'March',
   items: [
     { name: 'Total', value: 939333.33, color: 'Green' },
     { name: 'Business Dual Play', value: 649666.66, color: 'grey' },
     { name: 'Business Triple Play', value: 0, color: 'yellow' },
     { name: 'Business Wifi', value: 289666.67, color: 'red' },
     { name: 'Cloud', value: 259012.98, color: 'blue' },
     { name: 'Managed Services', value: 0, color: 'black' },
     { name: 'Business Triple Play X', value: 0, color: 'indigo' },
   ]
 },
 {
   name: 'April',
   items: [
     { name: 'Total', value: 1177193.3871, color: 'Green' },
     { name: 'Business Dual Play', value: 82183.75, color: 'grey' },
     { name: 'Business Triple Play', value: 162593.75, color: 'yellow' },
     { name: 'Business Wifi', value: 0, color: 'red' },
     { name: 'Cloud', value: 279479.51, color: 'blue' },
     { name: 'Managed Services', value: 0, color: 'black' },
     { name: 'Business Triple Play X', value: 951513.75, color: 'indigo' },
   ]
 }

]);
const data3 = ref([
 { month: 'January', data: { BusinessDualPlay: 0, 
                            BusinessTriplePlay: 1, 
                            BusinessWifi: 0, 
                            Cloud: 13, 
                            ManagedServices: 0, 
                            BusinessTriplePlayX: 0
                          }
  },
  { month: 'February', data: { BusinessDualPlay: 3, 
                            BusinessTriplePlay: 5, 
                            BusinessWifi: 0, 
                            Cloud: 6, 
                            ManagedServices: 0, 
                            BusinessTriplePlayX: 1
                          }
  },
  { month: 'March', data: { BusinessDualPlay: 2, 
                            BusinessTriplePlay: 0, 
                            BusinessWifi: 1, 
                            Cloud: 59, 
                            ManagedServices: 0, 
                            BusinessTriplePlayX: 0
                          }
  },
  { month: 'April', data: { BusinessDualPlay: 1, 
                            BusinessTriplePlay: 1, 
                            BusinessWifi: 0, 
                            Cloud: 88, 
                            ManagedServices: 0, 
                            BusinessTriplePlayX: 2
                          }
  }
  // ,
//  { month: 'February', data: { LegendPay: 15, LegendWiFi: 5, LegendFiber: 15} },
//  { month: 'March', data: { LegendPay: 20, LegendWiFi: 8, LegendFiber: 5} },
//  { month: 'April', data: { LegendPay: 15, LegendWiFi: 5, LegendFiber: 10} },
//  { month: 'May', data: { LegendPay: 5, LegendWiFi: 8, LegendFiber: 9} },
//  { month: 'June', data: { LegendPay: 8, LegendWiFi: 3, LegendFiber: 5} },
//  { month: 'July', data: { LegendPay: 9, LegendWiFi: 5, LegendFiber: 15} },
//  { month: 'August', data: { LegendPay: 18, LegendWiFi: 10, LegendFiber: 13} },
//  { month: 'September', data: { LegendPay: 20, LegendWiFi: 5, LegendFiber: 12} },
//  { month: 'October', data: { LegendPay: 3, LegendWiFi: 15, LegendFiber: 10} },
//  { month: 'November', data: { LegendPay: 6, LegendWiFi: 5, LegendFiber: 5} },
//  { month: 'December', data: { LegendPay: 10, LegendWiFi: 5, LegendFiber: 15} },
]);


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
     indexAxis: 'x',
     scales: {
       y: {
         beginAtZero: true,
       },
     },
   },
 });
});
onMounted(() => {
 const ctx = chartRec.value.getContext('2d');
 const chartData = {
   labels: data2.value.map((d) => d.name),
   datasets: data2.value[0].items.map((item, index) => ({
     label: item.name,
     data: data2.value.map((d) => d.items[index].value),
     backgroundColor: item.color,
   })),
 };

 new Chart(ctx, {
   type: 'bar',
   data: chartData,
   options: {
     indexAxis: 'x',
     scales: {
       y: {
         beginAtZero: true,
       },
     },
   },
 });
});

onMounted(() => {
 if (!chartRea.value) return;
 const ctx = chartRea.value.getContext('2d');
 const chartData = {
   labels: data3.value.map(d => d.month),
   datasets: [
     {
       label: 'Business Dual Play',
       data: data3.value.map(d => d.data.BusinessDualPlay),
       backgroundColor: '#FD6A02',
     },
     {
       label: 'Business Triple Play',
       data: data3.value.map(d => d.data.BusinessTriplePlay),
       backgroundColor: '#0093AF',
     },
     {
       label: 'Business Wifi',
       data: data3.value.map(d => d.data.BusinessWifi),
       backgroundColor: 'yellow',
     },
     {
       label: 'Cloud',
       data: data3.value.map(d => d.data.Cloud),
       backgroundColor: 'green',
     },
     {
       label: 'Managed Services',
       data: data3.value.map(d => d.data.ManagedServices),
       backgroundColor: 'indigo',
     },
     {
       label: 'Business Triple Play X',
       data: data3.value.map(d => d.data.BusinessTriplePlayX),
       backgroundColor: 'red',
     }
   ],
 };

 new Chart(ctx, {
   type: 'bar',
   data: chartData,
   options: {
     scales: {
       x: {
         stacked: true,
       },
       y: {
         stacked: true,
       },
     },
   },
 });
});

</script>