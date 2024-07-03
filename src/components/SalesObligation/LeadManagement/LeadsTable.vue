<template>
  <table class="w-full table-auto border border-secondary text-center text-sm">
    <thead class="bg-gray-200 text-xs uppercase">
      <tr class="border border-secondary">
        <th class="border border-secondary p-3">#</th>
        <th class="border border-secondary p-3">Business Name</th>
        <th class="border border-secondary p-3">Contact Name</th>
        <th class="border border-secondary p-3">Email</th>
        <th v-if="props.converted == false" class="border border-secondary p-3">
          Assigned to
        </th>
        <th class="border border-secondary p-3">Phone</th>
        <th class="border border-secondary p-3">source</th>
        <th class="border border-secondary p-3">date</th>
        <th class="border border-secondary p-3">created by</th>
        <th class="border border-secondary p-3">stage</th>
        <th class="border border-secondary p-3">action</th>
      </tr>
    </thead>
    <tbody v-if="!props.isLoading">
      <tr v-for="(lead, index) in props.leads" :key="index">
        <td class="border border-secondary p-4">{{ index + 1 }}</td>
        <td class="border border-secondary p-4">
          {{ lead.business_name }}
        </td>
        <td class="border border-secondary p-4">
          {{ lead.contact_firstname }} {{ lead.contact_lastname }}
        </td>
        <td v-if="props.converted == false" class="border border-secondary p-4">
          {{ lead.email_address }}
        </td>
        <td v-else class="border border-secondary p-4">
          {{ lead.email }}
        </td>
        <td v-if="props.converted == false" class="border border-secondary p-4">
          {{
            lead.leads_assignment != null
              ? lead?.leads_assignment?.assigned_name
              : ''
          }}
        </td>
        <td class="border border-secondary p-4">{{ lead.phone_number }}</td>
        <td class="border border-secondary p-4 text-center">
          <p>{{ lead.source }}</p>
        </td>
        <td class="border border-secondary p-4 text-center">
          <p>{{ formatDate(lead.created_at) }}</p>
        </td>
        <td class="border border-secondary p-4">
          {{ lead.created_by }}
        </td>
        <td class="border border-secondary p-4">{{ lead.stage }}</td>
        <td>
          <router-link
            v-if="!props.converted"
            :to="{
              name: 'lead detail',
              params: { id: lead.id },
            }"
            class="underline"
            >View</router-link
          >
          <router-link
            v-else
            :to="{
              name: 'lead detail',
              params: { id: lead.email },
            }"
            class="underline"
            >View</router-link
          >
        </td>
      </tr>
    </tbody>
    <tbody v-else>
      <LoadingSpinner />
    </tbody>
  </table>
</template>

<script setup>
import { formatDate } from '@/helpers/utils.js'

import LoadingSpinner from '../../LoadingSpinner.vue'
const props = defineProps({
  leads: [],
  isLoading: true,
  isAssigned: true,
  converted: false,
})
</script>
