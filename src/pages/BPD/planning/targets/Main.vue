<template>
  <section class="mx-10 py-5">
    <nav
      class="flex items-center border border-gray-200 bg-white p-3 font-semibold text-gray-600"
    >
      <div
        class="btn mx-4 text-center capitalize"
        v-for="item in GenActNavItems"
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

      <!-- </router-link> -->
    </nav>
  </section>
  <section class="mt-5">
    <CompanyTargets v-if="activeTab == 1" />
    <KPIs v-if="activeTab == 2" />
  </section>
</template>

<script setup>
import { ref } from "vue";
import CompanyTargets from "./CompanyTargets.vue";
import KPIs from "./KPIs.vue";

const activeTab = ref(1);
const GenActNavItems = [
  { id: 1, label: "Company Targets" },
  { id: 2, label: "KPIs" },
];
const switchTab = (value) => {
  activeTab.value = value;
};
</script>
