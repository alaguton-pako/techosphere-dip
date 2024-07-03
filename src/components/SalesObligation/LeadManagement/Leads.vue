<script setup>
import { computed, onMounted, reactive, ref } from 'vue'
import { useUserStore } from '../../../stores/userStore'
import SelectDate from '@/components/SelectDate.vue'
import Search from '@/components/Search.vue'
import AppModal from '@/components/AppModal.vue'
import leadRequest from '@/services/leadRequest'
import dipRequest from '@/services/dip.request'
import workplaceRequestsv2 from '@/services/workplaceRequestsv2'
import AppPagination from '@/components/AppPagination.vue'
import Summary from '@/components/SalesObligation/LeadManagement/Summary.vue'
import LeadsTable from '@/components/SalesObligation/LeadManagement/LeadsTable.vue'
import { auth } from '../../../services/apiGatewayRequest'

const states = ref([
  'Abuja',
  'Lagos',
  'Rivers',
  'Niger',
  'Abia',
  'Adamawa',
  'Akwa-Ibom',
  'Anambra',
  'Bauchi',
  'Bayelsa',
  'Benue',
  'Borno',
  'Cross River',
  'Delta',
  'Ebonyi',
  'Edo',
  'Ekiti',
  'Enugu',
  'Gombe',
  'Imo',
  'Jigawa',
  'Kaduna',
  'Katsina',
  'Kebbi',
  'Kano',
  'Kogi',
  'Kwara',
  'Ogun',
  'Ondo',
  'Osun',
  'Oyo',
  'Plateau',
  'Sokoto',
  'Taraba',
  'Yobe',
  'Zamfara',
])

const store = useUserStore()
// console.log(store.$state.user.name)
const current = ref(1)
const from = ref(0)
const to = ref(0)
const pages = ref(1)
const total = ref(0)
const recordsPerPage = ref(20)
const start_date = ref('')
const end_date = ref(null)
const isLoading = ref(false)
const segments = ref([])
const sectors = ref([])
const selectedSector = ref('')
const owners = ref([])
const search = ref(null)
const getSectors = async () => {
  try {
    const { status, data } = await dipRequest('get', 'v1/utilities/sectors')
    if (status == 200) {
      sectors.value = data.data
    }
  } catch (e) {
    console.log(e)
  }
}

const getSegments = async (sector_id) => {
  try {
    let sector = sectors.value.filter((sector) => {
      return sector.id == selectedSector.value
    })
    lead.value.sector = sector[0]?.name
    const { status, data } = await dipRequest(
      'get',
      `v1/utilities/segments?sector_id=${sector_id}`
    )
    if (status == 200) {
      segments.value = data.data
    }
  } catch (e) {
    console.log(e)
  }
}

const getUsers = async () => {
  try {
    const { status, data } = await workplaceRequestsv2(
      'get',
      'users/get-all-users'
    )
    if (status == 200) {
      owners.value = data.data.results.data
    }
  } catch (e) {
    console.log(e)
  }
}

const createLead = async () => {
  let btn = document.getElementById('createLeadButton')
  btn.innerHTML = 'Processing....'
  btn.setAttribute('disabled', true)
  try {
    let owner = owners.value.filter(
      (owner) => owner.email == lead.value.assigned_email
    )
    lead.value.assigned_to = owner[0].name
    const { status, data } = await leadRequest(
      'post',
      `leads/create`,
      lead.value
    )
  } catch (e) {
    console.log(e)
  }
  btn.innerHTML = 'Save'
  btn.removeAttribute('disabled')
  newLead.value = false
}

// onMounted(() => {
//   isLoading.value = true
//   // start_date.value.setDate(start_date.value.getDate() - 30);
//   // start_date.value = start_date.value.toISOString().split("T")[0];
//   // end_date.value.setDate(end_date.value.getDate() + 1);
//   // end_date.value = end_date.value.toISOString().split("T")[0];
//   getLeads(pages.value)
//   getSectors()
//   getUsers()
// })

