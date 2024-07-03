<template>
  <div class="mx-3 w-full border border-gray-300 p-10">
    <div class="mx-1 my-8 w-full border-gray-400 p-5">
      <div class="grid grid-cols-3 gap-2">
        <div class="mb-4">
          <label
            for="name"
            class="text-md text-black-800 mb-2 flex flex-row font-semibold"
            >Personal Email
            <div class="mx-1 flex text-red-500">*</div>
          </label>
          <input
            type="text"
            id="field1"
            name="field1"
            required
            class="w-full border border-gray-500 p-2"
          />
        </div>

        <div class="mb-4">
          <div>
            <label
              for="tel"
              class="text-md text-black-800 mx-1 block font-semibold leading-6"
              >Phone Number</label
            >
            <div class="relative mt-2 rounded-md shadow-sm">
              <div class="absolute inset-y-0 left-0 flex items-center">
                <select
                  id="number"
                  name="number"
                  class="w-full border border-gray-500 bg-[#EEEEEE] p-2.5"
                >
                  <option>+1</option>
                  <option>+234</option>
                  <option>+44</option>
                </select>
              </div>

              <input
                type="tel"
                name="number"
                id="number"
                required
                class="w-full border border-gray-500 p-2 px-20"
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
                <select
                  id="number"
                  name="number"
                  class="w-full border border-gray-500 bg-[#EEEEEE] p-2.5"
                >
                  <option>+1</option>
                  <option>+234</option>
                  <option>+44</option>
                </select>
              </div>

              <input
                type="tel"
                name="number"
                id="number"
                required
                class="w-full border border-gray-500 p-2 px-20"
              />
            </div>
          </div>
        </div>

        <div class="mb-4">
          <label
            for="address"
            class="text-md text-black-800 mb-2 flex flex-row font-semibold"
            >Home Address
            <div class="mx-1 flex text-red-500">*</div>
          </label>
          <input
            type="text"
            id="field1"
            name="field1"
            required
            class="w-full border border-gray-500 bg-white p-2"
          />
        </div>
        <div class="mb-4">
          <label
            for="dropdown"
            class="text-md text-black-800 mx-1 mb-2.5 flex flex-row font-semibold"
            >State
            <div class="mx-1 flex text-red-500">*</div>
          </label>
          <select
            name="dropdown"
            id="dropdown"
            class="w-full border border-gray-500 bg-white p-2"
          >
            <option value="option1">Abia</option>
            <option value="option2">Adamawa</option>
            <option value="option3">Akwa-Ibom</option>
          </select>
        </div>
        <div class="mb-4">
          <label
            for="dropdown"
            class="text-md text-black-800 mx-1 mb-2 flex flex-row font-semibold"
            >Local Government
            <div class="mx-1 flex text-red-500">*</div>
          </label>
          <select
            name="dropdown"
            id="dropdown"
            class="w-full border border-gray-500 bg-white p-2.5"
          >
            <option value="option1">Gombi</option>
            <option value="option2">Kafancha</option>
            <option value="option3">ikot-Ikpe</option>
          </select>
        </div>
        <div class="mb-4">
          <label
            for="address"
            class="text-md text-black-800 mb-2 flex flex-row font-semibold"
          >
            Country of Origin
            <div class="mx-1 flex text-red-500">*</div>
          </label>

          <select
            name="dropdown"
            id="dropdown"
            class="w-full border border-gray-500 bg-white p-2.5"
          >
            <option value="option1">Nigeria</option>
            <option value="option2">USA</option>
            <option value="option3">Egypt</option>
          </select>
        </div>
        <div class="mb-4">
          <label
            for="dropdown"
            class="text-md text-black-800 mx-1 mb-2 flex flex-row font-semibold"
            >State of Origin
            <div class="mx-1 flex text-red-500">*</div>
          </label>
          <select
            name="dropdown"
            id="dropdown"
            class="w-full border border-gray-500 bg-white p-2.5"
          >
            <option value="option1">Abia</option>
            <option value="option2">Adamawa</option>
            <option value="option3">Akwa-Ibom</option>
          </select>
        </div>
        <div class="mb-4">
          <label
            for="dropdown"
            class="text-md text-black-800 mx-1 mb-2 flex flex-row font-semibold"
            >Local Government
            <div class="mx-1 flex text-red-500">*</div>
          </label>
          <select
            name="dropdown"
            id="dropdown"
            class="w-full border border-gray-500 bg-white p-2.5"
          >
            <option value="option1">Gombi</option>
            <option value="option2">Kafancha</option>
            <option value="option3">ikot-Ikpe</option>
          </select>
        </div>
      </div>

      <h2
        class="text-black-300 bg-white-600 font-[Source Sans Pro] my-5 flex w-full flex-row rounded-md text-[18px] font-semibold underline"
      >
        Emergency Contact
      </h2>

      <div class="grid grid-cols-3 gap-2">
        <div class="mb-4">
          <label
            for="dropdown"
            class="text-md text-black-800 mb-2 flex flex-row font-semibold"
            >Title
            <div class="mx-1 flex text-red-500">*</div>
          </label>
          <select
            name="dropdown"
            id="dropdown"
            class="w-full border border-gray-500 bg-white p-2.5"
          >
            <option value="option1">Miss</option>
            <option value="option2">Mr</option>
            <option value="option3">Mrs</option>
          </select>
        </div>
        <div class="mb-4">
          <label
            for="name"
            class="text-md text-black-800 mx-1 mb-2 flex flex-row font-semibold"
            >Contact First Name
            <div class="mx-1 flex text-red-500">*</div>
          </label>
          <input
            type="text"
            id="field1"
            name="field1"
            required
            class="w-full border border-gray-500 p-2"
          />
        </div>
        <div class="mb-4">
          <label
            for="name"
            class="text-md text-black-800 mx-1 mb-2 flex flex-row font-semibold"
            >Contact Last Name
            <div class="mx-1 flex text-red-500">*</div>
          </label>
          <input
            type="text"
            id="field1"
            name="field1"
            required
            class="w-full border border-gray-500 p-2"
          />
        </div>
        <div class="mb-4">
          <label
            for="dropdown"
            class="text-md text-black-800 mb-2 flex flex-row font-semibold"
            >Relationship
            <div class="mx-1 flex text-red-500">*</div>
          </label>
          <select
            name="dropdown"
            id="dropdown"
            class="w-full border border-gray-500 bg-white p-2.5"
          >
            <option value="option1">Sibling</option>
            <option value="option2">Spouse</option>
            <option value="option3">Friend</option>
          </select>
        </div>
        <div class="mb-4">
          <label
            for="name"
            class="text-md text-black-800 mx-1 mb-2 flex flex-row font-semibold"
            >Email Address
            <div class="mx-1 flex text-red-500">*</div>
          </label>
          <input
            type="email"
            id="field1"
            name="field1"
            required
            class="w-full border border-gray-500 p-2"
          />
        </div>
        <div class="mb-4">
          <div>
            <label
              for="tel"
              class="text-md text-black-800 mx-1 block font-semibold leading-6"
              >Phone Number</label
            >
            <div class="relative mt-2 rounded-md shadow-sm">
              <div class="absolute inset-y-0 left-0 flex items-center">
                <select
                  id="number"
                  name="number"
                  class="w-full border border-gray-500 bg-[#EEEEEE] p-2.5"
                >
                  <option>+1</option>
                  <option>+234</option>
                  <option>+44</option>
                </select>
              </div>

              <input
                type="tel"
                name="number"
                id="number"
                required
                class="w-full border border-gray-500 p-2 px-20"
              />
            </div>
          </div>
        </div>
        <div class="mb-4">
          <label
            for="name"
            class="text-md text-black-800 mx-1 mb-2.5 flex flex-row font-semibold"
            >Address
            <div class="mx-1 flex text-red-500">*</div>
          </label>
          <input
            type="text"
            id="field1"
            name="field1"
            required
            class="w-full border border-gray-500 p-2"
          />
        </div>
        <div class="mb-4">
          <label
            for="dropdown"
            class="text-md text-black-800 mb-2 flex flex-row font-semibold"
            >Country
            <div class="mx-1 flex text-red-500">*</div>
          </label>
          <select
            name="dropdown"
            id="dropdown"
            class="w-full border border-gray-500 bg-white p-2.5"
          >
            <option value="option1">Nigeria</option>
            <option value="option2">USA</option>
            <option value="option3">Egypt</option>
          </select>
        </div>

        <div class="mb-4">
          <label
            for="dropdown"
            class="text-md text-black-800 mx-1 mb-2 flex flex-row font-semibold"
            >State of Origin
            <div class="mx-1 flex text-red-500">*</div>
          </label>
          <select
            name="dropdown"
            id="dropdown"
            class="w-full border border-gray-500 bg-white p-2.5"
          >
            <option value="option1">Abia</option>
            <option value="option2">Adamawa</option>
            <option value="option3">Akwa-Ibom</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup></script>
