<template>
  <div ref="mychart">
  </div>
</template>
<script>
import echarts from "echarts";

export default {
  name: "VsEchart",
  props: ["option"],
  data() {
    return {
      myChart: null,
      sizeObserve: null,
      changeNum:0
    };
  },
  created(){
    this.sizeObserve = new ResizeObserver(() => {
      this.changeNum++
      setTimeout(()=>{
        this.changeNum--
        if(this.changeNum<=0)
          this.myChart.resize();
      },100)
    });
  },
  mounted() {
    this.myChart = echarts.init(this.$refs.mychart);
    if (this.option != undefined) this.myChart.setOption(this.option);
    this.sizeObserve.observe(this.$refs.mychart);
  },
  methods: {},
  watch: {
    option: {
      handler(option) {
        this.myChart.setOption(option);
      },
      deep: true,
    },
  },
  beforeMount(){
    this.sizeObserve.disconnect()
  }
};
</script>

<style scoped>
</style>