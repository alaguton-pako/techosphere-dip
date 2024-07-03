import axios from 'axios'
import { useUserStore } from '../stores/userStore'
import router from '../router/index'
import envVariables from '@/config/config.js'

export default async (method, endpoint, payload = null) => {
  let res
  const store = useUserStore()
  const instance = axios.create({
    baseURL: `${envVariables.WORKPLACE_BASE_URL_V1}`,
    headers: { Authorization: `Bearer ${store.$state.token}` },
  })
  try {
    res = await instance[method](`/${endpoint}`, payload)
  } catch (error) {
    if (error.response) {
      res = error.response
    }
    if (error.response.status === 401) {
      router.push({ name: 'login' })
      store.logout()
    }
  }
  return res
}
