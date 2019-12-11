import path from 'path'
import commonjs from 'rollup-plugin-commonjs'
import vue from 'rollup-plugin-vue' // Handle .vue SFC files
import buble from 'rollup-plugin-buble' // Transpile/polyfill with reasonable browser support
import resolve from 'rollup-plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
import alias from '@rollup/plugin-alias'
import autoprefixer from 'autoprefixer'

export default [
    {
        input: 'src/index.js', // Path relative to package.json
        output: [
            {
                name: 'athos',
                exports: 'named',
                file: 'dist/athos.umd.js',
                format: 'umd'
            },
            {
                name: 'athos',
                exports: 'named',
                file: 'dist/athos.esm.js',
                format: 'es'
            },
            {
                name: 'athos',
                exports: 'named',
                file: 'dist/athos.min.js',
                format: 'iife'
            }
        ],
        plugins: [
            resolve(),
            alias({
                resolve: ['.vue', '.js', '.scss'],
                entries: [
                    { find: '@components', replacement: path.resolve('src/components') },
                    { find: '@layouts', replacement: path.resolve('src/layouts') },
                    { find: '@pages', replacement: path.resolve('src/pages') },
                    { find: '@utils', replacement: path.resolve('src/utils') },
                    { find: '@store', replacement: path.resolve('src/store') }
                ]
            }),
            commonjs(),
            vue({
                css: true, // Dynamically inject css as a <style> tag
                compileTemplate: true, // Explicitly convert template to render function
                style: {
                    postcssPlugins: [autoprefixer]
                }
            }),
            buble(), // Transpile to ES5
            terser()
        ]
    }
]
