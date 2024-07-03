<script setup>
import { reactive, ref } from 'vue'
import Search from '@/components/Search.vue'
import AppPagination from '../../AppPagination.vue';

const newLead = ref(false)
const dashboardData = reactive([
    {
        stat: '0',
        title: 'Total Survey Reports',
        description: 'Overall number of reports received',
    },

])
</script>
<template>
    <div>
        <section class="my-14 flex w-full flex-nowrap gap-6 overflow-x-scroll overscroll-x-contain ">
            <div v-for="(item, index) in dashboardData" :key="index"
                class="border border-primary-gray bg-black rounded-md w-[250px] px-3 py-5 text-sm flex flex-col bg-[url('/src/assets/users.svg')] bg-no-repeat bg-right-bottom text-white"
                :class="{ 'bg-black': index === 0 }">
                <div class="font-semibold text-3xl mb-4">{{ item.stat }}</div>
                <div class="font-semibold">{{ item.title }} </div>
                <span span class="text-xs"> {{ item.description }}</span>
            </div>
        </section>
        <section>
            <div class="flex justify-end items-center py-4">
                <Search />
            </div>
        </section>

        <section>
            <table class="w-full table-auto border border-secondary text-center text-sm">
                <thead class="bg-gray-200 text-xs uppercase">
                    <tr class="border border-secondary">
                        <th class="border border-secondary p-3">title</th>
                        <th class="border border-secondary p-3">date</th>
                        <th class="border border-secondary p-3">sent by</th>
                        <th class="border border-secondary p-3">action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="border border-secondary p-4">Cairo Street</td>
                        <td class="border border-secondary p-4">Aug 13, 2021</td>
                        <td class="border border-secondary p-4">Victor Bala
                        </td>
                        <td>
                            <router-link :to="{
                                name: 'lead detail',
                                params: { id: 123 },
                            }" class=" underline cursor-pointer">View</router-link>
                        </td>
                    </tr>
                </tbody>
            </table>
            <!-- <AppPagination /> -->
        </section>
    </div>
</template>