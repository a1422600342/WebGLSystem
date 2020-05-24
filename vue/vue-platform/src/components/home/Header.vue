<template>
  <div id='platform-header'>
    <div class="nav">
      <div class="hd img"><img src="@/assets/logo.png" alt="" width="32" height="32"></div>
      <div class="hd title" @click="goHome">智慧监控平台&nbsp;v1.0.0</div>
      <div class="hd search">
        <el-input placeholder="Search" prefix-icon="el-icon-search" v-model="search"></el-input>
      </div>
      <div class="hd user">
        <el-dropdown class="">
          <span class="user-info">
            <el-avatar class="" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png">
            </el-avatar>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <div @click="goUserInfo">个人信息</div>
            </el-dropdown-item>
            <el-dropdown-item>
              <div @click="logout">注销&nbsp;/&nbsp;退出系统</div>
            </el-dropdown-item>
            <el-dropdown-item disabled>上次登录时间</el-dropdown-item>
            <el-dropdown-item disabled>2020-04-09 16:57:55</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>

    </div>
    <div class="nav-link" v-if="place">
      <p>所在位置: &nbsp; {{place}}</p>
    </div>
  </div>
</template>
<script>
  export default {
    name: '',
    components: {
    },
    props:{
      place: {
        type: String,
        default: ()=>{
          return undefined
        }
      }
    },
    data() {
      return {
        search: ""
      }
    },
    methods: {
      logout() {
        console.log("退出系统")
        this.$router.push({ path: "/" })
      },
      goUserInfo() {
        console.log("访问个人信息")
        this.$router.push({ path: "/platform/userInfo" })
      },
      goHome() {
        console.log("返回主页")
        this.$router.push({ path: "/platform/home" })
      }
    },
    created() {
    },
    mounted() {
    },
    computed: {
    },
    watch: {
      '$route'(to, from) {
        this.$router.go(0);
      }
    }
  }
</script>
<style scoped>
  .nav {
    display: flex;
    padding: 5px 20px;
    background-color: rgb(52, 61, 78);
  }

  .hd {
    line-height: 52px;
    position: relative;
  }

  .search {
    width: 300px;
  }

  .img {
    width: auto;
  }

  .img>img {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  .title {
    padding-left: 52px;
    margin-right: auto;
    line-height: 52px;
    color: white;
    cursor: pointer;
  }

  .user {
    margin-left: auto;
  }

  .nav-link {
    border-bottom: 1px solid #c5c5c5;
    padding: 10px 20px;
    color: #c5c5c5;
    font-size: 13px;
  }
</style>

<style lang="scss">
  .el-dropdown {
    height: 40px;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }
</style>