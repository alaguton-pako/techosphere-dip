<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '../stores/userStore'
import { RouterLink } from 'vue-router'
const viewProfileOption = ref(false)
const router = useRouter()

const toProfile = () => {
  router.push({ name: 'MyProfile' })
}
// const logout = () => {
//   store.logout()
// }
</script>

<template lang="">
  <header
    class="sticky top-0 z-40 flex w-full items-center justify-between bg-white px-10 py-7 shadow-md"
  >
    <h1 class="text-2xl font-bold">Workplace</h1>
    <div class="relative flex items-center">
      <div class="relative">
        <img src="../assets/bell.svg" alt="notifications" />
        <div
          class="absolute -right-2 -top-3 grid h-5 min-w-5 place-content-center rounded-full bg-red-600 p-1 text-xs text-white"
        >
          0
        </div>
      </div>
      <div
        class="ml-10 mr-3 h-10 w-10 rounded-full border-2 border-gray-400"
        @click.stop="viewProfileOption = !viewProfileOption"
      ></div>

      <div
        class="mx-4"
        @click.stop="viewProfileOption = !viewProfileOption"
      >
        <div class="text-lg font-semibold">
          <!-- {{ store.$state.user ? store.$state.user.name : null }} -->
          username will appear here
        </div>
        <div class="text-xs font-semibold capitalize text-primary">
          <!-- {{ store.$state.user.position }} -->
          users position will appeare here
        </div>
      </div>

      <img
        src="../assets/chevron-black.svg"
        alt="veiw profile"
        class="w-3"
        @click.stop="viewProfileOption = !viewProfileOption"
      />
      <ul
        v-if="viewProfileOption"
        class="absolute right-0 top-full w-40 cursor-pointer rounded border border-gray-300 bg-white capitalize"
      >
        <li
          @click="toProfile()"
          class="p-3"
          :class="{ 'text-red-600': $route.name === 'myProfile' }"
        >
          <router-link :to="{ name: 'myProfile' }">profile</router-link>
        </li>
        <li
          class="cursor-pointer px-3 py-2 text-primary hover:bg-gray-200"
          @click="logout"
        >
          logout
        </li>
      </ul>
    </div>
  </header>
</template>
