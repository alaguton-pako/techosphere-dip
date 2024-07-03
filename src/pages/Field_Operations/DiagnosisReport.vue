<template>
  <app-layout>
    <template v-slot:main-content>
      <main class="min-h-screen w-full bg-[#F5F5F5] pl-[260px]">
        <AppHorizontalNavigation />
        <div class="my-3 grid grid-cols-2">
          <ChevronBack />
          <div>
            <Button @submit="triggerSubmit" />
          </div>
        </div>
        <div>
          <DiagnosisTab class="pr-10" :headerText="header" />
        </div>
        <div>
          <DiagnosisReport
            @formSubmitted="submitForm = false"
            :submitForm="submitForm"
          />
        </div>
      </main>
    </template>
  </app-layout>
</template>
<script setup>
import AppHorizontalNavigation from '../../components/AppHorizontalNavigation.vue'
import Button from '../../components/Field_Operations/Button.vue'
import ChevronBack from '../../components/Field_Operations/ChevronBack.vue'
import DiagnosisTab from '../../components/Field_Operations/DiagnosisTab.vue'
import DiagnosisReport from '../../components/Field_Operations/DiagnosisReport.vue'
import { ref } from 'vue'
const submitForm = ref(false)
const triggerSubmit = () => {
  submitForm.value = true
}
const header = 'Provide Diagnosis Report'
</script>
