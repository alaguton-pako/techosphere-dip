<template>
  <div>
    <section class="pt-4">
      <div class="w-full flex flex-row px-10 ">
        <div class="w-1/2">
          <select name="" id="">
            <option value="">Sort By Month</option>
          </select>
        </div>
        <div class="w-1/2 flex flex-row-reverse">
          <button @click="toggleTargetForm = true" data-modal-target="defaultModal" data-modal-toggle="defaultModal"
            class="block text-white bg-red-600  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center "
            type="button">
            Create Target
          </button>
        </div>
      </div>
      <div class="mx-10 py-1">
        <nav class="flex items-center border border-gray-200 bg-black p-3 font-semibold text-white">
          <div class="btn mx-4 text-center capitalize">
            <span class="text-white">
              2023 Customer Targets
            </span>
          </div>
        </nav>
      </div>
      <div class="mx-10 leading-8">
        <div class="px-5 flex flex-row  border border-grey-800 bg-gray-200 h-10">
          <div class="flex items-center w-1/12 text-center">
            S/N :
          </div>
          <div class="flex items-center w-3/12 text-center">
            SECTORS
          </div>
          <div class="flex items-center w-3/12 text-center">
            SEGMENTS
          </div>
          <div class="flex items-center w-3/12 text-center">
            TOTAL PROSPECTIVE CUSTOMERS
          </div>
          <div class="flex items-center w-2/12 text-center">
            ARCHIVED
          </div>
        </div>
        <div class="px-5 flex flex-row  border border-grey-800 bg-white-200 h-auto leading-8">
          <div class="flex items-center w-1/12 text-center">
            1
          </div>
          <div class="flex items-center w-3/12  text-center">
            Technology
          </div>
          <div class="flex items-center w-3/12">
            <ol>
              <li>
                Service Providers
              </li>
              <li>
                Software Companies
              </li>
              <li>
                CTOs
              </li>
              <li>
                Venture Capital Firms
              </li>
            </ol>
          </div>
          <div class="flex items-center w-3/12 text-center">
            <ol>
              <li>
                40
              </li>
              <li>
                10
              </li>
              <li>
                8
              </li>
              <li>
                5
              </li>
            </ol>
          </div>
          <div class="flex w-2/12">
            <ol>
              <li>
                10
              </li>
              <li>
                5
              </li>
              <li>
                -
              </li>
              <li>
                -
              </li>
            </ol>
          </div>
        </div>
        <div class="px-5 flex flex-row  border border-grey-800 bg-gray-200 h-auto">
          <div class="flex items-center w-1/12 text-center">
            2
          </div>
          <div class="flex items-center w-3/12 text-center">
            Consulting and Services
          </div>
          <div class="flex items-center w-3/12">
            <ol>
              <li>
                Law Firms
              </li>
              <li>
                Accounting and Tax Consultants
              </li>
            </ol>
          </div>
          <div class="flex items-center w-3/12 text-center">
            <ol>
              <li>
                40
              </li>
              <li>
                10
              </li>
            </ol>
          </div>
          <div class="flex w-2/12">
            <ol>
              <li>
                10
              </li>
              <li>
                5
              </li>
            </ol>
          </div>
        </div>
        <div class="px-5 flex flex-row  border border-grey-800 bg-white-200 h-auto">
          <div class="flex items-center w-1/12 text-center">
            3
          </div>
          <div class="flex items-center w-3/12  text-center">
            Securities
          </div>
          <div class="flex items-center w-3/12">
            <ol>
              <li>
                Military, paramilitary and National Security agencies
              </li>
              <li>
                Private Security Companies
              </li>
            </ol>
          </div>
          <div class="flex items-center w-3/12 text-center">
            <ol>
              <li>
                40
              </li>
              <li>
                10
              </li>
            </ol>
          </div>
          <div class="flex w-2/12">
            <ol>
              <li>
                10
              </li>
              <li>
                5
              </li>
            </ol>
          </div>
        </div>
        <div class="px-5 flex flex-row  border border-grey-800 bg-gray-200 h-auto">
          <div class="flex items-center w-1/12 text-center">
            4
          </div>
          <div class="flex items-center w-3/12  text-center">
            Retail
          </div>
          <div class="flex items-center w-3/12">
            <ol>
              <li>
                Malls & MDBUs
              </li>
              <li>
                Foundations & Charities
              </li>
              <li>
                IDAs
              </li>
              <li>
                Churches
              </li>
            </ol>
          </div>
          <div class="flex items-center w-3/12 text-center">
            <ol>
              <li>
                40
              </li>
              <li>
                10
              </li>
              <li>
                8
              </li>
              <li>
                5
              </li>
            </ol>
          </div>
          <div class="flex w-2/12">
            <ol>
              <li>
                10
              </li>
              <li>
                5
              </li>
              <li>
                -
              </li>
              <li>
                -
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>

    <!-- Main modal -->
    <div class="flex flex-row item-center" v-if="toggleTargetForm">
      <div id="popup-modal" tabindex="-1"
        class="fixed top-0 left-0 grid h-screen w-screen place-items-center overflow-y-scroll overscroll-y-contain bg-primary-black bg-opacity-30 px-32 py-16 z-50">
        <div class="relative w-1/2">
          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button type="button"
              class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="popup-modal"></button>
            <div class="bg-red-600 h-10">
              <span class="text-white text-xl b p-2">Create Target</span>
            </div>
            <div class="p-6 text-center">
              <form action="">
                <div class="flex flex-wrap -mx-3 mb-6">
                  <div class="w-full px-3">
                    <label class="block text-left tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                      Target Type*
                    </label>
                    <select id="countries"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      <option selected>Choose a country</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="FR">France</option>
                      <option value="DE">Germany</option>
                    </select>
                  </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                  <div class="w-full px-3">
                    <label class="block text-left tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                      Sector*
                    </label>
                    <select id="countries"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      <option selected>Choose a country</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="FR">France</option>
                      <option value="DE">Germany</option>
                    </select>
                  </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                  <div class="w-full px-3">
                    <label class="block text-left tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                      Segment*
                    </label>
                    <div class="relative">
                      <input name="start" type="text"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Select date start" />
                    </div>
                  </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-2">
                  <div class="w-full px-3">
                    <label class="block text-left tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                      Total Prospective Customer*
                    </label>
                    <div class="relative">
                      <input name="start" type="text"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Select date start" />
                    </div>
                  </div>
                </div>
                <div class="flex justify-center -mx-3 mb-2 h-20 w-full place-items-center">
                  <button
                    class="h-12 px-6 m-2  text-red-100 transition-colors duration-150 bg-red-700 rounded-lg focus:shadow-outline hover:bg-red-800">
                    Save
                  </button>
                  <button @click="toggleTargetForm = false" class="h-12 px-6 border border-black-600 bg-white-300">
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const toggleTargetForm = ref(false);
import AppModalVue from "@/components/AppModal.vue";
</script>
