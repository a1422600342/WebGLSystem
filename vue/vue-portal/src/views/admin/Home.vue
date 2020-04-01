<template>
    <div class="home">
        <Nav :activeIndex="'1'"/>
        <Index/>
    </div>
</template>

<script>
    import Nav from '@/views/admin/Navigation'
    import Index from '@/views/admin/index/Index'



    export default {
        components:{Nav,Index},
        data() {
            return {

            }
        }
    }
</script>

<style scoped lang="scss">
    .home{
        width: 100%;
        height: 100%;
    }
</style>
