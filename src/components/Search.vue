<template>
  <div>
    <div class="mx-4 flex items-center">
      <input
        @change="$emit('setSearch', $event.target.value)"
        id=""
        name=""
        type="text"
        placeholder="Search"
        class="w-[230px] rounded-l-md border border-r-0 border-secondary p-2 focus:outline-none"
      />
      <button
        @click="$emit('click')"
        class="rounded-r-md border border-secondary bg-primary-gray py-2.5 px-3"
      >
        <img src="../assets/search-white.svg" alt="" />
      </button>
    </div>
  </div>
</template>
