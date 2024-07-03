<template>
  <app-layout>
    <template v-slot:main-content>
      <main class="min-h-screen w-full bg-[#F5F5F5] pl-[260px]">
        <AppHorizontalNavigation />
        <section class="my-10 px-10">
          <nav
            class="flex items-center border border-gray-200 bg-white p-3 font-semibold text-gray-600"
          >
            <span
              v-for="(item, index) in navItems"
              :key="index"
              class="mx-6 cursor-pointer text-center"
              :class="{
                'text-primary': activeTab === item.id,
              }"
              @click.stop="switchTab(item.id)"
              >{{ item.label }}
            </span>
          </nav>
        </section>
        <div class="p-5">
          <ViewConfirmation />
        </div>
      </main>
    </template>
  </app-layout>
</template>
<script setup>
import { ref } from 'vue'
// import AppVerticalNavigation from '../components/AppVerticalNavigation.vue'
import AppHorizontalNavigation from '../../components/AppHorizontalNavigation.vue'
import ViewConfirmation from '../../components/Field_Operations/ViewConfirmation.vue'
const activeTab = ref(1)
const emit = defineEmits(['setActiveTab'])
const navItems = [
  { id: 1, label: 'My Schedule' },
  { id: 2, label: 'Confirmations' },
]

const switchTab = (id) => {
  try {
    activeTab.value = id
    emit('setActiveTab', id)
  } catch (e) {
    console.log(e)
  }
}
</script>
<style scoped></style>
