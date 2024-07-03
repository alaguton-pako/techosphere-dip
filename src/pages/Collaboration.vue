<script setup>
import AppLayout from '../layouts/AppLayout.vue'
import HorizontalNavigation from '../components/AppHorizontalNavigation.vue'

</script>

<template lang="">
  <app-layout>
    <template v-slot:main-content>
      <main class="min-h-screen w-full bg-[#F5F5F5] pl-[260px]">
        <section class="p-10">
          <header
            class="mt-12 flex items-center justify-between border border-gray-300 bg-white px-6 py-2"
          >
            <div class="flex items-center">
              <div
                class="relative grid h-[38px] w-[38px] place-content-center rounded-full bg-primary-black font-medium uppercase tracking-wider text-white"
              >
                SO
                <div
                  class="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-[#11B902]"
                ></div>
              </div>
              <div class="ml-3 text-sm font-medium">Ada Lovelace</div>
            </div>
            <div class="flex items-center">
              <div class="mr-3 rounded-md bg-[#D9D9D9] px-2 py-1 text-white">
                #
              </div>
              <div>
                <div class="text-lg font-semibold">general</div>
                <div class="text-sm font-light text-gray-500">100 members</div>
              </div>
            </div>
            <div class="flex items-center">
              <input
                type="search"
                class="w-72 rounded-l-md bg-gray-100 px-4 py-2 focus:outline-none"
              />
              <div
                class="rounded-r-md border border-primary-black bg-primary-black p-2"
              >
                <img src="../assets/search-white.svg" alt="" />
              </div>
            </div>
          </header>
          <main class="grid grid-cols-4 gap-6 text-sm">
            <aside class="border-b border-l border-gray-300">
              <div class="border-b border-gray-300 p-6">
                <h1 class="mb-6 font-semibold text-primary-blue">Channels</h1>
                <div class="my-5 flex items-center">
                  <div class="mr-3 rounded bg-[#D9D9D9] px-1 text-white">#</div>
                  <div class="font-medium">general</div>
                  <div
                    class="ml-auto grid h-[21px] w-[21px] place-content-center rounded-full bg-primary-blue text-xs text-white"
                  >
                    12
                  </div>
                </div>
                <div class="my-5 flex items-center">
                  <div class="mr-3 rounded bg-[#D9D9D9] px-1 text-white">#</div>
                  <div>Suburban Business</div>
                </div>
                <div class="my-5 flex items-center">
                  <div class="mr-3 rounded bg-[#D9D9D9] px-1 text-white">#</div>
                  <div>Customer Care</div>
                </div>
                <div class="my-5 flex items-center">
                  <div class="mr-3 rounded bg-[#D9D9D9] px-1 text-white">#</div>
                  <div>Leads</div>
                </div>
              </div>
              <div class="p-6">
                <div
                  class="mb-6 flex items-center justify-between font-semibold text-primary-blue"
                >
                  <h1>Direct Messages</h1>
                  <div class="text-xl">＋</div>
                </div>
                <div class="my-5 flex items-center">
                  <div class="mr-3 rounded bg-[#D9D9D9] px-1 text-white">#</div>
                  <div class="font-medium">Victor Thompson</div>
                  <div
                    class="ml-auto grid h-[21px] w-[21px] place-content-center rounded-full bg-primary-blue text-xs text-white"
                  >
                    2
                  </div>
                </div>
                <div class="my-5 flex items-center">
                  <div class="mr-3 rounded bg-[#D9D9D9] px-1 text-white">#</div>
                  <div>Ade John</div>
                </div>
                <div class="my-5 flex items-center">
                  <div class="mr-3 rounded bg-[#D9D9D9] px-1 text-white">#</div>
                  <div>John Doe</div>
                </div>
              </div>
            </aside>
            <main class="col-span-3 pl-16 pt-20">
              <div class="my-10 flex items-start">
                <div
                  class="grid h-[38px] w-[38px] flex-shrink-0 place-content-center rounded-full bg-primary-black font-medium uppercase tracking-wider text-white"
                >
                  AJ
                </div>
                <div class="ml-3 border-l border-primary-black px-4 py-1">
                  <div class="flex items-center">
                    <span class="mr-5 font-medium">Ade John</span>
                    <span class="text-xs text-gray-500">09:00 AM</span>
                  </div>
                  <div>
                    Lorem ipsum dolor sit amet consectetur. Et dui neque et
                    fames volutpat. Vulputate feugiat nisl diam nec cursus
                    malesuada. Viverra laoreet faucibus
                  </div>
                  <div class="mt-3 flex items-center">
                    <span
                      class="flex items-center rounded-md bg-gray-300 px-4 py-2"
                    >
                      <img src="../assets/paperclip-active.svg" alt="" />
                      <span>File.doc</span>
                    </span>
                  </div>
                </div>
              </div>
              <div class="my-10 ml-20 flex items-start">
                <div
                  class="grid h-[38px] w-[38px] flex-shrink-0 place-content-center rounded-full bg-[#D50036] font-medium uppercase tracking-wider text-white"
                >
                  SO
                </div>
                <div class="ml-3 border-l border-primary-black px-4 py-1">
                  <div class="flex items-center">
                    <span class="mr-5 font-medium">Ade John</span>
                    <span class="text-xs text-gray-500">09:00 AM</span>
                  </div>
                  <div>
                    Lorem ipsum dolor sit amet consectetur. Et dui neque et
                    fames volutpat. Vulputate feugiat nisl diam nec cursus
                    malesuada. Viverra laoreet faucibus
                  </div>
                </div>
              </div>
              <div
                class="mt-24 flex items-center rounded-md border border-gray-300 px-6 py-3"
              >
                <img
                  src="../assets/paperclip-inactive.svg"
                  alt=""
                  class="cursor-pointer"
                />
                <img
                  src="../assets/emoji-icon.svg"
                  alt=""
                  class="mx-6 cursor-pointer"
                />
                <textarea
                  type="text"
                  placeholder="Type your Message"
                  class="w-full resize-none bg-transparent pr-6 pt-3 focus:outline-none"
                ></textarea>
                <img
                  src="../assets/send-icon.svg"
                  alt=""
                  class="cursor-pointer"
                />
              </div>
            </main>
          </main>
        </section>
      </main>
    </template>
  </app-layout>
</template>
