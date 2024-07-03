<template>
    <div class="w-full">
      <canvas ref="charts"> </canvas>
    </div>
  </template>
  
  <script setup>
  import Chart from 'chart.js/auto'
  import { ref, onMounted, computed, watch } from 'vue'
  const props = defineProps(['data', 'indexAxis', 'type', "min", "max"])
  const charts = ref(null)
  let chartInstance = null
  onMounted(() => {
    // console.log('from the chart component')
  })
  watch(() => {
    // console.log(charts.value, props.data)
    if (charts.value != null && props.data != null) {
      // console.log(props.data)
      if (chartInstance) {
        chartInstance.destroy()
      }
      graph()
    }
  })
  function graph() {
    const config = {
      type: props.type,
      data: props.data,
      options: {
        indexAxis: props.indexAxis,
        scales:{
          y:{
            min:props.min,
            max:props.max
          }
        }
      },
    }
    var ctx = charts.value
    chartInstance = new Chart(ctx, config)
  }
  </script>
  