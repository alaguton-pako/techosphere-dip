<script setup>
import filterBy from '@/pages/BPD/Analysis/filterBy.vue'
import SelectDate from '@/components/SelectDate.vue'
// import CircleProgress from "";
import CircleProgress from 'vue3-circle-progress'
// import "vue3-circle-progress/dist/circle-progress.css";
import workplaceRequestsv2 from '../../../../services/workplaceRequestsv2'
import { onMounted, ref } from 'vue'
import platformRequest from '@/services/platform.request.js'
import ccsRequests from '@/services/ccsRequests.js'
import Swal from 'sweetalert2'
const filter = ref('company')
const openTab = ref('departments')
const units = ref([])
const departments = ref([])

const start_date = ref('')
const end_date = ref('')

const formatDate = (date) => {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Month is 0-indexed
  const day = date.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
}
// Set end_date to today's date
const today = new Date();
end_date.value = formatDate(today);

// Set start_date to the first day of the current month
const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
start_date.value = formatDate(firstDayOfMonth);

const chartValues = ref({
  obligation: 0,
  efficiency: 0,
})
const unitPerformanceData = ref([])
const performanceData = ref({
  Operations: {
    id: 1,
    department: 'Operations',
    created_at: '',
    updated_at: '',
    analysis: {
      obligation: 0,
      efficiency: 0,
      compliance: 0,
      score: 0,
    },
  },
  Networks: {
    id: 2,
    department: 'Networks',
    created_at: '',
    updated_at: '',
    analysis: {
      obligation: 0,
      efficiency: 0,
      compliance: 0,
      score: 0,
    },
  },
  Marketing: {
    id: 3,
    department: 'Marketing',
    created_at: '',
    updated_at: '',
    analysis: {
      obligation: 0,
      efficiency: 0,
      compliance: 0,
      score: 0,
    },
  },
  Finance: {
    id: 4,
    department: 'Finance',
    created_at: '',
    updated_at: '',
    analysis: {
      obligation: 0,
      efficiency: 0,
      compliance: 0,
      score: 0,
    },
  },
  Commercial: {
    id: 5,
    department: 'Commercial',
    created_at: '',
    updated_at: '',
    analysis: {
      obligation: 0.2857142857142857,
      efficiency: 0,
      compliance: 0,
      score: 0.09523809523809523,
    },
  },
  Management: {
    id: 6,
    department: 'Management',
    created_at: '',
    updated_at: '',
    analysis: {
      obligation: 0,
      efficiency: 0,
      compliance: 0,
      score: 0,
    },
  },
  'Customer Experience': {
    id: 7,
    department: 'Customer Experience',
    created_at: '',
    updated_at: '',
    analysis: {
      obligation: 0,
      efficiency: 0,
      compliance: 0,
      score: 0,
    },
  },
  'Innovation(Strategy)': {
    id: 8,
    department: 'Innovation(Strategy)',
    created_at: '',
    updated_at: '',
    analysis: {
      obligation: 0,
      efficiency: 0,
      compliance: 0,
      score: 0,
    },
  },
})
onMounted(() => {
  getPerformanceOverview()
  getUnitPerformanceOverview()
})

const diagnosisPerformance = ref({
  data_source_schedule: {
    compliance_percentage: 0,
    performance_percentage: 0,
    efficiency_percentage: 0,
    total_expected_score: 0,
    total_scores: 0,
    total_expected_percentage: 100,
    total_percentage: 0,
    resolution_stats: {
      fault: 0,
      installation: 0,
    },
  },
})

const getPerformanceOverview = async () => {
  try {
    const { status, data } = await workplaceRequestsv2(
      'get',
      `staff-performance/overview?start_date=${start_date.value}&&end_date=${end_date.value}`
    )
    if (status == 200) {
      performanceData.value = data.data.results.data
      departments.value = []
      Object.values(performanceData.value).forEach((v, k) => {
        departments.value.push(v.department)
      })
    }
    computeChartValues()
  } catch (e) {
    alert(e.message)
  }
}

const getTeamPerformance = async (team) => {
  try {
    const urlPath = setTeamURLPath(team.id)
    let url = ''

    //create dynamic url based on team role to get performance
    if (team.role == 'diagnosis') {
      url = `reports/suburban/diagnosis/${urlPath}`
      const { status, data } = await ccsRequests('get', url)
      diagnosisPerformance.value = data
      chartValues.value.efficiency =
        diagnosisPerformance.value?.data_source_schedule?.efficiency_percentage
      chartValues.value.obligation =
        diagnosisPerformance.value?.data_source_schedule?.performance_percentage
    } else {
      url = `reports/suburban/${urlPath}`
      const { status, data } = await ccsRequests('get', url)
      if (status == 200) {
        diagnosisPerformance.value = data
        chartValues.value.efficiency =
          diagnosisPerformance.value?.data_source_schedule?.efficiency_percentage
        chartValues.value.obligation =
          diagnosisPerformance.value?.data_source_schedule?.performance_percentage
      }
    }
    // alert(status);
  } catch (e) {
    alert(e.message)
  }
}

