<script setup>
import AppHorizontalNavigation from '../../AppHorizontalNavigation.vue'
import TopBar from './TopBar.vue'
import Button from './Button.vue'
import ContactForm from './ContactForm.vue'
import WorkInformation from './WorkInformation.vue'
import ContractInformation from './ContractInformation.vue'
import IDReference from './IDReference.vue'

const switchTab = (value) => {
  activeTab.value = value
}
import { ref } from 'vue'
const activeTab = ref(1)
</script>

<template>
  <app-layout>
    <template v-slot:main-content>
      <main class="min-h-screen w-full bg-[#F5F5F5]">
        <section class="p-4">
          <Button />
        </section>
        <section class="">
          <TopBar :activeTab="activeTab" @switchTab="switchTab" />
          <div
            v-if="activeTab == 1"
            class="mx-3 w-full border border-gray-400 p-10"
          >
            <div class="mx-1 my-8 w-full border-gray-400 p-5">
              <div
                class="mt-8 flex place-content-center items-center justify-center"
              >
                <div class="flex flex-col">
                  <!-- <img
                    src="../../assets/cloud.svg"
                    alt=""
                    class="cursor-pointer place-content-center"
                  /> -->
                  <div class="mr-10 flex flex-row-reverse gap-4">
                    <button
                      class="h-[51px] w-[121px] shrink-0 rounded-md border bg-[#D50036] pb-3.5 pl-7 pr-7 pt-3.5 text-white"
                    >
                      Save
                    </button>
                    <button
                      class="border-suburbanblack h-[51px] w-[121px] rounded-md border border-gray-400 pb-3.5 pl-7 pr-7 pt-3.5 text-black"
                    >
                      Edit
                    </button>
                  </div>
                </div>
              </div>
              <div class="grid grid-cols-3 gap-5">
                <div class="flex flex-col">
                  <label
                    for="name"
                    class="text-md text-black-800 mb-2 block font-semibold"
                    >First Name</label
                  >
                  <input
                    id="field1"
                    name="field1"
                    type="text"
                    required
                    class="border border-gray-500 p-2"
                  />
                </div>
                <div class="flex flex-col">
                  <label
                    for="name"
                    class="text-md text-black-800 mx-1 mb-2 block font-semibold"
                    >Middle Name(Optional)</label
                  >
                  <input
                    id="field1"
                    name="field1"
                    type="text"
                    required
                    class="border border-gray-500 p-2"
                  />
                </div>
                <div class="flex flex-col">
                  <label
                    for="name"
                    class="text-md text-black-800 mx-1 mb-2 block font-semibold"
                    >Last Name</label
                  >
                  <input
                    id="field1"
                    name="field1"
                    type="text"
                    required
                    class="border border-gray-500 p-2"
                  />
                </div>
                <div class="flex flex-col">
                  <label
                    for="dropdown"
                    class="text-md text-black-800 mb-2 block font-semibold"
                    >Gender</label
                  >
                  <select
                    name="dropdown"
                    id="dropdown"
                    class="border border-gray-500 bg-[#EEEEEE] p-2"
                  >
                    <option value="option1">Female</option>
                    <option value="option2">Male</option>
                    <option value="option3">Others</option>
                  </select>
                </div>
                <div class="mb-4">
                  <label
                    for="name"
                    class="text-md text-black-800 mx-1 mb-2 block font-semibold"
                    >Date of Birth</label
                  >
                  <input
                    type="date"
                    id="field1"
                    name="field1"
                    required
                    class="w-full border border-gray-500 p-2"
                  />
                </div>
                <div class="mb-4">
                  <label
                    for="name"
                    class="text-md text-black-800 mx-1 mb-2 block font-semibold"
                    >Age</label
                  >
                  <input
                    type="number"
                    id="field1"
                    name="field1"
                    required
                    class="w-full border border-gray-500 p-2"
                    placeholder="18 years"
                  />
                </div>
                <div class="mb-4">
                  <label
                    for="dropdown"
                    class="text-md text-black-800 mb-2 block font-semibold"
                    >Marital Status</label
                  >
                  <select
                    name="dropdown"
                    id="dropdown"
                    class="w-full border border-gray-500 bg-[#EEEEEE] p-2"
                  >
                    <option value="option1">Single</option>
                    <option value="option2">Married</option>
                    <option value="option3">Others</option>
                  </select>
                </div>
                <div class="mb-4">
                  <label
                    for="dropdown"
                    class="text-md text-black-800 mx-1 mb-2 block font-semibold"
                    >Number of Children</label
                  >
                  <select
                    name="dropdown"
                    id="dropdown"
                    class="w-full border border-gray-500 bg-[#EEEEEE] p-2"
                  >
                    <option value="option1">None</option>
                    <option value="option2">1</option>
                    <option value="option3">2</option>
                    <option value="option3">More</option>
                  </select>
                </div>
                <div class="mb-4">
                  <label
                    for="dropdown"
                    class="text-md text-black-800 mx-1 mb-2 block font-semibold"
                    >Religion</label
                  >
                  <select
                    name="dropdown"
                    id="dropdown"
                    class="w-full border border-gray-500 bg-[#EEEEEE] p-2"
                  >
                    <option value="option1">Christianity</option>
                    <option value="option2">Islam</option>
                    <option value="option3">Others</option>
                  </select>
                </div>
                <div class="mb-4">
                  <label
                    for="dropdown"
                    class="text-md text-black-800 mb-2 block font-semibold"
                    >Nationality</label
                  >
                  <select
                    name="dropdown"
                    id="dropdown"
                    class="w-full border border-gray-500 bg-[#EEEEEE] p-2"
                  >
                    <option value="option1">Nigerian</option>
                    <option value="option2">Foreigner</option>
                  </select>
                </div>

                <div class="mb-4">
                  <label
                    for="name"
                    class="text-md text-black-800 mx-1 mb-2 block font-semibold"
                    >Place of Birth</label
                  >
                  <input
                    type="text"
                    id="field1"
                    name="field1"
                    required
                    class="w-full border border-gray-500 p-2"
                  />
                </div>
                <div class="mb-4">
                  <label
                    for="name"
                    class="text-md text-black-800 mx-1 mb-2 block font-semibold"
                    >Linkedln</label
                  >
                  <input
                    type="text"
                    id="field1"
                    name="field1"
                    required
                    class="w-full border border-gray-500 p-2"
                  />
                </div>
              </div>
            </div>
          </div>
          <ContactForm v-if="activeTab == 2" />
          <WorkInformation v-if="activeTab == 3" />
          <ContractInformation v-if="activeTab == 4" />
          <IDReference v-if="activeTab == 5" />
        </section>
      </main>
    </template>
  </app-layout>
</template>
