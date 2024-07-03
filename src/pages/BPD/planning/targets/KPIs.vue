<script setup>
import Card from "@/components/Card.vue";

const cardsData = [
  {
    figure: 700,
    bgColor: "bg-[#0F151F]",
    textColor: "text-white",
    title: "Total Meetings",
    body: "Overall number of meetings scheduled",
  },
  {
    figure: 1000,
    bgColor: "bg-white",
    textColor: "text-black",
    title: "Total Completed Meetings",
    body: "Total number of scheduled meetings/sessions held",
  },
  {
    figure: 1000,
    bgColor: "bg-white",
    textColor: "text-black",
    title: "Total Pending Meetings",
    body: "Total number of scheduled meetings/sessions missed",
  },
  {
    figure: 1000,
    bgColor: "bg-white",
    textColor: "text-black",
    title: "Total Completed Minutes",
    body: "Total number of event minutes submitted",
  },
];
</script>


<template>
  <div>
    <section class="flex flex-row py-2 px-10">
      <Card v-for="(card, index) in cardsData" :key="index" :figure="card.figure" :title="card.title"
        :bgColor="card.bgColor" :textColor="card.textColor" :body="card.body" heigh="h-48" width="w-80" />
    </section>
    <section class="mx-10 px-5 py-5">
      <span class="text-xl font-bold">KPI Rating Comparison</span>
    </section>
    <section class="mx-10 px-5 py-5">
      <div class="w-full flex flex-row px-10">
        <div class="w-3/4">
          <select name="" id="">
            <option value="">Sort By Month</option>
          </select>
          <select name="" id="">
            <option value="">Sort By Month</option>
          </select>
        </div>
        <div class="w-1/4 flex flex-row-reverse">
          <button @click="toggleTargetForm = true" data-modal-target="defaultModal" data-modal-toggle="defaultModal"
            class="block text-white bg-red-700  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
            type="button">
            Create Target
          </button>
        </div>
      </div>
    </section>
    <section class="mx-20">
      <div class="flex flex-row">
        <div class="w-5/12 border-solid border-2 border-black text-center h-auto">
          <div class="pb-3 pt-3 text-[62px] font-bold">
            3
          </div>
          <div class="w-full px-10 flex flex-row">
            <select id="countries"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
              <option selected>Choose a country</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
            <select id="countries"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
              <option selected>Choose a country</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </div>
        </div>
        <div class="w-2/12 text-center h-auto">
          <div class="pb-3 pt-6 text-[48px] font-bold">
            Add
          </div>
        </div>

        <div class="w-5/12 border-solid border-2 border-black text-center h-auto">
          <div class="pb-3 pt-3 text-[62px] font-bold">
            2
          </div>
          <div class="w-full px-10 flex flex-row">
            <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg ">
              <option selected>Choose a country</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
            <select id="countries"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
              <option selected>Choose a country</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </div>
        </div>
      </div>
    </section>
    <section class="mx-20 my-10">
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div class="flex items-center justify-between pb-4">
          <div>
            <button id="dropdownRadioButton" data-dropdown-toggle="dropdownRadio"
              class="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5"
              type="button">
              <svg class="w-3 h-3 text-gray-500  mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z" />
              </svg>
              Last 30 days
              <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="m1 1 4 4 4-4" />
              </svg>
            </button>
            <!-- Dropdown menu -->
            <div id="dropdownRadio" class="z-10 hidden w-48 bg-white divide-y divide-gray-100 rounded-lg shadow "
              data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top" style="
                position: absolute;
                inset: auto auto 0px 0px;
                margin: 0px;
                transform: translate3d(522.5px, 3847.5px, 0px);
              ">
              <ul class="p-3 space-y-1 text-sm text-gray-700 " aria-labelledby="dropdownRadioButton">
                <li>
                  <div class="flex items-center p-2 rounded hover:bg-gray-100 ">
                    <input id="filter-radio-example-1" type="radio" value="" name="filter-radio"
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300" />
                    <label for="filter-radio-example-1" class="w-full ml-2 text-sm font-medium text-gray-900 rounded">Last
                      day</label>
                  </div>
                </li>
                <li>
                  <div class="flex items-center p-2 rounded hover:bg-gray-100 ">
                    <input checked="" id="filter-radio-example-2" type="radio" value="" name="filter-radio"
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 " />
                    <label for="filter-radio-example-2"
                      class="w-full ml-2 text-sm font-medium text-gray-900 rounded\">Last 7 days</label>
                  </div>
                </li>
                <li>
                  <div class="flex items-center p-2 rounded hover:bg-gray-100 ">
                    <input id="filter-radio-example-3" type="radio" value="" name="filter-radio"
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300\" />
                    <label for="filter-radio-example-3"
                      class="w-full ml-2 text-sm font-medium text-gray-900 rounded ">Last 30
                      days</label>
                  </div>
                </li>
                <li>
                  <div class="flex items-center p-2 rounded hover:bg-gray-100 ">
                    <input id="filter-radio-example-4" type="radio" value="" name="filter-radio"
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300" />
                    <label for="filter-radio-example-4" class="w-full ml-2 text-sm font-medium text-gray-900 rounded">Last
                      month</label>
                  </div>
                </li>
                <li>
                  <div class="flex items-center p-2 rounded hover:bg-gray-100 ">
                    <input id="filter-radio-example-5" type="radio" value="" name="filter-radio"
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300" />
                    <label for="filter-radio-example-5"
                      class="w-full ml-2 text-sm font-medium text-gray-900 rounded ">Last year</label>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <label for="table-search" class="sr-only">Search</label>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg class="w-5 h-5 text-gray-500 " aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"></path>
              </svg>
            </div>
            <input type="text" id="table-search"
              class="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 "
              placeholder="Search for items" />
          </div>
        </div>
        <table class="w-full table-fixed text-sm text-left text-gray-500 ">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>

              <th scope="col" class="px-6 py-3">
                KPI
              </th>
              <th scope="col" class="px-6 py-3">
                OBJECTIVE
              </th>
              <th scope="col" class="px-6 py-3">
                UNIT
              </th>
              <th scope="col" class="px-6 py-3">
                ROUTINE
              </th>
              <th scope="col" class="px-6 py-3">
                AVERAGE RATING
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b  hover:bg-gray-50 ">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                Apple MacBook Pro 17"
              </th>
              <td class="px-6 py-4">
                Silver
              </td>
              <td class="px-6 py-4">
                Laptop
              </td>
              <td class="px-6 py-4">
                $2999
              </td>
              <td class="px-6 py-4">
                <a href="#" class="font-medium text-blue-600  hover:underline">Edit</a>
              </td>
            </tr>
            <tr class="bg-white border-b ">

              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                Microsoft Surface Pro
              </th>
              <td class="px-6 py-4">
                White
              </td>
              <td class="px-6 py-4">
                Laptop PC
              </td>
              <td class="px-6 py-4">
                $1999
              </td>
              <td class="px-6 py-4">
                <a href="#" class="font-medium text-blue-600 ">Edit</a>
              </td>
            </tr>
            <tr class="bg-white border-b">

              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                Magic Mouse 2
              </th>
              <td class="px-6 py-4">
                Black
              </td>
              <td class="px-6 py-4">
                Accessories
              </td>
              <td class="px-6 py-4">
                $99
              </td>
              <td class="px-6 py-4">
                <a href="#" class="font-medium text-blue-600  hover:underline">Edit</a>
              </td>
            </tr>
            <tr class="bg-white border-b">

              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                Apple Watch
              </th>
              <td class="px-6 py-4">
                Silver
              </td>
              <td class="px-6 py-4">
                Accessories
              </td>
              <td class="px-6 py-4">
                $179
              </td>
              <td class="px-6 py-4">
                <a href="#" class="font-medium text-blue-600  hover:underline">Edit</a>
              </td>
            </tr>
            <tr class="bg-white border-b ">

              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                iPad
              </th>
              <td class="px-6 py-4">
                Gold
              </td>
              <td class="px-6 py-4">
                Tablet
              </td>
              <td class="px-6 py-4">
                $699
              </td>
              <td class="px-6 py-4">
                <a href="#" class="font-medium text-blue-600  hover:underline">Edit</a>
              </td>
            </tr>
            <tr class="bg-white">

              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                Apple iMac 27"
              </th>
              <td class="px-6 py-4">
                Silver
              </td>
              <td class="px-6 py-4">
                PC Desktop
              </td>
              <td class="px-6 py-4">
                $3999
              </td>
              <td class="px-6 py-4">
                <a href="#" class="font-medium text-blue-600 hover:underline">Edit</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

