<template>
  <section class="m-10 grid grid-cols-3 gap-4">
    <router-link v-for="(route, index) in props.routes" :key="index" :to="{ name: route.name, params: route.params}">
      <div
        :class="{
          'border border-b-4 border-red-700': $route.name == route.name,
        }"
        class="flex h-[64px] w-[354px] cursor-pointer place-items-center justify-center rounded-tl-2xl rounded-tr-2xl border border-solid border-[#D50036] bg-[#e4b8c3] text-center font-semibold text-black shadow-inner"
      >
        {{ route.label }}
      </div>
    </router-link>

  
  </section>
</template>

<script setup>
const props = defineProps(["id", "routes"]);
import { useUserStore } from "../../stores/userStore.js";
const store = useUserStore();
</script>
