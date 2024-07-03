<script setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useUserStore } from '../stores/userStore'

const route = useRoute()

const adminNavItems = [
  'dashboard',
  'escalations',
  'all tickets',
  'scheduled visits',
]
const navItems = ['my tickets']

const userStore = useUserStore()

onMounted(() => {
  userStore.checkRole()
}) 
</script>  

<template>
  <app-layout>
    <template v-slot:main-content>
      <main class="w-full bg-[#F5F5F5] pl-[260px]">
        <AppHorizontalNavigation />
        <section class="p-10">
          <nav class="flex items-center border border-gray-200 bg-white p-3 font-semibold text-gray-600"
            :class="{ hidden: route.name === 'create ticket' }">
            <router-link v-for="(item, index) in (userStore.$state.isAdmin ? adminNavItems : navItems)"
              :to="{ name: `${item}` }" :key="index" class="mx-4 text-center capitalize"
              :class="{ 'text-primary': $route.name === item || !userStore.isAdmin, }">
              {{ item }}
            </router-link>
          </nav>
          <router-view />
        </section>
      </main>
    </template>
  </app-layout>
</template>