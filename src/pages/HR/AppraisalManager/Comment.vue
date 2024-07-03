<script setup>
import { ref, onMounted } from 'vue'
import workplaceRequestsv2 from '@/services/workplaceRequestsv2'
import { useRoute } from 'vue-router'
import Swal from 'sweetalert2'

const comments = ref({
  staff_details: {
    fullname: 'Rachel Ochiche',
    role: 'Network Analyst',
    staff: 253,
    status: 'Active',
    start_date: '21st October 2021',
  },
  comments: {
    id: 1,
    user_appraisal_id: 3,
    accomplishments: '',
    issues: '',
    areas_for_improvement: '',
    appraisees_comments: '',
    recommended_action: '',
    created_at: '',
    updated_at: '',
  },
})

const id = ref('')
const accomplishments = ref('')
const issues = ref('')
const areas_for_improvement = ref('')
const appraisees_comments = ref('')
const recommended_action = ref('')
const created_at = ref('')
const updated_at = ref('')

const route = useRoute()

onMounted(() => {
  getComments()
})

const getComments = async () => {
  try {
    const { status, data } = await workplaceRequestsv2(
      'get',
      `appraisals/${route.params.id}/appraisal-comments`
    )
    if (status == 200) {
      comments.value = data?.data?.data
    }
  } catch (e) {
    console.log(e)
  }
}

const CreateAppraisalFeedback = async () => {
  try {
    const { data, status, message } = await workplaceRequestsv2(
      'post',
      `appraisals/feedback/create`,
      {
        user_appraisal_id: route.params.id,
        accomplishments: accomplishments.value,
        issues: issues.value,
        areas_for_improvement: areas_for_improvement.value,
        recommended_action: recommended_action.value,
      }
    )
    if (status == 422) {
      Swal.fire({
        icon: 'info',
        title: 'Info',
        text: data ? data.message : 'Enter Correct details',
      })
    }

    if (status == 200 || status == 201) {
      Swal.fire({
        icon: 'success',
        title: 'Submitted',
        text: 'Comments Added Successfully',
      })
      setTimeout(function () {
        location.reload()
      }, 2000)
    } else {
      Swal.fire({
        icon: 'info',
        title: 'Enter Valid Details',
        text: data ? data.message : 'Invalid Request',
      })
    }
  } catch (error) {
    console.error('Error updating appraisal:', error)
  }
}
</script>

<template>
  <div class="mx-3 w-full border border-gray-300">
    <div class="mx-1 my-1 w-full border-gray-400 p-5">
      <form
        @submit.prevent="CreateAppraisalFeedback"
        class="my-4 flex w-full flex-col"
      >
        <div class="mb-4 border-b-white">
          <label
            for="name"
            class="text-md mx-2 my-2 mb-2 block font-semibold text-gray-600"
          >
            Major Accomplishments During Appraisal Period</label
          >

          <textarea
            v-model="accomplishments"
            id="comment"
            rows="4"
            class="my-2 w-full rounded-md border border-gray-200 p-2 text-sm text-gray-900 focus:outline-none focus:ring-0 dark:bg-white dark:text-black dark:placeholder-gray-400"
            required
          >
          </textarea>
        </div>

        <div class="my-4 mb-4 border-b-white">
          <label
            for="name"
            class="text-md mx-2 my-2 mb-2 block font-semibold text-gray-600"
          >
            Issues</label
          >

          <textarea
            v-model="issues"
            id="comment"
            rows="4"
            class="my-2 w-full rounded-md border border-gray-200 p-2 text-sm text-gray-900 focus:outline-none focus:ring-0 dark:bg-white dark:text-black dark:placeholder-gray-400"
            required
          >
          </textarea>
        </div>
        <div class="mb-4 border-b-white">
          <label
            for="name"
            class="text-md mx-2 my-2 mb-2 block font-semibold text-gray-600"
          >
            Areas for Improvements</label
          >
          <textarea
            v-model="areas_for_improvement"
            id="comment"
            rows="4"
            class="my-2 w-full rounded-md border border-gray-200 p-2 text-sm text-gray-900 focus:outline-none focus:ring-0 dark:bg-white dark:text-black dark:placeholder-gray-400"
            required
          >
          </textarea>
        </div>
        <div class="mb-4 border-b-white">
          <label
            for="name"
            class="text-md mx-2 my-2 mb-2 block font-semibold text-gray-400"
          >
            Appraisees Comments</label
          >

          <textarea
            id="comment"
            rows="4"
            class="my-2 w-full rounded-md border border-gray-200 p-2 text-sm text-gray-900 focus:outline-none focus:ring-0 dark:bg-white dark:text-black dark:placeholder-gray-400"
            readonly
          >
          </textarea>
        </div>
        <div class="mb-4 border-b-white">
          <label
            for="name"
            class="text-md mx-2 my-2 mb-2 block font-semibold text-gray-600"
          >
            Recommended Action</label
          >
          <textarea
            v-model="recommended_action"
            id="comment"
            rows="4"
            class="my-2 w-full rounded-md border border-gray-200 p-2 text-sm text-gray-900 focus:outline-none focus:ring-0 dark:bg-white dark:text-black dark:placeholder-gray-400"
            required
          >
          </textarea>
        </div>
        <div class="my-11 mr-10 flex flex-row-reverse gap-4">
          <button
            type="submit"
            class="h-[51px] w-[121px] shrink-0 rounded-md border border-solid bg-[#D50036] pb-3.5 pl-7 pr-7 pt-3.5 text-white"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
