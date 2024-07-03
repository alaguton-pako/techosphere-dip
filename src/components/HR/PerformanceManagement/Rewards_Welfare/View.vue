<template>
  <section
    class="mx-3 flex h-12 w-full flex-row gap-5 bg-black text-center text-gray-300"
  >
    <div class="flex flex-row gap-4 space-x-7">
      <button
        @click="$emit('switchTab', 1)"
        :class="{ 'text-primary': props.activeTAb === 1 }"
        class="pl-5 font-normal"
      >
        Account Details
      </button>
      <button
        @click="$emit('switchTab', 2)"
        :class="{ 'text-primary': props.activeTAb === 2 }"
        class="font-normal"
      >
        Pay Slips
      </button>
    </div>
  </section>
</template>
<script setup>
const props = defineProps(['activeTAb'])
</script>
