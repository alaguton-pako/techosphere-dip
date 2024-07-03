<template>
  <div class="flex flex-row">
    <div class="p-5 ml-5 w-full bg-white mt-5">
      <form action="" @submit.prevent="fetchThreads()">
        Filter Date <br/>
        <div></div>
        <div class=" flex flex-row mb-6 border p-2 bg-slate-50">
        <div class="mr-5"> 
          <label for="start_date">From</label><br />
          <input type="date" class="border p-1" v-model="start_date">
        </div>
        
        <div>
          <label for="end_date">To</label><br />
          <input type="date" class="border p-1" v-model="end_date">
        </div>
        <button 
          type="submit"
            class="bg-primary-red pl-auto pr-auto w-1/4 h-6 ml-2 mt-8 pt-auto pb-auto rounded-lg text-white hover:bg-primary-red">
            filter <span v-if="isLoading" class="loader"></span>
          </button>
        </div>
        
        
      </form>
      <div class="mt-6 mb-6">
        <button
          v-if="currentState == 1"
          @click="currentState = 1"
          class="mr-6 cursor-pointer bg-red-900 hover:bg-green-600 text-white p-3 border rounded-lg">
        Minor</button>
        <button
          v-else
          @click="currentState = 1"
          class="mr-6 cursor-pointer bg-primary hover:bg-green-600 text-white p-3 border rounded-lg">
        Minor</button>

        <button 
            v-if="currentState == 2"
            @click="currentState = 2"
            class="mr-6 cursor-pointer bg-red-900 hover:bg-green-600 text-white p-3 border rounded-lg">
          Major
        </button>
          <button 
            v-else
            @click="currentState = 2"
            class="mr-6 cursor-pointer bg-primary hover:bg-green-600 text-white p-3 border rounded-lg">
            Major
        </button>

        <button 
              v-if="currentState == 3"
              @click="currentState = 3"
              class="mr-6 cursor-pointer bg-red-900 hover:bg-green-600 text-white p-3 border rounded-lg">Critical
        </button>
        <button 
              v-else
              @click="currentState = 3"
              class="mr-6 cursor-pointer bg-primary hover:bg-green-600 text-white p-3 border rounded-lg">
              Critical
        </button> <br />
      </div>
      <!-- Minor -->
      <div v-if="currentState == 1" class="flex flex-col">
        <table id="table" class="text-sm">
          <thead>
            <tr>
              <th>Minor Tickets</th>
              <th>Receive fault notification</th>
              <th>Diagnose Fault and Resolve</th>
              <th>Fault Resolved</th>
            </tr>
          </thead>
          <tbody :key="minorkey">
            <tr v-for="open_thread in thread.minor" :key="open_thread">

              <td  v-if="open_thread.ticket != null">{{ open_thread.ticket}}</td>
              <td v-if="open_thread.flt != null"> <span class="bg-primary-green"> 
                  {{ open_thread.flt.trigger }} - 
                  {{ readDate(open_thread.flt.created_at) }}</span>
              </td>
              <td v-else> <span class="bg-primary text-white">Null - didn't come to CCS</span></td>
              <td v-if="open_thread.confirmation != null" class="p-2">
              <span class="bg-green-500">Confirmation</span> - 
              <span v-if="open_thread.break_down.inbound2_step1[0] == 'br'" class="bg-primary pl-1 pr-1 text-white mr-4">
                Breach
              </span>
              
              <span v-if="open_thread.break_down.inbound2_step1[0] == 'nc'" class="bg-primary pl-1 pr-1 text-white">
                No Confirmation
              </span>
              <span v-if="open_thread.break_down.inbound2_step1[0] == 'su'" class="bg-primary pl-1 pr-1 text-white">
                Compliant
              </span>
              <span class="bg-yellow-500 pl-1 pr-1 text-black"
                    v-if="open_thread.break_down.inbound2_step1[0] == 'sml'" >
                Process Incomplete
              </span>
              
              <!-- time -->
              <span v-if="open_thread.break_down.inbound2_step1[1] != null">
              {{ open_thread.break_down.inbound2_step1[0] == 'sml' 
                      ? 
                      readDate(open_thread.confirmation.created_at) 
                      : 
                    open_thread.break_down.inbound2_step1[1] + "mins" + "-" +
                    readDate(open_thread.confirmation.created_at) 
              }} 
              </span>
      <br/> 
      <div>

        Visit Schedule - 
        <span 
            v-if="open_thread.break_down.inbound2_step2[0] == 'sfl'" 
            class="bg-primary pl-1 pr-1 text-white mr-4">
            Not Triggered
      </span>
        <span v-if="open_thread.break_down.inbound2_step2[1] != null">
            {{ open_thread.break_down.inbound2_step2[1] +  "mins"}}
        </span>
      </div>
      Late Appointment - <br/>
      Missed Appointment - <br/>
  </td>
  <td>
    <span class=" bg-primary-green" v-if="open_thread.fmr != null">
      CCS Status -  {{ readDate(open_thread.fmr.created_at) }}
    </span> <br/>
    <span class=" bg-primary text-white" v-if="open_thread.fmr == null">
      CCS Status -  Not Resolved
    </span> <br/>
    <span class="mt-2">
      Workplace - {{  }}
    </span>
  </td>
