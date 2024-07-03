<script setup>
import AppHorizontalNavigation from '../../../AppHorizontalNavigation.vue'
</script>

<template>
  <app-layout>
    <template v-slot:main-content>
      <main class="w-full bg-[#F5F5F5] pl-[260px]">
        <AppHorizontalNavigation />
        <section class="p-10">
          <section
            class="my-14 grid w-full grid-cols-4 flex-nowrap gap-6 overflow-x-scroll overscroll-x-contain"
          >
            <div
              class="grid w-[250px] place-content-center rounded bg-primary-black py-6 text-white"
            >
              <h2 class="text-xl capitalize">Total Staff</h2>
              <div class="text-[35px] font-bold">105</div>
            </div>
            <div
              class="grid w-[250px] place-content-center rounded border border-gray-400 bg-white py-6 text-black"
            >
              <h2 class="text-xl capitalize">Total Amount</h2>
              <h6 class="text-lg font-bold">12,256,678,890</h6>
            </div>
          </section>
          <section
            class="my-12 flex flex-row-reverse items-end justify-between"
          >
            <div class="flex flex-row-reverse items-center gap-4">
              <div class="mx-4 flex items-center">
                <input
                  placeholder="Search"
                  class="w-[230px] rounded-l-md border border-r-0 border-secondary p-2 focus:outline-none"
                />
                <button
                  class="h-full rounded-r-md border border-secondary bg-primary-gray px-3 py-2.5"
                >
                  <img src="../../../../assets/search-white.svg" alt="" />
                </button>
              </div>
            </div>
          </section>
          <table
            class="my-12 w-full table-auto border border-secondary text-sm"
          >
            <thead class="bg-gray-200">
              <tr class="border border-secondary capitalize"></tr>
              <tr class="border border-secondary capitalize">
                <th class="border border-secondary p-3">Staff Number</th>
                <th class="border border-secondary p-2">Name</th>
                <th class="border border-secondary p-3">Amount Due</th>
                <th class="border border-secondary p-3">Account Number</th>
                <th class="border border-secondary p-3">Bank</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-secondary p-3">SC2105</td>
                <td class="border border-secondary p-3 text-center">
                  Gabriel Chen
                </td>
                <td class="border border-secondary p-3 text-center">250,000</td>
                <td class="border border-secondary p-3 text-center">
                  250678456
                </td>
                <td class="border border-secondary p-3 text-center underline">
                  <router-link to=""> Fedeth MFB</router-link>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </template>
  </app-layout>
</template>
