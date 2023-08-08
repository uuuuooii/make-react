const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  // 순서대로 실행

  mode: 'development',
  entry: './app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  // dev 서버
  devServer: {
    compress: true,
    port: 9999,
  },

  module: {
    rules: [
      {
        // 정규식에 매칭이 되는 파일만 'loder한테 보내줘'
        test: /\.js$/,
        // 특정 디렉토리 제외
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            // 바벨의 플로그인을 세팅
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },

  plugins: [
    // html 파일을 받아서 최종적인 Bunding 파일에 output으로 내보낼 때, 사용될 html을
    // 생성해 줄 수도 있고, 템플릿화 해서 다른 부가적인 처리를 할 수도 있는 기능
    new HtmlWebpackPlugin({
      title: '2.3 setup webpack & babel',
      template: 'index.html',
    }),
  ],
};
