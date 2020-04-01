<template>
    <div class="online-experience">
        <Nav :activeIndex="'4'"/>
        <div class="content">
            <div class="phone-border" :style="{'background-image': 'url(' + phone +')'}"></div>
            <iframe src="https://www.esmap.cn/sdk-demo/demo/weixindemo/" frameborder="0"></iframe>
            <div class="message">
                <img src="@/assets/wx-demo.png"/>
                <p>&nbsp;&nbsp;<span id="door">传送门</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;扫描二维码，即可体验</p>
            </div>
            <div class="mode">
                <div><img src="@/assets/img/online-experience/navi.png" alt=""><span>支持智能路径规划</span></div>
                <div><img src="@/assets/img/online-experience/search.png" alt=""><span>支持商城周边，建筑搜索</span></div>
                <div><img src="@/assets/img/online-experience/marker.png" alt=""><span>支持语音导航</span></div>
            </div>
        </div>
        <Footer/>
    </div>
</template>

<script>
    import Nav from '@/components/NaviTool.vue'
    import Footer from  '@/components/Footer.vue'
    export default {
        data() {
            return {
                phone: require("@/assets/img/phone.png")
            }
        },
        components: {
            Nav,Footer
        },
    }
</script>

<style scoped lang="scss">
    .content{
        position: relative;
        background-color: #f5f5f4;
    }
    .content iframe{
        width: 368px;
        height: 746px;
        margin: 44px 0 0 258px;
    }
    .phone-border{
        position: absolute;
        left: 183px;
        //background-image: url("./assets/img/phone.png");
        width: 527px;
        height: 836px;
        background-position: -47px 3px;
        pointer-events: none;
    }
    .message{
        position: absolute;
        left: 710px;
        top: 230px;
    }
    .mode{
        position: absolute;
        width: 300px;
        top: 130px;
        left: 1100px;
    }
    .mode div{
        margin-bottom: 35px;
    }
    .mode span{
        margin-left: 15px;
        display: inline-block;
        height: 60px;
        line-height: 60px;
        overflow:hidden;
    }
    #door{
        color: #fc7a75;
        font-size: 22px;
        font-weight: bolder;
    }
</style>
