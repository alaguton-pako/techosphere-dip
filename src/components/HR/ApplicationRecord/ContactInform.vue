<script setup></script>

<template>
  <div class="mx-3 w-full border border-gray-300 p-10">
    <div class="mx-1 my-8 w-full border-gray-400 p-5">
      <div class="grid grid-cols-3 gap-2">
        <div class="mb-4">
          <label
            for="name"
            class=" flex flex-row text-md text-black-800 mb-2 block font-semibold"
            >Personal Email
            <div class=" flex mx-1 text-red-500">*</div>
            </label
          >
          <input
            type="text"
            id="field1"
            name="field1"
             required class="p-2 border border-gray-500 w-full"
          />
        </div>
        <div class="mb-4">
          <div>
            <label
              for="tel"
              class="flex flex-row text-md text-black-800 mx-1 block font-semibold leading-6"
              >Phone Number
              <div class=" flex mx-1 text-red-500">*</div>
              </label
            >
            <div class="relative mt-2 rounded-md shadow-sm">
              <div class="absolute inset-y-0 left-0 flex items-center">
                <label
                  for="number"
                  class=" flex flex-row text-md text-black-800 sr-only mb-2 block font-semibold"
                  >Phone Number
                  <div class=" flex mx-1 text-red-500">*</div>
                  </label
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
                required class="p-2 border border-gray-500 w-full"
              />
            </div>
          </div>
        </div>
        <div class="mb-4">
          <div>
            <label
              for="tel"
              class="text-md text-black-800 mx-1 block font-semibold leading-6"
              >Alternate Phone Number</label
            >
            <div class="relative mt-2 rounded-md shadow-sm">
              <div class="absolute inset-y-0 left-0 flex items-center">
                <label
                  for="number"
                  class="text-md text-black-800 sr-only mb-2 block font-semibold"
                >
                  Alternate Phone Number</label
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
                 required class="p-2 border border-gray-500 w-full"
              />
            </div>
          </div>
        </div>
        <div class="mb-4">
          <label
            for="address"
            class=" flex flex-row text-md text-black-800 mb-2 block font-semibold"
            >Home Address 
            <div class=" flex mx-1 text-red-500">*</div>
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
            for="dropdown"
            class="flex flex-row text-md text-black-800 mx-1 mb-2 block font-semibold"
            >State
            <div class=" flex mx-1 text-red-500">*</div>
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
        <div class="mb-4">
          <label
            for="dropdown"
            class="flex flex-row text-md text-black-800 mx-1 mb-2 block font-semibold"
            >Local Government
            <div class=" flex mx-1 text-red-500">*</div>
            </label>
          <select
            name="dropdown"
            id="dropdown"
            class="border border-gray-500  p-2 bg-[#EEEEEE] w-full">

            <option value="option1">Gombi</option>
            <option value="option2">Kafancha</option>
            <option value="option3">ikot-Ikpe</option>
          </select>
        </div>
        <div class="mb-4">
          <label
            for="address"
            class="flex flex-row text-md text-black-800 mb-2 block font-semibold"
          >
            Country of Origin
            <div class=" flex mx-1 text-red-500">*</div>
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
            class="flex flex-row text-md text-black-800 mx-1 mb-2 block font-semibold"
            >State of Origin
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
        <div class="mb-4">
          <label
            for="dropdown"
            class="flex flex-row text-md text-black-800 mx-1 mb-2 block font-semibold"
            >Local Government
             <div class="flex mx-1 text-red-500">*</div>
            </label>
          <select
            name="dropdown"
            id="dropdown"
           class="border border-gray-500  p-2 bg-[#EEEEEE] w-full">

            <option value="option1">Gombi</option>
            <option value="option2">Kafancha</option>
            <option value="option3">ikot-Ikpe</option>
          </select>
        </div>
      </div>
      <h2
        class="text-black-300 bg-white-600 font-[Source Sans Pro] my-5 flex w-full flex-row rounded-md p-2 text-[15px] font-semibold"
      >
        Emergency Contact
      </h2>
      <div class="grid grid-cols-3 gap-2">
        <div class="mb-4">
          <label
            for="dropdown"
            class="flex flex-row text-md text-black-800 mb-2 block font-semibold"
            >Title
             <div class="flex mx-1 text-red-500">*</div>
            </label>
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
          <label
            for="name"
            class="flex flex-row text-md text-black-800 mx-1 mb-2 block font-semibold"
            >Contact First Name
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
            class="flex flex-row text-md text-black-800 mx-1 mb-2 block font-semibold"
            >Contact Last Name
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
            for="dropdown"
            class="flex flex-row text-md text-black-800 mb-2 block font-semibold"
            >Relationship
             <div class="flex mx-1 text-red-500">*</div>
            </label>
          <select
            name="dropdown"
            id="dropdown"
           class="border border-gray-500  p-2 bg-[#EEEEEE] w-full">

            <option value="option1">Sibling</option>
            <option value="option2">Spouse</option>
            <option value="option3">Friend</option>
          </select>
        </div>
        <div class="mb-4">
          <label
            for="name"
            class="flex flex-row text-md text-black-800 mx-1 mb-2 block font-semibold"
            >Email Address
             <div class="flex mx-1 text-red-500">*</div>
            </label>
          <input
            type="email"
            id="field1"
            name="field1"
            required class="p-2 border border-gray-500 w-full"
          />
        </div>
        <div class="mb-4">
          <div>
            <label
              for="price"
              class=" flex flex-row text-md text-black-800 mx-1 block font-semibold leading-6"
              >Phone Number
               <div class="flex mx-1 text-red-500">*</div>
              </label>
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
          <label
            for="name"
            class="flex flex-row text-md text-black-800 mx-1 mb-2 block font-semibold"
            >Address
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
            for="dropdown"
            class="flex flex-row text-md text-black-800 mb-2 block font-semibold"
            >Country
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
            class="flex flex-row text-md text-black-800 mx-1 mb-2 block font-semibold"
            >State of Origin
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
    </div>
  </div>
</template>
