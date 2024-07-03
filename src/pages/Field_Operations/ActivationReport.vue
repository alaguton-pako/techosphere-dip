<template>
  <app-layout>
    <template v-slot:main-content>
      <main class="min-h-screen w-full bg-[#F5F5F5] pl-[260px]">
        <AppHorizontalNavigation />
        <div class="my-3 grid grid-cols-2">
          <div>
            <ChevronBack />
          </div>
          <div>
            <Button @submit="triggerSubmit" />
          </div>
        </div>
        <div>
          <DiagnosisTab class="pr-10" :headerText="header" />
        </div>
        <div>
          <ActivationReport  class="mx-10" 
          @formSubmitted="submitForm = false"
          :submitForm="submitForm"/>
        </div>
      </main>
    </template>
  </app-layout>
</template>
<script setup>
import AppHorizontalNavigation from '../../components/AppHorizontalNavigation.vue'
import Button from '../../components/Field_Operations/Button.vue'
import ChevronBack from '../../components/Field_Operations/ChevronBack.vue'
import ActivationReport from '../../components/Field_Operations/ActivationReport.vue'
import DiagnosisTab from '../../components/Field_Operations/DiagnosisTab.vue'
import { ref } from 'vue'

const header = 'Provide Activation Report';
const submitForm = ref(false);
const triggerSubmit = () => {
  submitForm.value =  true;
}

</script>
