<template>
  <div class="mx-3 w-full border border-gray-300 p-5">
    <div class="mx-1 my-10 w-full border-gray-400 p-5">
      <div class="grid grid-cols-3 gap-6">
        <div class="">
          <label
            for="dropdown"
            class="text-md text-black-800 mb-2 flex flex-row font-semibold"
            >Contract Type
            <div class="mx-1 text-red-500">*</div>
          </label>
          <select
            name="dropdown"
            id="dropdown"
            class="border border-gray-500 bg-white p-2 w-full"
          >
            <option value="option1">Temporary Intern</option>
            <option value="option2">Full-Trm Staff</option>
            <option value="option3">Contract Staff</option>
          </select>
        </div>
        <div class="mb-4">
          <label
            for="dropdown"
            class="text-md text-black-800 mb-2 flex flex-row font-semibold"
            >Contract Tenure
            <div class="mx-1 text-red-500">*</div>
          </label>
          <select
            name="dropdown"
            id="dropdown"
            class="border border-gray-500 bg-white p-2 w-full"
          >
            <option value="option1">1 month</option>
            <option value="option2">2 years</option>
            <option value="option3">3 months</option>
          </select>
        </div>
        <div class="mb-4">
          <label
            for="name"
            class="text-md text-black-800 mb-2 flex flex-row font-semibold"
            >Date of Employment
            <div class="mx-1 text-red-500">*</div>
          </label>
          <input
            type="date"
            id="field1"
            name="field1"
            required
            class="w-full border border-gray-500 p-2"
          />
        </div>
        <div class="mb-4">
          <label
            for="name"
            class="text-md text-black-800 mb-2 flex flex-row font-semibold"
            >Date of Confirmation
            <div class="mx-1 text-red-500">*</div>
          </label>
          <input
            type="date"
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
            >Working Hours
            <div class="mx-1 text-red-500">*</div>
          </label>
          <select
            name="dropdown"
            id="dropdown"
            class="border border-gray-500 bg-white p-2 w-full"
          >
            <option value="option1">Regular(9am-5pm)</option>
            <option value="option2">Night Shift(7pm-05am)</option>
            <option value="option3">Remote Work</option>
          </select>
        </div>
        <div class="mb-4">
          <label
            for="name"
            class="text-md text-black-800 mb-2 flex flex-row font-semibold"
            >Basic Salary
            <div class="mx-1 text-red-500">*</div>
          </label>
          <input
            type="Number"
            id="field1"
            name="field1"
            required
            class="w-full border border-gray-500 p-2"
          />
        </div>
        <div class="mb-4">
          <label
            for="name"
            class="text-md text-black-800 mb-2 flex flex-row font-semibold"
            >Gross Annual Salary
            <div class="mx-1 text-red-500">*</div>
          </label>
          <input
            type="Number"
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
            >Entitled to Benefits
            <div class="mx-1 text-red-500">*</div>
          </label>
          <select
            name="dropdown"
            id="dropdown"
            class="border border-gray-500 bg-white p-2 w-full"
          >
            <option value="option1">Yes</option>
            <option value="option2">No</option>
            <option value="option3">Undecided</option>
          </select>
        </div>
        <div class="mb-4">
          <label
            for="name"
            class="text-md text-black-800 mb-2 flex flex-row font-semibold"
            >PAYE
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
        <div class="mb-4">
          <label
            for="name"
            class="text-md text-black-800 mb-2 flex flex-row font-semibold"
            >Bank Name
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
        <div class="mb-4">
          <label
            for="name"
            class="text-md text-black-800 mb-2 flex flex-row font-semibold"
            >Account Number
            <div class="mx-1 text-red-500">*</div>
          </label>
          <input
            type="number"
            id="field1"
            name="field1"
            required
            class="w-full border border-gray-500 p-2"
          />
        </div>
      </div>
    </div>
    <div class="my-2 grid-cols-1 gap-4 pb-6 lg:grid-cols-1">
      <div class="mx-2 mb-4">
        <label
          for="picture"
          class="mb-2 flex flex-row text-base font-semibold text-gray-600"
          >Upload Signed Contract:
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
</template>
<script setup></script>
