<template>
  <FullCalendar
    class="demo-app-calendar"
    v-if="load_calendar"
    style="
      width: 100%;
      line-height: 1.5;
      background: white;
      border-right: 1px solid #d3e2e8;
    "
    :options="calendarOptions"
  >
    <template v-slot:eventContent="arg">
      <b>{{ arg.timeText }}</b>
      <i>{{ arg.event.title }}</i>
    </template>
  </FullCalendar>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
const emit = defineEmits(["eventClicked", "emitDateScroll"]);

watch(
  () => props.initialEvents,
  () => {
    if (props.initialEvents.length) {
      load_calendar.value = true;
    } else {
      load_calendar.value = false;
    }
  }
);
const handleDateSelect = () => {
  // alert("Hello");
};

const handleEventClick = (eventClick) => {
  emit("eventClicked", eventClick.event.id);
};

const handleEvents = (events) => {
  console.log(events);
};

onMounted(() => {
  calendarOptions.value.initialEvents = props.initialEvents;
  calendarOptions.value.initialEvents = props.initialEvents;
  load_calendar.value = true;
});

const handleMonthChange = async (payload) => {
  emit('emitDateScroll', [payload.startStr, payload.endStr])
};
const load_calendar = ref(false);
const props = defineProps({ initialEvents: { default: [], type: [] } });
const calendarOptions = ref({
  plugins: [
    dayGridPlugin,
    timeGridPlugin,
    interactionPlugin, // needed for dateClick
  ],
  headerToolbar: {
    left: "prev,next today",
    center: "title",
    right: "dayGridMonth,timeGridWeek,timeGridDay",
  },
  initialView: "dayGridMonth",
  initialEvents: props.inititalEvents, // alternatively, use the `events` setting to fetch from a feed
  editable: true,
  selectable: true,
  selectMirror: true,
  dayMaxEvents: true,
  weekends: true,
  innerWidth: "100%",
  outerWidth: "100%",
  select: handleDateSelect,
  eventClick: handleEventClick,
  eventsSet: handleEvents,
  datesSet: handleMonthChange,
});
</script>
