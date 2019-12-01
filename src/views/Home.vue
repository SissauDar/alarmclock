<template>
  <div class="home">
    <container class="u-max-width-sm">
      <row class="center">
        <ClockHeader />
        <Clock />
        <p>{{ $t("EMPTY-MESSAGE") }}</p>
      </row>
    </container>
  </div>
</template>

<script>
// @ is an alias to /src
import Container from "@/components/layout/Container";
import Row from "@/components/layout/Row";
import ClockHeader from "@/components/ClockHeader";
import Clock from "@/components/Clock";
export default {
  name: "home",

  components: {
    Container,
    Row,
    ClockHeader,
    Clock
  },

  props: {},

  // Components are ready to get data.
  // # Action gets started with dispatch.
  created() {},

  // #2 State gets rendered and is callable with computed function thats calls the store.
  computed: {}
};
</script>

<style lang="scss">
.center {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
