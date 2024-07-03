<template>
  <div>
    <div class="p-5 px-7 bg-white">
      <div class="bg-white p-3 shadow-sm">
        <h2 class="font-semibold text-[#5E6268]">Filter By</h2>
      </div>
      <div class="flex justify-center my-10">
        <input
          type="text"
          class="border border-gray-200 rounded-md px-3"
          placeholder="Search by Name"
        />
        <div class="bg-black p-2 rounded-sm">
          <img src="../../../assets/search-white.svg" alt="" />
        </div>
      </div>
      <div class="space-y-4 pb-20">
        <div>
          <input
            type="checkbox"
            @click="setFilterValue('company')"
            name=""
            id=""
            :checked="filterValue == 'company' ? true : false"
            class="mx-3"
          />
          <label for="">Company</label>
        </div>
        <div>
          <input
            type="checkbox"
            name=""
            @click="setFilterValue('department')"
            :checked="openTab == 'department' ? true : false"
            id=""
            class="mx-3"
          />
          <label for="">Department</label>
        </div>
        <div v-if="openTab == 'departments'">
          <div
            v-for="(department, index) in props?.departments"
            :key="index"
            class="mx-6"
          >
            <input
              type="checkbox"
              @click="setFilterValue(department)"
              :checked="filterValue == department ? true : false"
              :name="index"
              :id="index"
              class="mx-3"
            />
            <label for="">{{ department }}</label>
          </div>
        </div>
        <!-- <div class="mx-6">
          <input
            type="checkbox"
            @click="setFilterValue('Operations')"
            :checked="filterValue == 'Operations' ? true : false"
            name=""
            id=""
            class="mx-3"
          />
          <label for="">Operations</label>
        </div>
        <div class="mx-6">
          <input
            type="checkbox"
            @click="setFilterValue('Networks')"
            :checked="filterValue == 'Networks' ? true : false"
            name=""
            id=""
            class="mx-3"
          />
          <label for="">Networks</label>
        </div>
        <div class="mx-6">
          <input
            type="checkbox"
            @click="setFilterValue('Marketing')"
            :checked="filterValue == 'Marketing' ? true : false"
            name=""
            id=""
            class="mx-3"
          />
          <label for="">Marketing</label>
        </div>
        <div class="mx-6">
          <input
            type="checkbox"
            @click="setFilterValue('Finance')"
            :checked="filterValue == 'Finance' ? true : false"
            name=""
            id=""
            class="mx-3"
          />
          <label for="">Finance</label>
        </div>
        <div class="mx-6">
          <input
            type="checkbox"
            @click="setFilterValue('Commercial')"
            :checked="filterValue == 'Commercial' ? true : false"
            name=""
            id=""
            class="mx-3"
          />
          <label for="">Commercial</label>
        </div>
        <div class="mx-6">
          <input
            type="checkbox"
            @click="setFilterValue('Management')"
            :checked="filterValue == 'Management' ? true : false"
            name=""
            id=""
            class="mx-3"
          />
          <label for="">Management</label>
        </div>
        <div class="mx-6">
          <input
            type="checkbox"
            @click="setFilterValue('Customer Experience')"
            :checked="filterValue == 'Customer Experience' ? true : false"
            name=""
            id=""
            class="mx-3"
          />
          <label for="">Customer Experience</label>
        </div>
        <div class="mx-6">
          <input
            type="checkbox"
            @click="setFilterValue('Innovation(Strategy)')"
            :checked="filterValue == 'Innovation(Strategy)' ? true : false"
            name=""
            id=""
            class="mx-3"
          />
          <label for="">Innovation(Strategy)</label>
        </div> -->
        <div>
          <input
            @click="setFilterValue('units')"
            type="checkbox"
            name=""
            id=""
            class="mx-3"
            :checked="openTab == 'units' ? true : false"
          />
          <label for="">Unit</label>
        </div>
        <div v-if="openTab == 'units'">
          <div v-for="(unit, index) in props.units" :key="index" class="mx-6">
            <input
              type="checkbox"
              @click="setFilterValue(unit)"
              :checked="filterValue == unit ? true : false"
              name=""
              id=""
              class="mx-3"
            />
            <label for="">{{ unit }}</label>
          </div>
        </div>
        <div>
          <input
            @click="setFilterValue('teams')"
            type="checkbox"
            name=""
            id=""
            class="mx-3"
            :checked="openTab == 'teams' ? true : false"
          />
          <label for="">Teams</label>
        </div>
        <div v-if="openTab == 'teams'">
          <div v-for="(team, index) in teams" :key="index" class="mx-6">
            <input
              type="checkbox"
              @click="setFilterValue(team.id)"
              :checked="filterValue == team.id ? true : false"
              name=""
              id=""
              class="mx-3"
            />
            <label for="">{{ team.name }}</label>
          </div>
        </div>
        <!-- <div>
          <input type="checkbox" name="" id="" class="mx-3" />
          <label for="">Individual</label>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import workplaceRequestsv2 from "../../../services/workplaceRequestsv2";
const props = defineProps(["departments", "units"]);
const emit = defineEmits(["setFilter", "setOpenTab", 'setTeam']);
const filterValue = ref("company");
const openTab = ref("departments");

onMounted(() => {
  getTeams();
});
const setFilterValue = (value) => {
  if (
    value == "units" ||
    (props.units.includes(value) && openTab.value == "units")
  ) {
    openTab.value = "units";
  } else if (
    value == "teams" ||
    teams.value.some((e) => {
      return e.id == value;
    })
  ) {
    openTab.value = "teams";
    if(typeof value == Number){
      let selectedTeam=teams.value.find(e=>{
        return e.id== value
      })
      emit('setTeam', selectedTeam)
      // filterValue.value=selectedTeam.name
    }else{
      emit('setTeam', teams.value[0]);
      // filterValue.value=teams.value[0].name
    }
    return 
  } else {
    openTab.value = "departments";
  }

  if (value == "department") {
    filterValue.value = props.departments[0];
    emit("setOpenTab", openTab.value);
    emit("setFilter", props.departments[0]);
    return;
  }
  if (value == "units") {
    filterValue.value = props.units[0];
    emit("setOpenTab", openTab.value);
    emit("setFilter", props.units[0]);
    return;
  }
  filterValue.value = value;
  emit("setFilter", value);
  emit("setOpenTab", openTab.value);
};

const teams = ref([
  {
    id: null,
    name: "",
    created_at: "",
    updated_at: "",
    team_lead_id: 4,
    role: "",
  },
]);

const getTeams = async () => {
  try {
    const { status, data } = await workplaceRequestsv2("get", "teams/all");
    if (status == 200) {
      teams.value = data;
    }
  } catch (e) {}
};
</script>
