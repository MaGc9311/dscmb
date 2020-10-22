<!-- 公共的轮播图组件 -->
<template>
  <div class="swipe">
    <!-- <mt-swipe :auto="2000">
      <mt-swipe-item>
        <img
          src="https://x.dscmall.cn/storage/data/gallery_album/177/original_img/177_P_1597978394783.jpg"
          alt=""
        />
      </mt-swipe-item>
      <mt-swipe-item>
        <img
          src="https://x.dscmall.cn/storage/data/gallery_album/177/original_img/177_P_1597978396430.jpg"
          alt=""
      /></mt-swipe-item>
      <mt-swipe-item>
        <img
          src="https://x.dscmall.cn/storage/data/gallery_album/177/original_img/177_P_1597978395241.jpg"
          alt=""
      /></mt-swipe-item>
      <mt-swipe-item>
        <img
          src="https://x.dscmall.cn/storage/data/gallery_album/177/original_img/177_P_1597978395260.jpg"
          alt=""
      /></mt-swipe-item>
      <mt-swipe-item>
        <img
          src="https://x.dscmall.cn/storage/data/gallery_album/177/original_img/177_P_1597978397105.jpg"
          alt=""
      /></mt-swipe-item>
    </mt-swipe> -->
    <!-- 
  :auto="2000" 间隔时间
  :show-indicators="true" 是否显示指示点
  :default-inddex="1" 初始化索引
  :continuos="true" 是否循环播放
  swipeDatas
 -->
    <mt-swipe :auto="2000">
      <mt-swipe-item v-for="swipe in swipeDatas" :key="swipe.swipe_id">
        <img :src="swipe.swipe_img" alt="" />
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>


<script>
export default {
  data() {
    return {};
  },
  methods: {},
  computed: {
    swipeDatas() {
      return this.$store.state.swipeDatas;
    },
  },
  mounted() {
    console.log(this.$store.dispatch("actGetSwipeDatas"));
    this.$stroe.dispatch("actGetSwipeDatas");
  },
};
</script>


<style lang="less">
.swipe {
  position: relative;
  width: 100%;
  height: 12rem;
  border-radius: 10px;
  img {
    width: 100%;
    height: 12rem;
    border-radius: 10px;
  }
}
</style>
