<template>
  <app-layout>
    <template v-slot:main-content>
      <main class="w-full pl-[260px]">
        <AppHorizontalNavigation />
        <section class="p-10">
          <View @click="navigateBack" />
          <div class="mx-3 mt-14 w-full border border-gray-300">
            <div class="h-[51px] w-full bg-black text-center">
              <div
                class="flex flex-row p-3 text-center font-semibold text-white underline"
              >
                Query
              </div>
            </div>
            <div class="my-4 w-full border-gray-400 p-5">
              <div class="my-2 grid grid-cols-1 gap-2">
                <div class="mb-4">
                  <label
                    for="name"
                    class="text-md text-black-800 mb-2 block font-semibold"
                  >
                    Title of Query</label
                  >
                  <label
                    :value="query.title"
                    for="name"
                    class="text-md text-black-800 mb-2 block font-light"
                    >{{ query.title }}</label
                  >
                </div>

                <div class="mb-4">
                  <div>
                    <label for="name" class="font-semibold">Priority Level</label>
                  </div>
                  <label :value="query.priority" for="name" class="my-2 font-light">{{
                    query.priority
                  }}</label>
                </div>
                <div class="my-2 grid grid-cols-1 gap-2">
                  <div class="mb-4">
                    <label
                      for="name"
                      class="text-md text-black-800 mb-2 block font-semibold"
                    >
                      Description of Complaint</label
                    >
                    <textarea
                      :value="query.description"
                      id="comment"
                      class="my-2 w-full rounded-md border-0 text-justify text-sm font-light text-gray-800 focus:outline-none focus:ring-0 dark:bg-white dark:text-black dark:placeholder-gray-400"
                      required
                      readonly
                    >
                    {{ query.description }}
                    </textarea>
                  </div>
                </div>
                <div class="mb-4">
                  <div>
                    <label for="name" class="font-semibold">Invitation Sent To</label>
                  </div>
                  <label :for="'defaulter'" class="mt-4 font-light">
                    {{ query.defaulter_id }}
                  </label>
                </div>
              </div>
              <div class="mb-4">
                <label for="picture" class="mb-2 block font-semibold"
                  >Upload Supporting Evidence/ Documentation</label
                >
              </div>
              <div class="my-3 flex flex-row">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 12 22C17.53 22 22 17.53 22 12C22 6.47 17.53 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM15.59 7L12 10.59L8.41 7L7 8.41L10.59 12L7 15.59L8.41 17L12 13.41L15.59 17L17 15.59L13.41 12L17 8.41L15.59 7Z"
                    fill="#D50036"
                  />
                </svg>
                <div :value="query.evidence" class="mx-1">No upload(s)</div>
              </div>
            </div>
            <div class="h-[51px] w-full bg-black text-center capitalize">
              <div
                class="flex flex-row p-3 text-center font-semibold text-white underline"
              >
                Feedback
              </div>
            </div>
            <div class="my-4 w-full border-gray-400 p-5">
              <div class="my-2 grid grid-cols-1 gap-2">
                <div class="mb-4 p-2">
                  <div>
                    <label for="name" class="font-semibold">Defendant Response</label>
                  </div>
                  <textarea
                    v-model="defendantResponse"
                    id="comment"
                    class="my-2 p-2 w-full rounded-md border-0 text-sm text-gray-900 focus:outline-none focus:ring-0 dark:bg-white dark:text-black dark:placeholder-gray-400"
                    required
                  ></textarea>
                </div>

                <div class="p-2 mb-4">
                  <label
                    for="picture"
                    class="mb-2 block text-sm font-semibold text-gray-900"
                    >Upload Supporting Evidence/ Documentation</label
                  >
                  <input
                    :value="query.contest_evidence"
                    type="file"
                    @change="onFileChanged($event)"
                    accept="image/*"
                    capture
                  />
                </div>
              </div>

              <div class="my-11 mr-10 flex flex-row-reverse">
                <button
                  @click="sendForm"
                  class="shrink-0 rounded-md bg-[#D50036] border border-solid pb-3.5 pl-6 pr-7 pt-3.5 text-white"
                >
                  SEND
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </template>
  </app-layout>
</template>
<script setup>
import { ref, onMounted } from "vue";
import AppLayout from "../../../../layouts/AppLayout.vue";
import AppHorizontalNavigation from "../../../AppHorizontalNavigation.vue";
import View from "./View.vue";
import { useRouter } from "vue-router";
import workplaceRequestsv2 from "../../../../services/workplaceRequestsv2";
import Swal from "sweetalert2";

const router = useRouter();

const query_id = ref("");
const evidence = ref(null);
const query = ref({
  id: 3,
  title: "test",
  priority: "second level",
  type: "Query",
  description: "test",
  status: "sent",
  defaulter_id: [],
  evidence: null,
  response: null,
  contest_evidence: null,
});

const defendantResponse = ref("");

function onFileChanged($event) {
  const target = $event.target;
  if (target && target.files.length > 0) {
    evidence.value = target.files[0];
  }
}

onMounted(() => {
  getQuery();
});

const sendForm = async () => {
  try {
    let payload = new FormData();
    payload.append("response", defendantResponse.value);
    payload.append("query_id", query_id.value);

    if (evidence.value) {
      payload.append("evidence", evidence.value);
    }

    const { status, data } = await workplaceRequestsv2(
      "post",
      `operations/bp/query/feedback/create`,
      payload
    );
    if (status == 422) {
      console.error("Enter Correct Details");
    }
    if (status === 200 || status === 201) {
      console.log(data.data);
      Swal.fire({
        icon: "success",
        title: "Submitted",
        text: "Feedback Sent Successfully",
      });
      resetForm();
    }
  } catch (e) {
    console.error("An error occurred", e);
    Swal.fire({
      icon: "info",
      title: "Info",
      text: e.message,
    });
  }
};

const resetForm = () => {
  defendantResponse.value = null;
  evidence.value = null;
  query_id.value = "";
};

function navigateBack() {
  router.back();
}

const getQuery = async () => {
  try {
    const { status, data } = await workplaceRequestsv2(
      "get",
      "operations/bp/query/3/get"
    );
    if (status === 200) {
      console.log(data.data.data);
      query.value = data.data.data;
      query_id.value = data.data.data.id;
    } else {
      query.value = {};
    }
  } catch (e) {
    console.error("An error occurred", e);
  }
};
</script>
