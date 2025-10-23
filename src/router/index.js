import { createRouter, createWebHashHistory } from "vue-router";

import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import Signup from "@/views/Signup.vue";
import Reserve from "@/views/Reserve.vue";
import Confirm from "@/views/Confirm.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/login", component: Login },
  { path: "/signup", component: Signup },
  { path: "/reserve", component: Reserve },
  { path: "/confirm", component: Confirm },
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
