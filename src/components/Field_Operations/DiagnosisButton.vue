<template>
  <section class="m-10 grid grid-cols-3 gap-4">
    <div
      class="flex h-[64px] w-[354px] cursor-pointer place-items-center justify-center rounded-tl-2xl rounded-tr-2xl border border-solid border-[#fd4f00] bg-[#f5d3c3] text-center font-semibold text-black shadow-inner"
    >
      Diagnosis
    </div>

    <router-link
      :to="{ name: 'work-order', params: { id: route?.params.id2, activity: route.params.activity} }"
    >
      <div
        class="flex h-[64px] w-[354px] cursor-pointer place-items-center justify-center rounded-tl-2xl rounded-tr-2xl bg-[#f5d3c3] text-center font-semibold text-black shadow-inner"
      >
        Work Order
      </div>
    </router-link>
  </section>
</template>
<script setup>
import { useRoute } from 'vue-router'

const props = defineProps(['id'])
const route = useRoute()
</script>