const setFilter = (value) => {
  filter.value = value
  computeChartValues()
}

const getUnitPerformanceOverview = async () => {
  try {
    const { status, data } = await workplaceRequestsv2(
      'get',
      `staff-performance/units/overview?start_date=${start_date.value}&&end_date=${end_date.value}`
    )
    unitPerformanceData.value = data.data.results.data
    units.value = []
    Object.values(unitPerformanceData.value).forEach((v, k) => {
      units.value.push(v?.unit)
    })
  } catch (e) {
    alert(e.message)
  }
}

const setTeamURLPath = (teamid) => {
  if (!start_date.value) {
    let date = new Date()
    let month = date.getMonth().toLocaleString('en-US', {
      minimumIntegerDigits: 2,
      useGrouping: false,
    })
    let year = date.getFullYear()
    start_date.value = `${year}-${month}-01`
  }
  if (!end_date.value) {
    let day = '31'
    let date = new Date()
    let month = date.getMonth().toLocaleString('en-US', {
      minimumIntegerDigits: 2,
      useGrouping: false,
    })
    let year = date.getFullYear()
    const thirtys = ['04', '06', '09', '11']
    if (thirtys.includes(month)) {
      day = '30'
    } else if (month == '02') {
      day = '28'
    }
    end_date.value = `${year}-${month}-${day}`
  }

  return `${teamid}/${start_date.value}/${end_date.value}`
}

const setTeam = (value) => {
  getTeamPerformance(value)
}
const computeChartValues = () => {
  if (filter.value == 'company') {
    let count = 0
    Object.values(performanceData.value).forEach((v, k) => {
      count++
      chartValues.value.obligation += v.analysis.obligation
      chartValues.value.efficiency += v.analysis.efficiency
    })
    chartValues.value.efficiency = chartValues.value.efficiency / count
    chartValues.value.obligation = chartValues.value.obligation / count
  } else if (filter.value == 'units') {
    let count = 0
    Object.values(unitPerformanceData.value).forEach((v, k) => {
      count++
      chartValues.value.obligation += v.analysis.obligation
      chartValues.value.efficiency += v.analysis.efficiency
    })
    chartValues.value.efficiency = chartValues.value.efficiency / count
    chartValues.value.obligation = chartValues.value.obligation / count
  } else {
    if (openTab.value == 'departments') {
      chartValues.value.efficiency =
        performanceData.value[filter.value].analysis.efficiency
      chartValues.value.obligation =
        performanceData.value[filter.value].analysis.obligation
    }
    if (openTab.value == 'units') {
      chartValues.value.efficiency =
        unitPerformanceData.value[filter.value].analysis.efficiency
      chartValues.value.obligation =
        unitPerformanceData.value[filter.value].analysis.obligation
    }
  }
}
</script>

<template>
  <div class="flex flex-row gap-4">
    <div class="flex justify-between pr-10">
      <filterBy
        @setTeam="setTeam"
        @setFilter="setFilter"
        @setOpenTab="
          (value) => {
            openTab = value
          }
        "
        :departments="departments"
        :units="units"
      />
    </div>
    <div class="mx-20 flex w-full flex-col items-center">
      <SelectDate
        @changeStartDate="
          (value) => {
            start_date = value
            getPerformanceOverview()
            getUnitPerformanceOverview()
          }
        "
        @changeEndDate="(value) => {
          end_date = value
            getPerformanceOverview()
            getUnitPerformanceOverview()
        }"
        class="my-5 flex w-full justify-end"
      />

      <div
        class="w-fit rounded-md border border-secondary-gray bg-white px-24 py-10 text-center"
      >
        <h2 class="py-4 text-lg font-bold">Completed Obligations</h2>
        <circle-progress
          class="text-[32px]"
          :show-percent="true"
          :percent="chartValues.obligation"
          unit="percent"
          :gradient="{
            angle: chartValues.obligation,
            startColor: '#F39D1C',
            stopColor: '#F39D1C',
          }"
        >
          {{ chartValues.obligation + '%' }}
        </circle-progress>
      </div>
      {{ Math.round(chartValues.obligation) + '%' }}

      <div
        class="mt-8 w-fit rounded-md border border-secondary-gray bg-white px-24 py-10 text-center"
      >
        <h2 class="py-4 text-lg font-bold">Process Efficiency</h2>
        <circle-progress
          class="text-[32px]"
          :show-percent="true"
          :showPercent="true"
          :percent="chartValues.efficiency"
          unit="percent"
          :gradient="{
            angle: chartValues.efficiency,
            startColor: '#E50303',
            stopColor: '#E50303',
          }"
        >
        </circle-progress>
      </div>
      {{ Math.round(chartValues.efficiency) + '%' }}
    </div>
  </div>
</template>
