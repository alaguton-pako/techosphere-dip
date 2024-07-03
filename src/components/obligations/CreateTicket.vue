<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '../../stores/userStore'
// import workplaceRequests from '../../service/workplaceRequestsv2'

const router = useRouter()
const userStore = useUserStore()

onMounted(() => {
  getFaultsByOwnerType()
  getFaultsByCategory()
  getResponsibleUnit()
})

const description = ref('')
const alternate_email = ref('')
const alternate_number = ref('')

const showaffectedAreaOption = ref(false)
const affectedArea = ref('customer')
const affectedAreas = ['customer', 'splitter']

const selectAffectedArea = (item) => {
  affectedArea.value = item
  showaffectedAreaOption.value = false
  showFaultOptions.value = false
  getFaultsByOwnerType()
}

const priorities = ['low', 'normal', 'high']
const showPriorityOptions = ref(false)
const selectedPriority = ref('')
const selectPriority = (value) => {
  selectedPriority.value = value
  showPriorityOptions.value = false
}

const faultsByOwnerType = ref(null)
const showFaultOptions = ref(false)
const getFaultsByOwnerType = async () => {
  const { status, data } = await workplaceRequests(
    'get',
    `network-fault/get-fault-affected-type?owner_type=${affectedArea.value}`
  )

  if (status === 200) {
    faultsByOwnerType.value = data.data.results.data
    selectedCustomerName.value = ''
  }
}

const selectedCustomerName = ref('')
const selectedCustomerId = ref('')
const handleCustomerSelect = (value) => {
  selectedCustomerName.value = value.name
  selectedCustomerId.value = value.id
  showFaultOptions.value = false
}

const faultsByCategory = ref(null)
const showFaulCategorytOptions = ref(false)
const selectedCategory = ref(null)
const selectedCategoryId = ref(null)
const getFaultsByCategory = async () => {
  const { status, data } = await workplaceRequests(
    'get',
    'network-fault/fault-categories'
  )

  if (status === 200) {
    faultsByCategory.value = data.data
  }
}

const handleCategorySelect = (value) => {
  selectedCategory.value = value.name
  selectedCategoryId.value = value.id
  showFaulCategorytOptions.value = false
  getFaultsBySubcategory(value.id)
}

const faultsBySubcategory = ref(null)
const showFaultSubcategorytOptions = ref(false)
const selectedSubcategory = ref(null)
const selectedSubcategoryId = ref(null)
const getFaultsBySubcategory = async (id) => {
  const { status, data } = await workplaceRequests(
    'get',
    `network-fault/${id}/fault-sub-categories`
  )

  if (status === 200) {
    faultsBySubcategory.value = data.data
  }
}

const handleSubcategorySelect = (value) => {
  selectedSubcategory.value = value.name
  selectedSubcategoryId.value = value.id
  showFaultSubcategorytOptions.value = false
  getFaultsType(value.id)
}

const faultType = ref(null)
const showFaultTypeOptions = ref(false)
const selectedFaultType = ref(null)
const selectedFaultTypeId = ref(null)
const getFaultsType = async (id) => {
  const { status, data } = await workplaceRequests(
    'get',
    `network-fault/${id}/fault-types`
  )

  if (status === 200) {
    faultType.value = data.data
  }
}

const handleFaulyTypeSelect = (value) => {
  selectedFaultType.value = value.name
  selectedFaultTypeId.value = value.id
  showFaultTypeOptions.value = false
}

const responsibleUnit = ref(null)
const showResponsibleUnitOptions = ref(false)
const selectedUnit = ref(null)
const selectedUnitId = ref(null)
const getResponsibleUnit = async () => {
  const { status, data } = await workplaceRequests(
    'get',
    'network-fault/get-responsible-units'
  )

  if (status === 200) {
    responsibleUnit.value = data.data.results.data
  }
}

const handleUnitSelect = (value) => {
  selectedUnit.value = value.unit
  getUserUnit(value.id)
  showResponsibleUnitOptions.value = false
}

const userByUnit = ref(null)
const showUserUnitOptions = ref(false)
const selectedUser = ref(null)
const selectedUserId = ref(null)
const getUserUnit = async (id) => {
  const { status, data } = await workplaceRequests(
    'get',
    `network-fault/get-users-by-unit/${id}`
  )

  if (status === 200) {
    userByUnit.value = data.data
  }
}

const handleUserUnitSelect = (value) => {
  selectedUser.value = value.name
  selectedUserId.value = value.id
  showUserUnitOptions.value = false
}

const createFault = async () => {
  const payload = {
    description: description.value,
    network_fault_type_id: selectedFaultTypeId.value,
    category: selectedCategoryId.value,
    assigned_department: selectedUnitId.value,
    assigned_to: selectedUserId.value,
    assigned_by: userStore.user.user_id,
    alternate_number: alternate_number.value,
    alternate_email: alternate_email.value,
    priority: selectedPriority.value,
    owner_id: selectedCustomerId.value,
    owner_type: affectedArea.value,
  }

  const { status } = await workplaceRequests(
    'post',
    'network-fault/add-fault',
    payload
  )

  if (status === 200) {
    router.push({ name: 'all tickets' })
  }
}
</script>

