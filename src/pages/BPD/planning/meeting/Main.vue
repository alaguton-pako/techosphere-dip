<script setup>
import Card from '@/components/Card.vue'
import Table from './Table.vue'
import { ref, onMounted } from 'vue'
import workplaceRequestsv2 from '@/services/workplaceRequestsv2'
import attendanceRequest from '@/services/attendance.request'
import { useUserStore } from '@/stores/userStore'
import Swal from 'sweetalert2'
const emit = defineEmits(['switchGenTab'])
const props = defineProps(['activeTab'])
onMounted(() => {
  getReports()
})

const getReports = async () => {
  try {
    const { status, data } = await attendanceRequest('get', "meetings/report?platform=suburban")
    if (status == 200) {
      // alert(data.status)
      cardsData.value[0].figure = data?.data.total
      cardsData.value[1].figure = data?.data.completed
      cardsData.value[2].figure = data?.data.pending
      cardsData.value[3].figure = data?.data.completed_minutes
    }
  } catch (e) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: e.message,
    })
  }
}
const cardsData = ref([
  {
    figure: 0,
    bgColor: 'bg-black',
    textColor: 'text-white',
    title: 'Total Meetings',
    body: 'Overall number of meetings scheduled',
  },
  {
    figure: 0,
    bgColor: 'bg-white',
    textColor: 'text-black',
    title: 'Total Completed Meetings',
    body: 'Total number of scheduled meetings/sessions held',
  },
  {
    figure: 0,
    bgColor: 'bg-white',
    textColor: 'text-black',
    title: 'Total Pending Meetings',
    body: 'Total number of scheduled meetings/sessions missed',
  },
  {
    figure: 0,
    bgColor: 'bg-white',
    textColor: 'text-black',
    title: 'Total Completed Minutes',
    body: 'Total number of event minutes submitted',
  },
])
</script>

<template>
  <div>
    <section class="pt-4">
      <nav
        class="flex items-center border border-gray-200 bg-white p-3 font-semibold text-gray-600"
      >
        <div class="btn mx-4 text-center capitalize">
          <span class="text-primary"> Overview </span>
        </div>
        <!-- </router-link> -->
      </nav>
    </section>

    <section class="flex flex-row px-10 py-10">
      <Card
        v-for="(card, index) in cardsData"
        :key="index"
        :figure="card.figure"
        :title="card.title"
        :bgColor="card.bgColor"
        :textColor="card.textColor"
        :body="card.body"
        heigh="h-48"
        width="w-80"
      />
    </section>
    <section>
      <Table
        :activeTab="props.activeTab"
        @setActiveMeetingId="setActiveMeetingId"
      >
      </Table>
    </section>
  </div>
</template>
