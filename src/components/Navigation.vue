<template>
  <nav class="c-nav">
    <router-link class to="/home">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18.828"
        height="18.828"
        viewBox="0 0 18.828 18.828"
      >
        <g id="Component_2_1" data-name="Component 2 – 1" transform="translate(1.414 1.414)">
          <line
            id="Line_5"
            data-name="Line 5"
            x1="16"
            y2="16"
            fill="none"
            :stroke="color"
            stroke-linecap="round"
            stroke-width="2"
          />
          <line
            id="Line_6"
            data-name="Line 6"
            x2="16"
            y2="16"
            fill="none"
            :stroke="color"
            stroke-linecap="round"
            stroke-width="2"
          />
        </g>
      </svg>
    </router-link>
  </nav>
</template>

<script>
// @ is an alias to /src
import Container from "@/components/layout/Container";
import Row from "@/components/layout/Row";
export default {
  name: "navigation",

  components: {
    Container,
    Row
  },
  data() {
    return {
      color: ""
    };
  },

  props: {},

  // Components are ready to get data.
  // # Action gets started with dispatch.
  created() {
    if (!localStorage.getItem("themeColor")) {
      const defaultColor = getComputedStyle(
        document.documentElement
      ).getPropertyValue("--theme-color");
      localStorage.setItem("themeColor", defaultColor.trim());
      this.color = test.trim();
    } else {
      this.color = localStorage.getItem("themeColor");
    }
  },

  // #2 State gets rendered and is callable with computed function thats calls the store.
  computed: {}
};
</script>

<style lang="scss">
</style>