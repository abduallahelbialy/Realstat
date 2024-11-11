import { createRouter, createWebHistory } from "vue-router";
import login from "../components/login/Login.vue";
import Home from "../views/Home.vue";
import Newaccount from "../views/Newaccount.vue";
import Forget from "../views/Forget.vue";
import Otpe from "../views/Otpe.vue";
import Newpass from "../views/Newpass.vue";
import Allnot from "../views/Allnot.vue";
import Chat from "../views/Chat.vue";
import Serchrol from "../views/Serchrol.vue";
import Favouirt from "../views/Favouirt.vue";
import Steppe from "../views/Steppe.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "login",
      component: login,
    },
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/Newaccount",
      name: "Newaccount",
      component: Newaccount,
    },
    {
      path: "/forget",
      name: "forget",
      component: Forget,
    },
    {
      path: "/otpe",
      name: "otpe",
      component: Otpe,
    },
    {
      path: "/Newpass",
      name: "Newpass",
      component: Newpass,
    },
    {
      path: "/Allnot",
      name: "Allnot",
      component: Allnot,
    },
    {
      path: "/chat",
      name: "chat",
      component: Chat,
    },
    {
      path: "/Serchrol",
      name: "Serchrol",
      component: Serchrol,
    },
    {
      path: "/Favouirt",
      name: "Favouirt",
      component: Favouirt,
    },
    {
      path: "/Steppe",
      name: "Steppe",
      component: Steppe,
    },
    // {
    //   path: '/about',
    //   name: 'about',

    //   component: () => import('../views/AboutView.vue')
    // }
  ],
});

export default router;
