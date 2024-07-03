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
        <div >
          <ResourceRoute />
        </div>
      </main>
    </template>
  </app-layout>
</template>
<script setup>
import AppVerticalNavigation from '../../components/AppHorizontalNavigation.vue'
import Order from '../../components/Field_Operations/Order.vue'
import Button from '../../components/Field_Operations/Button.vue'
import ChevronBack from '../../components/Field_Operations/ChevronBack.vue'
import ResourceRoute from '../../components/Field_Operations/ResourceRoute.vue'
import { useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'
const route = useRoute()
const routes = ref([])

onMounted(() => {
  routes.value.push({
    name: 'resource-route',
    label: 'Route Diagram',
    params: { id: route.params.id, activity: route.params.activity },
  })
  routes.value.push({
    name: 'work-order',
    label: 'Work Order',
    params: { id: route.params.id, activity: route.params.activity },
  })
})
</script>
