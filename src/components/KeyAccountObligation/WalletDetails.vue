<script setup>
import workplaceRequestsv3 from '../../services/workplaceRequestv3'
import { formatDate } from '@/helpers/utils.js'
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import AppModal from '@/components/AppModal.vue'
import AppLayout from '@/layouts/AppLayout.vue'
import AppHorizontalNavigation from '@/components/AppHorizontalNavigation.vue'
import Swal from 'sweetalert2'
import { useUserStore } from '@/stores/userStore'

import InstallationHistory from '@/components/customers/InstallationHistory.vue'
import SubscriptionHistory from '@/components/customers/SubscriptionHistory.vue'
import PaymentHistory from '@/components/customers/PaymentHistory.vue'
import ConversationHistory from '@/components/customers/Conversation.vue'
import FaultHistory from '@/components/customers/FaultHistory.vue'

const store = useUserStore()
const logVisit = ref(false)
const addComment = ref(false)
const route = useRoute()

// console.log(store.$state.user.email)
// console.log(store.$state.user.name)

const business_name = ref()
const customer_status = ref()
const customer_id = ref()
const sector = ref()
const segment = ref()
const customer_profile = ref()
const address = ref()   
const email = ref()
const product = ref()
const walletSize = ref(0)
const wallet_share = ref(0)
const name_of_plan = ref()
const subscription_name = ref()
const frequency = ref('')
const addCommentPopUp = ''
// const logged_by = store.$state.user.name
// const logged_by_email = store.$state.user.email
const purpose_of_visit = ref('')
const comment = ref('')
const date_communicated = ref('')
const time_communicated = ref('')
const editWallet = ref(false)
// const wallet_size = ref ('')
const updated_wallet_size = ref('')
const visitFrequency = ['Daily', 'Weekly', 'Monthly']
// const commentArray = ref([])
// const visitationArray = ref([])

const requestCompleted = ref(false)
const current = ref(1)
const from = ref(0)
const to = ref(0)
const pages = ref(0)
const total = ref(0)
const isLoading = ref(true)

const purposeOfVisits = [
  'Customer Survey',
  'Proposal Submission/Collection',
  'Complaint',
  'Other',
]
// onMounted(() => {
//   getWalletShareDetails()
//   getVisitation(current.value)
// })

const walletShareDetails = ref([])
const getWalletShareDetails = async () => {
  try {
    const { status, data } = await workplaceRequestsv3(
      'get',
      `wallet-share/${route.params.id}`
    )
    if (status == 401) {
    }
    if (status == 200) {
      walletShareDetails.value = data.data
      business_name.value = data.data.business[0].business_name
      customer_status.value = data.data.runstat
      customer_id.value = data.data.unique_identifier
      sector.value = data.data.sector
      segment.value = data.data.segment
      customer_profile.value = data.data.profile_type
      address.value = data.data.home_address
      email.value = data.data.email_address
      walletSize.value = data.data.wallet_size
      wallet_share.value = data.data.wallet_share
      subscription_name.value = data.data.business[0].subscription_name
      name_of_plan.value = data.data.business[0].name_of_plan
      frequency.value =
        data.data.customer_visitation_frequency.visitation_frequency
      product.value = subscription_name.value + ' - ' + name_of_plan.value
    }
  } catch (e) {
    console.log(e.message)
  }
}

const visitation = ref([])
const getVisitation = async ( pageNumber) => {
  try {
    const { status, data } = await workplaceRequestsv3(
      'get',
      `${route.params.id}/log-visitation?records_per_page=${to.value}&page_number=${pageNumber}`
    )
    if (status == 200) {
      visitation.value = data.data
      isLoading.value = false
      current.value = data.pagination.current_page
      from.value = data.pagination.current_page
      to.value = data.pagination.size
      pages.value = data.pagination.pageCount
      total.value = data.pagination.totalCount
      requestCompleted.value = true
      console.log(data)

      //   commentArray.value = visitation.value.filter(
      //     (item) => item.type === 'comment'
      //   )

      //   visitationArray.value = visitation.value.filter(
      //     (item) => item.type === null
      //   )
    }
  } catch (e) {
    console.log(e.message)  
  }
}
const pagination = computed(() => {
  return {
    current: current.value,
    from: from.value,
    to: to.value,
    pages: pages.value,
    total: total.value,
  }
})

