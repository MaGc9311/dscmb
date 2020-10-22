<!--  -->
<template>
  <div class="swipeNews">
    <div class="swipe-news">
      <div class="news-title">
        <img
          src="https://x.dscmall.cn/storage/data/gallery_album/177/original_img/177_P_1597978466633.png"
          alt=""
        />
      </div>
      <ul class="news-list" ref="news">
        <li v-for="list in newsListDatas" :key="list.id">{{ list.title }}</li>
      </ul>
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
    return {
      newsListDatas: [
        {
          id: 1,
          title: "新闻01",
        },
        {
          id: 2,
          title: "新闻02",
        },
        {
          id: 3,
          title: "新闻03",
        },
        {
          id: 4,
          title: "新闻04",
        },
        {
          id: 5,
          title: "新闻05",
        },
      ],
      timer: "",
    };
  },
  methods: {
    scrollNews() {
      var oUl = this.$refs.news; //获取ul节点
      oUl.style.marginTop = "-5rem";
      var that = this; //由于使用了定时器，定时器中的this指向window，所以用that代指this
      setTimeout(function () {
        that.newsListDatas.push(that.newsListDatas[0]);
        that.newsListDatas.shift();
        oUl.style.marginTop = "0";
      }, 500);
    },
  },
  mounted() {
    // console.log(this.$refs.news);
    this.timer = setInterval(() => {
      this.scrollNews();
    }, 2500);
  },
  destroyed() {
    clearInterval(this.timer);
  },
};
</script>
<style lang="less">
.swipeNews {
  width: 95%;
  display: flex;
  justify-content: center;
  margin: 0 10px;
  .swipe-news {
    display: flex;
    width: 100%;
    height: 5rem;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    overflow: hidden;
    .news-title {
      img {
        height: 3rem;
        margin-top: 1rem;
      }
    }
    .news-list {
      margin-left: 2rem;
      transition: all 0.3s; //过度没有生效
      li {
        height: 5rem;
        line-height: 5rem;
        font-size: 1.4rem;
      }
    }
  }
}
</style>
