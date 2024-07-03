<template>
  <section
    class="mx-3 flex h-12 w-full flex-row gap-6 bg-black text-center text-gray-300"
  >
    <div class="grid grid-cols-6 gap-7">
      <button
        @click="$emit('switchTab', 1)"
        :class="{ 'text-primary': props.activeTAb === 1 }"
        class="justify-start font-normal"
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
        ID and Reference
      </button>
    </div>
  </section>
</template>
<script setup>
const props = defineProps(['activeTAb'])
</script>