const visitation_frequency = ref( )
const visitationFrequency = async () => {
  try {
    const { status, data } = await workplaceRequestsv3(
      'post',
      `${route.params.id}/update-visitation-frequency`,
      {
        visitation_frequency: visitation_frequency.value,
      }
    )

    if (status == 422) {
      Swal.fire({
        icon: 'info',
        title: 'Info',
        text: data ? data.message : 'Enter Correct details',
      })
    }

    if (status == 200 || status == 201) {
      Swal.fire({
        icon: 'success',
        title: 'Submitted',
        text: 'Visitation Frequency Updated Successfully',
      })
      setTimeout(function () {
        location.reload()
      }, 2000)
    } else {
      Swal.fire({
        icon: 'info',
        title: 'Enter Valid Details',
        text: data ? data.message : 'Invalid Request',
      })
    }
  } catch (e) {
    console.log(e)
    Swal.fire({
      icon: 'info',
      title: 'Info',
      text: e.message,
    })
  }
}

const postVisitationData = () => {
  let obj = {
    type: logVisit.value === true ? 'visitation' : 'comment',
    logged_by: store.$state.user.name,
    logged_by_email: store.$state.user.email,
    comment: comment.value,
  }
  if (logVisit.value === true) {
    obj.purpose_of_visit = purpose_of_visit.value
    obj.date_communicated = date_communicated.value
    obj.time_communicated = time_communicated.value
  }
  return obj
}

const postVisitation = async () => {
  try {
    const { data, status } = await workplaceRequestsv3(
      'post',
      `${route.params.id}/log-visitation`,
      postVisitationData()
    )
    if (status == 422) {
      Swal.fire({
        icon: 'info',
        title: 'Info',
        text: data ? data.message : 'Enter Correct details',
      })
    }
    if (status == 200 || status == 201) {
      Swal.fire({
        icon: 'success',
        title: 'Submitted',
        text: 'Log Created Successfully',
      })
      setTimeout(function () {
        location.reload()
      }, 2000)
    } else {
      Swal.fire({
        icon: 'info',
        title: 'Enter Valid Details',
        text: data ? data.message : 'Invalid Request',
      })
    }
  } catch (e) {
    console.log(e)
    Swal.fire({
      icon: 'info',
      title: 'Info',
      text: e.message,
    })
  }
}

const updateWalletSize = async () => {
  try {
    const { status, data } = await workplaceRequestsv3(
      `patch`,
      `update/wallet-size?email=${email.value}`,
      {
        wallet_size: updated_wallet_size.value,
      }
    )
    if (status == 422) {
      Swal.fire({
        icon: 'info',
        title: 'Updated',
        text: "This input should only contain numbers. ',' are not allowed",
        // text: "Wallet Size Updated Successfully"
      })
    }
    if (status == 200 || status == 201) {
      Swal.fire({
        icon: 'success',
        title: 'Updated',
        text: 'Wallet Size Updated Successfully',
      })
      setTimeout(function () {
        location.reload()
      }, 500)
    } else {
      Swal.fire({
        icon: 'info',
        title: 'Enter a Valid Request',
        text: data ? data.message : 'Invalid Request',
      })
    }
  } catch (e) {
    console.log(e)
  }
}

const currentTab = ref('installation history')
</script>

