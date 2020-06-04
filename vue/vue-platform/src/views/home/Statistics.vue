<template>
  <div id='statistics-page'>
    <Header place="资源/数据统计监控" />
    <div class="statistics-wrapper">
      <div class="block">
        <StatisticChart id="chart" />
      </div>
      <div class="block" style="padding-bottom: 45px;">
        <iframe src="https://www.esmap.cn/sdk-demo/demo/Case/Park/index.html?id=test666&styleid=1004" frameborder="0" width="100%" height="100%"></iframe>
      </div>
    </div>
  </div>
</template>
<script>
  import Header from "@/components/home/Header.vue"
  import StatisticChart from '@/components/home/StatisticChart.vue'
  export default {
    components: {
      Header, StatisticChart
    },
    data() {
      return {
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
  #statistics-page{
    width: 100%;
    height: 100%;
  }
  #chart{
    width: 100%;
    height: 100%;
  }
  .statistics-wrapper{
    display: flex;
    width: 100%;
    height: 90%;
  }
  .block{
    flex: 1;
  }
</style>