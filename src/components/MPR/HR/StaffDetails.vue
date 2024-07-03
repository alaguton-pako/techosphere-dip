<template>
    <section class="pl-6 pr-6 pt-5 bg-white">
        <div>
            
            <table class="w-full table-auto border border-secondary text-sm mt-8">
                <thead class="bg-gray-200">
                    <tr class="border border-secondary capitalize">
                        <th class="border border-secondary p-3">Name</th>
                        <th class="border border-secondary p-2">Department</th>
                    </tr>
                </thead>
                <tbody>
                    <td class="border border-secondary p-3">{{ props.name }}</td> <!-- Use props.name here -->
                    <td class="border border-secondary p-3">{{ props.department }}</td> <!-- Use props.department here -->
                </tbody>
            </table>
        </div>
        <div class="bg-white">
            <section class="grid grid-cols-2 gap-6 p-8 mt-6 shadow-md">
                <div class="w-full border border-gray-200 rounded-md p-4">
                    <div v-if="isLoading" class="loader"></div>
                    <GaugeChart
                        v-if="!isLoading"
                        :key="1"
                        :size="400"
                        :id="`gaugeChart${11}`"
                        :gauge="Math.floor(props.compliance*100)"

                    />
                    Compliance
                </div>
                <div class="w-full border border-gray-200 rounded-md p-4">
                    <div v-if="isLoading" class="loader"></div>
                    <GaugeChart
                        v-if="!isLoading"
                        :key="1"
                        :size="400"
                        :id="`gaugeChart${1}`"
                        :gauge="Math.floor(props.performance*100)"
                    />
                    Performance
                </div>
            </section>
        </div>
    </section>
</template>

   
   <script setup>
import { defineProps, ref, onMounted, computed } from 'vue';
import GaugeChart from '@/components/GaugeChart.vue';
import workplaceRequestsv2 from '../../../services/workplaceRequestsv2';
import Swal from 'sweetalert2';
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from 'chart.js';
ChartJS.register(Tooltip, Legend, ArcElement);

// Define props
const props = defineProps({
    name: {
        type: String,
        required: true,
    },
    department: {
        type: String,
        required: true,
    },
    performance: {
        type: String,
        required: true,
    },
    compliance: {
        type: String,
        required: true,
    },
});

            
        
</script>