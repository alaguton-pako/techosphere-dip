<template>
  <app-layout>
    <template v-slot:main-content>
      <main class="w-full bg-[#F5F5F5] pl-[260px]">
        <AppHorizontalNavigation />
        <ChevronBack @click="navigateBack" />
        <section class="p-10">
          <section>
            <div class="flex flex-row gap-4">
              <div
                class="bg-white rounded-md flex w-1/2 h-1/2 border border-gray-50 shadow-sm p-3 flex-col"
              >
                <div
                  class="font-semibold font-[Source Sans Pro] text-gray-400 text-[12px]"
                >
                  OPERATIONAL READINESS READING
                </div>
                <div class="flex flex-row space-x-40">
                  <div class="font-bold text-[20px]">Equipment $ Materials Checklist</div>
                  <div class="font-normal font-[Source Sans Pro] text-[15px]">
                    <!-- {{ operation.percentage }} -->
                    15%
                  </div>
                </div>
                <div class="flex flex-row justify-start mt-8">
                  <div class="w-3/12 cursor-pointer">
                    <input type="checkbox" class="w-full h-[20px]" />
                  </div>

                  <div class="w-6/12">
                    <div class="font-light font-['Source Sans Pro']">
                      Equipment & Material
                      <!-- {{ operation.item }} -->
                    </div>
                  </div>
                </div>
                <div class="flex flex-row justify-start mt-5">
                  <div class="w-3/12 cursor-pointer">
                    <input type="checkbox" class="w-full h-[20px]" />
                  </div>

                  <div class="w-6/12">
                    <div class="font-light font-['Source Sans Pro']">
                      Equipment & Material
                      <!-- {{ operation.item }} -->
                    </div>
                  </div>
                </div>
                <div class="flex flex-row justify-start mt-5">
                  <div class="w-3/12 cursor-pointer">
                    <input type="checkbox" class="w-full h-[20px]" />
                  </div>

                  <div class="w-6/12">
                    <div class="font-light font-['Source Sans Pro']">
                      Equipment & Material
                      <!-- {{ operation.item }} -->
                    </div>
                  </div>
                </div>
                <div class="mb-4 mt-5 p-5">
                  <div>
                    <label for="name" class="font-semibold text-gray-400">Comment</label>
                  </div>
                  <textarea
                    id="comment"
                    class="w-full rounded-md border border-gray-200 p-2 text-sm text-gray-900 focus:outline-none focus:ring-0 dark:bg-white dark:text-black dark:placeholder-gray-400"
                    required
                  ></textarea>
                </div>
              </div>
              <div
                class="bg-white rounded-md flex w-1/2 h-1/2 border border-gray-50 shadow-sm p-3 flex-col"
              >
                <div
                  class="font-semibold font-[Source Sans Pro] text-gray-400 text-[12px]"
                >
                  OPERATIONAL READINESS READING
                </div>
                <div class="flex flex-row space-x-72">
                  <div class="font-bold text-[20px]">Task Checklist</div>
                  <div class="font-normal font-[Source Sans Pro] text-[15px]">
                    <!-- {{ operation.percentage }} -->
                    55%
                  </div>
                </div>
                <div class="flex flex-row justify-start mt-8">
                  <div class="w-3/12 cursor-pointer">
                    <input type="checkbox" class="w-full h-[20px]" />
                  </div>

                  <div class="w-6/12">
                    <div class="font-light font-['Source Sans Pro']">
                      Equipment & Material
                      <!-- {{ operation.item }} -->
                    </div>
                  </div>
                </div>
                <div class="flex flex-row justify-start mt-5">
                  <div class="w-3/12 cursor-pointer">
                    <input type="checkbox" class="w-full h-[20px]" />
                  </div>

                  <div class="w-6/12">
                    <div class="font-light font-['Source Sans Pro']">
                      Equipment & Material
                      <!-- {{ operation.item }} -->
                    </div>
                  </div>
                </div>
                <div class="flex flex-row justify-start mt-5">
                  <div class="w-3/12 cursor-pointer">
                    <input type="checkbox" class="w-full h-[20px]" />
                  </div>

                  <div class="w-6/12">
                    <div class="font-light font-['Source Sans Pro']">
                      Equipment & Material
                      <!-- {{ operation.item }} -->
                    </div>
                  </div>
                </div>
                <div class="mb-4 mt-5 p-5">
                  <div>
                    <label for="name" class="font-semibold text-gray-400">Comment</label>
                  </div>
                  <textarea
                    id="comment"
                    class="w-full rounded-md border border-gray-200 p-2 text-sm text-gray-900 focus:outline-none focus:ring-0 dark:bg-white dark:text-black dark:placeholder-gray-400"
                    required
                  ></textarea>
                </div>
              </div>
            </div>
            <div class="flex flex-row gap-4 mt-12">
              <div
                class="bg-white rounded-md flex w-1/2 h-1/2 border border-gray-50 shadow-sm p-3 flex-col"
              >
                <div
                  class="font-semibold font-[Source Sans Pro] text-gray-400 text-[12px]"
                >
                  OPERATIONAL READINESS READING
                </div>
                <div class="flex flex-row space-x-28">
                  <div class="font-bold text-[20px]">
                    Transportation $ Logistics Checklist
                  </div>
                  <div class="font-normal font-[Source Sans Pro] text-[15px]">
                    <!-- {{ operation.percentage }} -->
                    80%
                  </div>
                </div>
                <div class="flex flex-row justify-start mt-8">
                  <div class="w-3/12 cursor-pointer">
                    <input type="checkbox" class="w-full h-[20px]" />
                  </div>

                  <div class="w-6/12">
                    <div class="font-light font-['Source Sans Pro']">
                      Equipment & Material
                      <!-- {{ operation.item }} -->
                    </div>
                  </div>
                </div>
                <div class="flex flex-row justify-start mt-8">
                  <div class="w-3/12 cursor-pointer">
                    <input type="checkbox" class="w-full h-[20px]" />
                  </div>

                  <div class="w-6/12">
                    <div class="font-light font-['Source Sans Pro']">
                      Equipment & Material
                      <!-- {{ operation.item }} -->
                    </div>
                  </div>
                </div>
                <div class="flex flex-row justify-start mt-8">
                  <div class="w-3/12 cursor-pointer">
                    <input type="checkbox" class="w-full h-[20px]" />
                  </div>

                  <div class="w-6/12">
                    <div class="font-light font-['Source Sans Pro']">
                      Equipment & Material
                      <!-- {{ operation.item }} -->
                    </div>
                  </div>
                </div>
                <div class="mb-4 mt-5 p-5">
                  <div>
                    <label for="name" class="font-semibold text-gray-400">Comment</label>
                  </div>
                  <textarea
                    id="comment"
                    class="w-full rounded-md border border-gray-200 p-2 text-sm text-gray-900 focus:outline-none focus:ring-0 dark:bg-white dark:text-black dark:placeholder-gray-400"
                    required
                  ></textarea>
                </div>
              </div>
              <div
                class="bg-white rounded-md flex w-1/2 h-1/2 border border-gray-50 shadow-sm p-3 flex-col"
              >
                <div
                  class="font-semibold font-[Source Sans Pro] text-gray-400 text-[12px]"
                >
                  OPERATIONAL READINESS READING
                </div>
                <div class="flex flex-row space-x-64">
                  <div class="font-bold text-[20px]">Schedule Checklist</div>
                  <div class="font-normal font-[Source Sans Pro] text-[15px]">
                    <!-- {{ operation.percentage }} -->
                    75%
                  </div>
                </div>
                <div class="flex flex-row justify-start mt-8">
                  <div class="w-3/12 cursor-pointer">
                    <input type="checkbox" class="w-full h-[20gitpx]" />
                  </div>

                  <div class="w-6/12">
                    <div class="font-light font-['Source Sans Pro']">
                      Equipment & Material
                      <!-- {{ operation.item }} -->
                    </div>
                  </div>
                </div>
                <div class="flex flex-row justify-start mt-8">
                  <div class="w-3/12 cursor-pointer">
                    <input type="checkbox" class="w-full h-[20px]" />
                  </div>

                  <div class="w-6/12">
                    <div class="font-light font-['Source Sans Pro']">
                      Equipment & Material
                      <!-- {{ operation.item }} -->
                    </div>
                  </div>
                </div>
                <div class="flex flex-row justify-start mt-8">
                  <div class="w-3/12 cursor-pointer">
                    <input type="checkbox" class="w-full h-[20px]" />
                  </div>

                  <div class="w-6/12">
                    <div class="font-light font-['Source Sans Pro']">
                      Equipment & Material
                      <!-- {{ operation.item }} -->
                    </div>
                  </div>
                </div>
                <div class="mb-4 mt-5 p-5">
                  <div>
                    <label for="name" class="font-semibold text-gray-400">Comment</label>
                  </div>
                  <textarea
                    id="comment"
                    class="w-full rounded-md border border-gray-200 p-2 text-sm text-gray-900 focus:outline-none focus:ring-0 dark:bg-white dark:text-black dark:placeholder-gray-400"
                    required
                  ></textarea>
                </div>
              </div>
            </div>
          </section>
          <div
            class="mr-10 flex flex-row justify-center place-content-center items-center place-items-center mt-16"
          >
            <button
              @click="$emit('submit', true)"
              class="rounded-md border border-solid border-[transparent] bg-[#D50036] pb-3.5 pl-7 pr-7 pt-3.5"
            >
              Submit
            </button>
          </div>
        </section>
      </main>
    </template>
  </app-layout>
</template>
<script setup>
import AppLayout from "../../../layouts/AppLayout.vue";
import ChevronBack from "../../../components/Field_Operations/ChevronBack.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

function navigateBack() {
  router.back();
}
</script>
