<template>
  <section class="p-10">
    <div class="mt-6 grid grid-cols-4 gap-3 cursor-pointer">
      <Card
        @click="navigate(card.routeName)"
        v-for="(card, index) in summary"
        :key="index"
        :figure="card.figure"
        :title="card.title"
        :bgColor="card.bgColor"
        :textColor="card.textColor"
        :body="card.body"
        height="h-48"
        width="w-80"
        :border="card.border"
        :borderColor="card.borderColor"
      />
    </div>
    <section class="flex flex-row-reverse mt-16 border border-gray-100 bg-white p-2">
      <div class="flex flex-row mr-6">
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
      <div
        class="flex flex-row mr-[520px] font-semibold text-gray-500 text-[25px] justify-start items-start place-content-start"
      >
        Operational Readiness
      </div>
    </section>
    <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500">
        <thead class="text-xs text-gray-700 uppercase bg-gray-100">
          <tr>
            <th class="p-3">Installer</th>
            <th class="p-3" v-for="day in daysInMonth" :key="day">
              {{ day }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="bg-white border-b"
            v-for="installer in installers"
            :key="installer.name"
          >
            <th class="p-3 font-medium text-gray-900 whitespace-nowrap">
              {{ installer.name }}
            </th>
            <td class="p-3" v-for="day in daysInMonth" :key="`${installer.name}-${day}`">
              {{ getPerformanceForDay(installer, day) }}%
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>
<script setup>
import Card from "../Card.vue";
import { ref, computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const navigate = (routeName) => {
  router.push({ name: routeName });
};

const summaryCardsData = () => {
  return [
    {
      figure: 0,
      bgColor: "bg-white",
      textColor: "text-black",
      title: "Obligations",
      body: "Total number of Obligations",
      routeName: "diagnosis-obligations",
    },
    {
      figure: 0,
      bgColor: "bg-white",
      textColor: "text-black",
      border: "border",
      borderColor: " border-gray-800",
      title: "Escalations & Conversations",
      body: "Total number of Escalations & Conversations",
      routeName: "diagnosis-escalations",
    },
    {
      figure: 0,
      bgColor: "bg-white",
      textColor: "text-black",
      border: "border",
      borderColor: " border-gray-800",
      title: "Liabilities & Sanctions",
      body: "Total number of team appraisals Liabilities & Sanctions",
      routeName: "diagnosis-liabilities",
    },
    {
      figure: 0,
      bgColor: "bg-[#0F151F]",
      textColor: "text-white",
      title: "Total",
      body: "Overall number of Total",
    },
  ];
};
const summary = ref(summaryCardsData());

const installers = ref([
  { name: "Moses Adams", performance: { 1: 95, 2: 88, 30: 90 } },
  { name: "James Abraham", performance: { 1: 78, 2: 82, 30: 85 } },
]);

const today = new Date();
const currentYear = today.getFullYear();
const currentMonth = today.getMonth();

const daysInMonth = computed(() => {
  const numDays = new Date(currentYear, currentMonth + 1, 0).getDate();
  return Array.from({ length: numDays }, (_, i) => i + 1);
});

function getPerformanceForDay(installer, day) {
  return installer.performance[day] ?? "-";
}
</script>
