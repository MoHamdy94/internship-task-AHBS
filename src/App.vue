<template>
  <div>
    <HeaderComp></HeaderComp>

    <router-view></router-view>
    <FooterComp></FooterComp>
  </div>
</template>

<script lang="ts">
import HeaderComp from "./shared/header/header-comp.vue";
import FooterComp from "./shared/footer/footer-comp.vue";

// All subcomponent titles will be injected into this template.
export default {
  name: "App",
  components: {
    HeaderComp,
    FooterComp
  }
};
</script>

<style>
/* styling form and grid in product page */
@import "@progress/kendo-theme-default/dist/all.css";
/* framework for styling */
@import "~bootstrap/dist/css/bootstrap.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}
</style>
