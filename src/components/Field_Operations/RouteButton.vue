<template>
  <section class="m-10 grid grid-cols-3 gap-4">
    <router-link v-for="(route,index) in props.routes" :key="index" :to="{ name: route.name, params: route.params}">
      <div
        class="flex h-[64px] w-[354px] cursor-pointer place-items-center justify-center rounded-tl-2xl rounded-tr-2xl border border-solid border-[#D50036] bg-[#eb9cb2] text-center font-semibold text-black shadow-inner"
      >
      {{ route.label }}
      </div>
    </router-link>
  </section>
</template>

<script setup>
const props = defineProps(['id', 'routes'])
</script>
