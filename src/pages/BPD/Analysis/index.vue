<script setup>
import { ref, onMounted } from "vue";
import Compliance from '../Analysis/Compliance/index.vue'
import Performance from '../Analysis/Performance/index.vue'
import Trends from '../Analysis/Trends/index.vue'
import CCS from '../Analysis/Ccs/index.vue'
import DynamicHorizontalNavigation from "@/components/DynamicAppHorizontalNavigation.vue";
const adminNavItems = [
    { id: 1, label: "Performance" },
    { id: 2, label: "Compliance" },
    { id: 3, label: "Trends" },
    { id: 4, label: "CCS" },

];
const activeTab = ref(1)
const switchGenTab = (value) => {
    activeTab.value = value
}
</script>

<template>
    <section class="">
        <DynamicHorizontalNavigation />
        <section class="px-10 ">
            <nav class="flex items-center bg-white p-3 my-3 font-semibold text-gray-600">
                <div class="btn mx-4 text-center capitalize " v-for="item in adminNavItems" :key="item.id">
                    <button :class="{
                        'text-primary': activeTab === item.id,
                    }" @click="switchGenTab(item.id)">
                        {{ item.label }}
                    </button>
                </div>
            </nav>
        </section>
        <section>
            <Performance v-if="activeTab == 1" @switchMainTab="switchGenTab" />
            <Compliance v-if="activeTab == 2" @switchMainTab="switchGenTab" />
            <Trends class="w-full" v-if="activeTab == 3" @switchMainTab="switchGenTab" />
            <CCS class="w-full" v-if="activeTab == 4" @switchMainTab="switchGenTab" />
        </section>
    </section>
</template>


 
