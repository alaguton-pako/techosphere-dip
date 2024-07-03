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
                    <p class="underline text-white">ROOT CAUSE ANALYSIS ON SPLITTERS THAT FAILL FRQUENTLY</p>
                </div>
                <div class="bg-white border border-gray-400 p-7 space-y-3">
                    <div>
                        <h4 class="font-semibold ">Problem Statement/Observation:</h4>
                        <p>Do ullamco ex velit anim do proident exercitation et anim tempor. Lorem sunt deserunt labore non excepteur veniam enim quis officia magna ani. Do ullamco ex velit anim do proident exercitation et anim tempor. Lorem sunt deserunt labore
                            non excepteur veniam enim quis officia magna ani.</p>
                    </div>
                    <div>
                        <h4 class="font-semibold ">Report Sent To:</h4>
                        <ul class="list-disc">
                            <li>Rachael Ubong</li>
                            <li>Tolba Hafiz</li>
                            <li>HR</li>
                            <li>CEO</li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="font-semibold ">Supporting Evidence/Documentation:</h4>
                        <div>
                            <table class="w-full table-auto text-sm  text-center">
                                <tbody class="">
                                    <tr class="bg-gray-100 ">
                                        <td class=" p-3">
                                            Splice Plan:
                                        </td>
                                        <td class=" p-3  space-x-2 flex flex-row justify-center items-center">
                                            <img src="../../../../assets/arrow.up.upload.svg" alt="">
                                            <p> Asokoro Splitter Resolution Plan.pdf</p>
                                        </td>
                                        <td class=" p-3">
                                            <p class="border border-gray-400 w-fit p-2 px-6">Preview</p>
                                        </td>
                                    </tr>
                                    <tr class="bg-gray-100 ">
                                        <td class=" p-3">
                                            Fault report:
                                        </td>
                                        <td class=" p-3  space-x-2 flex flex-row justify-center items-center">
                                            <img src="../../../../assets/arrow.up.upload.svg" alt="">
                                            <p> Asokoro Splitter Resolution Plan.pdf</p>
                                        </td>
                                        <td class=" p-3">
                                            <p class="border border-gray-400 w-fit p-2 px-6">Preview</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="bg-black p-2 px-7">
                    <p class="underline text-white">FEEDBACK</p>
                </div>
                <div class="bg-white border border-gray-400 p-7 space-y-4">
                    <div class="flex justify-end">
                        <button class="text-white bg-red-600 px-6 py-2 rounded-md">Respond</button>
                    </div>
                    <section class="bg-white border border-gray-400 my-4 p-5 space-y-5">
    
                        <div class="flex flex-col">
                            <label for="">Problem Statement:</label>
                            <textarea name="" id="" cols="30" rows="5" class="border border-gray-400"></textarea>
                        </div>
    
                        <div class="flex flex-col">
                            <label for="">Recommendation:</label>
                            <textarea name="" id="" cols="30" rows="5" class="border border-gray-400"></textarea>
                        </div>
    
                        <div class="flex space-x-2">
                            <img src="../../../../assets/no-upload.svg" alt="">
                            <p class="italic">No upload(s)</p>
                        </div>
                        <div class="flex flex-col ">
                            <label for="">Upload Supporting Evidence/Documentation:</label>
                            <div class="border border-gray-400 p-2 mt-2 bg-[#EEEEEE] flex ">
                                <img src="../../../../assets/arrow.up.upload.svg" alt="" class="mx-3">
                                <input type="file" name="" id="">
                            </div>
                        </div>
                    </section>
    
                </div>
                <div class="my-4">
                    <h4 class="font-semibold text-2xl">Corrective Action Plan</h4>
                    <table class="w-full table-auto border-secondary border text-sm  text-center">
                        <thead class="bg-gray-200">
                            <tr class="border-secondary uppercase">
                                <th class="border-secondary  border-r p-3 ">S/N</th>
                                <th class="border-r border-secondary p-3">
                                    action plan
                                </th>
                                <th class="border-secondary border-r p-3 ">
                                    responsible(s)
                                </th>
                                <th class="border-r border-secondary p-3 ">
                                    implementation date
                                </th>
                                <th class="border-secondary border-r p-3 ">
                                    what has been done
                                </th>
    
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="border-secondary border-r p-4">1.</td>
                                <td class="border-r border-secondary p-3">
                                    <input type="text" name="" id="" class="p-3 border border-gray-300" placeholder="Write here">
    
                                </td>
                                <td class="border-secondary border-r p-3">
                                    <div class="flex flex-col">
                                      
                                        <select name="" id="" class="border border-gray-300 p-3">
                                <option value="">Aisha Umar</option>
                                <option value="">Rachael Ubong</option>
                                <option value="">Tolba Hafiz</option>
                            </select>
                                    </div>
                                </td>
                                <td class="border-r border-secondary p-3">
                                    <input type="date" name="" id="" class="p-3 border border-gray-300" >
                                </td>
    
                                <td class="border-secondary  p-3 ">
                                    <input type="text" name="" id="" class="p-3 border border-gray-300" placeholder="Write here">
                                </td>
                            </tr>
                        </tbody>
                       
                    </table>
                    <div class="flex justify-end my-3">
                            <p>+  Add More</p>
                        </div>
                </div>
            </section>
        </section>
    </div>
</template>