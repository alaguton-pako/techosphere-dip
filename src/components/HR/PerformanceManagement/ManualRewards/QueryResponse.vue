<template>
  <app-layout>
    <template v-slot:main-content>
      <main class="w-full bg-[#F5F5F5] pl-[260px]">
        <AppHorizontalNavigation />
        <section class="p-12">
          <View @click="navigateBack" />
          <div class="mx-3 mt-14 w-full border border-gray-300">
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
                    Points Exceed Threshold limit 15</label
                  >
                </div>

                <div class="mb-4">
                  <div>
                    <label for="name" class="font-semibold">Priority</label>
                  </div>
                  <label for="name" class="my-2 font-light">High-Level</label>
                </div>
                <div class="mb-4">
                  <label
                    for="name"
                    class="text-md text-black-800 mb-2 block font-semibold"
                  >
                    Description of Infraction</label
                  >
                  <textarea
                    id="comment"
                    rows="3"
                    class="my-2 w-full rounded-md border-0 text-sm font-light text-gray-800 focus:outline-none focus:ring-0 dark:bg-white dark:text-black dark:placeholder-gray-400"
                    required
                    readonly
                  >
            Lorem APIsum is simply dummy text of the coding and programming industry. Lorem APIsum has been the industry's standard dummy text ever since the 1500s, when an unknown developer took a galley of code and scrambled it to make a type specimen book. It has survived not only five centuries but also the leap into electronic coding, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem APIsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem APIsum.
            </textarea
                  >
                </div>
                <div class="mb-4">
                  <div>
                    <label for="name" class="font-semibold"
                      >Query Sent To</label
                    >
                  </div>
                  <label for="name" class="my-2 font-light">Gabby Ube</label>
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
                <div class="mx-1">No upload(s)</div>
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
                  <textarea
                    id="comment"
                    rows="3"
                    class="my-2 w-full rounded-md border-0 text-sm font-light text-gray-800 focus:outline-none focus:ring-0 dark:bg-white dark:text-black dark:placeholder-gray-400"
                    required
                  >
            Lorem APIsum is simply dummy text of the coding and programming industry. Lorem APIsum has been the industry's standard dummy text ever since the 1500s, when an unknown developer took a galley of code and scrambled it to make a type specimen book. It has survived not only five centuries but also the leap into electronic coding, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem APIsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem APIsum.
            </textarea
                  >
                </div>
              </div>
              <div class="mb-4">
                <label for="picture" class="mb-2 block font-semibold"
                  >Upload Supporting Evidence/ Documentation</label
                >
              </div>
              <div class="grid grid-cols-4 border-b-white bg-gray-200">
                <div class="mb-4">
                  <label
                    for="name"
                    class="text-md text-black-800 mx-2 my-2 mb-2 block font-extralight"
                    >Splice Plan</label
                  >
                </div>
                <div class="flex flex-row">
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

                  <div class="mb-4 justify-start">
                    <label
                      for="name"
                      class="text-md text-black-800 mx-2 my-2 mb-2 block font-light"
                    ></label>
                  </div>
                </div>

                <div class="mb-4">
                  <label
                    for="name"
                    class="text-md mx-28 my-2 mb-2 block font-light text-transparent"
                    >Salome</label
                  >
                </div>
                <div class="my-3 mb-4">
                  <div class="justify-center text-center">
                    <button
                      class="border-suburbanblack h-[41px] w-[121px] rounded-md border border-solid pb-3.5 pl-7 pr-7 text-center text-black"
                    >
                      Preview
                    </button>
                  </div>
                </div>
              </div>
              <div class="my-4 grid grid-cols-4 border-b-white bg-gray-200">
                <div class="mb-4">
                  <label
                    for="name"
                    class="text-md text-black-800 mx-2 my-2 mb-2 block font-extralight"
                    >Fault Report</label
                  >
                </div>
                <div class="flex flex-row">
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

                  <div class="mb-4 justify-start">
                    <label
                      for="name"
                      class="text-md text-black-800 mx-2 my-2 mb-2 block font-light"
                    ></label>
                  </div>
                </div>

                <div class="mb-4">
                  <label
                    for="name"
                    class="text-md mx-28 my-2 mb-2 block font-light text-transparent"
                    >Salome</label
                  >
                </div>
                <div class="my-3 mb-4">
                  <div class="justify-center text-center">
                    <button
                      class="border-suburbanblack h-[41px] w-[121px] rounded-md border border-solid pb-3.5 pl-7 pr-7 text-center text-black"
                    >
                      Preview
                    </button>
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
                  <label
                    for="name"
                    class="text-md text-black-800 mb-2 block font-light"
                  >
                    Yes</label
                  >
                </div>
                <div class="mb-4">
                  <label
                    for="name"
                    class="text-md text-black-800 mb-2 block font-semibold"
                  >
                    Sanction To be Applied</label
                  >
                  <label
                    for="name"
                    class="text-md text-black-800 mb-2 block font-light"
                  >
                    Demerit Points</label
                  >
                </div>
                <div class="mb-4">
                  <label
                    for="name"
                    class="text-md text-black-800 mb-2 block font-semibold"
                  >
                    Number of Points</label
                  >
                  <label
                    for="name"
                    class="text-md text-black-800 mb-2 block font-light"
                  >
                    4</label
                  >
                </div>
              </div>

              <div class="my-11 mr-10 flex flex-row-reverse gap-4">
                <button
                  class="h-[51px] w-[120px] shrink-0 rounded-md border border-solid bg-[#D50036] pb-3.5 pl-6 pr-7 pt-3.5 text-white"
                >
                  Accept
                </button>
                <button
                  class="h-[51px] w-[120px] shrink-0 rounded-md border border-solid border-gray-400 pb-3.5 pl-6 pr-7 pt-3.5 text-black"
                >
                  Contest
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </template>
  </app-layout>
</template>
<script setup>
import AppLayout from '../../../../layouts/AppLayout.vue'
import AppHorizontalNavigation from '../../../AppHorizontalNavigation.vue'
import View from './View.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

function navigateBack() {
  router.back()
}
</script>
