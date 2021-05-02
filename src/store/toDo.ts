import { v4 as uuidv4 } from "uuid";

interface State {
  toDoCards: ToDoCard[];
  datetimeModalOpen: boolean;
  editedToDo: ToDoCard;
  overdueTasksCount: number;
}

type ToDoCard = {
  text: string;
  id: string;
  done: boolean;
  date: string;
  time: string;
  overdue: boolean;
};

type DateTime = {
  date: string;
  time: string;
};

type Modal = {
  editedToDo: ToDoCard;
  isOpen: boolean;
};

const toDo = {
  state: () => ({
    toDoCards: [],
    datetimeModalOpen: false,
    editedToDo: "",
    overdueTasksCount: 0
  }),
  mutations: {
    setAddToDoCard(state: State, payload: ToDoCard) {
      state.toDoCards.push(payload);
    },
    setRemoveToDoCard(state: State, payload: string) {
      const index = state.toDoCards.findIndex((toDo) => toDo.id === payload);
      state.toDoCards.splice(index, 1);
    },
    setMarkAsDone(state: State, payload: string) {
      const index = state.toDoCards.findIndex((toDo) => toDo.id === payload);
      state.toDoCards[index].done = !state.toDoCards[index].done;
    },
    setOpenDatetimeModal(state: State, payload: boolean) {
      state.datetimeModalOpen = payload;
    },
    setEditedToDoCard(state: State, payload: ToDoCard) {
      state.editedToDo = payload;
    },
    setUpdateToDoCard(state: State, payload: ToDoCard) {
      const index = state.toDoCards.findIndex((toDo) => toDo.id === payload.id);
      state.toDoCards[index].date = payload.date;
      state.toDoCards[index].time = payload.time;
      state.toDoCards[index].text = payload.text;
      state.toDoCards[index].overdue = payload.overdue;
    },
    setOverdueCount(state: State) {
      const overdueTasks = state.toDoCards.filter(({ overdue }) => !!overdue);
      state.overdueTasksCount = overdueTasks.length;
    }
  },
  actions: {
    addToDoCard({ commit }: any, { date, time }: DateTime) {
      const toDoCard = {
        text: "",
        id: uuidv4(),
        done: false,
        date,
        time
      };
      commit("setAddToDoCard", toDoCard);
    },
    removeToDoCard({ commit }: any, id: string) {
      commit("setRemoveToDoCard", id);
    },
    markAsDone({ commit }: any, id: string) {
      commit("setMarkAsDone", id);
    },
    openDatetimeModal({ commit }: any, isOpen: boolean) {
      commit("setOpenDatetimeModal", isOpen);
    },
    initUpdateToDoCard({ commit }: any, { isOpen, editedToDo }: Modal) {
      commit("setOpenDatetimeModal", isOpen);
      commit("setEditedToDoCard", editedToDo);
    },
    resetEditedToDoCard({ commit }: any) {
      commit("setEditedToDoCard", {});
    },
    updateToDoCard({ commit }: any, updatedTo: ToDoCard) {
      commit("setUpdateToDoCard", updatedTo);
      commit("setOverdueCount");
    }
  }
};

export default toDo;
