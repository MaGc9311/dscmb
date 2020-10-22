<!--  -->
<template>
  <div class="cart-header">
    <div class="back">
      <i class="iconfont icon-zuojiantou" onclick="window.history.back()"></i>
    </div>
    <div class="cart-title">购物车</div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less">
.cart-header {
  width: 100%;
  height: 4.4rem;
  display: flex;
  position: fixed;
  z-index: 999;
  background-color: #fff;
  line-height: 4.4rem;
  border-bottom: 1px solid #ccc;
  .back {
    width: 20%;
    height: 4.4rem;
    line-height: 4.4rem;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .cart-title {
    width: 60%;
    text-align: center;
    font-size: 2rem;
  }
}
</style>