<template>
  <section>
    <!-- <div>
      <div class="mt-3 border border-secondary px-6">
        <div class="flex items-center justify-between py-5">
          <div>
            <h1 class="mb-3 font-semibold">Logged Email</h1>
            <span
              >Customer called that she referred her neighbour due to the good
              service she has enjoyed.</span
            >
          </div>
          <img
            src="@/assets/chevron-black.svg"
            alt=""
            class="cursor-pointer"
            @click="toggleEmail = !toggleEmail"
          />
        </div>
        <div class="flex items-center border-t border-gray-300 py-4 text-sm">
          <div class="h-[40px] w-[40px] rounded-full bg-gray-300"></div>
          <div class="mx-2 font-medium">
            Salome Osha logged an email
          </div>
          <div class="text-xs">● Oct 7, 2020 at 10:41 PM GMT+1</div>
        </div>
      </div>
      <div
        v-if="toggleEmail"
        class="details grid grid-cols-5 gap-0 border border-t-0 border-secondary py-6 pl-20 text-sm"
      >
        <div>
          <div class="text-xs">Contacted</div>
          <div class="mt-2 font-medium">s.osha@legend.ng</div>
        </div>
        <div>
          <div class="text-xs">Call outcome</div>
          <div class="mt-2 font-medium">Connected</div>
        </div>
        <div>
          <div class="text-xs">Date</div>
          <div class="mt-2 font-medium">10/18/2022</div>
        </div>
        <div>
          <div class="text-xs">Time</div>
          <div class="mt-2 font-medium">10/18/2022</div>
        </div>
      </div>
    </div> -->
    <div>
      <div
        v-for="(log, index) in logs"
        :key="index"
        class="mt-3 border border-secondary px-6"
      >
        <div class="flex items-center justify-between py-5">
          <div>
            <h1 class="mb-3 font-semibold">Logged {{ log.type }}</h1>
            <span>{{ log.comment }}.</span>
          </div>
          <img
            src="@/assets/chevron-black.svg"
            alt=""
            class="cursor-pointer"
            @click="expandSchedule(index)"
          />
        </div>
        <!-- <div class="flex items-center border-t border-gray-300 py-4 text-sm">
          <div class="h-[40px] w-[40px] rounded-full bg-gray-300"></div>
          <div class="mx-2 font-medium">
            Salome Osha logged an email
          </div>
          <div class="text-xs">● Oct 7, 2020 at 10:41 PM GMT+1</div>
        </div> -->
        <div
          v-if="log.type == 'Call'"
          :data-logs="`${index}`"
          class="grid grid-cols-5 gap-0 border border-t-0 border-secondary py-6 pl-20 text-sm hidden"
        >
          <div>
            <div class="text-xs">Contacted</div>
            <div class="mt-2 font-medium"></div>
          </div>
          <div>
            <div class="text-xs">Call outcome</div>
            <div class="mt-2 font-medium">{{ log.call_outcome }}</div>
          </div>
          <div>
            <div class="text-xs">Date</div>
            <div class="mt-2 font-medium">{{ formatDate(log.logged_date) }}</div>
          </div>
          <div>
            <div class="text-xs">Time</div>
            <div class="mt-2 font-medium">{{ new Date(log.logged_date).toLocaleTimeString() }}</div>
          </div>
        </div>

        <div
          v-if="log.type != 'Call'"
          :data-logs="`${index}`"
          class="flex items-center border-t border-gray-300 py-4 text-sm hidden"
        >
          <div class="h-[40px] w-[40px] rounded-full bg-gray-300"></div>
          <div class="mx-2 font-medium">
            {{ log.timeline_type }}
          </div>
          <div class="text-xs">● {{ log.logged_date }}</div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import leadRequest from "@/services/leadRequest";
import { useRoute } from "vue-router";
import { auth } from "@/services/apiGatewayRequest";
import { onMounted, ref } from "vue";
import {formatDate, formatDateWithDay} from '../../../helpers/utils.js' 
const route = useRoute();
const props = defineProps(["newLog"]);
const logs = ref([
  {
    id: null,
    lead_id: null,
    type: "",
    call_outcome: null,
    timeline_type: "",
    comment: "",
    logged_date: "",
    created_at: "",
    updated_at: "",
  },
]);
onMounted(() => {
  getConversation();
});
const lead_id = ref(route.params.id);
const getConversation = async () => {
  try {
    const { status, data } = await leadRequest(
      "get",
      `leads/${lead_id.value}/conversations`
    );
    if (status == 401) {
      auth();
      getConversation();
    }
    if (status == 200) {
      console.log(data);
      logs.value = data.data;
    }
    emit("toggleCommentForm", false);
  } catch (e) {}
};

const expandSchedule = (id) => {
  try {
    const div = document.querySelector(`[data-logs="${id}"]`);
    if (div == null) {
      Swal.fire({
        icon: "info",
        title: "missing data",
        text: "No Schedule under this schedule",
      });
      return;
    }
    if ([...div.classList].includes("hidden")) {
      div.classList.remove("hidden");
    } else {
      div.classList.add("hidden");
    }
  } catch (e) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: e.message,
    });
  }
};
const toggleCall = ref(false);
const toggleEmail = ref(false);
</script>
