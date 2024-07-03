<template>
  <div class="flex w-[770px] justify-between bg-white">
    <div class="rounded-md p-8">
      <p class="mb-4 text-xl font-bold">Onboarding</p>
      <div class="mb-4 flex space-x-3">
        <span class="font-semibold">Legend Academy:</span>
        <span class="italic text-primary"
          >Click here to redirect to Academy</span
        >
      </div>
      <div class="flex space-x-3">
        <span class="mb-2 font-semibold">Standard Operating Procedure:</span>
        <div class="flex">
          <img src="#" alt="" />
          <span class="mx-2 italic text-gray-500 underline"> Download</span>
        </div>
      </div>
      <div class="flex space-x-24">
        <span class="font-semibold">Obligations Summary:</span>
        <span class="italic text-gray-500">Mark as “Understood”</span>
      </div>
      <ol class="mx-6 list-decimal space-y-2 grid grid-cols-2 space-x-4">
          <li class="flex flex-col space-y-0.5">
            <label for="a" class="">Customer Account Management</label>
            <label for="b" class="">Customer Billing</label>
            <label for="c" class="">Revenue Accounting</label>
            <label for="d" class="">Credit Control</label>
          </li>
          <li class="flex flex-col space-y-3">
            <input type="radio" name="" id="a" class="accent-primary" />
            <input type="radio" name="" id="b" class="accent-primary" />
            <input type="radio" name="" id="c" class="accent-primary" />
            <input type="radio" name="" id="d" class="accent-primary" />
          </li>
         
        </ol>
    </div>
    <div class="p-10 font-semibold">
      <p>Completion Status:</p>
    </div>
  </div>
  <section class="rounded-md">
    <div class="mt-4 w-[770px] justify-between rounded-md bg-white">
      <div
        class="flex h-12 w-full flex-row gap-5 bg-black p-3 text-center font-normal text-gray-300 underline"
      >
        Bank Details
      </div>
      <div class="my-1 w-full border-gray-400">
        <div class="grid grid-cols-1 border-b-white">
          <div class="grid grid-cols-2">
            <div class="mb-4">
              <label
                for="name"
                class="text-md text-black-800 mx-2 my-2 mb-2 block font-semibold"
                >Bank Name:</label
              >
            </div>
            <div class="mb-4">
              <label
                for="name"
                class="text-md text-black-800 mx-2 my-2 mb-2 block font-light"
                >Fedeth MFB</label
              >
            </div>
          </div>
          <div class="grid grid-cols-2">
            <div class="mb-4">
              <label
                for="name"
                class="text-md text-black-800 mx-2 my-2 mb-2 block font-semibold"
                >Account Number:</label
              >
            </div>
            <div class="mb-4">
              <label
                for="name"
                class="text-md text-black-800 mx-2 my-2 mb-2 block font-light"
                >0027004569</label
              >
            </div>
          </div>
        </div>

        <div
          class="flex h-12 w-full flex-row gap-5 bg-black p-3 text-center font-normal text-gray-300 underline"
        >
          Payslips
        </div>
        <table
          class="w-full table-auto border border-secondary bg-white text-sm"
        >
          <thead class="bg-gray-200">
            <tr class="border border-secondary capitalize">
              <th class="border border-secondary p-3">SN</th>
              <th class="border border-secondary p-2">Description</th>
              <th class="border border-secondary p-3">Reference Number</th>
              <th class="border border-secondary p-3">Created</th>
              <th class="border border-secondary p-3">Amount</th>
              <th class="border border-secondary p-3">Status</th>
              <th class="border border-secondary p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-secondary p-3">1.</td>
              <td class="border border-secondary p-3 text-center">
                December 2023
              </td>
              <td class="border border-secondary p-3 text-center">PS708</td>
              <td class="border border-secondary p-3 text-center">
                Dec 22, 2023
              </td>
              <td class="border border-secondary p-3 text-center">#300,890</td>
              <td class="border border-secondary p-3 text-center">
                <div
                  class="py-3 border border-green-300 text-center text-green-300"
                >
                  PAID
                </div>
              </td>
              <td class="border border-secondary p-3 text-center underline">
                <router-link to="/components/viewslip"> View </router-link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>
