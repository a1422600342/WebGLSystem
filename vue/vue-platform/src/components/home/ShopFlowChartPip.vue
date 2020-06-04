<template>
  <div id='shop-flow-chart'></div>
</template>
<script>
  export default {
    name: '',
    components: {
    },
    data() {
      return {
      }
    },
    methods: {
      draw() {
        let myChart = this.$echarts.init(document.getElementById('shop-flow-chart'))
        let shopFlowOption = {
          title: {
            text: "店铺类型"
          },
          series: [
            {
              name: '店铺类型',
              type: 'pie',
              radius: '65%',
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              },
              data: [
                { value: 235, name: '商业街商铺' },
                { value: 274, name: '市场类商铺' },
                { value: 310, name: '社区商铺' },
                { value: 335, name: '住宅底层商铺' },
                { value: 400, name: '百货商场、购物核心商铺' }
              ]
            }
          ]
        }
        window.addEventListener('resize', () => {
          myChart.resize()
        })
        myChart.setOption(shopFlowOption)// 设置option
      }
    },
    created() {
    },
    mounted() {
      this.draw()
    },
    computed: {
    },
    watch: {
    }
  }
</script>
<style scoped>
  #shop-flow-chart {
    width: 100%;
    height: 100%;
  }
</style>