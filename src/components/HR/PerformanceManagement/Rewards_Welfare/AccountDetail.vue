<template>
  <app-layout>
    <template v-slot:main-content>
      <main class="min-h-screen w-full bg-[#F5F5F5] pl-[260px]">
        <AppHorizontalNavigation />
        <section class="pl-10 pr-9 mt-5">
          <TopBack @click="$router.push({ name: 'obligation-reward' })" />

          <UpdateButton />
        </section>
        <section class="p-10">
          <section><DetailsBar /></section>
          <div class="mx-3 w-full border border-gray-300 p-5">
            <div class="mx-1 my-1 w-full border-gray-400">
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
              <div class="grid grid-cols-6 border-b-white">
                <div class="mb-4">
                  <label
                    for="name"
                    class="text-md text-black-800 mx-2 my-2 mb-2 block font-semibold"
                    >Status</label
                  >
                </div>
                <div class="my-2 mb-4">
                  <input
                    for="name"
                    class="text-md text-black-800 my-2 mb-2 block h-10 w-[90px] border border-green-400 font-light placeholder-green-300"
                    readonly="readonly"
                    placeholder="    ACTIVE"
                  />
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
                <div class="mb-4">
                  <label
                    for="name"
                    class="text-md text-black-800 mx-28 my-2 mb-2 block w-80 font-light"
                  ></label>
                </div>
                <div class="my-2 mb-4 text-black">
                  <button
                    class="border-suburbanblack h-[51px] w-[121px] border border-solid"
                  >
                    EDIT
                  </button>
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
            <View :activeTab="activeTab" @switchTab="switchTab" />
          </section>
          <div v-if="activeTab == 1" class="mx-3 w-full border border-gray-300">
            <div class="mx-1 my-4 w-full border-gray-400 p-5">
              <div class="grid grid-cols-2 border-b-white">
                <div class="grid grid-cols-1">
                  <div class="mb-4">
                    <label
                      for="name"
                      class="text-md text-black-800 mx-2 my-2 mb-2 block font-semibold"
                      >Bank Name</label
                    >
                  </div>
                  <div class="mb-4">
                    <input
                      for="name"
                      class="text-md text-black-800 my-2 mb-2 block h-10 w-[300px] border border-gray-400 font-light"
                      readonly="readonly"
                      placeholder="  Fedeth MFB"
                    />
                  </div>
                </div>
                <div class="grid grid-cols-1">
                  <div class="mb-4">
                    <label
                      for="name"
                      class="text-md text-black-800 mx-2 my-2 mb-2 block font-semibold"
                      >Account Number</label
                    >
                  </div>
                  <div class="mb-4">
                    <input
                      for="name"
                      class="text-md text-black-800 my-2 mb-2 block h-10 w-[300px] border border-gray-400 font-light"
                      readonly="readonly"
                      placeholder="  0123342567"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <PaySlip v-if="activeTab == 2" class="ml-3 mr-5"/>
        </section>
      </main>
    </template>
  </app-layout>
</template>
<script setup>
import AppHorizontalNavigation from '../../../AppHorizontalNavigation.vue'
import TopBack from '../../ObligationsRecruitment/TopBack.vue'
import UpdateButton from '../../ViewEmployeeRecords/UpdateButton.vue'
import DetailsBar from '../../ViewEmployeeRecords/DetailsBar.vue'
import View from './View.vue'
import { ref } from 'vue'
import PaySlip from './PaySlip.vue'
const activeTab = ref(1)
const switchTab = (value) => {
  activeTab.value = value
}
</script>
