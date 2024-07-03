<script setup>
import { ref, onMounted } from "vue";
import DynamicHorizontalNavigation from "@/components/DynamicAppHorizontalNavigation.vue";
import workplaceRequestsv2 from "@/services/workplaceRequestsv2";
import Card from "@/components/Card.vue";
import Swal from "sweetalert2";
onMounted(() => {
  getMonitorData();
});

const getMonitorData = async () => {
  try {
    const { status, data } = await workplaceRequestsv2(
      "get",
      "commercial/retail/customer-care/customer-operations/summary?filter=latest&source=dip"
    );
    if (status == 200) {
      const response = data.data.results.data;
      installation.value[0].figure = response.installations.obligations;
      installation.value[0].type = "installation_obligations"
      installation.value[1].figure = response.installations.escalations;
      installation.value[1].type = "installation_escalations"
      installation.value[2].figure = response.installations.liabilities;
      installation.value[2].type = "installation_liabilities"


      fault.value[0].figure = response.faults.obligations;
      fault.value[0].type = "faults_obligations";
      fault.value[1].figure = response.faults.escalations;
      fault.value[1].type = "faults_escalations";
      fault.value[2].figure = response.faults.liabilities;
      fault.value[2].type = "faults_liabilities";

      enquiry.value[0].figure = response.enquires.obligations;
      enquiry.value[0].type = "enquires_obligations";
      enquiry.value[1].figure = response.enquires.escalations;
      enquiry.value[1].type = "enquires_escalations";
      enquiry.value[2].figure = response.enquires.liabilities;
      enquiry.value[2].type = "enquires_liabilities";


      total.value[0].figure = response.installations.total + response.faults.total + response.enquires.total
      total.value[1].figure = response.installations.total
      total.value[2].figure = response.faults.total
      total.value[3].figure = response.enquires.total
    }
  } catch (e) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: e.message,
    });
  }
};

const totalCardsData = () => {
  return [
    {
      figure: 0,
      bgColor: "bg-[#0F151F]",
      textColor: "text-white",
      title: "Total Obligations",
      body: "Total number of Installations, Faults and Enquiries",
    },
    {
      figure: 0,
      bgColor: "bg-white",
      textColor: "text-black",
      border: "border",
      borderColor: " border-gray-800",
      title: "Total Installations",
      body: "Total number of installations ordered",
    },
    {
      figure: 0,
      bgColor: "bg-white",
      textColor: "text-black",
      border: "border",
      borderColor: " border-gray-800",
      title: "Total Faults",
      body: "Total number of faults reported",
    },
    {
      figure: 0,
      bgColor: "bg-white",
      textColor: "text-black",
      border: "border",
      borderColor: " border-gray-800",
      title: "Total Enquires",
      body: "Total number of enquiries made",
    },
  ]
};

const cardStructure = () => {
  return [
    {
      figure: 0,
      bgColor: "bg-[#009A49]",
      textColor: "text-white",
      title: "Total Obligations",
      body: "Total number of installations ordered",
      type: 'installation'
    },
    {
      figure: 0,
      bgColor: "bg-[#F39D1C]",
      textColor: "text-white",
      title: "Total Escalations",
      body: "Total number of faults reported",
      type: 'fault'

    },
    {
      figure: 0,
      bgColor: "bg-[#E50303]",
      textColor: "text-white",
      title: "Total Liabilities/Sanctions",
      body: "Total number of enquiries made",
      type: 'enquiry'

    },
  ];
};
const installation = ref(cardStructure());
const fault = ref(cardStructure());
const enquiry = ref(cardStructure());
const total = ref(totalCardsData());
</script>

<template>
  <section class="">
    <DynamicHorizontalNavigation />
    <section class="px-10">
      <nav class="flex items-center border bg-white border-gray-200 p-3 my-8 mt-6 font-semibold text-gray-600 capitalize">
        <span class="mx-6 cursor-pointer text-center text-primary">Company Monitor
        </span>
      </nav>

      <section class="">
        <div class="my-3 grid grid-cols-4 space-x-3">
          <Card v-for="(card, index) in total" :key="index" :figure="card.figure" :title="card.title"
            :bgColor="card.bgColor" :textColor="card.textColor" :body="card.body" heigh="h-48" width="w-80"
            :border="card.border" :borderColor="card.borderColor" />
        </div>
      </section>

      <div class="flex justify-center items-center my-8">
        <div class="border w-fit bg-gray-100 border-gray-500 rounded p-1 flex">
          <img class="mr-2 pr-1" src="@/assets/calendar-icon.svg" />
          <img class="pr-2" src="@/assets/left-arrow.svg" alt="" />

          <h2 class="flex flex-row text-base text-black">
            July 04 - July 14
            <img class="pl-2" src="@/assets/right-arrow.svg" alt="" />
          </h2>
        </div>
      </div>
      <section class="">
        <div class="my-3 grid grid-cols-4 space-x-3">
          <div class="flex items-center font-semibold text-2xl">
            <h2>Installations</h2>
          </div>
          <router-link v-for="(card, index) in installation" :key="index"
            :to="{ name: 'monitorView', params: { id: card.type } }">
            <Card :figure="card.figure" :title="card.title" :bgColor="card.bgColor" :textColor="card.textColor"
              :body="card.body" heigh="h-48" width="w-80">
            </Card>
          </router-link>
        </div>

        <div class="my-3 grid grid-cols-4 space-x-3">
          <div class="flex items-center font-semibold text-2xl">
            <h2>Faults</h2> 
          </div>
          <router-link v-for="(card, index) in fault" :key="index"
            :to="{ name: 'monitorView', params: { id: card.type } }">
            <Card :figure="card.figure" :title="card.title" :bgColor="card.bgColor" :textColor="card.textColor"
              :body="card.body" heigh="h-48" width="w-80">
            </Card>
          </router-link>
        </div>
        <div class="my-3 grid grid-cols-4 space-x-3">
          <div class="flex items-center font-semibold text-2xl">
            <h2>Enquires</h2>
          </div>

          <router-link v-for="(card, index) in enquiry" :key="index"
            :to="{ name: 'monitorView', params: { id: card.type } }">
            <Card :figure="card.figure" :title="card.title" :bgColor="card.bgColor" :textColor="card.textColor"
              :body="card.body" heigh="h-48" width="w-80">
            </Card>
          </router-link>
        </div>
      </section>
    </section>
  </section>
</template>