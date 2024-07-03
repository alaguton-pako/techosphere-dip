<script setup>
import { ref } from "vue";
import AppHorizontalNavigation from "../../AppHorizontalNavigation.vue";
import AppLayout from "../../../layouts/AppLayout.vue";

const technicians = ref([
  {
    id: 1,
    name: "John Dauda",
    email: "johndada@example.com",
    phone: "234-456-7890",
    completedInstallations: 10,
    pendingInstallations: 2,
  },
]);
</script>

<template>
  <app-layout>
    <template v-slot:main-content>
      <main class="w-full bg-[#F5F5F5] pl-[260px]">
        <AppHorizontalNavigation />
        <section class="p-10 mt-8">
          <section class="my-12 flex items-end justify-between">
            <div
              class="mx-4 grid w-[260px] place-content-center rounded bg-primary-black py-4 text-center text-white"
            >
              <h2 class="text-xl capitalize">Total Technicians</h2>
              <div class="text-[35px] font-bold">58</div>
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
            </div>
          </section>
          <table class="w-full table-auto border border-secondary text-sm">
            <thead class="bg-gray-200">
              <tr class="border border-secondary capitalize">
                <th class="border border-secondary p-3">Installer</th>
                <th class="border border-secondary p-2">Email</th>
                <th class="border border-secondary p-3">Phone Number</th>
                <th class="border border-secondary p-3">Completed Installations</th>
                <th class="border border-secondary p-3">Pending Installations</th>
                <th class="border border-secondary p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="technician in technicians" :key="technician.id">
                <td class="border border-secondary p-3 text-center">
                  {{ technician.name }}
                </td>
                <td class="border border-secondary p-3 text-center">
                  {{ technician.email }}
                </td>
                <td class="border border-secondary p-3 text-center">
                  {{ technician.phone }}
                </td>
                <td class="border border-secondary p-3 text-center">
                  {{ technician.completedInstallations }}
                </td>
                <td class="border border-secondary p-3 text-center">
                  {{ technician.pendingInstallations }}
                </td>
                <td class="border border-secondary p-3 text-center underline">
                  <router-link :to="{ name: 'technician-schedule' }">View</router-link>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </template>
  </app-layout>
</template>
