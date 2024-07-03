<script setup>
import { ref, onMounted } from 'vue'
import { stringifyQuery, useRoute } from 'vue-router'
import axios from 'axios'
import AppLayout from '../layouts/AppLayout.vue'
import AppHorizontalNavigation from '@/components/AppHorizontalNavigation.vue'
import InstallationHistory from '@/components/customers/InstallationHistory.vue'
import SubscriptionHistory from '@/components/customers/SubscriptionHistory.vue'
import PaymentHistory from '@/components/customers/PaymentHistory.vue'
import ConversationHistory from '@/components/customers/Conversation.vue'
import FaultHistory from '@/components/customers/FaultHistory.vue'
import SubscriptionStatus from '@/components/customers/SubscriptionStatus.vue'
import { useUserStore } from '../stores/userStore'
import envVariables from '@/config/config.js'
import LoadingSpinner from '../components/LoadingSpinner.vue'
const store = useUserStore()

const activeTab = ref('all customers')
const name = ref('')
const email = ref('')
const phone = ref('')
const mobile = ref('')
const address = ref()
const customerId = ref('')
const product = ref('')
const customerStatus = ref('')
const lastDownTimeCause = ref('')
const lastDownTime = ref('')
const lastUpTime = ref('')
const subPlan = ref('')
const toggleTab = (data) => (activeTab.value = data)

onMounted(() => {
  getCustomers()
  // store.checkRole()
})
let currentTab = ref(' ')

// if (
//   store.$state.user.role === 'CEO' ||
//   store.$state.user.position === 'COO' ||
//   store.$state.user.position === 'Revenue Manager' ||
//   store.$state.user.position === 'GM CRM' ||
//   store.$state.user.position === 'CRM Manager' ||
//   store.$state.user.position === 'DM Customer Support Center' ||
//   store.$state.user.position ===
//     'Key Account Executive/DIP- Medium Enterprise' ||
//   store.$state.user.position ===
//     'Dedicated Key Account Executive/DIP- Large Enterprise(Business solutions)' ||
//   store.$state.user.position ===
//     'Key Account Executive - MDAs, IDAs, & Embassies'
// ) {
//   currentTab.value = 'installation history'
// }
// if (
//   store.$state.user.position === 'Revenue Manager (Billing Support)' ||
//   store.$state.user.position === 'Market Research Analyst'
// ) {
//   currentTab.value = 'payment history'
// }
// if (store.$state.user.position === 'Network Infrastructure Support') {
//   currentTab.value = 'subscription status'
// }

