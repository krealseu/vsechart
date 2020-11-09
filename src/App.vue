<template>
  <div id="app">
    <vs-echart style="height:40vh" :option="option"></vs-echart>
    <vs-echart style="height:40vh" :option="option" theme="dark" svg></vs-echart>
  </div>
</template>

<script>
import VsEchart from "./components/VsEchart.vue"

export default {
  components:{VsEchart},
    data: function () {
    return {
      //option的数据格式和Echart.js一致
      option:{
        title: {
          text: "ECharts",
        },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar", 
            data: [15, 20, 36, 10, 10, 20],
          },
        ],
      }
    };
  },
 
};
</script>

<style>

</style>
