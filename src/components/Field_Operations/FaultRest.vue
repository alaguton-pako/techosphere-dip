<template>
  <section class="pl-3 pr-3">
    <div class="flex h-auto w-full flex-row gap-64 space-x-96 bg-black">
      <div class="mx-1 justify-start">
        <div class="font-['Source Sans Pro'] text-lg font-normal text-white">
          Fault Resolution Report
        </div>
      </div>
      <div class="flex flex-row-reverse">
        <div class="font-['Source Sans Pro'] text-lg font-normal text-white">
          {{ currentDateTime }}
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const currentDateTime = ref('')

onMounted(() => {
  updateDateTime()
  setInterval(updateDateTime, 1000) // Update every second
})

const updateDateTime = () => {
  const now = new Date()
  const options = {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  }
  currentDateTime.value = now.toLocaleDateString('en-US', options)
}
</script>
