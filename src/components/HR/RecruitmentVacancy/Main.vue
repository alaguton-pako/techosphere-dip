<template>
  <app-layout>
    <template v-slot:main-content>
      <main class="min-h-screen w-full bg-[#F5F5F5] pl-[260px]">
        <section>
          <DynamicHorizontalNavigation />
          <nav
            class="mx-10 my-7 flex items-center bg-white p-3 font-semibold text-gray-600"
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
        <section class="p-2">
          <VacancyRecord v-if="activeTab == 1" />
          <ApplicationRecord v-if="activeTab == 2" />
          <InterviewRecord v-if="activeTab == 3" />
          <Offers v-if="activeTab == 4" />
        </section>
      </main>
    </template>
  </app-layout>
</template>

<script setup>
import DynamicHorizontalNavigation from '../../../components/DynamicAppHorizontalNavigation.vue'
import VacancyRecord from '../RecruitmentVacancy/VacancyRecord.vue'
import ApplicationRecord from '../ViewApplicationRecord/ApplicationTable.vue'
import InterviewRecord from '../ObligationsRecruitment/InterviewRecord.vue'
import Offers from '../InterviewRecords/Offers.vue'
import { ref } from 'vue'

const activeTab = ref(1)
const adminNavItems = [
  { id: 1, label: 'Vacancies' },
  { id: 2, label: 'Applications' },
  { id: 3, label: 'Interviews' },
  { id: 4, label: 'Offers' },
]

const switchTab = (value) => {
  activeTab.value = value
}
</script>
