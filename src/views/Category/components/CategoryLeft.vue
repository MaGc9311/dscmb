<!--  -->
<template>
  <div class="category-left">
    <div class="nav">
      <ul class="nav-list">
        <!-- <li  方法一使左侧标签变红
          :class="{ active: is_active == index }"
          v-for="(list, index) in categoryDatas"
          :key="list.category_id"
          @click="changeTab(index)"
        >
          {{ list.menu_name }}
        </li> -->
        <li
          v-for="list in this.$store.state.categoryDatas"
          :key="list.category_id"
        >
          <router-link :to="'/category/' + list.category_id">
            {{ list.menu_name }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Axios from "axios";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      is_active: 0,
    };
  },
  methods: {
    getcategoryDatas() {
      //接口地址：http://114.215.173.225:3000/api/v1/category
      Axios.get("/api/v1/category").then((res) => {
        console.log(res);
        // console.log(res.data.data);
        if (res.data.status == 200) {
          this.$store.dispatch("actgetcategoryDatas", res.data.data);
        }
      });
    },
    changeTab(index) {
      this.is_active = index;
    },
  },
  mounted() {
    this.getcategoryDatas();
  },
};
</script>
<style lang="less">
.category-left {
  width: 20%;
  height: 100%;
  border-right: 1px solid #efefef;
  .nav {
    height: 100%;
    .nav-list {
      width: 100%;
      height: 100%;
      text-align: center;
      overflow-y: scroll;
      li {
        height: 3.8rem;
        line-height: 3.8rem;
        font-size: 1.4rem;
      }
      .active {
        background-color: #efefef;
        color: red;
      }
    }
  }
}
</style>
