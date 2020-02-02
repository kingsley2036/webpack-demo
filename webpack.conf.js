const path = require('path')
const htmlWebpackPlugins = require('html-webpack-plugin')

module.exports = {
  // 输入路径配置
  entry: path.resolve(__dirname, './src/index.js'),
  // 输出文件名和路径配置
  output: {
    filename: 'js/main.js',
    path: path.resolve(__dirname, './dist')
  },
  // 引入插件配置
  plugins: [
    new htmlWebpackPlugins({
      filename: 'index.html',
      template: 'index.html',
      inject: 'body'
    }),
  ],
  // 文件类型转换配置
  module: {
    rules: [
      {
        // 正则匹配 html 文件
        test: /\.html$/,
        use: [
          {
            // 引入 html 文件加载插件
            loader: 'html-loader'
          }
        ]
      },
      {
        // 正则匹配 css 文件
        test: /\.css$/,
        use: [
          {
            // 引入 style 文件加载插件
            loader: 'style-loader'
          },
          {
            // 引入 css 文件加载插件
            loader: 'css-loader'
          }
        ]
      },
      {
        test: /\.js$/,
        use: {                   
            loader: "babel-loader",
            options: {
                presets: [
                    "env", 
                ]
            }
        },
        exclude: /node_modules/
      },
    ]
  }
}