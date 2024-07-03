<script setup>
import DynamicHorizontalNavigation from "@/components/DynamicAppHorizontalNavigation.vue";
</script>


<template lang="">
    <div>
        <DynamicHorizontalNavigation />
        <section class="p-10">
            <nav class="flex items-center bg-white p-3  font-semibold text-gray-600">
                <div class="flex space-x-3">
                    <img src="../../../../assets/left-arrow.svg" alt="">
                    <p>View</p>
                </div>
            </nav>
            <section class="my-5">
                <div class="bg-black p-2 px-7">
                    <p class="underline text-white">ESCALATION: INCOMPLETE INSTALLATION</p>
                </div>
                <div class="bg-white border border-gray-400 p-7 space-y-5">
                    <div>
                        <h4 class="font-semibold ">Type:</h4>
                        <p>1st Warning</p>
                    </div>
                    <div>
                        <h4 class="font-semibold ">Priority:</h4>
                        <p class="text-red-600">High</p>
                    </div>
                    
                    <div>
                        <h4 class="font-semibold ">Description:</h4>
                        <ul class="list-disc">
                            <li>Do ullamco ex velit anim do .</li>
                            <li>Proident exercitation et anim tempor.</li>
                            <li>Lorem sunt deserunt labore non excepteur.</li>
                            <li>Veniam enim quis officia magna ani.</li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="font-semibold ">Defaulter(s):</h4>
                        <ul class="list-disc">
                            <li>Do ullamco ex velit anim do .</li>
                            <li>Proident exercitation et anim tempor.</li>
                            <li>Lorem sunt deserunt labore non excepteur.</li>
                            <li>Veniam enim quis officia magna ani.</li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="font-semibold ">Send To:</h4>
                        <ul class="list-disc">
                            <li>Do ullamco ex velit anim do .</li>
                            <li>Proident exercitation et anim tempor.</li>
                            <li>Lorem sunt deserunt labore non excepteur.</li>
                            <li>Veniam enim quis officia magna ani.</li>
                        </ul>
                    </div>

                    <div class="flex flex-col ">
                    <label for="" class="font-semibold">Upload Supporting Evidence/Documentation:</label>
                    <div class="border border-gray-400 p-2 mt-2 bg-[#EEEEEE] flex ">
                        <!-- <img src="../../../../assets/arrow.up.upload.svg" alt="" class="mx-3">
                        <input type="file" name="" id=""> -->
                        <p class="italic text-gray-500">No upload(s)</p>
                    </div>
                </div>
                </div>
                
            </section>
        </section>
    </div>
</template>