<script setup>
import DynamicHorizontalNavigation from "@/components/DynamicAppHorizontalNavigation.vue";
const adminNavItems = [
    { id: 1, label: "Operations" },
    { id: 2, label: "Abdul A. Abdullahi" },
];
</script>

<template lang="">
    <app-layout>
        <template v-slot:main-content>
            <main class="w-full bg-[#F5F5F5] pl-[260px]">
                <DynamicHorizontalNavigation />
                <nav class="mt-5 flex items-center bg-white p-3 font-semibold text-gray-600">
                    <div class="btn mx-2 text-center capitalize" v-for="item in adminNavItems" :key="item.id">
                    <button :class="{
                        'text-primary': activeTab === item.id,
                    }">
                         {{ ' <   '+ '  ' + item.label  }}
                    </button>
                    </div>
                </nav>
                <section class="p-5">
                    <div class='py-5 flex justify-between'>
                        <div class="text-2xl font-semibold my-4">Schedules and Reports</div>
                        <div class="flex  items-center">
                            <div class="mx-4 flex items-center">
                                <input v-model="searchParam" type="search" placeholder="Search"
                                    class="w-[230px] rounded-l-md border border-r-0 border-secondary p-2 focus:outline-none" />
                                <button class="h-full rounded-r-md border border-secondary bg-primary-gray py-2.5 px-3">
                                    <img src="@/assets/search-white.svg" alt="" />
                                </button>
                            </div>
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
                    <section
                        class=" flex flex-col border-b border-gray-100 bg-white px-5 py-3 text-gray-600">
                    
                        <div class="flex justify-between border-b py-14">
                        <div>
                            <div class="font-semibold text-black">
                             Aisha 
                            </div>
                            <div class="text-sm"> 22/01/2023 </div>
                        </div>
                        <div class="flex w-52 items-center">
                            <div
                            class="m-2 h-3 w-full rounded-full bg-green-600 bg-opacity-20">
                            <div
                                class="h-3 rounded-full bg-green-600"
                                >
                            </div>
                            </div>
                            <p>
                            100%
                            </p>
                        </div>
                        <p>
                          1/2 tasks
                        </p>        
                        <div
                            class="grid place-content-center rounded-md border px-3 capitalize text-white  bg-[#4B5054] ">
                            Approved
                        </div>
                        <img
                            src="@/assets/chevron-black.svg"
                            class="cursor-pointer"
                        />
                        </div>
                        <!-- <AppPagination
                            :pagination="pagination"
                            @@fetchRecords="getDailySchedules"
                        ></AppPagination> -->
                    </section>
                </section>
            </main>
        </template>
    </app-layout>
</template>
  

  

  <!-- Create daily schedule end -->
<!-- </template> -->
