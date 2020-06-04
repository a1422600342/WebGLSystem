<template>
    <div id='statistic-chart' ref='statistic-chart'>

    </div>
</template>
<script>
    export default {
        name: '',
        components: {
        },
        data() {
            return {
                count: 10,
                shopFlowOption: {
                    title: {
                        text: '客流数据'
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross',
                            label: {
                                backgroundColor: '#283b56'
                            }
                        }
                    },
                    legend: {
                        data: ['最新客流比', '总流量']
                    },
                    toolbox: {
                        show: true,
                        feature: {
                            dataView: { readOnly: false },
                            restore: {},
                            saveAsImage: {}
                        }
                    },
                    dataZoom: {
                        show: false,
                        start: 0,
                        end: 100
                    },
                    xAxis: [
                        {
                            type: 'category',
                            boundaryGap: true,
                            data: (function () {
                                var now = new Date();
                                var res = [];
                                var len = 10;
                                while (len--) {
                                    res.unshift(now.toLocaleTimeString().replace(/^\D*/, ''));
                                    now = new Date(now - 2000);
                                }
                                return res;
                            })()
                        },
                        {
                            type: 'category',
                            boundaryGap: true,
                            data: (function () {
                                var res = [];
                                var len = 10;
                                while (len--) {
                                    res.push(10 - len - 1);
                                }
                                return res;
                            })()
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            scale: true,
                            name: '客流比',
                            max: 30,
                            min: 0,
                            boundaryGap: [0.2, 0.2]
                        },
                        {
                            type: 'value',
                            scale: true,
                            name: '流量',
                            max: 100,
                            min: 0,
                            boundaryGap: [0.2, 0.2]
                        }
                    ],
                    series: [
                        {
                            name: '总流量',
                            type: 'bar',
                            xAxisIndex: 1,
                            yAxisIndex: 1,
                            data: (function () {
                                var res = [];
                                var len = 10;
                                while (len--) {
                                    res.push(Math.round(Math.random() * 30));
                                }
                                return res;
                            })()
                        },
                        {
                            name: '最新客流比',
                            type: 'line',
                            data: (function () {
                                var res = [];
                                var len = 0;
                                while (len < 10) {
                                    res.push((Math.random() * 10 + 5).toFixed(1) - 0);
                                    len++;
                                }
                                return res;
                            })()
                        }
                    ]
                }
            }
        },
        methods: {
            draw() {
                let myChart = this.$echarts.init(this.$refs['statistic-chart'])
                window.addEventListener('resize', () => {
                    myChart.resize()
                })
                myChart.setOption(this.shopFlowOption)// 设置option
                setInterval( ()=>{
                    let option = this.shopFlowOption
                    var axisData = (new Date()).toLocaleTimeString().replace(/^\D*/, '');
                    var data0 = option.series[0].data;
                    var data1 = option.series[1].data;
                    data0.shift();
                    data0.push(Math.round(Math.random() * 30));
                    data1.shift();
                    data1.push((Math.random() * 10 + 5).toFixed(1) - 0);
                    option.xAxis[0].data.shift();
                    option.xAxis[0].data.push(axisData);
                    option.xAxis[1].data.shift();
                    option.xAxis[1].data.push(this.count++);
                    myChart.setOption(option);
                }, 5000);
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
    #statistic-chart{
        width: 100%;
        height: 100%;
    }
</style>