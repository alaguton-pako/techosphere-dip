<script setup>
import {ref} from 'vue'
import AppLayout from '../layouts/AppLayout.vue'
import AppHorizontalNavigation from '../components/AppHorizontalNavigation.vue'
import CallLogs from '../components/conversations/CallLogs.vue'
import EmailLogs from '../components/conversations/EmailLogs.vue'
import ChatLogs from '../components/conversations/ChatLogs.vue'
const currentTab = ref('call logs')
</script>

<template>
  <app-layout>
    <template v-slot:main-content>
      <main class="w-full pl-[260px]">
        <AppHorizontalNavigation />
        <nav
          class="mx-10 mt-12 flex items-center border border-gray-200 bg-white p-3 font-semibold text-gray-600"
        >
          <span class="mx-6 text-center cursor-pointer" :class="{'text-primary': currentTab === 'call logs'}" @click="currentTab = 'call logs'">Call Logs</span>
          <span class="mx-6 text-center cursor-pointer" :class="{'text-primary': currentTab === 'email logs'}" @click="currentTab = 'email logs'">Emails Logs</span>
          <span class="mx-6 text-center cursor-pointer" :class="{'text-primary': currentTab === 'chats'}" @click="currentTab = 'chats'">Chats</span>
        </nav>
        <call-logs v-if="currentTab === 'call logs'"></call-logs>
        <email-logs v-if="currentTab === 'email logs'"></email-logs>
        <chat-logs v-if="currentTab === 'chats'"></chat-logs>
      </main>
    </template>
  </app-layout>
</template>
