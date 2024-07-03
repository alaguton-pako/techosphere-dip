<template>
    <div class="font-['Source Sans Pro'] text-lg font-normal text-white">
      {{ currentTime }}
    </div>
  </template>
  
  <script setup>
  import { onMounted, ref } from 'vue';
  
  const currentTime = ref('');
  
  onMounted(() => {
    updateDateTime();
    setInterval(updateDateTime, 1000); // Update every second
  });
  
  const updateDateTime = () => {
    const now = new Date();
    const options = {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    };
    currentTime.value = now.toLocaleDateString('en-US', options);
}

</script>  