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
            <Button @submit="triggerSubmit"/>
          </div>
        </div>
        <div>
          <Order :routes="routes" :id="route.params.id" />
        </div>
        <div class="mx-10 my-3">
          <div v-if="activeTab == 1">
            <InstallationReport 
          @formSubmitted="submitForm = false"
            :submitForm="submitForm"/>
          </div>
        </div>
        <div v-if="activeTab == 2" class="my-10 p-10">
          <InstallationReport 
          @formSubmitted="submitForm = false"
            :submitForm="submitForm"/>
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
import InstallationReport from '../../components/Field_Operations/InstallationReport.vue'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const routes = ref([])
const submitForm = ref(false)
onMounted(() => {
  // routes.value.push({
  //   name: "SurveyReport",
  //   label: "Survey Report",
  //   params: { id: route.params.id },
  // });
  routes.value.push({
    name: 'installation-report',
    label: 'Installation Report',
    params: { id: route.params.id },
  })
})
const activeTab = ref(1)
const emit = defineEmits(['setActiveTab'])
const triggerSubmit = () => {
  submitForm.value = true
}
</script>
