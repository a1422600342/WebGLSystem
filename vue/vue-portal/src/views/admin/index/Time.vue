<template>
    <div class="time">
        <p>{{date.getFullYear() + '-'}} {{(date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-'}} {{date.getDate() + ' '}} {{date.getHours() + ':'}} {{date.getMinutes() + ':'}} {{date.getSeconds()}} {{week}}</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                date: new Date(),
                week: ""
            }
        },
        mounted() {
            this.timer = setInterval(()=>{
                this.date = new Date();//修改数据date
                this.week = "星期" + "日一二三四五六".charAt(this.date.getDay());
            }, 1000);
        },
        beforeDestroy () {
            if(this.timer) {
                clearInterval(this.timer);//在vue实例销毁钱，清除我们的定时器
            }
        }
    }
</script>

<style scoped lang="scss">
    .time{
        width: 100%;
        height: 50px;
        position: relative;
        color: #fff;
        background-image: url("/image/border2.png");
        background-size: 100%;
        background-repeat: no-repeat;
        background-position: 0 31px;
        text-align: center;
        line-height: 50px;
    }
</style>
