<script setup>
import DateAndSearch from '../../../../components/DateAndSearch.vue'
import LoadingSpinner from '@/components/LoadingSpinner.vue'
import { ref, onMounted, computed } from 'vue'
import workplaceRequestsv2 from '@/services/workplaceRequestsv2'
import attendanceRequest from '@/services/attendance.request'
import { useUserStore } from '@/stores/userStore'
import Swal from 'sweetalert2'
const emit = defineEmits(['switchGenTab', 'setActiveMeetingId'])
const props = defineProps(['activeTab'])
onMounted(() => {
  getMeetings(1)
})

const requestCompleted = ref(false)
const current = ref(1)
const from = ref(0)
const to = ref(0)
const pages = ref(0)
const total = ref(0)
const isLoading = ref(true)
const meetings = ref([])
const getMeetings = async (pageNumber) => {
  try {
    requestCompleted.value = false
    const { status, data } = await attendanceRequest('get', `meetings/all?platform=suburban&per_page=10&page=${pageNumber}`)
    if (status == 200) {
      meetings.value = data.data
      isLoading.value = false
      current.value = pageNumber //data.pagination.current_page
      from.value = data.pagination.from
      to.value = data.pagination.to
      pages.value = data.pagination.pages - 1
      total.value = data.pagination.total
      requestCompleted.value = true
    }
  } catch (e) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: e.message,
    })
  }
}
const pagination = computed(() => {
  return {
    current: current.value,
    from: from.value,
    to: to.value,
    pages: pages.value,
    total: total.value,
  }
})
const selectedMeetingId = (id) => {
  try {
    emit('setActiveMeetingId', id)
  } catch (e) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: e.message,
    })
  }
}
</script>

<template>
  <section class="mx-10">
    <!-- <div>
      <DateAndSearch />
    </div> -->
    <table class="w-full table-auto border border-secondary text-sm">
      <thead class="bg-gray-300">
        <tr class="border border-secondary capitalize">
          <th class="border border-secondary p-2">Event Name</th>
          <th class="border border-secondary p-3">Date & Time</th>
          <th class="border border-secondary p-3">Created By</th>
          <th class="border border-secondary p-3">Status</th>
          <th class="border border-secondary p-3">Minutes And Action Points</th>
          <th class="border border-secondary p-3">View</th>
        </tr>
      </thead>
      <tbody class="" v-if="requestCompleted && meetings != null">
        <tr
          v-for="(meeting, index) in meetings"
          :key="index"
          class="border border-secondary capitalize"
          :class="[index % 2 ? 'bg-gray-200' : '']"
        >
          <td class="border border-secondary p-2">{{ meeting.title }}</td>
          <td class="border border-secondary p-3">
            {{ meeting.date }} {{ meeting.start_time }}
          </td>
          <td class="border border-secondary p-3">{{ meeting.created_by }}</td>
          <td class="border border-secondary p-3">{{ meeting.status }}</td>
          <td class="border border-secondary p-3">Minutes And Action Points</td>
          <td class="border border-secondary p-3">
            <router-link
              v-if="activeTab == 4"
              :to="{ name: 'meeting-minutes', params: { id: meeting.id } }"
            >
              Mark
            </router-link>
            &nbsp;&nbsp;
            <router-link
              v-if="activeTab != 4"
              :to="{ name: 'meeting-details', params: { id: meeting.id } }"
            >
              View
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>

    <AppPagination
    class="my-8 mx-0"
    v-if="requestCompleted"
    :pagination="pagination"
    @fetchRecords="getMeetings"
  />
  </section>
</template>
