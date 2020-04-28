import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import ExTableColumn from 'ex-table-column' //适配表格自动撑开，参考https://github.com/mnm1001/ex-table-column

Vue.use(ElementUI)
Vue.component(ExTableColumn.name, ExTableColumn);