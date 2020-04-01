import Vue from 'vue'

let chart = require('echarts/lib/echarts')
require('echarts/lib/chart/line') // 折线图
require('echarts/lib/chart/pie') // 饼图
require('echarts/lib/chart/bar') // 柱状图
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
require('echarts/lib/component/legend')
require('echarts/lib/component/legendScroll')
require('echarts/lib/component/dataZoom')
require('echarts/lib/component/markPoint')
require('echarts/lib/component/markLine')

Vue.prototype.$echarts = chart

