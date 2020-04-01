<template>
    <div class="density-chart">
        <div id="d-chart" :style="{width: '100%', height: '100%', 'background-color': 'transparent'}"></div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                score: [[70, 78, 81, 90, 85, 70, 60],[15, 25, 51, 40, 85, 80, 60]]
            }
        },
        methods: {
            draw () {
                // 初始化echarts实例
                let myChart = this.$echarts.init(document.getElementById('d-chart'))
                // 绘制图表
                let option = {
                    title: {
                        text:'人群密度流量',
                        textStyle:{
                            color: '#fff',
                            fontWeight: 500,
                            fontSize: 15
                        }
                    },
                    backgroundColor: 'transparent',
                    legend: {
                        // orient 设置布局方式，默认水平布局，可选值：'horizontal'（水平） ¦ 'vertical'（垂直）
                        orient: 'horizontal',
                        // x 设置水平安放位置，默认全图居中，可选值：'center' ¦ 'left' ¦ 'right' ¦ {number}（x坐标，单位px）
                        x: 'center',
                        // y 设置垂直安放位置，默认全图顶端，可选值：'top' ¦ 'bottom' ¦ 'center' ¦ {number}（y坐标，单位px）
                        y: 'bottom',
                        data: ['人群密度','客流量'],
                        textStyle: {
                            color: '#fff'
                        }
                    },
                    //  图表距边框的距离,可选值：'百分比'¦ {number}（单位px）
                    grid: {
                        top: '16%', // 等价于 y: '16%'
                        left: '3%',
                        right: '8%',
                        bottom: '3%',
                        containLabel: true
                    },
                    // 提示框
                    tooltip: {
                        trigger: 'axis'
                    },
                    xAxis: {
                        name:'时间',
                        type: 'category',
                        axisLine: {
                            lineStyle: {
                                // 设置x轴颜色
                                color: '#fff'
                            }
                        },
                        // 设置X轴数据旋转倾斜
                        axisLabel: {
                            rotate: 30, // 旋转角度
                            interval: 0 // 设置X轴数据间隔几个显示一个，为0表示都显示
                        },
                        // boundaryGap值为false的时候，折线第一个点在y轴上
                        boundaryGap: true,
                        data: ['9:00', '10:30', '12:00', '13:30', '15:00', '16:00', '18:00'],
                        splitLine: {show: true}
                    },

                    yAxis: {
                        show: true,
                        //name: '流量',
                        type: 'value',
                        min: 0, // 设置y轴刻度的最小值
                        max: 100, // 设置y轴刻度的最大值
                        splitNumber: 10, // 设置y轴刻度间隔个数
                        axisLine: {
                            lineStyle: {
                                // 设置y轴颜色
                                color: '#fff'
                            }
                        },
                        splitLine: {show: true}
                    },

                    series: [
                        {
                            name: '人群密度',
                            data: this.score[0],
                            type: 'line',
                            // 设置小圆点消失
                            // 注意：设置symbol: 'none'以后，拐点不存在了，设置拐点上显示数值无效
                            symbol: 'roundRect',
                            symbolSize: 2,
                            symbolRotate: 90,
                            // 设置折线弧度，取值：0-1之间
                            smooth: 0,
                            lineStyle: {
                                width: 4, // 设置线宽
                                type: 'solid', // 'dotted'虚线 'solid'实线
                                color: '#59e9fb'
                            },
                            itemStyle: {
                                normal: {
                                    label: {
                                        show: false
                                    },
                                    borderWidth: 2,
                                    // orderColor: 'yellow',
                                    color: '#fff'
                                }
                            },
                            markLine: {
                                data: [
                                    {type: 'max', name: '最大值'}
                                ],
                                color: 'yellow'
                            }
                        },
                        {
                            name: '客流量',
                            data: this.score[1],
                            type: 'line',
                            // 设置小圆点消失
                            // 注意：设置symbol: 'none'以后，拐点不存在了，设置拐点上显示数值无效
                            symbol: 'roundRect',
                            symbolSize: 2,
                            symbolRotate: 90,
                            // 设置折线弧度，取值：0-1之间
                            smooth: 0,
                            lineStyle: {
                                width: 4, // 设置线宽
                                type: 'solid', // 'dotted'虚线 'solid'实线
                                color: '#59e9fb'
                            },
                            itemStyle: {
                                normal: {
                                    label: {
                                        show: false
                                    },
                                    borderWidth: 2,
                                    // orderColor: 'yellow',
                                    color: '#fff'
                                }
                            }
                        }
                    ],
                    color: ['#00EE00', '#FF9F7F', '#FFD700']
                }
                // 防止越界，重绘canvas
                window.addEventListener('resize', () => {
                    myChart.resize()
                })
                myChart.setOption(option, true)// 设置option
            }
        },
        mounted() {
            this.draw()
        }
    }
</script>

<style scoped lang="scss">
    .density-chart{
        width: 100%;
        height: 100%;
        position: relative;
    }
</style>
