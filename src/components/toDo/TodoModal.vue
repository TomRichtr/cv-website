<template>
  <v-dialog
    :value="dialog"
    @click:outside="handleDialogChange(false)"
    max-width="350"
    transition="dialog-top-transition"
  >
    <v-card>
      <v-row justify="space-around">
        <v-date-picker
          @change="handleDateChange(false)"
          color="cyan darken-4"
          full-width
          v-if="displayDatePicker"
          v-model="date"
        />
        <v-time-picker
          color="cyan darken-4"
          format="24hr"
          full-width
          scrollable
          v-if="!displayDatePicker"
          v-model="time"
        />
      </v-row>
      <v-card-actions>
        <v-btn
          @click="handleDateChange(true)"
          color="cyan darken-4"
          text
          v-if="!displayDatePicker"
        >
          Back
        </v-btn>
        <v-spacer />
        <v-btn color="cyan darken-4" text @click="handleDialogChange(false)">
          Cancel
        </v-btn>
        <v-btn color="cyan darken-4" text @click="handleConfirm" v-if="!!date">
          Confirm
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import Vue from "vue";
import { isEqual } from "lodash";

export default Vue.extend({
  name: "TodoModal",
  props: {
    dialog: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      displayDatePicker: true,
      date: "",
      time: ""
    };
  },
  watch: {
    editedToDo: {
      deep: true,
      handler(oldValue, newValue) {
        if (isEqual(oldValue, newValue)) return;
        this.date = this.editedToDo?.date || "";
        this.time = this.editedToDo?.time || "";
      }
    }
  },
  computed: {
    editedToDo() {
      return this.$store.state.toDo.editedToDo;
    }
  },
  methods: {
    handleDateChange(e: boolean) {
      this.displayDatePicker = e;
    },
    handleDialogChange(e: boolean) {
      this.$store.dispatch("openDatetimeModal", e);
    },
    handleConfirm() {
      if (this.editedToDo.id) {
        this.$store.dispatch("updateToDoCard", {
          ...this.editedToDo,
          date: this.date,
          time: this.time
        });
      } else {
        this.$store.dispatch("addToDoCard", {
          date: this.date,
          time: this.time
        });
      }
      this.resetModal();
      this.handleDialogChange(false);
    },
    resetModal() {
      this.date = "";
      this.time = "";
      this.displayDatePicker = true;
    }
  }
});
</script>

<style lang="scss" scoped></style>
