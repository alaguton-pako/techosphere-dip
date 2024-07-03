<script setup>
const table = [
  // {
  //   ticketNumber: '0535',
  //   name: 'David Trowle',
  //   phoneNumber: '+2348091257777',
  //   purposeOfVisit: 'Provisioning',
  //   faultType: 'LOS',
  //   dateOfVisit: 'Aug 13, 2021 12:30PM ',
  //   status: 'done',
  // },
  // {
  //   ticketNumber: '0535',
  //   name: 'David Trowle',
  //   phoneNumber: '+2348091257777',
  //   purposeOfVisit: 'Provisioning',
  //   faultType: 'LOS',
  //   dateOfVisit: 'Aug 13, 2021 12:30PM ',
  //   status: 'undone',
  // },
  // {
  //   ticketNumber: '0535',
  //   name: 'David Trowle',
  //   phoneNumber: '+2348091257777',
  //   purposeOfVisit: 'Provisioning',
  //   faultType: 'LOS',
  //   dateOfVisit: 'Aug 13, 2021 12:30PM ',
  //   status: 'pending',
  // },
]
</script>

<template>
  <section class="my-12 flex flex-row-reverse items-center">
    <button class="rounded-md border border-secondary py-2 px-4 shadow">
      Export
    </button>
    <div class="mx-4 flex items-center">
      <input
        type="search"
        placeholder="Search"
        class="w-[230px] rounded-l-md border border-r-0 border-secondary p-2 focus:outline-none"
      />
      <button
        class="h-full rounded-r-md border border-secondary bg-primary-gray py-2.5 px-3"
      >
        <img src="../../assets/search-white.svg" alt="" />
      </button>
    </div>
    <select class="rounded-md border border-secondary p-2.5 focus:outline-none">
      <option value="" selected>option 1</option>
      <option value="">option 2</option>
      <option value="">option 3</option>
    </select>
  </section>

  <table class="w-full table-auto border border-secondary text-center text-sm">
    <thead class="bg-gray-200 text-xs uppercase">
      <tr class="border border-secondary">
        <th class="border border-secondary p-3">Ticket Number</th>
        <th class="border border-secondary p-3">Name</th>
        <th class="border border-secondary p-3">Phone number</th>
        <th class="border border-secondary p-3">Purpose of visit</th>
        <th class="border border-secondary p-3">Fault type</th>
        <th class="border border-secondary p-3">Date</th>
        <th class="border border-secondary p-3">Fault type</th>
        <th class="border border-secondary p-3">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in table">
        <td class="border border-secondary p-4">{{ item.ticketNumber }}</td>
        <td class="border border-secondary p-4">{{ item.name }}</td>
        <td class="border border-secondary p-4">{{ item.phoneNumber }}</td>
        <td class="border border-secondary p-4">{{ item.purposeOfVisit }}</td>
        <td class="border border-secondary p-4">{{ item.faultType  }}</td>
        <td class="border border-secondary p-4">{{ item.date }}</td>
        <td class="border border-secondary p-4">
          <div
            class="py-1 px-5 text-center capitalize text-white"
            :class="{
              'bg-primary-red': item.status.toLowerCase() === 'undone',
              'bg-primary-green': item.status.toLowerCase() === 'done',
              'bg-primary-yellow': item.status.toLowerCase() === 'pending',
            }"
          >
            {{ item.status }}
          </div>
        </td>
        <td class="border border-secondary p-4">
          <router-link
            :to="{ name: 'obligation', params: { id: index + 1 } }"
            class="text-primary underline"
            >View</router-link
          >
        </td>
      </tr>
    </tbody>
  </table>
</template>
