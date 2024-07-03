<script setup>
import DynamicHorizontalNavigation from "@/components/DynamicAppHorizontalNavigation.vue";
import { ref } from "vue";
import Operation from "./Operation.vue";
import Monitoring from "./Monitoring.vue";
import Outstanding from "./Outstanding.vue";
import Project from "./Project.vue";

const activeTab = ref(1);
const adminNavItems = [
  { id: 1, label: "Operational Readiness" },
  { id: 2, label: "Monitoring" },
  { id: 3, label: "Outstanding Survey" },
  { id: 4, label: "Project Plan" },
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
          <Operation v-if="activeTab == 1" />
          <Monitoring v-if="activeTab == 2" />
          <Outstanding v-if="activeTab == 3" />
          <Project v-if="activeTab == 4" />
        </section>
      </main>
    </template>
  </app-layout>
</template>
