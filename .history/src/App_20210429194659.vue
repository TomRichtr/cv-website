<template>
  <v-app>
    <NavBar></NavBar>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import NavBar from "./components/NavBar";

export default Vue.extend({
  name: "App",
  components: { NavBar },

  data: () => ({
    //
  })
});
</script>
