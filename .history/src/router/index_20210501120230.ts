import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "@/views/Home.vue";
import ToDo from "@/views/ToDo.vue";
import ToBuy from "@/views/ToBuy.vue";
import Account from "@/views/Account.vue";

Vue.use(VueRouter);

export const paths = {
  home: "/",
  toDo: "/to-do",
  toBuy: "/to-buy",
  account: "account"
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
  },
  {
    path: paths.toBuy,
    name: "toBuy",
    component: ToBuy
  },
  {
    path: paths.account,
    name: "account",
    component: Account
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
