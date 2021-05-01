import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "@/views/Home.vue";
import ToDo from "@/views/ToDo.vue";

Vue.use(VueRouter);

export const paths = {
  home: "/",
  toDo: "/todo"
};

const routes: Array<RouteConfig> = [
  {
    path: paths.home,
    name: "Home",
    component: Home
  },
  {
    path: paths.toDo,
    name: "ToDo",
    component: ToDo
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});



export default router;