<template>
  <header class="flex items-center gap-2" @click="$router.go(-1)">
    <img src="../../assets/chevron-black.svg" alt="" class="rotate-90" />
    <span class="text-lg font-semibold">Back</span>
  </header>
  <main class="my-12 grid grid-cols-2 gap-8 bg-white py-20 px-12 shadow">
    <section class="col-span-2">
      <h1 class="text-xl font-semibold leading-normal">Add Fault</h1>
      <div>Enter Fault details</div>
    </section>
    <section class="relative col-span-2">
      <label class="font-semibold">Affected</label>
      <input
        readonly
        :value="affectedArea"
        type="text"
        placeholder="Select Affected area"
        class="mt-2 block w-full border border-secondary p-2 capitalize focus:outline-primary"
        @click="showaffectedAreaOption = !showaffectedAreaOption"
      />
      <img
        src="../../assets/chevron-black.svg"
        alt="Select Affected area"
        class="absolute right-6 bottom-4"
      />
      <ul
        v-if="showaffectedAreaOption"
        class="absolute left-0 top-full z-50 w-full bg-gray-200 shadow-md"
      >
        <li
          v-for="(item, index) in affectedAreas" :key="index"
          class="cursor-pointer px-6 py-1 capitalize hover:bg-primary hover:text-white"
          @click="selectAffectedArea(item)"
        >
          {{ item }}
        </li>
      </ul>
    </section>
    <section class="relative col-span-2">
      <label class="font-semibold capitalize">{{ affectedArea }}</label>
      <input
        type="text"
        readonly
        :value="selectedCustomerName"
        :placeholder="`Select ${affectedArea}`"
        class="mt-2 block w-full border border-secondary p-2 focus:outline-primary"
        @click="showFaultOptions = !showFaultOptions"
      />
      <img
        src="../../assets/chevron-black.svg"
        alt="Select Affected area"
        class="absolute right-6 bottom-4"
      />
      <ul
        v-if="showFaultOptions"
        class="absolute left-0 top-full z-50 max-h-32 w-full overflow-y-scroll overscroll-y-contain bg-gray-200 shadow-md"
      >
        <li v-if="!faultsByOwnerType.length" class="px-6 py-1 font-medium">
          {{ `${affectedArea} list is empty!` }}
        </li>
        <li
          v-for="(item, index) in faultsByOwnerType" :key="index"
          class="cursor-pointer px-6 py-1 capitalize hover:bg-primary hover:text-white"
          @click="handleCustomerSelect(item)"
        >
          {{ item.name }}
        </li>
      </ul>
    </section>
    <section>
      <label class="font-semibold">Alternate Email</label>
      <input
        v-model="alternate_email"
        type="email"
        class="mt-2 block w-full border border-secondary p-2 focus:outline-primary"
      />
    </section>
    <section>
      <label class="font-semibold">Alternate Number</label>
      <input
        v-model="alternate_number"
        type="text"
        class="mt-2 block w-full border border-secondary p-2 focus:outline-primary"
      />
    </section>
    <section class="relative col-span-2">
      <label class="font-semibold">Fault Category</label>
      <input
        type="text"
        readonly
        :value="selectedCategory"
        placeholder="Select Category"
        class="mt-2 block w-full border border-secondary p-2 focus:outline-primary"
        @click="showFaulCategorytOptions = !showFaulCategorytOptions"
      />
      <img
        src="../../assets/chevron-black.svg"
        alt="Select Affected area"
        class="absolute right-6 bottom-4"
      />
      <ul
        v-if="showFaulCategorytOptions"
        class="absolute left-0 top-full z-50 w-full bg-gray-200 shadow-md"
      >
        <li
          v-for="(item, index) in faultsByCategory" :key="index"
          class="cursor-pointer px-6 py-1 capitalize hover:bg-primary hover:text-white"
          @click="handleCategorySelect(item)"
        >
          {{ item.name }}
        </li>
      </ul>
    </section>
    <section class="relative col-span-2">
      <label class="font-semibold">Fault Sub Category</label>
      <input
        type="text"
        readonly
        :value="selectedSubcategory"
        placeholder="Select Sub Category"
        class="mt-2 block w-full border border-secondary p-2 focus:outline-primary"
        @click="showFaultSubcategorytOptions = !showFaultSubcategorytOptions"
      />
      <img
        src="../../assets/chevron-black.svg"
        alt="Select Affected area"
        class="absolute right-6 bottom-4"
      />
      <ul
        v-if="showFaultSubcategorytOptions"
        class="absolute left-0 top-full z-50 w-full bg-gray-200 shadow-md"
      >
        <li
          v-for="(item, index) in faultsBySubcategory" :key="index"
          class="cursor-pointer px-6 py-1 capitalize hover:bg-primary hover:text-white"
          @click="handleSubcategorySelect(item)"
        >
          {{ item.name }}
        </li>
      </ul>
    </section>
    <section class="relative col-span-2">
      <label class="font-semibold">Fault Type</label>
      <input
        type="text"
        readonly
        :value="selectedFaultType"
        placeholder="Type to Select"
        class="mt-2 block w-full border border-secondary p-2 focus:outline-primary"
        @click="showFaultTypeOptions = !showFaultTypeOptions"
      />
      <img
        src="../../assets/chevron-black.svg"
        alt="Select Affected area"
        class="absolute right-6 bottom-4"
      />
      <ul
        v-if="showFaultTypeOptions"
        class="absolute left-0 top-full z-50 w-full bg-gray-200 shadow-md"
      >
        <li
          v-for="(item, index) in faultType" :key="index"
          class="cursor-pointer px-6 py-1 capitalize hover:bg-primary hover:text-white"
          @click="handleFaulyTypeSelect(item)"
        >
          {{ item.name }}
        </li>
      </ul>
    </section>
    <section class="relative col-span-2">
      <label class="font-semibold">Description</label>
      <input
        v-model="description"
        type="text"
        class="mt-2 block w-full border border-secondary p-2 focus:outline-primary"
      />
    </section>
    <section class="relative col-span-2">
      <label class="font-semibold">Assign Responsible Unit</label>
      <input
        type="text"
        readonly
        :value="selectedUnit"
        placeholder="Type to Select"
        class="mt-2 block w-full border border-secondary p-2 focus:outline-primary"
        @click="showResponsibleUnitOptions = !showResponsibleUnitOptions"
      />
      <img
        src="../../assets/chevron-black.svg"
        alt="Select Affected area"
        class="absolute right-6 bottom-4"
      />
      <ul
        v-if="showResponsibleUnitOptions"
        class="absolute left-0 top-full z-50 max-h-32 w-full overflow-y-scroll overscroll-y-contain bg-gray-200 shadow-md"
      >
        <li
          v-for="(item, index) in responsibleUnit" :key="index"
          class="cursor-pointer px-6 py-1 capitalize hover:bg-primary hover:text-white"
          @click="handleUnitSelect(item)"
        >
          {{ item.unit }}
        </li>
      </ul>
    </section>
    <section class="relative col-span-2">
      <label class="font-semibold">Assignee</label>
      <input
        type="text"
        readonly
        :value="selectedUser"
        placeholder="Type to Select"
        class="mt-2 block w-full border border-secondary p-2 focus:outline-primary"
        @click="showUserUnitOptions = !showUserUnitOptions"
      />
      <img
        src="../../assets/chevron-black.svg"
        alt="Select Affected area"
        class="absolute right-6 bottom-4"
      />
      <ul
        v-if="showUserUnitOptions"
        class="absolute left-0 top-full z-50 max-h-32 w-full overflow-y-scroll overscroll-y-contain bg-gray-200 shadow-md"
      >
        <li
          v-for="(item, index) in userByUnit" :key="index"
          class="cursor-pointer px-6 py-1 capitalize hover:bg-primary hover:text-white"
          @click="handleUserUnitSelect(item)"
        >
          {{ item.name }}
        </li>
      </ul>
    </section>
    <section class="relative col-span-2">
      <label class="font-semibold">Priority</label>
      <input
        type="text"
        :value="selectedPriority"
        readonly
        placeholder="Type to Select"
        class="mt-2 block w-full border border-secondary p-2 capitalize focus:outline-primary"
        @click="showPriorityOptions = !showPriorityOptions"
      />
      <img
        src="../../assets/chevron-black.svg"
        alt="Select Affected area"
        class="absolute right-6 bottom-4"
      />
      <ul
        v-if="showPriorityOptions"
        class="absolute left-0 top-full z-50 w-full bg-gray-200 shadow-md"
      >
        <li
          v-for="(item, index) in priorities" :key="index"
          class="cursor-pointer px-6 py-1 capitalize hover:bg-primary hover:text-white"
          @click="selectPriority(item)"
        >
          {{ item }}
        </li>
      </ul>
    </section>
    <!-- <section class="relative col-span-2">
      <label class="font-semibold">Tags</label>
      <input
        type="text"
        placeholder="use @ to tag individuals"
        class="mt-2 block w-full border border-secondary p-2 focus:outline-primary"
      />
      <img
        src="../../assets/chevron-black.svg"
        alt="Select Affected area"
        class="absolute right-6 bottom-4"
      />
    </section> -->
    <section class="col-span-2 flex flex-row-reverse gap-x-6 text-sm">
      <button
        class="rounded-md bg-primary py-2 px-7 text-white"
        @click.prevent="createFault"
      >
        submit
      </button>
      <button
        class="rounded-md border border-primary py-2 px-7 text-primary"
        @click="router.push({ name: 'all tickets' })"
      >
        cancel
      </button>
    </section>
  </main>
</template>
