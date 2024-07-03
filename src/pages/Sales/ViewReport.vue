<template>

</template>
<script setup>
import { onMounted, ref } from 'vue';

const savedFormData = ref(null);

onMounted(() => {
  const formDataString = localStorage.getItem('visitationFormData');
  if (formDataString) {
    savedFormData.value = JSON.parse(formDataString);
  }
});
</script>