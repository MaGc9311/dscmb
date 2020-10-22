<!--  -->
<template>
  <div class="person">
    <div class="login">
      <div class="back-index">
        <router-link
          class="iconfont icon-zuojiantou"
          tag="i"
          to="/home"
        ></router-link>
      </div>
      <div class="login-list">
        <form action="">
          <h2>用户登录</h2>
          <div class="user">
            <i class="iconfont icon-user"></i>
            <input
              type="text"
              placeholder="请输入您的用户名/手机号"
              v-model="user_name"
            />
          </div>
          <div class="user pwd">
            <i class="iconfont icon-pwd-lock"></i>
            <input
              :type="typeChange"
              placeholder="请输入登录密码"
              v-model="pass"
            />
            <i
              class="iconfont icon-liulan1"
              @click="changeColFn"
              ref="changeCol"
            ></i>
          </div>
          <div class="user captcha">
            <i class="iconfont icon-pic"></i>
            <input
              type="text"
              placeholder="请输入图片验证码"
              v-model="captcha"
            />
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

          <div class="res-forget">
            <router-link to="/register">新用户注册</router-link>
            <router-link to="/forget">忘记密码？</router-link>
          </div>
          <button @click="login">登录</button>
          <div class="msg">
            <router-link to="/loginMobile">短信验证码登录</router-link>
            <i class="iconfont icon-youjiantou1"></i>
          </div>
        </form>
      </div>
    </div>
    <!-- <Footer /> -->
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
// import Footer from "@/components/Footer"; //这里可以用@符号来代替../../，默认指向src目录
// import Register from "./components/Register";
import { Toast } from "mint-ui";
import { loginuser } from "@/api/login.js";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    // Footer,
  },
  data() {
    //这里存放数据
    return {
      flag: 1,
      typeChange: "password",
      user_name: "",
      pass: "",
      captcha: "",
    };
  },
  methods: {
    changeColFn() {
      //改变密码是否可见和图标颜色
      // console.log(this);
      // console.log(this.$refs.changeCol); //获取dom元素
      if (this.$refs.changeCol.style.color == "red") {
        this.$refs.changeCol.style.color = "#bdbdbd";
        this.typeChange = "password";
      } else {
        this.$refs.changeCol.style.color = "red";
        this.typeChange = "text";
      }
    },
    async login() {
      if (!this.user_name) {
        Toast("用户名/邮箱/手机号！");
        return;
      } else if (!this.pass) {
        Toast("请输入密码！");
        return;
      } else if (!this.captcha) {
        Toast("请输入验证码！");
        return;
      }

      //请求数据
      const result = await loginuser(this.user_name, this.pass, this.captcha);
      // console.log(result.data[0]);
      if (result.err_code == 0) {
        Toast({
          message: result.msg,
          position: "center",
          duration: 3000,
        });
      }
      if (result.status == 500) {
        Toast({
          message: result.msg,
          position: "center",
          duration: 3000,
        });
      }
      if (result.status == 200) {
        this.$store.dispatch("getUserInfo", result.data[0]);
        this.$router.push("/home");
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
.person {
  width: 100%;
  overflow: hidden;
  .login {
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
    .login-list {
      h2 {
        font-size: 3rem;
        font-weight: 400;
        color: #333;
      }
      .user {
        width: 100%;
        height: 4rem;
        margin-top: 3rem;
        position: relative;
        padding: 4px 0;
        i {
          position: absolute;
          font-size: 1.6rem;
          color: #ccc;
        }
        input {
          width: 93%;
          height: 2.6rem;
          border-bottom: 1px solid #ccc;
          text-indent: 2rem;
          font-size: 1.4rem;
          color: #666;
          padding-bottom: 0.6rem;
        }
      }
      .pwd {
        margin-top: 0rem;
        .icon-liulan1 {
          position: absolute;
          right: 3rem;
        }
      }
      .captcha {
        margin-top: 0rem;
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
      .res-forget {
        width: 93%;
        display: flex;
        justify-content: space-between;

        a {
          color: #4b89dc;
          font-size: 1.4rem;
        }
      }
      button {
        width: 93%;
        height: 4rem;
        margin-top: 20px;
        background-color: red;
        color: #fff;
        border-radius: 5px;
      }
      .msg {
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