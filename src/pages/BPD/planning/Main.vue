<script setup>
import DynamicHorizontalNavigation from '@/components/DynamicAppHorizontalNavigation.vue'
import { ref } from 'vue'
import GeneralCalendar from '@/pages/BPD/planning/general/index.vue'
import Meeting from '@/page/BPD/planning/meeting/Main.vue'

const activeTab = ref(1)
const adminNavItems = [
  { id: 1, label: 'GENERAL ACTIVITIES CALENDAR' },
  { id: 2, label: 'MINUTES AND ACTION POINTS' },
  { id: 3, label: 'TARGET & KPIs' },
  { id: 4, label: 'MEETING ATTENDANCE' },
]

const switchTab = (value) => {
  activeTab.value = value
}
</script>

<template>
  <section>
    <DynamicHorizontalNavigation />
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
    <GeneralCalendar v-if="activeTab == 1" />
    <Meeting v-if="activeTab == 2" />
  </section>
</template>
