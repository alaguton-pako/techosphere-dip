<template>
  <div class="mx-3 grid h-12 grid-cols-6 gap-2 text-center">
    <button
      @click="$emit('switchTab', 1)"
      :class="{ 'border-primary': props.activeTab === 1,'text-primary': props.activeTab === 1  }"
      class="rounded-lg border border-gray-400 font-normal text-black"
    >
      Personal Data
    </button>
    <button
      @click="$emit('switchTab', 2)"
      :class="{ 'border-primary': props.activeTab === 2,'text-primary': props.activeTab === 2 }"
      class="rounded-lg border border-gray-400 font-normal text-black"
    >
      Contact Information
    </button>
    <button
      @click="$emit('switchTab', 3)"
      :class="{ 'border-primary': props.activeTab === 3,'text-primary': props.activeTab === 3  }"
      class="rounded-lg border border-gray-400 font-normal text-black"
    >
      Work Information
    </button>
    <button
      @click="$emit('switchTab', 4)"
      :class="{ 'border-primary': props.activeTab === 4 ,'text-primary': props.activeTab === 4 }"
      class="rounded-lg border border-gray-400 font-normal text-black"
    >
      Contract Information
    </button>
    <button
      @click="$emit('switchTab', 5)"
      :class="{ 'border-primary': props.activeTab === 5 ,'text-primary': props.activeTab === 5 }"
      class="rounded-lg border border-gray-400 font-normal text-black"
    >
      I.D & Reference
    </button>
  </div>
</template>
<script setup>
const props = defineProps(['activeTab'])
</script>
