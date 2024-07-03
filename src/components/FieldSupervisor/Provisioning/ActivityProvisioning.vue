<template>
  <section class="p-10">
    <div class="mt-6 grid grid-cols-4 space-x-3 cursor-pointer">
      <Card
        @click="navigate(card.routeName)"
        v-for="(card, index) in summary"
        :key="index"
        :figure="card.figure"
        :title="card.title"
        :bgColor="card.bgColor"
        :textColor="card.textColor"
        :body="card.body"
        heigh="h-48"
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
        class="bg-black justify-start place-content-start flex w-full mt-10 pl-4 pr-4 pt-3 pb-2"
      />
      <table
        v-if="activeTab == 1"
        class="mt-1 w-full table-auto border border-secondary text-sm"
      >
        <thead class="bg-gray-200">
          <tr class="border border-secondary capitalize">
            <th class="border border-secondary p-3">Activity</th>
            <th class="border border-secondary p-3">Scheduled</th>
            <th class="border border-secondary p-3">Resolved</th>
            <th class="border border-secondary p-3">Percentage</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(provisioning, index) in provision" :key="index">
            <td class="border border-secondary p-3">{{ provisioning.activity }}</td>
            <td class="border border-secondary p-3 text-center">
              {{ provisioning.scheduled }}
            </td>
            <td class="border border-secondary p-3 text-center">
              {{ provisioning.resolved }}
            </td>
            <td class="border border-secondary p-3 text-center">
              {{ ((provisioning.resolved / provisioning.scheduled) * 100).toFixed(2) }}%
            </td>
          </tr>
        </tbody>
        <tfoot class="bg-gray-100">
          <tr>
            <td class="border border-secondary p-3 font-bold">Total</td>
            <td class="border border-secondary p-3 text-center font-bold">
              {{ totalScheduled }}
            </td>
            <td class="border border-secondary p-3 text-center font-bold">
              {{ totalResolved }}
            </td>
            <td class="border border-secondary p-3 text-center font-bold">
              {{ totalPercentage }}
            </td>
          </tr>
        </tfoot>
      </table>
      <section>
        <Technician v-if="activeTab == 2" />
      </section>
    </section>
  </section>
</template>
<script setup>
import { ref, computed } from "vue";
import Card from "../../Card.vue";
import CurrentTime from "../../CurrentTime.vue";
import Technician from "./Technician.vue";
import ActivityButton from "../ActivityButton.vue";
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
      border: "border",
      borderColor: " border-gray-800",
      title: "Obligations",
      body: "Total number of Obligations",
      routeName: "provisioning-obligations",
    },
    {
      figure: 0,
      bgColor: "bg-white",
      textColor: "text-black",
      border: "border",
      borderColor: " border-gray-800",
      title: "Escalations & Conversations",
      body: "Total number of Escalations & Conversations",
      routeName: "provisioning-escalations",
    },
    {
      figure: 0,
      bgColor: "bg-white",
      textColor: "text-black",
      border: "border",
      borderColor: " border-gray-800",
      title: "Liabilities & Sanctions",
      body: "Total number of team appraisals Liabilities & Sanctions",
      routeName: "provisioning-liabilities",
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

const provision = ref([{ activity: "Splitter Activation", scheduled: 4, resolved: 4 }]);

const totalScheduled = computed(() =>
  provision.value.reduce((total, provisioning) => total + provisioning.scheduled, 0)
);

const totalResolved = computed(() =>
  provision.value.reduce((total, provisioning) => total + provisioning.resolved, 0)
);

const totalPercentage = computed(() => {
  const scheduled = totalScheduled.value;
  const resolved = totalResolved.value;
  if (scheduled > 0) {
    return ((resolved / scheduled) * 100).toFixed(2) + "%";
  }
  return "N/A";
});
</script>
