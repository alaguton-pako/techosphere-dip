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
              <div class="text-start text-[35px] font-bold">105</div>
              <h2 class="text-xl capitalize">Total Staff</h2>
              <h6 class="text-sm font-light">Overall Number of Staff</h6>
            </div>
            <div
              class="grid w-[250px] place-content-center rounded border border-gray-400 bg-white py-6 text-black"
            >
              <div class="text-start text-[35px] font-bold">99</div>
              <h2 class="text-xl capitalize">Total Appraisals Submitted</h2>
              <h6 class="text-sm font-light">
                Total number of staff appraisals submitted
              </h6>
            </div>
            <div
              class="grid w-[250px] place-content-center rounded border border-gray-400 bg-white py-6 text-black"
            >
              <div class="text-start text-[35px] font-bold">69</div>
              <h2 class="text-xl capitalize">Total Appraised</h2>
              <h6 class="text-sm font-light">
                Total number of staff appraisals graded
              </h6>
            </div>
          </section>
          <section
            class="my-12 flex flex-row-reverse items-end justify-between"
          >
            <div class="flex flex-row-reverse items-center">
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
              <div>
                <select
                  class="w-[230px] rounded-md border border-secondary p-2.5 focus:outline-none"
                >
                  <option value="" selected>Search Custom Fields</option>
                  <option value="email">Email</option>
                  <option value="phone">Phone</option>
                  <option value="name">Name</option>
                </select>
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
                <th class="border border-secondary p-3">Department</th>
                <th class="border border-secondary p-3">Role</th>
                <th class="border border-secondary p-3">
                  Contract Acceptance Date
                </th>
                <th class="border border-secondary p-3">Status</th>
                <th class="border border-secondary p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-secondary p-3">SC2105</td>
                <td class="border border-secondary p-3 text-center">
                  Gabriel Chen
                </td>
                <td class="border border-secondary p-3 text-center">Design</td>
                <td class="border border-secondary p-3 text-center">
                  Developer
                </td>
                <td class="border border-secondary p-3 text-center">
                  <div
                    class="h-10 border border-green-300 text-center text-green-300"
                  >
                    Approved
                  </div>
                </td>
                <td class="border border-secondary p-3 text-center">
                  Dec 12th, 2023
                </td>
                <td class="border border-secondary p-3 text-center underline">
                  <router-link to=""> View</router-link>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </template>
  </app-layout>
</template>
