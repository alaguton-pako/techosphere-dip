<template>
  <div class="progress-circle" :style="circleStyle">
    <span>{{ percentage }}%</span>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  percentage: {
    type: Number,
    required: true,
  },
});

const circleStyle = computed(() => ({
  background: `conic-gradient(#2affff ${props.percentage * 3.6}deg, #e5e7eb 0deg)`,
}));
</script>

<style scoped>
.progress-circle {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  background-color: #e5e7eb;
}
</style>
