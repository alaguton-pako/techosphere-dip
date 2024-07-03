<script setup>
import { onMounted, ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import workplaceRequestsv2 from '@/services/workplaceRequestsv2'
import Swal from 'sweetalert2'
const props = defineProps(['id'])
const route = useRoute()
const id = ref(null)
const comments = ref(null)

onMounted(() => {
  getComments()
})
const appraisees_comment = ref(null)

const getAppraiseesComments = computed(() => {
  if (
    comments.value &&
    comments.value.comments &&
    comments.value.comments.appraisees_comments
  ) {
    return comments.value.comments.appraisees_comments
  }
  return ''
})

const getComments = async () => {
  try {
    const { status, data } = await workplaceRequestsv2(
      'get',
      `appraisals/${props.id}/appraisal-comments`
    )
    if (status == 200) {
      comments.value = data?.data?.data
      id.value = data.data.data.comments.id
    }
  } catch (e) {
    console.log(e)
  }
}

// const updateAppraisalComment = async () => {
//   try {
//     const { data, status, message } = await workplaceRequestsv2(
//       'post',
//       `appraisals/feedback/update`,
//       {
//         id: id.value,
//         // appraisees_comments: comments.value.comments.appraisees_comments,
//         appraisees_comments: appraisees_comment.value,
//         // appraisees_comments: getAppraiseesComments,
//       }
//     )
//     if (status == 422) {
//       Swal.fire({
//         icon: 'info',
//         title: 'Info',
//         text: data ? data.message : 'Enter Correct details',
//       })
//     }

//     if (status == 200 || status == 201) {
//       Swal.fire({
//         icon: 'success',
//         title: 'Submitted',
//         text: 'Successful',
//       })
//       // setTimeout(function () {
//       //   location.reload()
//       // }, 2000)
//     } else {
//       Swal.fire({
//         icon: 'info',
//         title: 'Enter Valid Details',
//         text: data ? data.message : 'Invalid Request',
//       })
//     }
//   } catch (error) {
//     console.error('Error updating appraisal:', error)
//   }
// }
</script>

<template>
  <div class="mx-3 w-full border border-gray-300">
    <div class="mx-1 my-1 w-full border-gray-400 p-5">
      <div class="my-4 flex w-full flex-col">
        <div class="mb-4 border-b-white">
          <label
            for="name"
            class="text-md text-black-800 mx-2 my-2 mb-2 block font-semibold"
          >
            Major Accomplishments During Appraisal Period</label
          >

          {{ comments?.accomplishments }}
        </div>
        <div class="my-4 mb-4 border-b-white">
          <label
            for="name"
            class="text-md text-black-800 mx-2 my-2 mb-2 block font-semibold"
          >
            Issues</label
          >

          {{ comments?.issues }}
        </div>
        <div class="mb-4 border-b-white">
          <label
            for="name"
            class="text-md text-black-800 mx-2 my-2 mb-2 block font-semibold"
          >
            Areas for Improvements</label
          >

          {{ comments?.areas_for_improvement }}
        </div>
        <div class="mb-4 border-b-white">
          <label
            for="name"
            class="text-md text-black-800 mx-2 my-2 mb-2 block font-semibold"
          >
            Appraisees Comments</label
          >
          {{ comments?.appraisees_comments }}
        </div>
        <div class="mb-4 border-b-white">
          <label
            for="name"
            class="text-md text-black-800 mx-2 my-2 mb-2 block font-semibold"
          >
            Recommended Action</label
          >
          {{ comments?.recommended_action }}
        </div>
      </div>

      <!-- <div class="my-11 mr-10 flex flex-row-reverse gap-4">
        <button
          @click="updateAppraisalComment"
          class="h-[51px] w-[121px] shrink-0 rounded-md border border-solid bg-[#D50036] pb-3.5 pl-7 pr-7 pt-3.5 text-white"
        >
          Submit
        </button>
      </div> -->
    </div>
  </div>
</template>

<!-- <script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import workplaceRequestsv2 from '../../../../services/workplaceRequestsv2'
import Swal from 'sweetalert2'

const route = useRoute()
const props = defineProps(['id'])
const comments = ref({
  accomplishments: '',
  issues: '',
  areas_for_improvement: '',
  appraisees_comments: '',
  recommended_action: '',
})
const loading = ref(false)
onMounted(() => {
  getComments()
})
const getComments = async () => {
  try {
    loading.value = true
    const { status, data } = await workplaceRequestsv2(
      'get',
      `appraisals/${props.id}/appraisal-comments`
    )
    if (status == 200) {
      comments.value = data.data.data.comments
      console.log(comments)
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: data.message,
      })
    }
  } catch (e) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: e.message,
    })
  } finally {
    loading.value = false
  }
}
</script> -->
