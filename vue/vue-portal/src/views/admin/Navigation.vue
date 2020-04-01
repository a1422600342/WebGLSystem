<template>
    <div class="navigation">
        <el-menu
                router
                :default-active="$route.path"
                @select="handleSelect"
                class="el-menu"
                mode="horizontal"
                background-color="#343D4E"
                text-color="#F0FFFF"
                active-text-color="#F8F8FF">
            <el-menu-item index="/admin/index">
                <i class="el-icon-s-home" style="color: #42dbff;"></i>
                <template slot="title">总览</template>
            </el-menu-item>
            <el-menu-item index="2">
                <i class="el-icon-s-grid" style="color: #42dbff;"></i>
                <template slot="title">流量监控</template>
            </el-menu-item>
            <el-menu-item index="3">
                <i class="el-icon-thumb" style="color: #42dbff;"></i>
                <template slot="title">电子设备</template>
            </el-menu-item>
            <el-menu-item index="4">
                <i class="el-icon-s-shop" style="color: #42dbff;"></i>
                <template slot="title">店铺周边</template>
            </el-menu-item>
            <el-submenu id="admin" index="5">
                <template slot="title"><el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>&nbsp;&nbsp;admin</template>
                <el-menu-item index="5-1">个人信息</el-menu-item>
                <el-menu-item index="5-2">注销退出</el-menu-item>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        props: ['activeIndex'],
        methods:{
            handleSelect(key, keyPath) {
                //console.log(key, keyPath);
            }
        }
    }
</script>

<style scoped lang="scss">
    .navigation{
        width: 100%;
        position: relative;
        text-align: center;
    }
    .el-menu{
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
    }
    .el-menu-item{
        border-bottom-color:#000;
    }
    #admin{
        position: absolute;
        right: 0;
    }
</style>
