<template>
    <div>
      <section class="p-10">
        <div class="flex justify-end">
          <button @click="createReport" class="text-white bg-red-600 px-6 py-2 rounded-md">Send</button>
        </div>
        <section class="bg-white border border-gray-400 my-4 p-5 space-y-5">
          <div class="flex flex-col">
            <label for="">Title/Subject:</label>
            <input
              v-model="payload.title"
              type="text"
              name=""
              id=""
              class="border border-gray-400 p-2"
            />
          </div>
  
          <div class="grid grid-cols-2 gap-8">
            <div class="flex flex-col">
              <label for="">Type:</label>
              <select
                v-model="payload.type"
                name=""
                id=""
                class="border border-gray-400 p-3"
              >
                <option >Demerit</option>
                <option >Merit</option>
                <option >Suspension</option>
              </select>
            </div>
            <div v-if="payload.type" class="flex flex-col">
              <label v-if="payload.type=='Merit' || payload.type=='Demerit'" for="">Number of Points</label>
              <label v-if="payload.type=='Suspension'" for="">Number of Days</label>
              <input
                v-model="payload.no_of_points_or_days"
                type="number"
                name=""
                id=""
                class="border border-gray-400 p-3"
              />
         
            </div>
          </div>
          <div class="flex flex-col">
            <label for="">Description:</label>
            <textarea
              v-model="payload.description"
              name=""
              id=""
              cols="30"
              rows="5"
              class="border border-gray-400"
            ></textarea>
          </div>
  
          <div class="flex flex-col">
            <label for="">Defaulter(s):</label>
            <MultiSelect
              v-model="selectedTarget"
              :options="
                users.map((e) => {
                  return {
                    code: e.id,
                    name: e.name,
                  };
                })
              "
              :filter="true"
              optionLabel="name"
              placeholder="Select Recipient"
              :maxSelectedLabels="10"
              class="flex flex-row rounded-lg w-full p-2.5 bg-white border border-gray-300"
            >
              <template #header>
                <div class="flex items-center mb-4">
                  <input
                    id="disabled-checkbox"
                    type="checkbox"
                    @click="selectAll"
                    value=""
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="disabled-checkbox"
                    class="ml-2 text-sm font-medium text-gray-600 test-base dark:text-gray-500"
                    >Select All</label
                  >
                </div>
              </template>
              <template #footer>
                <div class="py-2 px-3 bg-white">
                  <b>{{ selectedTarget ? selectedTarget.length : 0 }}</b>
                  item{{
                    (selectedTarget ? selectedTarget.length : 0) > 1 ? "s" : ""
                  }}
                  selected.
                </div>
              </template>
            </MultiSelect>
          </div>
          <div class="flex flex-col">
            <label for="">Send to:</label>
            <select
              name=""
              v-model="payload.reported_to"
              id=""
              class="border border-gray-400 p-3"
            >
              <option selected>Select One</option>
              <option
                v-for="(user, index) in users"
                :key="index"
                :value="user.id"
                >{{ user.name }}</option
              >
              <!-- <option value="">Tolba Hafiz</option> -->
            </select>
          </div>
          <div class="flex flex-col">
            <label for=""
              >Upload Supporting Evidence/Documentation (Optional):</label
            >
            <div class="border border-gray-400 p-2 mt-2 bg-[#EEEEEE] flex">
              <img
                src="../../../../assets/arrow.up.upload.svg"
                alt=""
                class="mx-3"
              />
              <input
                @change="
                  filesChange($event.target.files);
                  fileCount = $event.target.files.length;
                "
                type="file"
                name=""
                id=""
              />
            </div>
          </div>
        </section>
      </section>
    </div>
  </template>
  
  <style>
  .p-multiselect-filter,
  .p-inputtext,
  .p-multiselect-items-wrapper {
    /* max-height: 200px; */
    background: white;
    border: solid 1px;
    /* justify-content: center; */
    padding-left: 20px;
  }
  
  /* #countries {
        display: none !important;
      } */
  
  /* .p-multiselect-filter-container{
          padding-left: 20px;
          color: black;
        } */
  </style>
  
  <script setup>
  import { onMounted, ref } from "vue";
  import Swal from "sweetalert2";
  import workplaceRequestsv2 from "../../../../services/workplaceRequestsv2";
  import MultiSelect from "primevue/multiselect";
  onMounted(() => {
    users.value = [];
    getUsers();
  });
  const users = ref([
    {
      id: 254,
      name: "zainab babayero",
      email: "salesmanager@suburbanfiberco.com",
    },
  ]);
  const payload = ref({
    title: "",
    type: "",
    no_of_points_or_days: "",
    defaulter_id: [],
    reported_to: null,
    evidence: null,
    description: null,
  });
  const selectedTarget = ref([""]);
  const createReport = async () => {
    try {
      selectedTarget.value = selectedTarget.value.filter((e) => {
        return e != null && e != "";
      });
      let formData = new FormData();
      formData.append("title", payload.value.title);
      selectedTarget.value.forEach((e) => {
        formData.append("defaulter_id[]", e.code);
      });
      formData.append("type", payload.value.type);
      formData.append("no_of_points_or_days", payload.value.no_of_points_or_days);
      formData.append("reported_to", payload.value.reported_to);
      formData.append("evidence", payload.value.evidence);
      formData.append("description", payload.value.description);
      const { status, data } = await workplaceRequestsv2(
        "post",
        "operations/compliance-report/sanction-report/create",
        formData
      );
      if (status == 200) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Report submitted successfully",
        });
      }
  
      if (status != 200) {
        Swal.fire({
          icon: "info",
          title: "Oops...",
          text: "That was not successful",
        });
      }
      console.log("report creation response", data);
    } catch (e) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: e.message,
      });
    }
  };
  
  const filesChange = async (value) => {
    try {
      payload.value.evidence = value[0];
    } catch (e) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: e.message,
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
        text: e.message,
      });
    }
  };
  
  const selectAll = (event) => {
    try {
      if (
        !selectedTarget.value ||
        selectedTarget.value.length != users.value.length
      ) {
        selectedTarget.value = users.value.map((e) => {
          return { email: e.email, fullname: e.name };
        });
        document.querySelectorAll(".p-checkbox-box").forEach((e) => {
          e.classList.add("p-highlight");
          e.innerHTML =
            '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="p-icon p-checkbox-icon undefined" aria-hidden="true" data-pc-section="checkboxicon" style=""><path d="M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z" fill="currentColor"></path></svg>';
        });
      } else {
        selectedTarget.value = null;
        document.querySelectorAll(".p-checkbox-box").forEach((e) => {
          e.classList.remove("p-highlight");
          e.innerHTML =
            '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="p-icon p-checkbox-icon" aria-hidden="true" data-pc-section="checkboxicon" style="display: none;"><path d="M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z" fill="currentColor"></path></svg>';
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
  