</tr>
          </tbody>
        </table>
        <div class="mt-6">
          <AppPagination
        :pagination="pagination"
        @fetchRecords="fetchThreads"
      ></AppPagination>
        </div>
      </div>

       <!-- Major -->
       <div v-if="currentState == 2"  class="flex flex-col">
        <table id="table" class="text-sm">
          <thead>
            <tr>
              <th>Major Tickets</th>
              <th>Receive fault notification</th>
              <th>Diagnose Fault</th>
              <th>Schedule Fault</th>
              <th>Fault Resolved</th>
            </tr>
          </thead>
          <tbody :key="minorkey">
            <tr v-for="open_thread in thread.minor" :key="open_thread">

              <td  v-if="open_thread.ticket != null">{{ open_thread.ticket}}</td>
              <td v-if="open_thread.flt != null"> <span class="bg-primary-green"> 
                  {{ open_thread.flt.trigger }} - 
                  {{ readDate(open_thread.flt.created_at) }}</span>
              </td>
              <td v-else> <span class="bg-primary text-white">Null - didn't come to CCS</span></td>
              <td v-if="open_thread.confirmation != null" class="p-2">
              <span class="bg-green-500">Confirmation</span> - 
              <span v-if="open_thread.break_down.inbound2_step1[0] == 'br'" class="bg-primary pl-1 pr-1 text-white mr-4">
                Breach
              </span>
              
              <span v-if="open_thread.break_down.inbound2_step1[0] == 'nc'" class="bg-primary pl-1 pr-1 text-white">
                No Confirmation
              </span>
              <span v-if="open_thread.break_down.inbound2_step1[0] == 'su'" class="bg-primary pl-1 pr-1 text-white">
                Compliant
              </span>
              <span class="bg-yellow-500 pl-1 pr-1 text-black"
                    v-if="open_thread.break_down.inbound2_step1[0] == 'sml'" >
                Process Incomplete
              </span>
              
              <!-- time -->
              <span v-if="open_thread.break_down.inbound2_step1[1] != null">
              {{ open_thread.break_down.inbound2_step1[0] == 'sml' 
                      ? 
                      readDate(open_thread.confirmation.created_at) 
                      : 
                    open_thread.break_down.inbound2_step1[1] + "mins" + "-" +
                    readDate(open_thread.confirmation.created_at) 
              }} 
              </span>
      <br/> 
      <div>

        Visit Schedule - 
        <span 
            v-if="open_thread.break_down.inbound2_step2[0] == 'sfl'" 
            class="bg-primary pl-1 pr-1 text-white mr-4">
            Not Triggered
      </span>
        <span v-if="open_thread.break_down.inbound2_step2[1] != null">
            {{ open_thread.break_down.inbound2_step2[1] +  "mins"}}
        </span>
      </div>
      Late Appointment - <br/>
      Missed Appointment - <br/>
  </td>
  <td>
    <span class=" bg-primary-green" v-if="open_thread.fmr != null">
      CCS Status -  {{ readDate(open_thread.fmr.created_at) }}
    </span> <br/>
    <span class=" bg-primary text-white" v-if="open_thread.fmr == null">
      CCS Status -  Not Resolved
    </span> <br/>
    <span class="mt-2">
      Workplace - {{  }}
    </span>
  </td>
