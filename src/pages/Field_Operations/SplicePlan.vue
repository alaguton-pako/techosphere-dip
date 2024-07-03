<template>
  <app-layout>
    <template v-slot:main-content>
      <main class="min-h-screen w-full bg-[#F5F5F5] pl-[260px]">
        <AppVerticalNavigation />
        <div class="my-3 grid grid-cols-2">
          <div>
            <ChevronBack />
          </div>
          <div>
            <Button />
          </div>
        </div>
        <div>
          <Order :routes="routes" :id="route.params.id" />
        </div>
        <div class="p-5">
          <SplicePlan />
        </div>
      </main>
    </template>
  </app-layout>
</template>
<script setup>
import AppVerticalNavigation from '../../components/AppHorizontalNavigation.vue'
import Order from '../../components/Field_Operations/Order.vue'
import ChevronBack from '../../components/Field_Operations/ChevronBack.vue'
import Button from '../../components/Field_Operations/Button.vue'
import SplicePlan from '../../components/Field_Operations/SplicePlan.vue'

import { onMounted, ref } from 'vue'
import workplaceRequestsv2 from '../../services/workplaceRequestsv2.js'
import { useRoute } from 'vue-router'
const route = useRoute()

const routes = ref([])
onMounted(() => {
  routes.value.push({
    name: 'splice-plan',
    label: 'Splice Plan',
    params: { id: route.params.id },
  })
  routes.value.push({
    name: 'work-order',
    label: 'Work Order',
    params: { id: route.params.id },
  })
  getReport()
})
const getReport = async () => {
  try {
    const { status, data } = await workplaceRequestsv2(
      'get',
      `operations/sd/spliceplans/${route.params.id}`
    )
    if (status == 200) {
      /* empty */
    }
  } catch (e) {
    /* empty */
  }
}
</script>
