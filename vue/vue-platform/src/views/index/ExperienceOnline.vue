<template>
  <div class="experience-online">
    <Header :activeIndex="'4'" />
    <div class="content">
      <div class="phone">
        <!-- :style="{'background-image': 'url(' + phone +')'}" -->
        <div class="phone-border" >
          <img src="@/assets/static/img/index/experienceOnline/phone-1.png" alt="">
        </div>
        <iframe src="https://www.esmap.cn/sdk-demo/demo/weixindemo/" frameborder="0"></iframe>
      </div>
      <div class="message">
        <img src="@/assets/static/img/index/experienceOnline/wx-demo.png" />
        <p>&nbsp;&nbsp;<span id="door">传送门</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;扫描二维码，即可体验</p>
        <p class="message-info">智慧出行,方便快捷<br>室内个性化智能推荐,定制专属服务<br>高效,绽放城市未来生命力</p>
      </div>
      <div class="mode">
        <div><img src="@/assets/static/img/index/experienceOnline/navi.png" alt=""><span>支持智能路径规划</span></div>
        <div><img src="@/assets/static/img/index/experienceOnline/search.png" alt=""><span>支持商城周边，建筑搜索</span></div>
        <div><img src="@/assets/static/img/index/experienceOnline/marker.png" alt=""><span>支持语音导航</span></div>
      </div>
      <div class="img-iot">
        <img src="@/assets/static/img/index/experienceOnline/hardware1.jpg" alt="iot" width="300px">
      </div>
      
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/index/Header.vue";
import Footer from "@/components/index/Footer.vue";
export default {
  data() {
    return {
      phone: require("@/assets/static/img/index/experienceOnline/phone-1.png")
    };
  },
  components: {
    Header,
    Footer
  }
};
</script>

<style scoped lang="scss">
@media screen and (max-width: 1366px){
  .img-iot{
    display: none;
  }
  .phone-border{
    top: 0px !important;
  }
  .content iframe{
    margin-top: 34px !important;
  }
}

.experience-online{
  position: relative;
  width: 100%;
}
.content {
  position: relative;
  background-color: #f5f5f4;
  display: flex;
  div {
    flex: 1;
  }
}
.content iframe {
  background-repeat: no-repeat;
  width: 313px;
  height: 623px;
  margin: 67px 0 0 93px;
}
.phone-border {
  position: absolute;
  left: 83px;
  top: 33px;
  pointer-events: none;
  img{
    width: 330px;
  }
  z-index: 2;
}
.message {
  padding:170px 35px 0 77px;
  .message-info{
    margin-top: 95px;
    font-size: 18px;
    font-weight: bold;
  }
}
.mode {
  padding:170px 35px 0 77px;
}
.mode div {
  margin-bottom: 35px;
}
.mode span {
  margin-left: 15px;
  display: inline-block;
  height: 60px;
  line-height: 60px;
  overflow: hidden;
}
.img-iot{
  padding:170px 35px 0 77px;
  text-align: right;
}
.img-iot-2{
  /*
  position: absolute;
  top:516px;
  right: 0px;
  padding-right: 35px;
  */
  width: 600px;
  height: 281px;
}
#door {
  color: #fc7a75;
  font-size: 22px;
  font-weight: bolder;
}
</style>
