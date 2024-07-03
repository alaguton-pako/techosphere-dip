<script setup>
const props = defineProps(["conversation", "email"]);
import { formatDate } from "@/helpers/utils.js";
import { onMounted, ref } from "vue";
import ccsRequests from "@/services/ccsRequests";
import LoadingSpinner from "../LoadingSpinner.vue";
const messages = ref([]);
const isLoading = ref(true);
onMounted(() => {
  getMessages();
});

const getMessages = async () => {
  try {
    isLoading.value=true
    const { status, data } = await ccsRequests(
      "post",
      "reports/customer/insight",
      {
        email: props.email,
      }
    );
    if (status === 200) {
      // alert(status)
      let { faults, subscription, installation } = data.data;
      // messages.value=faults.concat(installation. subscription)
      if (faults && faults.length) {
        // faults=faults.map(e=>{
        //   e.tag='bg-red-200'
        //   return e
        // })
        faults = faults.map((obj) => ({ ...obj, tag: "bg-red-200" }));
        messages.value = messages.value.concat(faults);
      }
      if (installation && installation.length) {
        installation = installation.map((e) => ({
          ...e,
          tag: "bg-yellow-200",
        }));
        messages.value = messages.value.concat(installation);
      }
      if (subscription && subscription.length) {
        subscription = subscription.map((e) => ({ ...e, tag: "bg-green-200" }));
        messages.value = messages.value.concat(subscription);
      }
      isLoading.value=false
    }

    // alert(status)
    // console.log(data)
  } catch (e) {}
};
</script>

<template lang="">
  <!-- <table class="w-full table-auto border border-secondary text-center text-sm">
    <thead class="bg-gray-200 text-xs uppercase">
      <tr class="border border-secondary">
        <th class="border border-secondary p-3">Fault Number</th>
        <th class="border border-secondary">Event Name</th>
        <th class="border border-secondary">Date Created</th>
         
      </tr>
    </thead>
    <tbody>
      <tr class="border-b border-secondary" v-for="item in conversation">
  
        <td class="border border-secondary">{{item.fault_no}}</td>
        <td class="border border-secondary">{{item.trigger}}.</td>
        <td class="border border-secondary">{{ formatDate(item.created_at)}}</td>
      </tr>
    </tbody>
  </table> -->
  <!-- </div> -->

  <div
    class="flex items-center justify-center border border-secondary bg-gray-200 py-6"
  >
    <span class="mr-6 font-semibold text-primary">Log:</span>
    <div
      class="grid h-[40px] w-[40px] place-items-center rounded-full bg-gray-300"
    >
      <img src="../../assets/phone.svg" alt="" />
    </div>
    <div
      class="mx-6 grid h-[40px] w-[40px] place-items-center rounded-full bg-gray-300"
    >
      <img src="../../assets/mail.svg" alt="" />
    </div>
    <div
      class="grid h-[40px] w-[40px] place-items-center rounded-full bg-gray-300"
    >
      <img src="../../assets/calendar.svg" alt="" />
    </div>
  </div>

  <div v-if="messages.length && !isLoading">
    <div
      v-for="(message, index) in messages"
      class="mt-5 w-full bg-white border border-grey-600"
    >
      <div class="m-2 p-2 flex flex-row">
        <div class="w-1/2 text-2xl font-bold">
          {{ message.label }}
        </div>
        <div class="w-1/2 flex flex-row-reverse">
          {{ new Date(message.time_created) }}
        </div>
      </div>
      <div class="flex flex-row">
        <div class="ml-10 w-1/4 flex flex-row">
          <div class="w-2/6 font-bold text-basic">Ticket No:</div>
          <div class="w-4/6">{{ message.ticket }}</div>
        </div>
      </div>
      <div class="flex flex-row">
        <div class="ml-10 w-1/4 flex flex-row">
          <div class="w-2/6 font-bold text-basic">Event Name:</div>
          <div class="w-4/6">{{ message.event_name }}</div>
        </div>
      </div>
      <div class="flex flex-row">
        <div class="ml-10 w-1/4 flex flex-row">
          <div class="w-2/6 font-bold text-basic">Ticket No:</div>
          <div class="w-4/6">{{ message.ticket }}</div>
        </div>
      </div>
      <div class="flex flex-row">
        <div class="ml-10 w-1/4 flex flex-row">
          <div class="w-2/6 font-bold text-basic">Message:</div>
          <div class="w-4/6"></div>
        </div>
      </div>
      <div class="flex flex-row">
        <div class="ml-10 w-1/4 flex flex-row">
          <div class="w-2/6 font-bold text-basic">Channels:</div>
          <div v-if="message.channels==1" class="w-4/6">Email</div>
          <div v-else class="w-4/6">{{ message.channels }}</div>
          <!-- <div class="w-4/6">{{ message.channels }}</div> -->
        </div>
      </div>
      <div class="flex flex-row m-5">
        <div class="ml-10 w-2/4 flex flex-row">
          <div class="rounded-full w-auto px-5" :class="`${message.tag}`">
            {{ message.event_name }}
          </div>
          <div class="rounded-full mx-3 w-auto px-5 bg-slate-300">
            {{ message.label }}
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-if="messages.length > 0 && !isLoading" class="px-6 py-10 text-lg">
    No Records
  </div>

  <LoadingSpinner v-if="isLoading"></LoadingSpinner>

</template>
