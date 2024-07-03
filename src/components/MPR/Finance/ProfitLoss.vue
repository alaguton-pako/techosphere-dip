<template>
    <section class="pl-6 pr-6 pt-5">
           <form class=" border bg-white shadow-sm pl-8 pt-4 pb-4 pr-8 mt-8 items-center justify-center">
                   <nav class="flex justify-between font-semibold text-gray-600">
                     <div class="flex items-center">
                       <div class="grid grid-cols-1">
                         <span class="text-xl font-semibold"
                           >Profit and Loss Account</span
                         >
                         <!-- <span class="text-sm font-light">A description body text comes here.</span> -->
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
               <div class="container mx-auto p-4 overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th class="pl-56 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                <th class="pl-56 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                <th class="pl-56 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                <th class="pl-56 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                <th class="pl-56 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                <th class="pl-56 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                <th class="pl-56 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                <th class="pl-56 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
               
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Turnover
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  <b>{{getTurnover().toLocaleString()}}</b>
                </td>
              </tr>

              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Cost of Sales
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                 <b>{{ cogs.toLocaleString() }}</b>
                </td>
              </tr>

              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Gross Profit
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  <b>{{getGrossProfit().toLocaleString()}}</b>
                </td>
              </tr>
              

              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Less: Operating Expenses
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  <b>{{ opex.toLocaleString()}}</b>
                </td>
              </tr>

              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Depreciation
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  <b>{{ (depreciation/2).toLocaleString() }}</b>
                </td>
              </tr>

              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Interest
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  <b>{{interest.toLocaleString()}}</b>
                </td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Total Expense
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  <b>{{ getTotalExpenditure().toLocaleString()}}</b>
                </td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Profit Before Tax
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  <b>{{ getNetProfit().toLocaleString()}}</b>
                </td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Gross Profit Margin
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  <b>{{getGrossProfitMargin().toLocaleString()}} %</b>
                </td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Net Profit Margin
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  <b>{{getNetMargin().toLocaleString()}} %</b>
                </td>
              </tr>
              
              
              <!-- <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Profit Before Tax
                </td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Gross Profit Margin
                </td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Net Profit Margin
                </td>
              </tr> -->
                <!-- <td class="p-1 text-sm text-gray-500 border border-secondary" v-for="month in months" :key="`${item}-${month}`" :class="{ 'bg-blue-300 text-white': shouldHighlight(item)}"> -->
                 
                <!-- </td> -->
            
            </tbody>
          </table>
        </div>
       </section>
        </div>
       </section>
     </template>
     
     <script setup>
     import {reactive, ref} from 'vue'
     
    
     
    //  const months = [
    //   "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December",
    //   ];
    const months = [
     "March",
      ];
      
      const items = ['Turnover', 'Cost of Sales', 'Gross Profit', 'Less Operating Expenses', 'Depreciation', 'Interest', 'Total Expenditure', 'Profit Before Tax', 'Gross Profit Margin', 'Net Profit Margin'];
      
      const data = reactive({});
      items.forEach(item => {
        data[item] = {};
        months.forEach(month => {
          data[item][month] = (61038413.5 + (255000*3)); 
        });
      });
      
      function shouldHighlight(item) {
        const highlightItems = ['Gross Profit', 'Total Expenditure', 'Gross Profit Margin'];
        return highlightItems.includes(item);
      }


      const breachLegend = ref(0)
      const revenue = ref(14814498.244271878)
      const cloud = ref(280868.26)
      const infracoLegend = ref(31333333.33)
      const infracoMinna = ref(8333333)
      const cogs = ref(17671500)
      const opex = ref(49565725.21)
      const depreciation = ref(27681242)
      const legendDepCost = ref(12500000)
      const interest = ref(35000000)
      const installationCost = ref(255000)
      const new_customers = ref(4)

      const getTurnover = () => {
        const installation_rev = installationCost.value * new_customers.value
        const total =  revenue.value + cloud.value + infracoLegend.value - ((breachLegend.value/100)*infracoLegend.value) + infracoMinna.value
        return total + installation_rev
      }
      const getGrossProfit = () => {
        const profit = getTurnover() - cogs.value
        return profit
      }
      const getGrossProfitMargin = () => {
        const margin = getGrossProfit() / getTurnover()
        return margin
      }
      const getTotalExpenditure = () => {
        const total = (depreciation.value/2) + opex.value + interest.value
        return total
      }

      const getNetProfit = () => {
        const total = getGrossProfit() - getTotalExpenditure()
        return total
      }

      const getNetMargin = () => {
        const total = getNetProfit() / getTurnover()
        return total
      }
     </script>