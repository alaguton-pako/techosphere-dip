<script setup>


const props = defineProps(['installationHistory'])


</script>

<template lang="">
  <div class="border border-secondary">
    <div
      
      class="flex items-end justify-between bg-white px-12 py-6"
    >
      <div class="w-1/2"> 

        <div class="mb-6 flex items-center gap-6">
          <div class="font-semibold">Installation Status:</div>
          <div>{{props?.installationHistory?.installation_status}}</div>
        </div>

        <div class="mb-6 mt-12 flex items-center gap-6">
          <div class="">Survey:</div>
          <p v-if="props.installationHistory?.surveys?.length >0 && props.installationHistory?.surveys[0].installations.survey.progress">{{ props.installationHistory?.surveys[0].installations.survey.progress }}</p>
          <p v-else>N/A</p>
        </div>

        <div class="mb-6 flex items-center gap-6">
          <div class="">Outdoor Installation:</div>
          <p v-if="props.installationHistory?.surveys?.length >0 && props.installationHistory?.surveys[0].installations.outdoor_installation.progress">{{ props.installationHistory?.surveys[0].installations.outdoor_installation.progress }}</p>
          <p v-else>N/A</p>
        </div>

        <div class="mb-6 flex items-center gap-6">
          <div class="">Indoor Installation:</div>
          <p v-if="props.installationHistory?.surveys?.length >0 && props.installationHistory?.surveys[0].installations.indoor_installation.progress">{{ props.installationHistory?.surveys[0].installations.indoor_installation.progress }}</p>
          <p v-else>N/A</p>
        </div>

        <div class="mb-6 flex items-center gap-6">
          <div class="">Testing and Activations:</div>
          <p v-if="props.installationHistory?.surveys?.length >0 && props.installationHistory?.surveys[0].installations.testing_and_activation.progress">{{ props.installationHistory?.surveys[0].installations.testing_and_activation.progress }}</p>
          <p v-else>N/A</p>
        </div>


        <div class="flex items-center gap-6">
          <div class="font-semibold">Scheduled Date:</div>
          <div>{{ props?.installationHistory?.expected_start_date }}</div>
        </div>
      </div>
      <select
        class="rounded border border-secondary p-2 text-sm focus:outline-none">
        <option value="" selected disabled>Update Status</option>
        <option value="pending">Pending</option>
        <option value="completed">Completed</option>
      </select>
    </div>

  
  </div>
</template>