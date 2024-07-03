<template>
  <AppModal>
    <template #modal-content>
      <form>
        <button
          class="my-6 ml-auto grid h-10 w-10 place-content-center rounded-full border border-primary text-xl text-primary"
          type="button"
        >
          𝖷
        </button>

        <section class="space-y-5">
          <div class="mb-10 w-full bg-[#D50036] p-3 text-white">
            <p>Leave Request</p>
          </div>
          <div class="w-full border border-b-4 border-gray-200">
            <div class="flex flex-row bg-gray-200">
              <div class="grid grid-cols-2 border-b-white">
                <div class="mb-4 border-b-white">
                  <label
                    for="name"
                    class="text-md text-black-500 font-regular mx-2 my-2 mb-2"
                    >Request Type</label
                  >
                </div>
                <div class="mb-4">
                  <label
                    for="name"
                    class="text-md text-black-800 mx-24 my-2 mb-2 font-light"
                    >Annual Leave</label
                  >
                </div>
              </div>
            </div>
            <div class="flex flex-row">
              <div class="grid grid-cols-2 border-b-white">
                <div class="mb-4 border-b-white">
                  <label
                    for="name"
                    class="text-md text-black-500 font-regular mx-2 my-2 mb-2"
                    >Start and End Date</label
                  >
                </div>
                <div class="mb-4">
                  <label
                    for="name"
                    class="text-md text-black-800 mx-7 my-2 mb-2 font-light"
                    >10th November - 15 December 2023</label
                  >
                </div>
              </div>
            </div>
            <div class="flex flex-row bg-gray-200">
              <div class="grid grid-cols-2 border-b-white">
                <div class="mb-4 border-b-white">
                  <label
                    for="name"
                    class="text-md text-black-500 font-regular mx-2 my-2 mb-2"
                    >No of Work Days</label
                  >
                </div>
                <div class="mb-4">
                  <label
                    for="name"
                    class="text-md text-black-800 mx-28 my-2 mb-2 font-light"
                    >10 days</label
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-1">
            <div class="mb-4">
              <label
                for="dropdown"
                class="text-md text-black-800 mb-2 block font-semibold"
                >Is the Leave Request Approved</label
              >
              <select
                name="dropdown"
                id="dropdown"
                class="h-[60px] w-full rounded-md border p-2"
              >
                <option value="option1">Yes</option>
                <option value="option2">No</option>
                <option value="option3">Pending</option>
              </select>
            </div>
          </div>
          <div class="flex flex-col">
            <div class="mb-4">
              <div>
                <label for="name" class="font-semibold">Response(s)</label>
              </div>
              <textarea
                id="comment"
                rows="4"
                class="my-2 w-full rounded-md border-gray-200 text-sm text-gray-900 focus:outline-none focus:ring-0 dark:bg-white dark:text-black dark:placeholder-gray-400"
                required
              ></textarea>
            </div>
          </div>
          <div
            class="my-20 mr-10 flex flex-row items-center justify-center gap-4"
          >
            <button
              class="border-suburbanblack h-[51px] w-[121px] rounded-md border border-solid pb-3.5 pl-7 pr-7 pt-3.5"
            >
              Cancel
            </button>
            <router-link to="">
              <button
                class="h-[51px] w-[121px] rounded-md border border-solid border-[transparent] bg-[#D50036] pb-3.5 pl-7 pr-7 pt-3.5 text-white"
              >
                Send
              </button>
            </router-link>
          </div>
        </section>
      </form>
    </template>
  </AppModal>
</template>
<script setup>
import AppModal from '../../AppModal.vue'
</script>
