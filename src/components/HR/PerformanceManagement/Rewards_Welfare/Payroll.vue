<script setup></script>

<template>
  <app-layout>
    <template v-slot:main-content>
      <main class="w-full bg-[#F5F5F5]">
        <section class="p-8">
          <section
            class="my-14 w-full grid grid-cols-3 flex-nowrap gap-8"
          >
            <div
              class="flex flex-col pl-3 pr-3 place-content-center rounded border border-gray-700 bg-black py-3 text-white"
            >
              <div class="text-start text-[35px] font-bold">105</div>
              <h2 class="text-xl capitalize">Total Staff</h2>
              <h6 class="text-sm font-light">Overall Number of Staff</h6>
            </div>
            <div
              class="flex flex-col pl-3 pr-3 place-content-center rounded border border-gray-400 bg-white py-3 text-black"
            >
              <div class="text-start text-[35px] font-bold">99</div>
              <h2 class="text-xl capitalize">Total on Payroll</h2>
              <h6 class="text-sm font-light">
                Total number of staff on payroll
              </h6>
            </div>
            <div
              class="flex flex-col pl-3 pr-3 place-content-center rounded border border-gray-400 bg-white py-3 text-black"
            >
              <div class="text-start text-[35px] font-bold">09</div>
              <h2 class="text-xl capitalize">Total New Hires</h2>
              <h6 class="text-sm font-light">
                Total number of new staff not on payroll
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
              <tr class="border border-secondary capitalize">
                <th class="border border-secondary p-3">Month</th>
                <th class="border border-secondary p-3">Date Created</th>
                <th class="border border-secondary p-3">Status</th>
                <th class="border border-secondary p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-secondary p-3 text-center">
                  DECEMBER
                </td>

                <td class="border border-secondary p-3 text-center">
                  Dec 12th, 2023
                </td>
                <td class="border border-secondary p-3 text-center">
                  <div
                    class="h-10 border border-green-300 text-center text-green-300"
                  >
                    Approved
                  </div>
                </td>
                <td class="border border-secondary p-3 text-center underline">
                  <router-link to="/obligation-reward/payroll-view"> View</router-link>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </template>
  </app-layout>
</template>
