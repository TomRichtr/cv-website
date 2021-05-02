<template>
  <div class="navbar">
    <v-app-bar color="cyan darken-4" dense dark app>
      <v-app-bar-nav-icon @click="drawer = true" />

      <v-fab-transition>
        <v-btn
          color="red"
          class="add-button"
          fab
          dark
          small
          absolute
          bottom
          right
          v-if="displayAddButton"
          @click="handleAddItem"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-fab-transition>

      <v-toolbar-title>Apps</v-toolbar-title>
      <v-spacer />
      <v-menu left bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            class="list-item"
            v-for="({ label, icon }, i) in dropdownActions"
            :key="i"
          >
            <v-list-item-title> {{ label }}</v-list-item-title>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <NavBarDrawer :drawer="drawer" @drawer:change="drawer = $event" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { paths } from "@/router/index";
import NavBarDrawer from "@/components/NavBarDrawer.vue";

export default Vue.extend({
  name: "NavBar",
  components: { NavBarDrawer },
  data() {
    return {
      drawer: false,
      dropdownActions: [
        {
          label: "Log In",
          icon: "mdi-login"
        },
        {
          label: "Log Out",
          icon: "mdi-logout"
        }
      ],
      drawerActions: [
        {
          icon: "mdi-home",
          label: "Home",
          path: paths.home
        },
        {
          icon: "mdi-view-list-outline",
          label: "To do",
          path: paths.toDo
        },
        {
          icon: "mdi-shopping-outline",
          label: "To buy",
          path: paths.toBuy
        },
        {
          icon: "mdi-account",
          label: "Account",
          path: paths.account
        }
      ]
    };
  },
  computed: {
    displayAddButton() {
      return (
        this.$route.path === paths.toDo || this.$route.path === paths.toBuy
      );
    }
  },
  methods: {
    handleAddItem() {
      if (this.$route.path === paths.toDo) {
        this.$store.dispatch("resetEditedToDoCard");
        this.$store.dispatch("openDatetimeModal", true);
      }
    }
  }
});
</script>

<style lang="scss" scoped>
.list-item {
  display: flex;
  justify-content: space-between;
  width: 150px;
}
.add-button {
  margin-right: 40px;
}
.navbar {
  margin-bottom: 10px;
}
</style>
