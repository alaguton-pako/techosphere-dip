<script setup>
import { ref, onMounted } from 'vue'
import AppLayout from '../layouts/AppLayout.vue'
import AppHorizontalNavigation from '../components/AppHorizontalNavigation.vue'
import DateAndSearch from '../components/DateAndSearch.vue'
import workplaceRequestsv2 from '../services/workplaceRequestsv2'
// onMounted(() => {
//   getMyRequest()
// })
const requests = ref([])
// async function getMyRequest() {
//   try {
//     const { status, data } = await workplaceRequestsv2(
//       'get',
//       'leave/my-leave-requests'
//     )
//     if (status === 200) {
//       requests.value = data.data.results.data
//     }
//   } catch (e) {
//     alert(e.message)
//   }
// }
// const expandRequest = (id) => {
//   try {
//     const div = document.querySelector(`[data-reqeust="${id}"]`);
//     if (div == null) {
//       alert("No Task under this schedule")
//       return
//     }
//     if ([...div.classList].includes("hidden")) {
//       div.classList.remove("hidden");
//     } else {
//       div.classList.add("hidden");
//     }
//   } catch (e) {
//     alert(e.message);
//   }
// };
</script>

<template>
  <app-layout>
    <template v-slot:main-content>
      <main class="w-full bg-[#F5F5F5] pl-[260px]">
        <AppHorizontalNavigation />
        <section class="mx-14 mb-12 mt-20 flex flex-row-reverse items-center">
          <router-link
            :to="{ name: 'requestLeave' }"
            class="rounded-md bg-primary px-4 py-2 text-white"
          >
            <span class="mr-2 align-middle text-2xl">+</span>
            Sick/Leave/Notice of Absence
          </router-link>
          <!-- i need to find how to go to expenditure from here too -->

          <button class="mr-2 p-2 bg-slate-50 border-r-2">Create AIE</button>
          <!-- <router-link
            :to="{ name: 'expenditureRequest' }"
            class="mr-6 rounded-md border border-primary px-4 py-2 text-primary"
          >
            Create AIE
          </router-link> -->
        </section>
        <DateAndSearch />

        <section
          class="m-14 flex flex-col border-b border-gray-100 bg-white text-gray-600"
          v-for="(request, index) in requests"
          :key="index"
        >
          <div
            class="flex justify-between border-b p-10"
            @click.stop="expandRequest(request.name + '-' + index)"
          >
            <div class="w-1/6 font-semibold">
              <!-- {{ request.leave_request_type_name }} -->
              request leave or type of leave will be displayed here
            </div>
            <div class="text-sm">created at will be here</div>
            <!-- <div class="text-sm">{{ request.created_at }}</div> -->
            <div
              class="grid place-content-center rounded-md border px-3 py-2 capitalize text-white"
            >
              <!-- {{ request.status }} -->
              request status will be here
            </div>
            <img src="../assets/chevron-black.svg" alt="" class="" />
          </div>

          <div class="hidden p-6">
            <h2 class="my-3">
              <b> Start date:</b>
              <!-- {{ request?.start_date }} -->
              request start date
            </h2>
            <h2 class="my-3">
              <b>End date:</b>
              <!-- {{ request?.end_date }} -->
              request end date
            </h2>

            <h2 class="my-3">
              <b> Leave Applied for:</b>
              <!-- {{ request?.leave_request_type_name }} -->
              the title of the leave u are applying for
            </h2>
            <h2 class="my-3">
              <b> Description:</b>
              <!-- {{ request?.description }} -->
              the request description
            </h2>
          </div>
        </section>
      </main>
    </template>
  </app-layout>
</template>
