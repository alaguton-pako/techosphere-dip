<template>
  <div class="flex h-[41px] w-[770px] flex-row bg-white">
    <button
      @click="$emit('switchTab', 1)"
      :class="{ 'text-primary': props.activeTAb === 1 }"
      class="mx-6 my-2 flex font-semibold text-black"
    >
      Appraisals
    </button>
    <button
      @click="$emit('switchTab', 2)"
      :class="{ 'text-primary': props.activeTAb === 2 }"
      class="mx-8 my-2 flex font-semibold text-black"
    >
      Rewards
    </button>
  </div>
</template>
<script setup>
const props = defineProps(['activeTAb'])
</script>
