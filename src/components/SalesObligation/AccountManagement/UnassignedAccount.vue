<script setup>
import { reactive, ref } from 'vue'
import Search from '@/components/Search.vue'
import AppPagination from '../../AppPagination.vue';
import SalesManagerTable from '../../Shared/SalesManagerTable.vue';
const newLead = ref(false)

</script>
<template>
    <div>

        <section>
            <div class="flex justify-end items-center my-5">
                <Search />
            </div>
        </section>

        <section>
            <SalesManagerTable :url="`leads/accounts/unassigned?`" />
<!-- 
            <table class="w-full table-auto border border-secondary text-center text-sm">
                <thead class="bg-gray-200 text-xs uppercase">
                    <tr class="border border-secondary">
                        <th class="border border-secondary p-3">Sales ID</th>
                        <th class="border border-secondary p-3">Business Name</th>
                        <th class="border border-secondary p-3">Customer Name</th>
                        <th class="border border-secondary p-3">Product</th>
                        <th class="border border-secondary p-3">plan</th>
                        <th class="border border-secondary p-3">Amount paid</th>
                        <th class="border border-secondary p-3">Date</th>
                        <th class="border border-secondary p-3">source</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="border border-secondary p-4">1122</td>
                        <td class="border border-secondary p-4">Zees Luxury</td>
                        <td class="border border-secondary p-4">Michael Adekunle
                        </td>
                        <td class="border border-secondary p-4">Business
                            Dual Play</td>
                        <td class="border border-secondary p-4">8 Mbps</td>
                        <td class="border border-secondary p-4">₦378,500</td>
                        <td class="border border-secondary p-4 text-center">Aug 13, 2021
                            12:30PM
                        </td>
                        <td class="border border-secondary p-4">Suburban Staff</td>
                    </tr>
                </tbody>
            </table> -->
            <!-- <AppPagination /> -->
        </section>
    </div>
</template>