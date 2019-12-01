<template>
  <div class="clockHeader">
    <h1>{{ clock }}</h1>

    <div class="c-clockheader">
      <p class="c-clockheader__day">{{ $t(getDay) }} {{ getDayInMonth }} {{ $t(getMonth) }}</p>

      <div class="c-todoAmount">
        <router-link to="/todo" class="c-todoAmount_value">{{taskAmount}}</router-link>
      </div>
    </div>

    <p v-if="now.length !== 0">
      It's {{now[0].time.toTimeString()
      .split(" ")[0]
      .slice(0, -3)}} you need to {{now[0].title}}!
    </p>
  </div>
</template>

<script>
// @ is an alias to /src
import Container from "@/components/layout/Container";
import Row from "@/components/layout/Row";
import time from "../utils/time.js";

export default {
  name: "clockHeader",
  data() {
    return {
      timerId: 0,
      timerIdMinute: 1,
      seconds: time.getSeconds(),
      clock: this.changeClock(),
      taskAmount: 0,
      now: []
    };
  },

  mounted() {
    this.timerId = setInterval(() => {
      this.changeSeconds();
      this.changeClock();
    }, 1000);

    this.timerIdMinute = setInterval(() => {
      this.checkTodoNeed();
    }, 10000);
  },

  unmounted() {
    clearInterval(this.timerId);
    clearInterval(this.timerIdMinute);
  },

  methods: {
    checkTodoNeed: async function() {
      await this.$store.dispatch(
        "getItemById",
        new Date()
          .toTimeString()
          .split(" ")[0]
          .slice(0, -3)
      );
      this.getNowFromStore;
    },
    changeSeconds: function(event) {
      this.seconds = time.getSeconds();
    },
    changeClock: function(event) {
      this.clock = time.getClock();
    },
    changeAmount: async function(event) {
      await this.$store.dispatch("getItems");
      this.taskAmount = this.$store.state.amount;
    }
  },

  components: {
    Container,
    Row
  },

  props: {},

  // Components are ready to get data.
  // # Action gets started with dispatch.
  created() {
    this.clock = time.getClock();
    this.changeAmount();
  },

  // #2 State gets rendered and is callable with computed function thats calls the store.
  computed: {
    getNowFromStore: function() {
      this.now = this.$store.state.now;
      console.log(this.now);
    },
    getHour: function() {
      return time.getHours();
    },
    getMinutes: function() {
      return time.getMinutes();
    },
    getSeconds: function() {
      return time.getSeconds();
    },
    getDay: function() {
      return time.getDay();
    },
    getMonth: function() {
      return time.getMonth();
    },
    getDayInMonth: function() {
      return time.getDayInMonth();
    }
  }
};
</script>

<style lang="scss">
.c-todoAmount {
  all: unset;
  color: white;
}

.c-todoAmount {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 30px;
  background-color: var(--theme-color);
  margin-left: 0.7rem;
  color: white;
}
.c-clockheader {
  display: flex;
  justify-content: center;
  align-items: center;
}

.c-clockheader__day {
  margin-bottom: 0;
}
</style>
