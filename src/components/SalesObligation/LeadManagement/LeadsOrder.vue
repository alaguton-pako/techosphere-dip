<script>

</script>
<template>
     <app-layout>
    <template v-slot:main-content>
      <main class="w-full bg-[#F5F5F5] pl-[260px]">
        <AppHorizontalNavigation />
        <main class="m-14">
                            <nav class="flex  font-semibold text-gray-600 justify-between">
                                <div class="flex cursor-pointer items-center" @click="$router.go(-1)">
                                    <img src="@/assets/chevron-black.svg" class="mr-1 rotate-90" />
                                    <span class="text-xl font-semibold">Back</span>
                                </div>
                                <div>
                                    <div class="flex justify-center items-center space-x-3">
                                        <div class="bg-red-600 text-white px-6 py-2 rounded-md">
                                            <button type="submit">Save</button>
                                        </div>
                                        
                                        <div class=" border border-gray-400 px-6 py-2 rounded-md cursor-pointer" @click="sendByEmail">
                                            <p>Send by Email</p>
                                        </div>
                                    </div>
                                </div>
                            </nav>


                            <section class="mt-24">
                                <div class=" border border-secondary p-5">
                                    <div class="flex justify-between">
                                        <div class="text-2xl font-semibold">New</div>
                                    </div>
                                    <div class="flex justify-evenly my-10">
                                        <div class="flex space-x-2 ">
                                            <div>
                                                <p class="font-semibold">Lead:</p>
                                            </div>
                                            <div class="border border-gray-500 "></div>
                                            <div class="space-y-3">
                                                <select 
                                                v-model="customer_id"
                                                    class="border border-gray-500 px-5 py-1 ">
                                                    <option value="">Aliyu Adams</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div class="flex space-x-2">
                                            <div class="space-y-3 ml-3">
                                                <p class="font-semibold">Payment Terms:</p>
                                            </div>
                                            <div class="border border-gray-500 "></div>

                                            <div class="space-y-3 flex flex-col">
                                                <select name="" id=""  
                                                v-model="payment_frequency"
                                                    class="border bg-[#EEEEEE] border-gray-500 px-12 py-1">
                                                    <option value="" >
                                                       18mpbs
                                                    </option>
                                                   
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <table class="w-full table-auto border border-secondary text-center text-sm mt-24">
                                        <thead class="bg-gray-200 text-xs uppercase">
                                            <tr class="border border-secondary">
                                                <th class=" p-3">Product</th>
                                                <th class=" p-3">Description</th>
                                                <th class=" p-3">Order Qty</th>
                                                <th class=" p-3">Unit Price</th>
                                                <th class=" p-3">Taxes</th>
                                                <th class=" p-3">Discount</th>
                                                <th class=" p-3">Subtotal</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td class=" p-4">
                                                    
                                                    <select name="" id=""
                                                    v-model="product_id"
                                                    class="border border-gray-500 px-12 py-1 bg-[#EEEEEE]">
                                                    <option value="">
                                                    Business DualPlay
                                                    </option>
                                                </select>
                                                </td>
                                                <td class=" p-4 text-center">
                                                    Business
                                                </td>
                                                <td class=" p-4 text-center">
                                                    2
                                                </td>
                                                <td class=" p-4">
                                                   27,000
                                                </td>
                                                <td class=" p-4">
                                                   350
                                                </td>
                                                <td class=" p-4">
                                                 1,350
                                                </td>
                                                <td> 
                                                    <input type="text" readonly v-model="sub_total" class="text-center">
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div class="flex flex-col items-end mt-20">
                                        <div class="flex space-x-10 border-b border-gray-500 mb-4 pb-4 ">
                                            <div class="space-y-3">
                                                <p class="font-semibold">Untaxed Amount:</p>
                                                <p class="font-semibold">Taxes</p>
                                            </div>
                                                <div class="space-y-3">
                                                <p class="">27,000</p>
                                                <input type="text" readonly v-model="taxes">
                                            </div>
                                        </div>


                                        <div class="flex space-x-32">
                                            <div class="space-y-3">
                                                <p class="font-semibold ml-8">Total:</p>
                                            </div>
                                                <div class="space-y-3">
                                                <input type="text" readonly v-model="total_amount">
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </section>

            </main>
            </main>
            </template>
            </app-layout>
</template>