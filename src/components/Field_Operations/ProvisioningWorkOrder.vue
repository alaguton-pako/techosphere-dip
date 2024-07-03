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
            Oct 30, 2023 11:35 AM
          </div>
        </nav>
      </div>
    <div class="">
      <div class="w-full">
        <div class="mb-4 mt-1 flex w-full flex-row rounded-md border p-2">
          <div class="w-1/2">ID:</div>
          <div class="w-1/2">
            {{ props.workOrder.ID }}
          </div>
        </div>

        <div class="mb-4 mt-1 flex w-full flex-row rounded-md border p-2">
          <div class="w-1/2">Customer's Name:</div>
          <div class="w-1/2">
            {{ props.workOrder.customer_name }}
          </div>
        </div>
        <div class="mb-4 mt-1 flex w-full flex-row rounded-md border p-2">
          <div class="w-1/2">Date:</div>
          <div class="w-1/2">
            {{ props.workOrder.date }}
          </div>
        </div>
        <div class="mb-4 mt-1 flex w-full flex-row rounded-md border p-2">
          <div class="w-1/2">Network Segment</div>
          <div class="w-1/2">
            {{ props.workOrder.network_segment }}
          </div>
        </div>
        <div class="mb-4 mt-1 flex w-full flex-row rounded-md border p-2">
          <div class="w-1/2">Affected Node:</div>
          <div class="w-1/2">
            {{ props.workOrder.affected_nodes }}
          </div>
        </div>
        <div class="mb-4 mt-1 flex w-full flex-row rounded-md border p-2">
          <div class="w-1/2">Class of Fault:</div>
          <div class="w-1/2">
            {{ props.workOrder.class_of_fault }}
          </div>
        </div>
        <div class="mb-4 mt-1 flex w-full flex-row rounded-md border p-2">
          <div class="w-1/2">Type of Fault:</div>
          <div class="w-1/2">
            {{ props.workOrder.type_of_fault }}
          </div>
        </div>
        <div class="mb-4 mt-1 flex w-full flex-row rounded-md border p-2">
          <div class="w-1/2">DNI Image:</div>
          <div class="w-1/2">
            <img :src="props.workOrder.dni_image" alt="DNI Image">
          </div>
        </div>

        <div class="mb-4 mt-1 flex w-full flex-row rounded-md border p-2">
          <div class="w-1/2">Comment:</div>
          <div class="w-1/2">
            {{ props.workOrder.comment }}
          </div>
        </div>
        <div class="mb-4 mt-1 flex w-full flex-row rounded-md border p-2">
          <div class="w-1/2">Splitter</div>
          <div class="w-1/2">
            {{ props.workOrder.splitter }}
          </div>
        </div>
        <div class="mb-4 mt-1 flex w-full flex-row rounded-md border p-2">
          <div class="w-1/2">Splitter Port:</div>
          <div class="w-1/2">
            {{ props.workOrder.splitter_port }}
          </div>
        </div>
        <div class="mb-4 mt-1 flex w-full flex-row rounded-md border p-2">
          <div class="w-1/2">OLT</div>
          <div class="w-1/2">
            {{ props.workOrder.olt }}
          </div>
        </div>
        <div class="mb-4 mt-1 flex w-full flex-row rounded-md border p-2">
          <div class="w-1/2">OLT Port</div>
          <div class="w-1/2">
            {{ props.workOrder.olt_port }}
          </div>
        </div>
        <div class="mb-4 mt-1 flex w-full flex-row rounded-md border p-2">
          <div class="w-1/2">Latitude:</div>
          <div class="w-1/2">
            {{ props.workOrder.Latitude }}
          </div>
        </div>
        <div class="mb-4 mt-1 flex w-full flex-row rounded-md border p-2">
          <div class="w-1/2">Longitude:</div>
          <div class="w-1/2">
            {{ props.workOrder.Longitude }}
          </div>
        </div>
        <div class="mb-4 mt-1 flex w-full flex-row rounded-md border p-2">
          <div class="w-1/2">Action Required:</div>
          <div class="w-1/2">
            {{ props.workOrder.actions_required }}
          </div>
        </div>
        <div class="mb-4 mt-1 flex w-full flex-row rounded-md border p-2">
          <div class="w-1/2">Distance Affected to Meters:</div>
          <div class="w-1/2">
            {{ props.workOrder.distance_affected }}
          </div>
        </div>
        <div class="mb-4 mt-1 flex w-full flex-row rounded-md border p-2">
          <div class="w-1/2">Number of Core to Splice:</div>
          <div class="w-1/2">
            {{ props.workOrder.no_of_core_to_splice }}
          </div>
        </div>
        <div class="mb-4 mt-1 flex w-full flex-row rounded-md border p-2">
          <div class="w-1/2">Estimated Time of Resolution:</div>
          <div class="w-1/2">
            {{ props.workOrder.etr }}
          </div>
        </div>
        <div class="mb-4 mt-1 flex w-full flex-row rounded-md border p-2">
          <div class="w-1/2">Produced by:</div>
          <div class="w-1/2">
            {{ props.workOrder.prepared_by }}
          </div>
        </div>
        <div class="mb-4 mt-1 flex w-full flex-row rounded-md border p-2">
          <div class="w-1/2">Approved to:</div>
          <div class="w-1/2">
            {{ props.workOrder.approved_by }}
          </div>
        </div>
        <div
          class="font-['Source Sans Pro'] mb-4 mt-1 w-full gap-3 rounded-md border p-2 font-normal"
        >
          <div class="w-1/2">Assigned To:</div>
          <div class="w-1/2">
            {{ props.workOrder.assigned_to }}
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import workplaceRequestsv2 from '../../services/workplaceRequestsv2'

const props = defineProps(['workOrder'])
const workOrder = ref()
const route = useRoute()
const getWorkOrder = async () => {
  try {
    const { status, data } = await workplaceRequestsv2('get', ``)
  } catch (e) {}
}
</script>
