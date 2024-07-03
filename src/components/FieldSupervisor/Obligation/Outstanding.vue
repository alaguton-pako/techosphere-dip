<template>
  <section class="p-10">
    <div class="flex flex-row-reverse items-center mt-10">
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
    <section>
      <div
        class="bg-black text-transparent text-[20px] justify-start place-content-start flex w-full mt-10 pl-4 pr-4 pt-3 pb-1"
      >
        transparent
      </div>
      <table class="w-full table-auto border border-secondary text-sm">
        <thead class="bg-gray-200">
          <tr class="border border-secondary capitalize">
            <th class="border border-secondary p-3">Installer</th>
            <th class="border border-secondary p-3">Customer Name</th>
            <th class="border border-secondary p-3">Phone Number</th>
            <th class="border border-secondary p-3">Expected Start Date</th>
            <th class="border border-secondary p-3">Start Date</th>
            <th class="border border-secondary p-3">Expected Completion</th>
            <th class="border border-secondary p-3">Completion</th>
            <th class="border border-secondary p-3">TSS</th>
            <th class="border border-secondary p-3">Indoor Installation</th>
            <th class="border border-secondary p-3">Outdoor Installation</th>
            <th class="border border-secondary p-3">Slicing</th>
            <th class="border border-secondary p-3">Activation</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(installation, index) in installations" :key="index">
            <td class="border border-secondary p-3">{{ installation.installer }}</td>
            <td class="border border-secondary p-3 text-center">
              {{ installation.customerName }}
            </td>
            <td class="border border-secondary p-3 text-center">
              {{ installation.phoneNumber }}
            </td>
            <td class="border border-secondary p-3 text-center">
              {{ installation.expectedStartDate }}
            </td>
            <td class="border border-secondary p-3 text-center">
              {{ installation.startDate }}
            </td>
            <td class="border border-secondary p-3 text-center">
              {{ installation.expectedCompletion }}
            </td>
            <td class="border border-secondary p-3 text-center">
              {{ installation.completion }}
            </td>
            <td class="border border-secondary p-3 text-center">
              {{ installation.tss }}
            </td>
            <td class="border border-secondary p-3 text-center">
              {{ installation.indoorInstallation }}
            </td>
            <td class="border border-secondary p-3 text-center">
              {{ installation.outdoorInstallation }}
            </td>
            <td class="border border-secondary p-3 text-center">
              {{ installation.slicing }}
            </td>
            <td class="border border-secondary p-3 text-center">
              {{ installation.activation }}
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  </section>
</template>
<script setup>
import { ref } from "vue";

const installations = ref([
  {
    installer: "Moses Adams",
    customerName: "Jane Salsa",
    phoneNumber: "234-456-7890",
    expectedStartDate: "2024-03-20",
    startDate: "2024-03-21",
    expectedCompletion: "2024-03-25",
    completion: "2024-03-24",
    tss: "Yes",
    indoorInstallation: "Complete",
    outdoorInstallation: "Pending",
    slicing: "N/A",
    activation: "N/A",
  },
]);
</script>
