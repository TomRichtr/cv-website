import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

export const paths = {
  mainPage: "/"
};

const routes: Array<RouteConfig> = [
  {
    path: paths.mainPage,
    name: "Home",
    component: Home
  }
];

const router = new VueRouter({
  routes
});

export default router;
