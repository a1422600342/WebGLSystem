<template>
  <div id='camera-device-page'>
    <Header place="资源/电子设备" />
    <div class="camera-wrapper">
      <iframe id="camera-device-iframe" src="http://www.dongzf.site/esmap/one/deceive.html" frameborder="0" scrolling="auto" style="border:0px;"></iframe>
    </div>
  </div>
</template>
<script>
import Header from "@/components/home/Header.vue"
export default {
  components: {
    Header
  },
  data() {
    return{
    }
  },
  methods: {
  },
  created() {
  },
  mounted() {
  },
  computed: {
  },
  watch: {
  }
}
</script>
<style scoped>
  #camera-device-page{
    width: 100%;
    height: 100%;
    position: relative;
  }
  .camera-wrapper{
    width: 100%;
    height: calc(100% - 108px)
  }
  #camera-device-iframe{
    width: 100%;
    height: 100%;
  }
</style>