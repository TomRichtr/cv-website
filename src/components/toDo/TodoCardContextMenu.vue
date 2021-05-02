<template>
  <div>
    <v-menu
      :value="showMenu"
      :position-x="x"
      :position-y="y"
      absolute
      offset-y
      rounded="lg"
      transition="slide-y-transition"
      bottom
      @input="$emit('dropdown:change', $event)"
    >
      <v-list>
        <v-list-item
          v-for="({ icon, label, disabled }, i) in actions"
          :key="i"
          @click="handleDropdownOption(label)"
          :disabled="disabled"
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
