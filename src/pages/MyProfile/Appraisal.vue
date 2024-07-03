<template>
  <section>
    <section class="pb-5">
      <RewardTab :activeTab="activeTab" @switchTab="switchTab" />
    </section>
    <div class="flex w-[770px] justify-between bg-white">
      <div class="rounded-md p-8">
        <p class="mb-4 text-xl font-bold">Onboarding</p>
        <div class="mb-4 flex space-x-3">
          <span class="font-semibold">Legend Academy:</span>
          <span class="italic text-primary"
            >Click here to redirect to Academy</span
          >
        </div>
        <div class="flex space-x-3">
          <span class="mb-2 font-semibold">Standard Operating Procedure:</span>
          <div class="flex">
            <img src="#" alt="" />
            <span class="mx-2 italic text-gray-500 underline"> Download</span>
          </div>
        </div>
        <div class="flex space-x-24">
          <span class="font-semibold">Obligations Summary:</span>
          <span class="italic text-gray-500">Mark as “Understood”</span>
        </div>

        <ol class="mx-6 grid list-decimal grid-cols-2 space-x-4 space-y-2">
          <li class="flex flex-col space-y-0.5">
            <label for="a" class="">Customer Account Management</label>
            <label for="b" class="">Customer Billing</label>
            <label for="c" class="">Revenue Accounting</label>
            <label for="d" class="">Credit Control</label>
          </li>
          <li class="flex flex-col space-y-3">
            <input type="radio" name="" id="a" class="accent-primary" />
            <input type="radio" name="" id="b" class="accent-primary" />
            <input type="radio" name="" id="c" class="accent-primary" />
            <input type="radio" name="" id="d" class="accent-primary" />
          </li>
        </ol>
      </div>
      <div class="p-10 font-semibold">
        <p>Completion Status:</p>
      </div>
    </div>
    <div class="mx-3 w-full">
      <div class="my-1 w-full border-gray-400"></div>
    </div>
    <table
      class="mt-4 w-full table-auto rounded-md border border-secondary bg-white text-sm"
      v-if="activeTab == 1"
    >
      <thead class="bg-gray-200">
        <tr class="border border-secondary capitalize">
          <th class="border border-secondary p-3">Month</th>
          <th class="border border-secondary p-3">Date Created</th>
          <th class="border border-secondary p-3">Status</th>
          <th class="border border-secondary p-3">Action</th>
        </tr>
      </thead>
      <tbody v-if="!isLoading">
        <tr v-for="(appraisal, index) in appraisals" :key="index">
          <td class="border border-secondary p-3 text-center">
            {{ appraisal.month }}
          </td>
          <td class="border border-secondary p-3 text-center">
            {{ appraisal.date_created }}
          </td>
          <td class="border border-secondary p-3 text-center">
            <div
              class="border border-green-300 py-3 text-center text-green-300"
            >
              {{ appraisal.status }}
            </div>
          </td>
          <td class="border border-secondary p-3 text-center underline">
            <router-link
              :to="{ name: 'view-appraisal', params: { id: appraisal.id } }"
            >
              View</router-link
            >
          </td>
        </tr>
      </tbody>
    </table>
    <Rewards v-if="activeTab == 2" />
  </section>
</template>

<script setup>
import RewardTab from './RewardTab.vue'
import Rewards from './Rewards.vue'
import { onMounted, ref } from 'vue'
import workplaceRequestsv2 from '../../services/workplaceRequestsv2'
import { useUserStore } from '../../stores/userStore'

const store = useUserStore()
const isLoading = ref(true)
onMounted(() => {
  isLoading.value = true
  getAppraisals()
})
const activeTab = ref(1)
const appraisals = ref([
  {
    id: 3,
    month: 'December',
    date_created: 'December, 15, 13',
    status: 'Appraised',
  },
])

const switchTab = (value) => {
  activeTab.value = value
  if (activeTab.value == 1) {
    getAppraisals()
  }
}

const getAppraisals = async () => {
  try {
    const { status, data } = await workplaceRequestsv2(
      `get`,
      `appraisals/user/${store.$state.user?.user_id}/all`
    )

    if (status == 200) {
      appraisals.value = data.data.data.appraisals
    } else if (status == 400) {
      Swal.fire({
        icon: 'error',
        title: 'Bad Request',
        text: data?.message,
      })
    } else {
      Swal.fire({
        icon: 'info',
        title: 'Bad Request',
        text: data ? data.message : 'Error',
      })
    }
    isLoading.value = false
  } catch (e) {}
}
</script>