const lead = ref({
  business_name: '',
  created_by: 'Ahmed' || store.$state.user.name,
  address: '',
  state: '',
  sector: '',
  segment: '',
  contact_firstname: '',
  contact_lastname: '',
  email_address: '',
  phone_number: '',
  assigned_to: '',
  assigned_email: '',
  source: '',
  stage: '',
  rc_number: '',
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

const getLeads = async (pageNumber) => {
  try {
    isLoading.value = true
    leads.value = []
    let url = `leads?records_per_page=${recordsPerPage.value}&page_number=${pageNumber}`
    if (start_date.value) {
      url = url + `&start_date=${start_date.value}`
    }
    if (end_date.value) {
      url = url + `&end_date=${end_date.value}`
    }
    if (search.value) { 
      url = url + `&search=${search.value}`
    }
    const { status, data } = await leadRequest('get', url)
    if (status == 200) {
      leads.value = data.data
      current.value = data.pagination.current_page
      from.value = data.pagination.from
      to.value = data.pagination.to
      pages.value = data.pagination.pageCount
      total.value = data.pagination.totalCount
    }
    if (status == 401) {
      // auth();
      getLeads(pageNumber)
    }
    isLoading.value = false
  } catch (e) {
    console.log(e)
    alert(e.message)
  }
  isLoading.value = false
}

const leads = ref([
  {
    id: 2,
    business_name: null,
    contact_firstname: null,
    contact_lastname: null,
    email_address: null,
    source: null,
    product_interest: null,
    stage: null,
    phone_number: null,
    created_at: null,
    leads_assignment: {
      assigned_name: null,
      assigned_email: null,
    },
  },
])
const newLead = ref(false)
</script>
<template>
  <div>
    <Summary></Summary>
    <section>
      <div class="my-6 flex items-center justify-end">
        <SelectDate
          @changeStartDate="
            (value) => {
              start_date = value
            }
          "
          @changeEndDate="(value) => (end_date = value)"
        />
        <Search
          @setSearch="(value) => (search = value)"
          @click="() => getLeads(pages)"
        />
        <div
          class="flex items-end justify-center rounded-md bg-red-600 px-5 py-3 text-white"
          @click="newLead = !newLead"
        >
          <p>Add new Lead</p>
        </div>
      </div>
    </section>
    <!-- Add new LeadModal -->
    <AppModal v-if="newLead">
      <template #modal-content>
        <form @submit.prevent="createLead">
          <button
            class="my-6 ml-auto grid h-10 w-10 place-content-center rounded-full border border-primary text-xl text-primary"
            type="button"
            @click="newLead = false"
          >
            𝖷
          </button>

          <section class="space-y-5">
            <div class="mb-10 w-full bg-red-600 p-3 text-white">
              <p>Add New Lead</p>
            </div>
            <div class="flex flex-col">
              <label for="">Business Name*</label>
              <input
                v-model="lead.business_name"
                type="text"
                class="border border-gray-600 p-2"
              />
            </div>
            <div class="grid grid-cols-3 space-x-3">
              <div class="col-span-2 flex flex-col">
                <label for="">Address*</label>
                <input
                  v-model="lead.address"
                  type="text"
                  class="border border-gray-600 p-2"
                />
              </div>
              <div class="col-span-1 flex flex-col">
                <label for="">State*</label>
                <select
                  name=""
                  id=""
                  v-model="lead.state"
                  class="border border-gray-600 bg-white p-2"
                >
                  <option value="" selected disabled class="text-gray-400">
                    Select State
                  </option>
                  <option
                    v-for="(state, index) in states"
                    :key="index"
                    :value="state"
                  >
                    {{ state }}
                  </option>
                </select>
              </div>
            </div>
            <div class="col-span-1 flex flex-col">
              <label for="">RC Number*</label>
              <input
                v-model="lead.rc_number"
                type="text"
                class="border border-gray-600 p-2"
              />
            </div>
            <div class="grid grid-cols-2 space-x-3">
              <div class="flex flex-col">
                <label for="">Sector*</label>
                <select
                  @change="getSegments($event.target.value)"
                  v-model="selectedSector"
                  class="border border-secondary px-3 py-1"
                >
                  <option value="" selected disabled>Select Sector</option>
                  <option
                    v-for="(sector, index) in sectors"
                    :key="index"
                    :value="sector.id"
                  >
                    {{ sector.name }}
                  </option>
                </select>
                <!-- <input
                    v-model="lead.sector"
                    type="text"
                    class="border border-gray-600 p-2"
                  /> -->
              </div>
              <div class="flex flex-col">
                <label for="">Segment*</label>
                <select
                  v-model="lead.segment"
                  class="border border-secondary px-3 py-1"
                >
                  <option value="" selected disabled>Select Segment</option>
                  <option
                    v-for="(segment, index) in segments"
                    :key="index"
                    :value="segment.name"
                  >
                    {{ segment.name }}
                  </option>
                </select>
              </div>
            </div>
            <div class="grid grid-cols-2 space-x-3">
              <div class="flex flex-col">
                <label for="">Contact First Name*</label>
                <input
                  type="text"
                  v-model="lead.contact_firstname"
                  class="border border-gray-600 p-2"
                />
              </div>
              <div class="flex flex-col">
                <label for="">Contact Last Name*</label>
                <input
                  v-model="lead.contact_lastname"
                  type="text"
                  class="border border-gray-600 p-2"
                />
              </div>
            </div>
            <div class="grid grid-cols-2 space-x-3">
              <div class="flex flex-col">
                <label for="">E-mail Address*</label>
                <input
                  type="text"
                  v-model="lead.email_address"
                  class="border border-gray-600 p-2"
                />
              </div>
              <div class="flex flex-col">
                <label for="">Phone Number*</label>
                <input
                  type="text"
                  v-model="lead.phone_number"
                  class="border border-gray-600 p-2"
                />
              </div>
            </div>
            <div class="border-b-2 border-gray-300"></div>
            <!-- this is what i will be needing for the assigning of task to a specific user -->
            <div class="flex flex-col">
              <label for="">Assigned To:</label>
              <select
                v-model="lead.assigned_email"
                class="border border-secondary px-3 py-1"
              >
                <option value="" selected disabled>Select</option>
                <option
                  v-for="(owner, index) in owners"
                  :key="index"
                  :value="owner.email"
                >
                  {{ owner.name }}
                </option>
                <!-- <option value="">option 3</option> -->
              </select>
              <!-- <input
                  type="text"
                  v-model="lead.assigned_to"
                  class="border border-gray-600 p-2"
                /> -->
            </div>
            <div class="my-5 flex items-center justify-center space-x-6">
              <button
                type="submit"
                id="createLeadButton"
                class="rounded-md bg-red-600 px-6 py-2 text-white"
              >
                <p>Save</p>
              </button>
              <button class="rounded-md border border-gray-400 px-6 py-2">
                <p>Cancel</p>
              </button>
            </div>
          </section>
        </form>
      </template>
    </AppModal>
    <!-- Modal ends -->
    <section>
      <LeadsTable :leads="leads" :isLoading="isLoading" :converted="false" />
      <AppPagination
        class="m-10"
        :pagination="pagination"
        @fetchRecords="getLeads"
      />
    </section>
  </div>
</template>
