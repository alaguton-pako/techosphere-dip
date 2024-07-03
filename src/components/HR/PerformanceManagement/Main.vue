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
          <Overview v-if="activeTab == 1" />
          <Appraisals v-if="activeTab == 2" />
          <PerformanceAndRewards v-if="activeTab == 3" />
          <ManualRewards v-if="activeTab == 4" />
        </section>
      </main>
    </template>
  </app-layout>
</template>

<script setup>
import DynamicHorizontalNavigation from '@/components/DynamicAppHorizontalNavigation.vue'
import Overview from '../PerformanceManagement/ObligationPerformance/Overview.vue'
import Appraisals from '../PerformanceManagement/Appraisal/Appraisals.vue'
import PerformanceAndRewards from '../PerformanceManagement/Rewards_Welfare/Performance.vue'
import ManualRewards from './ManualRewards/Index.vue'
import { ref } from 'vue'

const activeTab = ref(1)
const adminNavItems = [
  { id: 1, label: 'Overview' },
  { id: 2, label: 'Appraisals' },
  { id: 3, label: 'Performance & Rewards' },
  { id: 4, label: 'Manual Rewards' },
]

const switchTab = (value) => {
  activeTab.value = value
}
</script>
