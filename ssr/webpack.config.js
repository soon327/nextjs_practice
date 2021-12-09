const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

function getConfig(isServer) {
  return {
    entry: isServer ? { server: './src/server.js' } : { main: './src/index.js' },
    output: {
      filename: isServer ? '[name].bundle.js' : '[name].[chunkhash].js',
      path: path.resolve(__dirname, 'dist'),
      // server.js에서 url이 /dist로 시작하는 경우에만 dist폴더의 파일을 서비스하도록 설정했으므로, html-webpack-plugin이 HTML 생성시 HTML 내부 리소스 파일의 경로를 /dist로 설정해준다.
      publicPath: '/dist/',
    },
    target: isServer ? 'node' : 'web',
    //// node_modules 폴더 밑에 있는 모듈을 번들파일에서 제외시켜주는 모듈
    externals: isServer ? [nodeExternals()] : [],
    node: {
      __dirname: false,
    },
    optimization: isServer
      ? {
          splitChunks: false,
          minimize: false,
        }
      : undefined,
    module: {
      rules: [
        {
          test: /\.js$/,
          use: {
            loader: 'babel-loader',
            // 웹팩이 클라이언트 코드에 대해서만 실행하도록 설정
            options: {
              configFile: path.resolve(__dirname, isServer ? '.babelrc.server.js' : '.babelrc.client.js'),
            },
          },
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: {
            loader: 'file-loader',
            options: {
              emitFile: isServer ? false : true,
            },
          },
        },
      ],
    },
    plugins: isServer
      ? []
      : [
          new CleanWebpackPlugin({ cleanOnceBeforeBuildPatterns: ['**/*', '!server.bundle.js'] }),
          new HtmlWebpackPlugin({ template: './template/index.html' }),
        ],
    mode: 'production',
  };
}

// 웹팩 설정파일에서 배열을 내보내면 배열의 각 아이템 개수만큼 웹팩이 실행된다.
// 클라이언트 코드가 먼저 번들리오디고 서버코드가 다음에 번들링된다.
module.exports = [getConfig(false), getConfig(true)];
