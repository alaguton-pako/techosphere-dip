<template>
  <div class="mx-20 bg-white border-solid border-2 border-grey-600">
    <section class="pt-4">
      <div class="w-full flex flex-row px-10">
        <div class="w-1/2">
          <div class="text-xl">Add New Action Point</div>
          <div class="text-xs">Compulsory Fields*</div>
        </div>
      </div>
    </section>
    <section class="pt-4">
      <form class="w-full px-10" @submit.prevent="createActionPoint">
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-password"
            >
              Action Point*
            </label>
            <input
              v-model="NewActionPoint.point"
              name="start"
              type="text"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              placeholder="Select date start"
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-password"
            >
              Responsibilities
            </label>

            <select
              @change="getUserKpi"
              v-model="user"
              id="countries"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            >
              <option
                v-for="(user, index) in users"
                :value="user"
                :key="index"
                >{{ user.name }}</option
              >
            </select>
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-password"
            >
              KPI
            </label>
            <select
              v-model="NewActionPoint.kpi_types"
              id="countries"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            >
              <option v-if="userKpi.length < 0 && user.length > 0">No Kpi</option>
              <option
                v-for="(kpi, index) in userKpi"
                :value="kpi.id"
                :key="index"
                >{{ kpi.name }}</option
              >

            </select>
          </div>
        </div>

        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              for="countries"
              class="block tracking-wide text-gray-700 text-xs font-bold mb-2"
              >Start Date</label
            >
            <div class="relative">
              <input
                v-model="NewActionPoint.start_date"
                name="start"
                type="date"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                placeholder="Select date start"
              />
            </div>
          </div>
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              for="countries"
              class="block tracking-wide text-gray-700 text-xs font-bold mb-2"
              >End Date</label
            >
            <div class="relative">
              <input
                v-model="NewActionPoint.due_date"
                name="start"
                type="date"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                placeholder="Select date start"
              />
            </div>
          </div>
        </div>

        <div class="w-full flex justify-end items-end pb-10">
          <button
            class="bg-red-600 text-white font-bold py-2 px-6 mx-1 border rounded"
          >
            Submit
          </button>
          <button
          @click="$emit('closeTabs')"
            class="bg-white-500 font-bold py-2 px-6 border rounded border-gray-700"
          >
            Cancel
          </button>
        </div>
      </form>
    </section>
  </div>
</template>
<script setup>
import { ref, onMounted, computed } from "vue";
import workplaceRequestsv2 from "@/services/workplaceRequestsv2";
import attendanceRequest from "@/services/attendance.request";
import { useUserStore } from "../../../../stores/userStore";
import Swal from "sweetalert2"; 
import { useRoute } from "vue-router";
const emit=defineEmits(['reloadMinute'])
const route = useRoute();

const users = ref([]);
const userKpi = ref([])
const user = ref()
const NewActionPoint = ref({
  meeting_id: 1,
  point: "",
  responsible: "",
  kpi_types:"",
  start_date: "",
  due_date: "",
  user_id: ""
});


onMounted(() => {
  NewActionPoint.value.meeting_id = route.params.id;
  getUsers();
});

const createActionPoint = async () => {
  try {
    const { status, data } = await attendanceRequest(
      "post",
      `meetings/actionpoint/store?platform=suburban`,
      NewActionPoint.value
    );
    if (status == 200) {
     Swal.fire({
        icon: "success",
        title: data.data.message ? data.data.message : "",
        showConfirmButton: false,
        timer: 1500,
      });
    }

    emit('reloadMinute')
  } catch (e) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Error Creating Action point",
    });
  }
};

const getUsers = async () => {
  try {
    const { status, data } = await workplaceRequestsv2(
      "get",
      "users/get-all-users"
    );
    if (status === 200) {
      users.value = data.data.results.data;
    }
  } catch (e) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Error fetching data",
    });
  }
};

const getUserKpi = async () => {
  NewActionPoint.value.responsible = user.value.email
  NewActionPoint.value.user_id = user.value.id
  try {
    const { status, data } = await workplaceRequestsv2(
      "get",
      `kpi/user/${user.value.id}`
    );
    if (status === 200) {
      userKpi.value = data.data.data;
    }
  } catch (e) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Error fetching data",
    });
  }
}
</script>
