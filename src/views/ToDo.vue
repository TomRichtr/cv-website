<template>
  <div>
    <v-row
      justify="space-around"
      v-for="(toDoCard, i) in $store.state.toDo.toDoCards"
      :key="i"
    >
      <ToDoCard :toDoCard="toDoCard" class="todo-card" />
    </v-row>
    <TodoModal :dialog="$store.state.toDo.datetimeModalOpen" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ToDoCard from "@/components/toDo/TodoCard.vue";
import TodoModal from "@/components/toDo/TodoModal.vue";

export default Vue.extend({
  name: "ToDo",
  components: { ToDoCard, TodoModal }
});
</script>

<style lang="scss" scoped>
.todo-card {
  width: 80%;
  margin-top: 15px;
}
</style>
