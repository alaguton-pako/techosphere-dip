<script setup>
import { ref, onMounted } from 'vue'
// import workplaceRequestsv2 from '@/services/workplaceRequestsv2'
import AppHorizontalNavigation from '@/components/AppHorizontalNavigation.vue'
import Overview from '../MyProfile/Overview.vue'
import Payslips from '../MyProfile/Payslips.vue'
import Appraisal from '../MyProfile/Appraisal.vue'
// onMounted(() => {
//   getUserProfile()
// })
const activeTab = ref(1)
const navItems = [
  { id: 1, label: 'Overview' },
  { id: 2, label: 'Performance & Reward' },
  { id: 3, label: 'Payslips' },
]
const switchGenTab = (value) => {
  activeTab.value = value
}

const uploadAvatar = async () => {
  try {
    document.getElementById('uploadImg').click(true)
  } catch (e) {}
}

// const filesChange = async (value) => {
//   try {
//     const formData = new FormData()
//     formData.append('image', value[0])
//     // formData.append("meeting_id", route.params.id);
//     const { status, data } = await workplaceRequestsv2(
//       'post',
//       `user/upload-avatar`,
//       formData
//     )
//     if (status == 200 || status == 201) {
//       Swal.fire({
//         icon: 'success',
//         title: 'File uploaded',
//         showConfirmButton: false,
//         timer: 1500,
//       })
//       getUserProfile()
//       // alert(data.message);
//     }
//   } catch (e) {
//     Swal.fire({
//       icon: 'error',
//       title: 'Oops...',
//       text: e.message,
//     })
//   }
// }

const user = ref({
  id: 8,
  firstname: '',
  other_names: '',
  lastname: null,
  dob: '',
  email: '',
  phone: '',
  address: '',
  password: '********',
  department: '',
  unit: '',
  role: '',
  supervisor: '',
  start_date: '',
  contract_tenure: '',
  possible_end_date: '',
  documentation: ['', ''],
})
const logs = ref([
  {
    id: null,
    type: null,
    created_at: null,
  },
])
// const getUserProfile = async () => {
//   try {
//     const { status, data } = await workplaceRequestsv2('get', 'user/details')
//     if (status === 200) {
//       user.value = data?.data?.results?.data?.user
//       logs.value = data?.data?.results?.data?.logs
//       console.log(user.value)
//     }
//   } catch (e) {}
// }
</script>

<template>
  <app-layout>
    <template v-slot:main-content>
      <main class="w-full pl-[260px]">
        <AppHorizontalNavigation />
        <div class="m-3 flex">
          <aside class="w-[320px] text-sm text-gray-700">
            <div class="rounded-md bg-white">
              <div class="mb-5 p-5" @click="uploadAvatar">
                <!-- <h3 class="font-semibold text-xl">Avatar</h3> -->
                <input
                  style="display: none"
                  name="start"
                  type="file"
                  id="uploadImg"
                  @change="
                    filesChange($event.target.files)(
                      (fileCount = $event.target.files.length)
                    )
                  "
                  class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
                  placeholder="Select date start"
                />
                <div
                  class="ml-10 flex h-10 w-10 place-items-center justify-center rounded-full border-2 border-gray-400"
                >
                  <img :src="user.avatar" alt="" />
                </div>
                <span class="font-semibold text-primary">Change</span>
                <span class="mx-4 text-xs">File types: .png, .jpg, .jpeg</span>
              </div>
              <div class="space-y-3 p-5">
                <p class="text-lg font-bold">Personal Details</p>
                <div class="space-x-3">
                  <span class="font-semibold">First Name:</span>
                  <span>{{ user.firstname }}</span>
                </div>
                <div class="space-x-3">
                  <span class="font-semibold">Last Name:</span>
                  <span>{{ user.lastname }}</span>
                </div>
                <div class="space-x-3">
                  <span class="font-semibold">Other Names:</span>
                  <span>{{ user.other_names }}</span>
                </div>
                <div class="space-x-3">
                  <span class="font-semibold">Date of Birth:</span>
                  <span>{{ user.dob }}</span>
                </div>
                <div class="space-x-3">
                  <span class="font-semibold">E-mail:</span>
                  <span>{{ user.email }}</span>
                </div>
                <div class="space-x-3">
                  <span class="font-semibold">Phone Number:</span>
                  <span>{{ user.phone }}</span>
                </div>
                <div class="space-x-3">
                  <span class="font-semibold">Address:</span>
                  <span>{{ user.address }}</span>
                </div>
                <div class="flex justify-between space-x-3">
                  <span class="font-semibold">Password:</span>
                  <span>********</span>
                  <span><img src="#" alt="" class="mt-1.5" /></span>
                </div>
                <div class="space-x-3">
                  <span class="font-semibold">Department:</span>
                  <span>{{ user.department }}</span>
                </div>
                <div class="space-x-3">
                  <span class="font-semibold">Unit:</span>
                  <span>{{ user.unit }}</span>
                </div>
                <div class="space-x-3">
                  <span class="font-semibold">Role:</span>
                  <span>{{ user.role }}</span>
                </div>
                <div class="space-x-3">
                  <span class="font-semibold">Supervisor:</span>
                  <span>{{ user.supervisor }}</span>
                </div>
                <div class="space-x-3">
                  <span class="font-semibold">Start Date:</span>
                  <span>{{ user.start_date }}</span>
                </div>
                <div class="space-x-3">
                  <span class="font-semibold">Contract Tenure:</span>
                  <span>{{ user.contract_tenure }}</span>
                </div>
                <div class="space-x-3">
                  <span class="font-semibold">Possible End Date:</span>
                  <span>{{ user.possible_end_date }}</span>
                </div>
                <div class="flex space-x-2">
                  <span class="font-semibold">Documentation:</span>
                  <span class="font-semibold">
                    <p
                      v-for="(doc, index) in user.documentation"
                      :key="index"
                      class="italic text-gray-500"
                    >
                      {{ docs }}
                    </p>
                    <!-- <p class="text-gray-500 italic">Medical Report.pdf</p> -->
                  </span>
                </div>
              </div>
            </div>
            <div class="mt-5 rounded-md bg-white">
              <div class="space-y-3 p-5">
                <span class="mr-16 text-lg font-bold">Activity Log</span>
                <span class="text-xs italic text-gray-400"
                  >Showing last 10</span
                >
                <div
                  v-for="(log, index) in logs"
                  :key="index"
                  class="flex space-x-3"
                >
                  <span class="font-semibold">{{ log.type }}:</span>
                  <span class="italic text-gray-500">{{ log.created_at }}</span>
                </div>
              </div>
            </div>
          </aside>
          <section class="ml-[100px] w-[770px]">
            <nav
              class="my-5 flex items-center bg-white p-3 font-semibold text-gray-600"
            >
              <div
                class="btn mx-4 text-center capitalize"
                v-for="item in navItems"
                :key="item.id"
              >
                <button
                  :class="{
                    'text-primary': activeTab === item.id,
                  }"
                  @click="switchGenTab(item.id)"
                >
                  {{ item.label }}
                </button>
              </div>
            </nav>

            <section class="w-full">
              <Overview v-if="activeTab == 1" />
              <Appraisal v-if="activeTab == 2" />
              <Payslips v-if="activeTab == 3" @switchMainTab="switchGenTab" />
            </section>
          </section>
        </div>
      </main>
    </template>
  </app-layout>
</template>
