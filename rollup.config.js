import json from 'rollup-plugin-json';

export default {
  entry: 'src/main.js',
  dest: 'build/dcFilterRememberer.js',
  format: 'umd',
  moduleName: "dcFilterRememberer",
  plugins: [ json() ]
};
