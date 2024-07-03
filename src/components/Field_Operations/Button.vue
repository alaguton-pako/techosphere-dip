<template>
  <div class="mr-10 flex flex-row-reverse gap-4">
    <button
      class="border-suburbanblack h-[51px] w-[121px] shrink-0 rounded-md border border-solid pb-3.5 pl-7 pr-7 pt-3.5"
    >
      Cancel
    </button>
    <button
      @click="$emit('submit', true)"
      class="h-[51px] w-[121px] rounded-md border border-solid border-[transparent] bg-[#D50036] pb-3.5 pl-7 pr-7 pt-3.5"
    >
      Submit
    </button>
  </div>
</template>
