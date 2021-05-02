<template>
  <div>
    <div class="todo-card-wrapper">
      <div class="action-buttons-wrapper">
        <v-btn
          @click="$store.dispatch('markAsDone', $props.toDoCard.id)"
          :color="
            !$props.toDoCard.done ? 'blue-grey lighten-3' : 'cyan darken-4'
          "
          class="mx-2 action-button"
          dark
          fab
          x-small
        >
          <v-icon class="mx-2" dark> mdi-check-bold</v-icon>
        </v-btn>
        <v-btn
          @click="$store.dispatch('removeToDoCard', $props.toDoCard.id)"
          class="mx-2 action-button"
          color="red darken-4"
          dark
          fab
          x-small
        >
          <v-icon class="mx-2" dark> mdi-delete</v-icon>
        </v-btn>
      </div>
      <v-textarea
        :background-color="getBackgroundColor"
        :label="dateTime"
        :value="$props.toDoCard.text"
        @change="handleCardChange"
        @contextmenu="show"
        @mousedown="$refs.card.blur()"
        color="cyan darken-4"
        hide-details
        name="input-7-4"
        outlined
        ref="card"
        rows="3"
      />
    </div>
    <TodoCardContextMenu
      :showMenu="showMenu"
      :toDoCard="$props.toDoCard"
      :x="x"
      :y="y"
      @dropdown:change="showMenu = $event"
    />
    <TodoModal />
  </div>
</template>

<script>
import TodoCardContextMenu from "@/components/toDo/TodoCardContextMenu";
import TodoModal from "@/components/toDo/TodoModal";
import { getDateTime } from "@/methods/utils";

export default {
  name: "ToDoCard",
  components: { TodoCardContextMenu, TodoModal },
  props: {
    toDoCard: {
      type: Object
    }
  },
  data() {
    return {
      showMenu: false,
      value: "",
      x: 0,
      y: 0,
      isOverdue: false
    };
  },
  computed: {
    getBackgroundColor() {
      if (this.$props.toDoCard.done) {
        return "light-green accent-1";
      }
      if (this.isOverdue) {
        return "orange lighten-4";
      }
      return "blue-grey lighten-4";
    },
    dateTime() {
      return getDateTime({
        date: this.$props.toDoCard.date,
        time: this.$props.toDoCard.time
      });
    }
  },
  mounted() {
    this.updateIfOverdue();
  },
  methods: {
    async show(e) {
      e.preventDefault();
      this.showMenu = false;
      this.x = e.clientX;
      this.y = e.clientY;
      await this.$nextTick();
      this.showMenu = true;
    },
    handleCardChange(e) {
      this.$store.dispatch("updateToDoCard", {
        ...this.$props.toDoCard,
        text: e
      });
    },
    updateIfOverdue() {
      setInterval(() => this.checkIfOverdue(), 1000);
    },
    checkIfOverdue() {
      this.isOverdue =
        this.$store.state.currentMils >
        Date.parse(`${this.$props.toDoCard.date} ${this.$props.toDoCard.time}`);
      this.$store.dispatch("updateToDoCard", {
        ...this.$props.toDoCard,
        overdue: this.isOverdue
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.todo-card-wrapper {
  display: flex;
  flex-direction: row;
}
.action-buttons-wrapper {
  display: flex;
  flex-direction: column;
}
.action-button {
  margin-bottom: 5px;
}
</style>
