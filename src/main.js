import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import './style.css'
import App from './App.vue'
import LoadingSpinner from './components/LoadingSpinner.vue'
import AppPagination from './components/AppPagination.vue'
import AppLayout from './layouts/AppLayout.vue'
import AppHorizontalNavigation from './components/AppHorizontalNavigation.vue'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
// import NotificationToast from './components/NotificationToast.vue'
import router from './router/index'
import hrRouter from './router/hr.router'
import PrimeVue from 'primevue/config';

const pinia = createPinia()
const app = createApp(App)
app.component('LoadingSpinner', LoadingSpinner)
app.component('AppPagination', AppPagination)
app.component('AppLayout', AppLayout)
app.component('AppHorizontalNavigation', AppHorizontalNavigation)
// app.component('NotificationToast', NotificationToast)
pinia.use(piniaPluginPersistedstate)
app.use(router)
app.use(pinia)
app.use(PrimeVue, { ripple: true  })
app.use(VueSweetalert2);
app.mount('#app')
 

// axios.interceptors.request.use(
//     (request) => {
//       //  request.headers.ContentType='application/json';
//       request.headers.Accept = "application/json";
//       if (request.url.includes("api")) {
//         request.headers.Authorization = "Bearer " + localStorage.getItem("token");
//       }
//       return request;
//     },
//     (error) => {
//       return Promise.reject(error);
//     }
//   );
  
//   axios.interceptors.response.use(
//     (response) => {
//       return response.data;
//     },
//     (error) => {
//       console.log(router.currentRoute.value.fullPath);
//       if (error.response.data.code == 401 || error.response.status == 401) {
//         if (router.currentRoute.value.fullPath != "/login") {
//           localStorage.setItem(
//             "previousRoute",
//             router.currentRoute.value.fullPath
//           );
//         }
//         localStorage.removeItem("token");
//         localStorage.removeItem("profile");
//         router.push({ path: "/login" });
//       }
//       return error.response.data;
//     }
//   );
