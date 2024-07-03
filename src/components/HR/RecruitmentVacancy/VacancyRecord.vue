<script setup>
import AppHorizontalNavigation from '../../AppHorizontalNavigation.vue'
</script>

<template>
  <app-layout>
    <template v-slot:main-content>
      <main class="w-full bg-[#F5F5F5]">
        <!-- <AppHorizontalNavigation /> -->
        <section class="">
          <section class="my-5 flex items-end justify-between">
            <div
             class="flex flex-col pl-8 pr-16 place-content-center rounded border border-gray-700 bg-black py-3 text-white"
            >
              
              <h2 class="text-xl capitalize text-start ">Total Roles Vacant</h2>
              <div class="text-[35px] font-bold text-center">15</div>
            </div>
            <div class="flex flex-row-reverse items-center mt-6">
             
                <button
                @click="$router.push({ name: 'talent-obligation/vacancy' })"
                  class="font-['Source Sans Pro'] pl-6 pr-6 pt-3 pb-3 rounded-md border border-gray-700 bg-red-600 font-medium text-white"
                >
                  New Vacancy
                </button>

              <div class="mx-4 flex items-center">
                <input
                  placeholder="Search"
                  class="w-[230px] rounded-l-md border border-r-0 border-secondary p-2 focus:outline-none"
                />
                <button
                  class="h-full rounded-r-md border border-secondary bg-primary-gray px-3 py-2.5"
                >
                  <img src="../../../assets/search-white.svg" alt="" />
                </button>
              </div>
            </div>
          </section>
          <table class="w-full table-auto border border-secondary text-sm mt-8">
            <thead class="bg-gray-200">
              <tr class="border border-secondary capitalize">
                <th class="border border-secondary p-3">Job ID</th>
                <th class="border border-secondary p-3">Job Role</th>
                <th class="border border-secondary p-3">Job Type</th>
                <th class="border border-secondary p-3">Created On</th>
                <th class="border border-secondary p-3">Status</th>
                <th class="border border-secondary p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-secondary p-3 text-center">HRD1105</td>
                <td class="border border-secondary p-3 text-center">Manager</td>
                <td class="border border-secondary p-3 text-center">
                  Full Term
                </td>
                <td class="border border-secondary p-3 text-center">
                  Dec 22, 2023
                </td>
                <td class="border border-secondary p-3 text-center">
                  <div
                    class="border border-green-300 p-3 text-center text-green-300"
                  >
                    Approved
                  </div>
                  Dec 22nd, 2023
                </td>
                <td class="border border-secondary p-3 text-center underline cursor-pointer" @click="$router.push({ name: 'talent-obligation/vacancy/post-vacancy' })"> 
                  View
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </template>
  </app-layout>
</template>
