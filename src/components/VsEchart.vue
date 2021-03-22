<template>
  <div ref="mychart_dom"></div>
</template>
<script>
import * as echarts from 'echarts';
import { onMounted, onBeforeUnmount, toRefs, ref, watch } from "vue";

export default {
  name: "VsEchart",
  props: {
    option: Object,
    theme: [String, Object],
    svg: Boolean,
    opts: Object,
  },
  setup(props, context) {
    const mychart_dom = ref(null);
    let { option } = toRefs(props);
    let timeId = 0;
    let myChart = null;
    let sizeObserve = new ResizeObserver(() => {
      clearTimeout(timeId);
      timeId = setTimeout(() => {
        myChart.resize();
      }, 100);
    });
    onMounted(() => {
      let renderer = props.svg ? "svg" : "canvas";
      if (typeof props.opts === "undefined") {
        var opts = { renderer };
      } else {
        var opts = props.opts;
        opts.renderer = opts.renderer ? opts.renderer : renderer;
      }
      myChart = echarts.init(mychart_dom.value, props.theme, opts);
      myChart.setOption(option.value);
      sizeObserve.observe(mychart_dom.value);
    });
    onBeforeUnmount(() => {
      myChart.dispose();
      sizeObserve.disconnect();
    });
    watch(
      option,
      (opt) => {
        myChart.setOption(opt);
      },
      { deep: true }
    );
    return {
      mychart_dom,
      getInstance: () => myChart,
    };
  },
};
</script>

<style scoped>
</style>