<template>
  <app-layout>
    <template v-slot:main-content>
      <main class="min-h-screen w-full bg-[#F5F5F5] pl-[260px]">
        <AppVerticalNavigation />
        <div class="my-3 grid grid-cols-2">
          <div>
            <ChevronBack />
          </div>
          <!-- <div>
            <Button />
          </div> -->
        </div>
        <div>
          <Order :routes="routes" class="mx-24" :id="route.params.id" />
        </div>
        <div class="mx-24 my-5">
          <SplitterInformation />
        </div>
      </main>
    </template>
  </app-layout>
</template>
<script setup>
import AppVerticalNavigation from '@/components/AppHorizontalNavigation.vue'
import Order from '@/components/Field_Operations/Order.vue'
import ChevronBack from '@/components/Field_Operations/ChevronBack.vue'
import SplitterInformation from '@/components/Field_Operations/SplitterInformation.vue'
import { useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'
const route = useRoute()
const routes = ref([])

onMounted(() => {
  // routes.value.push({
  //   name: 'resource-route',
  //   label: 'Route Diagram',
  //   params: { id: route.params.id },
  // })
  // routes.value.push({
  //   name: 'work-order',
  //   label: 'Work Order',
  //   params: { id: route.params.id },
  // })
})
</script>
