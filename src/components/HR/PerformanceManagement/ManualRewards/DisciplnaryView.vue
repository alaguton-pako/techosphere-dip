<template>
  <app-layout>
    <template v-slot:main-content>
      <section class="pl-[260px]">
        <AppHorizontalNavigation />
        <section class="p-16">
          <View @click="$router.go(-1)" />

          <div class="mx-3 my-12 w-full border border-gray-300">
            <div class="h-[51px] w-full bg-black text-center">
              <div
                class="flex flex-row p-3 text-center font-semibold text-white underline"
              >
                INVITATION TO DISCIPLINARY HEARING
              </div>
            </div>
            <div class="my-4 w-full border-gray-400 p-5">
              <div class="my-2 grid grid-cols-1 gap-2">
                <div class="mb-4">
                  <label
                    for="name"
                    class="text-md text-black-800 mb-2 block font-semibold"
                  >
                    Reason for Disciplinary Hearing</label
                  >
                  <label for="name" class="text-black-800 font-base mb-2 block">
                    {{ singleQuery?.title }}</label
                  >
                </div>

                <div class="mb-4">
                  <div>
                    <label for="name" class="font-semibold">Priority</label>
                  </div>
                  <label for="name" class="font-base my-2">{{
                    singleQuery?.priority
                  }}</label>
                </div>
                <div class="mb-4">
                  <label
                    for="name"
                    class="text-black-800 mb-2 block font-semibold"
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
                  <label for="name" class="font-base my-2">{{
                    singleQuery?.defaulter_id
                  }}</label>
                </div>
                <div class="mb-4">
                  <div>
                    <label for="name" class="font-semibold"
                      >Invitation Sent To</label
                    >
                  </div>
                  <label for="name" class="font-base my-2">{{}}</label>
                </div>
                <div class="mb-4">
                  <div>
                    <label for="name" class="font-semibold">Date</label>
                  </div>
                  <label for="name" class="font-base my-2">{{
                    singleQuery?.date
                  }}</label>
                </div>
                <div class="mb-4">
                  <div>
                    <label for="name" class="font-semibold">Time</label>
                  </div>
                  <label for="name" class="font-base my-2">12:45:24 pm</label>
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
                Report
              </div>
            </div>
            <div class="my-4 w-full border-gray-400 p-5">
              <div class="my-2 grid grid-cols-1 gap-2">
                <div class="mb-4">
                  <label
                    for="name"
                    class="text-md text-black-800 mb-2 block font-semibold"
                  >
                    Did the Disciplinary Hearing Hold</label
                  >
                  <select
                    v-model="hearing"
                    name="dropdown"
                    id="dropdown"
                    class="h-[60px] w-full rounded-md border border-gray-400 p-2"
                  >
                    <option value="" selected disabled>
                      --Select and Option--
                    </option>
                    <option value="false">No</option>
                    <option value="true">Yes</option>
                  </select>
                </div>
                <div class="mb-4">
                  <div>
                    <label for="name" class="font-semibold">Findings</label>
                  </div>
                  <textarea
                    v-model="findings"
                    id="comment"
                    rows="4"
                    class="my-2 w-full rounded-md border border-gray-400 p-5 text-sm text-gray-900 focus:outline-none focus:ring-0 dark:bg-white dark:text-black dark:placeholder-gray-400"
                    required
                  ></textarea>
                </div>
                <div class="mb-4">
                  <label
                    for="name"
                    class="text-md text-black-800 mb-2 block font-semibold"
                  >
                    Are there Sanctions</label
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
                    <option value="false">No</option>
                    <option value="true">Yes</option>
                  </select>
                </div>
                <div class="mb-4">
                  <label
                    for="name"
                    class="text-md text-black-800 mb-2 block font-semibold"
                  >
                    Select Type(s)</label
                  >
                  <select
                    v-model="sanction_type"
                    name="dropdown"
                    id="dropdown"
                    class="h-[60px] w-full rounded-md border border-gray-400 p-2"
                  >
                    <option value="" selected disabled>
                      --Select and Option--
                    </option>
                    <option value="warning">Warning</option>
                    <option value="demerit">Demerit Points</option>
                    <option value="Suspension">Suspension</option>
                    <option value="dismissal">Dismissal</option>
                  </select>
                </div>
                <div class="mb-4">
                  <div>
                    <label for="name" class="font-semibold">Details</label>
                  </div>
                  <textarea
                    v-model="details"
                    id="comment"
                    rows="4"
                    class="my-2 w-full rounded-md border border-gray-400 p-5 text-sm text-gray-900 focus:outline-none focus:ring-0 dark:bg-white dark:text-black dark:placeholder-gray-400"
                    required
                  ></textarea>
                </div>
              </div>

              <div
                @click="createSubmitReport"
                class="my-11 mr-10 flex flex-row-reverse"
              >
                <div
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
import { ref, onMounted, computed } from 'vue'
import workplaceRequestsv2 from '@/services/workplaceRequestsv2'
import View from './View.vue'
import { useRoute } from 'vue-router'
import Swal from 'sweetalert2'

const route = useRoute()
const isLoading = ref(false)

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
    }
    isLoading.value = false
  } catch (e) {
    console.log(e)
  }
}
const hearing = ref(false)
const sanction = ref(false)
const findings = ref(null)
const sanction_type = ref(null)
const details = ref(null)
const createSubmitReport = async () => {
  try {
    const { data, status } = await workplaceRequestsv2(
      'post',
      `operations/bp/query/report/create`,
      {
        query_id: Number(route.params.id),
        held: hearing.value,
        sactions: sanction.value,
        findings: findings.value,
        sanction_type: sanction_type.value,
        details: details.value,
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
        text: 'Report Sent Successfully',
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
