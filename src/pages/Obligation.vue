<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import AppLayout from "../layouts/AppLayout.vue";
import AppHorizontalNavigation from "../components/AppHorizontalNavigation.vue";
import workplaceRequests from "../services/workplaceRequestsv2";
import LoadingSpinner from "../components/LoadingSpinner.vue";
import Swal from "sweetalert2";
const route = useRoute();
const isDiagnosticModalActive = ref(false);
const isEscalateModalActive = ref(false);
const tools = ref("");
const testCarriedOut = ref("");
const testResults = ref("");
const observations = ref("");
const actionTaken = ref(null);
const actionTakenId = ref("");
const fault = ref(null);
// onMounted(() => {
//   fetchNetworkFaultById();
//   getActionTaken();
//   getRecommendedAction();
//   getResponsibleUnit();
// });
const faultEscalationPayload = ref({
  fault_id: route.params.id,
  message: "",
});
const submitFaultEscalation = async () => {
  try {
    const { status, data } = await workplaceRequests(
      "post",
      "network-fault/escalate",
      faultEscalationPayload.value
    );

    if (status == 200) {
      Swal.fire({
        icon: "success",
        title: "success",
        text: "Processed Successfully",
      });
    }else{
      Swal.fire({
      icon: "error",
      title: status,
      text: 'Something went wrong',
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
const fetchNetworkFaultById = async () => {
  const { status, data } = await workplaceRequests(
    "get",
    `user/network/fault/${route.params.id}`
  );

  if (status === 200) {
    fault.value = data.data.results.data;
  }
};

const getActionTaken = async () => {
  const { status, data } = await workplaceRequests(
    "get",
    "network-fault-action/get-fault-action-phases/1"
  );

  if (status === 200) {
    actionTaken.value = data.data.items;
  }
};

const recommendedAction = ref(null);
const recommendedActionId = ref("");
const getRecommendedAction = async () => {
  const { status, data } = await workplaceRequests(
    "get",
    "network-fault-action/get-fault-action-phases/2"
  );

  if (status === 200) {
    recommendedAction.value = data.data.items;
  }
};

const responsibleUnit = ref(null);
const unitId = ref("");
const getResponsibleUnit = async () => {
  const { status, data } = await workplaceRequests(
    "get",
    "network-fault/get-responsible-units"
  );

  if (status === 200) {
    responsibleUnit.value = data.data.results.data;
  }
};

const userByUnit = ref(null);
const selectedUserId = ref(null);
const getUserUnit = async () => {
  const { status, data } = await workplaceRequests(
    "get",
    `network-fault/get-users-by-unit/${unitId.value}`
  );

  if (status === 200) {
    userByUnit.value = data.data;
  }
};

// const handleChange = () => {
//   getUserUnit(unitId);
// };

const isLoading = ref(false);
const addNekworkFault = async () => {
  const payload = {
    parent_id: route.params.id,
    parent_status: "diagnosis provided",
    network_fault_action_type_id: actionTakenId.value,
    input_action_taken: testCarriedOut.value,
    output_action_taken: testResults.value,
    tool: tools.value,
    feedback: observations.value,
    recommended_action_type_id: recommendedActionId.value,
    responsible_unit_id: unitId.value,
    assigned_to: selectedUserId.value,
  };

  if (isLoading.value) {
    return;
  }

  isLoading.value = true;

  const { status } = await workplaceRequests(
    "post",
    "network-fault-action/store",
    payload
  );

  if (status === 200) {
    isLoading.value = false;
    isDiagnosticModalActive.value = false;
  }
};
</script>

<template>
  <app-layout>
    <template v-slot:main-content>
      <main class="w-full bg-[#F5F5F5] pl-[260px]">
        <AppHorizontalNavigation />
        <section class="p-10">
          <nav
            class="flex items-center gap-x-2 border border-gray-200 bg-white p-3 text-xl font-semibold text-gray-600"
            @click="$router.go(-1)"
          >
            <img
              src="../assets/chevron-black.svg"
              alt="go back"
              class="rotate-90"
            />
            <span>Back</span>
          </nav>

          <section
            v-if="fault"
            class="relative mt-12 border border-secondary pb-12"
          >
            <h1
              class="mb-10 bg-primary-black py-3 px-8 text-xl font-medium text-white"
            >
              Fault Information
            </h1>
            <section class="flex px-8 py-3">
              <div class="w-1/4 font-semibold">Ticket</div>
              <div>{{ fault.ticket_number }}</div>
            </section>
            <section class="flex px-8 py-3">
              <div class="w-1/4 font-semibold">Affected:</div>
              <div>{{ fault.affected }}</div>
            </section>
            <section class="flex px-8 py-3">
              <div class="w-1/4 font-semibold">Splitter/Customer/OLT:</div>
              <div>{{ fault.splitter_name }}</div>
            </section>
            <section class="flex px-8 py-3">
              <div class="w-1/4 font-semibold">Email:</div>
              <div>{{ fault.email }}</div>
            </section>
            <section class="flex px-8 py-3">
              <div class="w-1/4 font-semibold">Phone Number:</div>
              <div>{{ fault.phone_number }}</div>
            </section>
            <section class="flex px-8 py-3">
              <div class="w-1/4 font-semibold">Address:</div>
              <div>{{ fault.address }}</div>
            </section>
            <section class="flex px-8 py-3">
              <div class="w-1/4 font-semibold">Area:</div>
              <div>{{ fault && fault.area ? fault.area.area : 'N/A' }}</div>
            </section>
            <section class="flex px-8 py-3">
              <div class="w-1/4 font-semibold">Alternate Email:</div>
              <div>{{ fault.alternate_email }}</div>
            </section>
            <section class="flex px-8 py-3">
              <div class="w-1/4 font-semibold">Alternate Number:</div>
              <div>{{ fault.alternate_number }}</div>
            </section>
            <section class="flex px-8 py-3">
              <div class="w-1/4 font-semibold">Fault Category:</div>
              <div>{{ fault.category }}</div>
            </section>
            <section class="flex px-8 py-3">
              <div class="w-1/4 font-semibold">Fault Type:</div>
              <div>{{ fault.network_fault_type }}</div>
            </section>
            <section class="flex px-8 py-3">
              <div class="w-1/4 flex-shrink-0 font-semibold">
                Fault Description:
              </div>
              <div>
                {{ fault.description }}
              </div>
            </section>
            <section class="flex px-8 py-3">
              <div class="w-1/4 font-semibold">Sub Category:</div>
              <div>{{ fault.sub_category }}</div>
            </section>
            <section class="flex px-8 py-3">
              <div class="w-1/4 font-semibold">
                Assign Responsible Department:
              </div>
              <div>{{ fault.assigned_department }}</div>
            </section>
            <section class="flex px-8 py-3">
              <div class="w-1/4 font-semibold">Assignee</div>
              <div>{{ fault.assigned_to }}</div>
            </section>
            <section class="flex px-8 py-3">
              <div class="w-1/4 font-semibold">Priority:</div>
              <div>{{ fault.priority }}</div>
            </section>
            <section class="flex px-8 py-3">
              <div class="w-1/4 font-semibold">Subscription Days Left:</div>
              <div>{{ fault.subscription_days_left }}</div>
            </section>
            <section class="flex px-8 py-3">
              <div class="w-1/4 font-semibold">Active Subscription Days:</div>
              <div>{{ fault.active_subscription_days }}</div>
            </section>
            <section class="flex px-8 py-3">
              <div class="w-1/4 font-semibold">Date Created:</div>
              <div>{{ fault.created_at }}</div>
            </section>
            <section class="flex px-8 py-3">
              <div class="w-1/4 font-semibold">Created by:</div>
              <div>{{ fault.assigned_by }}</div>
            </section>
            <section class="flex px-8 py-3">
              <div class="w-1/4 font-semibold">Currently Responsible:</div>
              <div>{{ fault.currently_responsible }}</div>
            </section>
            <section class="flex px-8 py-3">
              <div class="w-1/4 font-semibold">Initial response:</div>
              <div>{{ fault.initial_response }}</div>
            </section>
            <section class="flex px-8 py-3">
              <div class="w-1/4 font-semibold">Duration:</div>
              <div>{{ fault.duration }}</div>
            </section>
            <section class="flex px-8 py-3">
              <div class="w-1/4 font-semibold">Resolved on:</div>
              <div>{{ fault.resolved_on }}</div>
            </section>
            <section class="flex px-8 py-3">
              <div class="w-1/4 font-semibold">Compliance Status:</div>
              <div>{{ fault.comp_date }}</div>
            </section>
            <section class="flex px-8 py-3">
              <div class="w-1/4 font-semibold">Image:</div>
              <div>{{ fault?.image }}</div>
            </section>
            <section class="flex px-8 py-3">
              <div class="w-1/4 font-semibold">Actions:</div>
              <div>{{ fault.action }}</div>
            </section>
            <section class="absolute top-28 right-20 flex gap-x-8">
              <button
                class="rounded border border-primary bg-primary p-2 px-5 text-white"
                @click="isEscalateModalActive = true"
              >
                Escalate
              </button>
              <button
                class="rounded border border-secondary p-2 px-5"
                @click="isDiagnosticModalActive = true"
              >
                Provide Diagnostics Details
              </button>
            </section>
          </section>
          <section v-if="fault">
            <nav
              class="flex items-center gap-x-8 bg-primary-black py-3 px-8 font-medium capitalize text-white"
            >
              <router-link :to="{ name: 'actions' }">actions</router-link>
              <router-link :to="{ name: 'escalationss' }"
                >escalations</router-link
              >
              <router-link :to="{ name: 'conversation' }"
                >conversations</router-link
              >
              <router-link :to="{ name: 'event' }">events</router-link>
            </nav>
            <RouterView />
          </section>
          <LoadingSpinner v-if="!fault" />
        </section>
      </main>
      <!-- Diagnostics -->
      <main
        v-if="isDiagnosticModalActive"
        class="fixed top-0 left-0 z-50 grid h-screen w-screen place-items-center overflow-y-scroll overscroll-y-contain bg-primary-black bg-opacity-30 px-32 py-16"
      >
        <div class="w-3/5 bg-white pb-12">
          <div>
            <header
              class="flex items-center justify-between bg-primary py-3 px-10 text-lg font-medium text-white"
            >
              <h1>Add Network Fault Action</h1>
              <img
                src="../assets/close.svg"
                alt="cancel dignosis"
                class="cursor-pointer"
                @click="isDiagnosticModalActive = false"
              />
            </header>
            <div class="flex flex-col gap-y-6 px-8 py-16">
              <div class="flex items-center gap-x-10">
                <div class="flex-shrink-0 font-semibold">Action Taken</div>
                <select
                  v-model="actionTakenId"
                  class="w-full border border-secondary p-2 focus:outline-none"
                >
                  <option selected disabled>Select action Taken</option>
                  <option
                    v-for="(item, index) in actionTaken"
                    :key="index"
                    :value="item.phase"
                  >
                    {{ item.value }}
                  </option>
                </select>
              </div>
              <div class="flex items-center gap-x-10">
                <div class="flex-shrink-0 font-semibold">Test carried out</div>
                <input
                  v-model="testCarriedOut"
                  class="w-full border border-secondary p-2 focus:outline-none"
                />
              </div>
              <div class="flex items-center gap-x-10">
                <div class="flex-shrink-0 font-semibold">Test results</div>
                <input
                  v-model="testResults"
                  class="w-full border border-secondary p-2 focus:outline-none"
                />
              </div>
              <div class="flex items-center gap-x-10">
                <div class="flex-shrink-0 font-semibold">Tools</div>
                <input
                  v-model="tools"
                  class="w-full border border-secondary p-2 focus:outline-none"
                />
              </div>
              <div class="flex items-center gap-x-10">
                <div class="flex-shrink-0 font-semibold">Observations</div>
                <input
                  v-model="observations"
                  class="w-full border border-secondary p-2 focus:outline-none"
                />
              </div>
              <div class="flex items-center gap-x-10">
                <div class="flex-shrink-0 font-semibold">
                  Recommended Action
                </div>
                <select
                  v-model="recommendedActionId"
                  class="w-full border border-secondary p-2 focus:outline-none"
                >
                  <option selected disabled>Select</option>
                  <option
                    v-for="(item, index) in recommendedAction"
                    :key="index"
                    :value="item.phase"
                  >
                    {{ item.value }}
                  </option>
                </select>
              </div>
              <div class="flex items-center gap-x-10">
                <div class="flex-shrink-0 font-semibold">Responsible Unit</div>
                <select
                  v-model="unitId"
                  class="w-full border border-secondary p-2 focus:outline-none"
                  @change="handleChange"
                >
                  <option selected disabled>Select</option>
                  <option
                    v-for="(item, index) in responsibleUnit"
                    :key="index"
                    :value="item.id"
                  >
                    {{ item.unit }}
                  </option>
                </select>
              </div>
              <div class="flex items-center gap-x-10">
                <div class="flex-shrink-0 font-semibold">
                  Responsible individual
                </div>
                <select
                  v-model="selectedUserId"
                  class="w-full border border-secondary p-2 focus:outline-none"
                >
                  <option selected disabled>Select</option>
                  <option
                    v-for="(item, index) in userByUnit"
                    :key="index"
                    :value="item.id"
                  >
                    {{ item.name }}
                  </option>
                </select>
              </div>
            </div>
            <div class="flex flex-row-reverse gap-x-8 px-8">
              <button
                class="rounded border p-2 px-5 text-white"
                :class="{
                  'cursor-not-allowed border-gray-500 bg-gray-500': isLoading,
                  'border-primary bg-primary': !isLoading,
                }"
                @click.prevent="addNekworkFault"
              >
                Save
              </button>
              <button
                class="rounded border border-secondary p-2 px-5"
                @click.prevent="isDiagnosticModalActive = false"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </main>
      <!-- Escalate -->
      <main
        v-if="isEscalateModalActive"
        class="fixed top-0 left-0 z-50 grid h-screen w-screen place-items-center overflow-y-scroll overscroll-y-contain bg-primary-black bg-opacity-30 px-32 py-16"
      >
        <div class="w-3/5 bg-white pb-12">
          <div>
            <header
              class="flex items-center justify-between bg-primary py-3 px-10 text-lg font-medium text-white"
            >
              <h1>Escalate</h1>
            </header>
            <div class="p-8">
              <div>
                <label for="comment" class="font-semibold">Comment</label>
                <textarea
                  v-model="faultEscalationPayload.message"
                  rows="3"
                  class="mt-3 block w-full resize-none border border-secondary p-3 focus:outline-none"
                ></textarea>
              </div>
            </div>
            <div class="flex flex-row-reverse gap-x-6 px-8">
              <button
                @click="submitFaultEscalation()"
                class="rounded border border-primary bg-primary p-2 px-5 text-white"
              >
                Escalate
              </button>
              <button
                class="rounded border border-secondary p-2 px-5"
                @click.prevent="isEscalateModalActive = false"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </main>
    </template>
  </app-layout>
</template>
