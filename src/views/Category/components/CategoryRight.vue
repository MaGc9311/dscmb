<!--  -->
<template>
  <div class="category-right">
    <div class="img-ad">
      <img :src="ad" alt="" />
    </div>
    <div
      class="category-r-chufangdianqi"
      v-for="lists in categoryRightDatas"
      :key="lists.cat_id"
    >
      <p>
        -<span>{{ lists.cat_name }}</span
        >-
      </p>
      <ul class="category-r-list">
        <li v-for="list in lists.child" :key="list.cat_id">
          <router-link :to="'/listdetail?cat_id=' + list.cat_id">
            <img
              src="https://x.dscmall.cn/storage/images/202008/thumb_img/1153_thumb_G_1598580446008.jpg"
              alt=""
            />
            <p>{{ list.cat_name }}</p>
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
      categoryRightDatas: [],
      ad: [],
    };
  },
  methods: {
    getcategoryRightDatas(cid) {
      Axios.get(`/api/v1/category/categorylist/${cid}`).then((res) => {
        console.log(res);
        if (res.status == 200) {
          this.categoryRightDatas = res.data.data;
          var arr = this.$store.state.categoryDatas.filter((item) => {
            return item.category_id == cid;
          });
          this.ad = arr[0].menu_img;
        }
      });
    },
  },
  watch: {
    $route(to) {
      // console.log(to); //打印出路由的对象，包含了路由的一些信息
      let cid = to.params.cid;
      // console.log(cid);
      this.getcategoryRightDatas(cid);
      var arr = this.$store.state.categoryDatas.filter((item) => {
        return item.category_id == cid;
      });
      this.ad = arr[0].menu_img;
    },
  },
  mounted() {
    // console.log(this);
    this.getcategoryRightDatas("858");
  },
};
</script>
<style lang="less">
.category-right {
  width: 80%;
  height: 100%;
  overflow-y: scroll;
  .img-ad {
    margin-top: 10px;
    width: 100%;
    height: 9.6rem;
    text-align: center;
    line-height: 9.6rem;
    img {
      width: 90%;
      height: 9.6rem;
    }
  }
  .category-r-chufangdianqi {
    width: 100%;
    margin: 1rem 0;
    text-align: center;
    p {
      font-size: 1.4rem;
      color: #666;
    }
    .category-r-list {
      width: 100%;
      height: 100%;
      display: flex;
      flex-wrap: wrap;
      text-align: center;
      margin-top: 1rem;

      li {
        width: 33%;
        height: 8.2rem;
        margin-bottom: 1rem;
        img {
          width: 5.2rem;
          height: 5.2rem;
        }
        p {
          height: 3rem;
          line-height: 3rem;
        }
      }
    }
  }
}
</style>