<template>
  <app-layout>
    <template v-slot:main-content>
      <main class="w-full bg-[#F5F5F5] pl-[260px]">
        <AppHorizontalNavigation />
        <main class="m-14">
          <nav
            class="flex items-center border border-gray-200 bg-white p-3 font-semibold text-gray-600"
          >
            <div
              class="flex cursor-pointer items-center"
              @click="$router.go(-1)"
            >
              <img src="@/assets/chevron-black.svg" class="mr-1 rotate-90" />
              <span class="text-xl font-semibold"> Back</span>
            </div>
          </nav>

          <section class="mt-4">
            <div
              class="flex items-center bg-primary-gray px-6 py-2.5 text-white"
            >
              <h2 class="text-lg font-semibold">Customer Details</h2>
            </div>
            <div class="relative border border-secondary p-12">
              <div class="flex items-center">
                <div class="w-1/4 font-semibold">Business Name:</div>
                <div>{{ business_name }}</div>
              </div>
              <div class="my-6 flex items-center">
                <div class="w-1/4 font-semibold">Customer Status:</div>
                <div>
                  <span
                    class="rounded border border-primary-green px-4 py-1 text-base text-primary-green"
                    >{{ customer_status }}</span
                  >
                </div>
              </div>
              <div class="my-6 flex items-center">
                <div class="w-1/4 font-semibold">Customer ID:</div>
                <div>{{ customer_id }}</div>
              </div>
              <div class="my-6 flex items-center">
                <div class="w-1/4 font-semibold">Sector</div>
                <div>{{ sector }}</div>
              </div>
              <div class="mt-6 flex items-center">
                <div class="w-1/4 font-semibold">Segment</div>
                <div>{{ segment }}</div>
              </div>
              <div class="my-6 flex items-center">
                <div class="w-1/4 font-semibold">Customer Profile:</div>
                <div>{{ customer_profile }}</div>
              </div>
              <div class="my-6 flex items-center">
                <div class="w-1/4 font-semibold">Address:</div>
                <div class=" ">{{ address }}</div>
              </div>
              <div class="my-6 flex items-center">
                <div class="w-1/4 font-semibold">Email:</div>
                <div>{{ email }}</div>
              </div>
              <div class="my-6 flex items-center">
                <div class="w-1/4 font-semibold">Product/Services:</div>
                <div>{{ product }}</div>
              </div>
              <div class="my-6 flex items-center">
                <div class="w-1/4 font-semibold">Wallet Size:</div>
                <div>
                  {{
                    new Intl.NumberFormat('en-NG', {
                      style: 'currency',
                      currency: 'NGN',
                    }).format(walletSize)
                  }}
                </div>
              </div>

              <div class="my-6 flex items-center">
                <div class="w-1/4 font-semibold">Wallet Share:</div>
                <div>{{ new Intl.NumberFormat('en-NG', {
                      style: 'currency',
                      currency: 'NGN',
                    }).format(wallet_share)  }}</div>
              </div>
              <button
                class="absolute right-20 top-16 rounded border border-secondary p-2 px-5"
              >
                Refresh
              </button>

              <AppModal v-if="editWallet">
                <template #modal-content>
                  <form action="" @submit.prevent="updateWalletSize">
                    <div
                      @click="editWallet = false"
                      class="my-6 ml-auto grid h-10 w-10 place-content-center rounded-full border border-primary text-xl text-primary"
                    >
                      X
                    </div>
                    <p>Enter New Value:</p>
                    <div class="flex flex-col space-y-4">
                      <input
                        v-model="updated_wallet_size"
                        type="number"
                        required
                        class="border border-gray-300 p-2"
                      />
                      <button
                        class="rounded border border-secondary bg-red-600 p-2 px-4 text-white"
                      >
                        Save
                      </button>
                    </div>
                  </form>
                </template>
              </AppModal>

              <button
                @click="editWallet = !editWallet"
                class="absolute bottom-28 right-20 rounded border border-secondary p-2 px-8"
              >
                Edit
              </button>
            </div>
          </section>

          <section class="mt-4">
            <div
              class="flex items-center bg-primary-gray px-6 py-2.5 text-white"
            >
              <h2 class="text-lg font-semibold">Company Target</h2>
            </div>
            <div class="relative border border-secondary p-12">
              <div class="flex items-center">
                <div class="w-1/4 font-semibold">Wallet Size:</div>
                <div>     {{
                    new Intl.NumberFormat('en-NG', {
                      style: 'currency',
                      currency: 'NGN',
                    }).format(0)
                  }}</div>
              </div>
              <div class="my-6 flex items-center">
                <div class="w-1/4 font-semibold">Wallet Target Achieved:</div>
                <div>     {{
                    new Intl.NumberFormat('en-NG', {
                      style: 'currency',
                      currency: 'NGN',
                    }).format(0)
                  }}</div>
              </div>
              <div class="my-6 flex items-center">
                <div class="w-1/4 font-semibold">Net Wallet Size Target:</div>
                <div>     {{
                    new Intl.NumberFormat('en-NG', {
                      style: 'currency',
                      currency: 'NGN',
                    }).format(0)
                  }}</div>
              </div>
              <div class="border border-gray-500 p-5">
                <p class="my-6 text-2xl font-semibold">
                  Company Target Analysis
                </p>
                <img src="../../assets/key-charts.svg" alt="" />
              </div>
            </div>
          </section>

          <section class="mt-4">
            <div
              class="flex items-center bg-primary-gray px-6 py-2.5 text-white"
            >
              <h2 class="text-lg font-semibold">Visitation Plan</h2>
            </div>
            <div class="border bg-[#EBEBEB] py-5">
              <form
                @submit.prevent="visitationFrequency"
                class="flex items-center justify-between px-5 py-2"
              >
                <div class="flex space-x-4">
                  <div class=" ">Visit Frequency:</div>
                  <div>{{ frequency }}</div>
                </div>

                <div class="flex space-x-3">
                  <div class="px-5 py-2">Update Frequency</div>
                  <select
                    class="rounded border border-secondary p-2 px-4"
                    required
                    v-model="visitation_frequency"
                  >
                    <option value="" disabled class="text-center">Edit</option>
                    <option
                      v-for="item in visitFrequency"
                      :key="item.id"
                      :value="item"
                    >
                      {{ item }}
                    </option>
                  </select>
                  <button class="border border-gray-300 px-5 py-2">
                    Update
                  </button>
                </div>
              </form>

              <div
                class="flex justify-center space-x-3 border border-gray-400 py-3"
              >
                <div
                  class="cursor-pointer rounded-md bg-red-600 px-4 py-2 text-center text-white"
                  @click="logVisit = !logVisit"
                >
                  <p>Log Visitation</p>
                </div>
                <div
                  class="cursor-pointer rounded-md border border-gray-500 px-4 py-2 text-center"
                  @click="addComment = !addComment"
                >
                  <p>Add Comment</p>
                </div>
              </div>
            </div>
          </section>

          <section class="mt-4 border border-gray-400">
            <div>
              <ul
                class="border-b border-gray-400"
                v-for="log in visitation"
                :key="log.created_at"
              >
                <li>
                  <div v-if="log.type === 'visitation'">
                    <p class="px-3 font-semibold underline">
                      Logged Visitation
                    </p>

                    <div class="p-5 text-[14px]">
                      <p class="my-3">
                        {{ log.comment }}
                      </p>
                      <div class="flex space-x-10">
                        <p class="py-3">{{ logged_by }} logged a visitation</p>
                      </div>
                    </div>
                    <div class="flex justify-between">
                      <div class="p-4 px-6">
                        <p class="text-gray-500">Contacted</p>
                        <p>{{ logged_by_email }}</p>
                      </div>
                      <div class="p-4 px-6">
                        <p class="text-gray-500">Purpose of Visit</p>
                        <p>{{ log.purpose_of_visit }}</p>
                      </div>
                      <div class="p-4 px-6">
                        <p class="text-gray-500">Date</p>
                        <p>{{ formatDate(log.date_communicated) || 'N/A' }}</p>
                      </div>
                      <div class="p-4 px-6">
                        <p class="text-gray-500">Time</p>
                        <p>{{ log.time_communicated || 'N/A' }}</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="px-3">
                  <div v-if="log.type === 'comment'">
                    <p class="font-semibold underline">Comment</p>

                    <p class="my-3">
                      {{ log.comment }}
                    </p>
                    <div class="flex space-x-10">
                      <p class="py-3">{{ logged_by }} made a comment</p>
                      <p class="py-3 text-gray-500">
                        {{ log.date_communicated }}
                        {{ log.time_communicated || 'N/A' }}
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <AppPagination
              class="mx-0 my-8"
              v-if="requestCompleted"
              :pagination="pagination"
              @fetchRecords="getWalletShare"
            />
          </section>

          <!-- Log Visitation Modal Starts -->
          <AppModal v-if="logVisit">
            <template #modal-content>
              <form @submit.prevent="postVisitation">
                <button
                  class="my-6 ml-auto grid h-10 w-10 place-content-center rounded-full border border-primary text-xl text-primary"
                  type="button"
                  @click="logVisit = false"
                >
                  𝖷
                </button>

                <section class="space-y-5">
                  <div class="mb-10 w-full bg-red-600 p-3 text-white">
                    <p class="type-log" data-log="visitation">Log Visitation</p>
                  </div>
                  <div class="px-4">
                    <p>Purpose of Visit:</p>
                    <select
                      name=""
                      id=""
                      class="w-full border border-gray-500 p-2"
                      v-model="purpose_of_visit"
                    >
                      <option value="" disabled>Select Purpose of Visit</option>
                      <option
                        v-for="item in purposeOfVisits"
                        :key="item.id"
                        :value="item"
                      >
                        {{ item }}
                      </option>
                    </select>
                  </div>
                  <div class="px-4">
                    <p>Comment</p>
                    <textarea
                      name=""
                      id=""
                      cols="70"
                      rows="4"
                      class="border border-gray-500 p-4"
                      v-model="comment"
                    ></textarea>
                  </div>
                </section>
                <div class="flex justify-center space-x-6 text-sm">
                  <div class="flex space-x-3">
                    <p>Communicated Date:</p>
                    <input
                      type="date"
                      name=""
                      id=""
                      class="border border-gray-400 text-sm"
                      v-model="date_communicated"
                    />
                  </div>
                  <div class="flex space-x-3">
                    <p>Time:</p>
                    <input
                      type="time"
                      name=""
                      id=""
                      class="border border-gray-400 text-sm"
                      v-model="time_communicated"
                    />
                  </div>
                </div>

                <div
                  class="my-5 flex items-center justify-end space-x-2 border-t border-gray-300 p-3"
                >
                  <div class="rounded-md border border-gray-400 px-6 py-2">
                    <p>Cancel</p>
                  </div>
                  <div class="rounded-md bg-red-600 px-6 py-2 text-white">
                    <button type="submit">Save</button>
                  </div>
                </div>
              </form>
            </template>
          </AppModal>
          <!-- Log Visitation ends -->

          <!-- Add Comment Modal Starts -->
          <AppModal v-if="addComment">
            <template #modal-content>
              <form @submit.prevent="postVisitation">
                <button
                  class="my-6 ml-auto grid h-10 w-10 place-content-center rounded-full border border-primary text-xl text-primary"
                  type="button"
                  @click="addComment = false"
                >
                  𝖷
                </button>

                <section class="space-y-5">
                  <div class="mb-10 w-full bg-red-600 p-3 text-white">
                    <p class="type-log" data-log="commet">Comment</p>
                  </div>
                  <div class="px-4">
                    <p>Comment</p>
                    <textarea
                      name=""
                      id=""
                      cols="70"
                      rows="8"
                      class="border border-gray-500 p-5"
                      v-model="comment"
                    ></textarea>
                  </div>
                </section>
                <div class="my-5 flex items-center justify-end space-x-2">
                  <div
                    class="pxl-6 rounded-md border border-gray-400 px-5 py-2"
                  >
                    <p>Cancel</p>
                  </div>
                  <div class="rounded-md bg-red-600 px-6 py-2 text-white">
                    <button type="submit">Save</button>
                  </div>
                </div>
              </form>
            </template>
          </AppModal>
          <!-- Add Comment Modal ends -->
        </main>
      </main>
    </template>
  </app-layout>
</template>
