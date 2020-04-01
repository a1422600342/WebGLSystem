<template>
    <div class="welcome">
        <Nav :activeIndex="'1'"/>
        <div class="slider-box">
            <Slider animation="fade"
                    v-model="sliderValue"
                    height="450px"
                    :speed="500"
                    :interval="3000">
                <SliderItem v-for="(i, index) in sliderList"
                        :key="index"
                        @click="changeIndex(1);"
                        :style="i.style" >
                    <p class="nav-content">{{i.content}}</p>
                </SliderItem>
            </Slider>
        </div>
        <div class="welcome-content">
            <p>万物互联、全面信息化、人工智能的时代，物理世界在信息空间的可视、分析需求巨大，城市、园区、楼宇的数字化转型是必然趋势</p>
        </div>
        <Footer />
    </div>
</template>

<script>
    import Nav from '@/components/NaviTool.vue'
    import Footer from  '@/components/Footer.vue'
    import { Slider, SliderItem } from 'vue-easy-slider'

    export default {
        data() {
            return {
                sliderList: [],
                sliderValue: 2
            }
        },
        components: {
          Slider,SliderItem,Nav,Footer
        },
        methods: {
            changeIndex(index) {
                this.sliderValue = index;
            }
        },
        mounted() {
            setTimeout(
                () =>
                    (this.sliderList = [
                        {
                            style: {
                                backgroundColor: "#343d4e",
                                width: "100%",
                                height: "100%",
                                backgroundImage: "url('static/img/banner1.gif')",
                                backgroundRepeat: "no-repeat",
                                backgroundPositionX: "75%",
                                backgroundPositionY: "50%",
                                position: "relative"
                            },
                            content: "室内个性化服务"
                        },
                        {
                            style: {
                                backgroundColor: "#343d4e",
                                width: "100%",
                                height: "100%",
                                backgroundImage: "url('static/img/banner2.gif')",
                                backgroundRepeat: "no-repeat",
                                backgroundPositionX: "75%",
                                backgroundPositionY: "50%",
                                position: "relative"
                            },
                            content: "智慧楼宇,您的生活,从此便利"
                        }
                    ]),
                1000
            );
        }
    }
</script>

<style scoped lang="scss">
    .welcome{
        position: relative;
    }
    .nav-content{
        line-height: 150px;
        font-size: 4rem;
        text-align: center;
        color: #fff;
        position: absolute;
        top: 150px;
        left: 100px;
    }
    .slider-box{
        background-color: #1c222c;
    }
    .welcome-content{
        padding-top: 5%;
        p{
            width: 500px;
            text-align: center;
            margin: 0 auto;
            font-size: 18px;
        }
    }
</style>
