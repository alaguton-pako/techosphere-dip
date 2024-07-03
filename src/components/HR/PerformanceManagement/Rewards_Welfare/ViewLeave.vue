<script setup>
import AppLayout from '../../../../layouts/AppLayout.vue';
import NameTag from '../Appraisal/NameTag.vue';
import DetailsBar from '../../ViewEmployeeRecords/DetailsBar.vue'


</script>

<template>
  <app-layout>
    <template v-slot:main-content>
      <main class="w-full bg-[#F5F5F5]  pl-[260px]">
        <AppHorizontalNavigation />
        <section class="p-9"><NameTag/></section>
        <section class="p-10">
          <section><DetailsBar/></section>
          <div class=" w-full border border-gray-300 ml-3 mb-2">
            <div class="mt-1 w-full border-gray-400 p-3">
              <div class="my-4 grid grid-cols-5 border-b-white bg-gray-200">
                <div class="mb-4 border-b-white">
                  <label
                    for="name"
                    class="text-md text-black-800 mx-2 my-2 mb-2 block font-semibold"
                    >Full Name</label
                  >
                </div>
                <div class="mb-4">
                  <label
                    for="name"
                    class="text-md text-black-800 mx-28 my-2 mb-2 block w-80 font-light"
                  ></label>
                </div>
              </div>
              <div class="grid grid-cols-5 border-gray-200">
                <div class="mb-4">
                  <label
                    for="name"
                    class="text-md text-black-800 mx-2 my-2 mb-2 block font-semibold"
                    >Staff Role</label
                  >
                </div>
                <div class="mb-4">
                  <label
                    for="name"
                    class="text-md text-black-800 mx-28 my-2 mb-2 block w-96 font-light"
                  ></label>
                </div>
              </div>
              <div class="grid grid-cols-5 border-gray-200 bg-gray-200">
                <div class="mb-4">
                  <label
                    for="name"
                    class="text-md text-black-800 mx-2 my-2 mb-2 block font-semibold"
                    >Staff ID</label
                  >
                </div>
                <div class="mb-4">
                  <label
                    for="name"
                    class="text-md text-black-800 mx-28 my-2 mb-2 block w-80 font-light"
                  ></label>
                </div>
              </div>
              <div class="grid grid-cols-6 border-b-white">
                <div class="mb-4">
                  <label
                    for="name"
                    class="text-md text-black-800 mx-2 my-2 mb-2 block font-semibold"
                    >Status</label
                  >
                </div>
                <div class="my-2 mb-4 border border-green-400">
                  <label
                    for="name"
                    class="text-md mx-2 my-2 mb-2 block text-center font-semibold text-green-300"
                    >ACTIVE</label
                  >
                </div>

                <div class="mb-4">
                  <label
                    for="name"
                    class="text-md text-black-800 mx-28 my-2 mb-2 block w-80 font-light"
                  ></label>
                </div>
                <div class="mb-4">
                  <label
                    for="name"
                    class="text-md text-black-800 mx-28 my-2 mb-2 block w-80 font-light"
                  ></label>
                </div>
                <div class="mb-4">
                  <label
                    for="name"
                    class="text-md text-black-800 mx-28 my-2 mb-2 block w-80 font-light"
                  ></label>
                </div>
                <div class="my-2 mb-4 text-black">
                  <button
                    class="border-suburbanblack h-[51px] w-[121px] border border-solid"
                  >
                    EDIT
                  </button>
                </div>
              </div>
              <div class="grid grid-cols-5 border-b-white bg-gray-200">
                <div class="mb-4">
                  <label
                    for="name"
                    class="text-md text-black-800 mx-2 my-2 mb-2 block font-semibold"
                    >Date</label
                  >
                </div>
                <div class="mb-4">
                  <label
                    for="name"
                    class="text-md text-black-800 mx-28 my-2 mb-2 block w-80 font-light"
                  ></label>
                </div>
              </div>
            </div>
          </div>
          <table class="w-full table-auto border border-secondary text-sm pt-2 pl-3 ml-3">
          <thead class="bg-gray-200">
         <tr class="border border-secondary capitalize">
        <th class="border border-secondary p-3">SN</th>
        <th class="border border-secondary p-2">Description</th>
        <th class="border border-secondary p-3">No of Days Requested</th>
        <th class="border border-secondary p-3">Request Date</th>
        <th class="border border-secondary p-3">Amount</th>
        <th class="border border-secondary p-3">Status</th>
        <!-- <th class="border border-secondary p-3">Action</th> -->
       </tr>
      </thead>
      <tbody>
      <tr>
        <td class="border border-secondary p-3">1.</td>
        <td class="border border-secondary p-3 text-center">Annual Leave</td>
        <td class="border border-secondary p-3 text-center">15 days</td>
        <td class="border border-secondary p-3 text-center">Dec 22, 2023</td>
        <td class="border border-secondary p-3 text-center">#150,800</td>
        <td class="border border-secondary p-3 text-center">
          <div class="h-10 border border-green-300 text-center text-green-300">
            APPROVED
          </div>
        </td>
        <!-- <td class="border border-secondary p-3 text-center underline">
          <router-link to=""> View </router-link>
        </td> -->
      </tr>
    </tbody>
  </table>
  </section>
  </main>
  </template>
  </app-layout>
</template>
