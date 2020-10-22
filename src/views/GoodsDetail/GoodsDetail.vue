<!-- 物品详情页 -->
<template>
  <div class="goods-detail">
    <div class="detail-top">
      <div class="back">
        <div class="bgc">
          <i
            class="iconfont icon-zuojiantou"
            onclick="window.history.back()"
          ></i>
        </div>
      </div>
      <ul class="detail-nav">
        <li>商品</li>
        <li>详情</li>
        <li>评论</li>
      </ul>
      <div class="share">
        <div class="bgc">
          <i class="iconfont icon-share"></i>
        </div>
      </div>
    </div>
    <div class="detail-img">
      <!-- 这里用swipe插件 -->
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img :src="goodsdetail.goods_img" />
          </div>
          <div class="swiper-slide">
            <img :src="goodsdetail.goods_img" />
          </div>
          <div class="swiper-slide">
            <img :src="goodsdetail.goods_img" />
          </div>
          <div class="swiper-slide">
            <img :src="goodsdetail.goods_img" />
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
        <!-- Add Arrows -->
      </div>
    </div>
    <div class="detail-introduction">
      <p class="goods-price">{{ goodsdetail.shop_price }}</p>
      <p class="goods-title">{{ goodsdetail.goods_name }}</p>
      <div class="goods-sell-inventory">
        <div class="goods-sell">累计售量<span>8</span></div>
        <div class="goods-inventory">库存<span>1074</span></div>
      </div>
    </div>
    <div class="goods-show">
      <div class="detail" @click="changeTab" :class="{ active: TabFalg }">
        <h3>商品详情</h3>
      </div>
      <div class="SPEC" @click="changeTab" :class="{ active: !TabFalg }">
        <h3>规格参数</h3>
      </div>
    </div>
    <div class="show">
      <div class="goods-show-detail" v-if="TabFalg">
        <div v-html="goodsdetail.goods_desc"></div>
      </div>
      <div class="goods-show-SPEC" v-else>规格参数</div>
    </div>
    <div class="goods-detailTab">
      <div class="icon">
        <i class="iconfont icon-liaotian"></i>
        <span>客服</span>
      </div>
      <div class="icon shoucang">
        <i class="iconfont icon-shoucang1"></i>
        <span>收藏</span>
      </div>
      <div class="icon">
        <i class="iconfont icon-gouwuche"></i>
        <em>1</em>
        <span>购物车</span>
      </div>
      <div class="button addCart">加入购物车</div>
      <router-link to="/cart" tag="div" class="button buy"
        >立即购买</router-link
      >
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Swiper from "swiper"; //cnpm install swiper @4 --save
import "swiper/dist/css/swiper.css";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      TabFalg: true,
    };
  },
  methods: {
    changeTab() {
      this.TabFalg = !this.TabFalg;
    },
  },
  computed: {
    goodsdetail() {
      return this.$store.state.goodsDetails;
    },
  },
  mounted() {
    this.$store.dispatch("getGoodsDetail", {
      goods_id: this.$route.query.goods_id,
    });
    new Swiper(".swiper-container", {
      autoplay: true,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
      },
    });
    console.log(this);
  },
};
</script>
<style lang="less">
.goods-detail {
  width: 100%;
  height: 100%;
  position: relative;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  // overflow: hidden;
  .detail-top {
    width: 100%;
    height: 4.4rem;
    display: flex;
    position: fixed;
    z-index: 999;
    background-color: #fff;
    .back,
    .share {
      width: 20%;
      height: 4.4rem;
      line-height: 4.4rem;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      .bgc {
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 50%;
        background-color: rgba(41, 47, 54, 0.4);
        line-height: 2.5rem;
        i {
          color: #fff;
        }
      }
    }
    .detail-nav {
      width: 60%;
      display: flex;
      height: 4.4rem;
      li {
        width: 33.33%;
        height: 4.4rem;
        line-height: 4.4rem;
        text-align: center;
      }
    }
  }
  .detail-img {
    width: 100%;
    height: 37.5rem;
    .swiper-container {
      width: 100%;
      height: 37.5rem;
      img {
        width: 100%;
        height: 37.5rem;
      }
    }
  }
  .detail-introduction {
    width: 94%;
    padding-left: 3%;
    padding-right: 3%;
    .goods-price {
      width: 100%;
      height: 4.7rem;
      color: red;
      font-size: 1.8rem;
      line-height: 4.7rem;
      font-weight: bold;
      &::before {
        font-size: 1.2rem;
        content: "￥";
      }
    }
    .goods-title {
      width: 100%;
      height: 4.4rem;
      font-size: 15px;
      color: #333;
    }
    .goods-sell-inventory {
      width: 100%;
      height: 3rem;
      color: #999;
      font-size: 1.4rem;
      .goods-sell {
        float: left;
        margin-right: 30%;
      }
    }
  }
  .goods-show {
    width: 100%;
    display: flex;
    text-align: center;
    height: 4.4rem;
    line-height: 4.4rem;
    .detail,
    .SPEC {
      width: 50%;
      height: 4.4rem;
      h3 {
        width: 30%;
        margin: 0 auto;
      }
    }
  }
  .show {
    img {
      width: 100%;
    }
  }
  .goods-detailTab {
    width: 100%;
    height: 4.9rem;
    border-top: 1px solid #efefef;
    background: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 999;
    display: flex;
    div {
      font-size: 1.2rem;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: #666;
      i {
        font-size: 2rem;
      }
      em {
        position: absolute;
        right: 59%;
        top: 0.3rem;
        min-width: 1.4rem;
        height: 1.4rem;
        border-radius: 0.8rem;
        background: red;
        color: #fff;
        text-align: center;
        line-height: 1.4rem;
        font-style: normal;
        padding: 0.2rem;
      }
    }

    .shoucang {
      border-left: 1px solid #ccc;
      border-right: 1px #ccc solid;
    }
    .addCart {
      flex: 2;
      background: #f55;
      color: #fff;
      font-size: 1.4rem;
    }
    .buy {
      flex: 2;
      background: #ff976a;
      color: #fff;
      font-size: 1.4rem;
    }
  }
}
</style>