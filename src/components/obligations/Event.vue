
<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios';
import { useRoute } from 'vue-router'

const route = useRoute()
const id = ref('')
const props = defineProps(['eventData', 'isAdmin'])
// onMounted(() => {
//     getEventData (id)
// })
let baseUrl = 'https://ccs.suburbanfiberco.com'

const eventData = ref(null)
const getEventData = async () => {
    try {
          const {status, data } = await axios.get(`${baseUrl}/api/conversation/history/000${route.params.id}`)
            if (status === 200) {
                eventData.value = data.data
            }
    } 
    catch(err) {
          console.log(err)
     }
}

</script>


<template>
    <div>
        <table class="mt-4 w-full table-auto border border-secondary text-center text-sm">
            <thead class="bg-gray-200 text-sm  uppercase">
              <tr class="border border-secondary">
                <th class="border border-secondary p-3">Name Of event</th>
                <th class="border border-secondary p-3">Date Triggered</th>
                
              </tr>
            </thead>
            <tbody>
                <tr class=" " >
                  <td class="border border-secondary px-3 py-4"></td>
                  <td class="border border-secondary"></td>
                  
                </tr>
            </tbody>
          </table>    
    </div>
</template>