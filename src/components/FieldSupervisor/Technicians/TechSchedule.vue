<template>
  <app-layout>
    <template v-slot:main-content>
      <main class="w-full bg-[#F5F5F5] pl-[260px]">
        <AppHorizontalNavigation />
        <ChevronBack @click="navigateBack" />
        <section class="p-10">
          <div
            class="bg-black font-semibold text-[20px] text-white justify-start place-content-start flex w-full mt-10 pl-4 pr-4 pt-3 pb-2"
          >
            Technician Details
          </div>
          <div class="w-full border border-gray-400 text-gray-600">
            <div class="my-4 flex border-b-white bg-gray-200">
              <div class="mb-4 flex gap-16 border-b-white">
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
            <div class="flex gap-16 border-gray-200">
              <div class="mb-4 flex">
                <label
                  for="name"
                  class="text-md text-black-800 mx-2 my-2 mb-2 block font-semibold"
                  >Phone Number</label
                >
              </div>
              <div class="mb-4">
                <label
                  for="name"
                  class="text-md text-black-800 mx-28 my-2 mb-2 block w-96 font-light"
                ></label>
              </div>
            </div>
            <div class="flex gap-16 border-gray-200 bg-gray-200">
              <div class="mb-4">
                <label
                  for="name"
                  class="text-md text-black-800 mx-2 my-2 mb-2 block font-semibold"
                  >Address</label
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
          <div class="flex flex-row gap-10 mt-10 mb-4">
            <div class="border border-gray-50 bg-blue-300 p-2 rounded-md">
              Morning Shift
            </div>
            <div class="border border-gray-50 bg-red-200 p-2 rounded-md">
              Afternoon Shift
            </div>
            <div class="border border-gray-50 bg-green-200 p-2 rounded-md">
              Evening Shift
            </div>
          </div>
          <div>
            <AssignmentDate />
          </div>
          <div>
            <table class="w-full table-auto border border-secondary text-sm">
              <thead class="bg-gray-200">
                <tr class="border border-secondary capitalize">
                  <th class="border border-secondary p-3">S/N</th>
                  <th class="border border-secondary p-2">Customer Name</th>
                  <th class="border border-secondary p-3">Address</th>
                  <th class="border border-secondary p-3">Phone Number</th>
                  <th class="border border-secondary p-3">Activity</th>
                  <th class="border border-secondary p-3">Schedule Start Time</th>
                  <th class="border border-secondary p-3">Schedule Completion Time</th>
                  <th class="border border-secondary p-3">Status</th>
                  <th class="border border-secondary p-3">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(customer, index) in customers"
                  :key="index"
                  class="border border-secondary p-3"
                >
                  <td class="border border-secondary p-3">{{ index + 1 }}</td>
                  <td class="border border-secondary p-3">{{ customer.name }}</td>
                  <td class="border border-secondary p-3">{{ customer.address }}</td>
                  <td class="border border-secondary p-3">{{ customer.phone }}</td>
                  <td class="border border-secondary p-3">{{ customer.activity }}</td>
                  <td class="border border-secondary p-3">
                    {{ customer.scheduleStart }}
                  </td>
                  <td class="border border-secondary p-3">{{ customer.scheduleEnd }}</td>
                  <td class="border border-secondary p-3">
                    <div class="flex flex-row gap-2 mt-10 mb-4">
                      <div :class="getStatusClass(customer.status)">
                        {{ customer.status }}
                      </div>
                    </div>
                  </td>
                  <td class="border border-secondary p-3 text-center underline">
                    <router-link
                      :to="{ name: 'installation-details', params: { id: customer.id } }"
                      >View</router-link
                    >
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </template>
  </app-layout>
</template>
<script setup>
import AppHorizontalNavigation from "../../AppHorizontalNavigation.vue";
import ChevronBack from "../../Field_Operations/ChevronBack.vue";
import AssignmentDate from "../../Field_Operations/AssignmentDate.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

function navigateBack() {
  router.back();
}

const customers = ref([
  {
    id: 1,
    name: "John Doe",
    address: "1234 Main St",
    phone: "123-456-7890",
    activity: "Installation",
    scheduleStart: "2024-04-01",
    scheduleEnd: "2024-04-02",
    status: "Arrival Confirmed",
  },
]);

const getStatusClass = (status) => {
  switch (status) {
    case "Arrival Confirmed":
      return "border border-gray-300 p-1 rounded-md text-center";
    case "Results Uploaded":
      return "border border-gray-300 bg-red-400 p-1 rounded-md text-center";
    case "Reschedule Requested":
      return "border border-gray-300 bg-green-500 p-1 rounded-md text-center";
    default:
      return "";
  }
};
</script>
