<script setup>
import DynamicHorizontalNavigation from '@/components/DynamicAppHorizontalNavigation.vue'
import PerformanceAndRewards from '../components/HR/PerformanceManagement/Rewards_Welfare/Performance.vue'
import ManualRewards from '../components/HR/PerformanceManagement/ManualRewards/Index.vue'
import { ref } from 'vue'

const activeTab = ref(1)
const adminNavItems = [
  { id: 1, label: 'Performance & Rewards' },
  { id: 2, label: 'Manual Rewards' },
]

const switchTab = (value) => {
  activeTab.value = value
}
</script>

<template>
  <app-layout>
    <template v-slot:main-content>
      <main class="min-h-screen w-full bg-[#F5F5F5] pl-[260px]">
        <DynamicHorizontalNavigation />
        <section class="p-5">
          <nav
            class="mt-8 flex items-center bg-white p-3 font-semibold text-gray-600"
          >
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
        <section class="p-3">
          <PerformanceAndRewards v-if="activeTab == 1" />
          <ManualRewards v-if="activeTab == 2" />
        </section>
      </main>
    </template>
  </app-layout>
</template>


