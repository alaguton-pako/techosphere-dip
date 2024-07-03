<template>
  <table class="w-full table-auto border border-secondary text-sm">
    <thead class="bg-gray-200">
      <tr class="border border-secondary capitalize">
        <th class="border border-secondary p-3">S/N:</th>
        <th class="border border-secondary p-3">Name</th>
        <th class="border border-secondary p-3">Type</th>
        <th class="border border-secondary p-3">Location</th>
        <th class="border border-secondary p-3">Buffer</th>
        <th class="border border-secondary p-3">Core</th>
        <th class="border border-secondary p-3">Schedule Start Date</th>
        <th class="border border-secondary p-3">Start Date</th>
        <th class="border border-secondary p-3">Schedule End Date</th>
        <th class="border border-secondary p-3">End Date</th>
        <th class="border border-secondary p-3">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr
        class="border border-secondary p-3"
        v-for="(splicePoint, index) in props.splicePoints"
        :key="index"
      >
        <td class="border border-secondary p-3">
          {{ splicePoint.id }}
        </td>
        <td class="border border-secondary p-3">
          {{ splicePoint.name }}
        </td>
        <td class="border border-secondary p-3">
          {{ splicePoint.type }}
        </td>
        <td class="border border-secondary p-3">
          {{ splicePoint.location }}
        </td>
        <td class="border border-secondary p-3">
          {{ splicePoint.buffer }}
        </td>
        <td class="border border-secondary p-3">
          {{ splicePoint.core }}
        </td>
        <td class="border border-secondary p-3">
          {{ splicePoint.scheduled_start_date }}
        </td>
        <td class="border border-secondary p-3">
          {{ splicePoint.start_time }}
        </td>
        <td class="border border-secondary p-3">
          {{ splicePoint.scheduled_end_date }}
        </td>
        <td class="border border-secondary p-3">
          {{ splicePoint.end_date }}
        </td>
        <td class="border border-secondary p-3">
          <div class="flex flex-row-reverse gap-4">
            <router-link
              :to="{
                name: 'provide-report',
                params: { id: splicePoint.id },
              }"
            >
              <button
                class="h-[53px] w-[141px] rounded-md border border-solid border-[transparent] bg-[#D50036] pb-3.5 pl-7 pr-7 pt-3.5 text-white"
              >
                Provide Report
              </button>
            </router-link>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script setup>
const props = defineProps(['splicePoints'])
</script>
