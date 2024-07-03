<script setup>
import { onMounted, ref } from "vue";
import { useUserStore } from "@/stores/userStore";
const expandObligationTab = ref(false);
const expandPerformanceObligationTab = ref(false);

const expandBPD = ref(false);
const userStore = useUserStore();
</script>



<template>
  <li v-if="userStore.userHasRole('BPU') ||
    userStore.userHasRole('DM Business Performance') ||
    userStore.userHasRole('Data Analyst') ||
    userStore.userHasRole('Compliance Officer') ||
    userStore.userHasRole('HR') ||
    userStore.userHasRole('Performance Officer') ||
    userStore.userHasRole('GENERAL OPERATIONS MANAGER')
    " class="cursor-pointer p-4">
    <div class="flex items-center justify-between" @click="expandBPD = !expandBPD">
      <div class="flex items-center">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_3190_67474)">
            <path
              d="M2.14279 19.2857L17.8571 19.2857C18.6461 19.2857 19.2856 18.6461 19.2856 17.8571L19.2856 2.14285C19.2856 1.35387 18.6461 0.714275 17.8571 0.714275L2.14279 0.714275C1.35381 0.714275 0.714216 1.35387 0.714216 2.14285L0.714216 17.8571C0.714216 18.6461 1.35381 19.2857 2.14279 19.2857Z"
              stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path
              d="M4.28564 4.28571H7.14279M4.28564 7.85713H10.7142M16.4285 7.85713L13.1501 13.3211C12.5904 14.254 11.3875 14.5684 10.4429 14.0286L8.76364 13.069C7.85097 12.5475 6.69034 12.8215 6.10726 13.6961L4.28564 16.4286"
              stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </g>
          <defs>
            <clipPath id="clip0_3190_67474">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>

        <span class="ml-3">BPAD</span>
      </div>
      <img src="@/assets/chevron.svg" :class="{ 'rotate-180': expandBPD === false }" />
    </div>
    <ul v-if="expandBPD" class="mt-4 text-start">
      <li class="rounded-lg bg-opacity-10 p-3" :class="{ 'bg-white': $route.name === 'BPD' }">
        <router-link :to="{ name: 'analysis' }">Analysis & Visualization</router-link>
      </li>
    </ul>
  </li>
  <!-- <li v-if="userStore.userHasRole('BPU') ||
    userStore.userHasRole('DM Business Performance') ||
    userStore.userHasRole('Data Analyst') ||
    userStore.userHasRole('Compliance Officer') ||
    userStore.userHasRole('HR') ||
    userStore.userHasRole('Performance Officer') ||
    userStore.userHasRole('GENERAL OPERATIONS MANAGER')
    " class="rounded-lg bg-opacity-10 p-3 ml-1" :class="{ 'bg-white': $route.name === 'view-expenditure' }">
    <router-link :to="{ name: 'view-expenditure' }" class="flex space-x-3">
      <img src="@/assets/barchart.svg" alt="" />
      <span> AIE</span>
    </router-link>
  </li> -->
  <li v-if="userStore.userHasRole('BPU') ||
    userStore.userHasRole('DM Business Performance') ||
    userStore.userHasRole('Data Analyst') ||
    userStore.userHasRole('Compliance Officer') ||
    userStore.userHasRole('HR') ||
    userStore.userHasRole('Performance Officer') ||
    userStore.userHasRole('GENERAL OPERATIONS MANAGER')
    " class="rounded-lg bg-opacity-10 p-3 ml-1" :class="{ 'bg-white': $route.name === 'operation-planning' }">
    <router-link :to="{ name: 'operation-planning' }" class="flex space-x-3">
      <img src="@/assets/barchart.svg" alt="" />
      <span> Operations Planning</span>
    </router-link>
  </li>

  <li v-if="userStore.userHasRole('BPU') ||
    userStore.userHasRole('DM Business Performance') ||
    userStore.userHasRole('Data Analyst') ||
    userStore.userHasRole('Compliance Officer') ||
    userStore.userHasRole('HR') ||
    userStore.userHasRole('Performance Officer') ||
    userStore.userHasRole('GENERAL OPERATIONS MANAGER')
    " class="rounded-lg bg-opacity-10 p-3 ml-1" :class="{ 'bg-white': $route.name === 'operation-management' }">
    <router-link :to="{ name: 'operation-management' }" class="flex space-x-3">
      <img src="@/assets/barchart.svg" alt="" />
      <span> Operations Management</span>
    </router-link>
  </li>
  <li v-if="userStore.userHasRole('BPU') ||
    userStore.userHasRole('DM Business Performance') ||
    userStore.userHasRole('Data Analyst') ||
    userStore.userHasRole('Compliance Officer') ||
    userStore.userHasRole('HR') ||
    userStore.userHasRole('Performance Officer') ||
    userStore.userHasRole('GENERAL OPERATIONS MANAGER')
    " class="cursor-pointer p-4">
    <div class="flex items-center justify-between" @click="expandObligationTab = !expandObligationTab">
      <div class="flex items-center">
        <img src="@/assets/dashbord-icon.svg" alt="dashboard" />
        <span class="ml-3">Obligations</span>
      </div>
      <img src="@/assets/chevron.svg" :class="{ 'rotate-180': expandObligationTab === false }" />
    </div>
    <ul v-if="expandObligationTab" class="mt-4 text-start">
      <li class="rounded-lg bg-opacity-10 p-3" :class="{ 'bg-white': $route.name === 'obligation-compliance' }">
        <router-link :to="{ name: 'obligation-compliance' }">Compliance</router-link>
      </li>
      <li class="rounded-lg bg-opacity-10 p-3" :class="{ 'bg-white': $route.name === 'obligation-performance' }">
        <router-link :to="{ name: 'obligation-performance' }">Performance</router-link>
      </li>
      <li class="rounded-lg bg-opacity-10 p-3" :class="{ 'bg-white': $route.name === 'compliance-report' }">
        <router-link :to="{ name: 'compliance-report' }">Compliance Reports</router-link>
      </li>
      <li class="rounded-lg bg-opacity-10 p-3" :class="{ 'bg-white': $route.name === 'performance-report' }">
        <router-link :to="{ name: 'performance-report' }">Performance Reports</router-link>
      </li>
    </ul>
  </li>


  <!-- <li v-if="userStore.userHasRole('BPU') ||
    userStore.userHasRole('DM Business Performance') ||
    userStore.userHasRole('Data Analyst') ||
    userStore.userHasRole('Compliance Officer') ||
    userStore.userHasRole('HR') ||
    userStore.userHasRole('Performance Officer') ||
    userStore.userHasRole('GENERAL OPERATIONS MANAGER')
    " class="cursor-pointer p-4">
    <div class="flex items-center justify-between" @click="
      expandPerformanceObligationTab = !expandPerformanceObligationTab
      ">
      <div class="flex items-center">
        <img src="@/assets/dashbord-icon.svg" alt="dashboard" />
        <span class="ml-3">Obligations</span>
      </div>
      <img src="@/assets/chevron.svg" :class="{ 'rotate-180': expandPerformanceObligationTab === false }" />
    </div>
    <ul v-if="expandPerformanceObligationTab" class="mt-4 text-start">
    </ul>
  </li> -->
</template>
\
