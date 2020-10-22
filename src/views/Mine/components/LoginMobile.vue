<!--  -->
<template>
  <div class="loginMobile">
    <div class="loginMobile-con">
      <div class="back-index">
        <router-link
          class="iconfont icon-zuojiantou"
          tag="i"
          to="/mine"
        ></router-link>
      </div>
      <div class="loginMobile-list">
        <form action="">
          <h2>短信验证码登录</h2>
          <div class="new user-new">
            <i class="iconfont icon-pic"></i>
            <input type="text" placeholder="请输入图片验证码" v-model="code" />
            <div class="code">
              <img
                ref="codechange"
                src="http://localhost:3000/api/v1/users/captcha"
                alt=""
                @click="getCodeChange"
              />
            </div>
            <!-- src验证码地址 -->
          </div>
          <div class="new user-phone">
            <i class="iconfont icon-mobile"></i>
            <input
              type="tel"
              placeholder="请输入手机号"
              v-model="phoneNum"
              maxlength="11"
            />
            <div>
              <button v-if="!num" class="get-captcha" @click="getcodeFn">
                获取验证码
              </button>
              <button v-else class="get-captcha">已发送{{ num }}s</button>
            </div>
          </div>
          <div class="new user-captcha">
            <i class="iconfont icon-904anquansaoma"></i>
            <input type="text" placeholder="请输入短信验证码" />
          </div>

          <button class="loginMobile-now">立即登录</button>
          <div class="user-protocol">
            若您输入的手机号未注册，将会进入注册流程。注册即视为同意
            <a href="javascript:;">《用户协议》</a>
          </div>

          <div class="user-login">
            <router-link to="/mine">账号密码登录</router-link>
            <i class="iconfont icon-youjiantou1"></i>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

import { Toast } from "mint-ui";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      phoneNum: "",
      num: 0,
      timer: "",
      code: "",
    };
  },
  computed: {
    identifyPhoneNum() {
      return /^[1][3,5,6,7,8,9][0-9]{9}$/.test(this.phoneNum);
    },
  },
  methods: {
    getcodeFn() {
      if (this.identifyPhoneNum) {
        this.num = 60;
        Toast({
          message: "验证码已发送",
          position: "bottom",
          duration: 2500,
        });
        this.timer = setInterval(() => {
          this.num--;
          if (this.num == 0) {
            clearInterval(this.timer);
          }
        }, 1000);
      } else {
        Toast({
          message: "手机号码格式不正确",
          position: "bottom",
          duration: 2500,
        });
      }
    },

    getCodeChange() {
      this.$refs.codechange.src =
        "http://localhost:3000/api/v1/users/captcha?t=" + new Date().getTime();
    },
  },
  mounted() {
    this.$refs.codechange.src =
      "http://localhost:3000/api/v1/users/captcha?t=" + new Date().getTime();
  },
};
</script>
<style lang="less">
.loginMobile {
  width: 100%;
  overflow: hidden;
  .loginMobile-con {
    padding: 10px;
    width: 100%;
    .back-index {
      width: 100%;
      height: 5.1rem;
      margin-top: 10px;
      i {
        font-size: 2rem;
        color: #ccc;
      }
    }
    .loginMobile-list {
      h2 {
        font-size: 3rem;
        font-weight: 400;
        color: #333;
        margin-bottom: 3rem;
      }
      .new {
        width: 100%;
        height: 4rem;
        position: relative;
        padding: 4px 0;
        i {
          position: absolute;
          font-size: 1.6rem;
          color: #ccc;
          top: 1rem;
        }
        input {
          width: 93%;
          height: 2.6rem;
          border-bottom: 1px solid #ccc;
          text-indent: 2rem;
          font-size: 1.6rem;
          color: #666;
          padding-bottom: 0.6rem;
        }
        .get-captcha {
          background: transparent;
          position: absolute;
          right: 30px;
          top: 0px;
          border-left: 1px solid #ccc;
          height: 2.6rem;
          text-align: center;
          line-height: 2.6rem;
          width: 9rem;
          color: #666;
          font-size: 1.4rem;
        }
        .code {
          position: absolute;
          right: 30px;
          top: 0;
          width: 7rem;
          height: 3rem;
          // border: 1px solid #ccc;
          img {
            width: 7rem;
            height: 3rem;
          }
        }
      }
      .loginMobile-now {
        width: 93%;
        height: 4rem;
        background-color: #f00;
        color: #fff;
        border-radius: 5px;
        line-height: 4rem;
        margin-top: 10px;
      }
      .user-protocol {
        margin-top: 10px;
        width: 93%;
        font-size: 1.4rem;
        color: #888;
        a {
          color: #4b89dc;
        }
      }
      .user-login {
        width: 93%;
        margin-top: 35px;
        text-align: center;
        font-size: 1.4rem;
        a {
          color: #f92028;
        }
        i {
          color: #f92028;
          width: 1.4rem;
        }
      }
    }
  }
}
</style>