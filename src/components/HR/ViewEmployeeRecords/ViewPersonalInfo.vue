<template>
  <app-layout>
    <template v-slot:main-content>
      <main class="min-h-screen w-full bg-[#F5F5F5]">
        <section class="pl-10 pr-10 mt-3">
          <TopBack @click="navigateBack"/>
          <UpdateButton />
        </section>
        <section class="p-10">
          <section><DetailsBar /></section>
          <div class="mx-3 w-full border border-gray-300">
            <div class="mx-1 my-1 w-full border-gray-400">
              <div class="my-4 flex border-b-white bg-gray-200">
                <div class="mb-4 flex gap-16 border-b-white">
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
              <div class="flex gap-16 border-gray-200">
                <div class="mb-4 flex">
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
              <div class="flex gap-16 border-gray-200 bg-gray-200">
                <div class="mb-4">
                  <label
                    for="name"
                    class="text-md text-black-800 mx-2 my-2 mb-2 block font-semibold"
                    >Staff ID</label
                  >
                </div>
                <div class="mb-4">
                  <label
                    for="name"
                    class="text-md text-black-800 mx-28 my-2 mb-2 block w-80 font-light"
                  ></label>
                </div>
              </div>
              <div class="flex gap-64 border-b-white">
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
                    >ACTIVE</label
                  >
                </div>

                <div class="mx-32 my-2 mb-4 text-black">
                  <button
                    class="border-suburbanblack h-[51px] w-[121px] border border-solid"
                  >
                    EDIT
                  </button>
                </div>
              </div>
              <div class="flex gap-16 border-b-white bg-gray-200">
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
              <div class="flex gap-16 border-b-white">
                <div class="mb-4">
                  <label
                    for="name"
                    class="text-md text-black-800 mx-2 my-2 mb-2 block font-semibold"
                    >Source</label
                  >
                </div>
                <div class="mb-4">
                  <label
                    for="name"
                    class="text-md text-black-800 mx-28 my-2 mb-2 block w-80 font-light"
                  ></label>
                </div>
              </div>
            </div>
          </div>
          <section>
            <Menu :activeTab="activeTab" @switchTab="switchTab" />
          </section>
          <div v-if="activeTab == 1" class="mx-3 w-full border border-gray-300">
            <div class="mx-1 my-4 w-full border-gray-400">
              <div class="flex gap-16 border-b-white bg-gray-200">
                <div class="mb-4 border-b-white">
                  <label
                    for="name"
                    class="text-md text-black-800 mx-2 my-2 mb-2 block font-semibold"
                    >Gender</label
                  >
                </div>
                <div class="mb-4">
                  <label
                    for="name"
                    class="text-md text-black-800 mx-28 my-2 mb-2 block font-light"
                  ></label>
                </div>
              </div>
              <div class="flex gap-16 border-gray-200">
                <div class="mb-4">
                  <label
                    for="name"
                    class="text-md text-black-800 mx-2 my-2 mb-2 block font-semibold"
                    >Date of Birth</label
                  >
                </div>
                <div class="mb-4">
                  <label
                    for="name"
                    class="text-md text-black-800 mx-28 my-2 mb-2 block font-light"
                  ></label>
                </div>
              </div>
              <div class="flex gap-16 border-b-white bg-gray-200">
                <div class="mb-4">
                  <label
                    for="name"
                    class="text-md text-black-800 mx-2 my-2 mb-2 block font-semibold"
                    >Age</label
                  >
                </div>
                <div class="mb-4">
                  <label
                    for="name"
                    class="text-md text-black-800 mx-28 my-2 mb-2 block font-light"
                  ></label>
                </div>
              </div>
              <div class="flex gap-16 border-gray-200">
                <div class="mb-4">
                  <label
                    for="name"
                    class="text-md text-black-800 mx-2 my-2 mb-2 block font-semibold"
                    >Marital Status</label
                  >
                </div>
                <div class="mb-4">
                  <label
                    for="name"
                    class="text-md text-black-800 mx-28 my-2 mb-2 block font-light"
                  ></label>
                </div>
              </div>
              <div class="flex gap-16 border-b-white bg-gray-200">
                <div class="mb-4">
                  <label
                    for="name"
                    class="text-md text-black-800 mx-2 my-2 mb-2 block font-semibold"
                    >Number of Children</label
                  >
                </div>
                <div class="mb-4">
                  <label
                    for="name"
                    class="text-md text-black-800 mx-28 my-2 mb-2 block font-light"
                  ></label>
                </div>
              </div>
              <div class="flex gap-16 border-gray-200">
                <div class="mb-4">
                  <label
                    for="name"
                    class="text-md text-black-800 mx-2 my-2 mb-2 block font-semibold"
                    >Religion</label
                  >
                </div>
                <div class="mb-4">
                  <label
                    for="name"
                    class="text-md text-black-800 mx-28 my-2 mb-2 block w-80 font-light"
                  ></label>
                </div>
              </div>
              <div class="flex gap-16 border-b-white bg-gray-200">
                <div class="mb-4">
                  <label
                    for="name"
                    class="text-md text-black-800 mx-2 my-2 mb-2 block font-semibold"
                    >Nationality</label
                  >
                </div>
                <div class="mb-4">
                  <label
                    for="name"
                    class="text-md text-black-800 mx-28 my-2 mb-2 block font-light"
                  ></label>
                </div>
              </div>
              <div class="flex gap-16 border-gray-200">
                <div class="mb-4">
                  <label
                    for="name"
                    class="text-md text-black-800 mx-2 my-2 mb-2 block font-semibold"
                    >Linkedln</label
                  >
                </div>
                <div class="mb-4">
                  <label
                    for="name"
                    class="text-md text-black-800 mx-28 my-2 mb-2 block font-light"
                  ></label>
                </div>
              </div>
            </div>
          </div>
          <ViewContactInfo v-if="activeTab == 2" />
          <ViewEducation v-if="activeTab == 3" />
          <ViewWorkInfo v-if="activeTab == 4" />
          <ViewCVDocument v-if="activeTab == 5" />
          <ViewIDReference v-if="activeTab == 6" />
          <ViewContract v-if="activeTab == 7" />
        </section>
      </main>
    </template>
  </app-layout>
</template>
<script setup>
const switchTab = (value) => {
  activeTab.value = value
}
import TopBack from '../ObligationsRecruitment/TopBack.vue'
import UpdateButton from './UpdateButton.vue'
import DetailsBar from './DetailsBar.vue'
import Menu from '../InterviewRecords/Menu.vue'
import ViewContactInfo from '../ViewEmployeeRecords/ViewContactInfo.vue'
import ViewEducation from '../ViewEmployeeRecords/ViewEducation.vue'
import ViewWorkInfo from '../ViewEmployeeRecords/ViewWorkInfo.vue'
import ViewCVDocument from '../ViewEmployeeRecords/ViewCVDocument.vue'
import ViewIDReference from '../ViewEmployeeRecords/ViewIDReference.vue'
import ViewContract from '../ViewEmployeeRecords/ViewContract.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router';

const router = useRouter();

function navigateBack() {
  router.back();
}
const activeTab = ref(1)
</script>
