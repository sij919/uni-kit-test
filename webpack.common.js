const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SpritesmithPlugin = require('webpack-spritesmith');
const Fontagon = require('fontagon');

Fontagon({
  files: [
    'src/assets/images/icon/*.svg' /* 변환할 svg 경로 */
  ],
  dist: 'src/assets/iconfont', /* 변환한 font, style 저장 경로 */
  fontName: 'his-icon', /* font-family로 쓰일 폰트 이름 */
  style: 'sass', /* 추출할 style 종류 */
  classOptions: { /* css template의 추가 옵션 */
    baseClass: 'his',
    classPrefix: 'h'
  }
});

module.exports = {
  entry: path.join(__dirname, 'src', 'index.js'),
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    extensions: ['.js', '.scss'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  output: {
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.?(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
        resolve: {
          extensions: ['.js', '.jsx'],
        },
      },
      {
        test: /\.(gif|jpe?g|webp|png)$/i,
        exclude: [/node_modules/, /sprite\.png$/],
        use: [
          'file-loader?name=[path][name].[ext]',
          {
            loader: 'image-webpack-loader',
            options: {
              // 손실 압축
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.90],
                speed: 4
              },
              gifsicle: {
                interlaced: false,
              },
              webp: {
                quality: 75
              }
              // 무손실 압축
              // jpegtran: {
              //   progressive: true
              // },
              // optipng: {
              //   enabled: true,
              // },
              // gifsicle: {
              //   interlaced: true,
              // }
            }
          }
        ]
      },
      {
        test: /\.svg$/i,
        type: 'asset',
        resourceQuery: /url/,
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: [/url/] },
        use: [
          {
            loader: '@svgr/webpack'
          }
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true
      },
      filename: './index.html',
      favicon: './public/favicon.ico'
    }),
    new SpritesmithPlugin({
      src: {
        cwd: path.resolve(__dirname, 'src/assets/images/icon'),
        glob: '*.png'
      },
      target: {
        image: path.resolve(__dirname, 'src/assets/images/common/sprite.png'),
        css: path.resolve(__dirname, 'src/assets/scss/lib/_sprite.scss'),
      }
    })
  ]
};