<template>
  <div
    class="inline-flex w-full items-center rounded-sm border border-zinc-300 bg-white pl-10 pr-10 shadow"
  >
    <div
      class="cursor-pointer"
      @click="switchTab(item.id)"
      v-for="(item, index) in props.items"
      :key="index"
    >
      <div
        class="font-['Source Sans Pro'] mx-5 text-base font-semibold"
        :class="[activeTab == item.id ? 'text-[#D50036]' : 'text-neutral-600']"
      >
        {{ item.label }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({ items: { type: [], dafault: [] } })
const activeTab = ref(1)
const emit = defineEmits(['setActiveTab'])
const switchTab = (id) => {
  try {
    activeTab.value = id
    emit('setActiveTab', id)
  } catch (e) {
    console.log(e)
  }
}
</script>
