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
          <FaultRest />
        </div>
        <div>
          <FaultResolution
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
import FaultRest from '../../components/Field_Operations/FaultRest.vue'
import FaultResolution from '../../components/Field_Operations/FaultResolution.vue'
import { ref } from 'vue'
const submitForm = ref(false)
const triggerSubmit = () => {
  submitForm.value = true
}
</script>
