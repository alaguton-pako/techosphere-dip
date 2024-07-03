<script setup>
import { onMounted, ref } from 'vue'
import AppLayout from '@/layouts/AppLayout.vue'
import CheckList from './CheckList.vue'
import GaugeChart from '@/components/GaugeChart.vue'
import HorizontalNavigation from '@/components/AppHorizontalNavigation.vue'
import workplaceRequestsv2 from '../../services/workplaceRequestsv2'
import Swal from 'sweetalert2'
const comment = ref('')
const isLoading = ref(false)
const chartValue = ref(0)
const isVisible = ref(true)

// onMounted(async () => {
//   isLoading.value = true;
//   let data = await getInstallerItems("materials_and_consumables");
//   dataList.value[0].questions = data.map((e) => {
//     return { id: e.id, name: e.item, status: "unavailable", comments: "" };
//   });
//   let data2 = await getInstallerItems("logistics");
//   dataList.value[2].questions = data2.map((e) => {
//     return { id: e.id, name: e.item, status: "unavailable", comments: "" };
//   });
//   getInstallerReadiness();
// });

const dataList = ref([
  {
    tag: 'OPERATION CHECKLIST',
    description: 'Equipment & Material checklist',
    opened: false,
    questions: [],
  },
  {
    tag: 'OPERATION CHECKLIST',
    description: 'Task checklist',
    opened: false,
    questions: [],
  },
  {
    tag: 'OPERATION CHECKLIST',
    description: 'Transportation & Logistics checklist',
    opened: false,
    questions: [],
  },
  {
    tag: 'OPERATION CHECKLIST',
    description: 'Schedule checklist',
    opened: false,
    questions: [],
  },
])

const visibilityToggle = () => {
  isVisible.value = !isVisible.value
}

// const getInstallerItems = async (filter) => {
//   try {
//     const { status, data } = await workplaceRequestsv2(
//       "get",
//       `operations/sd/field-operations/installer-field-items?type=${filter}`
//     );
//     if (status == 200) {
//       return data.data.data;
//     }
//   } catch (e) {
//     console.log(e);
//   }
//   return [];
// };
// const getInstallerReadiness = async () => {
//   try {
//     const { status, data } = await workplaceRequestsv2(
//       "get",
//       `operations/sd/field-operations/installer-readiness`
//     );
//     if (status == 200) {
//       console.log("readiness data", data);
//       chartValue.value = data.data.data;
//     }
//   } catch (e) {
//     console.log(e);
//   }
//   isLoading.value = false;
//   return [];
// };

const setValue = (data) => {
  try {
    dataList.value[data[2]].questions[data[1]].status = data[0]
    console.log(dataList.value[data[2]].questions[data[1]])
  } catch (e) {
    console.lpg(e)
  }
}

const setComment = (value) => {
  comment.value = value
}

const submitForm = async () => {
  try {
    let payload = []
    dataList.value.forEach((e) => {
      payload = payload.concat(e.questions)
    })
    payload = payload.map((e) => {
      return { ...e, comments: comment.value }
    })
    const { status, data } = await workplaceRequestsv2(
      'post',
      'operations/sd/field-operations/installer-readiness',
      { items: payload }
    )
    if (status == 200) {
      Swal.fire({
        icon: 'success',
        title: 'Successful',
        text: 'Submitted successfully',
      })
    }
  } catch (e) {
    Swal.fire({
      icon: 'info',
      title: 'Failed',
      text: data.message,
    })
  }
}
</script>

