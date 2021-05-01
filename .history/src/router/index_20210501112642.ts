import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../src/views/Home.vue";


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
    component: Home
  }
];

const router = new VueRouter({
  routes
});

export default router;
