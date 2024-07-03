<script setup>
import DynamicHorizontalNavigation from '@/components/DynamicAppHorizontalNavigation.vue'
import workplaceRequestsv2 from '../../../services/workplaceRequestsv2'
import { onMounted, ref } from 'vue'

const tasks = ref([])

onMounted(() => {
  loadTasks()
})
const getEfficiency = (setTime, actualTime) => {
  const currentDate = new Date()
  // Get the current time in epoch (milliseconds since January 1, 1970)
  const epochTime = currentDate.getTime()
  const epochSetTime = getEpoch(setTime)
  const epochActualTime = getEpoch(actualTime)

  if (actualTime !== null && epochActualTime > epochSetTime) {
    return 1
  } else if (actualTime !== null && epochActualTime <= epochSetTime) {
    return 2
  } else if (epochSetTime > epochActualTime || actualTime === null) {
    return 0
  } else if (epochTime > epochSetTime || actualTime === null) {
    return 3
  }
}

const getEpoch = (date) => {
  if (date === null) {
    return null
  }

  const dateObject = new Date(date)
  const epochTime = dateObject.getTime()
  return epochTime
}

const loadTasks = async () => {
  // this is where u update tht tak to see the most recent ones per day
  try {
    const { status, data } = await workplaceRequestsv2(
      'get',
      'tasks?date=2024-05-15'
    )

    if (status === 200) {
      tasks.value = data
      console.log(tasks.value)
    }
  } catch (e) {}
}
</script>
<!-- target is tied to the weighting for each kPI -->
<!-- the kpi assigned to each staff has to be checked and confirmed for fit in line witht the gask for the period -->
<!-- fix: attach kpi to roles and not to individual -->
<!-- strategy interpretation: from the budget and strategy, get the obligatiosn for each -->
<!-- the how to the output (already in the design) -->

<template>
  <div v-for="task in tasks" :key="task.id" class="ml-6">
    <b>{{ task.unit }}</b>
    <table class="w-full table-fixed border border-secondary text-sm">
      <thead>
        <tr>
          <th>Staff Name</th>
          <th>Task Description</th>
          <th>Created Time</th>
          <th>Expected Finish Time</th>
          <th>Actual Finish Time</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="details in task.tasks">
          <td>{{ details.user_name }}</td>
          <td>{{ details.task_name }}</td>
          <td>{{ details.start_time }}</td>
          <td>{{ details.end_time }}</td>
          <td v-if="details.completed_at == null">NULL</td>
          <td v-else>{{ details.completed_at }}</td>
          <!-- <td v-else>{{getEpoch(details.completed_at)}} - {{ getEpoch(details.end_time) }}</td> -->
          <td
            v-if="getEfficiency(details.end_time, details.completed_at) === 1"
            class="bg-primary-red pl-3"
          >
            Closed out late
          </td>
          <td
            v-if="getEfficiency(details.end_time, details.completed_at) === 3"
            class="bg-primary-red pl-3"
          >
            Did not closeout
          </td>
          <td
            v-if="getEfficiency(details.end_time, details.completed_at) === 2"
            class="bg-primary-green pl-3"
          >
            Closed out on task on time
          </td>
          <td
            v-if="
              getEfficiency(details.end_time, details.completed_at) === 0 &&
              details.completed_at === null
            "
            class="bg-primary-yellow pl-3"
          >
            Pending Completion
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
