<template>
  <div class="mx-3 w-full border border-gray-300 bg-[#F5F5F5] p-5">
    <div class="mx-1 my-1 w-full border-gray-400">
      <div class="mb-4">
        <nav
          class="font-[Source Sans Pro] mt-1 w-full rounded-md border p-2 text-[25px] font-bold text-gray-300"
        >
          <h2>Confirmation Request</h2>
        </nav>
      </div>
      <div class="">
        <div class="flex flex-row">
          <div class="mb-4 mt-1 w-1/2 rounded-md border p-2">ID</div>
          <div class="mb-3 w-1/2">
            <input
              :value="confirmation.id"
              type="text"
              id="field3"
              name="field3"
              class="mt-1 w-full rounded-md border p-2"
              readonly
            />
          </div>
        </div>
        <div class="flex flex-row">
          <div class="mb-4 mt-1 w-1/2 rounded-md border p-2">Activity</div>
          <div class="mb-3 w-1/2">
            <input
              :value="confirmation.activity"
              type="text"
              id="field3"
              name="field3"
              class="mt-1 w-full rounded-md border p-2"
              readonly
            />
          </div>
        </div>
        <div class="flex flex-row">
          <div class="mb-4 mt-1 w-1/2 rounded-md border p-2">Requested for</div>
          <div class="mb-3 w-1/2">
            <input
              :value="confirmation.requested_for"
              type="text"
              id="field3"
              name="field3"
              class="mt-1 w-full rounded-md border p-2"
              readonly
            />
          </div>
        </div>
        <div class="flex flex-row">
          <div class="mb-4 mt-1 w-1/2 rounded-md border p-2">Address</div>
          <div class="mb-3 w-1/2">
            <input
              :value="confirmation.address"
              type="text"
              id="field3"
              name="field3"
              class="mt-1 w-full rounded-md border p-2"
              readonly
            />
          </div>
        </div>
        <div class="flex flex-row">
          <div class="mb-4 mt-1 w-1/2 rounded-md border p-2">Status</div>
          <div class="mb-3 w-1/2">
            <input
              :value="confirmation.status"
              type="text"
              id="field3"
              name="field3"
              class="mt-1 w-full rounded-md border p-2"
              readonly
            />
          </div>
        </div>
        <div class="flex flex-row">
          <div class="mb-4 mt-1 w-1/2 rounded-md border p-2">
            Requested Status
          </div>
          <div class="mb-3 w-1/2">
            <input
              :value="confirmation.requested_status"
              type="text"
              id="field3"
              name="field3"
              class="mt-1 w-full rounded-md border p-2"
              readonly
            />
          </div>
        </div>
        <div class="flex flex-row">
          <div class="mb-4 mt-1 w-1/2 rounded-md border p-2">
            Expected Start
          </div>
          <div class="mb-3 w-1/2">
            <input
              :value="confirmation.exp_start"
              type="text"
              id="field3"
              name="field3"
              class="mt-1 w-full rounded-md border p-2"
              readonly
            />
          </div>
        </div>
        <div class="flex flex-row">
          <div class="mb-4 mt-1 w-1/2 rounded-md border p-2">Start Date</div>
          <div class="mb-3 w-1/2">
            <input
              :value="confirmation.start"
              type="text"
              id="field3"
              name="field3"
              class="mt-1 w-full rounded-md border p-2"
              readonly
            />
          </div>
        </div>
        <div class="flex flex-row">
          <div class="mb-4 mt-1 w-1/2 rounded-md border p-2">
            Expected Completion
          </div>
          <div class="mb-3 w-1/2">
            <input
              :value="confirmation.exp_completion"
              type="text"
              id="field3"
              name="field3"
              class="mt-1 w-full rounded-md border p-2"
              readonly
            />
          </div>
        </div>
      </div>
    </div>

    <div
      class="my-1 inline-flex h-auto w-full flex-col gap-5 rounded p-8 shadow"
    >
      <div class="mb-4">
        <label for="comment" class="block text-sm font-medium text-gray-600"
          >Comments</label
        >
        <textarea
          v-model="comment.comment"
          id="comment"
          name="comment"
          rows="3"
          class="mt-1 w-full rounded-md border p-2"
        ></textarea>
      </div>
      <div>
        <button
          @click="addComment"
          type="submit"
          class="rounded-md bg-[#D50036] px-4 py-2 text-white"
        >
          Submit
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import workplaceRequestsv2 from '../../services/workplaceRequestsv2.js'
onMounted(() => {
  getConfirmation()
})
const route = useRoute()
const confirmation = ref({
  id: null,
  requested_for: '',
  status: '',
  requested_status: '',
  phone: ' ',
  exp_start: '',
  start: '',
  exp_completion: '',
  address: '',
  activity: '',
})
const getConfirmation = async () => {
  try {
    const { status, data } = await workplaceRequestsv2(
      'get',
      `general/confirmation-request/${route.params.id}`
    )

    if (status == 200) {
      confirmation.value = data?.data?.data
      console.log(data)
    }
  } catch (e) {
    alert(e.message)
  }
}
const router = useRouter()
const comment = ref({
  id: route.params.id,
  comment: '',
})
const addComment = async () => {
  try {
    const { status, data } = await workplaceRequestsv2(
      'post',
      `general/confirmation-requests/comment`,
      comment.value
    )
    if (status == 200) {
      router.push({ name: 'schedule' })
    }
  } catch (e) {}
}
</script>
