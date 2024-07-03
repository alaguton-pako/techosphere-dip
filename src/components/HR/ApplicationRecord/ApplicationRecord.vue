<script setup>
import AppHorizontalNavigation from '../../AppHorizontalNavigation.vue'
</script>
<template>
  <app-layout>
    <template v-slot:main-content>
      <main class="min-h-screen w-full bg-[#F5F5F5] pl-[260px]">
        <AppHorizontalNavigation />
        <section class="p-10">
          <div class="flex h-[31px] w-full flex-row bg-white">
            <div class="mx-2 justify-start">
              <div
                class="font-['Source Sans Pro'] text-lg font-normal text-pink-700"
              >
                This week
              </div>
            </div>
            <div class="mx-6">
              <div
                class="font-['Source Sans Pro'] text-lg font-normal text-gray-400"
              >
                Last 30 days
              </div>
            </div>
          </div>
          <div class="mx-3 my-12 w-full border border-gray-300">
            <div class="mx-1 my-4 w-full border-gray-400">
              <div class="flex flex-row gap-4">
                <div class="mx-1 my-2 justify-normal font-normal text-black">
                  Suburban is an Innovative Digital Services and Solutions
                  Provider committed to a vision of building the future of
                  Africa through technology innovation and connecting
                  communities. We adopt a multi-faceted approach to service
                  delivery that cuts across physical infrastructure,
                  cloud/software as a service and professional services
                </div>
              </div>
              <div class="my-2 flex flex-row gap-4">
                <div class="mx-1 justify-normal font-normal text-black">
                  We are currently looking for like-minded individuals to fill
                  the following strategic positions:
                </div>
              </div>

              <div class="my-2 grid w-full grid-cols-2">
                <div class="mx-1 h-auto w-[1020px] border border-gray-400">
                  <div class="grid grid-cols-6">
                    <div
                      class="my-2 w-60 justify-start font-semibold text-pink-700"
                    >
                      MARKETING MANAGER
                    </div>
                    <div>
                      <ul
                        class="mx-2 my-3 w-60 list-inside list-disc text-sm font-thin"
                      >
                        <li>posted on 25 November 2023</li>
                      </ul>
                    </div>

                    <div class="mb-4">
                      <label
                        for="name"
                        class="text-md mx-28 my-2 mb-2 block font-light text-transparent"
                        >Salome</label
                      >
                    </div>
                    <div class="mb-4">
                      <label
                        for="name"
                        class="text-md mx-28 my-2 mb-2 block font-light text-transparent"
                        >Salome</label
                      >
                    </div>
                    <div class="mb-4">
                      <label
                        for="name"
                        class="text-md mx-28 my-2 mb-2 block font-light text-transparent"
                        >Salome</label
                      >
                    </div>
                    <div class="my-2 mr-10 flex flex-row justify-end">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M15.08 9.59L12 12.67L8.92 9.59L7.5 11L12 15.5L16.5 11L15.08 9.59ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z"
                          fill="#5E6268"
                        />
                      </svg>
                    </div>
                  </div>
                  <div class="grid grid-cols-7">
                    <div class="grid grid-cols-2">
                      <div class="mb-4">
                        <label
                          for="name"
                          class="text-md text-black-800 font-regular mx-2 my-2 mb-2 block"
                          >JOB ID:</label
                        >
                      </div>
                      <div class="mb-4">
                        <label
                          for="name"
                          class="text-md text-black-800 my-2 mb-2 block font-extralight"
                          >ST105</label
                        >
                      </div>
                    </div>

                    <div class="grid grid-cols-2">
                      <div class="mb-4">
                        <label
                          for="name"
                          class="text-md text-black-800 font-regular mx-2 my-2 mb-2 block"
                          >LOCATION:</label
                        >
                      </div>
                      <div class="mb-4 justify-start">
                        <label
                          for="name"
                          class="text-md text-black-800 mx-4 my-2 mb-2 block font-extralight"
                          >Abuja</label
                        >
                      </div>
                    </div>
                    <div class="grid grid-cols-2">
                      <div class="mb-4">
                        <label
                          for="name"
                          class="text-md text-black-800 font-regular mx-2 my-2 mb-2 block w-60"
                          >JOB TYPE:</label
                        >
                      </div>
                      <div class="mb-4 justify-start">
                        <label
                          for="name"
                          class="text-md text-black-800 mx-2 my-2 mb-2 block w-60 font-extralight"
                          >Fulltime</label
                        >
                      </div>
                    </div>
                    <div class="grid grid-cols-2">
                      <div class="mb-4">
                        <label
                          for="name"
                          class="text-md text-black-800 font-regular my-2 mb-2 block w-60"
                          >WORKER TYPE:</label
                        >
                      </div>
                      <div class="mb-4 justify-start">
                        <label
                          for="name"
                          class="text-md text-black-800 mx-9 my-2 mb-2 block w-60 font-extralight"
                          >Corps Member(corper)</label
                        >
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-row gap-4">
                    <div class="mx-1 my-2 font-semibold text-black underline">
                      JOB DESCRIPTION
                    </div>
                  </div>
                  <ul class="list-inside list-disc">
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </li>
                  </ul>
                </div>
                <div class="mr-10 flex flex-row-reverse items-center">
                  <router-link to="/applications.vue">
                    <button
                      class="h-[51px] w-[121px] shrink-0 justify-center rounded-md border border-solid border-pink-700 pb-3.5 pl-7 pr-7 pt-3.5 text-pink-700"
                    >
                      Apply
                    </button>
                  </router-link>
                </div>
              </div>
              <div class="my-7 grid w-full grid-cols-2">
                <div class="mx-1 h-auto w-[1020px] border border-gray-400">
                  <div class="grid grid-cols-6">
                    <div
                      class="my-2 w-60 justify-start font-semibold text-pink-700"
                    >
                      MARKETING MANAGER
                    </div>
                    <div>
                      <ul
                        class="mx-2 my-3 w-60 list-inside list-disc text-sm font-thin"
                      >
                        <li>posted on 25 November 2023</li>
                      </ul>
                    </div>

                    <div class="mb-4">
                      <label
                        for="name"
                        class="text-md mx-28 my-2 mb-2 block font-light text-transparent"
                        >Salome</label
                      >
                    </div>
                    <div class="mb-4">
                      <label
                        for="name"
                        class="text-md mx-28 my-2 mb-2 block font-light text-transparent"
                        >Salome</label
                      >
                    </div>
                    <div class="mb-4">
                      <label
                        for="name"
                        class="text-md mx-28 my-2 mb-2 block font-light text-transparent"
                        >Salome</label
                      >
                    </div>
                    <div class="my-2 mr-10 flex flex-row justify-end">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M15.08 9.59L12 12.67L8.92 9.59L7.5 11L12 15.5L16.5 11L15.08 9.59ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z"
                          fill="#5E6268"
                        />
                      </svg>
                    </div>
                  </div>
                  <div class="grid grid-cols-7">
                    <div class="grid grid-cols-2">
                      <div class="mb-4">
                        <label
                          for="name"
                          class="text-md text-black-800 font-regular mx-2 my-2 mb-2 block"
                          >JOB ID:</label
                        >
                      </div>
                      <div class="mb-4">
                        <label
                          for="name"
                          class="text-md text-black-800 my-2 mb-2 block font-extralight"
                          >ST105</label
                        >
                      </div>
                    </div>

                    <div class="grid grid-cols-2">
                      <div class="mb-4">
                        <label
                          for="name"
                          class="text-md text-black-800 font-regular mx-2 my-2 mb-2 block"
                          >LOCATION:</label
                        >
                      </div>
                      <div class="mb-4 justify-start">
                        <label
                          for="name"
                          class="text-md text-black-800 mx-4 my-2 mb-2 block font-extralight"
                          >Abuja</label
                        >
                      </div>
                    </div>
                    <div class="grid grid-cols-2">
                      <div class="mb-4">
                        <label
                          for="name"
                          class="text-md text-black-800 font-regular mx-2 my-2 mb-2 block w-60"
                          >JOB TYPE:</label
                        >
                      </div>
                      <div class="mb-4 justify-start">
                        <label
                          for="name"
                          class="text-md text-black-800 mx-2 my-2 mb-2 block w-60 font-extralight"
                          >Fulltime</label
                        >
                      </div>
                    </div>
                    <div class="grid grid-cols-2">
                      <div class="mb-4">
                        <label
                          for="name"
                          class="text-md text-black-800 font-regular my-2 mb-2 block w-60"
                          >WORKER TYPE:</label
                        >
                      </div>
                      <div class="mb-4 justify-start">
                        <label
                          for="name"
                          class="text-md text-black-800 mx-9 my-2 mb-2 block w-60 font-extralight"
                          >Corps Member(corper)</label
                        >
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-row gap-4">
                    <div class="mx-1 my-2 font-semibold text-black underline">
                      JOB DESCRIPTION
                    </div>
                  </div>
                  <ul class="list-inside list-disc">
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </li>
                  </ul>
                </div>
                <div class="mr-10 flex flex-row-reverse items-center">
                  <router-link to="/components/applications">
                    <button
                      class="h-[51px] w-[121px] shrink-0 justify-center rounded-md border border-solid border-pink-700 pb-3.5 pl-7 pr-7 pt-3.5 text-pink-700"
                    >
                      Apply
                    </button></router-link
                  >
                </div>
              </div>
              <div class="mx-1 h-auto w-full border border-gray-400">
                <div class="flex flex-row">
                  <div class="my-2 justify-start font-semibold text-pink-700">
                    MARKETING MANAGER
                  </div>
                  <div>
                    <ul
                      class="mx-1 my-3 list-inside list-disc text-sm font-thin"
                    >
                      <li>posted on 25 November 2023</li>
                    </ul>
                  </div>
                </div>
                <div class="grid grid-cols-7">
                  <div class="grid grid-cols-2">
                    <div class="mb-4">
                      <label
                        for="name"
                        class="text-md text-black-800 font-regular mx-2 my-2 mb-2 block"
                        >JOB ID:</label
                      >
                    </div>
                    <div class="mb-4">
                      <label
                        for="name"
                        class="text-md text-black-800 my-2 mb-2 block font-extralight"
                        >ST105</label
                      >
                    </div>
                  </div>

                  <div class="grid grid-cols-2">
                    <div class="mb-4">
                      <label
                        for="name"
                        class="text-md text-black-800 font-regular mx-2 my-2 mb-2 block"
                        >LOCATION:</label
                      >
                    </div>
                    <div class="mb-4 justify-start">
                      <label
                        for="name"
                        class="text-md text-black-800 mx-4 my-2 mb-2 block font-extralight"
                        >Abuja</label
                      >
                    </div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="mb-4">
                      <label
                        for="name"
                        class="text-md text-black-800 font-regular mx-2 my-2 mb-2 block w-60"
                        >JOB TYPE:</label
                      >
                    </div>
                    <div class="mb-4 justify-start">
                      <label
                        for="name"
                        class="text-md text-black-800 mx-2 my-2 mb-2 block w-60 font-extralight"
                        >Fulltime</label
                      >
                    </div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="mb-4">
                      <label
                        for="name"
                        class="text-md text-black-800 font-regular my-2 mb-2 block w-60"
                        >WORKER TYPE:</label
                      >
                    </div>
                    <div class="mb-4 justify-start">
                      <label
                        for="name"
                        class="text-md text-black-800 mx-9 my-2 mb-2 block w-60 font-extralight"
                        >Corps Member(corper)</label
                      >
                    </div>
                  </div>
                  <div class="mb-4">
                    <label
                      for="name"
                      class="text-md mx-28 my-2 mb-2 block font-light text-transparent"
                      >Salome</label
                    >
                  </div>
                  <div class="mb-4">
                    <label
                      for="name"
                      class="text-md mx-28 my-2 mb-2 block font-light text-transparent"
                      >Salome</label
                    >
                  </div>
                  <div class="mr-10 flex flex-row-reverse items-center">
                    <button
                      class="h-[51px] w-[121px] shrink-0 justify-center rounded-md bg-pink-700 pb-3.5 pl-7 pr-7 pt-3.5 text-white"
                    >
                      CLOSED
                    </button>
                  </div>
                </div>
                <div class="flex flex-row gap-4">
                  <div class="mx-1 my-2 font-semibold text-black underline">
                    JOB DESCRIPTION
                  </div>
                </div>
                <ul class="list-inside list-disc">
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </template>
  </app-layout>
</template>
