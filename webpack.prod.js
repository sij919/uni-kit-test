const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const os = require('os');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.s?[ac]ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
    ]
  },
  optimization: {
    minimize: true, // 압축사용여부
    minimizer: [ // 압축할 플러그인
      new CssMinimizerPlugin({
        parallel: os.cpus().length - 1 // CPU 멀티 프로세서 병렬화 옵션 (기본 값: true)
      }),
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true, // 콘솔 로그 제거
          }
        }
      })
    ],
    splitChunks: {
      cacheGroups: { // 특정파일 chunk로 분리할 때 사용, common / chunk 분리
        commons: {
          test: /[\\/]node_modules[\\/]/, // 분리대상 파일
          name: "vendors", // chunk로 분리 시 사용될 파일명, output filename 옵션의 [name]에 대치
          chunks: "all", // 모듈 종류에 따라 chunk에 포함 여부 (all: test 조건에 포함되는 모든 것 / initial: 초기 로딩에 필요한 경우 / async: import()를 이용해 다이나믹하게 사용되는 경우 분리)
        },
      },
    }, //CommonsChunkPlugin을 계승
    concatenateModules: true, //ModuleConcatenationPlugin을 계승
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      linkType: false,
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ]
});