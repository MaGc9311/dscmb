<!--  -->
<template>
  <div class="search">
    <div class="search-header">
      <div class="search-box">
        <div class="back">
          <a href="javascript:;" onclick="window.history.back()">
            <i class="iconfont icon-zuojiantou"></i>
          </a>
        </div>
        <div class="search-bar">
          <input type="search" placeholder="搜索商品" />
          <i class="iconfont icon-cx"></i>
          <button>搜索</button>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Footer from "@/components/Footer"; //这里可以用@符号来代替../../，默认指向src目录

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Footer,
  },
  data() {
    //这里存放数据
    return {};
  },
};
</script>
<style lang="less">
.search-header {
  width: 100%;
  height: 4.4rem;
  border-bottom: 1px solid #efefef;
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  .search-box {
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
    .search-bar {
      width: 80%;
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
      button {
        position: absolute;
        height: 4.4rem;
        width: 18%;
        text-align: center;
        background-color: #fff;
        font-size: 15px;
      }
    }
  }
}
</style>
