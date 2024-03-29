import resolve from 'rollup-plugin-node-resolve'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import commonjs from 'rollup-plugin-commonjs'
import json from 'rollup-plugin-json'

export default {
  input: './src/index.js',
  output: {
    file: 'src/build/main.js',
    format: 'iife',
  },
  plugins: [
    resolve(),
    commonjs(),
    json(),
    serve({
      open: true,
      contentBase: 'src',
      port: 5000,
    }),
    livereload(),
  ],
}
