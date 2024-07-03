<template>
  <div class="h-[51px] bg-neutral-800 shadow justify-start items-center gap-[43px] flex flex-row">
    <div class="text-white text-lg font-normal font-['Source Sans Pro mx-7']">{{ props.data }}</div>
    <div class="text-white text-lg font-normal font-['Source Sans Pro mx-8']">{{ props.count }} Assignments</div>
  </div>
</template>

<script setup>
  const props=defineProps(['data', 'count'])
</script>
