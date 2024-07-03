<template>
  <section
    class="mx-3 flex h-[41px] w-full flex-row gap-5 bg-black text-center text-gray-300"
  >
    <div class="grid grid-cols-4 gap-6">
      <div class="mx-2 flex flex-row justify-start">
        <button
          @click="$emit('switchTab', 1)"
          :class="{ 'text-primary': props.activeTAb === 1 }"
          class="mx-2 my-2 font-semibold text-white underline"
        >
          Send Invite to Attendees
        </button>
      </div>
      <div class="mx-2">
        <button
          @click="$emit('switchTab', 2)"
          :class="{ 'text-primary': props.activeTAb === 2 }"
          class="mx-2 my-2 font-semibold text-white"
        >
          Report
        </button>
      </div>
      <div class="mx-2">
        <button
          @click="$emit('switchTab', 3)"
          :class="{ 'text-primary': props.activeTAb === 3 }"
          class="mx-2 my-2 font-semibold text-white"
        >
          Approved Contract
        </button>
      </div>
    </div>
  </section>
</template>
<script setup>
const props = defineProps(['activeTAb'])
</script>
