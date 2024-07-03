<template>
  <div class="mx-3 w-full border border-gray-300 bg-[#F5F5F5]">
    <div class="mx-1 my-1 w-full border-gray-400">
      <div class="mb-4">
        <nav
          class="text-black-300 font-[Source Sans Pro] mt-1 flex w-full flex-row rounded-md  p-2 text-[25px] font-bold"
        >
          <div>
            <h2>Site Information</h2>
          </div>

          <div
            class="font-['Source Sans Pro'] absolute left-[1598px] text-center text-base font-normal text-black"
          >
        <CurrentTime/>
          </div>
        </nav>
      </div>
      <div class="">
        <div class="w-full">
          <div class="mb-4 mt-1 flex w-full flex-row rounded-md border p-2">
            <div class="w-1/2">ID</div>
            <div class="w-1/2">
              {{ props?.workOrder?.id }}
            </div>
          </div>

          <div class="mb-4 mt-1 flex w-full flex-row rounded-md border p-2">
            <div class="w-1/2">Customer's Name:</div>
            <div class="w-1/2">
              {{ props?.workOrder?.customer_name }}
            </div>
          </div>
          <div class="mb-4 mt-1 flex w-full flex-row rounded-md border p-2">
            <div class="w-1/2">Address:</div>
            <div class="w-1/2">
              {{ props?.workOrder?.address }}
            </div>
          </div>
          <div class="mb-4 mt-1 flex w-full flex-row rounded-md border p-2">
            <div class="w-1/2">GPS Coordinates</div>
            <div class="w-1/2">
              Latitude -
              {{ props?.workOrder?.gps_coordinates?.latitude }} Longitude -{{
                props?.workOrder?.gps_coordinates?.longitude
              }}
            </div>
          </div>
          <div class="mb-4 mt-1 flex w-full flex-row rounded-md border p-2">
            <div class="w-1/2">Customer Contact:</div>
            <div class="w-1/2">
              {{ props?.workOrder?.customer_contact }}
            </div>
          </div>
          <div class="mb-4 mt-1 flex w-full flex-row rounded-md border p-2">
            <div class="w-1/2">installer:</div>
            <div class="w-1/2">
              {{ props?.workOrder?.installer }}
            </div>
          </div>
          <div class="mb-4 mt-1 flex w-full flex-row rounded-md border p-2">
            <div class="w-1/2">Proposed Splitter:</div>
            <div class="w-1/2">
              {{ props?.workOrder?.proposed_splitter }}
            </div>
          </div>
          <div class="mb-4 mt-1 flex w-full flex-row rounded-md border p-2">
            <div class="w-1/2">Accuracy:</div>
            <div class="w-1/2">
              {{ props?.workOrder?.accuracy }}
            </div>
          </div>
          <div class="mb-4 mt-1 flex w-full flex-row rounded-md border p-2">
            <div class="w-1/2">Requested Splitters & FATs</div>
            <div class="w-1/2">
              {{ props?.workOrder?.requested_splitters_FATs }}
            </div>
          </div>
          <div class="mb-4 mt-1 flex w-full flex-row rounded-md border p-2">
            <div class="w-1/2">Is Mobilized ?</div>
            <div class="w-1/2">
              {{ props?.workOrder?.is_mobilized }}
            </div>
          </div>
          <div class="mb-4 mt-1 flex w-full flex-row rounded-md border p-2">
            <div class="w-1/2">Is MDU?</div>
            <div class="w-1/2">
              {{ props?.workOrder?.is_mdu }}
            </div>
          </div>
          <div class="mb-4 mt-1 flex w-full flex-row rounded-md border p-2">
            <div class="w-1/2">Number of MDU buildings</div>
            <div class="w-1/2">
              {{ props?.workOrder?.no_of_mdu_buildings }}
            </div>
          </div>
          <div class="mb-4 mt-1 flex w-full flex-row rounded-md border p-2">
            <div class="w-1/2">Product</div>
            <div class="w-1/2">
              {{ props?.workOrder?.product }}
            </div>
          </div>
          <div class="mb-4 mt-1 flex w-full flex-row rounded-md border p-2">
            <div class="w-1/2">Location Type</div>
            <div class="w-1/2">
              {{ props?.workOrder?.location_type }}
            </div>
          </div>
          <div class="mb-4 mt-1 flex w-full flex-row rounded-md border p-2">
            <div class="w-1/2">Nearest Junction Box</div>
            <div class="w-1/2">
              {{ props?.workOrder?.nearest_junction_box }}
            </div>
          </div>
          <div class="mb-4 mt-1 flex w-full flex-row rounded-md border p-2">
            <div class="w-1/2">Accuracy</div>
            <div class="w-1/2">
              {{ props?.workOrder?.accuracy }}
            </div>
          </div>
          <div class="mb-4 mt-1 flex w-full flex-row rounded-md border p-2">
            <div class="w-1/2">Reviewed</div>
            <div class="w-1/2">
              {{ props?.workOrder?.reviewed }}
            </div>
          </div>
          <div class="mb-4 mt-1 flex w-full flex-row rounded-md border p-2">
            <div class="w-1/2">Approved By:</div>
            <div class="w-1/2">
              {{ props?.workOrder?.approved_by }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import workplaceRequestsv2 from '@/services/workplaceRequestsv2'
import CurrentTime from '../CurrentTime.vue';
const route = useRoute()
const props = defineProps(['workOrder'])
// onMounted(() => {
//   getWorkOrder();
// });

// const workOrder = ref({
//   id: "",
//   customer_name: "",
//   address: "",
//   gps_coordinates: {
//     latitude: "",
//     longitude: "",
//   },
//   customer_contact: "",
//   installer: "",
//   proposed_splitter: "",
//   accuracy: "",
//   requested_splitters_FATs: "",
//   is_mobilized: "",
//   is_mdu : "",
//   no_of_mdu_buildings : "",
//   product : "",

//   pickup_point: "",
//   location_type : "",
//   nearest_junction_box : "",
//   accuracy : "",
//   reviewed : "",
//   approved_by : "",
//   new_splitter_and_fats: [
//     {
//       id: null,
//       name: "",
//       type: "",
//       location: "",
//       latitude: "",
//       longitude: ""
//     },
//   ],
// });

// const getWorkOrder = async () => {
//   try {
//     const { status, data } = await workplaceRequestsv2(
//       "get",
//       `operations/sd/tss/work-order/${route.params.id}`
//     );
//     if (status == 200) {
//       props?.workOrder?.value = data?.data?.data;
//     }
//   } catch (e) {
//     alert(e.message);
//   }
// };
</script>
