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
          <Order :routes="routes" :id="route.params.id" />
        </div>
        <div class="mx-10 my-3">
          <ProvisioningWorkOrder
            v-if="route?.params?.activity?.includes('Fault')"
            :workOrder="work_order"
          />
          <WorkOrder v-else :workOrder="work_order" />
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
import { onMounted, ref } from 'vue'
import workplaceRequestsv2 from '../../services/workplaceRequestsv2.js'
import { useRoute, useRouter } from 'vue-router'
import { useUserStore } from '../../stores/userStore'
import ProvisioningWorkOrder from '../../components/Field_Operations/ProvisioningWorkOrder.vue'
import WorkOrder from '../../components/Field_Operations/WorkOrder.vue'
const type = ref('')
const router = useRouter()
const store = useUserStore()
const work_order = ref({
  id: 1,
  ID: '',
  customer_name: '',
  date: '',
  address: '',
  network_segment: '',
  affected_nodes: '',
  class_of_fault: '',
  type_of_fault: '',
  dni_image: '',
  comment: '',
  splitter: '',
  splitter_port: '',
  olt: '',
  olt_port: '',
  Latitude: '',
  Longitude: '',
  actions_required: null,
  distance_affected: '',
  no_of_core_to_splice: '',
  etr: '',
  prepared_by: '',
  assigned_to: '',
  approved_by: '',
})

const route = useRoute()
const routes = ref([])
onMounted(() => {
  // alert(store.$state.user.installer_role)
  if (store.$state.user.installer_role == 'provisioning') {
    if (route.params.activity.includes('Fault')) {
      type.value = route.params.activity.split(' ')[0]
      let id = router.options.history.state.back.split('\/')[5]
      routes.value.push({
        name: 'resource-diagnosis',
        label: 'Diagnosis',
        params: {
          id: id,
          id2: route.params.id,
          activity: route.params.activity,
        },
      })
    }
    if (route.params.activity.includes('Activation')) {
      routes.value.push({
        name: 'splice-plan',
        label: 'Splice Plan',
        params: { id: route.params.id, activity: route.params.activity },
      })
    }
  }
  if (store.$state.user.installer_role == 'installation') {
    routes.value.push({
      name: 'resource-route',
      label: 'Route Diagram',
      params: { id: route.params.id, activity: route.params.activity },
    })
  }
  routes.value.push({
    name: 'work-order',
    label: 'Work Order',
    params: { id: route.params.id, activity: route.params.activity },
  })
  getReport()
})
const getReport = async () => {
  try {
    if (store.$state.user.installer_role == 'installation') {
      const { status, data } = await workplaceRequestsv2(
        'get',
        `operations/sd/tss/work-order/${route.params.id}`
      )

      if (status == 200) {
        work_order.value = data.data.data
        /* empty */
      }
      return
    }
    if (store.$state.user.installer_role == 'provisioning') {
      if (route.params.activity.includes('Fault')) {
        const { status, data } = await workplaceRequestsv2(
          'get',
          `network/planing/work-order/${route.params.id}`
        )
        if (status == 200) {
          work_order.value = data.data.data
        }
      }
      if (route.params.activity.includes('Activation')) {
        const { status, data } = await workplaceRequestsv2(
          'get',
          `operations/sd/activation/${route.params.id}`
        )
        if (status == 200) {
          const response = data?.data?.data
          work_order.value = response
        }
      }
    }
  } catch (e) {
    console.log(e)
    /* empty */
  }
}
</script>
