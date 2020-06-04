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
          <el-table :data="shopTopData" border>
            <el-table-column label="店铺名称" prop="shopName"></el-table-column>
            <el-table-column label="主营业务" prop="shopType"></el-table-column>
            <el-table-column label="客流量" prop="flow"></el-table-column>
            <el-table-column label="促销力度" prop="power"></el-table-column>
          </el-table>
        </div>
      </div>
      <div class="right">
        <div class="shop-search">
          <el-form :inline="true" :model="shopSearchData" class="shop-search-form">
            <span class="middler-warper"></span>
            <el-form-item label="店铺名称">
              <el-input prefix-icon="el-icon-search" style="width: 100px;" v-model="shopSearchData.shopName"
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
              <el-button class="shop-search-btn" @click="filterShopInfo">查询</el-button>
              <el-button class="shop-search-btn" @click="dialogFormVisible = true">添加</el-button>
            </el-form-item>
          </el-form>

        </div>
        <div class="shop-info-table">
          <el-table :data="currentData" border>
            <el-table-column label="店铺名称" prop="shopName"></el-table-column>
            <el-table-column label="主营业务" prop="shopType"></el-table-column>
            <el-table-column label="经营时间" prop="businessHours"></el-table-column>
            <el-table-column label="负责人" prop="businessMan"></el-table-column>
          </el-table>
        </div>
        <div class="page-helper">
          <el-pagination @current-change="currentChange" :current-page="currentPage" :page-size="pageSize"
            layout="total, prev, pager, next, jumper" :total="shopInfoData.length">
          </el-pagination>
        </div>
      </div>
    </div>

    <el-dialog title="添加店铺信息" :visible.sync="dialogFormVisible">
      <el-form :model="shopInfoForm" inline>
        <el-form-item label="店铺名称">
          <el-input v-model="shopInfoForm.shopName"></el-input>
        </el-form-item>
        <el-form-item label="主营业务">
          <el-input v-model="shopInfoForm.shopType"></el-input>
        </el-form-item>
        <el-form-item label="经营时间">
          <el-input v-model="shopInfoForm.businessHours"></el-input>
        </el-form-item>
        <el-form-item label="负责人">
          <el-input v-model="shopInfoForm.businessMan"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addShopInfo">确 定</el-button>
      </div>
    </el-dialog>
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
        currentPage: 1,
        pageSize: 5,
        currentData: [],
        shopInfoData: [
          { shopName: "屈臣氏", shopType: "销售业务", address: "1层 0407空间", businessHours: "10点-22点", businessMan: "张三" },
          { shopName: "肯德基", shopType: "餐饮业务", address: "1层 0408空间", businessHours: "7点-24点", businessMan: "李四" },
          { shopName: "麦当劳", shopType: "销售业务", address: "1层 0409空间", businessHours: "10点-22点", businessMan: "王五" },
          { shopName: "爱果果", shopType: "销售业务", address: "1层 0410空间", businessHours: "10点-22点", businessMan: "赵六" },
          { shopName: "Nike", shopType: "品牌业务", address: "2层 0507空间", businessHours: "10点-22点", businessMan: "孙琪" },
          { shopName: "Adidas", shopType: "品牌业务", address: "2层 0508空间", businessHours: "10点-22点", businessMan: "周八" },
          { shopName: "星巴克", shopType: "餐饮业务", address: "1层 0411空间", businessHours: "10点-22点", businessMan: "吴九" }
        ],
        shopTopData: [
          { shopName: "屈臣氏", shopType: "销售业务", address: "1层 0407空间", flow: Math.round(Math.random(100) * 10), power: 1 },
          { shopName: "麦当劳", shopType: "销售业务", address: "1层 0409空间", flow: Math.round(Math.random(100) * 10), power: 0 },
          { shopName: "爱果果", shopType: "销售业务", address: "1层 0410空间", flow: Math.round(Math.random(100) * 10), power: 2 },
          { shopName: "Adidas", shopType: "品牌业务", address: "2层 0508空间", flow: Math.round(Math.random(100) * 10), power: 1.5 },
          { shopName: "星巴克", shopType: "餐饮业务", address: "1层 0411空间", flow: Math.round(Math.random(100) * 10), power: 1 }
        ],
        shopSearchData: {
          shopName: "",
          shopType: "",
          businessHoursStart: "",
          businessHoursEnd: ""
        },
        shopInfoForm: {
          shopName: "",
          shopType: "",
          address: "",
          flow: 0,
          power: 0
        },
        dialogFormVisible: false
      }
    },
    methods: {
      currentChange(p) {
        console.log(p)
        if (p === 1) {
          this.currentData = this.shopInfoData.slice(0, 5)
        } else {
          this.currentData = this.shopInfoData.slice(5)
        }
        console.log(this.currentData)
      },
      addShopInfo() {
        this.dialogFormVisible = false
        this.shopInfoData.push(this.shopInfoForm)
      },
      filterShopInfo() {
        let arr = this.shopInfoData
        if (this.shopSearchData.shopName === "" && this.shopSearchData.shopType === "" && this.shopSearchData.businessHoursStart === "" && this.shopSearchData.businessHoursEnd === "") {
          console.log(this.shopInfoData.slice(0, 5))
          this.currentData = this.shopInfoData.slice(0, 5)
          return
        }
        let list = arr && arr.filter(item => {
          return item.shopName.includes(this.shopSearchData.shopName) && item.shopType.includes(this.shopSearchData.shopType) && item.businessHours.includes(this.shopSearchData.businessHoursStart + this.shopSearchData.businessHoursEnd)
        })
        console.log(list)
        this.currentData = list
      }
    },
    created() {
      this.currentData = this.shopInfoData.slice(0, 5)
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