<template>
    <div class="index">
        <div id="home-content">
            <div class="left">
                <el-card class="density-box" shadow="always">
                    <div style="height: 300px">
                        <DensityChart/>
                    </div>
                </el-card>
                <Timer/>
            </div>
            <div class="center">
                <div id="map-container"></div>
            </div>
            <div class="right">
                <FlowChart/>
                <Store/>
            </div>
        </div>
    </div>
</template>

<script>
    import DensityChart from '@/views/admin/index/DensityChart'
    import Timer from '@/views/admin/index/Time'
    import FlowChart from '@/views/admin/index/FlowChart'
    import Store from '@/views/admin/index/Store'

    import {init,addFloorControl} from "@/config/map"

    export default {
        components:{DensityChart,Timer,FlowChart,Store},
        data() {
            return {}
        },
        mounted(){
            let mapID = 'map'
            let container = document.getElementById('map-container');
            map = init(container,mapID,'vue3')
            map.on('loadComplete',function () {
                addFloorControl(map)
            })
            map.on('mapClickNode', function(event) {
                console.log(event);//此处打印处如上图（比如点击中房间）所示的调试信息
                if (event.nodeType == esmap.ESNodeType.NONE || event.nodeType == esmap.ESNodeType.FLOOR) return;
                let model = event;
                if(event.nodeType != esmap.ESNodeType.MODEL)
                    model.o3d_.flash({
                        scale: 1.3,
                        time: 0.3
                    }); //闪烁
                switch (event.nodeType) {
                    case esmap.ESNodeType.MODEL:        //返回房间信息
                        map.storeSelect(model);//高亮
                        break;
                    case esmap.ESNodeType.TEXT_MARKER:  //返回文字POI信息
                        break;
                    case esmap.ESNodeType.FACILITY:     //返回图片POI信息
                        break;
                    case esmap.ESNodeType.IMAGE_MARKER:  //返回自写定义的图片信息
                        break;
                    case esmap.ESNodeType.MODEL3D:      //返回三维模型信息
                        break;
                    case esmap.ESNodeType.LINE:         //返回线信息
                        break;
                }
            });
        }
    }
</script>

<style scoped lang="scss">
    .index{
        padding-top: 10px;
        width: 100%;
        height: 100%;
        position: relative;
        background-color: #343d4e;
    }
    #home-content{
        width: 100%;
        height: calc(100% - 60px);
        display: flex;
        justify-content: left;
        align-items: center;
        padding-bottom: 10px;
    }
    .left{
        width: 25%;
        height: 100%;
        padding: 0 20px;
    }
    .center{
        width: 50%;
        height: 100%;
        border-radius: 35px;
        overflow: hidden;
    }
    .right{
        width: 25%;
        height: 100%;
        padding: 0 20px;
    }
    #map-container{
        width: 100%;
        height: 100%;
        position: relative;
    }
    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }
    .clearfix:after {
        clear: both
    }
    .density-box{
        width: 100%;
        background-color:transparent;
        color: #fff;
        border: none;
        overflow: hidden;
        background-image: url('/image/border1.png');
        background-size: 100% 103%;
        background-repeat: no-repeat;
    }
</style>
