<template>
  <div>
    <div class="todo-card-wrapper">
      <div class="action-buttons-wrapper">
        <v-btn
          class="mx-2 action-button"
          fab
          dark
          x-small
          @click="$store.dispatch('markAsDone', $props.toDoCard.id)"
          :color="
            !$props.toDoCard.done ? 'blue-grey lighten-3' : 'cyan darken-4'
          "
        >
          <v-icon class="mx-2" dark> mdi-check-bold</v-icon>
        </v-btn>
        <v-btn
          class="mx-2 action-button"
          fab
          dark
          x-small
          @click="$store.dispatch('removeToDoCard', $props.toDoCard.id)"
          color="red darken-4"
        >
          <v-icon class="mx-2" dark> mdi-delete</v-icon>
        </v-btn>
      </div>
      <v-textarea
        outlined
        ref="card"
        :value="$props.toDoCard.text"
        @contextmenu="show"
        @mousedown="$refs.card.blur()"
        @change="handleCardChange"
        name="input-7-4"
        :label="dateTime"
        color="cyan darken-4"
        rows="3"
        hide-details
        :background-color="
          !$props.toDoCard.done ? 'blue-grey lighten-3' : 'light-green accent-1'
        "
      />
    </div>
    <TodoCardContextMenu
      :showMenu="showMenu"
      :x="x"
      :y="y"
      :toDoCard="$props.toDoCard"
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
      y: 0
    };
  },
  computed: {
    dateTime() {
      return getDateTime({
        date: this.$props.toDoCard.date,
        time: this.$props.toDoCard.time
      });
    }
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
      console.log(this.$store.state);
      this.$store.dispatch("updateToDoCard", {
        ...this.$props.toDoCard,
        text: e
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
