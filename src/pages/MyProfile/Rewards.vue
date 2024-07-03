<template>
  <section>
    <div class="mt-3 justify-between rounded-md bg-white p-5">
      <p class="mb-4 text-xl font-bold">My Points</p>
      <section class="grid grid-cols-4 gap-2 font-[10px]">
        <div class="rounded-md border border-secondary-gray bg-white text-center">
          <h2 class="border-b border-b-secondary-gray py-4 text-sm font-bold">
            TOTAL MERIT
          </h2>
          <div class="py-10 text-[32px] font-bold">
            {{ userPoints.total_metric }}
          </div>
        </div>
        <div class="rounded-md border border-secondary-gray bg-white text-center">
          <h2 class="border-b border-b-secondary-gray py-4 text-sm font-bold">
            TOTAL DEMERIT
          </h2>
          <div class="py-10 text-[32px] font-bold">
            {{ userPoints.total_demetric }}
          </div>
        </div>
        <div class="rounded-md border border-secondary-gray bg-white text-center">
          <h2 class="border-b border-b-secondary-gray py-4 text-sm font-bold">
            MERIT OF THE MONTH
          </h2>
          <div class="py-10 text-[32px] font-bold">
            {{ userPoints.metric_month }}
          </div>
        </div>
        <div class="rounded-md border border-secondary-gray bg-white text-center">
          <h2 class="border-b border-b-secondary-gray py-4 text-sm font-bold">
            DEMERIT OF THE MONTH
          </h2>
          <div class="py-10 text-[32px] font-bold">
            {{ userPoints.demetrics_month }}
          </div>
        </div>
      </section>
      <section>
        <p class="my-7 mb-8 text-xl font-bold">My Points</p>
        <table class="w-full table-auto border-secondary text-center text-sm font-normal">
          <thead class="bg-gray-200">
            <tr class="border-secondary">
              <th class="border-secondary p-3 font-normal">S/N</th>
              <th class="border-r border-secondary p-3 font-normal">
                ACHIEVEMENTS/OFFENSES
              </th>
              <th class="border-secondary p-3 font-normal">DATE</th>
              <th class="border-secondary p-3 font-normal">ASSIGNED BY</th>
              <th class="border-r border-secondary p-3 font-normal">TYPE OF POINTS</th>
              <th class="border-secondary p-3 font-normal">NO OF POINTS</th>
              <th class="border-secondary p-3 font-normal">CONTEST</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(point, index) in userPoints.points" :key="index">
              <td class="border-secondary p-3">{{ index + 1 }}.</td>
              <td class="border-r border-secondary p-3">
                {{ point.cause }}
              </td>
              <td class="border-secondary p-3">{{ point.date }}</td>
              <td class="border-secondary p-3">
                {{ point.assigned_by }}
              </td>
              <td class="border-r border-secondary p-3">
                {{ point.type }}
              </td>
              <td class="border-secondary p-3">{{ point.points }}</td>
              <td class="cursor-pointer border-secondary p-3 underline">
                <router-link
                  v-if="point.type.includes('points')"
                  :to="{ name: 'merit', params: { id: point.id } }"
                >
                  {{ point.is_contested }}
                </router-link>
                <router-link v-else :to="{ name: 'demerit', params: { id: point.id } }">
                  {{ point.is_contested }}
                </router-link>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <section class="mt-16 border-t border-secondary-gray">
        <p class="mb-4 mt-10 text-xl font-bold">Query/Disciplinary Action</p>
        <table class="w-full table-auto border-secondary text-center text-sm font-normal">
          <thead class="bg-gray-200">
            <tr class="border-secondary">
              <th class="border-secondary p-3 font-normal">S/N</th>
              <th class="border-r border-secondary p-3 font-normal">Staff Number</th>
              <th class="border-secondary p-3 font-normal">ROLE</th>
              <th class="border-secondary p-3 font-normal">NAME</th>
              <th class="border-secondary p-3 font-normal">DATE</th>
              <th class="border-r border-secondary p-3 font-normal">TYPE OF SANCTION</th>
              <th class="border-secondary p-3 font-normal">STATUS</th>
              <th class="border-secondary p-3 font-normal">CONTEST</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(query, index) in userQuery" :key="index">
              <td class="border-secondary p-3">{{ query.id }}.</td>
              <td class="border-r border-secondary p-3">
                {{ query.staff_number }}
              </td>
              <td class="border-secondary p-3">{{ query.role }}</td>
              <td class="border-secondary p-3">{{ query.name }}</td>
              <td class="border-secondary p-3">{{ query.submission_date }}</td>
              <td class="border-r border-secondary p-3">
                {{ query.sanction_type }}
              </td>
              <td class="border-secondary p-3">
                <div
                  class="grid place-content-center rounded-md border pl-4 pr-4 pt-2 pb-2 capitalize text-black"
                  :class="{
                    'border-green-600 bg-green-600': query.status === 'approved',
                    'border-red-600 bg-red-600': query.status === 'closed',
                    'border-orange-400 bg-orange-400': query.status === 'appeal',
                    'border-yellow-600 bg-yellow-600': query.status === 'sent',
                  }"
                >
                  {{ query.status }}
                </div>
              </td>
              <td class="cursor-pointer border-secondary p-3 underline">
                <router-link
                  v-if="query && query.sanction_type?.includes('query') && query.id"
                  :to="{ name: 'disciplinary-response', params: { id: query.id } }"
                >
                  View
                </router-link>
                <router-link
                  v-else-if="query && query.id"
                  :to="{
                    name: 'disciplinary-response',
                    params: { id: query.id },
                  }"
                >
                  View
                </router-link>
              </td>
            </tr>
          </tbody> 
        </table>
      </section>
    </div>
  </section>
</template>
<script setup>
import { ref, onMounted } from "vue";
import workplaceRequestsv2 from "@/services/workplaceRequestsv2";
import "vue3-circle-progress/dist/circle-progress.css";
import CircleProgress from "vue3-circle-progress";
import Swal from "sweetalert2";
onMounted(() => {
  getUserPoints();
  getUserQuery();
});

const getUserPoints = async () => {
  try {
    userPoints.value = {};
    const { status, data } = await workplaceRequestsv2("get", "user/user-points");
    if (status == 200 || status == 201) {
      userPoints.value = data.data.results.data;
    }
  } catch (e) {
    console.log(e);
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: e.message,
    });
  }
};
const userPoints = ref({
  points: [],
  total_metric: 0,
  total_demetric: 0,
  metric_month: 0,
  demetrics_month: 0,
});

const activeTab = ref(1);

const switchTab = (value) => {
  activeTab.value = value;
};

const userQuery = ref([
  {
    id: 4,
    staff_number: null, 
    role: null,
    name: null,
    sanction_type: "Disciplinary",
    submission_date: "2024-03-22",
    status: null,
  },
]);

const getUserQuery = async () => {
  try {
    const { status, data } = await workplaceRequestsv2("get", "user/query/history");
    if (status == 200 || status == 201) {
      console.log(data.data);
      userQuery.value = data.data.data;
    }
  } catch (e) {
    console.error("An error occurred", e);
    Swal.fire({
      icon: "info",
      title: "Info",
      text: "Failed to fetch query history: " + e.message,
    });
  }
};
</script>
