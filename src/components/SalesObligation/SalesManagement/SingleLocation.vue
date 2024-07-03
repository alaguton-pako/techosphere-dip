<script setup>
import { ref, onMounted } from 'vue'
import dipRequest from '@/services/dip.request'
import Swal from 'sweetalert2'
import { useUserStore } from '@/stores/userStore'
const store = useUserStore()

const sectors = ref([])
const selectedSector = ref('')
const selectedProduct = ref('')
const selectedSegment = ref('')
const segments = ref([])
const products = ref([])
const productDescription = ref('')
const productPrice = ref('0')
const frequency = ref('')
const registrationTypes = ref([])
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
const getRegistrationType = async () => {
  try {
    const { status, data } = await dipRequest(
      'get',
      'v1/utilities/registration-types'
    )
    if (status == 200) {
      registrationTypes.value = data.data
      let keys = Object.keys(registrationTypes.value)
      let values = Object.values(registrationTypes.value)
      registrationTypes.value = keys.map((e, i) => {
        return { value: e, label: values[i] }
      })
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

      if (!product_information.value.product_id) {
        return
      }
      let product = products.value.filter((product) => {
        return product.id == product_information.value.product_id
      })
      productDescription.value = product[0].billing_code
      productPrice.value = product[0].amount
    }
    product_information.value.sub_total =
      product_information.value.payment_frequency * productPrice.value
    product_information.value.taxes =
      (7.5 * product_information.value.sub_total) / 100
    product_information.value.total_amount =
      product_information.value.sub_total + product_information.value.taxes
  } catch (e) {
    console.log(e)
  }
}

const getSegments = async (sector_id) => {
  try {
    let sector = sectors.value.filter((sector) => {
      return sector.id == selectedSector.value
    })
    // lead.value.sector = sector[0]?.name;
    const { status, data } = await dipRequest(
      'get',
      `v1/utilities/segments?sector_id=${sector_id} `
    )
    if (status == 200) {
      segments.value = data.data
    }
  } catch (e) {
    console.log(e)
  }
}

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

      // let restructuredData=frequency.value.map((e)=>{
      //     return {}
      // })
    }
  } catch (e) {
    console.log(e)
  }
}

const addSingleLocation = async () => {
  try {
    const { status, data } = await dipRequest(
      'post',
      `v1/customer/manual-registration/single`,
      {
        business_information: business_information.value,
        product_information: product_information.value,
      }
    )
    let btn = document.getElementById('createLocationButton')
    btn.innerHTML = 'Processing....'
    btn.setAttribute('disabled', true)

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
        text: 'Customer Record has been created successfully',
      })
      setTimeout(function () {
        location.reload()
      }, 3000)
    } else {
      Swal.fire({
        icon: 'info',
        title: 'Enter Valid Details',
        text: data ? data.message : 'Invalid Request',
      })
    }
    btn.innerHTML = 'Create'
    btn.removeAttribute('disabled')
    // newLead.value = false;
    //
  } catch (e) {
    Swal.fire({
      icon: 'info',
      title: 'Info',
      text: e.message,
    })
  }
}

const business_information = ref({
  business_name: '',
  rc_number: '',
  address: '',
  state: '',
  sector: '',
  segment: '',
  contact_firstname: '',
  contact_lastname: '',
  othernames: '',
  email_address: '',
  phone_number: '',
  reg_type: '',
  sales_person: '',
  vatable: '',
})

const product_information = ref({
  payment_date: '',
  payment_frequency: '',
  product_id: '',
  taxes: '',
  sub_total: '',
  total_amount: '',
})

business_information.value.sales_person = "Ahmed" || store.$state.user.name

onMounted(() => {
  getSectors()
  getSegments()
  getProduct()
  getFrequency()
  getRegistrationType()
})
</script>

