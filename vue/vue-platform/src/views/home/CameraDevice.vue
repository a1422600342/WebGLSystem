<template>
  <div id='camera-device-page'>
    <Header place="资源/电子设备" />
    <div class="camera-wrapper">
      <iframe id="camera-device-iframe" src="http://www.dongzf.site/esmap/one/deceive.html" frameborder="0"
        scrolling="auto" style="border:0px;"></iframe>
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
      return {
      }
    },
    methods: {
    },
    created() {
    },
    mounted() {
      const oIframe = document.getElementById('camera-device-iframe');
      const deviceWidth = document.documentElement.clientWidth;
      const deviceHeight = document.documentElement.clientHeight;
      oIframe.style.width = (Number(deviceWidth)) + 'px'; //数字是页面布局宽度差值
      oIframe.style.height = (Number(deviceHeight) - 108) + 'px'; //数字是页面布局高度差
    },
    computed: {
    },
    watch: {
    }
  }
</script>
<style scoped>
  #camera-device-page {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .camera-wrapper {
    width: 100%;
    height: calc(100% - 108px)
  }

  #camera-device-iframe {
    width: 100%;
    height: 100%;
  }
</style>