<script setup>
import DynamicHorizontalNavigation from "@/components/DynamicAppHorizontalNavigation.vue";
import { ref } from "vue";
import AppPagination from "@/components/AppPagination.vue";
import CircleProgress from "vue3-circle-progress";

const activeTab = ref(1);
const adminNavItems = [
    { id: 1, label: "Overview" },
    { id: 2, label: "Department/Unit" },
];



</script>

<template>
    <app-layout>
        <template v-slot:main-content>
            <main class="min-h-screen w-full bg-[#F5F5F5] pl-[270px]">
                <section>
                    <DynamicHorizontalNavigation />
                    <nav class="m-10 flex items-center bg-white p-3 font-semibold text-gray-600">
                        <div class="btn mx-4 text-center capitalize" v-for="item in adminNavItems" :key="item.id">
                            <button :class="{
                                'text-primary': activeTab === item.id,
                            }">
                                {{ item.label }}
                            </button>
                        </div>
                    </nav>
                </section>
                <div class="flex flex-row justify-center">
                    <div class="mx-10 bg-white border flex place-items-center justify-center border-black w-1/2">
                        <circle-progress class="text-[32px]" show-percent="true" percent="80" unit="percent" :gradient="{
                            angle: 80,
                            startColor: '#ff0000',
                            stopColor: '#ffff00',
                        }">
                        </circle-progress>
                    </div>
                    <div class="mx-10 bg-white border flex justify-center place-items-center h-[400px] border-black w-1/2">
                        <circle-progress class="text-[32px]" show-percent="true" percent="80" unit="percent" :gradient="{
                            angle: 0,
                            startColor: '#ff0000',
                            stopColor: '#ffff00',
                        }">
                        </circle-progress>
                    </div>
                </div>
                <section class="my-6">
                    <div class="flex  flex-row-reverse items-center">
                        <div class="mx-4 flex items-center">
                            <input v-model="searchParam" type="search" placeholder="Search"
                                class="w-[230px] rounded-l-md border border-r-0 border-secondary p-2 focus:outline-none" />
                            <button class="h-full rounded-r-md border border-secondary bg-primary-gray py-2.5 px-3">
                                <img src="@/assets/search-white.svg" alt="" />
                            </button>
                        </div>
                        <div class="flex justify-center items-center my-8">
                            <div class="border w-fit bg-gray-100 border-gray-500 rounded p-1 flex">
                                <img class="mr-2 pr-1" src="@/assets/calendar-icon.svg" />
                                <img class="pr-2" src="@/assets/left-arrow.svg" alt="" />

                                <h2 class="flex flex-row text-base text-black">
                                    July 04 - July 14
                                    <img class="pl-2" src="@/assets/right-arrow.svg" alt="" />
                                </h2>
                            </div>
                        </div>

                    </div>
                </section>

                <table class="w-full table-auto border border-secondary text-sm">
                    <thead class="bg-gray-200">
                        <tr class="border border-secondary uppercase">
                            <th class="border border-secondary p-2">staff number</th>
                            <th class="border border-secondary p-3">name</th>
                            <th class="border border-secondary p-3">unit</th>
                            <th class="border border-secondary p-3">role</th>
                            <th class="border border-secondary p-3">individual rating (%)</th>
                            <th class="border border-secondary p-3">action</th>
                        </tr>
                    </thead>
                    <div class="font-semibold text-2xl p-5 text-red-600" v-if="isServerError">
                        Internal Server Error : Please try Again
                    </div>
                    <div class="font-semibold text-2xl p-5 text-red-600" v-if="isNotFound">
                        Page Not Found: Please try Again
                    </div>
                    <tbody class="text-center">
                        <tr>
                            <td class="border border-secondary p-4 text-center">
                                SC2107
                            </td>
                            <td class="border border-secondary p-3">
                                Abdul .A. Abdullahi
                            </td>
                            <td class="border border-secondary p-3">
                                Corporate Services
                            </td>
                            <td class="border border-secondary p-3">
                                Facility Officer
                            </td>
                            <td class="border border-secondary p-3">
                                70
                            </td>
                            <td class="border border-secondary p-3 underline">
                                <router-link :to="{ name: 'department-obligation-view' }"> View</router-link>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <loading-spinner v-if="isloading" />
                <!-- Pagination -->
                <!-- <AppPagination class="m-10" /> -->
            </main>
        </template>
    </app-layout>
</template>
  

  