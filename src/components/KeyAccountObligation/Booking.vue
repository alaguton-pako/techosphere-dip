<template>
    <section class="">
          <section class="my-5 flex items-end justify-between">
            <div
              class="grid w-[250px] place-content-center rounded bg-primary-black py-6 text-center text-white"
            >
              <h2 class="text-xl capitalize">Total Request Received</h2>
              <div class="text-[35px] font-bold">{{ total }}</div>
            </div>
            <div class="flex flex-row-reverse items-center justify-end">
              <div class="mx-4 flex items-center">
                <input
                  v-model="searchValue"
                  placeholder="Search"
                  class="w-[230px] rounded-l-md border border-r-0 border-secondary p-2 focus:outline-none"
                />
                <button
                  @click="handleSearch"
                  class="h-full rounded-r-md border border-secondary bg-primary-gray px-3 py-2.5"
                >
                  <img src="../../assets/search-white.svg\" alt="" />
                </button>
              </div>
              <div>
                <select
                  class="w-[230px] rounded-md border border-secondary p-2.5 focus:outline-none"
                >
                  <option value="" selected>Today</option>
                  <option value="s/n">Yesterday</option>
                  <option value="approve">Last Week</option>
                  <option value="reject">Last Month</option>
                  <option value="item">Whole Year</option>
                </select>
              </div>
            </div>
          </section>
          <div v-if="loading">
            <LoadingSpinner/>
          </div>
          <div v-else>
          
            <table v-if="activeTab==2" class="w-full table-auto border border-secondary text-sm mt-5">
              <thead class="bg-gray-200">
                <tr class="border border-secondary capitalize">
                  <th class="border border-secondary p-3">Name</th>
                  <th class="border border-secondary p-3">Phone Number</th>
                  <th class="border border-secondary p-3">Email Address</th>
                  <th class="border border-secondary p-3">Activity</th>
                  <th class="border border-secondary p-3">Booking Date</th>
                  <th class="border border-secondary p-3">Contact Name</th>
                  <th class="border border-secondary p-3">Contact Phone</th>
                  <th class="border border-secondary p-3">Status</th>
                  <th class="border border-secondary p-3">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in schedules" :key="index">
                  <td class="border border-secondary p-3 text-center">{{ item.customer_name }}</td>
                  <td class="border border-secondary p-3 text-center">{{ item.phone_number }}</td>
                  <td class="border border-secondary p-3 text-center">{{ item.email }}</td>
                  <td class="border border-secondary p-3 text-center text-[#D50036]">{{ item.activity }}</td>
                  <td class="border border-secondary p-3 text-center">
                    {{new Date(item.exp_start_date).toISOString().slice(0, 19).replace('T', ' ') || item.exp_start_date}}
                  </td>
                  <td class="border border-secondary p-3 text-center">{{ item.contact_name}}</td>
                  <td class="border border-secondary p-3 text-center">{{ item.contact_phone}}</td>
                  <td class="border border-secondary p-3 text-center">{{ item.confirmation_status}}</td>
                  <td class="border border-secondary p-3 text-center flex">
                      <button
                        class="mr-2 rounded border border-gray-500 px-4 py-1 text-black"
                      >
                        Resend Email
                      </button>
                      <button
                      @click="sendConfirmation(item)"
                        class="rounded bg-[#D50036] px-6 py-1 text-white hover:bg-red-400"
                      >
                        Access Confirmation
                      </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <table v-if="activeTab==1" class="w-full table-auto border border-secondary text-sm mt-5">
              <thead class="bg-gray-200">
                <tr class="border border-secondary capitalize">
                  <th class="border border-secondary p-3">Name</th>
                  <th class="border border-secondary p-3">Phone Number</th>
                  <th class="border border-secondary p-3">Email Address</th>
                  <th class="border border-secondary p-3">Activity</th>
                  <th class="border border-secondary p-3">Booking Date</th>
                  <th class="border border-secondary p-3">Duration of Fault</th>
                  <th class="border border-secondary p-3">Contact Name</th>
                  <th class="border border-secondary p-3">Contact Phone</th>
                  <th class="border border-secondary p-3">Status</th>
                  <th class="border border-secondary p-3">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in schedules" :key="index">
                  <td class="border border-secondary p-3 text-center">{{ item.customer }}</td>
                  <td class="border border-secondary p-3 text-center">{{ item.phone}}</td>
                  <td class="border border-secondary p-3 text-center">{{ item.email }}</td>
                  <td class="border border-secondary p-3 text-center text-[#D50036]">{{ item.activity }}</td>
                  <td class="border border-secondary p-3 text-center">{{ item.start_date }}</td>
                  <td class="border border-secondary p-3 text-center">{{ item.duration }}</td>
                  <td class="border border-secondary p-3 text-center">{{ item.contact_name}}</td>
                  <td class="border border-secondary p-3 text-center">{{ item.contact_phone}}</td>
                  <td class="border border-secondary p-3 text-center">{{ item.confirmation_status}}</td>
                  <td class="border border-secondary p-3 text-center flex">
                      <button
                        class="mr-2 rounded border border-gray-500 px-4 py-1 text-black"
                      >
                        Resend Email
                      </button>
                      <button
                      @click="sendConfirmation(item)"
                        class="rounded bg-[#D50036] px-6 py-1 text-white hover:bg-red-400"
                      >
                        Access Confirmation
                      </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
      <AppPagination
        class="mt-10"
        @fetchRecords="getAccessConfirmations"
        :pagination="pagination"
      />
        </section>
