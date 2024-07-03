<template>
     <section class="pl-6 pr-6 pt-5">
       <form class=" border bg-white shadow-sm pl-8 pt-4 pb-4 pr-8 mt-8 items-center justify-center">
               <nav class="flex justify-between font-semibold text-gray-600">
                 <div class="flex items-center">
                   <div class="grid grid-cols-1">
                     <span class="text-xl font-semibold"
                       >Suburban Revenue Growth</span
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
           <div class=" bg-white shadow-md">
           <section class="p-3 mt-4 ">
             <div class="mt-1">
                 <canvas id="barChart" class="p-3"></canvas>
                 
                 <!-- <b>JANUARY - FEBRUARY - 7.67%</b> <br/> -->
                 <!-- <b>FEBRUARY - MARCH - 1.29%</b> -->
               </div>
           </section>
           </div>
   </section>
 </template>
 
 <script setup>
 import {ref, onMounted} from 'vue'
 import Chart from "chart.js/auto";
 
 const props = defineProps(['activeTab']);
 
 const chartData = ref(null);

 
 onMounted(() => {
   const ctx = document.getElementById("barChart").getContext("2d");
   chartData.value = new Chart(ctx, {
     type: "bar",
     data: {
      //  labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December",],
       labels: ["January","February","March", "April"],
       datasets: [
         {
           label: "Suburban ",
           data: [((56264046.22 + 148726.25) + 255000*1), ((58476428.03 + 243956.47) + 255000*9), (61038413.5 + (255000*3)),(55782032.834)],
           backgroundColor: [
             "rgba(255, 	165, 	0)",
           ],
           borderColor: [
             "rgba(236,	190, 	117)",
           ],
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