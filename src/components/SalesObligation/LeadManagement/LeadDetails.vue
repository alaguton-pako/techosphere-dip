<script setup>
import AppLayout from "@/layouts/AppLayout.vue";
import AppHorizontalNavigation from "@/components/AppHorizontalNavigation.vue";
import AppPagination from "../../AppPagination.vue";
import leadRequest from "@/services/leadRequest";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { auth } from "@/services/apiGatewayRequest";
import CommentForm from "./CommentForm.vue";
import Conversations from "@/components/SalesObligation/LeadManagement/Conversations.vue";
import ConversationHeader from "@/components/SalesObligation/LeadManagement/ConversationHeader.vue";

// onMounted(() => {
//   getLead();
// });
const logType = ref(null);
const toggleLogForm = (value) => {
  logType.value = value;
  newLog.value = !newLog.value;
};
const newLog = ref(false);
const isLoading = ref(false);
const route = useRoute();
const lead = ref({
  id: 8,
  business_name: null,
  address: null,
  state: null,
  sector: null,
  segment: null,
  contact_firstname: null,
  contact_lastname: null,
  email_address: null,
  is_converted: false,
  product_interest: null,
  product_match: null,
  is_proposal_sent: false,
  source: "",
  stage: null,
  created_at: null,
  phone_number: null,
  updated_at: null,
  leads_assignment: {
    id: 4,
    lead_id: 8,
    assigned_name: null,
    assigned_email: null,
    created_at: null,
    updated_at: null,
  },
  lead_conversations: [],
});
const getLead = async () => {
  try {
    let identifier = route.params.id;
    isLoading.value = true;
    lead.value = {};
    if (identifier.includes("@") == false) {
      const { status, data } = await leadRequest(
        "get",
        `leads/single/${route.params.id}`
      );
      if (status == 200) {
        lead.value = data.data;
      }
      if (status == 401) {
        auth();
        getLead();
      }
    }else{
      const { status, data } = await leadRequest(
        "get",
        `leads/single/view-by-email/${route.params.id}`
      );
      if (status == 200) {
        lead.value = data.data;
      }
      if (status == 401) {
        auth();
        getLead();
      }
    }
    isLoading.value = false;
  } catch (e) {
    console.log(e);
    alert(e.message);
  }
  isLoading.value = false;
};
</script>

<template>
  <app-layout>
    <template v-slot:main-content>
      <main class="w-full bg-[#F5F5F5] pl-[260px]">
        <AppHorizontalNavigation />
        <main class="m-14">
          <div>
            <nav
              class="flex items-center border border-gray-200 bg-white p-3 font-semibold text-gray-600"
            >
              <div
                class="flex cursor-pointer items-center"
                @click="$router.push({ name: 'Leads' })"
              >
              <img src="../../../assets/left-arrow.svg" alt="" class="h-3 w-3 mr-3">
                <span class="text-xl font-semibold">View</span>
              </div>
            </nav>
            <section class="pt-8">
              <div class="flex flex-row-reverse">
              <button
              @click="$router.push({ name: 'leads-order' })"
               class="rounded-md bg-primary py-2 px-4 text-white">
               Create Sales Order
             </button>
             </div>
            </section>
            <section class="mt-8">
              <div
                class="flex items-center bg-primary-gray py-2.5 px-6 text-white"
              >
                <h2 class="text-lg font-semibold">Lead Details</h2>
              </div>
              <div class="relative border border-secondary p-12 space-y-3">
                <div class="items-center flex py-2">
                  <div class="w-1/4 font-semibold">Business Name:</div>
                  <div>{{ lead.business_name }}</div>
                </div>
                <div class="items-center flex py-2">
                  <div class="w-1/4 font-semibold">Sector:</div>
                  <div>{{ lead.sector }}</div>
                </div>
                <div class="items-center my-4 flex py-2">
                  <div class="w-1/4 font-semibold">Segment:</div>
                  <div>{{ lead.segment }}</div>
                </div>

                <div class="items-center my-4 flex py-2">
                  <div class="w-1/4 font-semibold">Address:</div>
                  <div>{{ lead.address }}</div>
                </div>
                <div class="items-cennter my-4 flex py-2">
                  <div class="w-1/4 font-semibold">Contact Name:</div>
                  <div>
                    {{ lead.contact_firstname }} {{ lead.contact_lastname }}
                  </div>
                </div>
                <div class="items-cennter my-4 flex py-2">
                  <div class="w-1/4 font-semibold">RC Number:</div>
                  <div>
                    {{ lead.rc_number }}
                  </div>
                </div>
                <div class="items-cennter my-4 flex py-2">
                  <div class="w-1/4 font-semibold">E-mail Address:</div>
                  <div>{{ lead.email_address }}</div>
                </div>

                <div class="items-center my-4 flex py-2">
                  <div class="w-1/4 font-semibold">Contact Phone Number:</div>
                  <div>{{ lead.phone_number }}</div>
                </div>
                <div class="items-center my-4 flex py-2">
                  <div class="w-1/4 font-semibold">Product Interest:</div>
                  <div>{{ lead.product_interest }}</div>
                </div>
                <div class="items-center my-4 flex py-2">
                  <div class="w-1/4 font-semibold">Product Match:</div>
                  <div class="flex flex-col">
                    <div>{{ lead.product_match }}</div>
                    <!-- <div>VPN</div> -->
                  </div>
                </div>
                <div class="items-center my-4 flex py-2">
                  <div class="w-1/4 font-semibold">Assigned to:</div>
                  <div class="flex justify-between">
                    <div>{{ lead?.leads_assignment?.assigned_name }}</div>
                  </div>
                </div>
                <div class="items-center my-4 flex py-2">
                  <div class="w-1/4 font-semibold">
                    Has a Proposal been sent?:
                  </div>
                  <div>{{ lead.is_proposal_sent ? "Yes" : "No" }}</div>
                </div>
              </div>
            </section>

            <ConversationHeader
              @toggleLogForm="(value) => toggleLogForm(value)"
            />
            <Conversations />
          </div>
        </main>
        <CommentForm
          :newLog="newLog"
          :logType="logType"
          @toggleCommentForm="(value) => (newLog = value)"
        />
      </main>
    </template>
    <AppPagination />
  </app-layout>
</template>
