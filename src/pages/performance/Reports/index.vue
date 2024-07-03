<script setup>

import DynamicHorizontalNavigation from "@/components/DynamicAppHorizontalNavigation.vue";
import { ref } from "vue";
import Overview from '../Reports/overview/Main.vue'
import Sanctions from '../Reports/sanctions/Main.vue'
import RootCause from './rootCause/Main.vue'
import Escalations from '../Reports/escalations/Main.vue'

const activeTab = ref(1)
const adminNavItems = [
    { id: 1, label: "Overview" },
    { id: 2, label: "Root Cause Analysis" },
    { id: 3, label: "Escalations" },
    { id: 4, label: "Sanctions" },
];
const switchGenTab = (value) => {
    activeTab.value = value
}
</script>


<template>
    <section>
        <DynamicHorizontalNavigation />
        <nav class="flex items-center bg-white p-3 my-5 font-semibold text-gray-600">
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
        <Overview v-if="activeTab == 1" @switchMainTab="switchGenTab" />
        <RootCause :activeTab="2" v-if="activeTab == 2" @switchMainTab="switchGenTab" />
        <Escalations v-if="activeTab == 3" @switchMainTab="switchGenTab" />
        <Sanctions v-if="activeTab == 4" @switchMainTab="switchGenTab" />

    </section>
</template>
