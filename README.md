# VsEchart
Echart.js的简单封装
# 特点
+ 视图大小响应式变化
+ 数据响应刷新
# 使用
```
<vs-echart style="height:100px" :option="option"></vs-echart>


<script>
import VsEchart from "vsechart";  
export default {
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
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      }
    };
  },
  components: {VsEchart},
};
</script>
```
