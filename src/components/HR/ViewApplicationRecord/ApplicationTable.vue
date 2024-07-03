<script setup>
import AppPagination from '../../AppPagination.vue'
</script>

<template>
  <app-layout>
    <template v-slot:main-content>
      <main class="w-full bg-[#F5F5F5]">
        <section class="">
          <section class="my-5 flex items-end justify-between">
            <div
              class="flex flex-col pl-6 pr-10 place-content-center rounded border border-gray-700 bg-black py-3 text-white"
            >
              <h2 class="text-xl capitalize text-start ">Total Application Received</h2>
              <div class="text-[35px] font-bold text-center">15</div>
            </div>
            <div class="flex flex-row-reverse items-center">
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
          <table class="w-full table-auto border border-secondary text-sm mt-8">
            <thead class="bg-gray-200">
              <tr class="border border-secondary capitalize">
                <th class="border border-secondary p-3">Job ID</th>
                <th class="border border-secondary p-2">Full Name</th>
                <th class="border border-secondary p-3">Role Applied For</th>
                <th class="border border-secondary p-3">Submission Date</th>
                <th class="border border-secondary p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-secondary p-3">HRD1105</td>
                <td class="border border-secondary p-3 text-center">
                  Abubakar Tijjani
                </td>
                <td class="border border-secondary p-3 text-center">Manager</td>
                <td class="border border-secondary p-3 text-center">
                  Dec 22, 2023
                </td>
                <td class="border border-secondary p-3 text-center underline cursor-pointer" @click="$router.push({ name: 'talent-obligation/send-invite' })">
                  
                  View
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </template>
    <section>
      <AppPagination class="m-10" />
    </section>
  </app-layout>
</template>
