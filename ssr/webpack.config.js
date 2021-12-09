const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist'),
    // server.js에서 url이 /dist로 시작하는 경우에만 dist폴더의 파일을 서비스하도록 설정했으므로, html-webpack-plugin이 HTML 생성시 HTML 내부 리소스 파일의 경로를 /dist로 설정해준다.
    publicPath: '/dist',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          // 웹팩이 클라이언트 코드에 대해서만 실행하도록 설정
          options: {
            configFile: path.resolve(__dirname, '.babelrc.client.js'),
          },
        },
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: './template/index.html' })],
  mode: 'production',
};
