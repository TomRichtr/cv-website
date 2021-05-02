<template>
  <v-footer color="cyan darken-4" padless app>
    <v-row justify="end" no-gutters>
      <div class="py-5 text-center white--text datetime-wrapper">
        {{ ` You got ${$store.state.toDo.overdueTasksCount} overdue tasks` }}
      </div>
      <v-spacer />
      <div class="py-3 text-center white--text">
        <v-btn
          :href="link"
          :key="i"
          :title="link"
          icon
          target="_blank"
          v-for="({ icon, link }, i) in links"
        >
          <v-icon class="white--text">{{ icon }}</v-icon>
        </v-btn>
      </div>
      <div class="py-5 text-center white--text datetime-wrapper">
        {{ dateTime }}
      </div>
    </v-row>
  </v-footer>
</template>

<script>
import Vue from "vue";
import moment from "moment";

export default Vue.extend({
  name: "Footer",
  data() {
    return {
      dateTime: "",
      overdueTasks: 0,
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
  },
  computed: {
    dateTimeFormat() {
      return `${this.$store.state.dateFormat} ${this.$store.state.timeFormat}:ss`;
    },
    overdueTodoCards() {
      const overdueCards = this.$store.state.toDo.toDoCards.filter(
        ({ overdue }) => !!overdue
      );
      return overdueCards.length;
    }
  },
  mounted() {
    this.updateDateTime();
  },
  methods: {
    updateDateTime() {
      setInterval(() => this.getDateTime(), 1000);
    },
    getDateTime() {
      this.dateTime = moment().format(this.dateTimeFormat);
      this.$store.dispatch("updateCurrentMils", Date.parse(new Date()));
    }
  }
});
</script>

<style lang="scss" scoped>
.datetime-wrapper {
  margin: 0 10px;
}
</style>
