<template>
  <v-footer color="cyan darken-4" padless app>
    <v-row justify="center" no-gutters>
      <v-col class="primary lighten-2 py-4 text-center white--text" cols="12">
        {{ currentDate }}
      </v-col>
    </v-row>
  </v-footer>
</template>

<script lang="ts">
import Vue from "vue";
import moment from "moment";

export default Vue.extend({
  name: "Footer",
  computed: {
    format() {
      return "MM/DD/YYYY";
    },
    currentDate() {
      return moment();
    }
  }
});
</script>

<style lang="scss" scoped></style>
