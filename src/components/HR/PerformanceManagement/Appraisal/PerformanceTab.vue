<template>
  <section
    class="mx-3 flex h-12 w-full flex-row gap-5 bg-black text-center text-gray-300"
  >
    <div class="grid grid-cols-5 gap-4 px-4">
      <button
        @click="$emit('switchTab', 1)"
        :class="{ 'underline': props.activeTab === 1 }"
        class="font-normal"
      >
        Performance Rating
      </button>
      <button
        @click="$emit('switchTab', 2)"
        :class="{ 'underline': props.activeTab === 2 }"
        class="font-normal"
      >
        Core Values
      </button>
      <button
        @click="$emit('switchTab', 3)"
        :class="{ 'underline': props.activeTab === 3 }"
        class="font-normal"
      >
        Employees Appraisals
      </button>
      <button
        @click="$emit('switchTab', 4)"
        :class="{ 'underline': props.activeTab === 4 }"
        class="font-normal"
      >
        Comments
      </button>
    </div>
  </section>
</template>
<script setup>
const props = defineProps(['activeTab'])
</script>
