<script setup>
import AppLayout from '../layouts/AppLayout.vue'
import HorizontalNavigation from '../components/AppHorizontalNavigation.vue'
import { onMounted, ref } from 'vue';
import ccsRequests from "@/services/ccsRequests";
import Swal from "sweetalert2";


import axios from 'axios';


const loading = ref(false)
const description = ref("")
const system_service_id = ref("")
const email = ref("")
const attachment = ref("")
const sysemServices = ref(null)

onMounted(async() => {
  getSystemServices()
})
const getSystemServices = async () => {
    const { status, data } = await ccsRequests(
      "get",
      "support/systems-services"    
    );

    if (status == 200) {
      sysemServices.value = data.data
    }else{
      
    }
  
}
const uploadFile = (e) => {
  attachment.value = e.target.files[0];
  if (!attachment) {
    // Handle the case where no file is selected
    console.error("No file selected.");
    return;
  }
}


const submitForm = async () =>{
  loading.value = true

  const formData =  new FormData()

  formData.append("description", description.value)
  formData.append("system_service_id",system_service_id.value)
  formData.append("email", email.value)
  formData.append("attachment", attachment.value)

  const { status, data } = await ccsRequests(
      "post",
      "support/create-ticket",
      formData
    );

   

    if (status == 200) {
      loading.value = false
      description.value = ""
      system_service_id.value = ""
      email.value = ""
      attachment.value = ""
      Swal.fire({
        icon: "success",
        title: "success",
        text: "Processed Successfully",
      });
    }else{
      loading.value = false
      Swal.fire({
      icon: "error",
      title: "status",
      text: 'Something went wrong',
    })
  }
}
</script>

<template>

<app-layout>
    <template v-slot:main-content>
      <main class="w-full bg-[#F5F5F5] pl-[260px]">
        <AppHorizontalNavigation />
        <header class="m-14 flex items-center justify-between">
          <!-- <div
            class="flex cursor-pointer items-center"
            @click="$router.push({ name: 'requests' })"
          >
            <img src="../assets/chevron-black.svg" class="mr-1 rotate-90" />
            <span class="text-xl font-semibold">Back</span>
          </div> -->
        </header>

        <main class="m-14 bg-white p-12">
          <h1 class="mb-6 text-2xl font-bold">Log Complaint</h1>

          <form @submit.prevent="submitForm" class="mt-24">
            <!-- Description Input -->
            <div class="mb-6">
              <label for="description" class="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                v-model="description"
                id="description"
                name="description"
                rows="3"
                class="mt-1 p-2 border border-gray-300 rounded-md w-full"
                placeholder="Type your message"
                required
              ></textarea>
            </div>

            <!-- Attachment Input -->
            <div class="mb-6">
              <label for="attachment" class="block text-sm font-medium text-gray-700">
                Attachment
              </label>
              <input
                @change="uploadFile"
                type="file"
                id="attachment"
                name="attachment"
                class="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>

            <!-- System Service Select -->
            <div class="mb-6">
              <label for="systemService" class="block text-sm font-medium text-gray-700">
                System Service
              </label>
              <!-- Replace the options with your actual system services -->
              <select
                v-model="system_service_id"
                id="systemService"
                name="systemService"
                class="mt-1 p-2 border border-gray-300 rounded-md w-full"
                required
              >
              <option value="">Select System</option>
                <option v-for="system in sysemServices" :key="system.id" :value="system.id">{{system.title}}</option>
                <!-- Add more options as needed -->
             
              </select>
            </div>

            <!-- Email Input -->
            <div class="mb-6">
              <label for="email" class="block text-sm font-medium text-gray-700">
                Your Email
              </label>
              <input
                v-model="email"
                type="email"
                id="email"
                name="email"
                class="mt-1 p-2 border border-gray-300 rounded-md w-full"
                placeholder="user@example.com"
                required
              />
            </div>

            <!-- Submit Button -->
            <div class="flex items-center">
              <button
                type="submit"
                class="bg-primary-black text-white py-2 px-4 rounded-md"
              >
              <span v-if="loading" class="loader"></span>
              <span v-else>Submit</span> 
              </button>
            </div>
          </form>
        <!-- </section> -->
      </main>
      </main>
    </template>
  </app-layout>
</template>

<style>
.loader {
    width: 18px;
    height: 18px;
    margin-top: 10%;
    border: 5px solid #FFF;
    border-bottom-color: #FF3D00;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
    }

    @keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
    } 
  </style>