<script setup></script>
<template>
  <div class="mx-3 w-full border border-gray-300 p-10">
    <div class="mx-1 my-8 w-full border-gray-400 p-5">
      <div class="flex flex-row gap-4">
        <div class="mx-1 my-2 font-semibold text-black underline">Uploads</div>
      </div>
      <div class="justify-start text-start">
        <div class="text-black">Provide the following Documentation</div>
        <div class="flex flex-row">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z"
              fill="#00A676"
            />
          </svg>

          <div class="mx-2 text-black">Curriculum Vitae/ Resume</div>
        </div>
        <div class="flex flex-row">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z"
              fill="#00A676"
            />
          </svg>

          <div class="mx-2 text-black">
            NYSC Certificate or Discharge Certificate
          </div>
        </div>
        <div class="flex flex-row">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z"
              fill="#00A676"
            />
          </svg>

          <div class="mx-2 text-black">Bachelor's Degree Certificate</div>
        </div>
        <div class="flex flex-row">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 12 22C17.53 22 22 17.53 22 12C22 6.47 17.53 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM15.59 7L12 10.59L8.41 7L7 8.41L10.59 12L7 15.59L8.41 17L12 13.41L15.59 17L17 15.59L13.41 12L17 8.41L15.59 7Z"
              fill="#D50036"
            />
          </svg>

          <div class="mx-2 text-black">Any Other Relevant Documents</div>
        </div>
      </div>

      <div class="grid grid-cols-1">
        <div class="text-md text-black-800 my-8 mb-2 block font-semibold">
          Document Type
        </div>
        <div class="mb-4">
          <select
            name="dropdown"
            id="dropdown"
            class="h-[60px] w-[350px] rounded-md border border-gray-300 p-2"
          >
            <option value="option1">Curriculum Vitae</option>
            <option value="option2">
              NYSC Certificate or Discharge Certificate
            </option>
            <option value="option3">Bachelor's Degree Certificate</option>
            <option value="option3">Others</option>
          </select>
        </div>
        <div class="mb-4">
          <input
            type="file"
            id="field1"
            name="field1"
            required class="p-2 border border-gray-500 w-full"
          />
        </div>
      </div>
      <div class="grid grid-cols-1">
        <div class="text-md text-black-800 my-3 mb-2 block font-semibold">
          Document Type
        </div>
        <div class="mb-4">
          <select
            name="dropdown"
            id="dropdown"
             class="border border-gray-500  p-2 bg-[#EEEEEE] w-full">

            <option value="option2">
              NYSC Certificate or Discharge Certificate
            </option>
            <option value="option1">Curriculum Vitae</option>
            <option value="option3">Bachelor's Degree Certificate</option>
            <option value="option3">Others</option>
          </select>
        </div>
        <div class="mb-4">
          <input
            type="file"
            id="field1"
            name="field1"
             required class="p-2 border border-gray-500 w-full"
          />
        </div>
      </div>
      <div class="grid grid-cols-1">
        <div class="text-md text-black-800 my-3 mb-2 block font-semibold">
          Document Type
        </div>
        <div class="mb-4">
          <select
            name="dropdown"
            id="dropdown"
            class="border border-gray-500  p-2 bg-[#EEEEEE] w-full">

            <option value="option3">Bachelor's Degree Certificate</option>
            <option value="option1">Curriculum Vitae</option>
            <option value="option2">
              NYSC Certificate or Discharge Certificate
            </option>
            <option value="option3">Others</option>
          </select>
        </div>
        <div class="mb-4">
          <input
            type="file"
            id="field1"
            name="field1"
            required class="p-2 border border-gray-500 w-full"
          />
        </div>
      </div>
      <div class="grid grid-cols-1">
        <div class="text-md text-black-800 my-3 mb-2 block font-semibold">
          Document Type
        </div>
        <div class="mb-4">
          <select
            name="dropdown"
            id="dropdown"
             class="border border-gray-500  p-2 bg-[#EEEEEE] w-full">

            <option value="option3">Others</option>
            <option value="option1">Curriculum Vitae</option>
            <option value="option2">
              NYSC Certificate or Discharge Certificate
            </option>
            <option value="option3">Bachelor's Degree Certificate</option>
          </select>
        </div>
        <div class="mb-4">
          <input
            type="file"
            id="field1"
            name="field1"
            required class="p-2 border border-gray-500 w-full"
          />
        </div>
      </div>
      <div class="my-2 mr-10 flex flex-row items-end justify-end">
        <div class="my-2 font-bold text-black">+</div>
        <route-link to="">
          <div class="my-2 font-bold text-black underline">Add More</div>
        </route-link>
      </div>
    </div>
  </div>
</template>
