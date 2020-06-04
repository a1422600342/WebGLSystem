<template>
  <div id='statistics-page'>
    <Header place="资源/数据统计监控" />
    <StatisticChart id="chart" />
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
    width: 300px;
    height: 300px;
  }
</style>