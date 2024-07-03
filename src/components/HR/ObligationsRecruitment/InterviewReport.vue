<template>
  <div class="mx-3 w-full border border-gray-300">
    <div class="mx-1 my-4 w-full border-gray-400">
      <div class="grid grid-cols-1">
        <div class="mb-4">
          <div class="mx-1 my-2 flex flex-row font-semibold text-black">
            Did the interview hold?
            <div class="mx-1 text-red-500">*</div>
          </div>
          <select
            name="dropdown"
            id="dropdown"
            class="border border-gray-500 bg-[#EEEEEE] p-2"
          >
            <option value="option1">Yes</option>
            <option value="option1">No</option>
          </select>
        </div>
        <div class="mb-4">
          <div class="mx-1 my-2 flex flex-row font-semibold text-black">
            Is another interview needed?
            <div class="mx-1 text-red-500">*</div>
          </div>
          <select
            name="dropdown"
            id="dropdown"
            class="border border-gray-500 bg-[#EEEEEE] p-2"
          >
            <option value="option1">No</option>
            <option value="option1">Yes</option>
          </select>
        </div>
        <div class="mb-4">
          <div class="mx-1 my-2 flex flex-row font-semibold text-black">
            Is the applicant hired?
            <div class="mx-1 text-red-500">*</div>
          </div>
          <select
            name="dropdown"
            id="dropdown"
            class="border border-gray-500 bg-[#EEEEEE] p-2"
          >
            <option value="option1">Yes</option>
            <option value="option1">No</option>
          </select>
        </div>
      </div>
    </div>
    <div class="gap-4">
      <div class="mx-1 my-4 flex flex-row font-semibold text-black underline text-xl">
        Contract Terms
      </div>
      <div class="my-5 mr-10 flex flex-row-reverse pb-5">
        <router-link to="">
          <button
            class=" shrink-0 rounded-md border border-solid bg-[#D50036] pb-3.5 pl-6 pr-7 pt-3.5 text-white"
          >
            Send to MGT
          </button>
        </router-link>
      </div>
    </div>
    <div class="mx-1 my-4 w-full border-gray-400">
      <div class="grid grid-cols-3 gap-2">
        <div class="mb-4">
          <label
            for="dropdown"
            class="text-md text-black-800 mb-2 flex flex-row font-semibold"
            >Contract Type
            <div class="mx-1 text-red-500">*</div>
          </label>
          <select
            name="dropdown"
            id="dropdown"
            class="border border-gray-500 bg-[#EEEEEE] p-2"
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
            class="border border-gray-500 bg-[#EEEEEE] p-2"
          >
            <option value="option1">1 month</option>
            <option value="option2">2 years</option>
            <option value="option3">3 months</option>
          </select>
        </div>
        <div class="mb-4">
          <label
            for="dropdown"
            class="fle-row text-md text-black-800 mb-2 flex font-semibold"
            >Work Hours
            <div class="mx-1 text-red-500">*</div>
          </label>
          <select
            name="dropdown"
            id="dropdown"
            class="border border-gray-500 bg-[#EEEEEE] p-2"
          >
            <option value="option1">Regular (9am - 5pm)</option>
            <option value="option2">Night Shift</option>
            <option value="option3">Remote</option>
          </select>
        </div>
        <div class="mb-4">
          <label
            for="name"
            class="text-md text-black-800 mb-2 flex flex-row font-semibold"
            >Employment Date
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
            >Start Date
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
            >Probation
            <div class="mx-1 text-red-500">*</div>
          </label>
          <select
            name="dropdown"
            id="dropdown"
            class="border border-gray-500 bg-[#EEEEEE] p-2"
          >
            <option value="option1">6 months</option>
            <option value="option2">3 months</option>
            <option value="option3">1 year</option>
          </select>
        </div>
        <div class="mb-4">
          <label
            for="name"
            class="text-md text-black-800 mb-2 flex flex-row font-semibold"
            >Date of Confirmation
            <div class="mx-1 text-red-500">*</div>
          </label>
          <input
            type="Date"
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
            >Basic Salary
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
            for="dropdown"
            class="text-md text-black-800 mb-2 flex flex-row font-semibold"
            >Entitled to Benefits
            <div class="mx-1 text-red-500">*</div>
          </label>
          <select
            name="dropdown"
            id="dropdown"
            class="border border-gray-500 bg-[#EEEEEE] p-2"
          >
            <option value="option1">Yes</option>
            <option value="option2">No</option>
            <option value="option3">Undecided</option>
          </select>
        </div>
      </div>
    </div>
    <div class="my-4 flex flex-row gap-4">
      <div class="mx-1 my-2 flex flex-row font-semibold text-black underline">
        Benefit Type
        <div class="mx-1 text-red-500">*</div>
      </div>
    </div>
    <div class="mx-1 my-4 w-full border-gray-400">
      <div class="grid grid-cols-5">
        <div class="mb-4 flex flex-row">
          <input
            type="checkbox"
            id="field1"
            name="field1"
            class="h-5 w-5 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
          />
          <label
            for="name"
            class="text-md text-black-800 mx-2 mb-2 block font-semibold"
            >Company Car</label
          >
        </div>
        <div class="mb-4 flex flex-row">
          <input
            type="checkbox"
            id="field1"
            name="field1"
            class="h-5 w-5 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
          />
          <label
            for="name"
            class="text-md text-black-800 mx-2 mb-2 block font-semibold"
            >Housing</label
          >
        </div>
        <div class="mb-4 flex flex-row">
          <input
            type="checkbox"
            id="field1"
            name="field1"
            class="h-5 w-5 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
          />
          <label
            for="name"
            class="text-md text-black-800 mx-2 mb-2 block font-semibold"
            >Medical Insurance</label
          >
        </div>
        <div class="mb-4 flex flex-row">
          <input
            type="checkbox"
            id="field1"
            name="field1"
            class="h-5 w-5 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
          />
          <label
            for="name"
            class="text-md text-black-800 mx-2 mb-2 block font-semibold"
            >Pension</label
          >
        </div>
      </div>
      <div class="grid grid-cols-5">
        <div class="mb-4 flex flex-row">
          <input
            type="checkbox"
            id="field1"
            name="field1"
            class="h-5 w-5 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
          />
          <label
            for="name"
            class="text-md text-black-800 mx-2 mb-2 block font-semibold"
            >Financial Insurance</label
          >
        </div>
        <div class="mb-4 flex flex-row">
          <input
            type="checkbox"
            id="field1"
            name="field1"
            class="h-5 w-5 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
          />
          <label
            for="name"
            class="text-md text-black-800 mx-2 mb-2 block font-semibold"
            >Housing Life Insurance</label
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import InterviewApproved from './InterviewApproved.vue'
</script>
