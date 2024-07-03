<template>
  <app-layout>
    <template v-slot:main-content>
      <main class="w-full bg-[#F5F5F5] pl-[260px]">
        <AppHorizontalNavigation />
        <ChevronBack @click="navigateBack" />
        <div class="mx-3 w-full border border-gray-300 p-12">
          <div class="mx-1 my-1 w-full border-gray-400 p-5">
            <div class="mb-4">
              <nav
                class="text-black-300 font-[Source Sans Pro] mt-1 flex w-full flex-row rounded-md border p-2 text-[25px] font-bold"
              >
                <div>
                  <h2>Splitter Information</h2>
                </div>
              </nav>
            </div>
            <div class="">
              <div class="flex flex-row">
                <div class="mb-4 mt-1 w-1/2 rounded-md border p-2">Customer Name:</div>
                <div class="mb-3 w-1/2">
                  <input
                    :value="splitter.name"
                    type="readonly"
                    id="field3"
                    name="field3"
                    class="mt-1 w-full rounded-md border p-2"
                    readonly
                  />
                </div>
              </div>
              <div class="flex flex-row">
                <div class="mb-4 mt-1 w-1/2 rounded-md border p-2">Customer Address:</div>
                <div class="mb-3 w-1/2">
                  <input
                    :value="splitter.address"
                    type="readonly"
                    id="field3"
                    name="field3"
                    class="mt-1 w-full rounded-md border p-2"
                    readonly
                  />
                </div>
              </div>
              <div class="flex flex-row">
                <div class="mb-4 mt-1 w-1/2 rounded-md border p-2">Customer Contact:</div>
                <div class="mb-3 w-1/2">
                  <input
                    :value="splitter.contact"
                    type="readonly"
                    id="field3"
                    name="field3"
                    class="mt-1 w-full rounded-md border p-2"
                    readonly
                  />
                </div>
              </div>
              <div class="flex flex-row">
                <div class="mb-4 mt-1 w-1/2 rounded-md border p-2">Installed On:</div>
                <div class="mb-3 w-1/2">
                  <input
                    :value="splitter.installed_on"
                    type="readonly"
                    id="field3"
                    name="field3"
                    class="mt-1 w-full rounded-md border p-2"
                    readonly
                  />
                </div>
              </div>
              <div class="flex flex-row">
                <div class="mb-4 mt-1 w-1/2 rounded-md border p-2">Installer:</div>
                <div class="mb-3 w-1/2">
                  <input
                    :value="splitter.installer"
                    type="readonly"
                    id="field3"
                    name="field3"
                    class="mt-1 w-full rounded-md border p-2"
                    readonly
                  />
                </div>
              </div>
              <div class="flex flex-row">
                <div class="mb-4 mt-1 w-1/2 rounded-md border p-2">Splitter:</div>
                <div class="mb-3 w-1/2">
                  <input
                    :value="splitter.splitter"
                    type="readonly"
                    id="field3"
                    name="field3"
                    class="mt-1 w-full rounded-md border p-2"
                    readonly
                  />
                </div>
              </div>
              <div class="flex flex-row">
                <div class="mb-4 mt-1 w-1/2 rounded-md border p-2">Ticket ID:</div>
                <div class="mb-3 w-1/2">
                  <input
                    :value="splitter.ticket_id"
                    type="readonly"
                    id="field3"
                    name="field3"
                    class="mt-1 w-full rounded-md border p-2"
                    readonly
                  />
                </div>
              </div>
              <div class="flex flex-row">
                <div class="mb-4 mt-1 w-1/2 rounded-md border p-2">Mobilization:</div>
                <div class="mb-3 w-1/2">
                  <input
                    :value="splitter.mobilization"
                    type="readonly"
                    id="field3"
                    name="field3"
                    class="mt-1 w-full rounded-md border p-2"
                    readonly
                  />
                </div>
              </div>
              <div class="flex flex-row">
                <div class="mb-4 mt-1 w-1/2 rounded-md border p-2">Status:</div>
                <div class="mb-3 w-1/2">
                  <input
                    :value="splitter.status"
                    type="readonly"
                    id="field3"
                    name="field3"
                    class="mt-1 w-full rounded-md border p-2"
                    readonly
                  />
                </div>
              </div>
              <div class="flex flex-row">
                <div class="mb-4 mt-1 w-1/2 rounded-md border p-2">Installer Notes:</div>
                <div class="mb-3 w-1/2">
                  <input
                    :value="splitter.notes"
                    type="readonly"
                    id="field3"
                    name="field3"
                    class="mt-1 w-full rounded-md border p-2"
                    readonly
                  />
                </div>
              </div>
              <div class="flex flex-row">
                <div class="mb-4 mt-1 w-1/2 rounded-md border p-2">Delays:</div>
                <div class="mb-3 w-1/2">
                  <input
                    :value="splitter.delays"
                    type="readonly"
                    id="field3"
                    name="field3"
                    class="mt-1 w-full rounded-md border p-2"
                    readonly
                  />
                </div>
              </div>
            </div>
            <div>
              <div class="font-semibold text-[#D50036] mt-14 text-[25px]">
                Upload Router Diagram
              </div>
              <div
                class="flex-1 items-center max-w-screen-sm mx-auto mb-3 space-y-4 sm:flex sm:space-y-0 mt-14"
              >
                <div class="relative w-full">
                  <div class="items-center justify-center max-w-xl mx-auto">
                    <label
                      class="flex justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none"
                      id="drop"
                      ><span class="flex items-center space-x-2"
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="w-6 h-6 text-gray-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                          ></path></svg
                        ><span class="font-medium text-gray-600"
                          >Router Diagram, or<span class="text-red-500 underline ml-[4px]"
                            >Add Image</span
                          ></span
                        ></span
                      ><input
                        type="file"
                        name="file_upload"
                        class="hidden"
                        accept="image/png,image/jpeg"
                        id="input"
                        :src="splitter.image"
                    /></label>
                  </div>
                </div>
              </div>
            </div>
            <div class="mb-4 p-2">
              <div>
                <label for="name" class="font-semibold">Comment</label>
              </div>
              <textarea
                id="comment"
                class="my-2 p-2 w-full rounded-md border-0 text-sm text-gray-900 focus:outline-none focus:ring-0 dark:bg-white dark:text-black dark:placeholder-gray-400"
                placeholder="Enter Your Message"
                required
              ></textarea>
            </div>
            <div class="mt-16 mr-10 flex flex-row-reverse">
              <button
                @click="sendForm"
                class="shrink-0 rounded-md bg-[#D50036] border border-solid pb-3.5 pl-6 pr-7 pt-3.5 text-white"
              >
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </main>
    </template>
  </app-layout>
</template>
<script setup>
import AppLayout from "../../layouts/AppLayout.vue";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import ChevronBack from "../../components/Field_Operations/ChevronBack.vue";
import workplaceRequestsv2 from "../../services/workplaceRequestsv2";
const route = useRoute();

onMounted(() => {
  getSplitter();
});

const splitter = ref({
  name: "",
  address: "",
  contact: "",
  installed_on: null,
  installer: "",
  splitter: "",
  ticket_id: null,
  mobilization: "",
  status: "",
  notes: "",
  delays: null,
  image: null,
});

const getSplitter = () => {};
//import DiagnosisDate from '../components/DiagnosisDate'
</script>
