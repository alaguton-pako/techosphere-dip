<template>
  <app-layout>
    <template v-slot:main-content>
      <main class="min-h-screen w-full bg-[#F5F5F5] pl-[260px]">
        <section>
          <DynamicHorizontalNavigation />
          <nav class="m-10 flex items-center bg-white p-3 font-semibold text-gray-600">
            <div class="btn mx-4 text-center capitalize" v-for="item in adminNavItems" :key="item.id">
              <button :class="{
                'text-primary': activeTab === item.id,
              }" @click="switchTab(item.id)">
                {{ item.label }}
              </button>
            </div>
          </nav>
        </section>
        <section class="mx-20 my-10">
          <Overview v-if="activeTab == 1" />
          <DepartmentUnit v-if="activeTab == 2" />

        </section>
      </main>
    </template>
  </app-layout>
</template>

<script setup>
import DynamicHorizontalNavigation from "@/components/DynamicAppHorizontalNavigation.vue";
import DepartmentUnit from '@/pages/compliance/DepartmentUnit.vue'
import Overview from '@/pages/compliance/Overview.vue'
import { ref } from "vue";

const activeTab = ref(1);
const adminNavItems = [
  { id: 1, label: "Overview" },
  { id: 2, label: "Department/Unit" },
];

const switchTab = (value) => {
  activeTab.value = value;
};
</script>
