<template>
    <div class="flow-chart">
        <div class="flow-box">
            <div class="flow-img">150<br/>今日流量</div>
            <div class="flow-img">35<br/>实时流量</div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        }
    }
</script>

<style scoped lang="scss">
    .flow-chart{
        width: 100%;
        height: 200px;
        position: relative;
    }
    .flow-box{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .flow-img{
        background-image: url('/image/border3.png');
        background-size: 45%;
        background-repeat: no-repeat;
        background-position: center;
        width: 100%;
        height: 100px;
        line-height: 100px;
        text-align: center;
        color: #fff;
    }
</style>
