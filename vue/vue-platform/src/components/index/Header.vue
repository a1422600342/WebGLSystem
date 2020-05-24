<template>
  <div class="nav">
    <!--<img id="logo" src="@/assets/elephant.png">-->
    <el-menu router :default-active="$route.path" class="el-menu" mode="horizontal" @select="handleSelect" background-color="#343D4E" text-color="#F0FFFF" active-text-color="#F8F8FF">
      <el-menu-item index="/index/welcome">首页</el-menu-item>
      <el-submenu index="/guide">
        <template slot="title">指南</template>
        <el-menu-item index="#?p=1">应用背景</el-menu-item>
        <el-menu-item index="#?p=2">使用指南</el-menu-item>
      </el-submenu>
      <el-menu-item index="/index/visual">三维可视化</el-menu-item>
      <el-menu-item index="/index/experience-online">在线体验</el-menu-item>
      <el-menu-item index="#?p=3">关于</el-menu-item>
      <el-menu-item index="/index/login">登录</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import {print} from '@/config/log.js'
export default {
  data() {
    return {};
  },
  props: ["activeIndex"],
  methods: {
    handleSelect(key, keyPath) {
        print(key,keyPath)
    }
  }
};
</script>

<style scoped lang="scss">
.nav {
  background-color: rgb(52, 61, 78);
  position: relative;
  text-align: center;
}
a {
  text-decoration: none;
}
.el-menu {
  display: inline-block;
  margin: 0 auto;
}
.el-menu-item {
  font-size: 15px;
  font-family: 微软雅黑;
}
#logo {
  position: absolute;
  top: 12px;
  left: 50px;
  width: 45px;
  z-index: 2;
}
.link {
  display: inline-block;
}
</style>
<style lang="scss">
.el-menu.el-menu--horizontal {
  border: none;
}
</style>
