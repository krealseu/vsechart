const vue = require('rollup-plugin-vue')
const buble = require('@rollup/plugin-buble')
const { terser } = require('rollup-plugin-terser')
const commonjs = require('@rollup/plugin-commonjs')

export default {
    input: 'src/index.js',
    output: {
        file: 'dist/vsechart.js',
        name: 'VsEcharts',
        format: 'umd',
        globals: {
            vue: 'Vue',
            'echarts': 'echarts'
        }
    },
    external: [
        'vue',
        'echarts'
    ],
    plugins: [
        commonjs(),
        vue({
            compileTemplate: true,
            css: true
        }),
        buble(),
        terser({
            compress: {
                global_defs: {
                    __DEV__: process.env.NODE_ENV !== 'production'
                }
            }
        })
    ]
}