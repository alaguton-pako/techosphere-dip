<template>
  <section class="">
    <div
      v-if="props.gauge"
      class="bg-white border border-black border-solid flex justify-center"
      :id="props.id"
    ></div>
    <div
      v-else
      class="py-10 bg-white border border-black border-solid flex justify-center h-[260px]"
    >
    0%
  </div>
    <h1 class="text-2xl text-center">
      {{ props.department }}
    </h1>
  </section>
</template>
<script setup>
import * as GaugeChart from "https://unpkg.com/gauge-chart@next/dist/bundle.mjs";
import { onMounted, ref, defineProps } from "vue";
const props = defineProps({
  size: {
    type: Number,
    default: 300,
  },
  id: {
    type: String,
    default: "gaugeArea",
  },
  department: {
    type: String,
    default: "",
  },
  gauge: {
    type: Number,
    default: 0,
  },
});

onMounted(() => {
  let element = document.querySelector("#" + props.id);

  // Properties of the gauge
  let gaugeOptions = {
    hasNeedle: true,
    needleColor: "gray",
    needleUpdateSpeed: 1000,
    arcColors: ["red"],
    arcDelimiters: [props.gauge],
    rangeLabel: ["0", "100"],
    centralLabel: `${props.gauge}%`,
  };

  // Drawing and updating the chart

  if (element)
    GaugeChart.gaugeChart(element, props.size, gaugeOptions)?.updateNeedle(
      props.gauge
    );
});
</script>
