<script setup>
const timeSlots = [
  '8am',
  '9am',
  '10am',
  '11am',
  '12pm',
  '1pm',
  '2pm',
  '3pm',
  '4pm',
  '5pm',
]
</script>

<template>
  <ul
    class="absolute top-full hidden h-32 w-full overflow-y-scroll overscroll-y-contain border border-slate-200 bg-slate-100"
  >
    <li
      v-for="slot in timeSlots"
      class="cursor-pointer px-2 py-1"
      @click.stop="$emit('pickTime', { time: slot, event: $event })"
    >
      {{ slot }}
    </li>
  </ul>
</template>
