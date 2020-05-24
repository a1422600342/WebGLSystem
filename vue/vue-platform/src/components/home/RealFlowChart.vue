<template>
    <div id='real-flow-chart'>
    </div>
</template>
<script>
    export default {
        name: '',
        components: {
        },
        data() {
            return {
                data: [],
                now: new Date(2018, 3, 3),
                oneDay: 1 * 60 * 60 * 1000,
                value: Math.random() * 100
            }
        },
        methods: {
            draw() {
                let option = {
                    title: {
                        text: '客流量'
                    },
                    tooltip: {
                        trigger: 'axis',
                        formatter: function (params) {
                            params = params[0];
                            var date = new Date(params.name);
                            return date.Format("yyyy-MM-dd hh:mm") + ' : ' + params.value[1];
                        },
                        axisPointer: {
                            animation: false
                        }
                    },
                    xAxis: {
                        type: 'time',
                        splitLine: {
                            show: false
                        }
                    },
                    yAxis: {
                        type: 'value',
                        boundaryGap: [0, '100%'],
                        splitLine: {
                            show: false
                        }
                    },
                    series: [{
                        name: '客流监测数据',
                        type: 'line',
                        showSymbol: false,
                        hoverAnimation: false,
                        data: this.data
                    }]
                };
                let myChart = this.$echarts.init(document.getElementById('real-flow-chart'))
                setInterval(()=>{
                    for (var i = 0; i < 5; i++) {
                        this.data.shift();
                        this.data.push(this.randomData());
                    }
                    myChart.setOption({
                        series: [{
                            data: this.data
                        }]
                    });
                }, 2000);
                if (option && typeof option === "object") {
                    myChart.setOption(option, true);
                }
            },
            randomData() {
                this.now = new Date(+this.now + this.oneDay);
                this.value = this.value + Math.random() * 21 - 10;
                return {
                    name: this.now.toString(),
                    value: [
                        this.now.Format("yyyy-MM-dd hh:mm"),
                        Math.round(this.value)
                    ]
                }
            },
            initData() {
                for (var i = 0; i < 1000; i++) {
                    this.data.push(this.randomData());
                }
            }
        },
        created() {
        
        },
        mounted() {
            this.initData()
            this.draw()
        },
        computed: {
        },
        watch: {
        }
    }
</script>
<style scoped>
    #real-flow-chart {
        width: 100%;
        height: 100%;
        padding: 10px 5px 0;
    }
</style>