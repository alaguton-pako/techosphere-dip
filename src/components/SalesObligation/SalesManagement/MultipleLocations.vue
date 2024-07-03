<script setup>
import {onMounted, reactive, ref } from 'vue'
import dipRequest from "@/services/dip.request";

const customers = ref('')
const states =ref([
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


onMounted(() => {
  getCustomer();
});

const getCustomer = async () => {
    try{
        const {status, data} = await dipRequest('get', 'v1/customers');
        if(status ==200){
            customers.value = data.data;

            let keys = Object.keys(customers.value);
      let values = Object.values(customers.value);
      customers.value = keys.map((e, i) => {
        return { value: e, label: values[i] };
      });
        }
    } catch (e) {
    console.log(e);
    }
}
</script>


<template>
    <div class="border border-gray-500 bg-white ">
        <div>
            <div class="flex justify-between p-2 bg-[#CDCDCD] ">
                <div class="flex space-x-2 w-full">
                    <img src="../../../assets/person.fill.badge.plus.svg" alt="">
                    <p>Business Details</p>
                </div>
                <div class="flex space-x-3">
                    <img src="../../../assets/down-arrow.svg" alt="" class="w-4">
                    <img src="../../../assets/arrow.circle.svg" alt="">
                </div>
            </div>

            <div class=" p-5">
                <div class="space-y-3 flex flex-col py-4 w-1/2">
                    <label for="">Select Customer:</label>
                    <select 
                    v-model="customer_id"
                        class="border border-gray-500  px-4 py-2 mb-6  bg-white">
                        <option  class="px-2" v-for="(customer, index) in customers" :key="index" :value="customer.value">{{ customer.label }}</option>
                    </select>
                </div>
                <div class="grid grid-cols-3 gap-5">
                    <div class="flex flex-col ">
                        <label for="">Business Name *</label>
                        <input type="text " class="p-2 border border-gray-500">
                    </div>
                    <div class="flex flex-col">
                        <label for="">RC Number *</label>
                        <input type="text" class="p-2 border border-gray-500">
                    </div>
                    <div class="flex flex-col">
                        <label for="">Address *</label>
                        <input type="text" class="p-2 border border-gray-500">
                    </div>
                    <div class="flex flex-col">
                        <label for="">State *</label>
                        <select name="" id=""   class="border border-gray-600 p-2 bg-white">
                            <option value="" selected disabled class="text-gray-400">Select State</option>
                            <option v-for="(state, index) in states" :key="index" :value="state">{{ state }}</option>
                        </select>
                    </div>
                    <div class="flex flex-col">
                        <label for="">Sector *</label>
                        <select name="" id="" class="border border-gray-500 px-32 p-2 bg-[#EEEEEE]">
                            <option value=""></option>
                            <option value="">B</option>
                            <option value="">C</option>
                        </select>
                    </div>
                    <div class="flex flex-col">
                        <label for="">Segment*</label>
                        <select name="" id="" class="border border-gray-500 px-32 p-2 bg-[#EEEEEE]">
                            <option value=""></option>
                            <option value="">B</option>
                            <option value="">C</option>
                        </select>
                    </div>
                    <div class="flex flex-col">
                        <label for=""> Contact First Name *
                        </label>
                        <input type="text" class="p-2 border border-gray-500">
                    </div>
                    <div class="flex flex-col">
                        <label for="">Contact Last Name *</label>
                        <input type="text" class="p-2 border border-gray-500">
                    </div>
                    <div class="flex flex-col">
                        <label for="">Other Name (optional)</label>
                        <input type="text" class="p-2 border border-gray-500">
                    </div>
                    <div class="flex flex-col">
                        <label for="">Email Address *</label>
                        <input type="text" class="p-2 border border-gray-500">
                    </div>
                    <div class="flex flex-col">
                        <label for=""> Phone Number *
                        </label>
                        <input type="text" class="p-2 border border-gray-500">
                    </div>

                </div>
            </div>


        </div>
        <div class="">
            <div class="flex justify-between p-2 bg-[#CDCDCD] my-7">
                <div class="flex space-x-2 w-full">
                    <img src="../../../assets/person.fill.badge.plus.svg" alt="">
                    <p>Business Details - Location 2</p>
                </div>

            </div>
            <div class="grid grid-cols-3 gap-5 p-5">
                <div class="flex flex-col ">
                    <label for="">Location Name *</label>
                    <input type="text " class="p-2 border border-gray-500">
                </div>
                <div class="flex flex-col col-span-2">
                    <label for="">Address *</label>
                    <input type="text" class="p-2 border border-gray-500">
                </div>

                <div class="flex flex-col">
                    <label for="">State *</label>
                    <select name="" id="" class="border border-gray-500 px-32 p-2 bg-[#EEEEEE]">
                        <option value=""></option>
                        <option value="">B</option>
                        <option value="">C</option>
                    </select>
                </div>
                <div class="flex flex-col">
                    <label for="">Email Address *</label>
                    <input type="text" class="p-2 border border-gray-500">
                </div>
                <div class="flex flex-col">
                    <label for=""> Phone Number *
                    </label>
                    <input type="text" class="p-2 border border-gray-500">
                </div>

                <div class="flex flex-col">
                    <label for=""> Contact First Name *
                    </label>
                    <input type="text" class="p-2 border border-gray-500">
                </div>
                <div class="flex flex-col">
                    <label for="">Contact Last Name *</label>
                    <input type="text" class="p-2 border border-gray-500">
                </div>
                <div class="flex flex-col">
                    <label for="">Other Name (optional)</label>
                    <input type="text" class="p-2 border border-gray-500">
                </div>

            </div>

        </div>

        <div class=" flex justify-end m-7">
            <div class="flex space-x-2 bg-red-600 px-6 py-2 text-white rounded-md">
                <img src="../../../assets/add-icon.svg" alt="">
                <p>Add Location</p>
            </div>
        </div>

    </div>
</template>