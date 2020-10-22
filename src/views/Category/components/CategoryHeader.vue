<!--  -->
<template>
  <div class="category-header">
    <div class="category-search">
      <div class="back">
        <a href="javascript:;" onclick="window.history.back()">
          <i class="iconfont icon-zuojiantou"></i>
        </a>
      </div>
      <div class="search">
        <router-link to="/search"> <input type="search" /></router-link>
        <i class="iconfont icon-cx"></i>
      </div>
    </div>
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
};
</script>
<style lang="less">
.category-header {
  width: 100%;
  height: 4.4rem;
  border-bottom: 1px solid #efefef;
  background-color: #fff;
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  .category-search {
    display: flex;
    .back {
      width: 10%;
      height: 4.4rem;
      line-height: 4.4rem;
      text-align: center;
      i {
        font-size: 2rem;
      }
    }
    .search {
      width: 85%;
      height: 4.4rem;
      line-height: 4.4rem;
      position: relative;
      input {
        width: 95%;
        height: 3rem;
        border: 1px solid #aaa;
        border-radius: 1.5rem;
        text-indent: 14px;
      }
      i {
        position: absolute;
        width: 4.4rem;
        height: 4.4rem;
        line-height: 4.4rem;
        font-size: 2rem;
        right: 5px;
        color: #aaa;
      }
    }
  }
}
</style>
