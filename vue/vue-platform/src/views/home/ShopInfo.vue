<template>
  <div id='shop-info-page'>
    <Header place="店铺周边/店铺信息"></Header>
    <div class="shop-box">
      <div class="left">
        <div class="shop-top-btn-group">
          <el-button class="shop-top-btn">日榜</el-button>
          <el-button class="shop-top-btn">周榜</el-button>
          <el-button class="shop-top-btn">月榜</el-button>
          <el-button class="shop-top-btn">季榜</el-button>
        </div>
        <div class="shop-top-table">
          <el-table :data="shopInfoData" border>
            <el-table-column label="店铺名称" prop="shopName"></el-table-column>
            <el-table-column label="主营业务" prop="shopType"></el-table-column>
            <el-table-column label="客流量" prop="businessHours"></el-table-column>
            <el-table-column label="促销力度" prop="businessMan"></el-table-column>
          </el-table>
        </div>
      </div>
      <div class="right">
        <div class="shop-search">
          <el-form :inline="true" :model="shopSearchData" class="shop-search-form">
            <span class="middler-warper"></span>
            <el-form-item label="店铺名称">
              <el-input prefix-icon="el-icon-search" style="width: 130px;" v-model="shopSearchData.shopName"
                placeholder="店铺名称"></el-input>
            </el-form-item>
            <el-form-item label="主营业务">
              <el-input prefix-icon="el-icon-search" style="width: 130px;" v-model="shopSearchData.shopType"
                placeholder="主营业务"></el-input>
            </el-form-item>
            <el-form-item label="营业时间">
              <el-input prefix-icon="el-icon-view" style="width: 150px;" v-model="shopSearchData.businessHoursStart"
                placeholder="营业开始时间">
              </el-input>-
              <el-input prefix-icon="el-icon-view" style="width: 150px;" v-model="shopSearchData.businessHoursEnd"
                placeholder="营业结束时间"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button class="shop-search-btn">查询</el-button>
            </el-form-item>
          </el-form>

        </div>
        <div class="shop-info-table">
          <el-table :data="shopInfoData" border>
            <el-table-column label="店铺名称" prop="shopName"></el-table-column>
            <el-table-column label="主营业务" prop="shopType"></el-table-column>
            <el-table-column label="经营时间" prop="businessHours"></el-table-column>
            <el-table-column label="负责人" prop="businessMan"></el-table-column>
          </el-table>
        </div>
        <div class="page-helper">
          <el-pagination @size-change="undefined" @current-change="undefined" :current-page="undefined" :page-size="20"
            layout="total, prev, pager, next, jumper" :total="400">
          </el-pagination>
        </div>
      </div>
    </div>
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
        shopInfoData: [
          { shopName: "屈臣氏", shopType: "销售业务", address: "1层 0407空间", businessHours: "10点-22点", businessMan: "张三" },
          { shopName: "屈臣氏", shopType: "销售业务", address: "1层 0407空间", businessHours: "10点-22点", businessMan: "张三" },
          { shopName: "屈臣氏", shopType: "销售业务", address: "1层 0407空间", businessHours: "10点-22点", businessMan: "张三" },
          { shopName: "屈臣氏", shopType: "销售业务", address: "1层 0407空间", businessHours: "10点-22点", businessMan: "张三" },
          { shopName: "屈臣氏", shopType: "销售业务", address: "1层 0407空间", businessHours: "10点-22点", businessMan: "张三" },
          { shopName: "屈臣氏", shopType: "销售业务", address: "1层 0407空间", businessHours: "10点-22点", businessMan: "张三" },
          { shopName: "屈臣氏", shopType: "销售业务", address: "1层 0407空间", businessHours: "10点-22点", businessMan: "张三" }
        ],
        shopSearchData: {
          shopName: "",
          shopType: "",
          businessHoursStart: "",
          businessHoursEnd: ""
        }
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
  #shop-info-page {
    width: 100%;
    height: 100%;
  }

  .shop-box {
    display: flex;
    padding: 10px 20px;
    height: calc(100% - 128px);
  }

  .left {
    width: 350px;
    display: flex;
    flex-flow: column;
  }

  .right {
    padding-left: 20px;
    flex: 1;
    display: flex;
    flex-flow: column;
  }

  .page-helper {
    margin: auto auto 0;
    width: 100%;
    text-align: center;
    background-color: rgb(52, 61, 78);
    border-radius: 5px;
    padding: 5px 0;
  }

  .shop-search-btn {
    background-color: rgb(52, 61, 78);
    color: #fff;
  }

  .shop-top-btn-group {
    height: 40px;
    padding: 5px 0;
    display: flex;
  }

  .shop-top-btn {
    flex: 1;
  }

  .middler-warper {
    height: 100%;
    display: inline-block;
    width: 1px;
    vertical-align: middle;
  }
</style>
<style lang="scss">
  .page-helper {
    button {
      background-color: rgb(52, 61, 78) !important;
      color: #fff !important;
    }

    .active {
      background-color: rgb(52, 61, 78) !important;
      font-size: 18px;
    }

    li {
      color: #fff !important;
      background-color: rgb(52, 61, 78) !important;
    }

    .el-pagination__jump,
    .el-pagination__total {
      color: #fff !important;
    }
  }

  .shop-top-table {
    height: calc(100% - 50px);

    .el-table {
      display: flex;
      flex-flow: column;

      .el-table__body-wrapper.is-scrolling-none {
        flex: 1;
        overflow-y: auto;
      }
    }
  }


  .shop-box {
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
  }
</style>