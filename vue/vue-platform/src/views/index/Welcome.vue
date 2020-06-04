<template>
  <div class="welcome">
    <Header :activeIndex="'1'" />
    <div class="slider-box">
      <Slider animation="fade" v-model="sliderValue" height="300px" :speed="500" :interval="3000">
        <SliderItem v-for="(i, index) in sliderList" :key="index" @click="changeIndex(1);" :style="i.style">
          <p class="nav-content">{{i.content}}</p>
        </SliderItem>
      </Slider>
    </div>
    <div class="welcome-content">
      <div class="top-shop">
        <h2>热门旺铺排行</h2>
        <TopShopTable :tableData="topShop.tableData" :tableColumns="topShop.tableColumns" />
      </div>
      <div>
        <img class="hardware-img" src="@/assets/static/img/index/welcome/hardware.jpg" alt="人工智能">
      </div>
      <div class="welcome-info">
        <p>万物互联、全面信息化、人工智能的时代，物理世界在信息空间的可视、分析需求巨大，城市、园区、楼宇的数字化转型是必然趋势</p>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/index/Header.vue";
import Footer from "@/components/index/Footer.vue";
import TopShopTable from "@/components/index/TopShopTable.vue";
import { Slider, SliderItem } from "vue-easy-slider";

export default {
  data() {
    return {
      sliderList: [],
      sliderValue: 2,
      topShop: {
        tableData: [
        { name: "爱果果", shopType: "销售业务", location: "1层 0410空间", time: "10点-22点", businessMan: "赵六" },
          { name: "Nike", shopType: "品牌业务", location: "2层 0507空间", time: "10点-22点", businessMan: "孙琪" },
          { name: "Adidas", shopType: "品牌业务", location: "2层 0508空间", time: "10点-22点", businessMan: "周八" },
          { name: "星巴克", shopType: "餐饮业务", location: "1层 0411空间", time: "10点-22点", businessMan: "吴九" }
        ],
        tableColumns: [
          { prop: "name", label: "名称" },
          { prop: "location", label: "位置" },
          { prop: "time", label: "营业时间" }
        ]
      }
    };
  },
  components: {
    Slider,
    SliderItem,
    Header,
    Footer,
    TopShopTable
  },
  methods: {
    changeIndex(index) {
      this.sliderValue = index;
    }
  },
  mounted() {
    setTimeout(
      () =>
        (this.sliderList = [
          {
            style: {
              backgroundColor: "#343d4e",
              width: "100%",
              height: "100%",
              backgroundImage: "url('static/img/banner1.gif')",
              backgroundRepeat: "no-repeat",
              backgroundPositionX: "75%",
              backgroundPositionY: "50%",
              position: "relative"
            },
            content: "WebGL虚拟化场景"
          },
          {
            style: {
              backgroundColor: "#343d4e",
              width: "100%",
              height: "100%",
              backgroundImage: "url('static/img/banner2.gif')",
              backgroundRepeat: "no-repeat",
              backgroundPositionX: "75%",
              backgroundPositionY: "50%",
              position: "relative"
            },
            content: "智慧楼宇,您的生活,从此便利"
          }
        ]),
      1000
    );
  }
};
</script>

<style scoped lang="scss">
@media screen and (max-width: 1366px) {
  .welcome-content {
    padding-top: 1% !important;
  }
  .hardware-img {
    width: 350px;
  }
  .welcome-info {
    p {
      top: 34% !important;
      width: 300px !important;
    }
  }
  .top-shop{
      height: 195px;
  }
}

.welcome {
  position: relative;
  height: calc(100%);
}
.nav-content {
  line-height: 150px;
  font-size: 3rem;
  text-align: center;
  color: #fff;
  position: absolute;
  top: 50%;
  left: 100px;
  transform: translateY(-50%)
}
.slider-box {
  background-color: #1c222c;
}
.welcome-content {
  padding-top: 3%;
  display: flex;
  flex-direction: row;
  div {
    flex: 1;
  }
  .top-shop {
    padding: 0 20px;
    h2 {
      text-align: center;
    }
  }
  p {
    width: 500px;
    text-align: center;
    margin: 0 auto;
    font-size: 18px;
  }
  .welcome-info {
    p {
      position: relative;
      top: 50%;
      transform: translateY(-50%);
    }
  }
}
</style>
