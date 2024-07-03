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
        class="w-full table-auto border border-secondary text-sm mt-1"
      >
        <thead class="bg-gray-200">
          <tr class="capitalize">
            <th class="p-3">Activity</th>
            <th class="p-3">Morning Slot</th>
            <th class="p-3">Afternoon Slot</th>
            <th class="p-3">Evening Slot</th>
            <th class="p-3">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(installer, index) in enrichedInstallers" :key="index">
            <td class="border border-secondary p-3">{{ installer.activity }}</td>
            <td class="border border-secondary p-3 text-center">
              {{ installer.morning }}
            </td>
            <td class="border border-secondary p-3 text-center">
              {{ installer.afternoon }}
            </td>
            <td class="border border-secondary p-3 text-center">
              {{ installer.evening }}
            </td>
            <td class="border border-secondary p-3 text-center">
              {{ installer.total }}
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
      <Technician v-if="activeTab == 2" />
      <section></section>
    </section>
  </section>
</template>
<script setup>
import Card from "../../Card.vue";
import CurrentTime from "../../CurrentTime.vue";
import Technician from "./Technician.vue";
import { ref, computed, onMounted } from "vue";
import ActivityButton from "../ActivityButton.vue";
import { useRouter } from "vue-router";
import Swal from "sweetalert2";
import workplaceRequestsv2 from "@/services/workplaceRequestsv2";

const router = useRouter();

const navigate = (routeName) => {
  router.push({ name: routeName });
};
const isLoading = ref(false);

onMounted(() => {
  isLoading.value = true;
  getSummary();
});

const getSummary = async () => {
  try {
    isLoading.value = true;
    const { status, data } = await workplaceRequestsv2(
      "get",
      `commercial/retail/customer-care/customer-operations/summary?source=MyLegend`
    );
    if (status === 200) {
      summary.value[0].figure = data.data.installations_obligations ?? 0;
      summary.value[1].figure = data.data.installations_escalations ?? 0;
      summary.value[2].figure = data.data.installations_liabilities ?? 0;
      summary.value[3].figure = data.data.installations_total ?? 0;
    }
  } catch (e) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: e.message,
    });
  }
  isLoading.value = false;
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
      routeName: "installation-obligation",
    },
    {
      figure: 0,
      bgColor: "bg-white",
      textColor: "text-black",
      border: "border",
      borderColor: " border-gray-800",
      title: "Escalations & Conversations",
      body: "Total number of Escalations & Conversations",
      routeName: "installation-escalations",
    },
    {
      figure: 0,
      bgColor: "bg-white",
      textColor: "text-black",
      border: "border",
      borderColor: " border-gray-800",
      title: "Liabilities & Sanctions",
      body: "Total number of team appraisals Liabilities & Sanctions",
      routeName: "installation-liabilities",
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

const activeTab = ref(1);

const switchTab = (value) => {
  activeTab.value = value;
};

const installers = ref([
  { activity: "Survey", morning: 2, afternoon: 1, evening: 1 },
  { activity: "Outdoor", morning: 1, afternoon: 2, evening: 1 },
]);

const enrichedInstallers = computed(() =>
  installers.value.map((installer) => ({
    ...installer,
    total: installer.morning + installer.afternoon + installer.evening,
  }))
);

const totalMorning = computed(() =>
  enrichedInstallers.value.reduce((acc, curr) => acc + curr.morning, 0)
);

const totalAfternoon = computed(() =>
  enrichedInstallers.value.reduce((acc, curr) => acc + curr.afternoon, 0)
);

const totalEvening = computed(() =>
  enrichedInstallers.value.reduce((acc, curr) => acc + curr.evening, 0)
);

const totalSlots = computed(() =>
  enrichedInstallers.value.reduce((acc, curr) => acc + curr.total, 0)
);
</script>
