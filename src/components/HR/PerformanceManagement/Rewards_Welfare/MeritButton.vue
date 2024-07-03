<template>
  <div
    class="flex flex-row place-content-center place-items-center items-center justify-center gap-12 p-10 text-center"
  >
    <button
      @click="$emit('switchTab', 1)"
      :class="{ 'border-primary text-primary': props.activeTab === 1 }"
      class="rounded-sm border border-gray-400 p-2 font-normal text-black"
    >
      Merit/Demerit
    </button>
    <button
      @click="$emit('switchTab', 2)"
      :class="{ 'border-primary text-primary': props.activeTab === 2 }"
      class="rounded-sm border border-gray-400 p-2 font-normal text-black"
    >
      Query/Disciplinary
    </button>
  </div>
</template>
<script setup>
const props = defineProps(['activeTab'])
</script>
