<!--  -->
<template>
  <div class="miaosha">
    <div class="ms">
      <img
        src="https://x.dscmall.cn/storage/data/gallery_album/177/original_img/177_P_1597978468241.png"
        alt=""
      />
      <div>
        距结束还剩: <span class="red">{{ hh }}</span
        >: <span class="red">{{ mm }}</span
        >: <span class="red">{{ ss }}</span>
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
    return { hh: "00", mm: "00", ss: "00", timer: "" };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    timeFn() {
      //获取当前时间
      var date = new Date();
      var nowTime = date.getTime();
      //设置截止时间
      var endDate = new Date("2020-10-6 12:00:00");
      var endTime = endDate.getTime();
      //获取时间差
      var oTime = endTime - nowTime;
      if (oTime > 0) {
        this.hh = Math.floor((oTime / 1000 / 60 / 60) % 24); // 时
        this.mm = Math.floor((oTime / 1000 / 60) % 60); //分
        this.ss = Math.floor((oTime / 1000) % 60); //秒
        console.log(endTime);
      } else {
        endDate = endDate.setDate(endDate.getDate() + 1);
        endDate = new Date(endDate);
      }
    },
  },
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.timer = setInterval(this.timeFn, 1000);
  },
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less">
.miaosha {
  height: 37rem;
  display: flex;
  justify-content: center;
  .ms {
    width: 95%;
    height: 5.6rem;
    display: flex;
    justify-content: space-between;

    img {
      width: 10rem;
      height: 2.2rem;
    }
    div {
      font-size: 1.2rem;
      .red {
        padding: 0.3rem 0.5rem;
        background-image: linear-gradient(-88deg, #ff4f2e, #f91f28);
        border-radius: 0.5rem;
        color: #fff;
      }
    }
  }
}
</style>
