<script setup>
import axios from "axios";
import envVariables from "@/config/config.js";
import { useUserStore } from "@/stores/userStore";

import { reactive, ref, onMounted } from 'vue'
import SelectDate from '@/components/SelectDate.vue'
import Search from '@/components/Search.vue'
import AppPagination from '../../AppPagination.vue';
// onMounted(() => {
//     getAccounts();
// });

const store = useUserStore();
const accounts = ref('')
const totalAccounts = ref('')
const getAccounts = async () => {
    try {
        const res = await axios.get(
            // `${envVariables.LEAD_SERVICE_BASEURL}/leads/accounts/account-statistics?email=${store.user.email}`
            `${envVariables.LEAD_SERVICE_BASEURL}/leads/accounts?email=oyedele.phemy@gmail.com`
        );
        accounts.value = res.data.result
        // totalAccounts.value = res.data.result.length

    } catch (e) {
        console.log(e);
    }
    // console.log(res)
};

</script>
<template>
    <div>
        <section class=" ">
            <div class="flex space-x-3 py-5 px-2 cursor-pointer" @click="$router.push({ name: 'Account Managers' })">
                <!-- <img src="../../../assets/left-arrow.svg" alt="" class="w-3"> -->
                <!-- <p class="text-2xl font-semibold">Victor Moses</p> -->
            </div>
            <div class=" border border-primary-gray rounded-md w-[250px] px-3 py-5 text-center text-sm flex flex-col
            bg-black text-white">
                <span span class="text-xs"> Total Accounts</span>
                <div class="font-semibold text-3xl ">{{ totalAccounts }}</div>
            </div>
        </section>
        <section>
            <div class="flex justify-end items-center py-4">
                <Search />
                <div class="flex space-x-3 border border-gray-500 px-4 py-2 rounded-md">
                    <p>Filter</p>
                    <img src="../../../assets/down-arrow.svg" alt="" class="w-3">
                </div>
            </div>
        </section>

        <section>

            <table class="w-full table-auto border border-secondary text-center text-sm">
                <thead class="bg-gray-200 text-xs uppercase">
                    <tr class="border border-secondary">
                        <th class="border border-secondary p-3">#</th>
                        <th class="border border-secondary p-3">Business Name</th>
                        <th class="border border-secondary p-3">Contact Name</th>
                        <th class="border border-secondary p-3">Email</th>
                        <th class="border border-secondary p-3">Phone</th>
                        <th class="border border-secondary p-3">registered on</th>
                        <th class="border border-secondary p-3">product </th>
                        <th class="border border-secondary p-3">action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for=" (account, index) in accounts  " :key="index">
                        <td class="border border-secondary p-4">001</td>
                        <td class="border border-secondary p-4">{{ account.business_name }}</td>
                        <td class="border border-secondary p-4"> {{ account.contact_firstname }} {{ account.contact_lastname
                        }} </td>
                        <td class="border border-secondary p-4">{{ account.email }}</td>
                        <td class="border border-secondary p-4">{{ account.phone_number }}</td>
                        <td class="border border-secondary p-4 text-center">
                            <p> {{ account.date_registered }}</p>
                        </td>
                        <td class="border border-secondary p-4">{{ account.plan + ' - ' + account.product }}</td>
                        <td>
                            <router-link :to="{
                                name: 'customerDetail',
                                params: { id: account.email },
                            }
                                " class=" underline">View</router-link>
                        </td>

                    </tr>
                </tbody>
            </table>
            <!-- <AppPagination /> -->
        </section>
    </div>
</template>