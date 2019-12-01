<template>
  <div class="settings">
    <container>
      <row>
        <navigation />
        <h1>{{$t("TITLE-SETTINGS")}}</h1>
        <h4>{{$t("LANGUAGE")}}</h4>

        <select @change="setLocale" name id v-model="$i18n.locale">
          <option value="en">English</option>
          <option value="nl">Nederlands</option>
          <option value="zh">Chinese bitches</option>
          <option value="rs">Russian</option>
        </select>

        <h4>{{$t("COLOR")}}</h4>
        <input type="color" @change="updateEditorColor(color, 'color_1', $event)" :value="color" />
      </row>
    </container>
  </div>
</template>

<script>
// @ is an alias to /src
import Container from "@/components/layout/Container";
import Row from "@/components/layout/Row";
import Navigation from "@/components/Navigation";
export default {
  name: "settings",

  components: {
    Container,
    Row,
    Navigation
  },

  data() {
    return {
      color: "#fcb800"
    };
  },

  methods: {
    updateEditorColor(object, property, e) {
      console.log(e.target.value);

      this.color = e.target.value;
      this.setThemeColor(e.target.value);
    },
    setLocale: function() {
      localStorage.setItem("locale", this.$i18n.locale);
    },
    setThemeColor: function(color) {
      console.log(color);
      localStorage.setItem("themeColor", color);
      document.documentElement.style.setProperty("--theme-color", color);
    }
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
.c-nav {
  display: flex;
  justify-content: flex-end;
}
</style>
