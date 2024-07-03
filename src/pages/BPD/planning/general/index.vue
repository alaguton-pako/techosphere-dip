<script setup>
import { ref } from 'vue'
import CalendarVue from './calendar.vue'
import OverviewVue from './overview.vue'
const emit = defineEmits(['switchMainTab'])
import Swal from 'sweetalert2'

const activeTab = ref(1)

const GenActNavItems = [
  { id: 1, label: 'Overview' },
  { id: 2, label: 'Calender Manager' },
]

const switchTab = (value) => {
  activeTab.value = value
}

const switchGenTab = (value) => {
  if (value == 1) {
    activeTab.value = 1
  }
  emit('switchMainTab', value)
}
</script>

<template>
  <section class="mx-10">
    <nav
      class="flex items-center border border-gray-200 bg-white p-3 font-semibold text-gray-600"
    >
      <div
        class="btn mx-4 text-center capitalize"
        v-for="item in GenActNavItems"
        :key="item.id"
      >
        <button
          :class="{
            'text-primary': activeTab === item.id,
          }"
          @click="switchTab(item.id)"
        >
          {{ item.label }}
        </button>
      </div>

      <!-- </router-link> -->
    </nav>
  </section>
  <section class="mt-20">
    <OverviewVue v-if="activeTab == 1" @switchGenTab="switchGenTab" />
    <CalendarVue v-if="activeTab == 2" @switchGenTab="switchGenTab" />
  </section>
</template>
