<template>
  <div class="mx-5 grid h-12 grid-cols-6 text-center">
    <button
      @click="$emit('switchTab', 1)"
      :class="{ 'border-primary': props.activeTAb === 1 }"
      class="rounded-lg border border-red-400 font-normal text-black"
    >
      Personal Data
    </button>
    <button
      @click="$emit('switchTab', 2)"
      :class="{ 'border-primary': props.activeTAb === 2 }"
      class="rounded-lg border border-gray-400 font-normal text-black"
    >
      Contact Information
    </button>
    <button
      @click="$emit('switchTab', 3)"
      :class="{ 'border-primary': props.activeTAb === 3 }"
      class="rounded-lg border border-gray-400 font-normal text-black"
    >
      Education
    </button>
    <button
      @click="$emit('switchTab', 4)"
      :class="{ 'border-primary': props.activeTAb === 4 }"
      class="rounded-lg border border-gray-400 font-normal text-black"
    >
      Work Information
    </button>
    <button
      @click="$emit('switchTab', 5)"
      :class="{ 'border-primary': props.activeTAb === 5 }"
      class="rounded-lg border border-gray-400 font-normal text-black"
    >
      CV and Documentation
    </button>
    <button
      @click="$emit('switchTab', 6)"
      :class="{ 'border-primary': props.activeTAb === 6 }"
      class="rounded-lg border border-gray-400 font-normal text-black"
    >
      ID & Reference
    </button>
  </div>
</template>
<script setup>
const props = defineProps(['activeTAb'])
</script>
