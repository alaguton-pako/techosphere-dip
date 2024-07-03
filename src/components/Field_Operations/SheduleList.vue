
<template>
    <div
      class="my-6 h-auto p-6"
      v-if="userStore.$state.user.installer_role != 'diagnosis'"
    >
    <div>
      <div class="mx-4 flex flex-row-reverse mr-10 items-center">
        <input
          v-model="searchValue"
          id=""
          name=""
          type="text"
          placeholder="Search"
          class="w-[230px] rounded-l-md border border-r-0 border-secondary p-2 focus:outline-none"
        />
        <button
          @click="handleSearch"
          class="rounded-r-md border border-secondary bg-primary-gray py-2.5 px-3"
        >
          <img src="../../assets/search-white.svg" alt="" />
        </button>
      </div>
    </div>
      <div class="mb-10 mt-5" v-for="(item, index) in restructureData" :key="index">
        <div class="">
          <AssignmentDate
            :data="item.label"
            :count="item?.values?.length"
            class="px-10"
          />
        </div>
        <div v-if="userStore.$state.user.installer_role == 'provisioning'">
          <table class="w-full table-auto border border-secondary text-sm">
            <thead class="bg-gray-200">
              <tr class="border border-secondary capitalize">
                <th class="border border-secondary p-3">S/N:</th>
                <th class="border border-secondary p-2">Customer Name</th>
                <th class="border border-secondary p-3">Address</th>
                <th class="border border-secondary p-3">Phone Number</th>
                <th class="border border-secondary p-3">Activity</th>
                <th class="border border-secondary p-3">Schedule Start Time</th>
                <th class="border border-secondary p-3">
                  Schedule Completion Time
                </th>
                <th class="border border-secondary p-3">Status</th>
                <th class="border border-secondary p-3">Resources</th>
                <th class="border border-secondary p-3">Report</th>
              </tr>
            </thead>
  
            <tbody>
              <tr
                v-for="(it, i) in item.values"
                :key="i"
                class="border border-secondary p-3"
                :class="[
                  it.activity.includes('Fault')
                    ? timezoneProvisioning(it.end_time)
                    : timezone(it.end_date),
                ]"
              >
                <td class="border border-secondary p-3">
                  {{ it.id }}
                </td>
                <td class="border border-secondary p-3">{{ it.customer }}</td>
                <td class="border border-secondary p-3">
                  {{ it.address }}
                </td>
                <td class="border border-secondary p-3">{{ it.phone_number }}</td>
                <td class="border border-secondary p-3">{{ it.activity }}</td>
                <td class="border border-secondary p-3">
                  {{ it.start_time }}
                </td>
                <td class="border border-secondary p-3">
                  {{ it.end_time }}
                </td>
                <td class="border border-secondary p-3">{{ it.status }}</td>
                <td
                  v-if="it.activity.includes('Fault')"
                  class="border border-secondary p-3 underline"
                >
                  <router-link
                    :to="{
                      name: 'resource-diagnosis',
                      params: {
                        activity: it.activity,
                        id: it.diagnosis_report_id,
                        id2: it.work_order_id,
                      },
                    }"
                  >
                    View Resources
                  </router-link>
                </td>
                <td v-else class="border border-secondary p-3 underline">
                  <router-link
                    :to="{
                      name: 'splice-plan',
                      params: { id: it.id, activity: it.activity },
                    }"
                  >
                    View Resources
                  </router-link>
                </td>
  
                <td class="border border-secondary p-3 underline">
                  <a
                    v-if="it.activity.includes('Fault')"
                    href="#"
                    @click="showFaultConfirmationModal(it)"
                    >Upload Report</a
                  >
                  <router-link
                    v-else
                    :to="{
                      name: 'activation-report',
                      params: { id: it.id },
                    }"
                    >Upload Report</router-link
                  >
                </td>
              </tr>
            </tbody>
          </table>
          <AppModal v-if="showModals">
            <template #modal-content>
              <div class="flex flex-row-reverse">
                <button
                  class="ml-auto grid h-10 w-10 place-content-center rounded-full border border-primary text-xl text-primary"
                  type="button"
                  @click="
                    ;(showModals = false),
                      (showNoFaultConfirmationActModal = false)
                  "
                >
                  𝖷
                </button>
              </div>
              <NoFaultConfirmation
                :selectedSchedule="selectedSchedule"
                v-if="showNoFaultConfirmationActModal"
              />
              <YesFaultConfirmationAct
                v-else
                @showNoFaultResolution="toggleNoFaultConfirmation"
                :selectedSchedule="selectedSchedule"
              />
            </template>
          </AppModal>
        </div>
        <div v-if="userStore.$state.user.installer_role == 'installation'">
          <table class="w-full table-auto border border-secondary text-sm">
            <thead class="bg-gray-200">
              <tr class="border border-secondary capitalize">
                <th class="border border-secondary p-3">S/N:</th>
                <th class="border border-secondary p-3">Customer Name</th>
                <th class="border border-secondary p-3">Address</th>
                <th class="border border-secondary p-3">Phone Number</th>
                <th class="border border-secondary p-3">Activity</th>
                <th class="border border-secondary p-3">Schedule Start Time</th>
                <th class="border border-secondary p-3">
                  Schedule Completion Time
                </th>
                <th class="border border-secondary p-3">Status</th>
                <th class="border border-secondary p-3">Resources</th>
                <th class="border border-secondary p-3">Report</th>
              </tr>
            </thead>
  
            <tbody>
              <tr
                v-for="(it, i) in item.values"
                :key="i"
                class="border border-secondary p-3"
                :class="timezone(it.end_date)"
              >
                <td class="border border-secondary p-3">
                  {{ it.id }}
                </td>
                <td class="border border-secondary p-3">
                  {{ it.customer_name }}
                </td>
                <td class="border border-secondary p-3">
                  {{ it.address }}
                </td>
                <td class="border border-secondary p-3">{{ it.phone_number }}</td>
                <td class="border border-secondary p-3">{{ it.activity }}</td>
                <td class="border border-secondary p-3">
                  {{ getTime(it.exp_start_date) }}
                </td>
                <td class="border border-secondary p-3">
                  {{ getTime(it.end_date) }}
                </td>
                <td class="border border-secondary p-3">{{ it.status }}</td>
                <td class="border border-secondary p-3 underline">
                  <router-link
                    :to="{
                      name: 'resource-route',
                      params: { id: it.id, activity: it.activity}
                    }"
                  >
                    View Resources
                  </router-link>
                </td>
                <td class="border border-secondary p-3 underline">
                  <router-link
                    v-if="it.activity.includes('Survey')"
                    :to="{ name: 'survey-report', params: { id: it.id } }"
                  >
                    Upload Report
                  </router-link>
                  <router-link
                    v-else
                    :to="{ name: 'installation-report', params: { id: it.id } }"
                  >
                    Upload Report
                  </router-link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
  
        <!-- <SurveyReportForm /> -->
      </div>
  
      <AppPagination
        class="mt-10"
        @fetchCustomers="getSchedules"
        :pagination="pagination"
      />
    </div>
    <div class="my-6 h-auto p-6">
      <div>
      <div class="mx-4 flex flex-row-reverse mr-10 items-center">
        <input
          v-model="searchValue"
          id=""
          name=""
          type="text"
          placeholder="Search"
          class="w-[230px] rounded-l-md border border-r-0 border-secondary p-2 focus:outline-none"
        />
        <button
          @click="handleSearch"
          class="rounded-r-md border border-secondary bg-primary-gray py-2.5 px-3"
        >
          <img src="../../assets/search-white.svg" alt="" />
        </button>
      </div>
    </div>
      <div v-if="userStore.$state.user.installer_role == 'diagnosis'">
        <div v-if="loading" class="spinner-container">
          <LoadingSpinner />
        </div>
        <div v-else>
          <table class="w-full table-auto border border-secondary text-sm">
            <thead class="bg-gray-200">
              <tr class="border border-secondary capitalize">
                <th class="border border-secondary p-3">S/N:</th>
                <th class="border border-secondary p-2">Customer Name</th>
                <th class="border border-secondary p-3">Address</th>
                <th class="border border-secondary p-3">Area</th>
                <th class="border border-secondary p-3">Activity</th>
                <th class="border border-secondary p-3">Created at</th>
                <th class="border border-secondary p-3">Duration</th>
                <th class="border border-secondary p-3">Status</th>
                <th class="border border-secondary p-3">Resources</th>
                <th class="border border-secondary p-3">Report</th>
              </tr>
            </thead>
  
            <tbody>
              <tr
                v-for="(it, i) in faultDiagnosis"
                :key="i"
                class="border border-secondary p-3"
                :class="diagnosisListColor(it.color)"
              >
                <td class="border border-secondary p-3">
                  {{ it.id }}
                </td>
                <td class="border border-secondary p-3">
                  {{ it.customer }}
                </td>
                <td class="border border-secondary p-3">
                  {{ it.address }}
                </td>
                <td class="border border-secondary p-3">{{ it.area }}</td>
                <td class="border border-secondary p-3">{{ it.fault_type }}</td>
                <td class="border border-secondary p-3">{{ it.created_at }}</td>
                <td class="border border-secondary p-3">
                  {{ it.duration }}
                </td>
                <td class="border border-secondary p-3">
                {{ it.status }}
                </td>
                <td class="border border-secondary p-3 underline">
                  <router-link
                    :to="{
                      name: 'splitter-information',
                      params: { id: it.id, activity: it.fault_type },
                    }"
                  >
                    View Resources
                  </router-link>
                </td>
                <td class="border border-secondary p-3 underline">
                  <router-link
                    :to="{ name: 'diagnosis-report', params: { id: it.id } }"
                  >
                    Upload Report
                  </router-link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <AppPagination
          class="mt-10"
          @fetchRecords="getSchedules"
          :pagination="pagination"
        />
      </div>
    </div>
  </template>
  <script setup>
  import { onMounted, ref, computed } from 'vue'
  import workplaceRequestsv2 from '../../services/workplaceRequestsv2.js'
  import AppModal from '../../components/AppModal.vue'
  import Swal from 'sweetalert2'
  import { useRouter } from 'vue-router'
  import YesFaultConfirmation from '../../pages/Field_Operations/YesFaultConfirmation.vue'
  import AssignmentDate from './AssignmentDate.vue'
  import AppPagination from '../AppPagination.vue'
  import { useUserStore } from '../../stores/userStore.js'
  import NoFaultConfirmation from '../../pages/Field_Operations/NoFaultConfirmation.vue'
  import LoadingSpinner from '../../components/LoadingSpinner.vue'
  import YesFaultConfirmationAct from '../../pages/Field_Operations/YesFaultConfirmationAct.vue'
  
  const showModals = ref(false)
  const userStore = useUserStore()
  const showNoFaultConfirmationActModal = ref(false)
  const showYesFaultConfirmationActModal = ref(false)
  const router = useRouter()
  const showNoFaultConfirmationModal = ref(false)
  const from = ref(0)
  const to = ref(0)
  const pages = ref(1)
  const total = ref(0)
  const current = ref(1)
  const recordsPerPage = ref(20)
  const selectedId = ref(null)
  const selectedSchedule = ref(null)
  const faultDiagnosis = ref([])
  const searchValue = ref("");
  const toggleNoFaultConfirmation = async () => {
    try {
      // selectedName.value=
      showModals.value = true
      showYesFaultConfirmationActModal.value = false
      // alert(showYesFaultConfirmationActModal.value)
      showNoFaultConfirmationActModal.value = true
      // showNoFaultConfirmationActModal.value=true;
    } catch (e) {}
  }
  
  const showFaultConfirmationModal = async (schedule) => {
    try {
      showModals.value = true
      showYesFaultConfirmationActModal.value =
        !showYesFaultConfirmationActModal.value
      selectedSchedule.value = schedule
    } catch (e) {}
  }
  const restructureData = ref([
    {
      label: '',
      values: [],
    },
  ])
  const faultActivation = ref([
    {
      id: null,
      customer: '',
      address: '',
      phone: '',
      request_date: '',
      activity: '',
      start_date: '',
      end_date: '',
      status: '',
    },
  ])
  
  onMounted(() => {
    getSchedules(current.value, searchValue.value)
  })
  
  const pagination = computed(() => {
    return {
      current: current.value,
      from: from.value,
      to: to.value,
      pages: pages.value,
      total: total.value,
      recordsPerPage: recordsPerPage.value,
    }
  })
  
  const schedules = ref([])
  const getSchedules = async (pageNumber, searchValue) => {
    let search = searchValue == undefined ? '' : searchValue;
    try {
      if (userStore.$state.user.installer_role == 'installation') {
        const { status, data } = await workplaceRequestsv2(
          'get',
          `operations/sd/installer/schedules?per_page=${recordsPerPage.value}&page=${pageNumber}&search=${search}`
        )
        if (status == 200) {
          schedules.value = data.data.data
          restructureData.value = Object.entries(schedules.value).map((v, k) => {
            return { label: v[0], values: v[1] }
          })
          console.log(restructureData.value);
          total.value = data.data.pagination?.total
          current.value = data.data.pagination?.current
          from.value = data.data.pagination?.from
          to.value = data.data.pagination?.to
          pages.value = data.data.pagination?.pages
        }
      }
      if (userStore.$state.user.installer_role == 'provisioning') {
        await getFaultResolution(pageNumber, search)
        await getFaultActivation(pageNumber, search)
      }
      if (userStore.$state.user.installer_role == 'diagnosis') {
        await getFaultDiagnosis(pageNumber, search)
        // await getFaultActivation(pageNumber);
      }
    } catch (e) {
      alert(e.message)
    }
  }
  
  const timezone = (date) => {
    // const time = date.split('T')[1]
    // const hr = time.split(':')[0]
    // if (hr < 12) {
    //   return 'bg-blue-200'
    // }
  
    // if (hr < 16) {
    //   return 'bg-red-200'
    // }
  
    return 'bg-green-200'
  }
  
  const diagnosisListColor = (color) => {
    if (color == 'red') {
      return 'bg-red-200'
    } else if (color == 'amber') {
      return 'bg-amber-200'
    } else if (color == 'blue') {
      return 'bg-blue-200'
    }
  }
  // const timezoneDiagnosis = (date) => {
  //   const time = date.split(" ")[1];
  //   const hr = time.split(":")[0];
  //   if (hr < 12) {
  //     return "bg-blue-200";
  //   }
  
  //   if (hr < 16) {
  //     return "bg-red-200";
  //   }
  
  //   return "bg-green-200";
  // };
  const timezoneProvisioning = (time) => {
    const hr = time.split(':')[0]
    if (hr < 12) {
      return 'bg-blue-200'
    }
  
    if (hr < 16) {
      return 'bg-red-200'
    }
  
    return 'bg-green-200'
  }
  
  const getTime = (date) => {
    const time = date.split('T')[1]
    return time.substring(0, 8)
  }
  
  // const getTimeDiagnosis = (date) => {
  //   const time = date.split(" ")[1];
  //   return time.substring(0, 8);
  // };
  
  const getFaultActivation = async (pageNumber, search) => {
    try {
      const { status, data } = await workplaceRequestsv2(
        'get',
        `operations/sd/provisioning/schedules?per_page=${recordsPerPage.value}&page=${pageNumber}&search=${search}`
      )
      if (status == 200) {
        faultActivation.value = data?.data?.data
        faultActivation.value.forEach((e) => {
          let label = e.request_date.split('T')[0]
          let targetData = restructureData.value.find((k) => k.label == label)
          if (targetData) {
            targetData.values.push(e)
          } else {
            targetData = { label: label, values: [e] }
          }
          restructureData.value.push(targetData)
        })
        console.log(restructureData.value)
        total.value = data.data.pagination?.total
        current.value = data.data.pagination?.current
        from.value = data.data.pagination?.from
        to.value = data.data.pagination?.to
        pages.value = data.data.pagination?.pages
      }
    } catch (e) {
      console.log('fault activation call', e)
    }
  }
  
  const getFaultResolution = async (pageNumber, search) => {
    try {
      const { status, data } = await workplaceRequestsv2(
        'get',
        `network/work-order/schedules?per_page=${recordsPerPage.value}&page=${pageNumber}&search=${search}`
      )
      if (status == 200) {
        schedules.value = data.data.data
        restructureData.value = Object.entries(schedules.value).map((v, k) => {
          return { label: v[0], values: v[1] }
        })
        total.value = data.data.pagination?.total
        current.value = data.data.pagination?.current
        from.value = data.data.pagination?.from
        to.value = data.data.pagination?.to
        pages.value = data.data.pagination?.pages
      }
    } catch (e) {}
  }
  
  const getFaultDiagnosis = async (pageNumber, search) => {
    try {
      const { status, data } = await workplaceRequestsv2(
        'get',
        `network/fault/diagnosis-list?per_page=${recordsPerPage.value}&page=${pageNumber}&search=${search}`
      )
      if (status == 200) {
        faultDiagnosis.value = data?.data?.data
        faultDiagnosis.value.forEach((e) => {
          let label = e.created_at.substring(0, 10)
          let targetData = restructureData.value.find((k) => k.label == label)
          if (targetData) {
            targetData.values.push(e)
          } else {
            targetData = { label: label, values: [e] }
          }
          restructureData.value.push(targetData)
        })
        console.log('fault diagnosis', restructureData.value)
        total.value = data.data.pagination?.total
        current.value = data.data.pagination?.current
        from.value = data.data.pagination?.from
        to.value = data.data.pagination?.to
        pages.value = data.data.pagination?.pages
      }
      console.log('diagnosis', data)
    } catch (e) {}
  }
  
  const completeFault = async () => {
    try {
      const { status, data } = await workplaceRequestsv2(
        'post',
        'network-fault/confirm-resolution',
        {
          fault_id: selectedSchedule.value.id,
          status: 'completed',
        }
      )
      if (status == 200) {
        Swal.fire({
          icon: 'success',
          title: 'Successful',
          text: 'processed successfully',
        })
        router.push({
          name: 'resolution-report',
          params: { id: selectedSchedule.value.id },
        })
      }
    } catch (e) {}
  }
  
  const handleSearch = () => {
    getSchedules(current.value, searchValue.value)
  }
  </script>
  