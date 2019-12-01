<template>
  <div class="c-clock">
    <span
      class="c-clock-seconds"
      v-bind:style="{transform: 'rotate(0'+ this.degrees.seconds + 'deg)' }"
    ></span>

    <span class="c-clock-center"></span>

    <span
      class="c-clock-minutes"
      v-bind:style="{transform: 'rotate(0'+ this.degrees.minutes + 'deg)' }"
    ></span>

    <span
      class="c-clock-hours"
      v-bind:style="{transform: 'rotate(0'+ this.degrees.hours + 'deg)' }"
    ></span>
  </div>
</template>

<script>
// @ is an alias to /src
import Container from "@/components/layout/Container";
import Row from "@/components/layout/Row";
import time from "../utils/time.js";
export default {
  name: "clock",

  components: {
    Container,
    Row
  },

  data() {
    return {
      timerId: 0,
      degrees: {
        seconds: 0,
        minutes: 0,
        hours: 0
      }
    };
  },
  mounted() {
    this.timerId = setInterval(() => {
      this.changeClock();
    }, 1000);
  },

  unmounted() {
    clearInterval(this.timerId);
  },

  props: {},

  // Components are ready to get data.
  // # Action gets started with dispatch.
  created() {
    this.changeClock();
  },

  // #2 State gets rendered and is callable with computed function thats calls the store.
  computed: {},
  methods: {
    changeClock: async function() {
      const degrees = time.getCurrentTime();
      // console.log(degrees);
      this.degrees.seconds = degrees.seconds;
      this.degrees.minutes = degrees.minutes;
      this.degrees.hours = degrees.hours; //console.log(this.time);
    }
  }
};
</script>

<style lang="scss">
.c-clock {
  position: relative;
  display: block;
  padding-bottom: 100%;
}
.c-seconds-container {
  height: 100%;
  transform: rotate(0deg);
  transform-origin: center center;
}
.c-seconds {
  height: 50%;
}
.c-clock-time {
  font-variant-numeric: tabular-nums;
}
.c-clock-seconds {
  position: absolute;
  display: block;
  bottom: calc(50% + 1.5px);
  left: calc(50% + 1.5px);
  background-color: var(--theme-color);
  height: 35%;
  width: 2px;
  transform-origin: center bottom;
}
.c-clock-minutes {
  position: absolute;
  display: block;
  bottom: calc(50% + 1.5px);
  left: calc(50% + 1.5px);
  background-color: black;
  height: 40%;
  width: 2px;
  transform-origin: center bottom;
  z-index: 10;
}
.c-clock-hours {
  position: absolute;
  display: block;
  bottom: calc(50% + 1.5px);
  left: calc(50% + 1.5px);
  background-color: black;
  height: 20%;
  width: 2px;
  transform-origin: center bottom;
  z-index: 10;
}
.c-clock-center {
  position: absolute;
  display: block;
  bottom: calc(50% - 6.5px);
  left: calc(50% - 2.5px);
  width: 13px;
  height: 13px;
  background-color: white;
  border: 2px solid var(--theme-color);
  border-radius: 50%;
  z-index: 100;
}

.c-clock-center::before {
  content: "";
  position: absolute;
  display: block;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  border: 2px solid var(--theme-color);
  border-radius: 50%;
  z-index: -1;
}
</style>