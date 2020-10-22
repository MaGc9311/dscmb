<!-- 首页-首页 -->
<template>
  <div class="home-index">
    <div class="swipe-wrap">
      <Swipe />
    </div>
    <QuickNav />
    <SwipeNews />
    <BackToSchool />
    <MiaoSha />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
// 引入组件
import Swipe from "@/components/Swipe.vue";
import QuickNav from "../components/QuickNav";
import SwipeNews from "../components/SwipeNews";
import BackToSchool from "../components/BackToSchool";
import MiaoSha from "../components/MiaoSha";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Swipe,
    QuickNav,
    SwipeNews,
    BackToSchool,
    MiaoSha,
  },
  data() {
    //这里存放数据
    return {};
  },
};
</script>
<style lang="less">
.swipe-wrap {
  margin: 0px 10px;
  div {
    border-radius: 10px !important;
  }
}
</style>
