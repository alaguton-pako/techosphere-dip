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

    <section>
      <ActivityButton :activeTab="activeTab" @switchTab="switchTab" />
    </section>
    <section>
      <CurrentTime
        class="bg-black justify-start place-content-start flex w-full mt-10 p-4"
      />
      <table
        v-if="activeTab === 1"
        class="mt-1 w-full table-auto border border-secondary text-sm"
      >
        <thead class="bg-gray-200">
          <tr class="border border-secondary capitalize">
            <th class="border border-secondary p-3">Activity</th>
            <th class="border border-secondary p-3">Morning Slot</th>
            <th class="border border-secondary p-3">Afternoon Slot</th>
            <th class="border border-secondary p-3">Evening Slot</th>
            <th class="border border-secondary p-3">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in slotInstallers" :key="index">
            <td class="border border-secondary p-3">{{ item.activity }}</td>
            <td class="border border-secondary p-3 text-center">
              {{ item.morning }}
            </td>
            <td class="border border-secondary p-3 text-center">
              {{ item.afternoon }}
            </td>
            <td class="border border-secondary p-3 text-center">
              {{ item.evening }}
            </td>
            <td class="border border-secondary p-3 text-center">
              {{ item.total }}
            </td>
          </tr>
        </tbody>
        <tfoot class="bg-gray-100">
          <tr>
            <td class="border border-secondary p-3 font-bold">Total</td>
            <td class="border border-secondary p-3 text-center font-bold">
              {{ totalMorning }}
            </td>
            <td class="border border-secondary p-3 text-center font-bold">
              {{ totalAfternoon }}
            </td>
            <td class="border border-secondary p-3 text-center font-bold">
              {{ totalEvening }}
            </td>
            <td class="border border-secondary p-3 text-center font-bold">
              {{ totalSlots }}
            </td>
          </tr>
        </tfoot>
      </table>
      <section>
        <Technician v-if="activeTab === 2" />
      </section>
    </section>
  </section>
</template>
<script setup>
import Card from "../../Card.vue";
import CurrentTime from "../../CurrentTime.vue";
import Technician from "./Technician.vue";
import ActivityButton from "../ActivityButton.vue";
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

const switchTab = (value) => {
  activeTab.value = value;
};
const activeTab = ref(1);

const diagnosis = ref([
  { activity: "Survey", morning: 2, afternoon: 1, evening: 1 },
  { activity: "Outdoor", morning: 1, afternoon: 2, evening: 1 },
]);

const slotInstallers = computed(() =>
  diagnosis.value.map((item) => ({
    ...item,
    total: item.morning + item.afternoon + item.evening,
  }))
);

const totalMorning = computed(() =>
  slotInstallers.value.reduce((acc, curr) => acc + curr.morning, 0)
);

const totalAfternoon = computed(() =>
  slotInstallers.value.reduce((acc, curr) => acc + curr.afternoon, 0)
);

const totalEvening = computed(() =>
  slotInstallers.value.reduce((acc, curr) => acc + curr.evening, 0)
);

const totalSlots = computed(() =>
  slotInstallers.value.reduce((acc, curr) => acc + curr.total, 0)
);
</script>
