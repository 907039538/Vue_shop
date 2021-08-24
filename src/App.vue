<template>
  <div id="app">
    <section class="content">
      <router-view></router-view>
      <FooterGuide v-show="$route.meta.showFooter"></FooterGuide>
    </section>
  </div>
</template>

<script>
import FooterGuide from "./components/FooterGuide/FooterGuide";

export default {
  name: "App",
  components: {
    FooterGuide,
  },
};
</script>

<style lang="less">
a {
  text-decoration: none;
}

</style>
