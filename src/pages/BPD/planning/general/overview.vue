<script setup>
import { ref, onMounted, watch } from "vue";
import { formatDateWithDay, formatDate } from "@/helpers/utils.js";
import LoadingSpinner from "@/components/LoadingSpinner.vue";
// import FullCalendar from "@fullcalendar/vue3";
import CalendarComponent from "@/components/CalendarComponent.vue";
import ccsRequests from "@/services/ccsRequests";
import Swal from "sweetalert2";
const filter = ref({
  from: formatDate(Date()),
  to: null,
});

onMounted(() => {
  getPeriod();
});
const isNotFound = ref(false);
const isServerError = ref(false);

const showEventModal = ref(false);
const selectedEvent = ref({});
const eventClicked = (id) => {
  selectedEvent.value = tickets.value.find((e) => {
    return e.id == id;
  });
  if (selectedEvent.value.id) {
    showEventModal.value = true;
  }
};
const handleDateScroll = (value) => {
  console.log(value);
};
const INITIAL_EVENTS = ref([]);
const load_calendar = ref(false);
const tickets = ref([]);
const getPeriod = async () => {
  try {
    // load_calendar.value = false;
    // const today = new Date();
    // const nextDate = new Date(today);
    // nextDate.setDate(today.getDate() + 365);
    // let end_date = formatDate(nextDate);
    // filter.value.to = end_date;
    load_calendar.value = false;

    const today = new Date();
    const start_date = new Date(today.getFullYear(), 0, 1); // January 1st of the current year
    const end_date = new Date(today.getFullYear(), 11, 31); // December 31st of the current year

    filter.value.from = formatDate(start_date);
    filter.value.to = formatDate(end_date);
    const { status, data } = await ccsRequests(
      "post",
      "meetings/periodic?platform=suburban",
      filter.value
    );
    if (status === 200) {
      console.log(data)
      INITIAL_EVENTS.value = [];
      tickets.value = data.data;
      data.data.forEach((e, i) => {
        INITIAL_EVENTS.value.push({
          id: e.id,
          title: `${e?.meeting?.title}`,
          start: new Date(e.start_date).toISOString().replace(/T.*$/, ""),
        });
      });
      load_calendar.value = true;
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
</script>

<template>
  <div class="mx-20 bg-white border-solid border-2 border-grey-600">
    <section class="pt-4">
      <div class="w-full">
        <CalendarComponent
          @emitDateScroll="handleDateScroll"
          :initialEvents="INITIAL_EVENTS"
          @eventClicked="eventClicked"
          v-if="load_calendar"
        />
      </div>
      <LoadingSpinner v-if="!load_calendar" />
      <div class="font-semibold text-2xl p-5 text-red-600" v-if="isServerError">
        Internal Server Error : Please try Again
      </div>
      <div class="font-semibold text-2xl p-5 text-red-600" v-if="isNotFound">
        Page Not Found: Please try Again
      </div>
    </section>

    <div class="flex flex-row item-center" v-if="showEventModal">
      <div
        id="popup-modal"
        tabindex="-1"
        class="fixed top-0 left-0 grid h-screen w-screen place-items-center overflow-y-scroll overscroll-y-contain bg-primary-black bg-opacity-30 px-32 py-16 z-50"
      >
        <div class="relative w-1/2">
          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button
              type="button"
              class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="popup-modal"
            ></button>
            <div class="bg-red-600 h-10">
              <span class="text-white text-xl b p-2">{{
                selectedEvent?.meeting?.title
              }}</span>
            </div>
            <div class="p-6">
              <div class="">
                <div class="flex flex-row my-2">
                  <div class="w-1/4">Title:</div>
                  <div class="w-3/4">{{ selectedEvent?.meeting?.title }}</div>
                </div>
                <div class="flex flex-row my-2">
                  <div class="w-1/4">Message:</div>
                  <div class="w-3/4">{{ selectedEvent?.message }}</div>
                </div>
                <div class="flex flex-row my-2">
                  <div class="w-1/4">Start Date:</div>
                  <div class="w-3/4">{{ selectedEvent?.start_date }}</div>
                </div>
                <div class="flex flex-row my-2">
                  <div class="w-1/4">Start Time:</div>
                  <div class="w-3/4">{{ selectedEvent?.start_time }}</div>
                </div>
                <div class="flex flex-row my-2">
                  <div class="w-1/4">End Date:</div>
                  <div class="w-3/4">{{ selectedEvent?.finish_date }}</div>
                </div>
                <div class="flex flex-row my-2">
                  <div class="w-1/4">End time:</div>
                  <div class="w-3/4">{{ selectedEvent?.finish_time }}</div>
                </div>
              </div>
              <div
                class="flex justify-center -mx-3 mb-2 h-20 w-full place-items-center"
              >
                <!-- <button
                    class="h-12 px-6 m-2 text-lg text-red-100 transition-colors duration-150 bg-red-700 rounded-lg focus:shadow-outline hover:bg-red-800">
                    Save
                  </button> -->
                <button
                  @click="showEventModal = false"
                  class="h-12 px-6 border border-black-600 bg-white-300"
                >
                  Ok
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
