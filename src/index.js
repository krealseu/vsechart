"use strict"
import VsEchart from "./components/VsEchart.vue"
VsEchart.install = app => app.component(VsEchart.name, VsEchart);
export default VsEchart