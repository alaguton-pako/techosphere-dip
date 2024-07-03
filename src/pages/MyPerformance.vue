<template>
  <section>
    <div class="flex w-[770px] justify-between bg-white">
      <div class="rounded-md p-8">
        <p class="mb-4 text-xl font-bold">Onboarding</p>
        <div class="mb-4 flex space-x-3">
          <span class="font-semibold">Legend Academy:</span>
          <span class="italic text-primary"
            >Click here to redirect to Academy</span
          >
        </div>
        <div class="flex space-x-3">
          <span class="mb-2 font-semibold">Standard Operating Procedure:</span>
          <div class="flex">
            <img src="#" alt="" />
            <span class="mx-2 italic text-gray-500 underline"> Download</span>
          </div>
        </div>
        <div class="flex space-x-24">
          <span class="font-semibold">Obligations Summary:</span>
          <span class="italic text-gray-500">Mark as “Understood”</span>
        </div>

        <ol class="mx-6 list-decimal space-y-2">
          <li class="">
            <label for="" class="">Customer Account Management</label>
            <input type="radio" name="" id="" class="accent-primary" />
          </li>
          <li class="">
            <label for="">Customer Billing</label>
            <input type="radio" name="" id="" class="accent-primary" />
          </li>
          <li class="">
            <label for="">Revenue Accounting</label>
            <input type="radio" name="" id="" class="accent-primary" />
          </li>
          <li class="">
            <label for="">Credit Control</label>
            <input type="radio" name="" id="" class="accent-primary" />
          </li>
        </ol>
      </div>
      <div class="p-10 font-semibold">
        <p>Completion Status:</p>
      </div>
    </div>

    <section class="" v-if="activeTab == 1">
      <div class="w-[770px] justify-between rounded-md bg-white p-5">
        <p class="mb-4 text-xl font-bold">My Performance</p>
        <!-- <Date /> -->
        <section class="grid grid-cols-4 gap-2 font-[12px]">
          <div
            class="rounded-md border border-secondary-gray bg-white text-center"
          >
            <div class="w-full">
              <h2
                class="border-b border-b-secondary-gray py-4 text-sm font-bold"
              >
                OVERALL AVERAGE
              </h2>
            </div>
            <div class="h-2/5 w-full">
              <div
                class="relative ml-2 mr-2 mt-5 flex h-24 w-auto flex-col-reverse justify-center rounded-tl-full rounded-tr-full border-l-[24px] border-r-[24px] border-t-[24px] border-solid border-red-600"
              >
                <div class="absolute">
                  <span
                    class="relative mx-2 bg-black"
                    style="
                      clip-path: polygon(
                        0% 0%,
                        calc(100% - 0.4em) 0%,
                        100% 50%,
                        calc(100% - 0.4em) 100%,
                        0% 100%
                      );
                    "
                  >
                    &nbsp;&nbsp;&nbsp;
                  </span>
                </div>
                <div class="absolute bottom-0 left-1 right-1 text-2xl">
                  {{ myPerformance.overall_performance }}%
                </div>
              </div>
              <div class="flex w-full flex-row">
                <div class="w-1/4">0%</div>
                <div class="w-1/4"></div>
                <div class="w-1/4"></div>
                <div class="w-1/4">100%</div>
              </div>
            </div>
          </div>
          <div
            class="rounded-md border border-secondary-gray bg-white text-center"
          >
            <h2 class="border-b border-b-secondary-gray py-4 text-sm font-bold">
              DAILY SCHEDULE
            </h2>
            <div class="py-10 text-[32px] font-bold">
              {{ myPerformance.daily_schedule }}/{{
                myPerformance.working_days
              }}
            </div>
          </div>
          <div
            class="rounded-md border border-secondary-gray bg-white text-center"
          >
            <h2 class="border-b border-b-secondary-gray py-4 text-sm font-bold">
              CLOSE-OUT REPORT
            </h2>
            <div class="py-10 text-[32px] font-bold">
              {{ myPerformance.closeout_report }}/{{
                myPerformance.working_days
              }}
            </div>
          </div>
          <div
            class="rounded-md border border-secondary-gray bg-white text-center"
          >
            <h2 class="border-b border-b-secondary-gray py-4 text-sm font-bold">
              AVAERAGE KPI SCORE
            </h2>
            <circle-progress
              class="text-[32px]"
              show-percent="true"
              :percent="myPerformance.kpi_score"
              unit="percent"
              :gradient="{
                angle: myPerformance.kpi_score,
                startColor: '#ff0000',
                stopColor: '#ffff00',
              }"
            >
              90%
            </circle-progress>
          </div>
        </section>
        <section>
          <p class="my-7 mb-4 text-xl font-bold">My KPIs</p>
          <table
            class="w-full table-auto border-secondary text-center text-sm font-normal"
          >
            <thead class="bg-gray-200">
              <tr class="border-secondary">
                <th class="border-secondary p-3 font-normal">S/N</th>
                <th class="border-r border-secondary p-3 font-normal">KPI</th>
                <th class="border-secondary p-3 font-normal">OBJECTIVES</th>
                <th class="border-r border-secondary p-3 font-normal">
                  MATRIX/MEASURES
                </th>
                <th class="border-secondary p-3 font-normal">WEIGHING (%)</th>
                <th class="border-secondary p-3 font-normal">
                  MAX RATING OBTAINABLE
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(kpi, index) in myKPIs"
                :key="index"
                :class="[index % 2 ? 'bg-[#f3f3f3]' : '']"
              >
                <td class="border-secondary p-4">{{ index + 1 }}.</td>
                <td class="border-r border-secondary p-3">
                  {{ kpi.name }}
                </td>
                <td class="border-secondary p-3">
                  {{ kpi.objectives }}
                </td>
                <td class="border-r border-secondary p-3">
                  {{ kpi.matrix }}
                </td>
                <td class="border-secondary p-3">{{ kpi.weighting }}%</td>
                <td class="border-secondary p-3">
                  {{ kpi.max_obtainable }}
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
      <div class="mt-5 w-[770px] justify-between rounded-md bg-white p-5">
        <p class="mb-4 text-xl font-bold">My Requests</p>
        <!-- <Date /> -->
        <section class="grid grid-cols-4 gap-2 font-[10px]">
          <div
            class="rounded-md border border-secondary-gray bg-white text-center"
          >
            <h2 class="border-b border-b-secondary-gray py-4 text-sm font-bold">
              TOTAL REQUEST
            </h2>
            <div class="py-10 text-[32px] font-bold">
              {{ totalRequest }}
            </div>
          </div>
          <div
            class="rounded-md border border-secondary-gray bg-white text-center"
          >
            <h2 class="border-b border-b-secondary-gray py-4 text-sm font-bold">
              TOTAL APPROVED
            </h2>
            <div class="py-10 text-[32px] font-bold">
              {{ totalApproved }}
            </div>
          </div>
          <div
            class="rounded-md border border-secondary-gray bg-white text-center"
          >
            <h2 class="border-b border-b-secondary-gray py-4 text-sm font-bold">
              TOTAL REJECTED
            </h2>
            <div class="py-10 text-[32px] font-bold">
              {{ totalRejected }}
            </div>
          </div>
          <div
            class="rounded-md border border-secondary-gray bg-white text-center"
          >
            <h2 class="border-b border-b-secondary-gray py-4 text-sm font-bold">
              TOTAL PENDING
            </h2>
            <div class="py-10 text-[32px] font-bold">
              {{ totalPending }}
            </div>
          </div>
        </section>
        <section>
          <section
            class="m-14 flex flex-col border-b border-gray-100 bg-white text-gray-600"
            v-for="(request, index) in requests"
            :key="index"
          >
            <div
              class="flex justify-between border-b p-10"
              @click.stop="expandRequest(request.name + '-' + index)"
            >
              <div class="w-32 font-bold">
                {{ request.leave_request_type_name }}
              </div>
              <div class="text-sm">{{ request.created_at }}</div>

              <div
                class="grid place-content-center rounded-md border px-4 py-2 capitalize text-white"
                :class="{
                  'border-green-600 bg-green-600':
                    request.status === 'approved',
                  'border-red-600 bg-red-600': request.status === 'rejected',
                  'border-yellow-600 bg-yellow-600':
                    request.status === 'pending',
                }"
              >
                {{ request.status }}
              </div>
              <img src="../assets/chevron-black.svg" alt="" class="" />
            </div>
            <div :data-reqeust="`${request.name}-${index}`" class="hidden p-6">
              <h2 class="my-3">
                <b> Start date:</b> {{ request?.start_date }}
              </h2>
              <h2 class="my-3"><b>End date:</b> {{ request?.end_date }}</h2>

              <h2 class="my-3">
                <b> Leave Applied for:</b>
                {{ request?.leave_request_type_name }}
              </h2>
              <h2 class="my-3">
                <b> Description:</b> {{ request?.description }}
              </h2>
            </div>
          </section>
        </section>
      </div>
    </section>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import workplaceRequestsv2 from '@/services/workplaceRequestsv2'
