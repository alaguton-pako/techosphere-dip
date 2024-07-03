<script setup>
import AppHorizontalNavigation from '../../../AppHorizontalNavigation.vue'
import DateTab from './DateTab.vue'
import {ref} from 'vue'

const showDropdown = ref(false)
const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value
}
</script>

<template>
  <app-layout>
    <template v-slot:main-content>
      <main class="w-full bg-[#F5F5F5] pl-[260px]">
        <AppHorizontalNavigation />
        <section class="mt-5"><DateTab @click="$router.push({ name: 'obligation-reward' })"/></section>
        <section class="p-12">
          <section
            class="my-14 grid w-full grid-cols-3 flex-nowrap gap-8"
          >
            <div
              class="flex flex-col pl-3 pr-3 place-content-center rounded border border-gray-700 bg-black py-3 text-white"
            >
              <div class="text-start text-[35px] font-bold">105</div>
              <h2 class="text-xl capitalize">Total Staff</h2>
              
            </div>
            <div
              class="flex flex-col pl-3 pr-3 place-content-center rounded border border-gray-400 bg-white py-3 text-black"
            >
              <div class="text-start text-[35px] font-bold">12,256,678,890</div>
              <h2 class="text-xl capitalize">Total Amount</h2>
            </div>
          </section>
          <section
            class="my-12 flex flex-row-reverse items-end justify-between"
          >
            <div class="flex flex-row-reverse items-center gap-4">
              <div class="mr-10 flex flex-row-reverse gap-4">
              <div class="relative inline-block text-left">
                <button
                  @click="toggleDropdown"
                  class="h-[51px] w-[121px] shrink-0 rounded-md border border-solid bg-[#D50036] pb-3.5 pl-7 pr-7 pt-3.5 text-white"
                >
                 Send
                </button>
                <div
                    v-if="showDropdown"
                    class="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabindex="-1"
                  >
                    <div class="py-1" role="none">
                      <a
                        href="#"
                        class="block border-b border-gray-200 px-4 py-2 text-sm text-gray-700"
                        role="menuitem"
                        tabindex="-1"
                        id="menu-item-0"
                        @click="sendFinance"
                        >Finance</a
                      >
                      <a
                        href="#"
                        class="block px-4 py-2 text-sm text-gray-700"
                        role="menuitem"
                        tabindex="-1"
                        id="menu-item-1"
                        @click="sendAccountant"
                        >Account Officer</a
                      >
                    </div>
                  </div>
                <!-- after sending to Accountant and Financial Personnel it routes to Payroll1.vue -->
              </div>
                
                <button
                  class="h-[51px] w-[121px] rounded-md border border-solid border-gray-700 pb-3.5 pl-7 pr-7 pt-3.5 text-black"
                >
                  Edit
                </button>
              </div>
              <div class="mx-4 flex items-center">
                <input
                  placeholder="Search"
                  class="w-[230px] rounded-l-md border border-r-0 border-secondary p-2 focus:outline-none"
                />
                <button
                  class="h-full rounded-r-md border border-secondary bg-primary-gray px-3 py-2.5"
                >
                  <img src="../../../../assets/search-white.svg" alt="" />
                </button>
              </div>
            </div>
          </section>
          <table
            class="my-12 w-full table-auto border border-secondary text-sm"
          >
            <thead class="bg-gray-200">
              <tr class="border border-secondary capitalize"></tr>
              <tr class="border border-secondary capitalize">
                <th class="border border-secondary p-3">Staff Number</th>
                <th class="border border-secondary p-2">Name</th>
                <th class="border border-secondary p-3">Amount Due</th>
                <th class="border border-secondary p-3">Account Number</th>
                <th class="border border-secondary p-3">Bank</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-secondary p-3">SC2105</td>
                <td class="border border-secondary p-3 text-center">
                  Gabriel Chen
                </td>
                <td class="border border-secondary p-3 text-center">250,000</td>
                <td class="border border-secondary p-3 text-center">
                  250678456
                </td>
                <td class="border border-secondary p-3 text-center underline">
                  Fedeth MFB
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </template>
  </app-layout>
</template>
