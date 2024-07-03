
<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

import AppLayout from '@/layouts/AppLayout.vue'
import AppHorizontalNavigation from '@/components/AppHorizontalNavigation.vue'
import InstallationHistory from '@/components/customers/InstallationHistory.vue'
import SubscriptionHistory from '@/components/customers/SubscriptionHistory.vue'
import PaymentHistory from '@/components/customers/PaymentHistory.vue'
import ConversationHistory from '@/components/customers/Conversation.vue'
import FaultHistory from '@/components/customers/FaultHistory.vue'


const currentTab = ref('installation history')

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
                            <span class="text-xl font-semibold"> Back</span>
                        </div>
                    </nav>

                    <section class="mt-4">
                        <div class="flex items-center bg-primary-gray py-2.5 px-6 text-white">
                            <h2 class="text-lg font-semibold">Customer Details</h2>
                        </div>
                        <div class=" relative border border-secondary p-12 ">
                            <div class="items-center flex">
                                <div class="w-1/4 font-semibold">Business Name:</div>
                                <div>Zees Luxury</div>
                            </div>
                            <div class="items-center my-6 flex">
                                <div class="w-1/4 font-semibold">Customer Status:</div>
                                <div>
                                    <span
                                        class="rounded border border-primary-green py-1 text-base px-4 text-primary-green">ACTIVE</span>
                                </div>
                            </div>
                            <div class="items-center my-6 flex">
                                <div class="w-1/4 font-semibold">Customer ID:</div>
                                <div> 11234</div>
                            </div>
                            <div class="items-center my-6 flex">
                                <div class="w-1/4 font-semibold">Sector</div>
                                <div>Technology</div>
                            </div>
                            <div class="items-center mt-6 flex">
                                <div class="w-1/4 font-semibold">Segment</div>
                                <div>Service Provider</div>
                            </div>
                            <div class="items-center my-6 flex">
                                <div class="w-1/4 font-semibold">Customer Profile:</div>
                                <div> Platinum</div>
                            </div>
                            <div class="items-center my-6 flex">
                                <div class="w-1/4 font-semibold">Address:</div>
                                <div class=" ">No. 23, brook
                                    Street, Wuye</div>
                            </div>
                            <div class=" items-center my-6 flex">
                                <div class="w-1/4 font-semibold">Email:</div>
                                <div>rhathiramani@absnigeria.com</div>
                            </div>
                            <div class="items-center my-6 flex">
                                <div class="w-1/4 font-semibold">Product/Services:</div>
                                <div>Gigabit Ethernet - 1Gbps </div>
                            </div>
                            <div class="items-center my-6 flex">
                                <div class="w-1/4 font-semibold">Wallet Size:</div>
                                <div>N10,000,000,000.00</div>
                            </div>

                            <div class="items-center my-6 flex">
                                <div class="w-1/4 font-semibold">Wallet Share:</div>
                                <div>N305,000,000.00</div>
                            </div>
                            <button class="absolute top-16 right-20  rounded border border-secondary p-2 px-5">
                                Refresh
                            </button>
                            <button class="absolute bottom-28 right-20  rounded border border-secondary p-2 px-8">
                                Edit
                            </button>
                        </div>
                    </section>
                    <section>
                        <div class="flex items-center bg-primary-gray py-2.5 text-white">
                            <span class="cursor-pointer px-6" :class="{
                                'font-semibold underline':
                                    currentTab === 'installation history',
                            }" @click="currentTab = 'installation history'">Installation History</span>
                            <span class="cursor-pointer px-6" :class="{
                                'font-semibold underline': currentTab === 'payment history',
                            }" @click="currentTab = 'payment history'">Payment History</span>
                            <span class="cursor-pointer px-6" :class="{
                                'font-semibold underline':
                                    currentTab === 'conversation history',
                            }" @click="currentTab = 'conversation history'">Conversations</span>
                            <span class="cursor-pointer px-6" :class="{
                                'font-semibold underline': currentTab === 'fault history',
                            }" @click="currentTab = 'fault history'">Fault History</span>

                        </div>
                        <installation-history :installationHistory="installationHistory"
                            v-if="currentTab === 'installation history'"></installation-history>

                        <payment-history :email="email" v-if="currentTab === 'payment history'"></payment-history>

                        <conversation-history :conversation="conversation"
                            v-if="currentTab === 'conversation history'"></conversation-history>

                        <fault-history :faultHistory="faultHistory" v-if="currentTab === 'fault history'"></fault-history>


                    </section>
                </main>
            </main>
        </template>
    </app-layout>
</template>
