<template>
  <section>
    <div class="flex items-center bg-primary-gray py-2.5 px-6 text-white">
      <h2 class="text-lg font-semibold">Conversations</h2>
    </div>
    <div
      class="flex px-6 justify-between border border-secondary bg-gray-200 py-6"
    >
      <div></div>
      <div class="flex items-center">
        <span class="mr-6 text-center font-semibold text-primary">Log:</span>
        <div
          @click="$emit('toggleLogForm', 'Call')"
          class="grid h-[40px] w-[40px] place-items-center cursor-pointer rounded-full bg-gray-300"
        >
          <img src="@/assets/phone.svg" alt="" />
        </div>
        <div
        @click="$emit('toggleLogForm', 'Meeting')"
          class="mx-6 grid h-[40px] cursor-pointer w-[40px] place-items-center rounded-full bg-gray-300"
        >
          <img src="@/assets/mail.svg" alt="" />
        </div>
        <div
        @click="$emit('toggleLogForm', 'Email')"
          class="grid h-[40px] w-[40px] cursor-pointer place-items-center rounded-full bg-gray-300"
        >
          <img src="@/assets/calendar.svg" alt="" />
        </div>
      </div>
      <div>
        <button class="rounded-md bg-primary py-2 px-4 text-white">
          Add Comment
        </button>
      </div>
    </div>
  </section>
</template>

<script setup></script>
