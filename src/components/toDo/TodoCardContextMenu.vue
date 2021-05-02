<template>
  <div>
    <v-menu
      :position-x="x"
      :position-y="y"
      :value="showMenu"
      @input="$emit('dropdown:change', $event)"
      absolute
      bottom
      offset-y
      rounded="lg"
      transition="slide-y-transition"
    >
      <v-list>
        <v-list-item
          :disabled="disabled"
          :key="i"
          @click="handleDropdownOption(label)"
          v-for="({ icon, label, disabled }, i) in actions"
        >
          <v-icon>{{ icon }}</v-icon>
          <v-list-item-title>{{ label }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  name: "TodoCardContextMenu",
  props: {
    showMenu: {
      type: Boolean,
      default: false
    },
    toDoCard: {
      type: Object
    },
    x: {
      type: Number,
      default: 0
    },
    y: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {};
  },
  computed: {
    actions() {
      return [
        {
          label: this.$props.toDoCard.done ? "Uncheck" : "Done"
        },
        {
          label: "Update",
          disabled: this.$props.toDoCard.done ? true : false
        },
        {
          label: "Remove"
        }
      ];
    }
  },
  methods: {
    handleDropdownOption(e) {
      if (e === this.actions[1].label) {
        this.$store.dispatch("initUpdateToDoCard", {
          editedToDo: this.$props.toDoCard,
          isOpen: true
        });
        return;
      }
      if (e === this.actions[2].label) {
        this.$store.dispatch("removeToDoCard", this.$props.toDoCard.id);
        return;
      }
      this.$store.dispatch("markAsDone", this.$props.toDoCard.id);
    }
  }
};
</script>
