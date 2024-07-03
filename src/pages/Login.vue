<template>
  <main
    class="grid h-screen grid-cols-2 place-content-center place-items-center gap-14 px-48"
  >
    <div
      v-if="loginFailed"
      class="absolute right-32 top-20 grid h-14 w-40 place-content-center bg-gray-700 text-lg font-medium text-white"
    >
      <span>Login failed</span>
    </div>
    <div
      v-if="notAuth"
      class="absolute right-32 top-20 grid h-14 w-56 place-content-center bg-gray-700 px-4 text-lg font-medium text-white"
    >
      <span>User is not authorized to access this resource</span>
    </div>
    <aside class="grid w-full place-content-center">
      <img
        src="../assets/hero-login.svg"
        alt="login to your account"
        class="w-4/5"
      />
    </aside>
    <form class="w-full" @submit.prevent="$router.push({name: 'home'})">
      <img src="../assets/suburban_logo.svg" alt="Suburban home page" />
      <h1 class="mb-2 mt-12 text-2xl font-bold">Login to your account</h1>
      <!-- <ul class="text-red-600 text-sm list-disc list-inside mt-6 mb-2">
                <li class="py-1">Email is wrong</li>
                <li  class="py-1">Password is incorrect</li>
                <li  class="py-1">What is wrong with you</li>
            </ul> -->
      <!-- <p>Create a new password for techymunched@gmail.com</p> -->
      <div class="mb-6 mt-8">
        <label>Email Address</label>
        <input
          v-model="email"
          type="text"
          placeholder="name@suburban.ng"
          class="block w-full rounded border border-gray-300 p-2 focus:outline-none"
        />
      </div>
      <div>
        <label>Password</label>
        <input
          v-model="password"
          type="password"
          placeholder="*************"
          class="block w-full rounded border border-gray-300 p-2 focus:outline-none"
        />
      </div>
      <div class="my-3 flex items-center justify-between text-sm">
        <div class="flex items-center">
          <input type="checkbox" class="mr-2" />
          <label>Remember me</label>
        </div>
        <!-- <a href="#">Recover Password?</a> -->
      </div>

      <input
        type="submit"
        :value="loading ? 'Loading...' : 'Login'"
        :disabled="loading"
        class="mt-10 block w-full cursor-pointer rounded-md bg-[#D50036] py-3 text-center text-white"
        :class="{ 'cursor-not-allowed bg-gray-400 text-white': loading }"
      />
      <!-- @click.prevent="$router.push({name: 'home'})" -->
    </form>
  </main>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useUserStore } from '../stores/userStore'
import workPlaceRequests from '../services/workplaceRequests'
import { auth } from '../services/apiGatewayRequest'
const router = useRouter()
const store = useUserStore()
const notAuth = ref(false)
const loginFailed = ref(false)
const loading = ref(false)
const email = ref('')
const password = ref('')
const source = ref(null)

// const login = () => {
//   console.log('working')
//   router.push({ name: 'home' })
// }

const login = async () => {
  if (!email.value || !password.value || loading.value) {
    return
  }
  loading.value = true
  const { status, data } = await workPlaceRequests('post', 'login', {
    email: email.value,
    password: password.value,
  })
  if (status == 200) {
    console.log(data)
  }
  if (status != 200) {
    loginFailed.value = true
    loading.value = false
    setTimeout(() => (loginFailed.value = false), 4000)
  }
  if (data.data === 'undefined') {
    loginFailed.value = true
    loading.value = false
    setTimeout(() => (loginFailed.value = false), 4000)
  }
  if (!store.hasRole(data.data.role)) {
    loading.value = false
    store.updateIsAuthenicated(false)
    alert('role check failed')
    notAuth.value = true
    setTimeout(() => (notAuth.value = true), 3000)
    console.log('not permitted')
    return
  }
  let category = data.data.category
  if (category === 'BOTH' || category === 'SUBURBAN USER') {
    loading.value = false
    auth()
    store.updateIsAuthenicated(true)
    store.$state.token = data.token
    store.$state.user = data.data
    store.$state.user.email = email.value
    redirectAfterAuth(data.token)
  } else if (
    status === 200 &&
    (category === '' || category === 'LEGEND USER')
  ) {
    loading.value = false
    store.updateIsAuthenicated(false)
    notAuth.value = true
    setTimeout(() => (notAuth.value = false), 3000)
  }
}

onMounted(() => {
  setSoureAttribute()
})

const setSoureAttribute = () => {
  source.value = router.currentRoute.value.query.source
}

const redirectAfterAuth = (token) => {
  if (source.value == null) {
    router.push({ name: 'home' })
  } else {
    const redirectUrl = `${source.value}?token=${token}`
    window.open(redirectUrl)
  }
}
</script>

// if (status === 401) { // loginFailed.value = true // loading.value = false //
setTimeout(() => (loginFailed.value = false), 4000) // }
