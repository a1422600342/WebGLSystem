<template>
  <div id='person-info-page'>
    <Header />
    <el-card class="user-info-card">
      <div class="user-info-form">
        <el-form :model="userInfo" label-width="100px">
          <el-form-item label="手机号">
            <el-input type="text" v-model="userInfo.phone" disabled></el-input>
          </el-form-item>
          <el-form-item label="角色">
            <el-input type="text" v-model="userInfo.roleName" disabled></el-input>
          </el-form-item>
          <el-form-item label="Email">
            <el-input type="text" v-model="userInfo.email"></el-input>
          </el-form-item>
          <el-form-item label="昵称">
            <el-input type="text" v-model="userInfo.nickName"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input class="user-pwd" type="password" v-model="userInfo.password" disabled></el-input>
            <span class="change-pwd">修改密码</span>
          </el-form-item>
          <el-form-item>
            <el-table class="login-log" :data="loginLogData" stripe>
              <el-table-column prop="date" label="时间">
              </el-table-column>
              <el-table-column prop="address" label="地点">
              </el-table-column>
              <el-table-column prop="ip" label="IP">
              </el-table-column>
            </el-table>
          </el-form-item>
        </el-form>
      </div>
      <div class="user-info-image">
        <div class="img-box">
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" fit="contain"
            :size="100"></el-avatar>
        </div>
        <div class="commit-change">
          <el-button type="danger" plain="">提交修改</el-button>
        </div>
      </div>
    </el-card>
  </div>
</template>
<script>
  import Header from "@/components/home/Header.vue"
  export default {
    components: {
      Header
    },
    data() {
      return {
        userInfo: {
          phone: "13430167917",
          roleName: "超级管理员",
          email: "1422600342@qq.com",
          image: "",
          nickName: "dong",
          password: "123456"
        },
        loginLogData: [{
          date: '2020-05-02 10:11',
          address: '广州',
          ip: '116.22.180.184'
        }, {
          date: '2020-05-02 09:35',
          address: '广州',
          ip: '116.22.180.184'
        }, {
          date: '2020-05-01 20:11',
          address: '广州',
          ip: '116.22.180.184'
        }, {
          date: '2020-05-01 08:33',
          address: '广州',
          ip: '116.22.180.184'
        }]
      }
    },
    methods: {
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
  #person-info-page {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .user-info-card {
    width: 800px;
    position: absolute;
    top: 56%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .user-info-form {
    width: 530px;
  }

  .change-pwd {
    padding-left: 10px;
    cursor: pointer;
  }

  .user-info-image {
    flex: 1;
  }

  .img-box {
    width: 100px;
    height: 100px;
    position: relative;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
    cursor: pointer;
  }

  .commit-change {
    position: relative;
    top: 20%;
    left: 80%;
    transform: translateX(-50%);
  }
</style>
<style lang="scss">
  .user-pwd {
    width: 70%;
  }

  .user-info-card {
    .el-card__body {
      display: flex;
      padding: 20px 20px 0px;
    }
  }

  .login-log {
    width: 100%;
    .el-table__body-wrapper.is-scrolling-none {
      height: 110px !important;
      overflow-y: auto;
    }
  }


  div[class='el-table__body-wrapper is-scrolling-none']::-webkit-scrollbar {
    width: 0;
  }

  .slot::-webkit-scrollbar {
    width: 2px;
  }

  .slot::-webkit-scrollbar-thumb {
    border-radius: 2px;
    height: 50px;
    background: #eee;
  }

  .slot::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    border-radius: 2px;
    background: rgba(0, 0, 0, 0.4);
  }

  .el-table {
    height: 100%;
  }

  .el-table__body {
    width: 100% !important;
    height: 100%;
  }
</style>