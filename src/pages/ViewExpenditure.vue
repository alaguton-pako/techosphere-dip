<template>
    <app-layout>
      <template v-slot:main-content>
        <main class="w-full bg-[#F5F5F5]">
          <AppHorizontalNavigation />
          <header class="m-14 flex items-center justify-between">
            <div
              class="flex cursor-pointer items-center"
            >
              <img src="../assets/chevron-black.svg" class="mr-1 rotate-90" />
              <span class="text-xl font-semibold">Back</span>
            </div>
            <!-- <div class="flex flex-row-reverse">
              <button class="ml-6 rounded-md bg-primary py-2 px-4 text-white">
                Save AIE
              </button>
              <button
                class="rounded-md border border-primary py-2 px-4 text-primary"
              >
                Cancel
              </button>
            </div> -->
          </header>
          <main class="m-14 bg-white p-12">
            <h1 class="mb-6 text-2xl font-bold">Purchase Order</h1>
            <section class="p-2">
                <div class="mb-4 border-b" v-for="(item, index) in items" :key="index">
      <div class="flex justify-between items-center py-2">
        <div>
        <div class="flex flex-row">
        <label for="name">Item Type:</label>
        <p class="font-semibold ml-2">{{ item.name }}</p>
        </div>
        <div class="flex flex-row">
        <label for="name">Name of Manager:</label>
        <p class="text-sm text-gray-600 ml-2 mt-1">{{ item.lead }}</p>
        </div>
        <div class="flex flex-row">
        <label for="name">Quantity:</label>
        <p class="text-sm text-gray-600 ml-2 mt-1">{{ item.quantity }}</p>
        </div>
        <div class="flex flex-row">
        <label for="name">Date Requested:</label>
        <p class="text-sm text-gray-600 ml-2 mt-1">{{ item.date }}</p>
        </div>
        <div class="flex flex-row">
        <label for="name">Reason:</label>
        <p class="text-sm text-gray-600 ml-2 mt-1">{{ item.reason }}</p>
        </div>
        <div class="flex flex-row">
        <label for="name">File Name:</label>
        <p class="text-sm text-gray-600 ml-2 pt-1">{{ item.file }}</p>
        </div>
        <div class="flex flex-row">
        <label for="name">Expenditure Cost:</label>
        <p class="text-sm text-gray-600 ml-2 mt-1">${{ item.cost }}</p>
        </div>
        <div class="flex flex-row">
        <label for="name">Status:</label>
        <p class="text-sm text-gray-600 ml-2 mt-1">{{ item.status }}</p>
        </div>
        </div>
        <div class="flex flex-row-reverse">
              <button @click="acceptPurchase(index)" class="ml-6 rounded-md bg-[#D50036] py-2 px-4 text-white">
                Accept
              </button>
              <button
              @click="declinePurchase(index)"
                class="rounded-md border border-primary py-2 px-4 text-primary"
              >
                Decline
              </button>
            </div>
      </div>
           </div>
          </section>
         </main>
       </main>
     </template>
 </app-layout>
</template><script setup>
import { ref } from 'vue';

const items = ref([
  { name: "Laptop", lead: "Mr Grey Olumese.",  quantity: "10", date: "07/03/2024", reason: "Technology team members need laptops for adequate efficiency.", file: "Proof of Budget.pdf 18KB", cost: 1200, status: "Approve"},
  { name: "Software License", lead: "Mr Grey Olumese.",  quantity: "10", date: "07/03/2024", reason: "Software hosting License needs renewal.", file: "Proof of Budget.pdf 18KB", cost: 300 , status: "Approve" },
  { name: "Office Chair", lead: "Mr Grey Olumese.", quantity: "10", date: "07/03/2024", reason: "Additional members have no sitting positions because of lack of chairs.", file: "Proof of Budget.pdf 18KB", cost: 150, status: "Reject" },
]);

function acceptPurchase(index) {
  alert(`Purchase accepted for: ${items.value[index].name}`);
}

function declinePurchase(index) {
  alert(`Purchase declined for: ${items.value[index].name}`);
}

</script>
