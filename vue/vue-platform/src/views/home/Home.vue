<template>
  <div id='home-page'>
    <Header place="资源/平台" />
    <div class="home-content">
      <div class="menu">
        <div class="menu-item">
          <div class="menu-title">监控平台</div>
          <div class="menu-box" @click="goRouter('/platform/statistics')">数据统计监控</div>
          <div class="shop-info">
            <el-table :data="shopFlowData" stripe class="shop-info-table">
              <el-table-column prop="shopName" label="店名" width="180">
              </el-table-column>
              <el-table-column prop="flow" label="客流量">
              </el-table-column>
            </el-table>
          </div>
        </div>
        <div class="menu-item">
          <div class="menu-title">店铺周边</div>
          <div class="menu-box" @click="goRouter('/platform/shopInfo')">店铺信息</div>
          <div class="menu-box">商家入驻</div>
          <div class="menu-box">推广促销</div>
          <div class="shop-flow-box">
            <ShopFlowChart />
          </div>
        </div>
        <div class="menu-item">
          <div class="menu-title">流量监控</div>
          <div class="menu-box">访问流量</div>
          <div class="menu-box">电子设备</div>
          <div class="real-flow-box">
            <RealFlowChart />
          </div>
        </div>
      </div>
      <div class="view">
        <iframe src="http://www.dongzf.site/esmap/one/" frameborder="0" width="100%" height="100%"/>
        <div id="map-view"></div>
      </div>
    </div>
  </div>
</template>
<script>
  import Header from "@/components/home/Header.vue"
  import ShopFlowChart from "@/components/home/ShopFlowChartPip.vue"
  import RealFlowChart from "@/components/home/RealFlowChart.vue"
  import { init, addFloorControl, add2And3 } from "@/config/map"

  export default {
    name: '',
    components: {
      Header, ShopFlowChart, RealFlowChart
    },
    data() {
      return {
        shopFlowData: [
          { shopName: "屈臣氏", flow: "456" },
          { shopName: "屈臣氏", flow: "456" },
          { shopName: "屈臣氏", flow: "456" },
          { shopName: "屈臣氏", flow: "456" },
          { shopName: "屈臣氏", flow: "456" },
          { shopName: "屈臣氏", flow: "456" },
          { shopName: "屈臣氏", flow: "456" },
          { shopName: "屈臣氏", flow: "456" },
          { shopName: "屈臣氏", flow: "456" },
          { shopName: "屈臣氏", flow: "456" },
          { shopName: "屈臣氏", flow: "456" }
        ]
      }
    },
    methods: {
      mapInit() {
        let mapID = "map";
        let container = document.getElementById("map-view");
        map = init(container, mapID, "shop");
      },
      goRouter(path){
        this.$router.push({path:path})
      }
    },
    created() {
    },
    mounted() {
      //this.mapInit()
    },
    computed: {
    },
    watch: {
    }
  }
</script>
<style scoped>
  .home-content,
  .menu {
    display: flex;
    position: relative;
  }

  .home-content {
    height: calc(100% - 142px);
  }

  .home-content {
    margin-top: 10px;
  }

  .menu-item {
    padding: 0 10px;
  }

  .menu-box,
  .menu-title {
    padding: 30px;
    width: 200px;
    text-align: center;
    background-color: indigo;
    color: white;
    margin-top: 1px;
  }

  .menu-box {
    cursor: pointer;
  }

  .shop-info {
    width: 260px;
    height: 300px;
  }

  .shop-flow-box {
    width: 260px;
    height: 150px;
    margin-top: 10px;
  }

  .real-flow-box {
    width: 260px;
    height: 250px;
  }

  .view {
    width: 100%;
    height: calc(100vh - 152px);
    margin-right: 10px;
    margin-bottom: 10px;
  }

  #map-view {
    width: 100%;
    height: 100%;
  }
</style>
<style lang="scss">
  .shop-info-table {
    .el-table__body-wrapper.is-scrolling-none {
      height: 100% !important;
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