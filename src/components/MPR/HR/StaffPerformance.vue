<template>
    <div>
      <div v-if="singleperformance == false">
        <form class=" border bg-white shadow-sm pl-6 pt-4 pb-4 pr-6 mt-6 items-center justify-center">
                  <nav class="flex justify-between font-semibold text-gray-600">
                    <div class="flex items-center">
                      <div class="grid grid-cols-1">
                        <span class="text-xl font-semibold">Employee Records</span>
                      </div>
                    </div>
                    
                  </nav>
              </form>
              <section class="pl-6 pt-4 pb-4 pr-6 mt-6 bg-[#F5F5F5]">
                <section class="flex items-end justify-between">
                
              </section>
              <table class="w-full table-auto border border-secondary text-sm mt-8" id="table">
                <thead class="bg-gray-200">
                  <tr class="border border-secondary capitalize">
                    <th class="border border-secondary p-3">Name</th>
                    <th class="border border-secondary p-2">Department</th>
                    <th class="border border-secondary p-3">Role</th>
                    <th class="border border-secondary p-3">Appraisal Status</th>
                    <th class="border border-secondary p-3">Appraisal Date</th>
                    <!-- <th class="border border-secondary p-3">Rating</th> -->
                    <th class="border border-secondary p-3">Merit</th>
                    <th class="border border-secondary p-3">Demerit</th>
                    <th class="border border-secondary p-3">Performance</th>
                    <!-- <th class="border border-secondary p-3">Total Points</th> -->
                    <!-- <th class="border border-secondary p-3">Action</th> -->
                  </tr>
                </thead>
                <tbody>
                  <tr v-if="employee_record != null" v-for="employee in employee_record" :key="employee.id">
                    <td class="border border-secondary p-3">{{employee.name}}</td>
                    <td class="border border-secondary p-3 text-center">{{employee.department}}</td>
                    <td class="border border-secondary p-3 text-center">{{employee.role}}</td>
                    <td class="border border-secondary p-3 text-center place-items-center flex justify-center">
                      <button v-if="employee.status == 'Appraised'" class="rounded-full shadow-md text-sm border border-gray-200 text-center bg-green-600 text-white pt-1 pb-1 pl-2 pr-3 items-center justify-center flex">
                          {{employee.status}}
                      </button>
                      <button v-if="employee.status == 'Submitted'" class="rounded-full shadow-md text-sm border border-gray-200 text-center bg-yellow-600 text-white pt-1 pb-1 pl-2 pr-3 items-center justify-center flex">
                          {{employee.status}}
                      </button>
                      <button v-if="employee.status != 'Submitted' && employee.status !=  'Appraised'" class="rounded-full shadow-md text-sm border border-gray-200 text-center bg-red-600 text-white pt-1 pb-1 pl-2 pr-3 items-center justify-center flex">
                          {{employee.status}}
                      </button>
                    </td>
                    <td class="border border-secondary p-3 text-center">{{ employee.submission_date }}</td>
                    <td class="border border-secondary p-3 text-center">{{ employee.merit }}</td>
                    <td class="border border-secondary p-3 text-center">{{ employee.demerit }}</td>
                    <!-- <td class="border border-secondary p-3 text-center">{{ getUserPerformance(employee.user_id) }}</td> -->
                    <!-- <td class="border border-secondary p-3 text-center">2</td> -->
                    <!-- <td class="border border-secondary p-3 text-center">5</td> -->
                    <td 
                      class="border cursor-pointer border-secondary p-3 text-center underline"
                      @click="getUserPerformance(employee.user_id,employee.name,employee.department )"
                    >View</td>
                  </tr>
                </tbody>
              </table>
              
              </section>
               <!-- Pagination -->
            <!-- <AppPagination
              class="m-10"
              :pagination="pagination"
              @fetchRecords="getStaffPerformance(selectedMonth)"
            /> -->
      </div>
      <div v-else>
        <StaffDetails
          :name="staff_data.name"
          :department="staff_data.department"
          :performance ="staff_data.data.performance"
          :compliance="staff_data.data.compliance"
          
         />
      </div>
    </div>
</template>

<script setup>

import { onMounted, ref, computed } from 'vue';
import workplaceRequestsv2 from '../../../services/workplaceRequestsv2';
import StaffDetails from '../HR/StaffDetails.vue'
import $ from 'jquery'
import 'datatables.net-dt'
import 'datatables.net-dt/css/dataTables.dataTables.min.css'


onMounted(() => {
  getStaffPerformance('April')
})

const datatable = () => {
        $(function() {
          $('#table').DataTable({
            "ordering" : false,
            "bDestroy": true,
                pageLength: 5,
                lengthMenu: [[5,10,20], [5, 10, 20]],
            });
        });
      }
const singleperformance = ref(false)
const staff_data = ref()
const selectedMonth = ref('January')
const current = ref(1)
const from = ref(0)
const to = ref(0)
const pages = ref(1)
const total = ref(0)
const recordsPerPage =   ref(20)
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

const employee_record = ref()

const staff_score = ref()

const getUserPerformance = async(staff, name, department) => {
    singleperformance.value = true

    const { status, data } = await workplaceRequestsv2(
      "get",
      `staff-schedule/analytics/${staff}?start_date=2024-04-01&end_date=2024-04-26`
    );
    if (status === 200) {
      const score = data.data.results.data
      staff_data.value = {
        name: name,
        department: department,
        data: score
      }
    }

}

const getStaffPerformance = async(month) => {
  console.log(month)
  try {
    const { status, data } = await workplaceRequestsv2(
      "get",
      `appraisals/bpu/history?month=${month}&&page=${current.value++}&&per_page=200`    
    );
    if (status == 200) {

      employee_record.value = data.data.data
      // current.value = data.data.pagination.current
      from.value = data.data.pagination.from
      to.value = data.data.pagination.to
      pages.value = data.data.pagination.pages
      total.value = data.data.pagination.total
      datatable()
    }
  } catch (error) {
    
  }
}

const setData = (data) => {
  selectedMonth.value = data
  getStaffPerformance(data)
}
</script>