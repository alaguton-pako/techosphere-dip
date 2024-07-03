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
          <ProvideReport
            @formSubmitted="submitForm = false"
            :submitForm="submitForm"
            class="mx-10"
          />
        </div>
      </main>
    </template>
  </app-layout>
</template>
<script setup>
import AppHorizontalNavigation from '@/components/AppHorizontalNavigation.vue'
import Button from '../../components/Field_Operations/Button.vue'
import ChevronBack from '../../components/Field_Operations/ChevronBack.vue'
import ProvideReport from '../../components/Field_Operations/ProvideReport.vue'
import { ref } from 'vue'
const submitForm = ref(false)
const triggerSubmit = () => {
  submitForm.value = true
}
</script>
