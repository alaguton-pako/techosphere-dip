import axios from "axios";
import { useUserStore } from "../stores/userStore";
import router from "../router/index";
import envVariables from "@/config/config.js";
import { auth } from "./apiGatewayRequest";
export default async (method, endpoint, payload = null) => {

    let res
  
    const store = useUserStore()
    if(store.$state.leadToken==null){
      await auth();
    }
    const instance = axios.create({
      baseURL: `${envVariables.API_GATEWAY_BASEURL}/api`,
      headers: { Authorization: `Bearer ${store.$state.leadToken}`},
    })
  
    try {
      res = await instance[method](`/${endpoint}`, payload)
    } catch (error) {
      if (error.response) {
        res = error.response
      }
     
      if (error.response.status === 401) {
        await auth();
      }
    }
  
    return res
  }