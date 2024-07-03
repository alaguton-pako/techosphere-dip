<template>
  <div class="grid h-[51px] grid-cols-2">
    <div class="flex max-w-sm">
      <div class="mx-2 flex justify-items-center">
        <img src="#" alt="" />
      </div>

      <div
        class="font-['Source Sans Pro'] my-4 flex max-w-sm text-lg font-normal text-black"
      >
        July 29, 2023
      </div>
    </div>
    <div class="mr-10 flex flex-row-reverse gap-[20px]">
      <div class="relative max-w-sm">
        <input
          type="search"
          placeholder="Search"
          class="w-full rounded-md border bg-gray-300 p-2"
        />
      </div>
      <div class="relative max-w-sm">
        <input type="date" class="w-full rounded-md border bg-gray-300 p-2" />
      </div>
    </div>
  </div>
</template>
