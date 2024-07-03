<template>
  <table class="mt-1 w-full table-auto border border-secondary text-sm">
    <thead class="bg-gray-200">
      <tr class="border border-secondary capitalize">
        <th class="border border-secondary p-3">Installer</th>
        <th class="border border-secondary p-3">Total Activity</th>
        <th class="border border-secondary p-3">Achieved</th>
        <th class="border border-secondary p-3">Percentage</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(diagnosis, index) in installers" :key="index">
        <td class="border border-secondary p-3">{{ diagnosis.name }}</td>
        <td class="border border-secondary p-3 text-center">
          {{ diagnosis.totalActivity }}
        </td>
        <td class="border border-secondary p-3 text-center">{{ diagnosis.achieved }}</td>
        <td class="border border-secondary p-3 text-center">
          {{ ((diagnosis.achieved / diagnosis.totalActivity) * 100).toFixed(2) }}%
        </td>
      </tr>
    </tbody>
    <tfoot class="bg-gray-100">
      <tr>
        <td class="border border-secondary p-3 font-bold">Total</td>
        <td class="border border-secondary p-3 text-center font-bold">
          {{ totalActivity }}
        </td>
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

const installers = ref([{ name: "Moses Jamie", totalActivity: 4, achieved: 4 }]);

const totalActivity = computed(() =>
  installers.value.reduce((total, diagnosis) => total + diagnosis.totalActivity, 0)
);

const totalAchieved = computed(() =>
  installers.value.reduce((total, diagnosis) => total + diagnosis.achieved, 0)
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
