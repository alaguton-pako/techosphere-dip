<script setup>
const props = defineProps(['faultHistory'])
import LoadingSpinner from "../LoadingSpinner.vue";
import { formatDate } from '@/helpers/utils.js'

</script>

<template lang="">
  <table class="w-full table-auto border border-secondary text-center text-sm">
    <thead class="bg-gray-200 text-xs uppercase">
      <tr class="border border-secondary">
        <th class="border border-secondary p-3">Ticket Number</th>
        <th class="border border-secondary">Fault Category</th>
        <th class="border border-secondary">Fault type</th>
        <th class="border border-secondary">Date</th>
        <th class="border border-secondary">Last Event</th>
        <th class="border border-secondary">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in faultHistory" class="border-b border-secondary">
        <td class="border border-secondary">{{item.ticket_number}}</td>
        <td class="border border-secondary">
          {{item.category || 'N/A'}}
        </td>
        <td class="border border-secondary">{{item.network_fault_type}}</td>
        <td class="border border-secondary">{{formatDate(item.created_at)}}</td>
        <td class="border border-secondary">
          {{item.event}}
        </td>
        <td class="border border-secondary">
          <a href="#" class="text-primary underline">View</a>
        </td>
        <td class="flex flex-col items-center justify-center p-3 text-sm">
          <span class="rounded-lg bg-primary py-2 px-5 text-center text-white"
            >Escallate</span
          >
        </td>
      </tr>
    </tbody>
  </table>
</template>
