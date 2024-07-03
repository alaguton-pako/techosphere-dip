<template>
  <div
    class="inline-flex h-auto w-full flex-col items-center justify-start gap-[15px]"
  >
    <LoadingSpinner />
    <div class="container mx-auto my-8">
      <!-- Item List -->
      <div class="w-full">
        <!-- Row 1 -->
        <div
          @click="firstTab = !firstTab"
          class="mt-5 flex items-center justify-between gap-5 rounded-2xl bg-white pb-5 pl-12 pr-11 pt-7 shadow-lg max-md:max-w-full max-md:flex-wrap max-md:px-5"
        >
          <span
            class="my-auto shrink grow basis-auto text-2xl font-semibold leading-7 text-black"
          >
            Inaccurate data on Network Map (DNI)</span
          >
          <!-- <router-link :to="{ path: '/' }"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="aspect-[0.99] object-contain object-center w-[68px] overflow-hidden self-stretch shrink-0 max-w-full"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              ></path></svg
          ></router-link> -->
          <a href="#" class="text-[#D50036]">
            <!-- Right-side chevron button -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="aspect-[0.99] w-[68px] max-w-full shrink-0 self-stretch overflow-hidden object-contain object-center"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </a>
        </div>

        <div v-if="firstTab" class="mx-20 my-4 bg-white">
          <HelpToggle />
        </div>

        <!-- Row 2 -->

        <!-- Add more rows as needed -->
      </div>
      <div class="w-full">
        <div class="container mx-auto my-8">
          <div @click="secondTab = !secondTab" class="h-[132px] w-full">
            <div
              class="mt-5 flex items-center justify-between gap-5 rounded-2xl bg-white pb-5 pl-12 pr-11 pt-7 shadow-lg max-md:max-w-full max-md:flex-wrap max-md:px-5"
            >
              <span
                class="my-auto shrink grow basis-auto text-2xl font-semibold leading-7 text-black"
                >Delay Diagnosis</span
              >
              <a href="#" class="text-[#D50036]">
                <!-- Right-side chevron button -->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="aspect-[0.99] w-[68px] max-w-full shrink-0 self-stretch overflow-hidden object-contain object-center"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div v-if="secondTab" class="mx-20 my-4 bg-white">
          <HelpToggle2 />
        </div>
      </div>
     <div class="w-full">
      <div class="container mx-auto my-8">
        <div @click="thirdTab = !thirdTab" class="h-[132px] w-full">
          <div
            class="mt-5 flex items-center justify-between gap-5 rounded-2xl bg-white pb-5 pl-12 pr-11 pt-7 shadow-lg max-md:max-w-full max-md:flex-wrap max-md:px-5"
          >
            <span
              class="my-auto shrink grow basis-auto text-2xl font-semibold leading-7 text-black"
              >Inaccurate Diagnosis</span
            >
            <a href="#" class="text-[#D50036]">
              <!-- Right-side chevron button -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="aspect-[0.99] w-[68px] max-w-full shrink-0 self-stretch overflow-hidden object-contain object-center"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </a>
          </div>
        </div> 
      </div>
      <div v-if="thirdTab" class="mx-20 my-4 bg-white">
          <HelpToggle3 />
        </div>
    </div>
      <div class="container mx-auto my-8">
        <div class="h-[132px] w-full">
          <div
            class="mt-5 flex items-center justify-between gap-5 rounded-2xl bg-white pb-5 pl-12 pr-11 pt-7 shadow-lg max-md:max-w-full max-md:flex-wrap max-md:px-5"
          >
            <span
              class="my-auto shrink grow basis-auto text-2xl font-semibold leading-7 text-black"
              >Incomplete Diagnosis</span
            >
            <a href="#" class="text-[#D50036]">
              <!-- Right-side chevron button -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="aspect-[0.99] w-[68px] max-w-full shrink-0 self-stretch overflow-hidden object-contain object-center"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="container mx-auto my-8">
        <div class="h-[132px] w-full">
          <div
            class="mt-5 flex items-center justify-between gap-5 rounded-2xl bg-white pb-5 pl-12 pr-11 pt-7 shadow-lg max-md:max-w-full max-md:flex-wrap max-md:px-5"
          >
            <span
              class="my-auto shrink grow basis-auto text-2xl font-semibold leading-7 text-black"
              >Inability to use Tools (IDP, Coordinates, e.t.c)</span
            >
            <a href="#" class="text-[#D50036]">
              <!-- Right-side chevron button -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="aspect-[0.99] w-[68px] max-w-full shrink-0 self-stretch overflow-hidden object-contain object-center"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="container mx-auto my-8">
        <div class="h-[132px] w-full">
          <div
            class="mt-5 flex items-center justify-between gap-5 rounded-2xl bg-white pb-5 pl-12 pr-11 pt-7 shadow-lg max-md:max-w-full max-md:flex-wrap max-md:px-5"
          >
            <span
              class="my-auto shrink grow basis-auto text-2xl font-semibold leading-7 text-black"
              >Lack of Compliance to SOPs</span
            >
            <a href="#" class="text-[#D50036]">
              <!-- Right-side chevron button -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="aspect-[0.99] w-[68px] max-w-full shrink-0 self-stretch overflow-hidden object-contain object-center"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="container mx-auto my-8">
        <div class="h-[132px] w-full">
          <div
            class="mt-5 flex items-center justify-between gap-5 rounded-2xl bg-white pb-5 pl-12 pr-11 pt-7 shadow-lg max-md:max-w-full max-md:flex-wrap max-md:px-5"
          >
            <span
              class="my-auto shrink grow basis-auto text-2xl font-semibold leading-7 text-black"
              >Lack of Logistics</span
            >
            <a href="#" class="text-[#D50036]">
              <!-- Right-side chevron button -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="aspect-[0.99] w-[68px] max-w-full shrink-0 self-stretch overflow-hidden object-contain object-center"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="container mx-auto my-8">
        <div class="h-[132px] w-full">
          <div
            class="mt-5 flex items-center justify-between gap-5 rounded-2xl bg-white pb-5 pl-12 pr-11 pt-7 shadow-lg max-md:max-w-full max-md:flex-wrap max-md:px-5"
          >
            <span
              class="my-auto shrink grow basis-auto text-2xl font-semibold leading-7 text-black"
              >Equipment and material avialiability</span
            >
            <a href="#" class="text-[#D50036]">
              <!-- Right-side chevron button -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="aspect-[0.99] w-[68px] max-w-full shrink-0 self-stretch overflow-hidden object-contain object-center"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="container mx-auto my-8">
        <div class="h-[132px] w-full">
          <div
            class="mt-5 flex items-center justify-between gap-5 rounded-2xl bg-white pb-5 pl-12 pr-11 pt-7 shadow-lg max-md:max-w-full max-md:flex-wrap max-md:px-5"
          >
            <span
              class="my-auto shrink grow basis-auto text-2xl font-semibold leading-7 text-black"
              >Lack of access to locations</span
            >
            <a href="#" class="text-[#D50036]">
              <!-- Right-side chevron button -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="aspect-[0.99] w-[68px] max-w-full shrink-0 self-stretch overflow-hidden object-contain object-center"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="container mx-auto my-8">
        <div class="h-[132px] w-full">
          <div
            class="mt-5 flex items-center justify-between gap-5 rounded-2xl bg-white pb-5 pl-12 pr-11 pt-7 shadow-lg max-md:max-w-full max-md:flex-wrap max-md:px-5"
          >
            <span
              class="my-auto shrink grow basis-auto text-2xl font-semibold leading-7 text-black"
              >Lack of labelling</span
            >
            <a href="#" class="text-[#D50036]">
              <!-- Right-side chevron button -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="aspect-[0.99] w-[68px] max-w-full shrink-0 self-stretch overflow-hidden object-contain object-center"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="container mx-auto my-8">
        <div class="h-[132px] w-full">
          <div
            class="mt-5 flex items-center justify-between gap-5 rounded-2xl bg-white pb-5 pl-12 pr-11 pt-7 shadow-lg max-md:max-w-full max-md:flex-wrap max-md:px-5"
          >
            <span
              class="my-auto shrink grow basis-auto text-2xl font-semibold leading-7 text-black"
              >Lack of leadership</span
            >
            <a href="#" class="text-[#D50036]">
              <!-- Right-side chevron button -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="aspect-[0.99] w-[68px] max-w-full shrink-0 self-stretch overflow-hidden object-contain object-center"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="container mx-auto my-8">
        <div class="h-[132px] w-[full]">
          <div
            class="mt-5 flex items-center justify-between gap-5 rounded-2xl bg-white pb-5 pl-12 pr-11 pt-7 shadow-lg max-md:max-w-full max-md:flex-wrap max-md:px-5"
          >
            <span
              class="my-auto shrink grow basis-auto text-2xl font-semibold leading-7 text-black"
              >Inability to interprete data</span
            >
            <a href="#" class="text-[#D50036]">
              <!-- Right-side chevron button -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="aspect-[0.99] w-[68px] max-w-full shrink-0 self-stretch overflow-hidden object-contain object-center"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const firstTab = ref(false)
const secondTab = ref(false)
const thirdTab = ref(false)
import HelpToggle from '../../components/Field_Operations/HelpToggle.vue'
import HelpToggle2 from '../../components/Field_Operations/HelpToggle2.vue'
import HelpToggle3 from '../../components/Field_Operations/HelpToggle3.vue'
import LoadingSpinner from '../LoadingSpinner.vue'

// const HelpData = defineProps({
//   tag: { dafault: '' },
//   title: { dafault: '' },
//   content: { dafault: '' },
//   id: { dafault: '' }
// })
</script>
