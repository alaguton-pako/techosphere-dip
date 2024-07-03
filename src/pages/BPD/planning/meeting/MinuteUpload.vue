<template>
  <div class="mx-20 bg-white border-solid border-2 border-grey-600">
    <div>
      <nav
        class="flex items-center border border-gray-200 bg-black p-3 font-semibold text-white"
      >
        <div class="btn mx-4 text-center capitalize">
          <span class="text-white">
            Minutes
          </span>
        </div>
      </nav>
    </div>
    <section class="pt-4">
      <div class="w-full flex flex-row px-10">
        <div class="w-1/2">
          <div class="text-base">Did This Meeting Hold?</div>
        </div>
        <div class="w-1/2">
          <select
            v-model="NewActionPoint.responsible"
            id="countries"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
          >
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
      </div>
    </section>
    <section class="pt-4 border border-solid border-black m-5 p-5">
      <form class="w-full" @submit.prevent="uploadMinute">
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xl font-bold mb-2"
              for="grid-password"
            >
              Uploads*
            </label>
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-password"
            >
              Upload Minutes*
            </label>
            <div class="relative">
              <input
                name="start"
                type="file"
                @change="
                  filesChange($event.target.files);
                  fileCount = $event.target.files.length;
                "
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                placeholder="Select date start"
              />
            </div>
          </div>
        </div>

        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3 mb-6 md:mb-0">
            <label
              for="countries"
              class="block tracking-wide text-gray-700 text-xs font-bold mb-2"
              >Supporting Files</label
            >
            <div class="relative">
              <input
                name="start"
                type="file"
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
import { ref, onMounted } from "vue";
import workplaceRequestsv2 from "@/services/workplaceRequestsv2";
import attendanceRequest from "@/services/attendance.request";
import { useUserStore } from "../../../../stores/userStore";
import Swal from "sweetalert2";
import { useRoute } from "vue-router";
const emit = defineEmits(["reloadMinute"]);
const route = useRoute();
const users = ref([]);
const sheet = ref([]);
const fileCount = ref(0);
const NewActionPoint = ref({
  meeting_id: 1,
  point: "",
  responsible: "",
  start_date: "",
  due_date: "",
});
onMounted(() => {
  NewActionPoint.value.meeting_id = route.params.id;
  getUsers();
});

const getUsers = async () => {
  try {
    const { status, data } = await workplaceRequestsv2(
      "get",
      "users/get-all-users"
    );
    if (status === 200) {
      users.value = data.data.results.data;
    }

    console.log(users.value);
  } catch (e) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: e.message,
    });
  }
};

const filesChange = (value) => {
  try {
    sheet.value = value;
  } catch (e) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: e.message,
    });
  }
};

const uploadMinute = async () => {
  try {
    const formData = new FormData();
    formData.append("document", sheet.value[0]);
    formData.append("meeting_id", route.params.id);
    const { status, data } = await attendanceRequest(
      "post",
      `meetings/minutes/upload?platform=suburban`,
      formData
    );
    if (status == 200) {
      // alert(data.status)
  
      Swal.fire({
        icon: "success",
        title: data.message,
        showConfirmButton: false,
        timer: 1500,
      });
      // alert(data.message);
    }
    emit("reloadMinute");
  } catch (e) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: e.message,
    });
  }
};
</script>
