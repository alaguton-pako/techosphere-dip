<script setup>
import DynamicHorizontalNavigation from "@/components/DynamicAppHorizontalNavigation.vue";
import { ref } from "vue";
import Activity from "./Installation/Activity.vue";
import ActivityDiagnosis from "./Diagnosis/ActivityDiagnosis.vue";
import ActivityProvisioning from "./Provisioning/ActivityProvisioning.vue";
import Operational from "./Operational.vue";

const activeTab = ref(1);
const adminNavItems = [
  { id: 1, label: "Installation" },
  { id: 2, label: "Provisioning" },
  { id: 3, label: "Diagnosis" },
  { id: 4, label: "Operational Readiness" },
];

const switchTab = (value) => {
  activeTab.value = value;
};
</script>

<template>
  <app-layout>
    <template v-slot:main-content>
      <main class="min-h-screen w-full bg-[#F5F5F5] pl-[260px]">
        <DynamicHorizontalNavigation />
        <section class="mt-14 pl-10 pr-10">
          <nav class="flex items-center bg-white p-3 font-semibold text-gray-600">
            <div
              class="btn mx-4 text-center capitalize"
              v-for="item in adminNavItems"
              :key="item.id"
            >
              <button
                :class="{
                  'text-primary': activeTab === item.id,
                }"
                @click="switchTab(item.id)"
              >
                {{ item.label }}
              </button>
            </div>
          </nav>
        </section>
        <section>
          <Activity v-if="activeTab == 1" />
          <ActivityProvisioning v-if="activeTab == 2" />
          <ActivityDiagnosis v-if="activeTab == 3" />
          <Operational v-if="activeTab == 4" />
        </section>
      </main>
    </template>
  </app-layout>
</template>
