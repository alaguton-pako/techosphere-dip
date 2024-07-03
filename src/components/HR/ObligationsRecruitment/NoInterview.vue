<template>
  <div class="mb-4">
    <div class="mx-1 my-2 flex flex-row font-semibold text-black">
      Did the interview hold?
      <div class="mx-1 text-red-500">*</div>
    </div>
    <select
      name="dropdown"
      id="dropdown"
      class="h-[60px] w-full rounded-md border border-gray-300 p-2"
    >
      <option value="option1">No</option>
      <option value="option1">Yes</option>
    </select>
  </div>
  <div class="mb-4">
    <div class="mx-1 my-2 flex flex-row font-semibold text-black">
      Reason(s)
      <div class="mx-1 text-red-500">*</div>
    </div>
    <input
      type="text"
      id="field1"
      name="field1"
      class="h-[60px] w-full rounded-md border p-2"
    />
  </div>
  <div class="mb-4">
    <div class="mx-1 my-2 flex flex-row font-semibold text-black">
      Is another interview needed?
      <div class="mx-1 text-red-500">*</div>
    </div>
    <select
      name="dropdown"
      id="dropdown"
      class="h-[60px] w-full rounded-md border border-gray-300 p-2"
    >
      <option value="option1">Yes</option>
      <option value="option1">No</option>
    </select>
  </div>
</template>
