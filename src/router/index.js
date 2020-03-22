import Vue from "vue"
import VueRouter from "vue-router"
import Layout from "@/views/layout/Layout"

Vue.use(VueRouter)

const routes = [
  { path: "/404", component: require("@/views/404").default, hidden: true },

  {
    path: "/",
    component: Layout,
    redirect: "/dashboard",
    name: "Dashboard",
    hidden: true,
    children: [
      {
        path: "dashboard",
        component: require("@/views/dashboard/index").default
      }
    ]
  },

  {
    path: "/ass",
    component: Layout,
    redirect: "/ass/index",
    name: "ass",
    meta: { title: "ass", icon: "example" },
    children: [
      {
        path: "index",
        name: "ass index",
        component: require("@/views/ass/index").default,
        meta: { title: "ass index", icon: "table" }
      },
      {
        path: "detail",
        name: "ass detail",
        component: require("@/views/ass/detail").default,
        meta: { title: "ass", icon: "tree" }
      }
    ]
  }
]

const router = new VueRouter({
  scrollBehavior: () => ({ y: 0 }),
  routes
})

export default router
