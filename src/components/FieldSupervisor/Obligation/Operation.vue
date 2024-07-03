<script setup>
import { ref } from "vue";
import AppLayout from "../../../layouts/AppLayout.vue";
import ProgressCircle from "./ProgressCircle.vue";

const technicians = ref([
  {
    name: "Moses Adams",
    email: "mosesadam@example.com",
    equipmentMaterialPercentage: 75,
    taskPercentage: 50,
    transportationLogisticsPercentage: 25,
    schedulePercentage: 90,
  },
]);
</script>

<template>
  <app-layout>
    <template v-slot:main-content>
      <main class="w-full bg-[#F5F5F5]">
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
                <th class="border border-secondary p-3">Technician</th>
                <th class="border border-secondary p-2">Email</th>
                <th class="border border-secondary p-3">Equipment & Material</th>
                <th class="border border-secondary p-3">Task</th>
                <th class="border border-secondary p-3">Transportation & Logistics</th>
                <th class="border border-secondary p-3">Schedule</th>
                <th class="border border-secondary p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(technician, index) in technicians" :key="index">
                <td class="border border-secondary p-3 text-center">
                  {{ technician.name }}
                </td>
                <td class="border border-secondary p-3 text-center">
                  {{ technician.email }}
                </td>
                <td class="border border-secondary p-3 text-center">
                  <div class="place-content-center items-center flex justify-center">
                    <ProgressCircle
                      :percentage="technician.equipmentMaterialPercentage"
                    />
                  </div>
                </td>
                <td class="border border-secondary p-3 text-center">
                  <div class="place-content-center items-center flex justify-center">
                    <ProgressCircle :percentage="technician.taskPercentage" />
                  </div>
                </td>
                <td class="border border-secondary p-3 text-center">
                  <div class="place-content-center items-center flex justify-center">
                    <ProgressCircle
                      :percentage="technician.transportationLogisticsPercentage"
                    />
                  </div>
                </td>
                <td class="border border-secondary p-3 text-center">
                  <div class="place-content-center items-center flex justify-center">
                    <ProgressCircle :percentage="technician.schedulePercentage" />
                  </div>
                </td>
                <td class="border border-secondary p-3 text-center underline">
                  <router-link :to="{ name: 'readiness-checklist' }">View</router-link>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </template>
  </app-layout>
</template>
