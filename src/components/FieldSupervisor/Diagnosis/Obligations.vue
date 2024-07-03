<template>
  <app-layout>
    <template v-slot:main-content>
      <main class="w-full pl-[260px]">
        <AppHorizontalNavigation />
        <section class="p-10">
          <ChevronBack @click="navigateBack" />
          <table class="mt-8 w-full table-auto border border-secondary text-sm">
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
                v-for="(diagnosis, index) in installations"
                :key="index"
                class="border border-secondary"
              >
                <td class="border border-secondary p-3">{{ diagnosis.installer }}</td>
                <td class="border border-secondary p-3 text-center">
                  {{ diagnosis.customerName }}
                </td>
                <td class="border border-secondary p-3 text-center">
                  {{ diagnosis.address }}
                </td>
                <td class="border border-secondary p-3 text-center">
                  {{ diagnosis.requestedOn }}
                </td>
                <td class="border border-secondary p-3 text-center">
                  {{ diagnosis.installationStatus }}
                </td>
                <td class="border border-secondary p-3 text-center">
                  {{ diagnosis.duration }}
                </td>
                <td class="cursor-pointer border-secondary p-3 underline text-primary">
                  <router-link :to="{ name: 'splitter' }"> View </router-link>
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
import ChevronBack from "../../Field_Operations/ChevronBack.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

function navigateBack() {
  router.back();
}

const installations = ref([
  {
    installer: "Installer A",
    customerName: "John Doe",
    address: "1234 Main St",
    requestedOn: "2024-03-20",
    installationStatus: "Pending",
    duration: "2 days",
    action: "",
  },
]);
</script>
