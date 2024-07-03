<script setup>
import { onMounted, ref } from 'vue'
import { useUserStore } from '../stores/userStore'
import Dashboard from '@/components/Routes/Dashboard.vue'
import BPAD from '@/components/Routes/BPAD.vue'
const userStore = useUserStore()
const store = useUserStore()
const expandWorkplaceTab = ref(true)
const expandHRobligation = ref(false)
const expandObligationTab = ref(false)
const expandBPD = ref(false)
const isAdmin = ref(false)
</script>

<template lang="">
  <aside class="fixed left-0 top-0 h-screen w-[260px] bg-[#0F151F] px-4 py-12">
    <img src="../assets/suburban-logo-inverted.svg" alt="Home" />
    <div class="mt-5 text-center text-gray-500">
    </div>
    <div
      class="mt-5 text-center text-gray-400 text-sm">
    </div>
    <ul class="font-sm mt-10 h-full overflow-y-scroll text-[#B3B3B3]">
      <li class="cursor-pointer p-4">
        <div
          class="flex items-center justify-between"
          @click="expandWorkplaceTab = !expandWorkplaceTab"
        >
          <div class="flex items-center">
            <img src="../assets/dashboard.svg" alt="dashboard" />
            <span class="ml-3">My Workplace</span>
          </div>
          <img
            src="../assets/chevron.svg"
            :class="{ 'rotate-180': expandWorkplaceTab === false }"
          />
        </div>
        <ul v-if="expandWorkplaceTab" class="mt-4 text-start">
          <li
            class="rounded-lg bg-opacity-10 p-3"
            :class="{ 'bg-white': $route.name === '/' }"
          >
            <router-link :to="{ name: 'my-workplace' }">Operational Readiness Checklist</router-link>
          </li>

          <li
           
            class="rounded-lg bg-opacity-10 p-3"
            :class="{ 'bg-white': $route.name === 'supervisor/dashboard' }"
          >
            <router-link :to="{ name: 'dash-board' }">Dashboard</router-link>
          </li>
          <!-- <li
            class="rounded-lg bg-opacity-10 p-3"
            :class="{ 'bg-white': $route.name === 'home' }"
          >
            <router-link :to="{ name: 'home' }"
              >Schedules & Reports</router-link
            >
          </li> -->
          <li>
            <li 
             class="rounded-lg bg-opacity-10 p-3"
            :class="{ 'bg-white': $route.name === 'home-page' }">
            <router-link :to="{ name: 'home-page' }"
              >Schedules & Reports</router-link
            >
            </li>
            <li
              class="rounded-lg bg-opacity-10 p-3"
              :class="{ 'bg-white': $route.name === 'home' }">
              <router-link :to="{ name: 'home' }"
                >Schedules & Reports</router-link
              >
            </li>
          </li>
          <li
            class="rounded-lg bg-opacity-10 p-3"
            :class="{ 'bg-white': $route.name === 'collaboration' }"
          >
            <router-link :to="{ name: 'collaboration' }"
              >Collaboration</router-link
            >
          </li>

          <li
            class="rounded-lg bg-opacity-10 p-3"
            :class="{ 'bg-white': $route.name === 'approvals' }"
          >
            <router-link :to="{ name: 'approvals' }">Approvals</router-link>
          </li>

          <li
            class="rounded-lg bg-opacity-10 p-3"
            :class="{
              'bg-white':
                $route.name === 'requests' ||
                $route.name === 'expenditureRequest',
            }"
          >
            <router-link :to="{ name: 'requests' }">Requests</router-link>
          </li>


          <li
            class="rounded-lg bg-opacity-10 p-3"
            :class="{
              'bg-white':
                $route.name === 'manager-appraisal' 
            }"
          >
            <router-link :to="{ name: 'manager-appraisal' }">Appraisals</router-link>
          </li>
          <li
                class="rounded-lg bg-opacity-10 p-3"
            :class="{
              'bg-white':
                $route.name === 'finance-approvals' 
            }"
          >
            <router-link :to="{ name: 'finance-approvals' }">AIE Approvals</router-link>
          </li>

          <li
            class="rounded-lg bg-opacity-10 p-3"
            :class="{ 'bg-white': $route.name === 'closeout-report' }"
          >
            <router-link :to="{ name: 'closeout-report' }"
              >Close Out Reports</router-link
            >
          </li>
        </ul>
      </li>
      <li
        class="cursor-pointer p-4"
      >
        <div
          class="flex items-center justify-between"
          @click="expandHRobligation = !expandHRobligation"
        >
          <div class="flex items-center">
            <img src="../assets/dashboard.svg" alt="dashboard" />
            <span class="ml-3">MPR Report</span>
          </div>
          <img
            src="../assets/chevron.svg"
            :class="{ 'rotate-180': expandHRobligation === false }"
          />
        </div>
        <ul  class="mt-4 text-start">
          <li
            class="rounded-lg bg-opacity-10 py-3 pl-3"
            :class="{ 'bg-white': $route.name === 'finance' }"
          >
            <router-link :to="{ name: 'finance' }"
              >Finance</router-link
            >
          </li>
          <li
          class="rounded-lg bg-opacity-10 py-3 pl-3"
            :class="{ 'bg-white': $route.name === 'operations' }"
          >
            <router-link :to="{ name: 'operations' }"
              >Operations</router-link
            >
          </li>
          <li
          class="rounded-lg bg-opacity-10 py-3 pl-3"
            :class="{ 'bg-white': $route.name === 'operations' }"
          >
            <router-link :to="{ name: 'task-monitor' }"
              >Task Monitor</router-link
            >
            

          </li>
          <li
          class="rounded-lg bg-opacity-10 py-3 pl-3"
            :class="{ 'bg-white': $route.name === 'human-resource' }"
          >
            <router-link :to="{ name: 'human-resource' }"
              >Human Resource</router-link
            >
          </li>
        </ul>
      </li> 
      <BPAD />
      
      <li
        class="rounded-lg bg-opacity-10 p-4"
        :class="{ 'bg-white': $route.name === 'Sales & Marketing Performance' }"
      >
        <router-link
          :to="{ name: 'Sales & Marketing Performance' }"
          class="flex items-center"
        >
          <img src="../assets/user-inactive.svg" />
          <span class="ml-3">Dashboard</span>
        </router-link>
      </li>
      <li
        class="rounded-lg bg-opacity-10 p-4"
        :class="{ 'bg-white': $route.name === 'supervisor/dashboard' }"
      >
        <router-link
          :to="{ name: 'readiness' }"
          class="flex items-center"
        >
          <img src="../assets/dashbord-icon.svg" />
          <span class="ml-3">Obligation</span>
        </router-link>
      </li>

      <li
        class="rounded-lg bg-opacity-10 p-4"
        :class="{ 'bg-white': $route.name === 'supervisor/technician' }"
      >
        <router-link
          :to="{ name: 'technician' }"
          class="flex items-center"
        >
          <img src="../assets/dashbord-icon.svg" />
          <span class="ml-3">Technicians</span>
        </router-link>
      </li>

      <li
 
        class="cursor-pointer p-4">
        <div
          class="flex items-center justify-between"
          @click="expandObligationTab = !expandObligationTab"
        >
          <div class="flex items-center">
            <img src="../assets/dashbord-icon.svg" alt="dashboard" />
            <span class="ml-3">Obligations</span>
          </div>
          <img
            src="../assets/chevron.svg"
            :class="{ 'rotate-180': expandObligationTab === false }"
          />
        </div>

        <ul v-if="expandObligationTab" class="mt-4 text-start">

          <li
        class="rounded-lg bg-opacity-10 p-4"
        :class="{ 'bg-white': $route.name === 'My Accounts' }"
      >
        <router-link :to="{ name: 'My Accounts' }" class="flex items-center">
          <span class="ml-3"> Dashboard</span>
        </router-link>
      
      </li> 
          
          <li
          
            class="rounded-lg bg-opacity-10 p-4"
            :class="{ 'bg-white': $route.name === 'main-bar' }"
          >
            <router-link :to="{ name: 'main-bar' }" class="ml-3"
              >Booking</router-link
            >
          </li>
        </ul>
      </li>


    



      <li
   
        class="cursor-pointer p-4">
        <div
          class="flex items-center justify-between"
          @click="expandObligationTab = !expandObligationTab"
        >
          <div class="flex items-center">
            <img src="../assets/dashbord-icon.svg" alt="dashboard" />
            <span class="ml-3">Obligations</span>
          </div>
          <img
            src="../assets/chevron.svg"
            :class="{ 'rotate-180': expandObligationTab === false }"
          />
        </div>

        <ul v-if="expandObligationTab" class="mt-4 text-start">
          <li
            class="rounded-lg bg-opacity-10 p-3"
            :class="{ 'bg-white': $route.name === 'Leads' }"
          >
            <router-link :to="{ name: 'Leads' }">Lead Management</router-link>
          </li>

          <li
   
            class="rounded-lg bg-opacity-10 p-3"
            :class="{ 'bg-white': $route.name === 'Account Managers' }"
          >
            <router-link :to="{ name: 'Account Managers' }"
              >Account Management</router-link
            >
          </li>

          <li
            class="rounded-lg bg-opacity-10 p-3"
            :class="{ 'bg-white': $route.name === 'manager details' }"
          >
            <router-link :to="{ name: 'manager details' }"
              >Account Management</router-link
            >
          </li>

          <li
            class="rounded-lg bg-opacity-10 p-3"
            :class="{ 'bg-white': $route.name === 'Sales Orders' }"
          >
            <router-link :to="{ name: 'Sales Orders' }"
              >Sales Management</router-link
            >
          </li>
     
        </ul>
      </li>
      
      <li
        class="cursor-pointer p-4"
   
      >
        <div
          class="flex items-center justify-between"
          @click="expandHRobligation = !expandHRobligation"
        >
          <div class="flex items-center">
            <img src="../assets/dashboard.svg" alt="dashboard" />
            <span class="ml-3">Obligations</span>
          </div>
          <img
            src="../assets/chevron.svg"
            :class="{ 'rotate-180': expandHRobligation === false }"
          />
        </div>
        <ul v-if="expandHRobligation" class="mt-4 text-start">
          <li
            class="rounded-lg bg-opacity-10 py-3 pl-3"
            :class="{ 'bg-white': $route.name === 'performance-management' }"
          >
            <router-link :to="{ name: 'performance-management' }"
              >Performance Management</router-link
            >
          </li>
          <li
            class="rounded-lg bg-opacity-10 p-3"
            :class="{ 'bg-white': $route.name === 'obligation-reward' }"
          >
            <router-link :to="{ name: 'obligation-reward' }">Rewards & Welfare</router-link>
          </li>
          <li
            class="rounded-lg bg-opacity-10 p-3"
            :class="{ 'bg-white': $route.name === 'talent-obligation' }"
          >
            <router-link :to="{ name: 'talent-obligation' }">Recruitment</router-link>
          </li>
        </ul>
      </li> 

      
      <li
 
            class="rounded-lg bg-opacity-10 py-3 pl-3 flex space-x-2"
            :class="{ 'bg-white': $route.name === 'manager-performance-management' }"
          >
          <img src="../assets/user-inactive.svg" />

            <router-link :to="{ name: 'manager-performance-management' }"
              >Performance Management</router-link
            >
          </li>


      <li
  
        class="rounded-lg bg-opacity-10 p-4"
        :class="{ 'bg-white': $route.name === 'staff-insight' }"
      >
        <router-link :to="{ name: 'staff-insight' }" class="flex items-center">
          <img src="../assets/user-inactive.svg" />
          <span class="ml-3">Staff Insight</span>
        </router-link>
      </li> 


      <ul
   
      >
      
        <li
          class="rounded-lg bg-opacity-10 p-3"
          :class="{ 'bg-white': $route.name === 'schedule' }"
        >
          <router-link :to="{ name: 'schedule' }" class="flex items-center">
            <img src="../assets/user-inactive.svg" />
            <span class="ml-3">Obligations</span>
          </router-link>
        </li>
        <li
          class="rounded-lg bg-opacity-10 p-3"
          :class="{ 'bg-white': $route.name === 'help-center' }"
        >
          <router-link :to="{ name: 'help-center' }" class="flex items-center">
            <img src="../assets/user-inactive.svg" />
            <span class="ml-3">Help Center</span>
          </router-link>
        </li>
      </ul>
      <ul v-if="userStore.userHasRole('New Applicant')">
        <li
          class="rounded-lg bg-opacity-10 p-4"
          :class="{ 'bg-white': $route.name === 'application-record' }"
        >
          <router-link
            :to="{ name: 'application-record' }"
            class="flex items-center"
          >
            <div class="flex items-center">
              <img src="../assets/dashboard.svg" alt="dashboard" />
              <span class="ml-3">New Application</span>
            </div>
          </router-link>
        </li>
        <li
          class="rounded-lg bg-opacity-10 p-3"
          :class="{ 'bg-white': $route.name === '' }"
        >
          <router-link :to="{ name: '' }" class="flex items-center">
            <img src="../assets/clarity_employee-group-line.svg" />
            <span class="ml-3">Resume Application</span>
          </router-link>
        </li>
        <li
          class="rounded-lg bg-opacity-10 p-3"
          :class="{ 'bg-white': $route.name === '' }"
        >
          <router-link :to="{ name: '' }" class="flex items-center">
            <img src="../assets/mdi_login.svg" />
            <span class="ml-3">Logout</span>
          </router-link>
        </li>
      </ul> 

      <li
  
        class="rounded-lg bg-opacity-10 p-4"
        :class="{ 'bg-white': $route.name === 'dashboard' }"
      >
        <router-link
          :to="{ name: isAdmin ? 'dashboard' : 'my tickets' }"
          class="flex items-center"
        >
          <img src="../assets/user-inactive.svg" />
          <span class="ml-3">Obligations</span>
        </router-link>  
      </li>

      <li   

        class="rounded-lg bg-opacity-10 p-4"
        :class="{ 'bg-white': $route.name === 'customerDatabase' }"
      >
        <router-link
          :to="{ name: 'customerDatabase' }"
          class="flex items-center"
        >
          <img src="../assets/user-inactive.svg" />
          <span class="ml-3">Customer Insight</span>
        </router-link>
      </li>
      
      
      <li

        class="rounded-lg bg-opacity-10 p-4"
        :class="{ 'bg-white': $route.name === 'conversations' }"
      >
        <router-link :to="{ name: 'conversations' }" class="flex items-center">
          <img src="../assets/user-inactive.svg" />
          <span class="ml-3">Conversations</span>
        </router-link>
      </li>
      <li class="rounded-lg bg-opacity-10 p-4">
        <a href="#" class="flex items-center">
          <img src="../assets/user-inactive.svg" alt="Network Management" />
          <span class="ml-3">Notifications</span>
        </a>
      </li>

      <li   
  
        class="rounded-lg bg-opacity-10 p-4"
        :class="{ 'bg-white' : $route.name === 'supportPage' }"
      >
        <router-link
          :to="{ name: 'supportPage' }"
          class="flex items-center"
        >
          <img src="../assets/user-inactive.svg" />
          <span class="ml-3">Report Issues</span>
        </router-link>
      </li>
    </ul>
  </aside>
</template>

<style lang=""></style>
