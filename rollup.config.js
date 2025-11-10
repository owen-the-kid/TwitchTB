import resolve from '@rollup/plugin-node-resolve';
import importCss from 'rollup-plugin-import-css';

export default {
  input: 'userScript.js',
  output: {
    file: 'dist/bundle.user.js',
    format: 'iife',
    name: 'TwitchTB'
  },
  plugins: [
    resolve(),
    importCss()  // Add this plugin to handle CSS imports!
  ]
};