<template>
  <div id='top-shop'>
    <el-table :data="tableData" style="width: 100%;" height="100%" :header-cell-style="headerStyle" :cell-style="rowStyle">
      <el-table-column v-for="(item,i) in tableColumns" :key="i" :prop="item.prop" :label="item.label" :autoFit='true' />
    </el-table>
  </div>
</template>
<script>
export default {
  name: "topShop",
  components: {},
  props: ["tableData", "tableColumns"],
  data() {
    return {};
  },
  methods: {
    headerStyle() {
      return "text-align:center;";
    },
    rowStyle() {
      return "text-align:center;";
    }
  },
  created() {},
  mounted() {},
  computed: {},
  watch: {}
};
</script>
<style lang="scss">
#top-shop{
  height: calc(100% - 31px);
}
div[class='el-table__body-wrapper is-scrolling-none']::-webkit-scrollbar {
  width: 0;
}

</style>