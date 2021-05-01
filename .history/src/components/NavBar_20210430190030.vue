<template>
  <div>
    <v-app-bar color="cyan darken-4" dense dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>Apps</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        v-for="({ icon, link }, i) in links"
        icon
        :href="link"
        target="_blank"
        :key="i"
      >
        <v-icon>{{ icon }}</v-icon>
      </v-btn>
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
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item v-for="({ label, icon }, i) in drawerActions" :key="i">
            <v-list-item-icon>
              <v-icon>{{ icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ label }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "NavBar",
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
          label: "Home"
        },
        {
          icon: "mdi-view-list-outline",
          label: "To do"
        },
        {
          icon: "mdi-shopping-outline",
          label: "To buy"
        },
        {
          icon: "mdi-account",
          label: "Account"
        }
      ],
      links: [
        {
          link: "https://www.linkedin.com/in/trichtr/",
          icon: "mdi-linkedin"
        },
        {
          link: "https://github.com/TomRichtr",
          icon: "mdi-github"
        }
      ]
    };
  }
});
</script>


<style lang="scss" scoped>

</style>