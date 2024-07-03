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
          <Obligations v-if="activeTab == 1" />
          </section>
      </main>
    </template>
  </app-layout>
</template>

<script setup>
import DynamicHorizontalNavigation from '@/components/DynamicAppHorizontalNavigation.vue'
import { ref } from 'vue'
import Obligations from './Obligations.vue'


const activeTab = ref(1)
const adminNavItems = [
  { id: 1, label: 'Obligations' },
]

const switchTab = (value) => {
  activeTab.value = value
}
</script>
