<template>
  <app-layout>
    <template v-slot:main-content>
      <section class="pl-[260px]">
        <AppHorizontalNavigation />
        <section class="p-10">
          <View @click="$router.go(-1)" />

          <div class="mx-3 my-12 w-full border border-gray-300">
            <div class="h-[51px] w-full bg-black text-center">
              <div
                class="flex flex-row p-3 text-center font-semibold text-white underline"
              >
                QUERY
              </div>
            </div>
            <div class="my-4 w-full border-gray-400 p-5">
              <div class="my-2 grid grid-cols-1 gap-2">
                <div class="mb-4">
                  <label
                    for="name"
                    class="text-md text-black-800 mb-2 block font-semibold"
                  >
                    Type of Query</label
                  >
                  <label
                    for="name"
                    class="text-md text-black-800 mb-2 block font-light"
                  >
                    {{ singleQuery?.type }}</label
                  >
                </div>

                <div class="mb-4">
                  <div>
                    <label for="name" class="font-semibold">Priority</label>
                  </div>
                  <label for="name" class="my-2 font-light">{{
                    singleQuery?.priority
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
                    class="font-base my-2 w-full rounded-md border-0 text-gray-800"
                  >
                    {{ singleQuery?.description }}
                  </div>
                </div>
                <div class="mb-4">
                  <div>
                    <label for="name" class="font-semibold"
                      >Query Sent To</label
                    >
                  </div>
                  <label for="name" class="my-2 font-light">{{
                    singleQuery?.defaulter_id
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
                FEEDBACK
              </div>
            </div>
            <div class="my-4 w-full border-gray-400 p-5">
              <div class="my-2 grid grid-cols-1 gap-2">
                <div class="mb-4">
                  <label
                    for="name"
                    class="text-md text-black-800 mb-2 block font-semibold"
                  >
                    Defendant Response</label
                  >
                  <div>{{ singleQuery?.response }}</div>
                </div>
              </div>
              <div class="mb-4">
                <label for="picture" class="mb-2 block font-semibold"
                  >Upload Supporting Evidence/ Documentation</label
                >
              </div>
              <div
                class="flex items-center justify-between border-b-white bg-gray-200"
              >
                <div class="mb-4 flex items-center">
                  <div>{{ singleQuery?.contest_evidence }}</div>
                  <div class="my-2 mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="27"
                      height="28"
                      viewBox="0 0 27 28"
                      fill="none"
                    >
                      <path
                        d="M8.76995 23.1787H17.4699C19.2245 23.1787 20.1304 22.1855 20.1304 20.2871V12.3066C20.1304 11.0762 19.9835 10.5137 19.2735 9.73145L15.0052 5.06445C14.3115 4.30859 13.7402 4.13281 12.7118 4.13281H8.76995C7.02344 4.13281 6.10938 5.12598 6.10938 7.0332V20.2871C6.10938 22.1855 7.02344 23.1787 8.76995 23.1787ZM8.90869 21.4209C8.12521 21.4209 7.73347 20.9814 7.73347 20.1729V7.13867C7.73347 6.33887 8.12521 5.89062 8.91685 5.89062H12.3772V10.6719C12.3772 11.9463 12.9567 12.5615 14.1319 12.5615H18.5063V20.1729C18.5063 20.9814 18.1146 21.4209 17.323 21.4209H8.90869ZM14.287 11.0234C13.9442 11.0234 13.7973 10.8652 13.7973 10.5049V6.11914L18.286 11.0234H14.287ZM13.8381 19.6191V16.9648L13.7728 15.6025L14.4012 16.3145L15.0133 16.9912C15.1357 17.1318 15.3235 17.2197 15.4948 17.2197C15.8703 17.2197 16.1477 16.9385 16.1477 16.5518C16.1477 16.3232 16.0661 16.165 15.9111 16.0156L13.6667 13.8008C13.479 13.6162 13.3239 13.5283 13.1199 13.5283C12.9159 13.5283 12.7608 13.6162 12.5731 13.8008L10.3288 16.0156C10.1737 16.165 10.0921 16.3232 10.0921 16.5518C10.0921 16.9385 10.3696 17.2197 10.745 17.2197C10.9164 17.2197 11.1041 17.1318 11.2265 16.9912L11.8386 16.3145L12.467 15.6025L12.4017 16.9648V19.6191C12.4017 20.041 12.7282 20.3662 13.1199 20.3662C13.5116 20.3662 13.8381 20.041 13.8381 19.6191Z"
                        fill="#1C1C1E"
                      />
                    </svg>
                  </div>
                </div>
                <div class="flex flex-row">
                  <div class="mb-4 justify-start">
                    <label
                      for="name"
                      class="text-md text-black-800 mx-2 my-2 block font-light"
                    ></label>
                  </div>
                </div>

                <div class="my-3 mb-4">
                  <div class="justify-center text-center">
                    <div
                      @click="DownloadFile"
                      class="border-suburbanblackw-[121px] rounded-md border border-solid pl-7 pr-7 text-center text-black"
                    >
                      Preview
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="h-[51px] w-full bg-black text-center">
              <div
                class="flex flex-row p-3 text-center font-semibold text-white underline"
              >
                Decision
              </div>
            </div>
            <div class="my-4 w-full border-gray-400 p-5">
              <div class="my-2 grid grid-cols-1 gap-2">
                <div class="mb-4">
                  <label
                    for="name"
                    class="text-md text-black-800 mb-2 block font-semibold"
                  >
                    Is the Response Sufficient</label
                  >
                  <select
                    v-model="response"
                    name="dropdown"
                    id="dropdown"
                    class="h-[60px] w-full rounded-md border border-gray-400 p-2"
                  >
                    <option value="" selected disabled>
                      --Select and Option--
                    </option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
                <div class="mb-4">
                  <label
                    for="name"
                    class="text-md text-black-800 mb-2 block font-semibold"
                  >
                    Sanction To be Applied</label
                  >
                  <select
                    v-model="sanction"
                    name="dropdown"
                    id="dropdown"
                    class="h-[60px] w-full rounded-md border border-gray-400 p-2"
                  >
                    <option value="" selected disabled>
                      --Select and Option--
                    </option>
                    <option value="Demerit">Demirit Points</option>
                    <option value="Suspension">Suspension</option>
                    <option value="Disciplinary">Disciplinary Action</option>
                    <option value="Sanction">No Sanction</option>
                  </select>
                </div>
                <div class="flex flex-col">
                  <label for="">Number of Points Assigned or Days</label>
                  <input
                    v-model="point"
                    min="1"
                    max="50"
                    type="number"
                    class="h-[60px] w-full rounded-md border border-gray-400 p-2"
                  />
                </div>
              </div>

              <div
                @click="createQueryReport"
                class="my-11 mr-10 flex flex-row-reverse"
              >
                <button
                  class="h-[51px] w-[120px] shrink-0 rounded-md border border-solid bg-[#D50036] pb-3.5 pl-6 pr-7 pt-3.5 text-white"
                >
                  SEND
                </button>
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
import workplaceRequestsv2 from '../../../../services/workplaceRequestsv2'
import AppLayout from '../../../../layouts/AppLayout.vue'
import AppHorizontalNavigation from '../../../AppHorizontalNavigation.vue'
import View from './View.vue'
import { useRoute } from 'vue-router'
import Swal from 'sweetalert2'

const isLoading = ref(false)
const staffEvidence = ref(null)
const route = useRoute()
onMounted(() => {
  isLoading.value = true
  getSingleQuery()
})
const singleQuery = ref(null)
const getSingleQuery = async () => {
  try {
    const { status, data } = await workplaceRequestsv2(
      'get',
      `operations/bp/query/${route.params.id}/get`
    )
    if (status == 200) {
      singleQuery.value = data.data.data
      staffEvidence.value = data.data.data.contest_evidence
    }
    isLoading.value = false
  } catch (e) {
    console.log(e)
  }
}

const DownloadFile = () => {
  const link = document.createElement('a')
  link.href = staffEvidence.value
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
const response = ref(null)
const sanction = ref(null)
const point = ref(null)

const createQueryReport = async () => {
  try {
    const { data, status } = await workplaceRequestsv2(
      'post',
      `operations/bp/query/decision`,
      {
        query_id: Number(route.params.id),
        sufficient: response.value,
        sanction: sanction.value,
        no_of_points_or_days: point.value,
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
        text: 'Decision Sent Successfully',
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
