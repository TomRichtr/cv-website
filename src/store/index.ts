import Vue from "vue";
import Vuex from "vuex";
import toDo from "@/store/toDo";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dateFormat: "DD.MM.YYYY",
    timeFormat: "HH:mm"
  },
  modules: {
    toDo
  }
});