<template>
  <section class="bg-white">
    <div class="mb-4 bg-gray-200">
      <nav class="text-black-300 mt-1 rounded-md border p-2">
        <div class="grid grid-cols-1">
          <div class="font-[Source Sans Pro] text-[25px] font-bold">
            Operational Readiness Reading
          </div>
          <div class="font-[Source Sans Pro] font-normal">
            {{ new Date() }}
          </div>
        </div>
      </nav>
    </div>
    <div class="h-[600px] w-full">
      <div class="mx-3 my-3 grid grid-cols-4 border-b border-b-gray-300">
        <div class="my-8 mb-4">
          <GaugeChart
            v-if="!isLoading"
            :size="300"
            :id="`gaugeChart${1}`"
            department=""
            :gauge="chartValue"
          />
        </div>
        <div class="my-8 grid grid-cols-1 justify-items-end">
          <div class="mx-3 mb-6 font-normal">28/11/2023</div>
          <div class="mx-3 mb-6 font-normal">29/11/2023</div>
          <div class="mx-3 mb-6 font-normal">30/11/2023</div>
          <div class="mx-3 mb-6 font-normal">01/12/2023</div>
        </div>
        <div class="my-8 grid grid-cols-1 justify-items-center">
          <div
            class="h-[13px] w-[165px] rounded-full bg-gray-200 dark:bg-green-700"
          >
            <div
              class="h-2.5 rounded-full bg-green-600"
              style="width: 100%"
            ></div>
          </div>

          <div
            class="h-[13px] w-[165px] rounded-full bg-gray-200 dark:bg-green-700"
          >
            <div
              class="h-2.5 rounded-full bg-green-600"
              style="width: 100%"
            ></div>
          </div>

          <div
            class="h-[13px] w-[165px] rounded-full bg-gray-200 dark:bg-green-700"
          >
            <div
              class="h-2.5 rounded-full bg-green-600"
              style="width: 100%"
            ></div>
          </div>

          <div
            class="h-[13px] w-[165px] rounded-full bg-gray-200 dark:bg-green-700"
          >
            <div
              class="h-2.5 rounded-full bg-green-600"
              style="width: 100%"
            ></div>
          </div>
        </div>
        <div class="mb-16 grid grid-cols-1 text-[white]">
          <button
            class="mx-3 mb-6 h-[58px] w-[150px] rounded-lg bg-slate-700 text-center"
          >
            Approved
          </button>
          <button
            class="mx-3 mb-6 h-[58px] w-[150px] rounded-lg bg-slate-700 text-center"
          >
            Approved
          </button>
          <button
            class="mx-3 mb-6 h-[58px] w-[150px] rounded-lg bg-slate-700 text-center"
          >
            Approved
          </button>
          <button
            class="mx-3 mb-6 h-[58px] w-[150px] rounded-lg bg-slate-700 text-center"
          >
            Approved
          </button>
        </div>
      </div>

      <div v-for="(item, index) in dataList" :key="index">
        <div class="mx-10 my-10 justify-items-center py-10 shadow-2xl">
          <div class="flex flex-row">
            <div class="w-3/12 cursor-pointer">
              <input type="checkbox" class="h-[40px] w-full" />
            </div>

            <div class="w-6/12">
              <div class="font-['Source Sans Pro'] font-light">
                {{ item.tag }}
              </div>
              <div class="font-['Source Sans Pro'] font-semibold">
                {{ item.description }}
              </div>
            </div>

            <div
              @click="dataList[index].opened = !dataList[index].opened"
              class="mx-20 my-11 flex w-3/12 flex-row-reverse text-[black]"
              id="dropdownDefaultCheckbox"
              data-dropdown-toggle="dropdownDefaultCheckbox"
            >
              <svg
                width="28"
                height="14"
                viewBox="0 0 28 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25 1L13 13L1 1"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          <div v-if="item.opened" class="mx-24 my-10 text-black">
            <CheckList
              class=""
              :index="index"
              @setValue="setValue"
              :checklists="item.questions"
              @setComment="setComment"
            />
          </div>
        </div>
      </div>
      <div class="flex justify-center">
        <button
          @click="submitForm"
          class="mb-10 bg-[#f05423] px-24 py-4 text-white"
        >
          Submit
        </button>
      </div>
    </div>
  </section>
</template>

<style scope>
.hidden {
  display: none;
}
</style>
