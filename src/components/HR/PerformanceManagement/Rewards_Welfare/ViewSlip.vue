<script setup>
import AppHorizontalNavigation from '../../../AppHorizontalNavigation.vue'
import NameTag from '../Appraisal/NameTag.vue'
import DownloadButton from './DownloadButton.vue'
</script>

<template>
  <app-layout>
    <template v-slot:main-content>
      <main class="w-full bg-[#F5F5F5] pl-[260px]">
        <AppHorizontalNavigation />
        <section class="p-9"><NameTag /></section>
        <DownloadButton />
        <section class="p-10">
            <section class="mt-4">
               <div class=" border border-secondary p-5">
                 <div class="flex justify-between">
                 <div class="text-2xl font-semibold">PS789</div>
                </div>
                <div class="flex justify-evenly my-10">
                <div class="flex space-x-6 ">
                <div>
                   <p class="font-semibold">Staff Name:</p>
                   <p class="font-semibold my-3">Role & ID:</p>
                </div>
                 <div class="border border-gray-500 "></div>
               <div class="space-y-3">
                  <select name="" id=""
                    class="border border-gray-500 px-12 py-1 bg-[#EEEEEE]">
                  <option value=""></option>
                  <option value="">Salome Dangari Segun</option>
                  <option value="">Abdullahi Ahmed</option>
                  </select>
                  <input name="" id=""
                    class="border border-gray-500 my-4 px-12 py-1 bg-[#EEEEEE]"
                     placeholder="Market Manager SC2207"
                                                    
                   />
                                                   
                                                
                </div>
                </div>
                <div class="flex space-x-6">
                <div class="space-y-3">
                  <p class="font-semibold text-sm">Period Starting:</p>
                  <p class="font-semibold text-sm">Period Ending:</p>
                  <p class="font-semibold text-sm">Payment Terms:</p>
                  <p class="font-semibold text-sm">Payment Date:</p>
                </div>
                <div class="border border-gray-500 "></div>
                <div class="space-y-3 flex flex-col">
                  <select name="" id=""
                     class="border bg-[#EEEEEE] border-gray-500 px-12 py-1">
                    <option value=""></option>
                    <option value="">05-Jan-2024</option>
                    <option value="">14-Feb-2024</option>
                  </select>
                    <select name="" id=""
                      class="border bg-[#EEEEEE] border-gray-500 px-12 py-1">
                      <option value=""></option>
                      <option value="">12-Mar-2024</option>
                      <option value="">17-Aug-2024</option>
                    </select>
                    <select name="" id=""
                      class="border bg-[#EEEEEE] border-gray-500 px-12 py-1">
                      <option value=""></option>
                      <option value="">Bank Transfer</option>
                      <option value="">Cheque</option>
                    </select>
                    <select name="" id=""
                      class="border bg-[#EEEEEE] border-gray-500 px-12 py-1">
                      <option value=""></option>
                      <option value="">12-Jan-2024</option>
                      <option value="">15-Feb-2024</option>
                    </select>
                  </div>
                  </div>
                  </div>
                  <table class="w-full table-auto border border-secondary text-center text-sm my-10">
                    <thead class="bg-gray-300 text-xs uppercase">
                     <tr class="border border-secondary">
                     <th class=" p-3">Details</th>
                     <th class=" p-3">Description</th>
                     <th class=" p-3"></th>
                     <th class=" p-3"></th>
                     <th class=" p-3">Deductions</th>
                     <th class=" p-3">Subtotal</th>
                     </tr>
                    </thead>
                    <tbody>
                      <tr>
                      <td class=" p-4 font-semibold">SALARY & WAGE</td>
                      <td class=" p-4 text-center">
                      </td>
                      <td class=" p-4"></td>
                      <td class=" p-4"></td>

                                                
                      <td class=" p-4"></td>
                      <td> </td>
                      </tr>
                      <tr class="bg-gray-200">
                      <td class=" p-4 font-semibold">INFRASTRUCTURES & BONUES</td>
                      <td class=" p-4 text-center"> Total Demerit Points -6
                      </td>
                      <td class=" p-4"></td>
                      <td class=" p-4"></td>

                      <td class=" p-4">Less 6% of wage</td>
                      <td> </td>
                      </tr>
                      <tr>
                      <td class=" p-4 font-semibold">TAXES</td>
                      <td class=" p-4 text-center">
                      </td>
                      <td class=" p-4"></td>
                      <td class=" p-4"></td>
                      <td class=" p-4"></td>
                      <td> </td>
                      </tr>
                      <tr class="bg-gray-200">
                      <td class=" p-4 font-semibold">PENSIONS</td>
                      <td class=" p-4 text-center">
                      </td>
                      <td class=" p-4"></td>
                                                
                      <td class=" p-4"></td>
                      <td class=" p-4"></td>
                      <td> </td>
                      </tr>
                    </tbody>
                  </table>
                <div class="flex flex-col items-end">
                <div class="flex space-x-10 border-b border-gray-500 w-44 ">
                                           
                </div>
                <div class="flex space-x-14 ">
                <div class="">
                   <p class="font-semibold">Total Due: </p>
                </div>
                <div class="space-y-3">
                   <p class="">₦0.00</p>
                </div>
                </div>
                </div>

                </div>

            </section>
        </section>
      </main>
    </template>
  </app-layout>
</template>
