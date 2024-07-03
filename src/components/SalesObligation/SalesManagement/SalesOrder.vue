<script setup>
import { onMounted, reactive, ref } from 'vue'
import SelectDate from '@/components/SelectDate.vue'
import Search from '@/components/Search.vue'
import AppPagination from '../../AppPagination.vue'
import AppModal from '@/components/AppModal.vue'
import Swal from 'sweetalert2'
import dipRequest from '@/services/dip.request'
import { useUserStore } from '@/stores/userStore'
const store = useUserStore()

onMounted(() => {
  getProduct()
  getFrequency()
  getCustomer()
  getCustomerDataTable()
})
const customer = ref('')
const customers = ref('')
const productDescription = ref('')
const productPrice = ref('0')
const customerTable = ref('')

const customer_id = ref('')
const payment_date = ref(null)
const payment_frequency = ref('')
const product_id = ref('')
const taxes = ref('')
const sub_total = ref('')
const total_amount = ref('')
const sales_person = ref('')
const send_by_email = ref(false)

const newSalesOrder = ref(false)
const products = ref([])

const frequency = ref('')

sales_person.value = 'Ahmed' || store.$state.user.name

const getFrequency = async () => {
  try {
    const { status, data } = await dipRequest('get', 'v1/utilities/frequency')
    if (status == 200) {
      frequency.value = data.data

      let keys = Object.keys(frequency.value)
      let values = Object.values(frequency.value)
      frequency.value = keys.map((e, i) => {
        return { value: e, label: values[i] }
      })
    }
  } catch (e) {
    console.log(e)
  }
}

const getCustomer = async () => {
  try {
    const { status, data } = await dipRequest(
      'get',
      'v1/customers?partial=true'
    )
    if (status == 200) {
      customers.value = data.data

      let keys = Object.keys(customers.value)
      let values = Object.values(customers.value)
      customers.value = keys.map((e, i) => {
        return { value: e, label: values[i] }
      })
    }
  } catch (e) {
    console.log(e)
  }
}

const getCustomerDataTable = async () => {
  try {
    const { status, data } = await dipRequest(
      'get',
      'v1/sales/sales-order?per_page=20&page=1'
    )
    if (status == 200) {
      customerTable.value = data.result
    }
  } catch (e) {
    console.log(e)
  }
}

const getProduct = async () => {
  try {
    const { status, data } = await dipRequest(
      'get',
      'v1/utilities/product-catalog'
    )
    if (status == 200) {
      products.value = data.data

      if (!product_id.value) {
        return
      }
      let product = products.value.filter((product) => {
        return product.id == product_id.value
      })
      productDescription.value = product[0].billing_code
      productPrice.value = product[0].amount
    }
    sub_total.value = payment_frequency.value * productPrice.value

    taxes.value = (7.5 * sub_total.value) / 100

    total_amount.value = sub_total.value + taxes.value
  } catch (e) {
    console.log(e)
  }
}

function sendByEmail() {
  send_by_email.value = true
}