const route = useRoute()
const isLoading = ref(true)
const getCustomers = async () => {
  try {
    isLoading.value = true
    let identifier = route.params.id

    let url = ''
    if (identifier.includes('@') == false) {
      url = `${envVariables.CUSTOMERSERVICEAPP_BASE_URL}/${route.params.id}`
    } else {
      url = `${envVariables.CUSTOMERSERVICEAPP_BASE_URL}/view-by-email/${route.params.id}`
    }
    const res = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${store.$state.customerToken}`,
      },
    })

    name.value = res.data.data.business[0].business_name
    phone.value = res.data.data.phone
    phone.value = res.data.data.phone
    mobile.value = res.data.data.mobile
    email.value = res.data.data.email_address
    address.value = `${res.data.data.home_address}`
    product.value = res.data.data.business[0].subscription_name
    customerId.value = res.data.data.business[0].customer_id
    customerStatus.value = res.data.data.ontStatus.runstat
    lastDownTimeCause.value = res.data.data.ontStatus.lstdowncause
    lastDownTime.value = res.data.data.ontStatus.lstdowntime
    lastUpTime.value = res.data.data.ontStatus.lstuptime
    subPlan.value = res.data.data.business[0].name_of_plan
    getInstallationHistory()
    getFaultHistory()
    getConversations()
    isLoading.value = false
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

const conversation = ref('')
const getConversations = async () => {
  try {
    const res = await axios.get(
      `${envVariables.CCS_BASE_URL}/conversation/customer-log/${email?.value}`
    )
    conversation.value = res?.data?.data[0]
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

const installationHistory = ref('')
const getInstallationHistory = async () => {
  try {
    const res = await axios.get(
      `${envVariables.WORKPLACE_BASE_URL_V1}/users/installation/status?name=${name?.value}`,
      {
        headers: {
          Authorization: `Bearer ${store.$state.installationToken}`,
        },
      }
    )
    installationHistory.value = res?.data?.data?.results?.data[0]
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

const faultHistory = ref('')
const getFaultHistory = async () => {
  try {
    const res = await axios.get(
      `${envVariables.WORKPLACE_BASE_URL_V1}/users/network/faults?name=${name.value}`,
      {
        headers: {
          Authorization: `Bearer ${store.$state.installationToken}`,
        },
      }
    )
    faultHistory.value = res?.data?.data?.results?.data
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}
</script>

<template>
  <app-layout>
    <template v-slot:main-content>
      <main class="w-full bg-[#F5F5F5] pl-[260px]">
        <AppHorizontalNavigation />
        <main class="m-14">
          <div class="cursor-pointer items-center">
            <nav
              class="flex items-center border border-gray-200 bg-white p-3 font-semibold text-gray-600"
            >
              <div
                class="flex cursor-pointer items-center"
                @click="$router.push({ name: 'customerDatabase' })"
              >
                <img src="../assets/chevron-black.svg" class="mr-1 rotate-90" />
                <span class="text-xl font-semibold">Back</span>
              </div>
            </nav>
            <!-- </div> -->

            <section class="mt-12">
              <div
                class="flex items-center bg-primary-gray px-6 py-2.5 text-white"
              >
                <h2 class="text-lg font-semibold">Customer Details</h2>
              </div>
              <div
                v-if="!isLoading"
                class="relative border border-secondary p-12"
              >
                <div class="items-cennter flex">
                  <div class="w-1/4 font-semibold">Business Name:</div>
                  <div>{{ name }}</div>
                </div>
                <div class="items-cennter my-4 flex">
                  <div class="w-1/4 font-semibold">Customer Status::</div>
                  <div>
                    <span
                      class="rounded border border-primary-green px-4 py-1 text-primary-green"
                      >{{ customerStatus }}</span
                    >

                    <!-- <span
                      class="rounded border border-primary-green py-1 px-4 text-primary-green"
                      >{{ customerStatus }}</span
                    > -->
                  </div>
                </div>

                <div class="items-cennter my-4 flex">
                  <div class="w-1/4 font-semibold">Last Down Cause:</div>
                  <div>{{ lastDownTimeCause || 'N/A' }}</div>
                </div>
                <div class="items-cennter my-4 flex">
                  <div class="w-1/4 font-semibold">Last Up Time:</div>
                  <div>{{ lastUpTime || 'N/A' }}</div>

                  <div>{{ lastUpTime || 'N/A' }}</div>
                </div>
                <div class="items-cennter my-4 flex">
                  <div class="w-1/4 font-semibold">Last Down Time:</div>
                  <div>{{ lastDownTime || 'N/A' }}</div>
                </div>

                <div class="items-cennter my-4 flex">
                  <div class="w-1/4 font-semibold">Email:</div>
                  <div>{{ email }}</div>
                </div>
                <div class="items-cennter my-4 flex">
                  <div class="w-1/4 font-semibold">Phone:</div>
                  <div>{{ phone }}</div>
                </div>
                <div class="items-cennter my-4 flex">
                  <div class="w-1/4 font-semibold">Mobile:</div>
                  <div>{{ mobile }}</div>
                </div>
                <div class="items-cennter my-4 flex">
                  <div class="w-1/4 font-semibold">Address:</div>
                  <div>{{ address }}</div>
                </div>
                <div class="items-cennter my-4 flex">
                  <div class="w-1/4 font-semibold">Customer ID:</div>
                  <div>{{ customerId }}</div>
                </div>
                <div class="items-cennter my-4 flex">
                  <div class="w-1/4 font-semibold">Product Name/ Service:</div>
                  <div>{{ product }}</div>
                </div>
                <div class="items-cennter my-4 flex">
                  <div class="w-1/4 font-semibold">Plan:</div>
                  <div>{{ subPlan }}</div>
                </div>

                <button
                  class="absolute right-20 top-16 rounded border border-secondary p-2 px-5"
                >
                  Refresh
                </button>
              </div>
              <!-- <LoadingSpinner v-else /> -->
            </section>

            <section>
              <div class="flex items-center bg-primary-gray py-2.5 text-white">
                <span
                  class="cursor-pointer px-6"
                  :class="{
                    'font-semibold underline':
                      currentTab === 'installation history',
                  }"
                  @click="currentTab = 'installation history'"
                  >Installation History</span
                >
                <span
                  class="cursor-pointer px-6"
                  :class="{
                    'font-semibold underline': currentTab === 'payment history',
                  }"
                  @click="currentTab = 'payment history'"
                  >Payment History</span
                >
                <span
                  class="cursor-pointer pl-5"
                  :class="{
                    'font-semibold underline':
                      currentTab === 'subscription status',
                  }"
                  @click="currentTab = 'subscription status'"
                  >Subscription Status</span
                >
                <span
                  class="cursor-pointer px-6"
                  :class="{
                    'font-semibold underline':
                      currentTab === 'conversation history',
                  }"
                  @click="currentTab = 'conversation history'"
                  >Conversations</span
                >
                <span
                  class="cursor-pointer px-6"
                  :class="{
                    'font-semibold underline': currentTab === 'fault history',
                  }"
                  @click="currentTab = 'fault history'"
                  >Fault History</span
                >
                <span
                  class="cursor-pointer px-6"
                  :class="{
                    'font-semibold underline':
                      currentTab === 'subscription history',
                  }"
                  @click="currentTab = 'subscription history'"
                  >Subscription History</span
                >
              </div>
              <!-- <div v-else></div> -->
            </section>
          </div>
          <installation-history
            :installationHistory="installationHistory"
            v-if="currentTab === 'installation history' && !isLoading"
          ></installation-history>
          <LoadingSpinner
            v-if="currentTab === 'installation history' && isLoading"
          />

          <payment-history
            :email="email"
            v-if="currentTab === 'payment history'"
          ></payment-history>
          <SubscriptionStatus
            :email="email"
            v-if="currentTab === 'subscription status'"
          />
          <conversation-history
            :email="email"
            v-if="currentTab === 'conversation history'"
          ></conversation-history>

          <fault-history
            :faultHistory="faultHistory"
            v-if="currentTab === 'fault history' && !isLoading"
          ></fault-history>
          <LoadingSpinner v-if="currentTab === 'fault history' && isLoading" />

          <subscription-history
            :email="email"
            v-if="currentTab === 'subscription history'"
          ></subscription-history>
        </main>
      </main>
    </template>
  </app-layout>
</template>
