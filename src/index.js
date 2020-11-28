"use strict"
import VsEchart from "./components/VsEchart.vue"
VsEchart.install = Vue => Vue.component(VsEchart.name, VsEchart);
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(VsEchart);
}
export default VsEchart