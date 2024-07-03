
<script setup>
const props = defineProps({
  figure: 0,
  title: "",
  body: "",
  bgColor: "bg-white",
  textColor: "text-black",
  border: '',
  borderColor: ''


});
</script>
<template>
  <div class="card bg-opacity-80  bg-no-repeat bg-right-bottom text-black  px-6 pt-8 pb-3 rounded-lg"
    :class="[props.bgColor, props.textColor, props.heigth, props.width, props.border, props.borderColor]">
    <div>
      <div class="font-bold text-4xl mb-3"> {{ props.figure }}</div>
      <div class="font-semibold mb-1">{{ props.title }}</div>
      <div class="text-xs mb-2">{{ props.body }}</div>
    </div>
  </div>
</template>

<style scoped>
.card {
  background-image: url("../assets/waveform.svg");
}
</style>