<template>
  <section class="mb-8 mt-16 p-2 flex flex-row gap-14">
    <button
      @click="$emit('switchTab', 1)"
      :class="{ 'bg-[#D50036] text-white': props.activeTab === 1 }"
      class="shrink-0 rounded-md border border-secondary pb-3.5 pl-6 pr-6 pt-3.5 text-black"
    >
      Fault
    </button>
    <button
      @click="$emit('switchTab', 2)"
      :class="{ 'bg-[#D50036] text-white': props.activeTab === 2 }"
      class="shrink-0 rounded-md border border-secondary pb-2.5 pl-6 pr-6 pt-2.5 text-black"
    >
      Activation
    </button>
  </section>
</template>
<script setup>
const props = defineProps(["activeTab"]);
</script>
