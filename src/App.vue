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
import {mapActions} from 'vuex'
export default {
  name: "App",
  components: {
    FooterGuide,
  },
  mounted(){
    this.getUserInfo()
  },
  methods: {
    ...mapActions(['getUserInfo'])
  },
};
</script>

<style lang="less">
a {
  text-decoration: none;
}
</style>
