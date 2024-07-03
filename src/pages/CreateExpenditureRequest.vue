<script setup>
import AppLayout from '../layouts/AppLayout.vue'
import expenditureRequests from '@/services/expenditureRequests'
import AppHorizontalNavigation from '../components/AppHorizontalNavigation.vue'
import { ref, onMounted, computed } from 'vue'
import MultiSelect from 'primevue/multiselect'
import Swal from 'sweetalert2'
import { useUserStore } from '../stores/userStore'
import CurrentTime from '../components/CurrentTime.vue'

const userStore = useUserStore()
const value = ref([])
const users = ref([])
const response = ref()
const refreshKey = ref(1)
const selectedTarget = ref()
// const month = ref(1)
const spend = ref('');
const rows = ref([{ month:1, b_items:[], product_id: null, spend: 0, reason: '' }]);

    // Add new row
    const currIndex = ref(0)
    const addNewRow = () => {
      currIndex.value += 1
      rows.value.push({month:1, b_items:[], product_id: null, spend: 0, reason: '' });
      getBudgetItems(currIndex.value, 1)
    };

    // Delete row
    const deleteRow = (index) => {
      rows.value.splice(index, 1);
    };
    const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]
const requestAIEPayload = ref({
    item : rows.value,
    requested_by : userStore.$state.user.name,
    request_date : null,
    approve_by: null,
    unit : userStore.$state.user.unit,
    // month: month.value, // Current month (1-indexed)
    year: new Date().getFullYear(), // Current year
    department:userStore.$state.user.department,
    amount_spendable: spend.value
})

const formattedUsers = computed(() => {
  return users.value.map((e) => ({
    product: e.product,
    product_id: e.product_id,
  }));
});

const isLoading = ref(false)

const selectAll = (event) => {
  try {
    if (
      !selectedTarget.value ||
      selectedTarget.value.length != formattedUsers.value.length
    ) {
      selectedTarget.value = formattedUsers.value.map((e) => {
        return { id: e.id, product: e.product }
      })
      document.querySelectorAll('.p-checkbox-box').forEach((e) => {
        e.classList.add('p-highlight')
        e.innerHTML =
          '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="p-icon p-checkbox-icon undefined" aria-hidden="true" data-pc-section="checkboxicon" style=""><path d="M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z" fill="currentColor"></path></svg>'
      })
    } else {
      selectedTarget.value = null
      document.querySelectorAll('.p-checkbox-box').forEach((e) => {
        e.classList.remove('p-highlight')
        e.innerHTML =
          '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="p-icon p-checkbox-icon" aria-hidden="true" data-pc-section="checkboxicon" style="display: none;"><path d="M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z" fill="currentColor"></path></svg>'
      })
    }
  } catch (e) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: e.message,
    })
  }
}
const getBudgetItems = async (index, month) => {
  try {
    const { status, data } = await expenditureRequests(
      'post',
      'core/expenditure',
      {
        "unit" : userStore.$state.user.unit,
        "year": new Date().getFullYear(),
        "month": month // Use the provided month
      }
    );
    if (status === 200) {
      // Update the budget items for the specific row
      rows.value[index].b_items = data.data; 
      refreshKey.value++;
    }
  } catch (e) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: e.message,
    })
  }
};


const requestAIE = async () => {
  try {
  isLoading.value = true 
    const { status, data } = await expenditureRequests(
      'post',
      'core/expenditure/aie/request',
      requestAIEPayload.value
    )
    if (status === 200) {
  isLoading.value = false 

      response.value = data.data
      Swal.fire({
        icon: 'success',
        title: 'succesful',
        text: response.value.data,
      })
      rows.value = ref([{ month:1, b_items:[], product_id: null, spend: 0, reason: '' }]);

    }
  } catch (e) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: e.message,
    })
  isLoading.value = false 

  }
}

onMounted(() => {
  rows.value.forEach((row, index) => {
    getBudgetItems(index, row.month);
  })
  })
</script>

