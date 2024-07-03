<template>
  <app-layout>
    <template v-slot:main-content>
      <main class="min-h-screen w-full bg-[#F5F5F5] pl-[260px]">
        <AppHorizontalNavigation />
        <section class="p-9">
          <router-link to="/components/interviewrecord">
            <TopBack
          /></router-link>
        </section>
        <section class="p-10">
          <section class="cursor-pointer"><BarDetails @click="navigateBack" /></section>
          <div class="mx-3 w-full border border-gray-300">
            <div class="mx-1 my-4 w-full border-gray-400">
              <div class="my-4 grid grid-cols-5 border-b-white bg-gray-200">
                <div class="mb-4 border-b-white">
                  <label
                    for="name"
                    class="text-md text-black-800 mx-2 my-2 mb-2 block font-semibold"
                    >Full Name</label
                  >
                </div>
                <div class="mb-4">
                  <label
                    for="name"
                    class="text-md text-black-800 mx-28 my-2 mb-2 block w-80 font-light"
                  ></label>
                </div>
              </div>
              <div class="grid grid-cols-5 border-gray-200">
                <div class="mb-4">
                  <label
                    for="name"
                    class="text-md text-black-800 mx-2 my-2 mb-2 block font-semibold"
                    >Role Applied</label
                  >
                </div>
                <div class="mb-4">
                  <label
                    for="name"
                    class="text-md text-black-800 mx-28 my-2 mb-2 block w-96 font-light"
                  ></label>
                </div>
              </div>
              <div class="grid grid-cols-5 border-gray-200 bg-gray-200">
                <div class="mb-4">
                  <label
                    for="name"
                    class="text-md text-black-800 mx-2 my-2 mb-2 block font-semibold"
                    >Job ID</label
                  >
                </div>
                <div class="mb-4">
                  <label
                    for="name"
                    class="text-md text-black-800 mx-28 my-2 mb-2 block w-80 font-light"
                  ></label>
                </div>
              </div>
              <div class="grid grid-cols-5 border-b-white bg-gray-200">
                <div class="mb-4">
                  <label
                    for="name"
                    class="text-md text-black-800 mx-2 my-2 mb-2 block font-semibold"
                    >Date</label
                  >
                </div>
                <div class="mb-4">
                  <label
                    for="name"
                    class="text-md text-black-800 mx-28 my-2 mb-2 block w-80 font-light"
                  ></label>
                </div>
              </div>
              <div class="grid grid-cols-5 border-b-white">
                <div class="mb-4">
                  <label
                    for="name"
                    class="text-md text-black-800 mx-2 my-2 mb-2 block font-semibold"
                    >Time</label
                  >
                </div>
                <div class="mb-4">
                  <label
                    for="name"
                    class="text-md text-black-800 mx-28 my-2 mb-2 block w-80 font-light"
                  ></label>
                </div>
              </div>
              <div class="grid grid-cols-5 border-b-white bg-gray-200">
                <div class="mb-4">
                  <label
                    for="name"
                    class="text-md text-black-800 mx-2 my-2 mb-2 block font-semibold"
                    >Status</label
                  >
                </div>
                <div class="my-2 mb-4 border border-green-400">
                  <label
                    for="name"
                    class="text-md mx-2 my-2 mb-2 block text-center font-semibold text-green-300"
                    >INVITATION ACCEPTED</label
                  >
                </div>
                <div class="mb-4">
                  <label
                    for="name"
                    class="text-md text-black-800 mx-28 my-2 mb-2 block w-80 font-light"
                  ></label>
                </div>
                <div class="mb-4">
                  <label
                    for="name"
                    class="text-md text-black-800 mx-28 my-2 mb-2 block w-80 font-light"
                  ></label>
                </div>
                <div class="my-2 mb-4">
                  <label
                    for="name"
                    class="text-md mx-2 my-2 mb-2 block text-center font-semibold text-gray-600"
                  ></label>
                </div>
              </div>
            </div>
            <div class="border border-b-2"></div>
          </div>
          <section class="mt-2">
            <InviteeBar :activeTab="activeTab" @switchTab="switchTab" />
          </section>
          <div v-if="activeTab == 1" class="mx-3 w-full border border-gray-300 mt-1">
            <div class="mx-1 my-4 w-full border-gray-400">
              <div class="grid grid-cols-5">
                <ul class="list-inside list-disc">
                  <li>CEO</li>
                </ul>
                <div class="flex flex-row justify-end">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 12 22C17.53 22 22 17.53 22 12C22 6.47 17.53 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM15.59 7L12 10.59L8.41 7L7 8.41L10.59 12L7 15.59L8.41 17L12 13.41L15.59 17L17 15.59L13.41 12L17 8.41L15.59 7Z"
                      fill="#D50036"
                    />
                  </svg>
                </div>
                <ul class="list-inside list-disc">
                  <li class="mx-4">Tola Hafiz</li>
                </ul>
                <div class="flex flex-row">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 12 22C17.53 22 22 17.53 22 12C22 6.47 17.53 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM15.59 7L12 10.59L8.41 7L7 8.41L10.59 12L7 15.59L8.41 17L12 13.41L15.59 17L17 15.59L13.41 12L17 8.41L15.59 7Z"
                      fill="#D50036"
                    />
                  </svg>
                </div>
              </div>
              <div class="my-2 grid grid-cols-5">
                <ul class="list-inside list-disc">
                  <li>COO</li>
                </ul>
                <div class="flex flex-row justify-end">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 12 22C17.53 22 22 17.53 22 12C22 6.47 17.53 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM15.59 7L12 10.59L8.41 7L7 8.41L10.59 12L7 15.59L8.41 17L12 13.41L15.59 17L17 15.59L13.41 12L17 8.41L15.59 7Z"
                      fill="#D50036"
                    />
                  </svg>
                </div>
                <ul class="list-inside list-disc">
                  <li class="mx-4">Racheal Chu</li>
                </ul>
                <div class="flex flex-row">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 12 22C17.53 22 22 17.53 22 12C22 6.47 17.53 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM15.59 7L12 10.59L8.41 7L7 8.41L10.59 12L7 15.59L8.41 17L12 13.41L15.59 17L17 15.59L13.41 12L17 8.41L15.59 7Z"
                      fill="#D50036"
                    />
                  </svg>
                </div>
               
              </div>
              <div class="mb-4">
                <div class="mx-1 my-2 flex flex-row font-semibold text-black">
                  Send Invitation to:
                  <div class="mx-1 text-red-500">*</div>
                </div>
                <select
                  name="dropdown"
                  id="dropdown"
                  class="h-[60px] w-full rounded-md border p-2"
                >
                  <option value="option1">Select One</option>
                  <option value="option1">CEO</option>
                  <option value="option2">COO</option>
                  <option value="option3">CTO</option>
                </select>
              </div>
              <div class="mr-16 flex flex-row-reverse">
                  <button
                    class=" w-[250px] shrink-0 rounded-md border border-solid bg-[#D50036] pb-3.5 pl-6 pr-7 pt-3.5 text-white"
                  >
                    Send Interview Invite
                  </button>
                </div>
            </div>
          </div>
          <InterviewReport v-if="activeTab == 2" />
          <InterviewApproved v-if="activeTab == 3" />
        </section>
      </main>
    </template>
  </app-layout>
</template>
<script setup>
const switchTab = (value) => {
  activeTab.value = value
}
import AppHorizontalNavigation from '../../AppHorizontalNavigation.vue'
import TopBack from './TopBack.vue'
import BarDetails from './BarDetails.vue'
import InviteeBar from './InviteeBar.vue'
import InterviewReport from './InterviewReport.vue'
import InterviewApproved from './InterviewApproved.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router';

const router = useRouter();
const activeTab = ref(1)

function navigateBack() {
  router.back();
}
</script>
