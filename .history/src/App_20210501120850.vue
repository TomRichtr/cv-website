<template>
  <transition name="slide-right">
    <v-app>
      <NavBar></NavBar>
      <Footer></Footer>
    </v-app>
  </transition>
</template>

<script lang="ts">
import Vue from "vue";
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";

export default Vue.extend({
  name: "App",
  components: { NavBar },

  data: () => ({
    //
  })
});
</script>