const createSalesOrder = async () => {
  try {
    const { status, data } = await dipRequest(
      'post',
      `v1/sales/create-sales-order`,
      {
        customer_id: customer_id.value,
        payment_date: payment_date.value,
        payment_frequency: payment_frequency.value,
        product_id: product_id.value,
        taxes: taxes.value,
        sub_total: sub_total.value,
        total_amount: total_amount.value,
        sales_person: sales_person.value,
        send_by_email: send_by_email.value,
      }
    )
    //   let btn = document.getElementById("createLocationButton");
    //   btn.innerHTML = "Processing....";
    //   btn.setAttribute("disabled", true);

    if (status == 422) {
      Swal.fire({
        icon: 'info',
        title: 'Info',
        text: data ? data.message : 'Enter Correct details',
      })
    }
    if (status == 200 || status == 201) {
      Swal.fire({
        icon: 'success',
        title: 'Submitted',
        text: 'Sales Order Created Successfully',
      })
      newSalesOrder.value = false
      setTimeout(function () {
        location.reload()
      }, 1000)
    } else {
      Swal.fire({
        icon: 'info',
        title: 'Enter Valid Details',
        text: data ? data.message : 'Invalid Request',
      })
    }
    //   btn.innerHTML = "Create";
    //   btn.removeAttribute("disabled");
    //   newLead.value = false;
  } catch (e) {
    console.log(e)
    Swal.fire({
      icon: 'info',
      title: 'Info',
      text: e.message,
    })
  }
}
</script>
<template>
  <div>
    <section>
      <div class="my-4 flex items-center justify-end">
        <SelectDate />
        <Search />
        <div
          class="flex items-end justify-center rounded-md bg-red-600 px-5 py-3 text-white"
          @click="newSalesOrder = !newSalesOrder"
        >
          <p class="cursor-pointer">New Sales Order</p>
        </div>
      </div>
      <!-- Add new SalesModal -->
      <AppModal v-if="newSalesOrder">
        <template #modal-content>
          <form @submit.prevent="createSalesOrder">
            <button
              class="my-6 ml-auto grid h-10 w-10 place-content-center rounded-full border border-primary text-xl text-primary"
              type="button"
              @click="newSalesOrder = false"
            >
              𝖷
            </button>
            <main class="my-6">
              <nav class="flex justify-between font-semibold text-gray-600">
                <div
                  class="flex cursor-pointer items-center"
                  @click="$router.go(-1)"
                >
                  <img
                    src="@/assets/chevron-black.svg"
                    class="mr-1 rotate-90"
                  />
                  <span class="text-xl font-semibold">Back</span>
                </div>
                <div>
                  <div class="flex items-center justify-center space-x-3">
                    <div class="rounded-md bg-red-600 px-6 py-2 text-white">
                      <button type="submit">Save</button>
                    </div>

                    <div
                      class="cursor-pointer rounded-md border border-gray-400 px-6 py-2"
                      @click="sendByEmail"
                    >
                      <p>Send by Email</p>
                    </div>
                  </div>
                </div>
              </nav>

              <section class="mt-4">
                <div class="border border-secondary p-5">
                  <div class="flex justify-between">
                    <div class="text-2xl font-semibold">New</div>
                  </div>
                  <div class="my-10 flex justify-evenly">
                    <div class="flex space-x-2">
                      <div>
                        <p class="font-semibold">Customer:</p>
                      </div>
                      <div class="border border-gray-500"></div>
                      <div class="space-y-3">
                        <select
                          v-model="customer_id"
                          class="border border-gray-500 px-5 py-1"
                        >
                          <option
                            v-for="(customer, index) in customers"
                            :key="index"
                            :value="customer.value"
                          >
                            {{ customer.label }}
                          </option>
                        </select>
                      </div>
                    </div>

                    <div class="flex space-x-2">
                      <div class="ml-3 space-y-3">
                        <p class="font-semibold">Payment Terms:</p>
                      </div>
                      <div class="border border-gray-500"></div>

                      <div class="flex flex-col space-y-3">
                        <select
                          name=""
                          id=""
                          v-model="payment_frequency"
                          class="border border-gray-500 bg-[#EEEEEE] px-12 py-1"
                        >
                          <option
                            v-for="(term, index) in frequency"
                            :key="index"
                            :value="term.value"
                          >
                            {{ term.label }}
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <table
                    class="my-10 w-full table-auto border border-secondary text-center text-sm"
                  >
                    <thead class="bg-gray-200 text-xs uppercase">
                      <tr class="border border-secondary">
                        <th class="p-3">Product</th>
                        <th class="p-3">Description</th>
                        <th class="p-3">Unit Price</th>
                        <th class="p-3">Subtotal</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="p-4">
                          <select
                            name=""
                            id=""
                            v-model="product_id"
                            @change="getProduct($event.target.value)"
                            class="border border-gray-500 bg-[#EEEEEE] px-12 py-1"
                          >
                            <option
                              v-for="(product, index) in products"
                              :key="index"
                              :value="product.id"
                            >
                              {{ product.name }}
                            </option>
                          </select>
                        </td>
                        <td class="p-4 text-center">
                          {{ productDescription }}
                        </td>
                        <td class="p-4">
                          {{
                            new Intl.NumberFormat('en-US').format(productPrice)
                          }}
                        </td>
                        <td>
                          <input
                            type="text"
                            readonly
                            v-model="sub_total"
                            class="text-center"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div class="flex flex-col items-end">
                    <div class="flex space-x-10 border-b border-gray-500">
                      <div class="space-y-3">
                        <p class="font-semibold">Untaxed Amount:</p>
                        <p class="font-semibold">Taxes</p>
                      </div>
                      <div class="space-y-3">
                        <p class="">{{ sub_total }}</p>
                        <input type="text" readonly v-model="taxes" />
                      </div>
                    </div>

                    <div class="my-3 flex space-x-32">
                      <div class="space-y-3">
                        <p class="font-semibold">Total:</p>
                      </div>
                      <div class="space-y-3">
                        <input type="text" readonly v-model="total_amount" />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </main>
          </form>
        </template>
      </AppModal>
      <!-- Modal ends -->
    </section>

    <section class="my-5">
      <table
        class="w-full table-auto border border-secondary text-center text-sm"
      >
        <thead class="bg-gray-200 text-xs uppercase">
          <tr class="border border-secondary">
            <th class="border border-secondary p-3">Order Number</th>
            <th class="border border-secondary p-3">Order Date</th>
            <th class="border border-secondary p-3">Customer Name</th>
            <th class="border border-secondary p-3">Sales person</th>
            <th class="border border-secondary p-3">total</th>
            <th class="border border-secondary p-3">Invoice Status</th>
            <th class="border border-secondary p-3">action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(data, index) in customerTable" :key="index">
            <td class="border border-secondary p-4">{{ data.order_no }}</td>
            <td class="border border-secondary p-4 text-center">
              <p>{{ data.order_date }}</p>
            </td>
            <td class="border border-secondary p-4">
              {{ data.business_name }}
            </td>
            <td class="border border-secondary p-4">{{ data.sales_person }}</td>
            <td class="border border-secondary p-4">
              N{{ data.total_amount }}
            </td>
            <td class="border border-secondary p-4">{{ data.status }}</td>
            <td>
              <router-link
                :to="{
                  name: 'order details',
                  params: { id: data.id },
                }"
                class="underline"
                >View</router-link
              >
            </td>
          </tr>
        </tbody>
      </table>
      <!-- <AppPagination /> -->
    </section>
  </div>
</template>
