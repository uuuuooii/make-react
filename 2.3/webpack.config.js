const path = require('path');

module.exports = {
  // 순서대로 실행

  mode: '',
  entry: '',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  module: {
    rules: [
      {
        use: {
          loader: 'babel-loader',
          option: {
            // 바벨의 플로그인을 세팅
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },

  plugins: {},
};
