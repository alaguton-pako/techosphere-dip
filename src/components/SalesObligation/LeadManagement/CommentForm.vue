<template>
  <div>
    <AppModal v-if="props.newLog" class="flex flex-row w-2/4">
      <template #modal-content>
        <form @submit.prevent="saveConversation" class="w-full">
          <button
            class="ml-auto grid h-10 w-10 place-content-center rounded-full my-6 border border-primary text-xl text-primary"
            type="button"
            @click="$emit('toggleCommentForm', !props.newLog)"
          >
            𝖷
          </button>

          <section class="">
            <div class="bg-red-600 text-white w-full p-3 mb-10">
              <p>Add Conversation</p>
            </div>
            <!-- <div class="flex flex-col w-full">
              <label for="">Conversation type*</label>
              <select
                v-model="conversation.conversation_type"
                class="border border-gray-600 p-2"
              >
                <option value="" selected disabled
                  >Select Conversation type</option
                >

                <option
                  v-for="(type, index) in types"
                  :key="index"
                  :value="type.value"
                  >{{ type.value }}</option
                >
              </select>
            </div> -->
            <!-- <div class="grid grid-cols-3 space-x-3"> -->
            <div
              v-if="logType == 'Call'"
              class="flex flex-col col-span-2"
            >
              <label for="">Call outcome*</label>
              <select
                v-model="conversation.call_outcome"
                class="border border-gray-600 p-2"
              >
                <option value="" selected disabled>Select Call Outcome</option>
                <option
                  v-for="(callOutcome, index) in callOutcomes"
                  :key="index"
                  :value="callOutcome.value"
                  >{{ callOutcome.value }}</option
                >
                <!-- <option value="">option 3</option> -->
              </select>
            </div>
            <div class="flex flex-col col-span-1">
              <label for="">Timeline Type*</label>
              <select
                v-model="conversation.timeline_type"
                class="border border-gray-600 p-2"
              >
                <option value="" selected disabled>Select Timeline Type</option>
                <option value="Follow Up">
                  Follow Up
                </option>
                <option value="Fulfilment">
                  Fulfilment
                </option>
                <!-- <option value="">option 3</option> -->
              </select>
            </div>
            <!-- </div> -->
            <div class="flex flex-col col-span-1">
              <div class="flex flex-col">
                <label for="">Comment*</label>
                <textarea
                  v-model="conversation.comment"
                  class="border border-gray-600 p-2"
                >
                </textarea>
              </div>
            </div>
          </section>
          <div class="flex justify-center items-center my-5 space-x-6">
            <button
              type="submit"
              id="createLeadButton"
              class="bg-red-600 text-white px-6 py-2 rounded-md"
            >
              <p>Save</p>
            </button>
            <button
              @click="$emit('toggleCommentForm', false)"
              class="border border-gray-400 px-6 py-2 rounded-md"
            >
              <p>Cancel</p>
            </button>
          </div>
        </form>
      </template>
    </AppModal>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import AppModal from "../../AppModal.vue";
import leadRequest from "@/services/leadRequest";
import { useRoute } from "vue-router";
import { auth } from "@/services/apiGatewayRequest";
const props = defineProps(["newLog", "logType"]);
const types = ref([]);
const callOutcomes = ref([]);
const route = useRoute();
const lead_id = ref(route.params.id);
const emit = defineEmits(["toggleCommentForm"]);
onMounted(() => {
  getConversationType();
  getConversationCallOutcome();
});

const getConversationCallOutcome = async () => {
  try {
    const { status, data } = await leadRequest(
      "get",
      "leads/conversation/call-outcomes"
    );
    if (status == 200) {
      callOutcomes.value = data.data;
    }
  } catch (e) {
    alert(e.message);
  }
};
const getConversationType = async () => {
  try {
    const { status, data } = await leadRequest(
      "get",
      "leads/conversation/types"
    );
    if (status == 200) {
      types.value = data.data;
    }
  } catch (e) {
    alert(e.message);
  }
};
const conversation = ref({
  conversation_type: null,
  call_outcome: null,
  timeline_type: null,
  comment: null,
});

const saveConversation = async () => {
  try {
    conversation.value.conversation_type=props.logType
    const { status, data } = await leadRequest(
      "post",
      `leads/${lead_id.value}/conversations/add`,
      conversation.value
    );
    if (status == 401) {
      auth();
      saveConversation();
    }

    if (status == 200) {
      console.log(data);
    }
    emit("toggleCommentForm", false);
  } catch (e) {}
};
</script>
