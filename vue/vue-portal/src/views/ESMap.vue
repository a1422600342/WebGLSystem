<template>
  <div class="es-map">
    <Nav :activeIndex="'3'"/>
    <div id='content'>
      <div id='map-container'></div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Nav from '@/components/NaviTool.vue'
import Footer from  '@/components/Footer.vue'

import {init,addFloorControl} from "@/config/map"

export default {
    components: {
      Nav,Footer
    },
    mounted(){
        let mapID = 'map'
        let container = document.getElementById('map-container');
        init(container,mapID,'vue3')
        map.on('loadComplete', function () {
          let floorControl1 = new esmap.ESToolControl(map)
          addFloorControl(map)
        });
    }
}

</script>

<style scoped>
  .es-map{
    width: 100%;
    height: 100%;
    position: relative;
  }
  #content{
      width: 100%;
      height: 100%;
  }
  #map-container{
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    overflow: hidden;
    position: relative;
  }
</style>
<style>
  .btn-floors-wrap{
    right: 70px !important;
  }
</style>
