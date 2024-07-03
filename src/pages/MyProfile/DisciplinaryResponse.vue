<script setup>
import { ref, onMounted } from "vue";
import workplaceRequestsv2 from "@/services/workplaceRequestsv2";
import { useRoute } from "vue-router";
import Swal from "sweetalert2";
const route = useRoute();
// onMounted(() => {
//   getMyDemeritPoints();
// });
const myDemeritPoints = ref({
  id: null,
  number_of_points: 0,
  query_sent_to: "",
  description: "",
  type: "",
  is_contested: 0,
  sanction_evidence: null,
  evidence: null,
  reponse: null,
});

async function getMyDemeritPoints() {
  try {
    const { status, data } = await workplaceRequestsv2(
      "get",
      `operations/compliance/user-point/view/${route.params.id}`
    );
    if (status === 200) {
      myDemeritPoints.value = data.data.data;
      console.log("merit point data", myDemeritPoints.value);
    }
  } catch (e) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: e.message,
    });
  }
}

function navigateBack() {
  router.back();
}

const complaintText = ref("");

const defendantResponse = ref("");

const handleFileChange = (event) => {
  payload.value.evidence = event.target.files[0];
  // console.log("Selected file:", fileInput.files[0]);
};

const payload = ref({
  id: route.params.id,
  response: null,
  evidence: null,
});

const submitForm = async () => {
  try {
    const formData = new FormData();
    formData.append("response", payload.value.response);
    formData.append("evidence", payload.value.evidence);
    formData.append("id", payload.value.id);
    const { status, data } = await workplaceRequestsv2(
      "post",
      "operations/compliance/user-point/contest",
      formData
    );
    if (status == 200) {
      Swal.fire({
        icon: "success",
        title: "Successful",
        text: "Sent Successfully",
      });
    } else {
      Swal.fire({
        icon: "info",
        title: "error",
        text: data.message,
      });
    }
  } catch (e) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: e.message,
    });
  }
};
</script>



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
                DEMERIT POINTS APPEAL
              </div>
            </div>
            <div class="my-4 w-full border-gray-400 p-5">
              <div class="my-2 grid grid-cols-1 gap-2">
                <div class="mb-4">
                  <label
                    for="name"
                    class="text-md text-black-800 mb-2 block font-semibold"
                  >
                    Type of Sanction</label
                  >
                  <label for="name" class="text-md text-black-800 mb-2 block font-light">
                    {{ myDemeritPoints.type }}
                  </label>
                </div>

                <div class="mb-4">
                  <div>
                    <label for="name" class="font-semibold">Priority Level</label>
                  </div>
                  <label for="name" class="my-2 font-light">Mid-Level</label>
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
                      :value="myDemeritPoints.description"
                      id="comment"
                      rows="4"
                      class="my-2 w-full rounded-md border-0 text-justify text-sm font-light text-gray-800 focus:outline-none focus:ring-0 dark:bg-white dark:text-black dark:placeholder-gray-400"
                      required
                    >
                    </textarea>
                  </div>
                </div>
                <div class="mb-4">
                  <div>
                    <label for="name" class="font-semibold">Query Sent To</label>
                  </div>
                  <ul class="list-disc">
                    <li>
                      <label for="name" class="my-2 font-light">{{
                        myDemeritPoints.query_sent_to
                      }}</label>
                    </li>
                  </ul>
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
                <div class="mx-1">No upload(s)</div>
              </div>
            </div>
            <div class="h-[51px] w-full bg-black text-center">
              <div
                class="flex flex-row p-3 text-center font-semibold text-white underline"
              >
                FEEDBACK
              </div>
            </div>
            <div class="my-4 w-full border-gray-400 p-5">
              <div class="my-2 grid grid-cols-1 gap-2">
                <div class="mb-4">
                  <div>
                    <label for="name" class="font-semibold">Defendant Response</label>
                  </div>
                  <textarea
                    v-model="payload.response"
                    id="comment"
                    rows="4"
                    class="my-2 w-full rounded-md border-0 text-sm text-gray-900 focus:outline-none focus:ring-0 dark:bg-white dark:text-black dark:placeholder-gray-400"
                    required
                  ></textarea>
                </div>

                <div class="mx-2 mb-4">
                  <label
                    for="picture"
                    class="mb-2 block text-sm font-semibold text-gray-900"
                    >Upload Supporting Evidence/ Documentation</label
                  >
                  <input
                    type="file"
                    id="picture"
                    name="picture"
                    required
                    class="w-full border border-gray-500 p-2"
                    @change="handleFileChange"
                  />
                </div>
              </div>

              <div class="my-11 mr-10 flex flex-row-reverse">
                <button
                  @click="submitForm"
                  class="h-[51px] w-[120px] shrink-0 rounded-md border border-solid bg-[#D50036] pb-3.5 pl-6 pr-7 pt-3.5 text-white"
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

