<template>
  <li class="cursor-pointer p-4">
    <div
      class="flex items-center justify-between"
      @click="expandTab = !expandTab"
    >
      <div class="flex items-center">
        <img src="@/assets/dashboard.svg" alt="dashboard" />
        <span class="ml-3">Dashboard</span>
      </div>
      <img
        src="@/assets/chevron.svg"
        :class="{ 'rotate-180': expandTab === false }"
      />
    </div>
    <ul v-if="expandTab" class="mt-4 text-start">
      <li
        class="rounded-lg bg-opacity-10 p-3"
        :class="{ 'bg-white': $route.name === 'home' }"
      >
        <div
          class="flex items-center justify-between"
          @click="expandBPAD = !expandBPAD"
        >
          <div class="flex items-center">
            <img src="@/assets/dashboard.svg" alt="dashboard" />
            <span class="ml-3">BPAD</span>
          </div>
          <img
            src="@/assets/chevron.svg"
            :class="{ 'rotate-180': expandBPAD === false }"
          />
        </div>
      </li>
      <ul v-if="expandBPAD" class="mt-4 text-start">
          <li
            class="rounded-lg bg-opacity-10 p-3"
            :class="{ 'bg-white': $route.name === 'collaboration' }"
          >
            <router-link :to="{ name: 'collaboration' }">Collaboration</router-link>
          </li>
      </ul>
    </ul>
  </li>
</template>

<script setup>
import { ref } from 'vue';
const expandTab = ref(false);
const expandBPAD = ref(false);
</script>