</template>

<script setup>
  import { defineProps, onMounted, ref, watch, computed} from "vue";
  import workplacerequestsv2 from "../../services/workplaceRequestsv2";
  import LoadingSpinner from "../../components/LoadingSpinner.vue";
  import Swal from "sweetalert2";
  import AppPagination from '../AppPagination.vue'


  const props = defineProps({
    activeTab: Number
  });

  const loading = ref(false);
  const from = ref(0)
  const to = ref(0)
  const pages = ref(1)
  const total = ref(0)
  const current = ref(1)
  const recordsPerPage = ref(20);
  const searchValue = ref("");


  const schedules = ref([
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
    confirmation_status : ''
  },
])

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

watch(() => props.activeTab, (newValue, oldValue) => {
    getAccessConfirmations(current.value, newValue);
  }
);


  onMounted(() => {
    getAccessConfirmations(current.value, props.activeTab)
  });

  const getAccessConfirmations = async(pageNumber, activeTab) => {
    console.log(pageNumber);
    let search = searchValue.value == undefined ? '' : searchValue.value;
   try{
    const {status, data} = activeTab == 1 ? 
    await workplacerequestsv2('get', 
    `operations/sd/field-operations/fault-schedules/all?per_page=${recordsPerPage.value}&page=${pageNumber}&search=${search}`):
    await workplacerequestsv2('get',
    `operations/sd/installer/schedules?per_page=${recordsPerPage.value}&page=${pageNumber}&search=${search}`) ;
    loading.value = true;
    if (status == 200) {
      schedules.value = data.data.data;
      total.value = data.data.pagination?.total
      current.value = data.data.pagination?.current
      from.value = data.data.pagination?.from
      to.value = data.data.pagination?.to
      pages.value = data.data.pagination?.pages
    } else {
      Swal.fire({
        icon: 'error',
        title : 'Bad Request',
        text : data?.message
      });
    }
  } catch (e) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: e.message,
    })
  }finally{
    loading.value = false;
  }
}

const handleSearch = () => {
  getAccessConfirmations(current.value, props.activeTab)
}

const sendConfirmation =  async (item) => {
  const activity = item.activity.includes("Fault") ? "fault" : "installation";
  const payload = {
    id : item.id,
    type : activity
  }
  try {
    loading.value = true
    const {status, data} = await workplacerequestsv2('post', 
    `operations/access-confirmation/create`, payload);
    if(status == 200 || status == 201){
      Swal.fire({
        icon : 'success',
        title: 'Success',
        text: data.message || 'Customer Notified Successfully'
      })
      getAccessConfirmations(current.value, props.activeTab);
    }else{
      Swal.fire({
      icon: 'error',
      title: 'Error',
      text: data.message,
    })
    }
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: error.message,
    })
  }finally{
    loading.value = false
  }
}
</script>

