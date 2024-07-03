<script setup></script>

<template>
  <app-layout>
    <template v-slot:main-content>
      <main class="w-full bg-[#F5F5F5]">
        <section class="p-12">
          <section class="my-12 flex items-end justify-between">
            <div
              class="grid w-[250px] place-content-center rounded bg-primary-black py-6 text-center text-white"
            >
              <h2 class="text-xl capitalize">Total Leave Request</h2>
              <div class="text-[35px] font-bold">15</div>
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
                  <img src="#" alt="" />
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
          <table class="w-full table-auto border border-secondary text-sm">
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
                <th class="border border-secondary p-3">Purpose</th>
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
                  April 2nd, 2023
                </td>
                <td class="border border-secondary p-3 text-center">
                  Annual Leave
                </td>
                <td class="border border-secondary p-3 text-center underline">
                  <router-link to="/obligation-reward/view-leave"> View</router-link>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </template>
  </app-layout>
</template>
