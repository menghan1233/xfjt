import { createRouter,createWebHashHistory} from "vue-router"
const ceshi = () => import("@/components/compute")
const home = () => import("@/components/home")

const routes = [
    { path: "/", redirect: "/home" },
    {
        path: "/home",
        name: "home",
        component: home
    },
    {
        path: "/compute",
        name: "compute",
        component: ceshi,
        meta: { title: '翟波涛专属计算器'},
    },
]
export const router = createRouter({
    history: createWebHashHistory(),
    routes
})
