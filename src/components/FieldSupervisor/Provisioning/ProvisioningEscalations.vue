<template>
  <app-layout>
    <template v-slot:main-content>
      <main class="w-full bg-[#F5F5F5] pl-[260px]">
        <AppHorizontalNavigation />
        <ChevronBack @click="navigateBack" />
        <section class="p-10">
          <section class="mt-5 pt-2">
            <FaultButton :activeTab="activeTab" @switchTab="switchTab" />
          </section>
          <table
            v-if="activeTab == 1"
            class="mt-6 w-full table-auto border border-secondary text-sm"
          >
            <thead class="bg-black text-gray-100">
              <tr class="border border-secondary capitalize">
                <th class="border border-secondary p-3">Installer</th>
                <th class="border border-secondary p-3">Customer Name</th>
                <th class="border border-secondary p-3">Address</th>
                <th class="border border-secondary p-3">Requested On</th>
                <th class="border border-secondary p-3">Installation Status</th>
                <th class="border border-secondary p-3">Duration</th>
                <th class="border border-secondary p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(installation, index) in installations"
                :key="index"
                class="border border-secondary"
              >
                <td class="border border-secondary p-3">{{ installation.installer }}</td>
                <td class="border border-secondary p-3 text-center">
                  {{ installation.customerName }}
                </td>
                <td class="border border-secondary p-3 text-center">
                  {{ installation.address }}
                </td>
                <td class="border border-secondary p-3 text-center">
                  {{ installation.requestedOn }}
                </td>
                <td class="border border-secondary p-3 text-center">
                  {{ installation.installationStatus }}
                </td>
                <td class="border border-secondary p-3 text-center">
                  {{ installation.duration }}
                </td>
                <td
                  class="cursor-pointer border-secondary p-3 underline text-primary text-center"
                >
                  <router-link
                    :to="{
                      name: 'splitter',
                    }"
                  >
                    View
                  </router-link>
                </td>
              </tr>
            </tbody>
          </table>
          <table
            v-if="activeTab == 2"
            class="mt-6 w-full table-auto border border-secondary text-sm"
          >
            <thead class="bg-black text-gray-100">
              <tr class="border border-secondary capitalize">
                <th class="border border-secondary p-3">Installer</th>
                <th class="border border-secondary p-3">Customer Name</th>
                <th class="border border-secondary p-3">Address</th>
                <th class="border border-secondary p-3">Requested On</th>
                <th class="border border-secondary p-3">Installation Status</th>
                <th class="border border-secondary p-3">Duration</th>
                <th class="border border-secondary p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(provision, index) in provisioning"
                :key="index"
                class="border border-secondary"
              >
                <td class="border border-secondary p-3">{{ provision.installer }}</td>
                <td class="border border-secondary p-3 text-center">
                  {{ provision.customerName }}
                </td>
                <td class="border border-secondary p-3 text-center">
                  {{ provision.address }}
                </td>
                <td class="border border-secondary p-3 text-center">
                  {{ provision.requestedOn }}
                </td>
                <td class="border border-secondary p-3 text-center">
                  {{ provision.installationStatus }}
                </td>
                <td class="border border-secondary p-3 text-center">
                  {{ provision.duration }}
                </td>
                <td
                  class="cursor-pointer border-secondary p-3 underline text-primary text-center"
                >
                  <router-link
                    :to="{
                      name: 'splitter',
                    }"
                  >
                    View
                  </router-link>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </template>
  </app-layout>
</template>
<script setup>
import AppLayout from "../../../layouts/AppLayout.vue";
import ChevronBack from "../../../components/Field_Operations/ChevronBack.vue";
import FaultButton from "../FaultButton.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

function navigateBack() {
  router.back();
}

const installations = ref([
  {
    installer: "Ali Adams",
    customerName: "John Dauda",
    address: "134 Main St",
    requestedOn: "2024-03-20",
    installationStatus: "Active Installation",
    duration: "2 days",
    action: "",
  },
]);
const provisioning = ref([
  {
    installer: "Ali Adams",
    customerName: "John Dauda",
    address: "134 Main St",
    requestedOn: "2024-03-20",
    installationStatus: "Survey Requested",
    duration: "2 days",
    action: "",
  },
]);

const switchTab = (value) => {
  activeTab.value = value;
};
const activeTab = ref(1);
</script>
