<template>
<section class="pl-6 pr-6 pt-5">
       <form class=" border bg-white shadow-sm pl-8 pt-4 pb-4 pr-8 mt-8 items-center justify-center">
               <nav class="flex justify-between font-semibold text-gray-600">
                 <div class="flex items-center">
                   <div class="grid grid-cols-1">
                     <span class="text-xl font-semibold"
                       >Revised Budget Sales Revenue Target</span
                     >
                   </div>
                 </div>
                 
               </nav>
           </form>
           <div class=" bg-white shadow-md">
           <section class="p-3 mt-4 ">
            <div class="container mx-auto p-4 overflow-x-auto">
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                  <tr>
                    <th class="pl-56 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-secondary">
                      Revenue Target
                    </th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-secondary">
                      Actual Revenue
                    </th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-secondary">
                      Variance
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr v-for="item in items" :key="item">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900" :class="{ 'bg-blue-300 text-white': shouldHighlight(item)}">{{ item.service }}</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900" :class="{ 'bg-blue-300 text-white': shouldHighlight(item)}">{{ item.expected }}</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900" :class="{ 'bg-blue-300 text-white': shouldHighlight(item)}">{{ item.actual }}</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900" :class="{ 'bg-blue-300 text-white': shouldHighlight(item)}">{{ item.percentage  }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
           </section>
           </div>

           <form class=" border bg-white shadow-sm pl-8 pt-4 pb-4 pr-8 mt-8 items-center justify-center">
               <nav class="flex justify-between font-semibold text-gray-600">
                 <div class="flex items-center">
                   <div class="grid grid-cols-1">
                     <span class="text-xl font-semibold"
                       >Revenue Performance</span
                     >
                   </div>
                 </div>
                 
               </nav>
           </form>
           <div class=" bg-white shadow-md">
           <section class="p-3 mt-4 ">
            <div class="container mx-auto p-4 overflow-x-auto">
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                  <tr>
                    <th class="pl-56 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-secondary">
                      Revenue Target
                    </th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-secondary">
                      Actual Revenue
                    </th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-secondary">
                      Variance
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr v-for="item in Ritems" :key="item">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900" :class="{ 'bg-blue-300 text-white': shouldHighlight(item)}">{{ item.service }}</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900" :class="{ 'bg-blue-300 text-white': shouldHighlight(item)}">{{ item.expected }}</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900" :class="{ 'bg-blue-300 text-white': shouldHighlight(item)}">{{ item.actual }}</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900" :class="{ 'bg-blue-300 text-white': shouldHighlight(item)}">{{ item.percentage  }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
           </section>
           </div>
   </section>
 </template>
 
 <script setup>
 import {onMounted, reactive} from 'vue'
 
onMounted(() => {
  console.log(((279479.51 - 75000000)/75000000)*100)
})
 
 const budgets = [
    'Revenue Target', 'Actual Revenue', 'Percentage'
  ];
  
  const items = [
    {
      service: 'Self Managed Infrastructure',
      expected: '18,172,770',
      percentage: '-100%',
      actual: '0',
    }, 
    {
      service: 'Business Internet',
      expected: '769,083.33',
      percentage: '55.54%',
      actual: '1,196,291.25',
    }, 
    {
      service: 'Business WIFI',
      expected: '515,833.36',
      actual: '0',
      percentage: '-100%',
    }, 
    {
      service: 'Cloud',
      expected: '75,000,000',
      percentage: '-99.63%',
      actual: '279,479.51',
    }, 
    {
      service: 'Managed Services',
      expected: '14,580,000',
      percentage: '-100%',
      actual: '0',
    } 
  ];

  const Ritems = [
    {
      service: 'January',
      expected: (203714365.94).toLocaleString(),
      percentage: '-72.31%',
      actual: (56264046.22 + 148726.250).toLocaleString(),
    }, 
    {
      service: 'February',
      expected: (255762924.29).toLocaleString(),
      percentage: '-77.04%',
      actual: (58476428.03 + 243956.47).toLocaleString(),
    }, 
    {
      service: 'March',
      expected: (395409007.64).toLocaleString(),
      percentage: "-84.56%",
      actual: (61038413.5).toLocaleString(),
    }, 
    {
      service: 'April',
      expected: (341350694.33).toLocaleString(),
      percentage: "-83.66%",
      actual: (55782032.834).toLocaleString(),
    }, 

    
  ];
  
  const data = reactive({});
  items.forEach(item => {
    data[item] = {};
    budgets.forEach(budget => {
      data[item][budget] = '9412500'; 
    });
  });
  
  function shouldHighlight(item) {
    const highlightItems = ['Total'];
    return highlightItems.includes(item);
  }
 </script>