<template>
  <app-layout>
    <template v-slot:main-content>
      <form action="" @submit.prevent="requestAIE()">
        <main class="w-full bg-[#F5F5F5] pl-[260px]">
          <AppHorizontalNavigation />
          <header class="m-14 flex items-center justify-between">
            <div
              class="flex cursor-pointer items-center"
              @click="$router.push({ name: 'requests' })"
            >
              <img src="../assets/chevron-black.svg" class="mr-1 rotate-90" />
              <span class="text-xl font-semibold">Back</span>
            </div>
            <div class="flex flex-row-reverse">
              <button
                type="submit"
                class="ml-6 rounded-md bg-primary px-4 py-2 text-white"
                :disabled="isLoading"
              >
                Submit AIE <span class="loader" v-if="isLoading"></span>
              </button>
              <button
                class="rounded-md border border-primary px-4 py-2 text-primary"
              >
                Cancel
              </button>
            </div>
          </header>
          <main class="m-14 bg-white p-12">
            <h1 class="mb-6 text-2xl font-bold">Expenditure Request</h1>
         
            <div class="mb-2">
                <label class="text-sm font-semibold ">Date Requested:</label>
                <input
                  type="date"
                  v-model="requestAIEPayload.request_date"
                  class="mt-1 block w-1/2 border border-gray-300 p-2 mb-2 focus:outline-primary"
                  required
                />
              </div>
              <section class="grid grid-cols-1 gap-10 mt-2" :key="refreshKey">
              <div class="flex flex-wrap items-start justify-between" v-for="(row, index) in rows" :key="index">
                <div>
              <label class="text-sm font-semibold">Select Month</label>
              <select
                v-model="row.month"
                class="w-full mb-4 mt-1 block border border-gray-300 p-2 focus:outline-primary"
                required
                @change="getBudgetItems(index, row.month)"
              >
                <option
                  :value="index + 1"
                  v-for="(month, index) in months"
                  :key="index + 1"
                >
                  {{ month }}
                </option>
              </select>
            </div>
                <div class="flex flex-col w-1/4 mr-1 mb-4">
                  <label for="" class="text-sm font-semibold">Requests For:</label>
                  <select name="" id="" v-model="row.product_id" 
                    placeholder="Select Item"
                  class="z-50 flex w-full mt-2 flex-row rounded-lg border border-gray-300 bg-white p-2" >
                    <option v-for="item in row.b_items" :value="item.product_id">
                      {{ item.product }}
                    </option>
                  </select>
                  <!-- <MultiSelect
                    v-model="row.item"
                    :options="(row.b_items).map((e) => ({ product: e.product, product_id: e.product_id }))"
                    :filter="true"
                    optionLabel="product"
                    placeholder="Select Item"
                    :maxSelectedLabels=1
                    class="z-50 flex w-full mt-2 flex-row rounded-lg border border-gray-300 bg-white p-2"
                  ></MultiSelect> -->
                </div>
                <div class="flex flex-col w-1/4 mb-4">
                  <label class="text-sm font-semibold mb-2">Proposed Spend</label>
                  <input
                    type="number"
                    step="any"
                    v-model="row.spend"
                    placeholder="0"
                    class="w-full rounded-lg block border border-gray-300 p-2 focus:outline-primary"
                    required
                  >
                </div>
                <div class="flex flex-col w-1/5">
                  <label class="text-sm font-semibold mb-1">Description:</label>
                  <textarea
                    name="reason"
                    cols="5"
                    rows="1"
                    required
                    v-model="row.reason"
                    id=""
                    class="mt-1 block w-full border rounded-lg border-gray-300 p-2 focus:outline-primary"
                  ></textarea>
                </div>
                <div class="flex w-1/6 mt-7">
                  <button type="button" @click="addNewRow" class="rounded-md bg-primary-green w-1/2 px-4 py-2 text-white mr-1">Add</button>
                  <button type="button" @click="deleteRow(index)" class="rounded-md bg-primary w-1/2 px-4 py-2 text-white">Delete</button>
                </div>
              </div>
            </section>

          </main>
        </main>
      </form>
    </template>
  </app-layout>
</template>
<style>
.p-multiselect-filter,
.p-inputtext,
.p-multiselect-items-wrapper {
  /* max-height: 200px; */
  background: white;
  border: solid 1px;
  /* justify-content: center; */
  padding-left: 20px;
}
</style>
