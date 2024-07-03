<template>
  <section class="p-10">
    <div
      class="bg-black font-semibold text-[20px] text-white justify-start place-content-start flex w-full mt-10 pl-4 pr-4 pt-3 pb-2"
    >
      Project Details
    </div>
    <div class="w-full border border-gray-400 text-gray-600">
      <div class="my-4 flex border-b-white bg-gray-200">
        <div class="mb-4 flex gap-16 border-b-white">
          <label
            for="name"
            class="text-md text-black-800 mx-2 my-2 mb-2 block font-semibold"
            >Project Title:</label
          >
        </div>
        <div class="mb-4">
          <label
            for="name"
            class="text-md text-black-800 mx-28 my-2 mb-2 block w-80 font-light"
          ></label>
        </div>
      </div>
      <div class="flex gap-16 border-gray-200">
        <div class="mb-4 flex">
          <label
            for="name"
            class="text-md text-black-800 mx-2 my-2 mb-2 block font-semibold"
            >Project Manger:</label
          >
        </div>
        <div class="mb-4">
          <label
            for="name"
            class="text-md text-black-800 mx-28 my-2 mb-2 block w-96 font-light"
          ></label>
        </div>
      </div>
      <div class="flex gap-16 border-gray-200 bg-gray-200">
        <div class="mb-4">
          <label
            for="name"
            class="text-md text-black-800 mx-2 my-2 mb-2 block font-semibold"
            >Date:</label
          >
        </div>
        <div class="mb-4">
          <label
            for="name"
            class="text-md text-black-800 mx-28 my-2 mb-2 block w-80 font-light"
          ></label>
        </div>
      </div>
    </div>
    <section>
      <div class="mt-11 mr-10 flex flex-row-reverse gap-8 font-semibold">
        <button
          class="flex shrink-0 rounded-md border border-solid bg-gray-500 pb-3.5 pl-6 pr-7 pt-3.5 text-white"
        >
          ＋ Add New PP
        </button>

        <button
          class="flex shrink-0 rounded-md border border-gray-400 pb-3.5 pl-6 pr-7 pt-3.5 text-gray-400"
        >
          <img src="../../../assets/filter-lines.svg" alt="" class="mr-1 text-gray-500" />
          Filters
        </button>
        <div>
          <button
            @click="toggleDropdown"
            class="flex shrink-0 rounded-md border border-gray-400 pb-3.5 pl-6 pr-7 pt-3.5 text-gray-400"
            aria-label="Export"
          >
            <img
              src="../../../assets/download-cloud-02.svg"
              alt="Export"
              class="mr-1 text-gray-500"
            />
            Export
          </button>
          <div
            v-if="showDropdown"
            class="absolute right-0 mt-2 w-56 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5"
          >
            <div class="py-1">
              <a
                href="#"
                class="block border-b border-gray-200 px-4 py-2 text-sm text-gray-700"
                @click.prevent="exportDocs"
                >Docs</a
              >
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700"
                @click.prevent="exportExcel"
                >Excel Sheet</a
              >
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700"
                @click.prevent="exportPDF"
                >PDF</a
              >
            </div>
          </div>
        </div>
        <button
          class="flex shrink-0 rounded-md border border-gray-400 pb-3.5 pl-6 pr-7 pt-3.5 text-gray-400"
        >
          <img src="../../../assets/trash-01.svg" alt="" class="mr-1 text-gray-500" />
          Delete
        </button>
      </div>
    </section>

    <div class="overflow-x-auto relative shadow-md sm:rounded-lg mt-14">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-800 dark:text-gray-100"
        >
          <tr>
            <th scope="col" class="p-3">S/N</th>
            <th scope="col" class="p-3">Task Title</th>
            <th scope="col" class="p-3">Task Owner</th>
            <th scope="col" class="p-3">Scope</th>
            <th scope="col" class="p-3">Dependency</th>
            <th scope="col" class="p-3">Start Date</th>
            <th scope="col" class="p-3">Due Date</th>
            <th scope="col" class="p-3">Duration</th>
            <th scope="col" class="p-3">Task Percentage</th>
            <th scope="col" class="p-3">Comments</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(task, index) in tasks"
            :key="task.id"
            class="bg-white border-b dark:bg-gray-100 dark:border-gray-400"
          >
            <th scope="row" class="p3 font-medium text-gray-900 dark:text-gray-500">
              {{ index + 1 }}
            </th>
            <td class="p-3">
              <input type="text" v-model="task.title" class="w-full" {{ task.title }} />
            </td>
            <td class="p-3">
              <input type="text" v-model="task.owner" class="w-full" {{ task.owner }} />
            </td>
            <td class="p-3">
              <input type="text" v-model="task.scope" class="w-full" {{ task.scope }} />
            </td>
            <td class="p-3">
              <input
                type="text"
                v-model="task.dependency"
                class="w-full"
                {{
                task.dependency
                }}
              />
            </td>
            <td class="p-3">
              <input
                type="date"
                v-model="task.startDate"
                class="w-full"
                {{
                task.startDate
                }}
              />
            </td>
            <td class="p-3">
              <input
                type="date"
                v-model="task.dueDate"
                class="w-full"
                {{
                task.dueDate
                }}
              />
            </td>
            <td class="p-3">
              <input
                type="text"
                v-model="task.duration"
                class="w-full"
                {{
                task.duration}}
              />
            </td>
            <td class="p-3">
              <div class="place-content-center items-center flex justify-center">
                <ProgressCircle :percentage="task.percentage" />
              </div>
            </td>
            <td class="p-3">
              <input
                type="text"
                v-model="task.comments"
                class="w-full"
                {{
                task.comment
                }}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="mr-10 flex flex-row-reverse gap-4 mt-10">
      <button
        @click="$emit('submit', true)"
        class="rounded-md border border-solid border-[transparent] bg-[#D50036] pb-3.5 pl-7 pr-7 pt-3.5"
      >
        Submit
      </button>
      <button class="shrink-0 rounded-md border border-gray-500 pb-3.5 pl-7 pr-7 pt-3.5">
        Cancel
      </button>
    </div>
  </section>
</template>
<script setup>
import { ref } from "vue";
import ProgressCircle from "./ProgressCircle.vue";

const showDropdown = ref(false);

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value;
};

const exportDocs = () => {};

const exportExcel = () => {};

const exportPDF = () => {};

const tasks = ref([
  {
    id: 1,
    title: "Planning",
    owner: "",
    scope: "",
    dependency: "",
    startDate: "",
    dueDate: "",
    duration: "",
    percentage: "",
    comments: "",
  },
  {
    id: 2,
    title: "Design",
    owner: "Alex Joy",
    scope: "UI/UX",
    dependency: "Planning",
    startDate: "2024-01-10",
    dueDate: "2024-02-15",
    duration: "36 days",
    percentage: 50,
    comments: "In progress",
  },
]);
</script>
