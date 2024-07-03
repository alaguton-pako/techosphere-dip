<template>
  <div class="mx-3 w-full border border-gray-300 p-10">
    <div class="mx-1 my-4 w-full border-gray-400 p-5">
      <div class="flex flex-row gap-4">
        <div class="mx-1 my-2 flex flex-row font-semibold text-black">
          Qualification 1
          <div class="mx-1 text-red-500">*</div>
        </div>
      </div>
      <div class="my-4 grid grid-cols-5 border-b-white bg-gray-200">
        <div class="mb-4 border-b-white">
          <label
            for="name"
            class="text-md text-black-800 mx-2 my-2 mb-2 block font-semibold"
            >Type of Degree</label
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
            >Name of Institution</label
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
            >Title of Degree</label
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
            >Tenure</label
          >
        </div>
        <div class="grid grid-cols-3">
          <div class="w-30 my-2 mb-4 border border-gray-400"></div>
          <div class="my-2 justify-center text-center">to</div>
          <div class="w-30 my-2 mb-4 border border-gray-400"></div>
        </div>
      </div>

      <div class="grid grid-cols-5 border-b-white bg-gray-200">
        <div class="mb-4">
          <label
            for="name"
            class="text-md text-black-800 mx-2 my-2 mb-2 block font-semibold"
            >Grade</label
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
    <div class="border border-b-2"></div>
    <div class="mx-1 my-4 w-full border-gray-400">
      <div class="flex flex-row gap-4">
        <div class="mx-1 my-2 flex flex-row font-semibold text-black">
          Qualification 2
          <div class="mx-1 text-red-500">*</div>
        </div>
      </div>
      <div class="my-4 grid grid-cols-5 border-b-white bg-gray-200">
        <div class="mb-4 border-b-white">
          <label
            for="name"
            class="text-md text-black-800 mx-2 my-2 mb-2 block font-semibold"
            >Type of Degree</label
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
            >Name of Institution</label
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
            >Title of Degree</label
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
            >Tenure</label
          >
        </div>
        <div class="grid grid-cols-3">
          <div class="w-30 my-2 mb-4 border border-gray-400"></div>
          <div class="my-2 justify-center text-center">to</div>
          <div class="w-30 my-2 mb-4 border border-gray-400"></div>
        </div>
      </div>

      <div class="grid grid-cols-5 border-b-white bg-gray-200">
        <div class="mb-4">
          <label
            for="name"
            class="text-md text-black-800 mx-2 my-2 mb-2 block font-semibold"
            >Grade</label
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
</template>
<script setup>
import TopView from './TopView.vue'
import NavDetails from './NavDetails.vue'
import Menu from './Menu.vue'
</script>
