<template>
  <Top />
  <div class="my-2 grid w-full grid-cols-1 justify-items-center">
    <div class="h-auto w-[1020px] border border-gray-400">
      <div class="grid grid-cols-6">
        <div class="mx-1 my-2 w-60 justify-start font-semibold text-pink-700">
          MARKETING MANAGER
        </div>
        <div>
          <ul class="mx-2 my-3 w-60 list-inside list-disc text-sm font-thin">
            <li>posted on 25 November 2023</li>
          </ul>
        </div>

        <div class="mb-4">
          <label
            for="name"
            class="text-md mx-28 my-2 mb-2 block font-light text-transparent"
            >Salome</label
          >
        </div>
        <div class="mb-4">
          <label
            for="name"
            class="text-md mx-28 my-2 mb-2 block font-light text-transparent"
            >Salome</label
          >
        </div>
        <div class="mb-4">
          <label
            for="name"
            class="text-md mx-28 my-2 mb-2 block font-light text-transparent"
            >Salome</label
          >
        </div>
        <div class="my-2 mr-10 flex flex-row justify-end">
          <div
            class="w-24 border border-red-500 text-center font-semibold text-red-400"
          >
            Rejected
          </div>
        </div>
      </div>
      <div class="grid grid-cols-7">
        <div class="grid grid-cols-2">
          <div class="mb-4">
            <label
              for="name"
              class="text-md text-black-800 font-regular mx-2 my-2 mb-2 block"
              >JOB ID:</label
            >
          </div>
          <div class="mb-4">
            <label
              for="name"
              class="text-md text-black-800 my-2 mb-2 block font-extralight"
              >ST105</label
            >
          </div>
        </div>

        <div class="grid grid-cols-2">
          <div class="mb-4">
            <label
              for="name"
              class="text-md text-black-800 font-regular mx-2 my-2 mb-2 block"
              >LOCATION:</label
            >
          </div>
          <div class="mb-4 justify-start">
            <label
              for="name"
              class="text-md text-black-800 mx-4 my-2 mb-2 block font-extralight"
              >Abuja</label
            >
          </div>
        </div>
        <div class="grid grid-cols-2">
          <div class="mb-4">
            <label
              for="name"
              class="text-md text-black-800 font-regular mx-2 my-2 mb-2 block w-60"
              >JOB TYPE:</label
            >
          </div>
          <div class="mb-4 justify-start">
            <label
              for="name"
              class="text-md text-black-800 mx-2 my-2 mb-2 block w-60 font-extralight"
              >Fulltime</label
            >
          </div>
        </div>
        <div class="grid grid-cols-2">
          <div class="mb-4">
            <label
              for="name"
              class="text-md text-black-800 font-regular my-2 mb-2 block w-60"
              >WORKER TYPE:</label
            >
          </div>
          <div class="mb-4 justify-start">
            <label
              for="name"
              class="text-md text-black-800 mx-9 my-2 mb-2 block w-60 font-extralight"
              >Corps Member(corper)</label
            >
          </div>
        </div>
      </div>
      <div class="my-2 flex flex-row gap-4">
        <div class="mx-1 my-1 font-semibold text-black underline">
          JOB DESCRIPTION
        </div>
      </div>
      <ul class="mx-4 list-inside list-disc">
        <li>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </li>
        <li>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </li>
        <li>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </li>
        <li>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </li>
      </ul>

      <div class="my-2 flex flex-row gap-4">
        <div class="mx-1 my-1 font-semibold text-black underline">
          KEY PERFORMANCE INDICATIONS
        </div>
      </div>
      <ul class="mx-4 list-inside list-disc">
        <li>Lorem ipsum dolor sit amet, eiusmod tempor</li>
        <li>Lorem ipsum dolor sit amet,eiusmod tempor</li>
        <li>Lorem ipsum dolor sit amet, eiusmod tempor</li>
        <li>Lorem ipsum dolor sit amet, eiusmod tempor</li>
      </ul>
      <div class="my-2 flex flex-row gap-4">
        <div class="mx-1 my-1 font-semibold text-black underline">
          APPLICATION CLOSING DATE
        </div>
      </div>
      <ul class="mx-4 list-inside list-disc">
        <li>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import Top from './Top.vue'
</script>
