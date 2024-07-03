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
                DEMERIT POINTS APPEAL
              </div>
            </div>
            <div class="my-4 w-full border-gray-400 p-5">
              <div class="my-2 grid grid-cols-1 gap-2">
                <div class="mb-4">
                  <label
                    for="name"
                    class="text-md text-black-800 mb-2 block font-semibold"
                  >
                    Type of Sanction</label
                  >
                  <label
                    for="name"
                    class="text-md text-black-800 mb-2 block font-light"
                  >
                    {{ demeritPoints?.type }}
                  </label>
                </div>

                <div class="mb-4">
                  <div>
                    <label for="name" class="font-semibold"
                      >Number of Points Assigned</label
                    >
                  </div>
                  <label for="name" class="my-2 font-light">{{
                    demeritPoints?.number_of_points
                  }}</label>
                </div>
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
                    {{ demeritPoints?.description }}
                  </div>
                </div>
                <div class="mb-4">
                  <div>
                    <label for="name" class="font-semibold"
                      >Query Sent To</label
                    >
                  </div>
                  <label for="name" class="my-2 font-light">{{
                    demeritPoints?.query_sent_to
                  }}</label>
                </div>
              </div>
              <div class="mb-4">
                <label for="picture" class="mb-2 block font-semibold"
                  >Upload Supporting Evidence/ Documentation</label
                >
              </div>
              <div class="my-3 flex flex-row">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 12 22C17.53 22 22 17.53 22 12C22 6.47 17.53 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM15.59 7L12 10.59L8.41 7L7 8.41L10.59 12L7 15.59L8.41 17L12 13.41L15.59 17L17 15.59L13.41 12L17 8.41L15.59 7Z"
                    fill="#D50036"
                  />
                </svg>
                <div v-if="singleQuery?.evidence" class="mx-1">
                  <img src="" alt="" />
                  {{ singleQuery?.evidence }}
                </div>
                <div v-else class="mx-1">No upload(s)</div>
              </div>
            </div>
            <div class="h-[51px] w-full bg-black text-center">
              <div
                class="flex flex-row p-3 text-center font-semibold text-white underline"
              >
                Appeal
              </div>
            </div>
            <div class="my-4 w-full border-gray-400 p-5">
              <div class="my-2 grid grid-cols-1 gap-2">
                <div class="mb-4">
                  <div>
                    <label for="name" class="font-semibold"
                      >Defendant Response</label
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

                <div class="mx-2 mb-4">
                  <label
                    for="picture"
                    class="mb-2 block text-sm font-semibold text-gray-900"
                    >Upload Supporting Evidence/ Documentation</label
                  >
                  <input
                    type="file"
                    id="picture"
                    name="picture"
                    class="w-full rounded-md border border-gray-400 p-3"
                    @change="handleFileChange($event)"
                  />
                </div>
              </div>

              <div class="my-11 mr-10 flex flex-row-reverse">
                <div
                  @click="submitDemeritAppeal"
                  class="shrink-0 rounded-md border border-solid bg-[#D50036] pb-3.5 pl-6 pr-7 pt-3.5 text-white"
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
import View from './View.vue'
import { useRoute } from 'vue-router'
import workplaceRequestsv2 from '../../../../services/workplaceRequestsv2'
import Swal from 'sweetalert2'

const route = useRoute()

onMounted(() => {
  getMyDemeritPoints()
})
const demeritPoints = ref(null)
async function getMyDemeritPoints() {
  try {
    const { status, data } = await workplaceRequestsv2(
      'get',
      `operations/compliance/user-point/view/${route.params.id}`
    )
    if (status === 200) {
      demeritPoints.value = data.data.data
    }
  } catch (e) {
    alert(e.message)
  }
}

const file = ref(null)
if (file.value) {
  payload.append('evidence', file.value)
}
function handleFileChange($event) {
  const target = $event.target
  if (target && target.files) {
    file.value = target.files[0]
  }
}

const response = ref(null)
const evidence = ref(null)

const submitDemeritAppeal = async () => {
  try {
    let payload = new FormData()
    payload.append('id', Number(route.params.id))
    payload.append('response', response.value)
    payload.append('evidence', evidence.value)
    payload.append('type', 'appeal')

    if (file.value) {
      payload.append('evidence', file.value)
    }
    const { data, status } = await workplaceRequestsv2(
      'post',
      `operations/compliance/user-point/contest`,
      payload
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
        text: 'Response sent Successfully',
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
