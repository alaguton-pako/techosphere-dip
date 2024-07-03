<template>
  <app-layout>
    <template v-slot:main-content>
      <main class="min-h-screen w-full bg-[#F5F5F5] pl-[260px]">
        <section>
          <DynamicHorizontalNavigation />
          <nav
            class="flex items-center bg-white p-3 font-semibold text-gray-600"
          >
            <div
              class="btn mx-4 text-center capitalize  items-start text-lg text-gray-500 underline decoration-slate-500 decoration-4 underline-offset-8 cursor-pointer"
              v-for="item in adminNavItems"
              :key="item.id"
            >
              <button
                class="btn mx-4 text-center capitalize  items-start text-lg text-gray-500 underline decoration-slate-500 decoration-4 underline-offset-8 cursor-pointer"
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
          <Compliance v-if="activeTab == 1" />
          <!-- <DepartmentalTab v-if="activeTab == 2" /> -->
          <StaffPerformance v-if="activeTab == 3" />
          </section>
      </main>
    </template>
  </app-layout>
</template>

<script setup>
import DynamicHorizontalNavigation from '@/components/DynamicAppHorizontalNavigation.vue'
import { onMounted, ref } from 'vue'
import Compliance from './Compliance.vue'
import DepartmentalTab from './Department/DepartmentalTab.vue'
import StaffPerformance from './StaffPerformance.vue'
import workplaceRequestsv2 from '../../../services/workplaceRequestsv2'


const activeTab = ref(1)
const adminNavItems = [
  { id: 1, label: 'Compliance' },
  // { id: 2, label: 'Department' },
  { id: 3, label: 'Staff Performance' },
]



const switchTab = (value) => {
  activeTab.value = value
}
</script>
