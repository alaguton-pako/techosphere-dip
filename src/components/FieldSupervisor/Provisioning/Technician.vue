<template>
  <table class="mt-1 w-full table-auto border border-secondary text-sm">
    <thead class="bg-gray-200">
      <tr class="border border-secondary capitalize">
        <th class="border border-secondary p-3">Installer</th>
        <th class="border border-secondary p-3">Activity</th>
        <th class="border border-secondary p-3">Total Activity</th>
        <th class="border border-secondary p-3">Achieved</th>
        <th class="border border-secondary p-3">Percentage</th>
        <th class="border border-secondary p-3">Comment</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(provisioning, index) in provision" :key="index">
        <td class="border border-secondary p-3">{{ provisioning.name }}</td>
        <td class="border border-secondary p-3 text-center">
          {{ provisioning.activity }}
        </td>
        <td class="border border-secondary p-3 text-center">
          {{ provisioning.totalActivity }}
        </td>
        <td class="border border-secondary p-3 text-center">
          {{ provisioning.achieved }}
        </td>
        <td class="border border-secondary p-3 text-center">
          {{ ((provisioning.achieved / provisioning.totalActivity) * 100).toFixed(2) }}%
        </td>
        <td class="border border-secondary p-3 text-center">
          {{ provisioning.comment }}%
        </td>
      </tr>
    </tbody>
    <tfoot class="bg-gray-100">
      <tr>
        <td class="border border-secondary p-3 font-bold">Total</td>
        <td class="border border-secondary p-3 text-center font-bold">
          {{ totalActivity }}
        </td>
        <td class="border border-secondary p-3 text-center font-bold"></td>
        <td class="border border-secondary p-3 text-center font-bold">
          {{ totalAchieved }}
        </td>
        <td class="border border-secondary p-3 text-center font-bold">
          {{ totalPercentage }}
        </td>
      </tr>
    </tfoot>
  </table>
</template>
<script setup>
import { ref, computed } from "vue";

const provision = ref([
  {
    name: "Moses Jamie",
    activity: "LOS",
    totalActivity: 4,
    achieved: 4,
    comment: "Excellent progress",
  },
]);

const totalActivity = computed(() =>
  provision.value.reduce((total, provisioning) => total + provisioning.totalActivity, 0)
);

const totalAchieved = computed(() =>
  provision.value.reduce((total, provisioning) => total + provisioning.achieved, 0)
);

const totalPercentage = computed(() => {
  const activity = totalActivity.value;
  const achieved = totalAchieved.value;
  if (activity > 0) {
    return ((achieved / activity) * 100).toFixed(2) + "%";
  }
  return "N/A";
});
</script>
