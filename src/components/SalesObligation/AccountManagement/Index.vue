<script setup>
import { onMounted , ref } from 'vue'
import { useRoute } from 'vue-router'
import { useUserStore } from '../../../stores/userStore'

const route = useRoute()
const userStore = useUserStore()
let navItems = ref([])


// if (userStore.userHasRole('Sales Manager')) {
//     console.log( userStore.userHasRole )
//     navItems = [
//         'Account Managers',
//         'Unassigned Accounts',
//     ]
// } else {
//     console.log( userStore.userHasRole )
//     navItems = [
//         'My Accounts',
//     ]
// }


navItems = [
        'Account Managers',
        'Unassigned Accounts',
    ]

// onMounted(() => {
//     userStore.checkRole()
// }) 
</script>  

<template>
    <app-layout>
        <template v-slot:main-content>
            <main class="w-full bg-[#F5F5F5] pl-[260px]">
                <AppHorizontalNavigation />
                <section class="p-10">

                    <nav v-if=" userStore.userHasRole('Sales Manager')  " class="flex items-center border border-gray-200 bg-white p-3 font-semibold text-gray-600">
                        <router-link v-for="(item, index) in (navItems)"  :to="{ name: `${item}` }" :key="index"
                            class="mx-4 text-center capitalize" :class="{ 'text-primary': $route.name === item }">
                            {{ item }}
                        </router-link>
                    </nav>

                    <nav class="flex items-center border border-gray-200 bg-white p-3 font-semibold text-gray-600">
                        My Account
                    </nav>
                    <router-view />
                </section>
            </main>
        </template>
    </app-layout>
</template>
