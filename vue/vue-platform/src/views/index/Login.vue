<template>
  <div id="login-page">
    <Header :activeIndex="'4'" />
    <el-card class="box-card" shadow="always" header>
      <template slot="header">
        <h2 class="login-title">平台登录</h2>
      </template>
      <el-form :model="loginData" :rules="loginRule" ref="loginData">
        <el-form-item prop="account">
          <el-input type="text" :placeholder="loginTip.account" v-model="loginData.account"></el-input>
        </el-form-item>
        <el-form-item prop="pwd">
          <el-input type="password" :placeholder="loginType.type?loginTip.code:loginTip.password"
            v-model="loginData.pwd"></el-input>
        </el-form-item>
        <el-form-item class="login-bottom">
          <el-button type="primary" class="login-btn" @click="login">登录</el-button>
          <span class="login-code" v-if="loginType.type">获取验证码</span>
          <span class="other-login" @click="changeLoginType">其他方式登录</span>
          <span class="register" @click="goRegister">平台注册</span>
        </el-form-item>
      </el-form>
    </el-card>
    <Footer />
  </div>
</template>
<script>
  import Header from "@/components/index/Header.vue";
  import Footer from "@/components/index/Footer.vue";
  export default {
    name: "",
    components: {
      Header,
      Footer
    },
    data() {
      return {
        loginData: {
          account: "",
          pwd: ""
        },
        loginTip: {
          account: "请输入手机号/Email",
          password: "请输入密码",
          code: "请输入验证码"
        },
        loginRule: {
          account: [{ required: true, message: "请输入手机号/Email", trigger: 'blur' }],
          pwd: [{ required: true, message: "请输入密码/验证码", trigger: 'blur' }]
        },
        loginType: {
          type: false//0-pwd,1-code
        }
      }
    },
    methods: {
      changeLoginType() {
        let _this = this
        _this.loginType.type = !_this.loginType.type
      },
      login() {
        this.$refs.loginData.validate(async valid => {
          //当都填入数据 valid为true
          if (!valid) return; //如果没有填入则不再执行以下代码
          //以下代码是发请求。。。
          console.log("登录")
          this.$router.push({ path: '/platform/home'})
        })
      },
      goRegister(){
        console.log("goregister")
        this.$router.push({ path: '/index/register'})
      }
    },
    created() { },
    mounted() { },
    computed: {},
    watch: {}
  };
</script>
<style scoped lang="scss">
  #login-page {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .box-card {
    width: 500px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .login-title {
    text-align: center;
  }
</style>
<style lang="scss">
  .login-bottom {
    .el-form-item__content {
      .login-btn {
        width: 150px;
      }

      display: flex;
      align-items: center;

      .other-login,
      .login-code,
      .register {
        margin-left: auto;
        cursor: pointer;
      }
    }
  }
</style>