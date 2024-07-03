<template>
  <app-layout>
    <template v-slot:main-content>
      <main class="min-h-screen w-full bg-[#F5F5F5] pl-[50px]">
        <section class="p-9">
          <Nav />
          <ButtonData />
        </section>
        <section class="">
          <section>
            <MenuList :activeTab="activeTab" @switchTab="switchTab" />
          </section>
          <div
            v-if="activeTab == 1"
            class="mx-3 w-full border border-gray-300 p-10"
          >
            <div class="mx-1 my-8 w-full border-gray-400 p-5">
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
          <ContactInform v-if="activeTab == 2" />
          <EducationRecord v-if="activeTab == 3" />
          <WorkRecord v-if="activeTab == 4" />
          <CVDocument v-if="activeTab == 5" />
          <IDRecord v-if="activeTab == 6" />
        </section>
      </main>
    </template>
  </app-layout>
</template>
<script setup>
import Nav from './Nav.vue'
import ButtonData from './ButtonData.vue'
import MenuList from '../ViewApplicationRecord/MenuList.vue'
import ContactInform from './ContactInform.vue'
import EducationRecord from './EducationRecord.vue'
import WorkRecord from './WorkRecord.vue'
import CVDocument from './CVDocument.vue'
import IDRecord from './IDRecord.vue'

import { ref } from 'vue'
const activeTab = ref(1)

const switchTab = (value) => {
  activeTab.value = value
}
</script>
