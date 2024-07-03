<script>
import { Vue3Lottie } from 'vue3-lottie'
import NoDataYet from '../assets/lottieFiles/noDataYet.json'

export default {
  components: {
    Vue3Lottie,
  },
  data() {
    return {
      NoDataYet,
    }
  },
}
</script>

<template>
  <Vue3Lottie :animationData="NoDataYet" :height="500" :width="500" />
</template>
