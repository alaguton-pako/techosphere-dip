<template>
    <app-layout>
      <template v-slot:main-content>
        <main class="min-h-screen w-full bg-[#F5F5F5]">
          <section>
            <h1 class="pb-5 mt-6 text-3xl font-semibold ">Department Rating</h1>
            <nav
              class="mt-1 flex items-center bg-white p-3 font-semibold text-gray-600"
            >
              <div
                class="btn mx-4 text-center capitalize"
                v-for="item in adminNavItems"
                :key="item.id"
              >
                <button
                  :class="{
                    'text-orange-500': activeTab === item.id,
                  }"
                  @click="switchTab(item.id)"
                >
                  {{ item.label }}
                </button>
              </div>
            </nav>
          </section>
          <section class="p-6">
            <Departmental v-if="activeTab == 1" />
            <!-- <Operations v-if="activeTab == 2" /> -->
            <!-- <Finance v-if="activeTab == 3" /> -->
            <!-- <Marketing v-if="activeTab == 4" /> -->
          </section>
        </main>
      </template>
    </app-layout>
  </template>
  
  <script setup>
  import DynamicHorizontalNavigation from '@/components/DynamicAppHorizontalNavigation.vue'
  import { ref } from 'vue'
  import Finance from './Finance.vue';
  import Marketing from './Marketing.vue';
  import Departmental from './Departmental.vue';
  import Operations from './Operations.vue';

  
  const activeTab = ref(1)
  const adminNavItems = [
    { id: 1, label: 'Summary' },
    // { id: 2, label: 'Operations' },
    // { id: 3, label: 'Finance' },
    // { id: 4, label: 'Marketing' },
  ]
  
  const switchTab = (value) => {k
    activeTab.value = value
  }
  </script>
  