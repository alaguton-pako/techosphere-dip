
<script setup>
import {ref,onMounted} from 'vue'
import AppModal from '../../AppModal.vue';
import dipRequest from "@/services/dip.request";
import { useRoute } from "vue-router";
import Swal from "sweetalert2";

const route = useRoute();

const confirmPayment = ref(false)
const orderDetails = ref('')
const subTotal = ref('')
const taxes = ref('')
const total = ref('')
const paymentTerms = ref('')
const address = ref('')
const businessName = ref('')
const orderStatus = ref('')
const confirmationDate = ref('_')
const expirationDate = ref('_')
const customerId = ref('')
const payment_date = ref(null)

onMounted(() => {
    getOrderDetails()
    
});

const getOrderDetails = async () => {
    try{
        const {status, data} = await dipRequest('get', `v1/sales/view-sales-order/${route.params.id}`);
        if(status ==200){
            orderDetails.value = data.result;
            subTotal.value = data.result[0].sub_total
            taxes.value = data.result[0].vat_amount
            total.value = data.result[0].total_amount
            paymentTerms.value = data.result[0].payment_term
            address.value = data.result[0].address
            orderStatus.value = data.result[0].status
            customerId.value = data.result[0].customer_id
            businessName.value = data.result[0].business_name
            expirationDate.value = data.result[0].expiry_date
            confirmationDate.value = data.result[0].date_paid
            console.log(orderDetails.value )
        }
    } catch (e) {
    console.log(e);
    }
}



const patchPaymentDate = async () => {
try {
  const { status, data } = await dipRequest(
    "patch",
    `v1/sales/view-sales-order/${route.params.id}/customer/${customerId.value}`, {
        payment_date : payment_date.value,
  }
  );

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
      text: "Payment Confirmed Successfully",
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
    icon: "info",
    title: "Info",
    text: e.message,
  });
  
}
};

</script>


<template>
    <div>
        <main class="my-6">
            <nav class="flex my- font-semibold text-gray-600">
                <div class="flex cursor-pointer items-center" @click="$router.go(-1)">
                    <img src="@/assets/chevron-black.svg" class="mr-1 rotate-90" />
                    <span class="text-xl font-semibold">Back</span>
                </div>
            </nav>
<AppModal v-if="confirmPayment">
<template #modal-content>
    <div>
        <form action="" @submit.prevent="patchPaymentDate">

            <div
                class="ml-auto grid h-10 w-10 place-content-center rounded-full my-6 border border-primary text-xl text-primary cursor-pointer"
                type="button" @click="confirmPayment = false">
                𝖷
            </div>
            <div class="flex flex-col space-y-4">
                <label for="">Date Paid:</label>
                <input    v-model="payment_date"  type="date" name="" id="" class="border border-gray-400 px-5 py-3">
                <button class="bg-red-600 px-4 py-2 text-white  "> Confirm</button>
            </div>
            

        </form>
    </div>
</template>
</AppModal>
            <section class="mt-4">

                <div class=" border border-secondary p-7">
                    <div class="flex justify-between">
                        <div class="text-2xl font-semibold">SO7089</div>
                        <div class="flex space-x-2">
                            <div class="border border-gray-500 px-5 py-2 rounded-md">Print</div>
                                <button v-if="orderStatus == 'Awaiting_Payment' " class="bg-red-600 text-white px-3 rounded-md  border-gray-400" @click="confirmPayment =!confirmPayment">Confirm Payment</button>
                        </div>
                    </div>

                    <div class="flex justify-evenly my-10">
                        <div class="flex space-x-10 ">
                            <div class="">
                                <p class="font-semibold pb-3">Customer:</p>
                                <p class="font-semibold">Address:</p>
                            </div>
                            <div class="border border-gray-500 "></div>
                            <div class="space-y-3">
                                <p class="text-[#0009D5] w-44">{{  businessName}}</p>
                                <p class="text-[#0009D5] w-44">{{ address }}</p>
                            </div>
                        </div>
                        <div class="flex space-x-10">
                            <div class="space-y-3">
                                <p class="font-semibold">Confirmation Date:</p>
                                <p class="font-semibold">Expiration Date:</p>
                                <p class="font-semibold">Payment Terms:</p>
                            </div>
                            <div class="border border-gray-500 "></div>
                            <div class="space-y-3">
                                <p>{{ confirmationDate }}</p>
                                <p>{{ expirationDate }} </p>
                                <p>{{paymentTerms}}</p>
                            </div>
                        </div>
                    </div>
                    <table class="w-full table-auto border border-secondary text-center text-sm my-10">
                        <thead class="bg-gray-200 text-xs uppercase">
                            <tr class="border border-secondary">
                                <th class=" p-3">Product</th>
                                <th class=" p-3">Description</th>
                                <th class=" p-3">Unit Price</th>
                                <!-- <th class=" p-3">Subtotal</th> -->
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(order, index) in orderDetails" :key="index">
                                <td class=" p-4">{{ order.product_name }}</td>
                                <td class=" p-4 text-center">{{ order.description }}
                                </td>
                                <td class=" p-4"> {{ order.unit_price }}</td>
                                <!-- <td>{{ order.sub_total }}</td> -->
                            </tr>
                        </tbody>
                    </table>

                    <div class="flex flex-col items-end space-y-5 px-16">
                        <div class="flex space-x-10 border-b border-gray-500 ">
                            <div class="space-y-3">
                                <p class="font-semibold">Subtotal:</p>
                                <p class="font-semibold">VAT:</p>
                            </div>
                            <div class="space-y-3">
                                <p class=""> {{ subTotal }}</p>
                                <p>{{ taxes }} </p>
                            </div>
                        </div>

                        <div class="flex space-x-16 px-1 ">
                            <div class="">
                                <p class="font-semibold">Total</p>
                            </div>
                            <div class="space-y-3">
                                <p class="">{{ total }}</p>
                            </div>
                        </div>
                    </div>

                </div>

            </section>

        </main>
    </div>
</template>
