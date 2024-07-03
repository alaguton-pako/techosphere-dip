<template>
  <section class="pl-3 pr-3">
    <div class="flex h-auto w-full flex-row gap-64 space-x-96 bg-black">
        <div class="mx-1 justify-start">
          <div class="font-['Source Sans Pro'] text-lg font-normal text-white">
           {{ headerText }}
          </div>
        </div>
        <div class="flex flex-row-reverse">
          <CurrentTime/>
        </div>
      </div>

  </section>
</template>


<script setup>
import { onMounted, ref } from 'vue';
import CurrentTime from '../CurrentTime.vue'

const props = defineProps(['headerText']);

</script>
