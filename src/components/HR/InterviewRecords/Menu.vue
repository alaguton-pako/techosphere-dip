<template>
  <section
    class="mx-3 flex h-12 w-full flex-row gap-5 bg-black text-center text-gray-300"
  >
    <div class="grid grid-cols-7 gap-4">
      <button
        @click="$emit('switchTab', 1)"
        :class="{ 'text-primary': props.activeTAb === 1 }"
        class="font-normal"
      >
        Personal Data
      </button>
      <button
        @click="$emit('switchTab', 2)"
        :class="{ 'text-primary': props.activeTAb === 2 }"
        class="font-normal"
      >
        Contact Information
      </button>
      <button
        @click="$emit('switchTab', 3)"
        :class="{ 'text-primary': props.activeTAb === 3 }"
        class="font-normal"
      >
        Education
      </button>
      <button
        @click="$emit('switchTab', 4)"
        :class="{ 'text-primary': props.activeTAb === 4 }"
        class="font-normal"
      >
        Work Information
      </button>
      <button
        @click="$emit('switchTab', 5)"
        :class="{ 'text-primary': props.activeTAb === 5 }"
        class="font-normal"
      >
        CV and Documentation
      </button>
      <button
        @click="$emit('switchTab', 6)"
        :class="{ 'text-primary': props.activeTAb === 6 }"
        class="font-normal"
      >
        ID & Reference
      </button>
      <button
        @click="$emit('switchTab', 7)"
        :class="{ 'text-primary': props.activeTAb === 7 }"
        class="font-normal"
      >
        Contract
      </button>
    </div>
  </section>
</template>
<script setup>
const props = defineProps(['activeTAb'])
</script>
