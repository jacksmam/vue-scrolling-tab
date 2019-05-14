const path = require('path')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

// 複数エントリーポイント: http://okamuuu.hatenablog.com/entry/2016/11/24/135416
module.exports = {
  entry: {
    "dist/vue-scrolling-tab": "./src/index.ts",
    "sample/output/sample": './sample/main.ts'
  },
  output: {
    path: path.resolve(__dirname),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    // make sure to include the plugin!
    new VueLoaderPlugin(),
  ],
  resolve: {
    extensions: ['.ts', '.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  devServer: {
    contentBase: path.join(__dirname, 'sample', 'output'),
    watchContentBase: true,
    publicPath: '',
    port: 3000,
    inline: true,
    hot: true
  },
  performance: {
    hints: false
  },
  watch: true
}
