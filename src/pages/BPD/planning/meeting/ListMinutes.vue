<template>
  <div>
    <nav
      class="flex items-center border border-gray-200 bg-black p-3 font-semibold text-white"
    >
      <div class="btn mx-4 text-center capitalize">
        <span class="text-white">
          Minutes
        </span>
      </div>
    </nav>
  </div>
  <div>
    <table class="w-full table-auto border border-secondary text-sm">
      <thead class="bg-gray-300">
        <tr class="border border-secondary capitalize">
          <th class="border border-secondary p-2">Document Url</th>
          <th class="border border-secondary p-3">Date Uploaded</th>
          <!-- <th class="border border-secondary p-3">Start Date</th>
          <th class="border border-secondary p-3">Due Date</th> -->
        </tr>
      </thead>
      <tbody class="">
        <tr
          v-for="(minute, index) in props.minutes"
          :key="index"
          class="border border-secondary capitalize"
          :class="[index % 2 ? 'bg-gray-200' : '']"
        >
          <td class="border border-secondary p-2">
            <a :href="`https://attendanceapi.suburbanfiberco.com/minutes_doc/${minute.document_url}`" target="_blank">
            {{ minute.document_url }}
          </a>
        </td>
          <!-- <td class="border border-secondary p-3">
            {{ actionpoint.responsible }}
          </td>
          <td class="border border-secondary p-3">{{ actionpoint.start_date }}</td> -->
          <td class="border border-secondary p-3">{{ minute.created_at }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup>
const props = defineProps([ 'minutes']);
</script>
