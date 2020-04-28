<template>
  <div id='visual-page'>
    <Header :activeIndex="'3'" />
    <div id='content'>
      <div id='map-container'></div>
    </div>
    <Footer />
  </div>
</template>
<script>
import Header from "@/components/index/Header.vue";
import Footer from "@/components/index/Footer.vue";
import { init, addFloorControl,add2And3 } from "@/config/map";

export default {
  name: "",
  components: {
    Header,
    Footer
  },
  data() {
    return {};
  },
  methods: {},
  created() {},
  mounted() {
    let mapID = "map";
    let container = document.getElementById("map-container");
    map = init(container, mapID, "shop");
    map.on("loadComplete", function() {
      add2And3(map)
      addFloorControl(map);
    });
  },
  computed: {},
  watch: {}
};
</script>
<style scoped>
#visual-page {
  width: 100%;
  height: 100%;
  position: relative;
}
#content {
  width: 100%;
  height: 100%;
}
#map-container {
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  overflow: hidden;
  position: relative;
}
</style>
<style lang="scss">
.btn-floors-wrap {
  right: 70px !important;
}
</style>