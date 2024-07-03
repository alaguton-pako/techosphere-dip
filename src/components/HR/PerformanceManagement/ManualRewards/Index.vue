<template>
  <app-layout>
    <template v-slot:main-content>
      <main class="min-h-screen w-full bg-[#F5F5F5]">
        <!-- <DynamicHorizontalNavigation /> -->
        <section class="pl-10 pr-10 mt-3">
          <nav class="flex items-center bg-white p-2 font-semibold text-gray-600">
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
        <section class="">
          <ManualReward v-if="activeTab == 1" />
          <Query v-if="activeTab == 2" />
          <Disciplinary v-if="activeTab == 3" />
        </section>
      </main>
    </template>
  </app-layout>
</template>

<script setup>
import DynamicHorizontalNavigation from "@/components/DynamicAppHorizontalNavigation.vue";
import Disciplinary from "./Disciplinary.vue";
import { ref } from "vue";
import ManualReward from "./Bonus.vue";
import Query from "./ManualReward.vue";

const activeTab = ref(1);
const adminNavItems = [
  { id: 1, label: "Manual Reward" },
  { id: 2, label: "Query" },
  { id: 3, label: "Disciplinary" },
];

const switchTab = (value) => {
  activeTab.value = value;
};
</script>
