<template lang="">
   <main class="p-10">
    <section class="my-12 ml-auto flex flex-row-reverse items-center text-sm">
        <button class="border border-secondary rounded-md py-2 px-4 shadow">End Chat</button>
        <div class="flex items-center mx-4">
            <input type="search" placeholder="Search" class="p-2 rounded-l-md focus:outline-none border border-secondary border-r-0 w-[230px]">
            <button class="bg-primary-gray h-full py-2.5 px-3 border border-secondary rounded-r-md">
                <img src="../../assets/search-white.svg" alt="">
            </button>
        </div>
    </section>

    <section class="flex border border-gray-300">
      <div
        class="grid w-72 place-content-center border-r border-gray-300 py-3 px-6"
      >
        <select class="border border-secondary py-1 px-3 focus:outline-none block w-48">
          <option value="" selected disabled>Filter</option>
          <option value="">option 2</option>
          <option value="">option 3</option>
        </select>
      </div>
    </section>

    <section class="flex border border-t-0 border-gray-300 text-sm">
      <div class="w-72 h-[574px] flex-shrink-0 flex flex-col bg-white ">
        <div class="h-full overflow-y-scroll">
          <div v-for="item in 16" class="flex items-center border-b border-gray-300 py-7 pl-3 pr-9 relative">
            <div
              class="flex-shrink-0 mr-4 grid h-[40px] w-[40px] place-content-center rounded-full bg-secondary-gray text-2xl font-semibold text-white"
            >
            </div>
            <div>
              <h2 class="font-semibold mb-1 line-clamp-1">Musa Ugochukwu Dayo</h2>
              <p class="line-clamp-1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div class="absolute top-3 right-3 text-xs">12m</div>
            <div class="absolute top-11 right-3 min-w-[20px] h-5 bg-primary text-white text-xs grid place-content-center rounded-full p-1">3</div>
          </div>
        </div>
        <div class="flex-shrink-0 flex items-center justify-center h-14 border-t border-secondary-gray">
          <img src="../../assets/arrowtriangle.svg" >
          <img src="../../assets/arrowtriangle.svg" class="rotate-180 ml-2" >
        </div>
      </div>
      <div class="w-full h-[575px] flex flex-col">
        <div class="h-full"></div>
        <div class="h-14 bg-white flex-shrink-0 flex items-center border-t border-l border-secondary-gray px-3 rounded-sm">
          <textarea placeholder="Write a message" class="w-full bg-transparent py-2 px-2 resize-none focus:outline-none"></textarea>
          <button class="bg-primary text-white py-2 px-6 rounded-md flex-shrink-0">Send</button>
        </div>
      </div>
    </section>
  </main>
</template>
