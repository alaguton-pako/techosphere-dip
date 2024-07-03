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
            <Button @submit="triggerSubmit" />
          </div>
        </div>
        <div>
          <Order :routes="routes" :id="route.params.id" />
        </div>
        <div class="p-10">
          <SurveyReport
            @formSubmitted="submitForm = false"
            :submitForm="submitForm"
          />
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
import SurveyReport from '../../components/Field_Operations/SurveyReport.vue'
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'
const submitForm = ref(false)

const routes = ref([]);
onMounted(() => {
  routes.value.push({
    name: "SurveyReport",
    label: "Survey Report",
    params: { id: route.params.id },
  });
  // routes.value.push({
  //   name: "InstallationReport",
  //   label: "Installation Report",
  //   params: { id: route.params.id },
  // });
});
const triggerSubmit = () => {
  submitForm.value = true;
};
const route = useRoute();
</script>
