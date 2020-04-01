<template>
    <div class="store">
        <el-card class="box-card">
            <div slot="header" class="clearfix" style="display: flex;flex-wrap: wrap;justify-content: space-between;">
                <span>旺铺排行</span>
                <div style="right: 0;">
                    <el-button style="padding: 3px 0" type="text">月</el-button>
                    <el-button style="padding: 3px 0" type="text">周</el-button>
                    <el-button style="padding: 3px 0" type="text">日</el-button>
                </div>
            </div>
            <div style="overflow-x: auto">
                <el-table
                        :data="tableData"
                        style="width:600px;height:100%;max-width: 200%;"
                        stripe>
                    <el-table-column
                            sortable
                            prop="date"
                            label="旺铺名称"
                            width="200">
                    </el-table-column>
                    <el-table-column
                            sortable
                            prop="name"
                            label="人流量"
                            width="150">
                    </el-table-column>
                    <el-table-column
                            prop="address"
                            sortable
                            label="营业额"
                            width="280">
                    </el-table-column>
                </el-table>
            </div>
        </el-card>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                },{
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                },{
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                },{
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }]
            }
        }
    }
</script>

<style scoped lang="scss">
    .store{
        width: 100%;
        position: relative;
    }
    .box-card{
        width: 100%;
        height: 400px;
        overflow-y: auto;
    }
</style>
<style>
    .el-table__body-wrapper{
        overflow: hidden !important;
    }
</style>
