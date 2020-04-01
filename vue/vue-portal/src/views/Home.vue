<template>
  <div class="home">
    <Nav />
    <div class="content">
      <router-view/>
    </div>
    <div class="footer">
      <p style="color: #fff;text-align: center;line-height: 40px;">&copy;&nbsp;2016-2020&nbsp;NIT&dongz</p>
    </div>
  </div>
</template>

<script>
import Nav from '@/components/NaviTool.vue'
export default {
  name: 'home',
  components: {
    Nav
  }
}
</script>
<style lang="scss" scoped>
  .home,.content{
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
  }
  .footer{
    width: 100%;
    height: 40px;
    background-color: rgb(52, 61, 78);
    position: fixed;
    bottom: 0;
  }
</style>
