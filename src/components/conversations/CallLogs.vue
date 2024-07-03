<script setup>
</script>

<template lang="">
  <section class="p-10">
    <section class="my-12 flex flex-row-reverse items-center">
      <button class="rounded-md border border-secondary py-2 px-4 shadow">
        Export
      </button>
      <button
        class="mx-4 rounded-md border border-primary bg-primary py-2 px-4 text-white shadow"
      >
        Log Call
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
      <select
        class="rounded-md border border-secondary p-2.5 focus:outline-none"
      >
        <option value="" selected>option 1</option>
        <option value="">option 2</option>
        <option value="">option 3</option>
      </select>
    </section>
    <table class="w-full table-fixed border border-secondary text-sm">
      <thead class="bg-gray-200">
        <tr class="border border-secondary uppercase text-sm">
          <th class="border border-secondary p-3">Ticket Number</th>
          <th class="border border-secondary p-3">Name</th>
          <th class="border border-secondary p-3">Phone number</th>
          <th class="border border-secondary p-3">Attended by</th>
          <th class="border border-secondary p-3">Fault Category</th>
          <th class="border border-secondary p-3">Fault type</th>
          <th class="border border-secondary p-3">Date</th>
          <th class="border border-secondary p-3">Note</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in 9">
          <td class="border border-secondary p-3">0034567</td>
          <td class="border border-secondary p-3">Zees Luxury</td>
          <td class="border border-secondary p-3">+2348091257777</td>
          <td class="border border-secondary p-3">Larry Johnston</td>
          <td class="border border-secondary p-3">Technical Support</td>
          <td class="border border-secondary p-3">LOS</td>
          <td class="border border-secondary p-3">Aug 13, 2021 • 12:30PM</td>
          <td class="border border-secondary p-3">
            Customer called to find out why he was on LOS
          </td>
        </tr>
      </tbody>
    </table>
    <!-- Pagination -->
  </section>
</template>
