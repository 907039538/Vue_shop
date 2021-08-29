<template>
  <!--首页外卖-->
  <div class="on">
    <section class="msite">
      <!--首页头部-->
      <HeaderTop :title="address.name">
        <router-link class="header_search" slot="left" to="/search">
          <i class="iconfont icon-sousuo"></i>
        </router-link>
        <router-link class="header_login" slot="right" :to="userInfo._id?'/userinfo':'/login'" v-if="!userInfo._id">
          <span class="header_login_text">登录|注册</span>
        </router-link>
        <router-link class="header_login" slot="right" :to="userInfo._id?'/userinfo':'/profile'" v-else>
          <i class="iconfont icon-icon-1"></i>
        </router-link>
      </HeaderTop>
      <!--首页导航-->
      <nav class="msite_nav">
        <div class="swiper-container" v-if="categorys.length">
          <div class="swiper-wrapper">
            <div
              class="swiper-slide"
              v-for="(categorys, index) in categorysArr"
              :key="index"
            >
              <a
                href="javascript:"
                class="link_to_food"
                v-for="(c, index) in categorys"
                :key="index"
              >
                <div class="food_container">
                  <img :src="baseUrl + c.image_url" />
                </div>
                <span>{{ c.title }}</span>
              </a>
            </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>
        </div>
        <img src="./images/msite_back.svg" alt="back" v-else>
      </nav>
      <!--首页附近商家-->
      <div class="msite_shop_list">
        <div class="shop_header">
          <i class="iconfont icon-xuanxiang"></i>
          <span class="shop_header_title">附近商家</span>
        </div>
        <ShopList> </ShopList>
      </div>
    </section>
  </div>
</template>

<script>
import HeaderTop from "../../components/HeaderTop.vue";
import ShopList from "../../components/ShopList/ShopList.vue";
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
import { mapState } from "vuex";
export default {
  name: "MSite",
  data() {
    return {
      baseUrl: "https://fuss10.elemecdn.com",
    };
  },
  computed: {
    ...mapState(["categorys", "address",'userInfo']),
    categorysArr() {
      let minArr = [],
        categorys1 = [];
      this.categorys.forEach((c) => {
        if (minArr.length === 8) {
          minArr = [];
        }
        if (minArr.length === 0) {
          categorys1.push(minArr);
        }
        minArr.push(c);
      });
      return categorys1;
    },
  },
  watch: {
    categorysArr() {
      this.$nextTick(() => {
        new Swiper(".swiper-container", {
          // loop: true,
          // 如果需要分页器
          pagination: {
            el: ".swiper-pagination",
          },
        });
      });
    },
  },
  mounted() {
    this.$store.dispatch("getAddress");
    this.$store.dispatch("getFoodCategorys");
  },
  components: {
    HeaderTop,
    ShopList,
  },
};
</script>

<style >
#app .content > div > section.msite {
  width: 100%;
}
#app .content > div > section.msite .msite_nav {
  position: relative;
  margin-top: 45px;
  height: 200px;
  background: #fff;
}
#app .content > div > section.msite .msite_nav::before {
  content: "";
  position: absolute;
  z-index: 200;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1px;
  background-color: #e4e4e4;
  transform: scaleY(0.5);
}
#app .content > div > section.msite .msite_nav .swiper-container {
  width: 100%;
  height: 100%;
}
#app
  .content
  > div
  > section.msite
  .msite_nav
  .swiper-container
  .swiper-wrapper {
  width: 100%;
  height: 100%;
}
#app
  .content
  > div
  > section.msite
  .msite_nav
  .swiper-container
  .swiper-wrapper
  .swiper-slide {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
}
#app
  .content
  > div
  > section.msite
  .msite_nav
  .swiper-container
  .swiper-wrapper
  .swiper-slide
  .link_to_food {
  width: 25%;
}
#app
  .content
  > div
  > section.msite
  .msite_nav
  .swiper-container
  .swiper-wrapper
  .swiper-slide
  .link_to_food
  .food_container {
  display: block;
  width: 100%;
  text-align: center;
  padding-bottom: 10px;
  font-size: 0;
}
#app
  .content
  > div
  > section.msite
  .msite_nav
  .swiper-container
  .swiper-wrapper
  .swiper-slide
  .link_to_food
  .food_container
  img {
  display: inline-block;
  width: 50px;
  height: 50px;
}
#app
  .content
  > div
  > section.msite
  .msite_nav
  .swiper-container
  .swiper-wrapper
  .swiper-slide
  .link_to_food
  span {
  display: block;
  width: 100%;
  text-align: center;
  font-size: 13px;
  color: #666;
}
#app
  .content
  > div
  > section.msite
  .msite_nav
  .swiper-container
  .swiper-pagination
  > span.swiper-pagination-bullet-active {
  background: #02a774;
}
#app .content > div > section.msite .msite_shop_list {
  position: relative;
  margin-top: 10px;
  background: #fff;
}
#app .content > div > section.msite .msite_shop_list::before {
  content: "";
  position: absolute;
  z-index: 200;
  left: 0;
  top: 0;
  width: 100%;
  height: 1px;
  background-color: #e4e4e4;
}
#app .content > div > section.msite .msite_shop_list .shop_header {
  padding: 10px 10px 0;
}
#app .content > div > section.msite .msite_shop_list .shop_header .shop_icon {
  margin-left: 5px;
  color: #999;
}
#app
  .content
  > div
  > section.msite
  .msite_shop_list
  .shop_header
  .shop_header_title {
  color: #999;
  font-size: 14px;
  line-height: 20px;
}
</style> 