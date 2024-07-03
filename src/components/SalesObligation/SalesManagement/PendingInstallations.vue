<script setup>
import { ref, onMounted } from 'vue'
import dipRequest from '@/services/dip.request'
import AppModal from '@/components/AppModal.vue'
import Swal from 'sweetalert2'

// import AppPagination from "@/components/AppPagination.vue";
// import LoadingSpinner from "@/components/LoadingSpinner.vue";
const id = ref(null)
const customerId = ref(null)
const activateCustomer = ref(false)
const pendingInstallation = ref('')
const getPendingInstallation = async () => {
  try {
    const { status, data } = await dipRequest(
      'get',
      'v1/sales/customers-pending-installation?per_page=20&page=1'
    )

    if (status == 200) {
      pendingInstallation.value = data.result
    }
  } catch (e) {
    console.log(e)
  }
}

const openMod = (id) => {
  customerId.value = id
  activateCustomer.value = true
  return customerId.value
}
const update_installation = ref('')
const updateInstallation = async () => {
  if (customerId.value) {
    try {
      const { status, data } = await dipRequest(
        'patch',
        `v1/sales/${customerId.value}/convert`,
        {
          payment_date: update_installation.value,
        }
      )
      if (status == 422) {
    Swal.fire({
      icon: "info",
      title: "Info",
      text: data ? data.message : "Enter Correct details",
    });
   
  }

  if (status == 200 || status == 201) {
    Swal.fire({
      icon: "success",
      title: "Submitted",
      text: "Updated Successfully",
    });
    setTimeout(function() {
            location.reload();
        }, 2000);
  } else {
    Swal.fire({
      icon: "info",
      title: "Enter Valid Details",
      text: data ? data.message : "Invalid Request",
    });
   
  }
    } catch (e) {
      console.log(e)
      Swal.fire({
        icon: 'info',
        title: 'Info',
        text: e.message,
      })
    }
  }
}

const submitForm = () => {
      updateInstallation();
     activateCustomer.value = false;
   update_installation.value = null;
}



onMounted(() => {
  getPendingInstallation()
})
</script>
<template>
  <div>
    <section class="my-12 flex items-end justify-end">
      <div class="flex flex-row-reverse items-center">
        <div class="mx-4 flex items-center">
          <input
            v-model="searchParam"
            type="search"
            placeholder="Search"
            class="w-[230px] rounded-l-md border border-r-0 border-secondary p-2 focus:outline-none"
          />
          <button
            @click.prevent="getCustomers(current)"
            class="h-full rounded-r-md border border-secondary bg-primary-gray px-3 py-2.5"
          >
            <!-- <img src="@/assets/search-white.svg" alt="" /> -->
          </button>
        </div>

        <select
          class="rounded-md border border-secondary p-2.5 focus:outline-none"
          v-model="searchField"
        >
          <option value="" selected>Search Custom Fields</option>
          <option value="email">Email</option>
          <option value="phone">Phone</option>
          <option value="name">Name</option>
        </select>
      </div>
    </section>
    <table class="w-full table-auto border border-secondary text-sm">
      <thead class="bg-gray-200">
        <tr class="border border-secondary capitalize">
          <th class="border border-secondary p-2">Name</th>
          <!-- <th class="border border-secondary p-3">Email Address</th> -->
          <!-- <th class="border border-secondary p-3">Phone number</th> -->
          <th class="border border-secondary p-3">Address</th>
          <th class="border border-secondary p-3">product name</th>
          <!-- <th class="border border-secondary p-3">Action</th> -->
        </tr>
      </thead>

      <tbody>
        <tr v-for="(item, index) in pendingInstallation" :key="index">
          <td class="border border-secondary p-4 text-center">
            {{ item.business_name }}
          </td>
          <!-- <td class="border border-secondary p-3">
            {{ item.email }}
          </td> -->
          <!-- <td class="border border-secondary p-3">
            {{}}
          </td> -->
          <td class="border border-secondary p-3">
            {{ item.address }}
          </td>
          <td class="border border-secondary p-3">
            {{ item.product_name }}
          </td>

          <!-- <td
            class="cursor-pointer border border-secondary p-3 underline"
            @click="openMod(item.customer_id)"
          >
            View
          </td> -->
        </tr>
      </tbody>
    </table>
    <AppModal v-if="activateCustomer">
      <template #modal-content>
        <form action="" @submit.prevent="submitForm">
          <div
            @click="activateCustomer = false"
            class="my-6 ml-auto grid h-10 w-10 place-content-center rounded-full border border-primary text-xl text-primary"
          >
            X
          </div>
          <p>Update Installation Date:</p>
          <div class="flex flex-col space-y-4">
            <input
              v-model="update_installation"
              type="date"
              required
              class="border border-gray-300 p-2"
            />
            <button
              class="rounded border border-secondary bg-red-600 p-2 px-4 text-white"
            >
              Save
            </button>
          </div>
        </form>
      </template>
    </AppModal>

    <div>
      <!-- <loading-spinner v-if="isloading" /> -->
      <!-- Pagination -->
      <!-- <AppPagination class="m-10" v-if="requestComplete" :pagination="pagination" @fetchRecords="getCustomers" /> -->
    </div>
  </div>
</template>