import 'vue3-circle-progress/dist/circle-progress.css'
import CircleProgress from 'vue3-circle-progress'
import Swal from 'sweetalert2'
const activeTab = ref(1)

const switchTab = (value) => {
  activeTab.value = value
}
onMounted(() => {
  // Promise.all(
  getMyRequest(),
    getMyRequestSummary(),
    getMyKPI(),
    getUserProfile(),
    getMyPerformance()
  // );
})
const myPerformance = ref({
  overall_performance: 0,
  daily_schedule: 0,
  closeout_report: 0,
  kpi_score: 0,
  working_days: 0,
})
const totalRequest = ref('')
const totalApproved = ref('')
const totalPending = ref('')
const totalRejected = ref('')
const requests = ref([])
const myKPIs = ref([])
async function getMyRequest() {
  try {
    const { status, data } = await workplaceRequestsv2(
      'get',
      'leave/my-leave-requests'
    )
    if (status === 200) {
      requests.value = data.data.results.data.splice(-3)
    }
  } catch (e) {
    alert(e.message)
  }
}
async function getMyKPI() {
  try {
    const { status, data } = await workplaceRequestsv2('get', 'kpi/staff-kpi')
    if (status === 200) {
      myKPIs.value = data.data.results.data
      console.log(myKPIs.value)
    }
  } catch (e) {
    alert(e.message)
  }
}
const uploadAvatar = async () => {
  try {
    document.getElementById('uploadImg').click(true)
  } catch (e) {}
}

