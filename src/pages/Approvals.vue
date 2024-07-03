<script setup>
import { ref, onMounted } from "vue";
import AppLayout from "../layouts/AppLayout.vue";
import HorizontalNavigation from "../components/AppHorizontalNavigation.vue";
import DateAndSearch from "../components/DateAndSearch.vue";
import { useUserStore } from "../stores/userStore";
import Schedule from '@/components/approvals/Schedule.vue'
import Leave from "@/components/approvals/Leave.vue";
const acceptLeave = ref("");
const rejectLeave = ref("");
const adminNavItems = [
  { id: true, label: "Daily Schedule" },
  { id: false, label: "Request" },
];

const userStore = useUserStore();
const navItems = ["my tickets"];
const activeTab = ref(true);
const search = ref();
// onMounted(async () => {
//   // getPendingSchedule();
// });


const switchTab = (value) => {
  activeTab.value = value;
};
</script>
<template>
  <div>
    <app-layout>
      <template v-slot:main-content>
        <main class="min-h-screen w-full bg-[#F5F5F5] pl-[260px]">
          <HorizontalNavigation />
          <section class="pt-4">
            <nav
              class="flex items-center border border-gray-200 bg-white p-3 font-semibold text-gray-600"
            >
              <div
                class="btn mx-4 text-center capitalize"
                v-for="item in adminNavItems"
                :key="item.id"
              >
                <button @click="switchTab(item.id)">
                  {{ item.label }}
                </button>
              </div>
            </nav>
          </section>
          <section class="p-5" v-if="activeTab">
            <div class="border bg-white">
              <DateAndSearch />
            </div>
            <!-- call approvals here -->
            <Schedule />
          </section>

          <section
            v-if="!activeTab"
            class="m-14 flex flex-col border-b border-gray-100 bg-white text-gray-600"
          >
            <div class="border bg-white">
              <DateAndSearch />
            </div>
    <!-- call the leave tabs -->
            <Leave />
          </section>
        </main>
      </template>
    </app-layout>
  </div>
</template>
