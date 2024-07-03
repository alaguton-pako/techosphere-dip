<template>
  <div v-for="(item, index) in props.checklists" :key="index" class="">
    <div>
      <input
        @click="toggleItemReadiness(index)"
        :id="index"
        type="checkbox"
        :value="item.id"
        class="w-10 h-10 mx-10 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
      />
      <label
        for="checkbox-item-1"
        class="ms-2 text-sm font-medium text-black dark:text-gray-300"
        >{{ item.name }}</label
      >
    </div>
  </div>
  <div class="w-full flex items-center">
      <label for="comment" class="block text-sm font-medium text-gray-600"
        >Comments</label
      >
      <textarea
        @change="$emit('setComment', $event.target.value)"
        id="comment"
        name="comment"
        rows="3"
        class="mt-1 p-2 border w-full rounded-md"
      ></textarea>
    </div>
</template>

<script setup>
const props = defineProps(["checklists", 'index', 'listIndex']);
const emit=defineEmits(['setValue', 'setComment'])
const toggleItemReadiness = (id) => {
  try {
    let doc=document.getElementById(id)
    if(doc.checked){
      emit('setValue', ['available', id, props.index])
    }else{
      emit('setValue', ['unavailable', id, props.index])
    }
    // let idx=props.checklists.indexOf(e=>{
    //   return e.id==10
    // })
    // dataList.value[index].questions[idx].status='available'
  } catch (e) {}
};
</script>
