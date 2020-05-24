<template>
  <div id='register-page'>
    <Header :activeIndex="'4'" />
    <el-card class="box-card" shadow="always" header>
      <template slot="header">
        <h2 class="register-title">平台注册</h2>
      </template>
      <el-form :model="regData" label-width="100px" ref="regData" :rules="regRules">
        <el-form-item label="手机号" prop="phone">
          <el-input type="text" v-model="regData.phone" placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-form-item label="手机验证码" prop="code">
          <el-input type="text" v-model="regData.code" placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-form-item class="register-bottom">
          <el-button type="primary" class="getcode-btn">获取验证码</el-button>
          <el-button type="primary" class="register-btn">注册</el-button>
          <span class="login" @click="goLogin">平台登录</span>
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
    components: {
      Header,
      Footer
    },
    data() {
      return {
        regData: {
          phone: "",
          code: ""
        },
        regRules: {
          phone: [
            { required: true, message: "请输入手机号", trigger: 'blur' },
            { pattern: /^0{0,1}(13[0-9]|15[7-9]|153|156|18[7-9])[0-9]{8}$/, message: '手机号码非法', trigger: 'blur' }
          ],
          code: [
            { required: true, message: "请输入验证码", trigger: 'blur' },
            { pattern: /^\d{6}$/, message: '非法验证码', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      goLogin() {
        this.$router.push({ path: "/index/login" })
      }
    },
    created() {
    },
    mounted() {
    },
    computed: {
    },
    watch: {
    }
  }
</script>
<style scoped>
  .register-title {
    text-align: center;
  }

  .box-card {
    width: 500px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .register {
    margin-left: auto;
  }
</style>
<style lang="scss">
  .register-bottom {
    .el-form-item__content {
      display: flex;
      align-items: center;

      .login {
        margin-left: auto;
        cursor: pointer;
      }
    }
  }
</style>