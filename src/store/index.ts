import Vue from "vue";
import Vuex from "vuex";
import toDo from "@/store/toDo";

Vue.use(Vuex);

interface State {
  currentMils: number;
  dateFormat: string;
  timeFormat: string;
}

export default new Vuex.Store({
  state: {
    dateFormat: "DD.MM.YYYY",
    timeFormat: "HH:mm",
    currentMils: 0
  },
  mutations: {
    setMiliseconds(state: State, payload: number) {
      state.currentMils = payload;
    }
  },
  actions: {
    updateCurrentMils({ commit }: any, mils: number) {
      commit("setMiliseconds", mils);
    }
  },
  modules: {
    toDo
  }
});
