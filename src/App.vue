<template>
  <transition name="slide-right">
    <v-app>
      <NavBar />
      <v-content>
        <router-view />
      </v-content>
      <Footer />
    </v-app>
  </transition>
</template>

<script lang="ts">
import Vue from "vue";
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";

export default Vue.extend({
  name: "App",
  components: { NavBar, Footer },
  data() {
    return {
      datetimeModalOpen: false
    };
  },
  methods: {}
});
</script>
