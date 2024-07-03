<template>
  <app-layout>
    <template v-slot:main-content>
      <main class="w-full bg-[#F5F5F5] pl-[260px]">
        <AppHorizontalNavigation />
        <ChevronBack @click="navigateBack" />
        <section class="p-10">
          <div
            class="bg-black font-semibold text-[20px] text-white justify-start place-content-start flex w-full mt-10 pl-4 pr-4 pt-3 pb-2"
          >
            Installation Details
          </div>
          <div class="w-full border border-gray-400 text-gray-600">
            <div class="my-4 flex border-b-white bg-gray-200">
              <div class="mb-4 flex gap-16 border-b-white">
                <label
                  for="name"
                  class="text-md text-black-800 mx-2 my-2 mb-2 block font-semibold"
                  >Installer:</label
                >
              </div>
              <div class="mb-4">
                <label
                  for="name"
                  class="text-md text-black-800 mx-28 my-2 mb-2 block w-80 font-light"
                ></label>
              </div>
            </div>
            <div class="my-4 flex border-b-white bg-gray-200">
              <div class="mb-4 flex gap-16 border-b-white">
                <label
                  for="name"
                  class="text-md text-black-800 mx-2 my-2 mb-2 block font-semibold"
                  >Customer Name:</label
                >
              </div>
              <div class="mb-4">
                <label
                  for="name"
                  class="text-md text-black-800 mx-28 my-2 mb-2 block w-80 font-light"
                ></label>
              </div>
            </div>
            <div class="flex gap-16 border-gray-200">
              <div class="mb-4 flex">
                <label
                  for="name"
                  class="text-md text-black-800 mx-2 my-2 mb-2 block font-semibold"
                  >Customer ID:</label
                >
              </div>
              <div class="mb-4">
                <label
                  for="name"
                  class="text-md text-black-800 mx-28 my-2 mb-2 block w-96 font-light"
                ></label>
              </div>
            </div>
            <div class="flex gap-16 border-gray-200 bg-gray-200">
              <div class="mb-4 flex">
                <label
                  for="name"
                  class="text-md text-black-800 mx-2 my-2 mb-2 block font-semibold"
                  >Phone Number:</label
                >
              </div>
              <div class="mb-4">
                <label
                  for="name"
                  class="text-md text-black-800 mx-28 my-2 mb-2 block w-96 font-light"
                ></label>
              </div>
            </div>
            <div class="flex gap-16 border-gray-200">
              <div class="mb-4 flex">
                <label
                  for="name"
                  class="text-md text-black-800 mx-2 my-2 mb-2 block font-semibold"
                  >Address:</label
                >
              </div>
              <div class="mb-4">
                <label
                  for="name"
                  class="text-md text-black-800 mx-28 my-2 mb-2 block w-96 font-light"
                ></label>
              </div>
            </div>
            <div class="flex gap-16 border-gray-200 bg-gray-200">
              <div class="mb-4 flex">
                <label
                  for="name"
                  class="text-md text-black-800 mx-2 my-2 mb-2 block font-semibold"
                  >Activity:</label
                >
              </div>
              <div class="mb-4">
                <label
                  for="name"
                  class="text-md text-black-800 mx-28 my-2 mb-2 block w-96 font-light"
                ></label>
              </div>
            </div>
            <div class="flex gap-16 border-gray-200">
              <div class="mb-4 flex">
                <label
                  for="name"
                  class="text-md text-black-800 mx-2 my-2 mb-2 block font-semibold"
                  >Expected Installation Date:</label
                >
              </div>
              <div class="mb-4">
                <label
                  for="name"
                  class="text-md text-black-800 mx-28 my-2 mb-2 block w-96 font-light"
                ></label>
              </div>
            </div>
            <div class="flex gap-16 border-gray-200 bg-gray-200">
              <div class="mb-4 flex">
                <label
                  for="name"
                  class="text-md text-black-800 mx-2 my-2 mb-2 block font-semibold"
                  >Expected Installation Time:</label
                >
              </div>
              <div class="mb-4">
                <label
                  for="name"
                  class="text-md text-black-800 mx-28 my-2 mb-2 block w-96 font-light"
                ></label>
              </div>
            </div>
            <div class="flex gap-16 border-gray-200">
              <div class="mb-4 flex">
                <label
                  for="name"
                  class="text-md text-black-800 mx-2 my-2 mb-2 block font-semibold"
                  >Actual Arrival Time:</label
                >
              </div>
              <div class="mb-4">
                <label
                  for="name"
                  class="text-md text-black-800 mx-28 my-2 mb-2 block w-96 font-light"
                ></label>
              </div>
            </div>
            <div class="flex gap-16 border-gray-200 bg-gray-200">
              <div class="mb-4 flex">
                <label
                  for="name"
                  class="text-md text-black-800 mx-2 my-2 mb-2 block font-semibold"
                  >Installation Status:</label
                >
              </div>
              <div class="mb-4">
                <label
                  for="name"
                  class="text-md text-black-800 mx-28 my-2 mb-2 block w-96 font-light"
                ></label>
              </div>
            </div>
            <div class="flex gap-16 border-gray-200">
              <div class="mb-4 flex">
                <label
                  for="name"
                  class="text-md text-black-800 mx-2 my-2 mb-2 block font-semibold"
                  >TSS:</label
                >
              </div>
              <div class="mb-4">
                <label
                  for="name"
                  class="text-md text-black-800 mx-28 my-2 mb-2 block w-96 font-light"
                ></label>
              </div>
            </div>
            <div class="flex gap-16 border-gray-200 bg-gray-200">
              <div class="mb-4 flex">
                <label
                  for="name"
                  class="text-md text-black-800 mx-2 my-2 mb-2 block font-semibold"
                  >Indoor Installation:</label
                >
              </div>
              <div class="mb-4">
                <label
                  for="name"
                  class="text-md text-black-800 mx-28 my-2 mb-2 block w-96 font-light"
                ></label>
              </div>
            </div>
            <div class="flex gap-16 border-gray-200 bg-gray">
              <div class="mb-4 flex">
                <label
                  for="name"
                  class="text-md text-black-800 mx-2 my-2 mb-2 block font-semibold"
                  >Outdoor Installation:</label
                >
              </div>
              <div class="mb-4">
                <label
                  for="name"
                  class="text-md text-black-800 mx-28 my-2 mb-2 block w-96 font-light"
                ></label>
              </div>
            </div>
            <div class="flex gap-16 border-gray-200 bg-gray-200">
              <div class="mb-4 flex">
                <label
                  for="name"
                  class="text-md text-black-800 mx-2 my-2 mb-2 block font-semibold"
                  >Slicing:</label
                >
              </div>
              <div class="mb-4">
                <label
                  for="name"
                  class="text-md text-black-800 mx-28 my-2 mb-2 block w-96 font-light"
                ></label>
              </div>
            </div>
          </div>
        </section>
      </main>
    </template>
  </app-layout>
</template>
<script setup>
import AppHorizontalNavigation from "../../AppHorizontalNavigation.vue";
import AppLayout from "../../../layouts/AppLayout.vue";
import ChevronBack from "../../Field_Operations/ChevronBack.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

function navigateBack() {
  router.back();
}
</script>
