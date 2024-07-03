<script setup>
import { ref, reactive, onMounted } from "vue";
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
// import Datepicker from 'vue3-datepicker'

// onMounted(() => {
//   const input = document.querySelector('.v3dp__datepicker input')
//   input.placeholder = 'go to date'
// })

const today = ref(new Date());
const StartDay = ref(1);
const StartMonth = ref(today.value.getMonth());
const endDay = ref(today.value.getDate());
const endMonth = ref(today.value.getMonth());

const selected = ref();
</script>

<template>
  <section
    class="mt-5 flex items-center justify-between border-gray-100 bg-white p-6 text-gray-600"
  >
    <div>
      <h2 class="flex flex-row text-xl text-black">
        <img class="pr-2" src="../assets/left-arrow.svg" alt="" />
        {{ months[StartMonth] }} {{ StartDay }} - {{ months[endMonth] }}
        {{ endDay }}
        <img class="pl-2" src="../assets/right-arrow.svg" alt="" />
      </h2>
    </div>
    <div class="flex items-center">
      <div
        class="mr-2 flex rounded border border-gray-400 bg-gray-100 py-2 px-3"
      >
        <img class="mr-2 pr-1" src="../assets/calendar-icon.svg" />
        <!-- <button>Go To Date</button> -->
        <!-- <datepicker v-model="selected" :clearable="true" /> -->
        <input type="date" name="" id="" class="bg-gray-100" />
      </div>
      <div
        class="ml-2 flex rounded border border-gray-400 bg-gray-100 py-2 px-2"
      >
        <img class="flex bg-gray-100" src="../assets/search.svg" />
        <input
          class="bg-gray-100 pl-2 focus:outline-none"
          id="search"
          placeholder=" Search"
        />
      </div>
    </div>
  </section>
</template>
