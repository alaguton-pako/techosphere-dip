<script setup>
import { ref, onMounted, computed } from "vue";
import { useUserStore } from "@/stores/userStore.js";
import workplaceRequestsv2 from "@/services/workplaceRequestsv2.js";
import Swal from "sweetalert2";
const current = ref(1);
const from = ref(0);
const to = ref(0);
const pages = ref(1);
const total = ref(0);
const requests = ref([]);
const recordsPerPage = ref(20);
const userStore = useUserStore();
const pagination = computed(() => {
  return {
    current: current.value,
    from: from.value,
    to: to.value,
    pages: pages.value,
    total: total.value,
    recordsPerPage: recordsPerPage.value,
  };
});

// const approveLeave = async (index) => {
//   try {
//     let rejected = document.getElementById(`reject${index}`);
//     let approved = document.getElementById(`accept${index}`);
//     let payload = { status: "", id: index };

//     if (rejected.checked) {
//       payload.status = "rejected";
//     }
//     if (approved.checked) {
//       payload.status = "approved";
//     }
//     const { status, data } = await workplaceRequestsv2(
//       "post",
//       `leave/approve-leave`,
//       payload
//     );
//     if (status == 200) {
//       getPendingLeave();
//     }
//   } catch (e) {
//     Swal.fire({
//       icon: "error",
//       title: "Oops...",
//       text: e.message,
//     });
//   }
// };

// async function getPendingLeave() {
//   try {
//     const { status, data } = await workplaceRequestsv2(
//       "get",
//       `leave/team-leave-requests`
//     );
//     if (status === 200) {
//       requests.value = data.data.results.data;
//     }
//   } catch (e) {
//     Swal.fire({
//       icon: "error",
//       title: "Oops...",
//       text: e.message,
//     });
//   }
// }

// const expandRequest = (id) => {
//   try {
//     const div = document.querySelector(`[data-reqeust="${id}"]`);
//     if (div == null) {
//       Swal.fire({
//         icon: "info",
//         title: "missing data",
//         text: "No Task under this schedule",
//       });
//       return;
//     }
//     if ([...div.classList].includes("hidden")) {
//       div.classList.remove("hidden");
//     } else {
//       div.classList.add("hidden");
//     }
//   } catch (e) {
//     Swal.fire({
//       icon: "error",
//       title: "Oops...",
//       text: e.message,
//     });
//   }
// };

// onMounted(()=>{
//     getPendingLeave()
// })
</script>
<template lang="">
  <div
    v-for="(request, index) in requests"
    :key="index"
    class="my-2 border-b bg-white p-6"
  >
    <div class="flex items-center justify-between">
      <div class="w-1/6 font-semibold">
        {{ request.name }}
      </div>
      <div class="text-sm">{{ request.start_date }}</div>
      <div
        class="grid place-content-center rounded-md border px-3 py-2 capitalize text-white"
        :class="{
          'border-primary bg-primary': request.status === 'completed',
          'border-yellow-600 bg-yellow-600': request.status === 'pending',
        }"
      >
        {{ request.status }}
      </div>
      <img
        @click.stop="expandRequest(request.name + '-' + index)"
        src="@/assets/chevron-black.svg"
        alt=""
        class=""
      />
    </div>

    <div :data-reqeust="`${request.name}-${index}`" class="hidden">
      <h2 class="my-3 font-semibold">Start date: {{ request?.start_date }}</h2>
      <h2 class="my-3 font-semibold">End date: {{ request?.end_date }}</h2>

      <h2 class="my-3 font-semibold">
        Leave Applied for: {{ request?.leave_request_type_name }}
      </h2>
      <h2 class="my-3 font-semibold">
        Description: {{ request?.description }}
      </h2>

      <div class="flex space-x-10 font-semibold">
        <div>
          <label class="pr-3" for="accept">ACCEPT</label>
          <input
            v-model="acceptLeave"
            value="accept"
            type="radio"
            :name="`leaveDecision${request?.id}`"
            :id="`accept${request?.id}`"
          />
        </div>

        <div>
          <label class="px-3" for="reject">REJECT</label>
          <input
            v-model="rejectLeave"
            value="reject"
            type="radio"
            :name="`leaveDecision${request?.id}`"
            :id="`reject${request?.id}`"
          />
        </div>
      </div>
      <button
        @click="approveLeave(request?.id)"
        class="float-right mt-5 rounded-md bg-primary px-6 py-2 text-sm text-white"
      >
        Submit
      </button>
    </div>
  </div>
</template>
