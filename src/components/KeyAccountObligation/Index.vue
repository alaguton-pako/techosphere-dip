<script setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useUserStore } from '@/stores/userStore'

const route = useRoute()
const userStore = useUserStore()

let navItems = [
    'My Accounts',
    'Wallet Share',
]

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
                    <nav class="flex items-center border border-gray-200 bg-white p-3 font-semibold text-gray-600">
                        <router-link v-for="(item, index) in (navItems)" :to="{ name: `${item}` }" :key="index"
                            class="mx-4 text-center capitalize" :class="{ 'text-primary': $route.name === item }">
                            {{ item }}
                        </router-link>
                    </nav>

                    <router-view />
                </section>
            </main>
        </template>
    </app-layout>
</template>
