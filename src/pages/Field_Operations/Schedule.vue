<template>
  <AppLayout>
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
        <section>
          <div v-if="activeTab == 1">
            <ScheduleList class="mx-10" />
          </div>
          <div v-if="activeTab == 2" class="my-10 p-10">
            <ObligationList />
          </div>
        </section>
      </main>
    </template>
  </AppLayout>
</template>
<script setup>
import { ref } from 'vue'
import AppHorizontalNavigation from '../../components/AppHorizontalNavigation.vue'
import ScheduleList from '../../components/Field_Operations/ScheduleList.vue'
import ObligationList from '../../components/Field_Operations/ObligationList.vue'

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