const filesChange = async (value) => {
  try {
    const formData = new FormData()
    formData.append('image', value[0])
    // formData.append("meeting_id", route.params.id);
    const { status, data } = await workplaceRequestsv2(
      'post',
      `user/upload-avatar`,
      formData
    )
    if (status == 200 || status == 201) {
      Swal.fire({
        icon: 'success',
        title: 'File uploaded',
        showConfirmButton: false,
        timer: 1500,
      })
      getUserProfile()
      // alert(data.message);
    }
  } catch (e) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: e.message,
    })
  }
}
const getUserPoints = async () => {
  try {
    userPoints.value = {}
    // formData.append("meeting_id", route.params.id);
    const { status, data } = await workplaceRequestsv2(
      'get',
      'user/user-points'
    )
    if (status == 200 || status == 201) {
      userPoints.value = data.data.results.data
    }
  } catch (e) {
    console.log(e)
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: e.message,
    })
  }
}
const userPoints = ref({
  points: [
    {
      id: null,
      cause: null,
      assigned_by: null,
      type: null,
      date: null,
      points: 0,
      is_contested: 0,
    },
  ],
  total_metric: 0,
  total_demetric: 0,
  metric_month: 0,
  demetrics_month: 0,
})
const user = ref({
  id: 8,
  firstname: '',
  other_names: '',
  lastname: null,
  dob: '',
  email: '',
  phone: '',
  address: '',
  password: '********',
  department: '',
  unit: '',
  role: '',
  supervisor: '',
  start_date: '',
  contract_tenure: '',
  possible_end_date: '',
  documentation: ['', ''],
})
const logs = ref([
  {
    id: null,
    type: null,
    created_at: null,
  },
])
const getUserProfile = async () => {
  try {
    const { status, data } = await workplaceRequestsv2('get', 'user/details')
    if (status === 200) {
      user.value = data?.data?.results?.data?.user
      logs.value = data?.data?.results?.data?.logs
      console.log(user.value)
    }
  } catch (e) {}
}
async function getMyRequestSummary() {
  try {
    const { status, data } = await workplaceRequestsv2(
      'get',
      'leave/user/summary'
    )

    if (status === 200) {
      totalRequest.value = data.data.results.data.total
      totalApproved.value = data.data.results.data.approved
      totalPending.value = data.data.results.data.pending
      totalRejected.value = data.data.results.data.rejected
    }
  } catch (e) {
    alert(e.message)
  }
}

const expandRequest = (id) => {
  try {
    const div = document.querySelector(`[data-reqeust="${id}"]`)
    if (div == null) {
      alert('No Task under this schedule')
      return
    }
    if ([...div.classList].includes('hidden')) {
      div.classList.remove('hidden')
    } else {
      div.classList.add('hidden')
    }
  } catch (e) {
    alert(e.message)
  }
}
const getMyPerformance = async () => {
  try {
    const { status, data } = await workplaceRequestsv2(
      'get',
      'user/performance'
    )
    if (status === 200) {
      myPerformance.value = data.data.results.data
    }
  } catch (e) {}
}
</script>
