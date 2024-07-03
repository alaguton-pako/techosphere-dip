<script setup>
const props = defineProps({ start_date: '', end_date: "" })
defineEmits(['changeStartDate', 'changeEndDate', 'search'])

</script>

<template>
    <div>
        <div class="flex justify-end space-x-3 ">
            <div class="space-x-2">
                <span>From</span>
                <input type="date" name="" @change="$emit('changeStartDate', $event.target.value)" id=""
                    class=" border border-[#A5A5A8] bg-[#F4F4F5] p-2 rounded-md">
            </div>
            <div class="space-x-2">
                <span>To</span>
                <input type="date" name="" id="" @change="$emit('changeEndDate', $event.target.value)"
                    class=" border border-[#A5A5A8] bg-[#F4F4F5] p-2 rounded-md">
            </div>
        </div>
    </div>
</template>