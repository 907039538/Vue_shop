<template>
  <div class="star" :class="'star-'+size">
    <span class="star-item " v-for="cla,index in starclasses" :key="index" :class="cla"></span>
  </div>
</template>

<script>
export default {
    name:'Stars',
    props:['rating','size'],
    computed:{
        starclasses(){
            const arr = []
            const CLASS1 = 'on'
            const CLASS2 = 'half'
            const CLASS3 = 'off'
            // 判断有几个on类
            for(let i = 1; i<=Math.floor(this.rating);i++){
                arr.push(CLASS1)
            }
            // 判断有无half类
            // 相减乘10,去除精度
            if(this.rating*10-Math.floor(this.rating)*10>=5){
                arr.push(CLASS2)
            }
            // 剩余位置填充off类
            while(arr.length<5){
                arr.push(CLASS3)
            }
            return arr
        }
    }
};
</script>

<style>
#app
  .content
  > div
  > section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_right
  .shop_rating_order
  .shop_rating_order_left
  .star {
  float: left;
  font-size: 0;
}
#app
  .content
  > div
  > section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_right
  .shop_rating_order
  .shop_rating_order_left
  .star
  .star-item {
  display: inline-block;
  background-repeat: no-repeat;
}
#app
  .content
  > div
  > section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_right
  .shop_rating_order
  .shop_rating_order_left
  .star.star-48
  .star-item {
  width: 20px;
  height: 20px;
  margin-right: 22px;
  background-size: 20px 20px;
}
#app
  .content
  > div
  > section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_right
  .shop_rating_order
  .shop_rating_order_left
  .star.star-48
  .star-item:last-child {
  margin-right: 0;
}
#app
  .content
  > div
  > section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_right
  .shop_rating_order
  .shop_rating_order_left
  .star.star-48
  .star-item.on {
  background-image: url("./images/star48_on@2x.png");
}
@media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
  #app
    .content
    > div
    > section.msite
    .msite_shop_list
    .shop_container
    .shop_list
    .shop_li
    > a
    .shop_right
    .shop_rating_order
    .shop_rating_order_left
    .star.star-48
    .star-item.on {
    background-image: url("./images/star48_on@3x.png");
  }
}
#app
  .content
  > div
  > section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_right
  .shop_rating_order
  .shop_rating_order_left
  .star.star-48
  .star-item.half {
  background-image: url("./images/star48_half@2x.png");
}
@media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
  #app
    .content
    > div
    > section.msite
    .msite_shop_list
    .shop_container
    .shop_list
    .shop_li
    > a
    .shop_right
    .shop_rating_order
    .shop_rating_order_left
    .star.star-48
    .star-item.half {
    background-image: url("./images/star48_half@3x.png");
  }
}
#app
  .content
  > div
  > section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_right
  .shop_rating_order
  .shop_rating_order_left
  .star.star-48
  .star-item.off {
  background-image: url("./images/star48_off@2x.png");
}
@media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
  #app
    .content
    > div
    > section.msite
    .msite_shop_list
    .shop_container
    .shop_list
    .shop_li
    > a
    .shop_right
    .shop_rating_order
    .shop_rating_order_left
    .star.star-48
    .star-item.off {
    background-image: url("./images/star48_off@3x.png");
  }
}
#app
  .content
  > div
  > section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_right
  .shop_rating_order
  .shop_rating_order_left
  .star.star-36
  .star-item {
  width: 15px;
  height: 15px;
  margin-right: 6px;
  background-size: 15px 15px;
}
#app
  .content
  > div
  > section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_right
  .shop_rating_order
  .shop_rating_order_left
  .star.star-36
  .star-item:last-child {
  margin-right: 0;
}
#app
  .content
  > div
  > section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_right
  .shop_rating_order
  .shop_rating_order_left
  .star.star-36
  .star-item.on {
  background-image: url("./images/star36_on@2x.png");
}
@media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
  #app
    .content
    > div
    > section.msite
    .msite_shop_list
    .shop_container
    .shop_list
    .shop_li
    > a
    .shop_right
    .shop_rating_order
    .shop_rating_order_left
    .star.star-36
    .star-item.on {
    background-image: url("./images/star36_on@3x.png");
  }
}
#app
  .content
  > div
  > section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_right
  .shop_rating_order
  .shop_rating_order_left
  .star.star-36
  .star-item.half {
  background-image: url("./images/star36_half@2x.png");
}
@media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
  #app
    .content
    > div
    > section.msite
    .msite_shop_list
    .shop_container
    .shop_list
    .shop_li
    > a
    .shop_right
    .shop_rating_order
    .shop_rating_order_left
    .star.star-36
    .star-item.half {
    background-image: url("./images/star36_half@3x.png");
  }
}
#app
  .content
  > div
  > section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_right
  .shop_rating_order
  .shop_rating_order_left
  .star.star-36
  .star-item.off {
  background-image: url("./images/star36_off@2x.png");
}
@media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
  #app
    .content
    > div
    > section.msite
    .msite_shop_list
    .shop_container
    .shop_list
    .shop_li
    > a
    .shop_right
    .shop_rating_order
    .shop_rating_order_left
    .star.star-36
    .star-item.off {
    background-image: url("./images/star36_off@3x.png");
  }
}
#app
  .content
  > div
  > section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_right
  .shop_rating_order
  .shop_rating_order_left
  .star.star-24
  .star-item {
  width: 10px;
  height: 10px;
  margin-right: 3px;
  background-size: 10px 10px;
}
#app
  .content
  > div
  > section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_right
  .shop_rating_order
  .shop_rating_order_left
  .star.star-24
  .star-item:last-child {
  margin-right: 0;
}
#app
  .content
  > div
  > section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_right
  .shop_rating_order
  .shop_rating_order_left
  .star.star-24
  .star-item.on {
  background-image: url("./images/star24_on@2x.png");
}
@media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
  #app
    .content
    > div
    > section.msite
    .msite_shop_list
    .shop_container
    .shop_list
    .shop_li
    > a
    .shop_right
    .shop_rating_order
    .shop_rating_order_left
    .star.star-24
    .star-item.on {
    background-image: url("./images/star24_on@3x.png");
  }
}
#app
  .content
  > div
  > section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_right
  .shop_rating_order
  .shop_rating_order_left
  .star.star-24
  .star-item.half {
  background-image: url("./images/star24_half@2x.png");
}
@media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
  #app
    .content
    > div
    > section.msite
    .msite_shop_list
    .shop_container
    .shop_list
    .shop_li
    > a
    .shop_right
    .shop_rating_order
    .shop_rating_order_left
    .star.star-24
    .star-item.half {
    background-image: url("./images/star24_half@3x.png");
  }
}
#app
  .content
  > div
  > section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_right
  .shop_rating_order
  .shop_rating_order_left
  .star.star-24
  .star-item.off {
  background-image: url("./images/star24_off@2x.png");
}
@media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
  #app
    .content
    > div
    > section.msite
    .msite_shop_list
    .shop_container
    .shop_list
    .shop_li
    > a
    .shop_right
    .shop_rating_order
    .shop_rating_order_left
    .star.star-24
    .star-item.off {
    background-image: url("./images/star24_off@3x.png");
  }
}
</style>