<script setup>
const switchTab = (value) => {
  activeTab.value = value
}
import TopBack from '../ObligationsRecruitment/TopBack.vue'
import TopView from './TopView.vue'
import NavDetails from './NavDetails.vue'
import MenuBar from '../ApplicationRecord/MenuBar.vue'
import ContactView from './ContactView.vue'
import EducationView from './EducationView.vue'
import WorkView from './WorkView.vue'
import CVDocumentView from './CVDocumentView.vue'
import IDReferenceView from './IDReferenceView.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const activeTab = ref(1)

function navigateBack() {
  router.back()
}
</script>

<template>
  <app-layout>
    <template v-slot:main-content>
      <main class="min-h-screen w-full bg-[#F5F5F5] pl-[260px]">
        <AppVerticalNavigation />
        <section class="p-9">
          <TopBack @click="$router.push({ name: 'talent-obligation' })" />
          <TopView />
        </section>
        <section class="p-10">
          <section><NavDetails @click="navigateBack" /></section>
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
              <div class="grid grid-cols-5 border-b-white">
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
                    >Application Submitted</label
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
                <div class="my-2 mb-4 border border-gray-400">
                  <label
                    for="name"
                    class="text-md mx-2 my-2 mb-2 block text-center font-semibold text-gray-600"
                    >Refresh</label
                  >
                </div>
              </div>

              <div class="grid grid-cols-5 border-b-white bg-gray-200">
                <div class="mb-4">
                  <label
                    for="name"
                    class="text-md text-black-800 mx-2 my-2 mb-2 block font-semibold"
                    >Date Created</label
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
            <!-- <div class="border border-b-2"></div> -->
          </div>
          <section>
            <MenuBar :activeTab="activeTab" @switchTab="switchTab" />
          </section>
          <div v-if="activeTab == 1" class="mx-3 w-full border border-gray-300">
            <div class="mx-1 my-4 w-full border-gray-400">
              <div class="grid grid-cols-5 border-b-white bg-gray-200">
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
              <div class="grid grid-cols-5 border-gray-200">
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
              <div class="grid grid-cols-5 border-b-white bg-gray-200">
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
              <div class="grid grid-cols-5 border-gray-200">
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
              <div class="grid grid-cols-5 border-b-white bg-gray-200">
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
              <div class="grid grid-cols-5 border-gray-200">
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
              <div class="grid grid-cols-5 border-b-white bg-gray-200">
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
              <div class="grid grid-cols-5 border-gray-200">
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
              <div class="grid grid-cols-5 border-b-white bg-gray-200">
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
              <div class="grid grid-cols-5 border-gray-200">
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
              <div class="grid grid-cols-5 border-b-white bg-gray-200">
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

          <ContactView v-if="activeTab == 2" />
          <EducationView v-if="activeTab == 3" />
          <WorkView v-if="activeTab == 4" />
          <CVDocumentView v-if="activeTab == 5" />
          <IDReferenceView v-if="activeTab == 6" />
        </section>
      </main>
    </template>
  </app-layout>
</template>
