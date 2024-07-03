<template>
  <app-layout>
    <template v-slot:main-content>
      <main class="min-h-screen w-full bg-[#F5F5F5]">
        <section class="p-9">
          <Top />
        </section>
        <section class="p-10">
          <section>
            <MenuList :activeTab="activeTab" @switchTab="switchTab" />
          </section>
          <div v-if="activeTab == 1" class="mx-3 w-full border border-gray-300">
            <div class="mx-1 my-2 w-full border-gray-400">
              <div class="flex gap-16 border-b-white bg-gray-200">
                <div class="mb-4 border-b-white">
                  <label
                    for="name"
                    class="text-md text-black-800 mx-2 my-2 mb-2 block font-semibold"
                    >First Name</label
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
                    >Middle Name(optional)</label
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
                    >Last Name</label
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
              <div class="flex gap-16 border-b-white bg-gray-200">
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
              <div class="flex gap-16 border-gray-200">
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
                    class="text-md text-black-800 mx-28 my-2 mb-2 block w-80 font-light"
                  ></label>
                </div>
              </div>
              <div class="flex gap-16 border-b-white bg-gray-200">
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
              <div class="flex gap-16 border-gray-200">
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
              <div class="flex gap-16 border-b-white bg-gray-200">
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
                    class="text-md text-black-800 mx-28 my-2 mb-2 block font-light"
                  ></label>
                </div>
              </div>
              <div class="flex gap-16 border-gray-200">
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
              <div class="flex gap-16 border-b-white bg-gray-200">
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
                    class="text-md text-black-800 mx-28 my-2 mb-2 block w-96 font-light"
                  ></label>
                </div>
              </div>
            </div>
          </div>
          <ViewContactInform v-if="activeTab == 2" />
          <ViewEducation v-if="activeTab == 3" />
          <ViewWorkRecord v-if="activeTab == 4" />
          <ViewCVDocument v-if="activeTab == 5" />
          <ViewIDRecord v-if="activeTab == 6" />
        </section>
      </main>
    </template>
  </app-layout>
</template>
<script setup>
const switchTab = (value) => {
  activeTab.value = value
}
import ViewContactInform from './ViewContactInform.vue'
import ViewEducation from './ViewEducation.vue'
import ViewWorkRecord from './ViewWorkRecord.vue'
import ViewCVDocument from './ViewCVDocument.vue'
import ViewIDRecord from './ViewIDRecord.vue'
import MenuList from './MenuList.vue'
import Top from './Top.vue'
import { ref } from 'vue'
const activeTab = ref(1)
</script>
