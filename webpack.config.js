const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  mode: process.env.NODE_ENV,
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  devServer: {
    port: "8080",
    static: ["./public"],
    open: true,
    hot: true ,
    liveReload: true,
    proxy: {
      // '/feed': 'http://localhost:3000'
      '/user/login' : 'http://localhost:3000'
    }
  },
  module: {
    rules: [
      {
          test: /\.(js|jsx)$/,    //kind of file extension this rule should look for and apply in test
          exclude: /node_modules/, //folder to be excluded
          use:  'babel-loader' //loader which we are going to use
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ]
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: './template.html'
  })]
}