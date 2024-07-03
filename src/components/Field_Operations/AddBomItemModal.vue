<template>
<div v-if="props.showModal" class="fixed inset-0 z-50 flex items-center justify-center overflow-auto">
      <!-- Modal content -->
      <div class="bg-white rounded-lg lg:w-[500px] p-6 space-y-4 lg:shadow-lg lg:mx-auto lg:h-auto">
        <!-- <div class="mt-3 text-center">
          <div v-for="item in items" :key="item.id" class="my-2">
            <button @click="addItem(item, props.bom )" class="p-3 bg-white text-[#D50036] rounded-lg">{{ item.description }}</button>
          </div>
        </div> -->
        
        <div>
          <button class="ml-auto grid h-10 w-10 place-content-center rounded-full 
          my-6 border border-primary text-xl text-primary" type="button" @click ="closeModal">
              𝖷
          </button>
          <h2 class="lg:font-bold lg:justify-start lg:mx-2 lg:text-[25px] lg:mt-3">Add Item</h2> 
        </div>
        <form @submit.prevent="addItem" class="space-y-4">
          <div>
            <label
              for="category"
              class="lg:block lg:text-lg lg:mt-3 lg:font-normal "
              >Item Name</label
            >
            <select
              id="name"
              v-model="selectedItem"
              @change="initializeQuantity"
              class="mt-1 w-full rounded-md border border-secondary-gray p-2 divide-y divide-gray-100 dark:divide-gray-700"
            >
            <!-- :value="item" -->
            <option v-for="(item, index) in items" :key="index" :value="item">{{ item.description }}</option>
            </select>
          </div>
          <div class="flex flex-col space-x-8 lg:justify-center lg:items-center lg:place-items-center">
              <label
                for="dropdown2"
                class="lg:text-2xl text-black-800 my-4 mb-2 block font-semibold lg:ml-8"
                >Quantity Available</label
              >
              <div class="mb-4 flex items-center mt-3">
                <button
                  @click="decrement"
                  class="bg-gray-300 px-4 py-2 text-gray-600"
                >
                  -
                </button>
                <input
                  v-model="selectedItem.quantity"
                  type="number"
                  id="counter-input"
                  class="w-16 border p-2 text-center"
                  placeholder="" value="1"
                 required
                />
                <button
                  @click="increment"
                  class="bg-gray-300 px-4 py-2 text-gray-600"
                >
                  +
                </button>
              </div>
            </div>
            <div class="lg:items-center lg:place-items-center lg:justify-center lg:flex">
            <button 
            @click="addItem(selectedItem, props.bom)"
            class="lg:h-[51px] lg:w-[165px] lg:mt-6 lg:shrink-0 lg:rounded-md lg:border lg:bg-[#D50036] lg:pb-3.5 lg:pl-7 lg:pr-7 lg:pt-3.5 lg:text-white">Submit</button>
            </div>
          </form>
      </div>
  </div>
</template>

<script setup>
import { defineProps, onMounted } from 'vue';
import { ref, watch} from 'vue';
import Swal from 'sweetalert2'
import workplaceRequestsv2 from '../../services/workplaceRequestsv2'

const items = ref([]);
const counter = ref(1);
const selectedItem = ref([]);

// Define props
const props = defineProps({
  showModal: Boolean,
  bom : String
});


onMounted(() => {
    getBOMItems(props.bom)
});

watch(() => props.bom, async (newValue) => {
  await getBOMItems(newValue);
});

const emits = defineEmits(['item-added', 'close-modal']);

const addItem = (item, bom ) => {
    emits('item-added', item, bom);
}


const closeModal = () =>  {
  emits('close-modal')
}

const getBOMItems = async (newValue) => {
    console.log(newValue);
    try {
    const { status, data } = await workplaceRequestsv2(
      'get',
      `operations/sd/bom/items?type=${newValue}`
    )
    if (status == 200) {
      items.value = data?.data?.data
    }
  } catch (e) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: e.message,
    })
  }
}



function initializeQuantity() {
  if (selectedItem.value && !selectedItem.value.hasOwnProperty('quantity')) {
    selectedItem.value.quantity = 1;
  }
}

function increment() {
    
  if (selectedItem.value) {
    selectedItem.value.quantity++;
  }
}

function decrement() {
  if (selectedItem.value && selectedItem.value.quantity > 0) {
    selectedItem.value.quantity--;
  }
}


</script>