<template>
  <app-layout>
    <template v-slot:main-content>
      <section class="pl-[260px]">
        <AppHorizontalNavigation />
        <section class="p-10">
          <View @click="$router.go(-1)" />

          <div class="mt-5 w-full border border-gray-300">
            <div class="h-[51px] w-full bg-black text-center">
              <div
                class="flex flex-row p-3 text-center font-semibold text-white underline"
              >
                MERIT POINTS ALLOCATED
              </div>
            </div>
            <div class="my-4 w-full border-gray-400 p-5">
              <div class="my-2 grid grid-cols-1 gap-2">
                <div class="mb-4">
                  <label
                    for="name"
                    class="text-md text-black-800 mb-2 block font-semibold"
                  >
                    Type of Bonus</label
                  >
                  <label
                    for="name"
                    class="text-md text-black-800 mb-2 block font-light"
                  >
                    {{ meritPoints?.type }}
                  </label>
                </div>

                <div class="mb-4">
                  <div>
                    <label for="name" class="font-semibold"
                      >Number of Points Gained</label
                    >
                  </div>
                  <label for="name" class="my-2 font-light">4</label>
                </div>
                <div class="mb-4">
                  <label
                    for="name"
                    class="text-md text-black-800 mb-2 block font-semibold"
                  >
                    {{ meritPoints?.number_of_points }}</label
                  >
                  <div class="mb-4">
                    <label
                      for="name"
                      class="text-md text-black-800 mb-2 block font-semibold"
                    >
                      Description of Infraction</label
                    >
                    <div
                      class="my-2 w-full rounded-md border-0 text-sm font-light text-gray-800 focus:outline-none focus:ring-0 dark:bg-white dark:text-black dark:placeholder-gray-400"
                    >
                      {{ meritPoints?.description }}
                    </div>
                  </div>
                </div>
                <div class="mb-4">
                  <div>
                    <label for="name" class="font-semibold"
                      >Merit Given To</label
                    >
                  </div>
                  <label for="name" class="my-2 font-light">{{
                    meritPoints?.query_sent_to
                  }}</label>
                </div>
              </div>
            </div>
            <div class="h-[51px] w-full bg-black text-center">
              <div
                class="flex flex-row p-3 text-center font-semibold text-white underline"
              >
                FEEDBACK
              </div>
            </div>
            <div class="my-4 w-full border-gray-400 p-5">
              <div class="my-2 grid grid-cols-1 gap-2">
                <div class="mb-4">
                  <div>
                    <label for="name" class="font-semibold"
                      >Staff's Feedback</label
                    >
                  </div>
                  <textarea
                    v-model="response"
                    id="comment"
                    rows="4"
                    class="my-2 w-full rounded-md border border-gray-400 p-5 text-sm text-gray-900 focus:outline-none focus:ring-0 dark:bg-white dark:text-black dark:placeholder-gray-400"
                    required
                  ></textarea>
                </div>
              </div>

              <div class="my-11 mr-10 flex flex-row-reverse">
                <div
                  @click="submitMeritFeedback"
                  class="h-[51px] w-[120px] shrink-0 rounded-md border border-solid bg-[#D50036] pb-3.5 pl-6 pr-7 pt-3.5 text-white"
                >
                  CLOSE
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </template>
  </app-layout>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import workplaceRequestsv2 from '../../../../services/workplaceRequestsv2'
import Swal from 'sweetalert2'
import View from './View.vue'

const route = useRoute()

onMounted(() => {
  getMyMeritPoints()
})
const meritPoints = ref(null)
async function getMyMeritPoints() {
  try {
    const { status, data } = await workplaceRequestsv2(
      'get',
      `operations/compliance/user-point/view/${route.params.id}`
    )
    if (status === 200) {
      meritPoints.value = data.data.data
      console.log(meritPoints.value)
    }
  } catch (e) {
    alert(e.message)
  }
}
const response = ref(null)
const submitMeritFeedback = async () => {
  try {
    const { data, status } = await workplaceRequestsv2(
      'post',
      `operations/compliance/user-point/contest`,
      {
        id: route.params.id,
        response: response.value,
        type: 'feedback',
      }
    )

    if (status == 422) {
      Swal.fire({
        icon: 'info',
        title: 'Info',
        text: data ? data.message : 'Enter Correct details',
      })
    }

    if (status == 200 || status == 201) {
      Swal.fire({
        icon: 'success',
        title: 'Submitted',
        text: 'Response Sent Successfully',
      })
      setTimeout(function () {
        location.reload()
      }, 2000)
    } else {
      Swal.fire({
        icon: 'info',
        title: 'Enter Valid Details',
        text: data ? data.message : 'Invalid Request',
      })
    }
  } catch (error) {
    console.error('Error updating appraisal:', error)
  }
}
</script>
