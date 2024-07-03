<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

import AppLayout from '@/layouts/AppLayout.vue'
import AppHorizontalNavigation from '@/components/AppHorizontalNavigation.vue'

</script>

<template>
    <app-layout>
        <template v-slot:main-content>
            <main class="w-full bg-[#F5F5F5] pl-[260px]">
                <AppHorizontalNavigation />
                <main class="m-14">
                    <nav class="flex items-center border border-gray-200 bg-white p-3 font-semibold text-gray-600">
                        <div class="flex cursor-pointer items-center" @click="$router.go(-1)">
                            <img src="@/assets/chevron-black.svg" class="mr-1 rotate-90" />
                            <span class="text-xl font-semibold">/ Locations - FIRS HQ</span>
                        </div>
                    </nav>

                    <section class="mt-4">

                        <div class=" relative border border-secondary ">
                            <div class="flex justify-between py-4 px-6">
                                <div class="flex space-x-20">
                                    <div class="text-[#0009D5]">FIRS Wuse 2</div>
                                    <div>11, Ademola Adetokunbo, Wuse 2, Abuja </div>
                                </div>
                                <div class="border border-gray-500 px-5 py-2 rounded-sm">Sales Order</div>
                            </div>
                            <div class="flex justify-between py-4 px-6">
                                <div class="flex space-x-20">
                                    <div class="text-[#0009D5]">FIRS Wuse 2</div>
                                    <div>11, Ademola Adetokunbo, Wuse 2, Abuja </div>
                                </div>
                                <div class="border border-gray-500 px-5 py-2 rounded-sm">Sales Order</div>
                            </div>
                            <div class="flex justify-between py-4 px-6">
                                <div class="flex space-x-20">
                                    <div class="text-[#0009D5]">FIRS Wuse 2</div>
                                    <div>11, Ademola Adetokunbo, Wuse 2, Abuja </div>
                                </div>
                                <div class="border border-gray-500 px-5 py-2 rounded-sm">Sales Order</div>
                            </div>
                            <div class="flex justify-between py-4 px-6">
                                <div class="flex space-x-20">
                                    <div class="text-[#0009D5]">FIRS Wuse 2</div>
                                    <div>11, Ademola Adetokunbo, Wuse 2, Abuja </div>
                                </div>
                                <div class="border border-gray-500 px-5 py-2 rounded-sm">Sales Order</div>
                            </div>
                        </div>
                    </section>

                </main>
            </main>
        </template>
    </app-layout>
</template>
