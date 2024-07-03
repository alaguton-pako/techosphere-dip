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
            <!-- <Button /> -->
          </div>
        </div>
        <div>
          <DiagnosisButton :id="route?.params?.id2" />
        </div>
        <div class="mx-10 my-3">
          <ResourceDiagnosis />
        </div>
      </main>
    </template>
  </app-layout>
</template>
<script setup>
import AppVerticalNavigation from '../../components/AppHorizontalNavigation.vue'
import DiagnosisButton from '../../components/Field_Operations/DiagnosisButton.vue'
import ChevronBack from '../../components/Field_Operations/ChevronBack.vue'
import ResourceDiagnosis from '../../components/Field_Operations/ResourceDiagnosis.vue'
import Button from '../../components/Field_Operations/Button.vue'
import { useRoute } from 'vue-router'
const route = useRoute()
</script>
