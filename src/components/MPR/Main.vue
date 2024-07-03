<template>
  <app-layout>
    <template v-slot:main-content>
      <main class="min-h-screen w-full bg-[#F5F5F5] pl-[260px]">
        <section>
          <DynamicHorizontalNavigation />
          <nav
            class=" flex items-center bg-white p-3 font-semibold text-gray-600 gap-6"
          >
            <div
              class="btn mx-4 ml-3 text-center capitalize "
              v-for="item in adminNavItems"
              :key="item.id"
            >
              <button
              class="items-start text-lg text-gray-500 underline decoration-slate-500 decoration-4 underline-offset-8 cursor-pointer"
                :class="{
                  'text-orange-500 border-orange-500': activeTab === item.id,
                }"
                @click="switchTab(item.id)"
              >
                {{ item.label }}
              </button>
            </div>
          </nav>
        </section>
        <section class="p-8">
          <Revenue v-if="activeTab == 1" />
          <NewSales v-if="activeTab == 2" />
          <Budget v-if="activeTab == 3" />
          <RevenueGrowth v-if="activeTab == 4" />
          <ProfitLoss v-if="activeTab == 5" />
        </section>
      </main>
    </template>
  </app-layout>
</template>

<script setup>
import DynamicHorizontalNavigation from '@/components/DynamicAppHorizontalNavigation.vue'
import { ref } from 'vue'
import Revenue from './Finance/Revenue.vue';
import NewSales from './Finance/NewSales.vue';
import Budget from './Finance/Budget.vue';
import RevenueGrowth from './Finance/RevenueGrowth.vue';
import ProfitLoss from './Finance/ProfitLoss.vue';

const activeTab = ref(1)
const adminNavItems = [
  { id: 1, label: 'Revenue' },
  { id: 2, label: 'New Sales Performance' },
  { id: 3, label: 'Budget Analysis' },
  { id: 4, label: 'Revenue Growth' },
  { id: 5, label: 'Profit & Loss' },
]

const switchTab = (value) => {
  activeTab.value = value
}
</script>
