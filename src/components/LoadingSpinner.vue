<script>
import { Vue3Lottie } from 'vue3-lottie'
// import 'vue3-lottie/dist/style.css'

import AstronautJSON from '../assets/lottieFiles/loading-spinner.json'

export default {
  components: {
    Vue3Lottie,
  },
  data() {
    return {
      AstronautJSON,
    }
  },
}
</script>

<template>
  <Vue3Lottie :animationData="AstronautJSON" :height="120" :width="120" />
</template>
