<template>
  <div>
    <v-navigation-drawer
      :value="$props.drawer"
      @input="$emit('drawer:change', $event)"
      absolute
      temporary
    >
      <v-list nav dense>
        <v-list-item-group active-class="deep-purple--text text--accent-4">
          <v-list-item
            :key="i"
            @click="handleLink(path)"
            v-for="({ label, icon, path }, i) in drawerActions"
          >
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
import { paths } from "@/router/index";

export default Vue.extend({
  name: "NavBar",
  props: {
    drawer: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
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
  methods: {
    handleLink(path: string) {
      if (this.$route.path !== path) {
        this.$router.push(path);
      }
      this.$emit("drawer:change", false);
    }
  }
});
</script>

<style lang="scss" scoped></style>
