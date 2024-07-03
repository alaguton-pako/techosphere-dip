<template>
  <div class="mx-3 w-full">
    <div class="my-1 w-full border-gray-400">
      <div
        class="flex h-[41px] w-full flex-row bg-white"
        @click="$router.go(-1)"
      >
        <div class="mx-2 flex flex-row justify-start">
          <div class="my-2">
            <router-link to="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
              >
                <path
                  d="M17.5 21L10.5 14L17.5 7"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </router-link>
          </div>
          <div class="mx-2 my-2 text-[18px] font-semibold text-black">
            {{ props.name }}
          </div>
        </div>
      </div>  
    </div>
  </div>
</template>
<script setup>
const props = defineProps(['name'])
</script>
