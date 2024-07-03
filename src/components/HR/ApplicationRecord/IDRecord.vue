<template>
  <div class="mx-3 w-full rounded-md border border-gray-200 p-10">
    <div
      class="mx-1 my-8 h-[250px] w-full rounded-xl border-gray-500 p-5 shadow-sm"
    >
      <div class="flex flex-row gap-4">
        <div class="mx-1 my-2 font-semibold text-black underline">
          Identification
        </div>
         <div class="mx-1 text-red-500">*</div>
      </div>
      <div class="my-2 grid grid-cols-3 gap-2">
        <div class="mb-4">
         <div class="flex ">
          <label
             for="dropdown"
             class="text-md text-black-800 mb-2 block font-semibold"
           >Identification Type</label
            >
          <div class="mx-1 text-red-500">*</div>
          </div>
          <select
            name="dropdown"
            id="dropdown"
            class="border border-gray-500  p-2 bg-[#EEEEEE] w-full">

            <option value="option1">International Passport</option>
            <option value="option2">National Identification</option>
            <option value="option3">Driver's License</option>
          </select>
        </div>

        <div class="mb-4">
         <div class="flex ">
          <label
             for="dropdown"
             class="text-md text-black-800 mb-2 block font-semibold"
           >ID Number</label
            >
          <div class="mx-1 text-red-500">*</div>
          </div>
          <input
            type="text"
            id="field1"
            name="field1"
            required class="p-2 border border-gray-500 w-full"
          />
        </div>
        <div class="mb-4">
          <div class="flex ">
          <label
             for="dropdown"
             class="text-md text-black-800 mb-2 block font-semibold"
           >ID Expiration Date</label
            >
          <div class="mx-1 text-red-500">*</div>
          </div>
          <input
            type="date"
            id="field1"
            name="field1"
            required class="p-2 border border-gray-500 w-full"
          />
        </div>
      </div>
      <div class="my-2 grid-cols-1 gap-4 pb-6 lg:grid-cols-1">
        <div class="mx-2 mb-4">
         <div class="flex ">
          <label
             for="dropdown"
             class="text-md text-black-800 mb-2 block font-semibold"
           >Upload Picture</label
            >
          <div class="mx-1 text-red-500">*</div>
          </div>
          <input
            type="file"
            id="picture"
            name="picture"
            required class="p-2 border border-gray-500 w-full"
          />
        </div>
      </div>
    </div>
    <div class="w-full rounded-2xl border-gray-300">
      <div class="mx-1 h-[500px] w-full border-gray-300 shadow-sm">
        <h2
          class="text-black-300 bg-white-600 font-[Source Sans Pro] my-5 flex w-full flex-row rounded-md p-2 text-[25px] font-bold"
        >
          Reference Details
        </h2>
        <div class="flex flex-row gap-4">
          <div class="mx-1 my-2 flex flex-row font-semibold text-black">
            Reference 1
            <div class="mx-1 text-red-500">*</div>
          </div>
        </div>
        <div class="grid grid-cols-3 gap-2">
          <div class="mb-4">
           <div class="flex ">
          <label
             for="dropdown"
             class="text-md text-black-800 mb-2 block font-semibold"
           >Title</label
            >
          <div class="mx-1 text-red-500">*</div>
          </div>
            <select
              name="dropdown"
              id="dropdown"
              class="border border-gray-500  p-2 bg-[#EEEEEE] w-full">

              <option value="option1">Miss</option>
              <option value="option2">Mr</option>
              <option value="option3">Mrs</option>
            </select>
          </div>
          <div class="mb-4">
            <div class="flex ">
          <label
             for="dropdown"
             class="text-md text-black-800 mb-2 block font-semibold"
           >First Name</label
            >
          <div class="mx-1 text-red-500">*</div>
          </div>
            <input
              type="text"
              id="field1"
              name="field1"
              required class="p-2 border border-gray-500 w-full"
            />
          </div>
          <div class="mb-4">
           <div class="flex ">
          <label
             for="dropdown"
             class="text-md text-black-800 mb-2 block font-semibold"
           >Last Name</label
            >
          <div class="mx-1 text-red-500">*</div>
          </div>
            <input
              type="text"
              id="field1"
              name="field1"
              required class="p-2 border border-gray-500 w-full"
            />
          </div>
          <div class="mb-4">
            <div class="flex ">
          <label
             for="dropdown"
             class="text-md text-black-800 mb-2 block font-semibold"
           >Gender</label
            >
          <div class="mx-1 text-red-500">*</div>
          </div>
            <select
              name="dropdown"
              id="dropdown"
              class="border border-gray-500  p-2 bg-[#EEEEEE] w-full">

              <option value="option1">Female</option>
              <option value="option2">Male</option>
              <option value="option3">Others</option>
            </select>
          </div>
          <div class="mb-4">
           <div class="flex ">
          <label
             for="dropdown"
             class="text-md text-black-800 mb-2 block font-semibold"
           >Organisation</label
            >
          <div class="mx-1 text-red-500">*</div>
          </div>
            <input
              type="text"
              id="field1"
              name="field1"
              required class="p-2 border border-gray-500 w-full"
            />
          </div>
          <div class="mb-4">
            <div class="flex ">
          <label
             for="dropdown"
             class="text-md text-black-800 mb-2 block font-semibold"
           >Role</label
            >
          <div class="mx-1 text-red-500">*</div>
          </div>
            <input
              type="text"
              id="field1"
              name="field1"
             required class="p-2 border border-gray-500 w-full"
            />
          </div>
          <div class="mb-7">
           <div class="flex ">
          <label
             for="dropdown"
             class="text-md text-black-800 mb-2 block font-semibold"
           >Email Address</label
            >
          <div class="mx-1 text-red-500">*</div>
          </div>
            <input
              type="email"
              id="field1"
              name="field1"
              required class="p-2 border border-gray-500 w-full"
            />
          </div>
          <div class="mb-4">
          <div>
           <div class="flex ">
          <label
             for="dropdown"
             class="text-md text-black-800 mb-2 block font-semibold"
           >Phone Number</label
            >
          <div class="mx-1 text-red-500">*</div>
          </div>
             <div class="relative mt-2 rounded-md shadow-sm">
              <div class="absolute inset-y-0 left-0 flex items-center">
                <label
                  for="number"
                  class="text-md text-black-800 sr-only mb-2 block font-semibold"
                  >Phone Number</label
                >
                <select
                  id="number"
                  name="number"
                  class="border border-gray-500  p-2 bg-[#EEEEEE] w-full">
                  
                  <option>+1</option>
                  <option>+234</option>
                  <option>+44</option>
                </select>
              </div>
              <!-- <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <span class="text-gray-500 sm:text-sm">$</span>
                </div> -->
              <input
                type="text"
                name="number"
                id="number"
                required class="p-2 border border-gray-500 w-full placeholder:text-gray-400  md:text-md sm:leading-6 block   px-5 py-1.5 pl-20 pr-7 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                
              />
            </div>
          </div>
        </div>
           <div class="mb-4">
          <div>
            <label
              for="price"
              class="text-md text-black-800 mx-1 block font-semibold leading-6"
              >Alternate Phone Number</label
            >
             <div class="relative mt-2 rounded-md shadow-sm">
              <div class="absolute inset-y-0 left-0 flex items-center">
                <label
                  for="number"
                  class="text-md text-black-800 sr-only mb-2 block font-semibold"
                  >Alternate Phone Number</label
                >
                <select
                  id="number"
                  name="number"
                  class="border border-gray-500  p-2 bg-[#EEEEEE] w-full">
                  
                  <option>+1</option>
                  <option>+234</option>
                  <option>+44</option>
                </select>
              </div>
              <!-- <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <span class="text-gray-500 sm:text-sm">$</span>
                </div> -->
              <input
                type="text"
                name="number"
                id="number"
                required class="p-2 border border-gray-500 w-full placeholder:text-gray-400  md:text-md sm:leading-6 block   px-5 py-1.5 pl-20 pr-7 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                
              />
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
    <div class="w-full rounded-2xl border-gray-300">
      <div class="mx-1 h-[500px] w-full border-gray-300 shadow-sm">
        <div class="flex flex-row gap-4">
          <div class="mx-1 my-2 flex flex-row font-semibold text-black">
            Reference 2
            <div class="mx-1 text-red-500">*</div>
          </div>
        </div>
        <div class="grid grid-cols-3 gap-2">
          <div class="mb-4">
           <div class="flex ">
          <label
             for="dropdown"
             class="text-md text-black-800 mb-2 block font-semibold"
           >Title</label
            >
          <div class="mx-1 text-red-500">*</div>
          </div>
            <select
              name="dropdown"
              id="dropdown"
              class="border border-gray-500  p-2 bg-[#EEEEEE] w-full">

              <option value="option1">Miss</option>
              <option value="option2">Mr</option>
              <option value="option3">Mrs</option>
            </select>
          </div>
          <div class="mb-4">
            <div class="flex ">
          <label
             for="dropdown"
             class="text-md text-black-800 mb-2 block font-semibold"
           >First Name</label
            >
          <div class="mx-1 text-red-500">*</div>
          </div>
            <input
              type="text"
              id="field1"
              name="field1"
              required class="p-2 border border-gray-500 w-full"
            />
          </div>
          <div class="mb-4">
            <div class="flex ">
          <label
             for="dropdown"
             class="text-md text-black-800 mb-2 block font-semibold"
           >Last Name</label
            >
          <div class="mx-1 text-red-500">*</div>
          </div>
            <input
              type="text"
              id="field1"
              name="field1"
              required class="p-2 border border-gray-500 w-full"
            />
          </div>
          <div class="mb-4">
            <div class="flex ">
          <label
             for="dropdown"
             class="text-md text-black-800 mb-2 block font-semibold"
           >Gender</label
            >
          <div class="mx-1 text-red-500">*</div>
          </div>
            <select
              name="dropdown"
              id="dropdown"
              class="border border-gray-500  p-2 bg-[#EEEEEE] w-full">

              <option value="option1">Female</option>
              <option value="option2">Male</option>
              <option value="option3">Others</option>
            </select>
          </div>
          <div class="mb-4">
           <div class="flex ">
          <label
             for="dropdown"
             class="text-md text-black-800 mb-2 block font-semibold"
           >Oranization</label
            >
          <div class="mx-1 text-red-500">*</div>
          </div>
            <input
              type="text"
              id="field1"
              name="field1"
              required class="p-2 border border-gray-500 w-full"
            />
          </div>
          <div class="mb-4">
            <div class="flex ">
          <label
             for="dropdown"
             class="text-md text-black-800 mb-2 block font-semibold"
           >Role</label
            >
          <div class="mx-1 text-red-500">*</div>
          </div>
            <input
              type="text"
              id="field1"
              name="field1"
              required class="p-2 border border-gray-500 w-full"
            />
          </div>
          <div class="mb-7">
           <div class="flex ">
          <label
             for="dropdown"
             class="text-md text-black-800 mb-2 block font-semibold"
           >Email Address</label
            >
          <div class="mx-1 text-red-500">*</div>
          </div>
            <input
              type="email"
              id="field1"
              name="field1"
              required class="p-2 border border-gray-500 w-full"
            />
          </div>
          <div class="mb-4">
          <div>
            <div class="flex ">
          <label
             for="dropdown"
             class="text-md text-black-800 mb-2 block font-semibold"
           >Phone Number</label
            >
          <div class="mx-1 text-red-500">*</div>
          </div>
             <div class="relative mt-2 rounded-md shadow-sm">
              <div class="absolute inset-y-0 left-0 flex items-center">
                <label
                  for="number"
                  class="text-md text-black-800 sr-only mb-2 block font-semibold"
                  >Phone Number</label
                >
                <select
                  id="number"
                  name="number"
                  class="border border-gray-500  p-2 bg-[#EEEEEE] w-full">
                  
                  <option>+1</option>
                  <option>+234</option>
                  <option>+44</option>
                </select>
              </div>
              <!-- <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <span class="text-gray-500 sm:text-sm">$</span>
                </div> -->
              <input
                type="text"
                name="number"
                id="number"
                required class="p-2 border border-gray-500 w-full placeholder:text-gray-400  md:text-md sm:leading-6 block   px-5 py-1.5 pl-20 pr-7 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                
              />
            </div>
          </div>
        </div>
           <div class="mb-4">
          <div>
            <label
              for="price"
              class="text-md text-black-800 mx-1 block font-semibold leading-6"
              > Alternate Phone Number</label
            >
             <div class="relative mt-2 rounded-md shadow-sm">
              <div class="absolute inset-y-0 left-0 flex items-center">
                <label
                  for="number"
                  class="text-md text-black-800 sr-only mb-2 block font-semibold"
                  >Alternate Phone Number</label
                >
                <select
                  id="number"
                  name="number"
                  class="border border-gray-500  p-2 bg-[#EEEEEE] w-full">
                  
                  <option>+1</option>
                  <option>+234</option>
                  <option>+44</option>
                </select>
              </div>
              <input
                type="text"
                name="number"
                id="number"
                required class="p-2 border border-gray-500 w-full placeholder:text-gray-400  md:text-md sm:leading-6 block   px-5 py-1.5 pl-20 pr-7 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                
              />
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup></script>
