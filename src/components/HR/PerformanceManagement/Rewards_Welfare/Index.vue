<template>
  <app-layout>
    <template v-slot:main-content>
      <main class="min-h-screen w-full bg-[#F5F5F5] pl-[260px]">
      <DynamicHorizontalNavigation />
        <section class="p-5 mt-10">
          <nav
            class="flex items-center bg-white p-3 font-semibold text-gray-600"
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
        <section class="pl-5 pr-5 pb-5">
          <Payroll v-if="activeTab == 1" />
          <Salary v-if="activeTab == 2" />
          <Welfare v-if="activeTab == 3" />
        </section>
      </main>
    </template>
  </app-layout>
</template>

<script setup>
import DynamicHorizontalNavigation from '@/components/DynamicAppHorizontalNavigation.vue'
import Payroll from './Payroll.vue'
import Salary from './Salary.vue'
import Welfare from './Welfare.vue'


import { ref } from 'vue'

const activeTab = ref(1)
const adminNavItems = [
  { id: 1, label: 'Payroll' },
  { id: 2, label: 'Salary and Wage' },
  { id: 3, label: 'Welfare' },
]

const switchTab = (value) => {
  activeTab.value = value
}
</script>
