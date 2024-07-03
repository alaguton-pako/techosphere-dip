<script setup>

</script>

<template>
  <div class="mx-3 w-full border border-gray-300 p-5">
    <div class="mx-1 my-10 w-full border-gray-400 p-5">

      <div class="grid grid-cols-3 gap-6">
        <div class="">
          <label
            for="name"
            class="text-md text-black-800 mb-2 flex flex-row font-semibold"
            >Official E-mail
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
        <div class="">
          
            <label
              for="price"
              class="text-md text-black-800 mx-1 flex flex-row font-semibold leading-6"
              >Phone Number
              <div class="mx-1 flex text-red-500">*</div>
            </label>
            <div class="relative mt-2 rounded-md shadow-sm">
              <div class="absolute inset-y-0 left-0 flex items-center">
                
                <select
                  id="number"
                  name="number"
                  class="w-full border border-gray-500 bg-[#EEEEEE] p-2"
                >
                  <option>+1</option>
                  <option>+234</option>
                  <option>+44</option>
                </select>
              </div>
           
              <input
                type="text"
                name="number"
                id="number"
                required
                class="md:text-md block w-full border border-gray-500 p-2 px-5 py-1.5 pl-20 pr-7 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6"
              />
            
          </div>
        </div>
      
          <div>
            <label
              for="price"
              class="text-md text-black-800 mx-1 flex flex-row font-semibold leading-6"
              >Alternate Phone Number
              <div class="mx-1 flex text-red-500">*</div>
            </label>
            <div class="relative mt-2 rounded-md shadow-sm">
              <div class="absolute inset-y-0 left-0 flex items-center">
              
                <select
                  id="number"
                  name="number"
                  class="w-full border border-gray-500 bg-[#EEEEEE] p-2"
                >
                  <option>+1</option>
                  <option>+234</option>
                  <option>+44</option>
                </select>
              </div>
            
              <input
                type="text"
                name="number"
                id="number"
                required
                class="md:text-md block w-full border border-gray-500 p-2 px-5 py-1.5 pl-20 pr-7 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6"
              />
            </div>
          </div>
      
        <div class="">
          <label
            for="dropdown"
            class="text-md text-black-800 mb-2 flex flex-row font-semibold"
            >Department
            <div class="mx-1 text-red-500">*</div>
          </label>
          <select
            name="dropdown"
            id="dropdown"
            class="border border-gray-500 bg-white p-2 w-full"
          >
            <option value="option1">Commercial</option>
            <option value="option2">Service</option>
            <option value="option3">Design</option>
          </select>
        </div>
        <div class="">
          <label
            for="dropdown"
            class="text-md text-black-800 mb-2 flex flex-row font-semibold"
            >Unit
            <div class="mx-1 text-red-500">*</div>
          </label>
          <select
            name="dropdown"
            id="dropdown"
            class="border border-gray-500 bg-white p-2 w-full"
          >
            <option value="option1">Finance</option>
            <option value="option2">Human Resource</option>
            <option value="option3">Development</option>
          </select>
        </div>
        <div class="">
          <label
            for="dropdown"
            class="text-md text-black-800 mb-2 flex flex-row font-semibold"
            >Role
            <div class="mx-1 text-red-500">*</div>
          </label>
          <select
            name="dropdown"
            id="dropdown"
            class="border border-gray-500 bg-white p-2 w-full"
          >
            <option value="option1">Revenue Officer</option>
            <option value="option2">Talent and Development Officer</option>
            <option value="option3">Customer Officer</option>
          </select>
        </div>
        <div class="">
          <label
            for="dropdown"
            class="text-md text-black-800 flex flex-row font-semibold"
            >Head of Department
            <div class="mx-1 text-red-500">*</div>
          </label>
          <select
            name="dropdown"
            id="dropdown"
            class="border border-gray-500 bg-white p-2 w-full"
          >
            <option value="option1">Oluch Salako</option>
            <option value="option2">James Adams</option>
            <option value="option3">Debbie Haruna</option>
          </select>
        </div>
        <div class="">
          <label
            for="address"
            class="text-md text-black-800  flex flex-row font-semibold"
          >
            Line Manager
            <div class="mx-1 text-red-500">*</div>
          </label>
          <select
            name="dropdown"
            id="dropdown"
            class="border border-gray-500 bg-white p-2 w-full"
          >
            <option value="option1">Tola Gbenga</option>
            <option value="option2">Amos Lawal</option>
            <option value="option3">Elena Nwankama</option>
          </select>
        </div>
      </div>

      <div class=" mb-4 my-10">
        <div>
          <label for="name" class="flex flex-row font-semibold"
            >Job Description
            <div class="mx-1 text-red-500">*</div>
          </label>
        </div>
        <textarea
          id="comment"
          rows="6"
          class="w-full rounded-md border border-gray-500 p-4 text-sm text-gray-900 focus:outline-none focus:ring-0 dark:bg-white dark:text-black dark:placeholder-gray-400"
          placeholder="input job description......."
          required
        ></textarea>
      </div>
      <div class="my-2 grid-cols-1 gap-4 pb-6 lg:grid-cols-1">
        <div class=" mb-4">
          <label
            for="picture"
            class="mb-2 flex flex-row text-sm font-semibold  text-gray-600"
          >
          Upload CV
            <div class="mx-1 text-red-500">*</div>
          </label>
          <input
            type="file"
            id="picture"
            name="picture"
            required
            class="w-full border border-gray-500 p-2"
          />
        </div>
      </div>
    </div>
  </div>
</template>
