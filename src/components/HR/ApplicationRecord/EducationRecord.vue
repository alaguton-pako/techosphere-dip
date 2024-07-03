<template>
  <div class="mx-3 w-full border border-gray-300 p-10">
    <div class="mx-1 my-8 w-full border-gray-400 p-5">
      <div class="flex flex-row gap-4">
        <div class="mx-1 my-2 font-semibold text-black underline">
          Qualification 1
        </div>
         <div class="flex mx-1 text-red-500">*</div>
        <div class="mx-3 my-2 font-medium text-black">
          (Start with the most recent.)
        </div>
      </div>
      <div class="my-3 grid grid-cols-3 gap-2">
        <div class="mb-4">
          <label
            for="dropdown"
            class="flex flex-row text-md text-black-800 mb-2 block font-semibold"
            >Type of Degree
             <div class="flex mx-1 text-red-500">*</div>
            </label>
          <select
            name="dropdown"
            id="dropdown"
             class="border border-gray-500  p-2 bg-[#EEEEEE] w-full">

            <option value="option1" class="text-gray-300">Choose one</option>
            <option value="option2">Secondary School</option>
            <option value="option3">University Degree</option>
            <option value="option3">Postgraduate</option>
          </select>
        </div>
        <div class="mb-4">
          <label
            for="address"
            class="flex flex-row text-md text-black-800 mb-2 block font-semibold">
            Grade
             <div class="flex mx-1 text-red-500">*</div>
            </label>
          <select
            name="dropdown"
            id="dropdown"
             class="border border-gray-500  p-2 bg-[#EEEEEE] w-full">

            <option value="option1" class="text-gray-300">Choose one</option>
            <option value="option1">First Class</option>
            <option value="option2">Distinction</option>
            <option value="option3">Second CLass</option>
            <option value="option3">Pass</option>
          </select>
        </div>
      </div>
      <div class="grid grid-cols-3 gap-2">
        <div class="mb-4">
          <label
            for="name"
            class="flex flex-row text-md text-black-800 mb-2 block font-semibold">
            Title of Degree
             <div class="flex mx-1 text-red-500">*</div>
            </label>
          <input
            type="text"
            id="field1"
            name="field1"
           required class="p-2 border border-gray-500 w-full"
          />
        </div>
        <div class="mb-4">
          <label
            for="name"
            class="flex flex-row text-md text-black-800 mb-2 block font-semibold">
            State Date
             <div class="flex mx-1 text-red-500">*</div>
            </label>
          <input
            type="date"
            id="field1"
            name="field1"
            required class="p-2 border border-gray-500 w-full"
          />
        </div>
        <div class="mb-4">
          <label
            for="name"
            class="flex flex-row text-md text-black-800 mb-2 block font-semibold">
            End Date
             <div class="flex mx-1 text-red-500">*</div>
            </label>
          <input
            type="date"
            id="field1"
            name="field1"
            required class="p-2 border border-gray-500 w-full"
          />
        </div>
        <div class="mb-4">
          <label
            for="name"
            class="flex flex-row text-md text-black-800 mb-2 block font-semibold">
            Name of Institution
             <div class="flex mx-1 text-red-500">*</div>
            </label>
          <input
            type="text"
            id="field1"
            name="field1"
            required class="p-2 border border-gray-500 w-full"
          />
        </div>
        <div class="mb-4">
          <label
            for="address"
            class="flex flex-row text-md text-black-800 mb-2 block font-semibold">
            Country
             <div class="flex mx-1 text-red-500">*</div>
            </label>
          <select
            name="dropdown"
            id="dropdown"
          class="border border-gray-500  p-2 bg-[#EEEEEE] w-full">

            <option value="option1">Nigeria</option>
            <option value="option2">USA</option>
            <option value="option3">Egypt</option>
          </select>
        </div>
        <div class="mb-4">
          <label
            for="dropdown"
            class="flex flex-row text-md text-black-800 mb-2 block font-semibold">
            State
             <div class="flex mx-1 text-red-500">*</div>
            </label>
          <select
            name="dropdown"
            id="dropdown"
           class="border border-gray-500  p-2 bg-[#EEEEEE] w-full">

            <option value="option1">Abia</option>
            <option value="option2">Adamawa</option>
            <option value="option3">Akwa-Ibom</option>
          </select>
        </div>
      </div>
      <div class="grid grid-rows-1 gap-4">
        <div class="mx-1 my-2 font-semibold text-black underline">
          Qualification 2
        </div>
         <div class="flex mx-1 text-red-500">*</div>
      </div>
      <div class="my-3 grid grid-cols-3 gap-2">
        <div class="mb-4">
          <label
            for="dropdown"
            class="text-md text-black-800 mb-2 block font-semibold">
            Type of Degree
             <div class="flex mx-1 text-red-500">*</div>
            </label>
          <select
            name="dropdown"
            id="dropdown"
           class="border border-gray-500  p-2 bg-[#EEEEEE] w-full">

            <option value="option1" class="text-gray-200">Choose one</option>
            <option value="option2">Secondary School</option>
            <option value="option3">University Degree</option>
            <option value="option3">Postgraduate</option>
          </select>
        </div>
        <div class="mb-4">
          <label
            for="address"
            class="flex flex-row text-md text-black-800 mb-2 block font-semibold">
            Grade
             <div class="flex mx-1 text-red-500">*</div>
            </label>
          <select
            name="dropdown"
            id="dropdown"
            class="border border-gray-500  p-2 bg-[#EEEEEE] w-full">

            <option value="option1" class="text-gray-300">Choose one</option>
            <option value="option1">First Class</option>
            <option value="option2">Distinction</option>
            <option value="option3">Second CLass</option>
            <option value="option3">Pass</option>
          </select>
        </div>
      </div>
      <div class="grid grid-cols-3 gap-2">
        <div class="mb-4">
          <label
            for="name"
            class="flex flex-row text-md text-black-800 mb-2 block font-semibold">
            Title of Degree
             <div class="flex mx-1 text-red-500">*</div>
            </label>
          <input
            type="text"
            id="field1"
            name="field1"
             required class="p-2 border border-gray-500 w-full"
          />
        </div>
        <div class="mb-4">
          <label
            for="name"
            class="flex flex-row text-md text-black-800 mb-2 block font-semibold">
            State Date</label>
          <input
            type="date"
            id="field1"
            name="field1"
             required class="p-2 border border-gray-500 w-full"
          />
        </div>
        <div class="mb-4">
          <label
            for="name"
            class="flex flex-row text-md text-black-800 mb-2 block font-semibold">
            End Date
             <div class="flex mx-1 text-red-500">*</div>
            </label>
          <input
            type="date"
            id="field1"
            name="field1"
            required class="p-2 border border-gray-500 w-full"
          />
        </div>
        <div class="mb-4">
          <label
            for="name"
            class="flex flex-row text-md text-black-800 mb-2 block font-semibold">
            Name of Institution
             <div class="flex mx-1 text-red-500">*</div>
            </label>
          <input
            type="text"
            id="field1"
            name="field1"
             required class="p-2 border border-gray-500 w-full"
          />
        </div>
        <div class="mb-4">
          <label
            for="address"
            class="flex flex-row text-md text-black-800 mb-2 block font-semibold">
             <div class="flex mx-1 text-red-500">*</div>
            Country</label>
          <select
            name="dropdown"
            id="dropdown"
            class="border border-gray-500  p-2 bg-[#EEEEEE] w-full">

            <option value="option1">Nigeria</option>
            <option value="option2">USA</option>
            <option value="option3">Egypt</option>
          </select>
        </div>
        <div class="mb-4">
          <label
            for="dropdown"
            class="flex flex-row text-md text-black-800 mb-2 block font-semibold">
            State
             <div class="flex mx-1 text-red-500">*</div>
            </label>
          <select
            name="dropdown"
            id="dropdown"
           class="border border-gray-500  p-2 bg-[#EEEEEE] w-full">
          
            <option value="option1">Abia</option>
            <option value="option2">Adamawa</option>
            <option value="option3">Akwa-Ibom</option>
          </select>
        </div>
      </div>
      <div class="mr-10 flex flex-row items-end justify-end">
        <div class="my-2 font-bold text-black">+</div>
        <route-link to="">
          <div class="my-2 font-bold text-black underline">Add More</div>
        </route-link>
      </div>
    </div>
  </div>
</template>
<script setup></script>
