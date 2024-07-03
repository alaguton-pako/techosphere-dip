<script setup>
import { ref } from 'vue'
const emit = defineEmits(['fetchRecords'])
const props = defineProps(['pagination'])
console.log(props)

const currentPage = ref(1)
const pages = (n) => {
  let ps = []

  for (let i = 0; i < n; i++) {
    ps.push(i + 1)
  }
  return ps
}

const fetchByPageNumber = (event) => {
  emit('fetchRecords', event.target.value)
}
</script>

<template lang="">
  <section class="bottom-0 flex items-center justify-between">
    <div class="flex items-center">
      <select
        class="border border-gray-200 p-2 focus:outline-primary"
        @change="fetchByPageNumber"
      >
        <option>
          {{ item }}
        </option>
      </select>
      <div class="ml-5 flex items-center">
        <span>{{ props.pagination.from }} - {{ props.pagination.to }}</span>
        <span  class="font-semibold"
          >{{
            (props.pagination.current - 1) * props.pagination.recordsPerPage + 1
          }}
          -
          {{
            (props.pagination.current - 1) * props.pagination.recordsPerPage +
            props.pagination.recordsPerPage
          }}</span
        >
        <span class="mx-2">of</span>
        <span class="mr-2 font-semibold">{{ props.pagination.total }}</span>
        <span>entries</span>
      </div>
    </div>

    <div class="flex items-center">
      <div
        class="grid h-[38px] w-[38px] cursor-pointer place-content-center rounded-full border p-2"
        :class="{
          'cursor-not-allowed border-[#E5E5EA]': props.pagination.current === 1,
          ' border-primary': props.pagination.current > 1,
        }"
        @click="$emit('fetchRecords', props.pagination.current - 1)"
      >
        <img
          v-if="props.pagination.current === 1"
          src="../assets/chevron.svg"
          alt=""
          class="-rotate-90"
        />
        <img
          v-if="props.pagination.current > 1"
          src="../assets/chevron-active.svg"
          alt=""
          class="-rotate-90"
        />
      </div>
      <span class="mx-4">{{ props.pagination.current }}</span>

      <div
        class="grid h-[38px] w-[38px] cursor-pointer place-content-center rounded-full border p-2"
        :class="{
          'cursor-not-allowed border-[#E5E5EA]':
            props.pagination.current === props.pagination.pages,
          ' border-primary': props.pagination.current < props.pagination.pages,
        }"
        @click="$emit('fetchRecords', props.pagination.current + 1)"
      >
        <img
          v-if="props.pagination.current === props.pagination.pages"
          src="../assets/chevron.svg"
          alt=""
          class="rotate-90"
        />
        <img
          v-if="props.pagination.current < props.pagination.pages"
          src="../assets/chevron-active.svg"
          alt=""
          class="rotate-90"
        />
      </div>
    </div>
  </section>
</template>
