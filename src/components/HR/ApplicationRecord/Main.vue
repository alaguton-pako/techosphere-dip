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
        <section class="mx-20">
          <EmployeeRecords v-if="activeTab == 1" />
          <RegistrationForm v-if="activeTab == 2" />
        </section>
      </main>
    </template>
  </app-layout>
</template>

<script setup>
import DynamicHorizontalNavigation from '@/components/DynamicAppHorizontalNavigation.vue'
import EmployeeRecords from '../EmployeeRecords/EmployeeRecords.vue'
import RegistrationForm from '../EmployeeRecords/RegistrationForm.vue'
import { ref } from 'vue'

const activeTab = ref(1)
const adminNavItems = [
  { id: 1, label: 'Employee Records' },
  { id: 2, label: 'Registration Form - Existing' },
]

const switchTab = (value) => {
  activeTab.value = value
}
</script>
