
import axios from "axios";
import { useUserStore } from "../stores/userStore";
import envVariables from "@/config/config.js";
import { useRoute } from "vue-router";
const router = useRoute();

export default async (method, endpoint, payload = null) => {
  let res;
  const store = useUserStore();
  const instance = axios.create({
    baseURL: `${envVariables.VENDOR_API}`,
    headers: { Authorization: `Bearer ${store.$state.customerToken}` },

  });

  try {
    res = await instance[method](`/${endpoint}`, payload);
  } catch (error) {
    if (error.response) {
      res = error.response;
    }
    if (error.response.status === 401) {
      store.logout();
    }
  }

  return res;
};
