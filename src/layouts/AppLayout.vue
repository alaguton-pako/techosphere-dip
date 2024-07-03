<script setup>
import VerticalNavigation from '../components/AppVerticalNavigation.vue'
</script>

<template>
  <main class="flex items-start pb-24">
    <VerticalNavigation />
    <main class="w-full">
      <slot name="main-content" />
    </main>
  </main>
</template>
   