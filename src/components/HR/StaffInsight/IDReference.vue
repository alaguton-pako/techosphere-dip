<template>
  <div class="w-full  p-3">
    <div
      class=" my-3 w-full  border-gray-400 p-6 border "
    >
    <div class="underline my-5"> Identification Type</div>

      <div class="grid grid-cols-3 gap-2 ">
        <div class="mb-4">
          <label
            for="name"
            class="text-md text-black-800 mb-2 block font-semibold"
          >
            Identification Type:</label
          >
          <select
            name="dropdown"
            id="dropdown"
            class=" w-full border p-2 border-gray-400 bg-white"
          >
            <option value="option1">International Passport</option>
            <option value="option2">National Identification</option>
            <option value="option3">Driver's License</option>
          </select>
        </div>

        <div class="mb-4">
          <label
            for="name"
            class="text-md text-black-800 mb-2 block font-semibold"
            >I.D. Number:</label
          >
          <input
            type="text"
            id="field1"
            name="field1"
            class=" w-full  border border-gray-400 p-2"
          />
        </div>
        <div class="mb-4">
          <label
            for="name"
            class="text-md text-black-800 mb-2 block font-semibold"
            >I.D. Expiry Date:</label
          >
          <input
            type="date"
            id="field1"
            name="field1"
            class=" w-full  border border-gray-400 p-2"
          />
        </div>
      </div>
      <div class="my-2 grid-cols-1 gap-4 pb-6 lg:grid-cols-1">
        <div class=" mb-4">
          <label
            for="picture"
            class="mb-2 block text-md font-semibold text-gray-600"
            >Upload Identfcation:</label
          >
          <input
            type="file"
            id="picture"
            name="picture"
            class="h-[60px] w-full border-gray-400 border p-2"
          />
        </div>
      </div>
    </div>


    <div class="w-full  mt-5 border-gray-400 p-6 border">
      <div class="mx-1  w-full  ">
        <p class="underline">Reference Details</p>
        
        
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
             class="flex flex-row text-md text-black-800 mb-2 block font-semibold"
           >Title</label
            >
          <div class="mx-1 text-red-500">*</div>
          </div>
            <select
              name="dropdown"
              id="dropdown"
              class="border border-gray-500  p-2 bg-white w-full">

              <option value="option1">Miss</option>
              <option value="option2">Mr</option>
              <option value="option3">Mrs</option>
            </select>
          </div>
          <div class="mb-4">
            <div class="flex ">
          <label
             for="dropdown"
             class="flex flex-row text-md text-black-800 mb-2 block font-semibold"
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
             class="flex fle-row text-md text-black-800 mb-2 block font-semibold"
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
             class="flex flex-row text-md text-black-800 mb-2 block font-semibold"
           >Gender</label
            >
          <div class="mx-1 text-red-500">*</div>
          </div>
            <select
              name="dropdown"
              id="dropdown"
              class="border border-gray-500  p-2 bg-white w-full">

              <option value="option1">Female</option>
              <option value="option2">Male</option>
              <option value="option3">Others</option>
            </select>
          </div>
          <div class="mb-4">
           <div class="flex ">
          <label
             for="dropdown"
             class="flex flex-row text-md text-black-800 mb-2 block font-semibold"
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
             class="flex flex-row text-md text-black-800 mb-2 block font-semibold"
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
             class="flex flex-row text-md text-black-800 mb-2 block font-semibold"
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
             class="flex flex-row text-md text-black-800 mb-2 block font-semibold"
           >Phone Number</label
            >
          <div class="mx-1 text-red-500">*</div>
          </div>
             <div class="relative mt-2 rounded-md shadow-sm">
              <div class="absolute inset-y-0 left-0 flex items-center">
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
        <div class="mb-4">
          <div>
            <label
              for="price"
              class="flex flex-row text-md text-black-800 mx-1 block font-semibold leading-6"
              > Alternate Phone Number</label
            >
             <div class="relative mt-2 rounded-md shadow-sm">
              <div class="absolute inset-y-0 left-0 flex items-center">
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

      <div class="mx-1 my-10 w-full ">
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
             class="flex flex-row text-md text-black-800 mb-2 block font-semibold"
           >Title</label
            >
          <div class="mx-1 text-red-500">*</div>
          </div>
            <select
              name="dropdown"
              id="dropdown"
              class="border border-gray-500  p-2 bg-white  w-full">

              <option value="option1">Miss</option>
              <option value="option2">Mr</option>
              <option value="option3">Mrs</option>
            </select>
          </div>
          <div class="mb-4">
            <div class="flex ">
          <label
             for="dropdown"
             class="flex flex-row text-md text-black-800 mb-2 block font-semibold"
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
             class="flex fle-row text-md text-black-800 mb-2 block font-semibold"
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
             class="flex flex-row text-md text-black-800 mb-2 block font-semibold"
           >Gender</label
            >
          <div class="mx-1 text-red-500">*</div>
          </div>
            <select
              name="dropdown"
              id="dropdown"
              class="border border-gray-500  p-2 bg-white w-full">

              <option value="option1">Female</option>
              <option value="option2">Male</option>
              <option value="option3">Others</option>
            </select>
          </div>
          <div class="mb-4">
           <div class="flex ">
          <label
             for="dropdown"
             class="flex flex-row text-md text-black-800 mb-2 block font-semibold"
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
             class="flex flex-row text-md text-black-800 mb-2 block font-semibold"
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
             class="flex flex-row text-md text-black-800 mb-2 block font-semibold"
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
             class="flex flex-row text-md text-black-800  block font-semibold"
           >Phone Number</label
            >
          <div class="mx-1 text-red-500">*</div>
          </div>
             <div class="relative mt-2 rounded-md shadow-sm">
              <div class="absolute inset-y-0 left-0 flex items-center">
              
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
        <div class="mb-4">
          <div>
            <label
              for="price"
              class="flex flex-row text-md text-black-800 mx-1 block font-semibold leading-6"
              > Alternate Phone Number</label
            >
             <div class="relative mt-2 rounded-md shadow-sm">
              <div class="absolute inset-y-0 left-0 flex items-center">
             
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