</tr>
          </tbody>
        </table>
        <div class="mt-6">
          <AppPagination
        :pagination="pagination"
        @fetchRecords="fetchThreads"
      ></AppPagination>
        </div>
      </div>

      <!-- Critical -->
      <div  v-if="currentState == 3"  class="flex flex-col">
        <table id="table" class="text-sm">
          <thead>
            <tr>
              <th>Critical Tickets</th>
              <th>Receive fault notification</th>
              <th>Diagnose Fault and Resolve</th>
              <th>Fault Resolved</th>
            </tr>
          </thead>
          <tbody :key="minorkey">
            <tr v-for="open_thread in thread.minor" :key="open_thread">

              <td  v-if="open_thread.ticket != null">{{ open_thread.ticket}}</td>
              <td v-if="open_thread.flt != null"> <span class="bg-primary-green"> 
                  {{ open_thread.flt.trigger }} - 
                  {{ readDate(open_thread.flt.created_at) }}</span>
              </td>
              <td v-else> <span class="bg-primary text-white">Null - didn't come to CCS</span></td>
              <td v-if="open_thread.confirmation != null" class="p-2">
              <span class="bg-green-500">Confirmation</span> - 
              <span v-if="open_thread.break_down.inbound2_step1[0] == 'br'" class="bg-primary pl-1 pr-1 text-white mr-4">
                Breach
              </span>
              
              <span v-if="open_thread.break_down.inbound2_step1[0] == 'nc'" class="bg-primary pl-1 pr-1 text-white">
                No Confirmation
              </span>
              <span v-if="open_thread.break_down.inbound2_step1[0] == 'su'" class="bg-primary pl-1 pr-1 text-white">
                Compliant
              </span>
              <span class="bg-yellow-500 pl-1 pr-1 text-black"
                    v-if="open_thread.break_down.inbound2_step1[0] == 'sml'" >
                Process Incomplete
              </span>
              
              <!-- time -->
              <span v-if="open_thread.break_down.inbound2_step1[1] != null">
              {{ open_thread.break_down.inbound2_step1[0] == 'sml' 
                      ? 
                      readDate(open_thread.confirmation.created_at) 
                      : 
                    open_thread.break_down.inbound2_step1[1] + "mins" + "-" +
                    readDate(open_thread.confirmation.created_at) 
              }} 
              </span>
      <br/> 
      <div>

        Visit Schedule - 
        <span 
            v-if="open_thread.break_down.inbound2_step2[0] == 'sfl'" 
            class="bg-primary pl-1 pr-1 text-white mr-4">
            Not Triggered
      </span>
        <span v-if="open_thread.break_down.inbound2_step2[1] != null">
            {{ open_thread.break_down.inbound2_step2[1] +  "mins"}}
        </span>
      </div>
      Late Appointment - <br/>
      Missed Appointment - <br/>
  </td>
  <td>
    <span class=" bg-primary-green" v-if="open_thread.fmr != null">
      CCS Status -  {{ readDate(open_thread.fmr.created_at) }}
    </span> <br/>
    <span class=" bg-primary text-white" v-if="open_thread.fmr == null">
      CCS Status -  Not Resolved
    </span> <br/>
    <span class="mt-2">
      Workplace - {{  }}
    </span>
  </td>
</tr>
          </tbody>
        </table>
        <div class="mt-6">
          <AppPagination
        :pagination="pagination"
        @fetchRecords="fetchThreads"
      ></AppPagination>
        </div>
      </div>

    </div>
   
  </div>
</template>

<script setup>
import { computed, onMounted, ref, watch } from "vue";
import ccsRequests from "@/services/ccsRequests";
import $ from 'jquery'
import 'datatables.net-dt'
import 'datatables.net-dt/css/dataTables.dataTables.min.css'
import AppPagination from "../../../components/AppPagination.vue";

const from = ref(0);
const to = ref(0);
const pages = ref(1);
const total = ref(0);
const current = ref(1);
const recordsPerPage = ref(0);
const thread = ref([])
const start_date = ref(null)
const end_date = ref(null)
const isLoading = ref(false)
const minorkey = ref(0)
const currentState = ref(1)
const pagination = computed(() => {
  return {
    current: current.value,
    from: from.value,
    to: to.value,
    pages: pages.value,
    total: total.value,
    recordsPerPage: recordsPerPage.value,
  };
});

const getDate = () => {
  var today = new Date();

  // Get the year, month, and day
  var year = today.getFullYear();
  var month = today.getMonth() + 1; // Month is zero-based, so we add 1
  var day = today.getDate();

  // Format the date as YYYY-MM-DD
  var formattedDate = year + '-' + (month < 10 ? '0' : '') + month + '-' + (day < 10 ? '0' : '') + day;

  return formattedDate
}

const readDate = (dateTimeString) => {
  const date = new Date(dateTimeString);

const options = {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric'
};


const humanReadableDate = date.toLocaleString('en-US', options);
  return humanReadableDate
}
const datatable = () => {
        $(function() {
          $('#table').DataTable({
            "ordering" : false,
            "bDestroy": true,
            pageLength: pages.value,
            lengthMenu: [[5,10,20], [5, 10, 20]],
            // Callback for when the page changes
            "fnDrawCallback": function() {
              // Add event listener to pagination buttons
              $('#table').on('click', '.paginate_button', function() {
                // Extract the page number from the button's data attribute
                const page = parseInt($(this).attr('data-dt-idx'));
                current.value = page; // Update current page
                fetchThreads(page); // Fetch data for the new page
              });
            }
          });
        });
}

const fetchThreads = async (pageNumber) => {
  isLoading.value = true
  const { status, data } = await ccsRequests(
    "get",
    (start_date.value == null && end_date.value == null) ? 
    `reports/ticket-thread?start_date=${getDate()}&end_date=${getDate()}&page=${pageNumber}` 
    : 
    `reports/ticket-thread?start_date=${start_date.value}&end_date=${end_date.value}&page=${pageNumber}`
  )

  if (status == 200) {
      isLoading.value = false
      thread.value = data
      current.value = thread.value.pagination.current;
      from.value = thread.value.pagination.from;
      to.value = thread.value.pagination.to;
      pages.value = thread.value.pagination.pages;
      recordsPerPage.value = thread.value.pagination.per_page;
      total.value = thread.value.pagination.total;
  }
};


onMounted(() => {
  fetchThreads(current.value);
})
</script>

