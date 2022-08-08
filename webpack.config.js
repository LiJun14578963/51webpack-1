const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',//默认把该地址下的js转义成为dist文件下的filename  main.js
  output: {
    //path: path.resolve(__dirname, 'dist'),   默认为dist 文件 
    filename: '[name].[contenthash].js',
  },
};