import axios from "axios";
import { useUserStore } from "../stores/userStore";
import router from "../router/index";
import envVariables from "@/config/config.js";

export async function auth() {
  try {
    const store = useUserStore()
    const { status, data } = await axios.post(
      `${envVariables.API_GATEWAY_BASEURL}/auth/login`,
      {
        email: envVariables.API_GATEWAY_USERNAME,
        password: envVariables.API_GATEWAY_PASSWORD,
      }
    );
    if(status==200){
        store.$state.leadToken=data.data.access_token
        store.$state.leadRefreshToken=data.data.refresh_token
    }
  } catch (e) {
    if(e.response){
        return e.response
    }

  }
}

export async function refresh() {
  try {
  } catch (e) {}
}
