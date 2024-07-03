<script setup>
import { ref } from 'vue'
// import NoData from '../components/NoDataYet.vue'
import CreatedStrategiesList from '../components/collaboration/CreatedStrategiesList.vue'
import CreateStrategyModal from '../components/collaboration/CreateStrategyModal.vue'
import CreatedStrategy from '../components/collaboration/CreatedStrategy.vue'
const currentStrategy = ref(null);
const createStrategy = ref(false);

const getStrategy = (selectedStrategy) => {
  currentStrategy.value = selectedStrategy;
  console.log('Received strategy:', selectedStrategy);
};
</script>

<template lang="">
  <app-layout>
    <template v-slot:main-content>
      <main class="flex min-h-screen w-full bg-[#F5F5F5] pl-[260px]">
        <div class="w-[40%]">
          <CreatedStrategiesList @currentStrategy="getStrategy" />
        </div>
        <div class="w-full">
          <div class="flex w-full items-center justify-center">
            <div class="flex flex-col gap-3">
              <div class="flex w-full justify-start"></div>
              <div v-if="createStrategy">
                <CreateStrategyModal @close="createStrategy = false" />
              </div>
            </div>
          </div>
          <div class="mx-auto w-[98%]">
            <CreatedStrategy  :strategy=currentStrategy />
          </div>
        </div>
      </main>
    </template>
  </app-layout>
</template>
