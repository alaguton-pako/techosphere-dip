<script setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useUserStore } from '../../../stores/userStore'

const route = useRoute()

const navItems = [
    'Single Location',
    'Multiple Locations',
]

const userStore = useUserStore()

// onMounted(() => {
//     userStore.checkRole()
// }) 
</script>  

<template>
    <app-layout>
        <template v-slot:main-content>
            <main class="">
                <section class="">
                    <nav class="flex items-center  p-3 font-semibold text-gray-600">
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
