<template lang="">
  <main
    class="fixed left-0 top-0 z-50 grid h-screen w-screen place-items-center overflow-y-scroll overscroll-y-contain bg-primary-black bg-opacity-30 px-32 py-16"
  >
    <div class="bg-white px-28 pb-32 pt-16">
      <slot name="modal-content" />
    </div>
  </main>
</template>
