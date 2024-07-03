<template>
  <section class="p-10">
    <section class="grid grid-cols-4 gap-2 font-[12px]">
      <div class="rounded-md border border-secondary-gray bg-white text-center">
        <h2 class="border-b border-b-secondary-gray py-4 text-sm font-bold">
          NO. OF JOBS SCHEDULED
        </h2>
        <div class="py-10 text-[32px] font-bold">30</div>
      </div>
      <div class="rounded-md border border-secondary-gray bg-white text-center">
        <h2 class="border-b border-b-secondary-gray py-4 text-sm font-bold">
          COMPLETED SCHEDULE
        </h2>
        <div class="py-10 text-[32px] font-bold">15</div>
      </div>
      <div class="rounded-md border border-secondary-gray bg-white text-center">
        <h2 class="border-b border-b-secondary-gray py-4 text-sm font-bold">
          PENDING SCHEDULE
        </h2>
        <div class="py-10 text-[32px] font-bold">9</div>
      </div>
      <div class="rounded-md border border-secondary-gray bg-white text-center">
        <h2 class="border-b border-b-secondary-gray py-4 text-sm font-bold">
          NO. OF RESCHEDULED
        </h2>
        <div class="py-10 text-[32px] font-bold">6</div>
      </div>
    </section>
    <section class="flex flex-row gap-10 mt-16">
      <div class="flex flex-row gap-5 mt-5 mb-4">
        <div class="border border-gray-50 bg-blue-300 p-2 rounded-md">Morning Shift</div>
        <div class="border border-gray-50 bg-red-200 p-2 rounded-md">Afternoon Shift</div>
        <div class="border border-gray-50 bg-green-200 p-2 rounded-md">Evening Shift</div>
      </div>
      <div class="flex flex-row-reverse items-center">
        <div class="mx-4 flex-row flex items-center">
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
        <div class="flex flex-row mr-4">
          <div>
            <select
              class="w-[230px] rounded-md border border-secondary p-2.5 focus:outline-none"
            >
              <option value="" selected>Filter</option>
              <option value="email">Installer</option>
              <option value="phone">Month</option>
              <option value="name">Date</option>
            </select>
          </div>
        </div>
      </div>
    </section>
    <div>
      <AssignmentDate class="mt-6" />
    </div>
    <div>
      <table class="w-full table-auto border border-secondary text-sm">
        <thead class="bg-gray-200">
          <tr class="border border-secondary capitalize">
            <th class="border border-secondary p-3">Installer</th>
            <th class="border border-secondary p-2">Customer Name</th>
            <th class="border border-secondary p-3">Address</th>
            <th class="border border-secondary p-3">Phone Number</th>
            <th class="border border-secondary p-3">Activity</th>
            <th class="border border-secondary p-3">Schedule Start Time</th>
            <th class="border border-secondary p-3">Schedule Completion Time</th>
            <th class="border border-secondary p-3">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(schedule, index) in schedules"
            :key="index"
            class="border border-secondary"
          >
            <td class="border border-secondary p-3 text-center">
              {{ schedule.installer }}
            </td>
            <td class="border border-secondary p-3 text-center">
              {{ schedule.customerName }}
            </td>
            <td class="border border-secondary p-3 text-center">
              {{ schedule.address }}
            </td>
            <td class="border border-secondary p-3 text-center">
              {{ schedule.phoneNumber }}
            </td>
            <td class="border border-secondary p-3 text-center">
              {{ schedule.activity }}
            </td>
            <td class="border border-secondary p-3 text-center">
              {{ schedule.startTime }}
            </td>
            <td class="border border-secondary p-3 text-center">
              {{ schedule.completionTime }}
            </td>
            <td class="border border-secondary p-3 text-center">
              <div
                class="grid place-content-center rounded-md border pl-4 pr-4 pt-2 pb-2 capitalize text-black"
                :class="{
                  'border-green-600 bg-green-600': schedule.status === 'done',
                  'border-red-600 bg-red-600': schedule.status === 'late',
                  'border-yellow-600 bg-yellow-600':
                    schedule.status === 'awaiting confirmation',
                }"
              >
                {{ schedule.status }}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>
<script setup>
import AssignmentDate from "../../Field_Operations/AssignmentDate.vue";
import { ref } from "vue";

const schedules = ref([
  {
    installer: "Moses Adams",
    customerName: "mosesadam@example.com",
    address: "24 test street",
    phoneNumber: 2340945699956,
    activity: "Survey",
    startTime: "02:30:00",
    completionTime: "05:30:00",
    status: "done",
  },
]);
</script>