<template>
  <div class="border border-gray-500 bg-white">
    <form @submit.prevent="addSingleLocation">
      <div>
        <div class="flex justify-between bg-[#CDCDCD] p-2">
          <div class="flex space-x-2">
            <img src="../../../assets/person.fill.badge.plus.svg" alt="" />
            <p>Business Details</p>
          </div>
          <div class="flex space-x-3">
            <img src="../../../assets/down-arrow.svg" alt="" class="w-4" />
            <img src="../../../assets/arrow.circle.svg" alt="" />
          </div>
        </div>

        <div class="p-5">
          <div class="grid grid-cols-3 gap-5">
            <div class="flex flex-col">
              <label for="">Business Name *</label>
              <input
                v-model="business_information.business_name"
                type="text"
                required
                class="border border-gray-500 p-2"
              />
            </div>
            <div class="flex flex-col">
              <label for="">RC Number *</label>
              <input
                v-model="business_information.rc_number"
                type="text"
                required
                class="border border-gray-500 p-2"
              />
            </div>
            <div class="flex flex-col">
              <label for="">Address *</label>
              <input
                v-model="business_information.address"
                type="text"
                required
                class="border border-gray-500 p-2"
              />
            </div>
            <div class="flex flex-col">
              <label for="">State *</label>
              <select
                name=""
                id=""
                v-model="business_information.state"
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

            <div class="flex flex-col">
              <label for="">Sector *</label>
              <select
                name=""
                required
                id=""
                @change="getSegments($event.target.value)"
                v-model="business_information.sector"
                class="border border-gray-500 bg-white p-2"
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
            </div>

            <div class="flex flex-col">
              <label for="">Segment*</label>
              <select
                v-model="business_information.segment"
                required
                class="border border-secondary bg-white px-3 py-2"
              >
                <option value="" selected disabled>Select Segment</option>
                <option
                  v-for="(segment, index) in segments"
                  :key="index"
                  :value="segment.id"
                >
                  {{ segment.name }}
                </option>
              </select>
            </div>

            <div class="flex flex-col">
              <label for="">Registration Type*</label>
              <select
                v-model="business_information.reg_type"
                required
                class="border border-secondary bg-white px-3 py-2"
              >
                <option value="" selected disabled>
                  Select Registration Type
                </option>
                <option
                  v-for="(registrationType, index) in registrationTypes"
                  :key="index"
                  :value="registrationType.value"
                >
                  {{ registrationType.label }}
                </option>
              </select>
            </div>
            <div class="flex flex-col">
              <label for=""> Contact First Name * </label>
              <input
                v-model="business_information.contact_firstname"
                type="text"
                required
                class="border border-gray-500 p-2"
              />
            </div>
            <div class="flex flex-col">
              <label for="">Contact Last Name *</label>
              <input
                v-model="business_information.contact_lastname"
                type="text"
                required
                class="border border-gray-500 p-2"
              />
            </div>
            <div class="flex flex-col">
              <label for="">Other Name (optional)</label>
              <input
                v-model="business_information.othernames"
                type="text"
                class="border border-gray-500 p-2"
              />
            </div>
            <div class="flex flex-col">
              <label for="">Email Address *</label>
              <input
                v-model="business_information.email_address"
                type="text"
                required
                class="border border-gray-500 p-2"
              />
            </div>
            <div class="flex flex-col">
              <label for=""> Phone Number * </label>
              <input
                v-model="business_information.phone_number"
                type="text"
                required
                class="border border-gray-500 p-2"
              />
            </div>
          </div>

          <!-- is VAT -->
          <div class="my-2 flex flex-col">
            <label for=""> Do you pay VAT? </label>
            <select
              name=""
              id=""
              v-model="business_information.vatable"
              class="w-[420px] border border-gray-500 p-2.5"
            >
              <option value="" selected disabled>Select an Option</option>
              <option value="Yes">YES</option>
              <option value="No">NO</option>
            </select>
          </div>

          <div>
            <div class="my-7 flex justify-between bg-[#CDCDCD] p-2">
              <div class="flex space-x-2">
                <img src="../../../assets/wifi.svg" alt="" />
                <p>Product/Service Details</p>
              </div>
            </div>
            <div class="my-10 flex px-10">
              <div class="flex space-x-2">
                <div class="space-y-3">
                  <p class="font-semibold">Payment Date:</p>
                  <p class="font-semibold">Payment Terms:</p>
                </div>
                <div class="border border-gray-500"></div>
                <div class="flex flex-col space-y-3">
                  <div class="border border-gray-500 bg-[#EEEEEE] py-1">
                    <input
                      required
                      v-model="product_information.payment_date"
                      type="date"
                      name=""
                      id=""
                      class="bg-[#EEEEEE] px-32"
                    />
                  </div>

                  <select
                    name=""
                    id=""
                    class="border border-gray-500 bg-[#EEEEEE] px-12 py-1"
                    required
                    v-model="product_information.payment_frequency"
                  >
                    <option value="" selected disabled class="text-center">
                      Select Term
                    </option>
                    <option
                      v-for="(term, index) in frequency"
                      :key="index"
                      :value="term.value"
                      class="text-center"
                    >
                      {{ term.label }}
                    </option>
                  </select>
                </div>
              </div>
            </div>

            <table
              class="my-10 w-full table-fixed border border-secondary text-center text-sm"
            >
              <thead class="bg-[#CDCDCD] text-xs uppercase">
                <tr class="border border-secondary">
                  <th class="p-3">Product</th>
                  <th class="p-3">Description</th>
                  <th class="p-3">Unit Price</th>
                  <th class="p-3">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <select
                      name=""
                      id=""
                      class="border border-gray-300 px-12 py-1"
                      required
                      v-model="product_information.product_id"
                      @change="getProduct($event.target.value)"
                    >
                      <option value="" selected disabled>Select Product</option>
                      <option
                        v-for="(product, index) in products"
                        :key="index"
                        :value="product.id"
                      >
                        {{ product.name }}
                      </option>
                    </select>
                  </td>
                  <td class="p-4 text-center">{{ productDescription }}</td>
                  <td class="p-4">
                    {{ new Intl.NumberFormat('en-US').format(productPrice) }}
                  </td>
                  <td>
                    <input
                      type="text"
                      readonly
                      v-model="product_information.sub_total"
                      class="text-center"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="flex flex-col items-end p-5">
              <div class="flex space-x-10 border-b border-gray-500">
                <div class="space-y-3">
                  <p class="font-semibold">Untaxed Amount:</p>
                  <p class="font-semibold">Taxes</p>
                </div>
                <div class="space-y-3">
                  <p class="">{{ product_information.sub_total }}</p>
                  <input
                    type="text"
                    readonly
                    v-model="product_information.taxes"
                  />
                </div>
              </div>
              <div class="flex space-x-32 pt-4">
                <div class="">
                  <p class="font-semibold">Total</p>
                </div>
                <div class="space-y-3">
                  <input
                    class=""
                    type="text"
                    readonly
                    v-model="product_information.total_amount"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="m-7 flex justify-end">
            <div class="flex justify-end space-x-2 px-5">
              <button
                type="submit"
                class="rounded-sm bg-red-600 px-6 py-2 text-white"
                id="createLocationButton"
              >
                Create
              </button>
              <button class="rounded-sm border border-gray-500 px-8 py-2">
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
