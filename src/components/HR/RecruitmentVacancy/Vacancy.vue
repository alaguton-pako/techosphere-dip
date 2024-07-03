<template>
  <app-layout>
    <template v-slot:main-content>
      <main class="min-h-screen w-full bg-[#F5F5F5] pl-[260px]">
        <AppHorizontalNavigation />
        <section class="p-5">
          <TopBack @click="navigateBack"/>
          <SendButton />
        </section>
        <section class="p-5">
          <div class="mx-3 w-full border border-gray-200 p-3">
            <div class="mx-1 my-4 w-full border-gray-100">
              <div class="flex flex-row gap-4">
                <div class="mx-1 my-2 font-semibold text-black underline">
                  Vacancy Announcements
                </div>
              </div>
              <div class="my-4 grid grid-cols-3 gap-2">
                <div class="mb-4">
                  <label
                    for="name"
                    class="text-md text-black-800 mb-2 flex flex-row font-semibold"
                    >Job Title
                    <div class="mx-1 text-red-500">*</div>
                  </label>
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
                    class="text-md text-black-800 mb-2 flex flex-row font-semibold"
                    >Job ID
                    <div class="mx-1 text-red-500">*</div>
                  </label>
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
                    for="address"
                    class="text-md text-black-800 mb-2 flex flex-row font-semibold"
                  >
                    Job Type
                    <div class="mx-1 text-red-500">*</div>
                  </label>
                  <select
                    name="dropdown"
                    id="dropdown"
                    class="w-full border border-gray-500 p-2"
                  >
                    <option value="option1">Full Time</option>
                    <option value="option2">Remote</option>
                    <option value="option3">Part Time</option>
                  </select>
                </div>
                <div class="mb-4">
                  <label
                    for="dropdown"
                    class="text-md text-black-800 mb-2 flex flex-row font-semibold"
                    >Work Type
                    <div class="mx-1 text-red-500">*</div>
                  </label>
                  <select
                    name="dropdown"
                    id="dropdown"
                    class="w-full border border-gray-500 p-2"
                  >
                    <option value="option1">Intern</option>
                    <option value="option2">Contract</option>
                    <option value="option3">Full Staff</option>
                  </select>
                </div>

                <div class="mb-4">
                  <label
                    for="dropdown"
                    class="text-md text-black-800 mb-2 flex flex-row font-semibold"
                    >Location
                    <div class="mx-1 text-red-500">*</div>
                  </label>
                  <select
                    name="dropdown"
                    id="dropdown"
                    class=" w-full border border-gray-500 p-2"
                  >
                    <option value="option1">Onsite</option>
                    <option value="option2">Contract</option>
                    <option value="option3">Off-Site</option>
                  </select>
                </div>
                <div class="mb-4">
                  <label
                    for="name"
                    class="text-md text-black-800 mb-2 flex flex-row font-semibold"
                    >End Date
                    <div class="mx-1 text-red-500">*</div>
                  </label>
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
                    class="text-md text-black-800 mb-2 flex flex-row font-semibold"
                    >Application Close Date
                    <div class="mx-1 text-red-500">*</div>
                  </label>
                  <input
                    type="date"
                    id="field1"
                    name="field1"
                    required
                    class="w-full border border-gray-500 p-2"
                  />
                </div>
              </div>
            </div>
            <div class="grid grid-cols-1">
              <label
                for="name"
                class="text-md text-black-800 mx-1 my-1 mb-2 block font-semibold"
                >Job Description</label
              >
              <ul class="mx-4 mb-4 list-decimal">
                <li 
                  v-for="(description, index) in newInput.descriptions"
                  :key="index"
                >
                  <input
                    v-model="newInput.descriptions[index]"
                    type="text"
                    :id="'field' + index"
                    :name="'field' + index"
                    required
                    class="w-full border border-gray-500 p-2 mt-2"
                  />
                </li>
              </ul>
              <div class="mr-10 flex flex-row items-end justify-end">
                <div class="my-2 font-bold text-black">+</div>
                <route-link to="">
                  <button 
                  @click="addDescriptionField"
                  class="my-2 font-bold text-black underline">
                    Add More
                  </button>
                </route-link>
                <button
                 v-if="newInput.descriptions.length > 1 || index > 0"
                 @click="removeDescriptionField(index)"
                 class="ml-4 p-2 text-red-500 bg-[#D50036] rounded"
                 aria-label="Remove"
                 type="button"
                >
                <img src="../../../assets/trash.svg" alt="">
                </button>
              </div>
              <label
                for="name"
                class="text-md text-black-800 mx-1 my-1 mb-2 block font-semibold"
                >Key Performance Indicators</label
              >
              <ul  class="mx-4 mb-4 list-decimal">
                <li 
                  v-for="(description, index) in newInput.performance"
                  :key="index"
                >
                  <input
                    v-model="newInput.performance[index]"
                    type="text"
                    :id="'field' + index"
                    :name="'field' + index"
                    required
                    class="w-full border border-gray-500 p-2 mt-2"
                  />
                </li>
              </ul>
              <div class="mr-10 flex flex-row items-end justify-end">
                <div class="my-2 font-bold text-black">+</div>
                <route-link to="">
                  <button 
                  @click="addPerformanceField"
                  class="my-2 font-bold text-black underline">
                    Add More
                  </button>
                </route-link>
                <button
                 v-if="newInput.performance.length > 1 || index > 0"
                 @click="removePerformanceField(index)"
                 class="ml-4 p-2 text-red-500 bg-[#D50036] rounded"
                 aria-label="Remove"
                 type="button"
                >
                <img src="../../../assets/trash.svg" alt="">
                </button>
              </div>
              <label
                for="name"
                class="text-md text-black-800 mx-1 my-1 mb-2 block font-semibold"
                >Qualifications</label
              >
              <ul class="mx-5 mb-4 list-decimal">
                <li  
                   v-for="(description, index) in newInput.qualification"
                   :key="index">
                  <input
                    v-model="newInput.qualification[index]"
                    type="text"
                    :id="'field' + index"
                    :name="'field' + index"
                    required
                    class="w-full border border-gray-500 p-2 mt-2"
                  />
                </li>
              </ul>
              <div class="mr-10 flex flex-row items-end justify-end">
                <div class="my-2 font-bold text-black">+</div>
                <route-link to="">
                  <button 
                  @click="addQualificationField"
                  class="my-2 font-bold text-black underline">
                    Add More
                  </button>
                </route-link>
                <button
                 v-if="newInput.qualification.length > 1 || index > 0"
                 @click="removeQualificationField(index)"
                 class="ml-4 p-2 text-red-500 bg-[#D50036] rounded"
                 aria-label="Remove"
                 type="button"
                >
                <img src="../../../assets/trash.svg" alt="">
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
import AppHorizontalNavigation from '../../AppHorizontalNavigation.vue'
import TopBack from '../ObligationsRecruitment/TopBack.vue'
import SendButton from './SendButton.vue'
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router';

const router = useRouter();

function navigateBack() {
  router.back();
}

const newInput = reactive({
  descriptions: [''],
  performance: [''],
  qualification: [''],
})

const addDescriptionField = () => {
  if (newInput.descriptions.length < 5) { 
    newInput.descriptions.push(''); 
  }
}

const addPerformanceField = () => {
  if (newInput.performance.length < 5) {
    newInput.performance.push(''); 
  }
}

const addQualificationField = () => {
  if (newInput.qualification.length < 5) {
    newInput.qualification.push(''); 
  }
}

const removeDescriptionField = (index) => {
  if (newInput.descriptions.length > 1) {
    newInput.descriptions.splice(index, 1);
  }
};
const removePerformanceField = (index) => {
  if (newInput.performance.length > 1) {
    newInput.performance.splice(index, 1);
  }
};
const removeQualificationField = (index) => {
  if (newInput.qualification.length > 1) {
    newInput.qualification.splice(index, 1);
  }
};
</script>
