import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/pages/Header/Header';
import { PrismCodePage } from '@/pages/PrismCode';
import '@/assets/scss/tools/_sprite-style.scss';

// Sprite
import spriteVariable from '@/assets/images/common/capture-sprite-variable.png';
import spriteName from '@/assets/images/common/capture-sprite-name.png';

const settingCode = [
`yarn init -y`,
`yarn add -D @babel/core@^7.21.0 @babel/cli@^7.21.0 @babel/preset-env@^7.20.2 @babel/preset-react@^7.18.6`,
`{
  "presets": ["@babel/env", "@babel/preset-react"]
}`,
`yarn add -D webpack@^5.75.0 webpack-cli@^5.0.1 webpack-dev-server@^4.11.1`,
`yarn add -D babel-loader@^9.1.2 style-loader@^3.3.1 sass@^1.58.3 sass-loader@^13.2.0 css-loader@^6.7.3 file-loader@^6.2.0 html-webpack-plugin@^5.5.0 clean-webpack-plugin@^4.0.0`,
`yarn add react@^18.2.0 react-dom@^18.2.0`,
`import React from 'react';

function App() {
  return (
    <div className="App">

    </div>
  );
}

export default App`,
`import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);`,
  `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>HIS UI KIT</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>`,
  `{
  "compilerOptions": {
    "target": "esnext",
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"] /* '../../icon.png' -> '@/assets/images/icon/icon.png' 형태처럼 파일에 대한 절대 경로 설정 */
    }
  },
  "include": [
    "src"
  ]
}`,
`const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, 'src', 'index.js'),
	mode: 'development',
  resolve: {
    modules: ['node_modules', 'src/assets/images/common'],
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
        test: /\\.(js|jsx)$/,
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
        test: /\\.s?[ac]ss/i,
        use: [
          'style-loader',
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
      {
        test: /\\.(gif|jpe?g|webp|png)$/i,
        use: ['file-loader?name=[path][name].[ext]']
      },
    ]
  },
  plugins: [
		new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html'
    }),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
};`,
`"scripts": {
  "start": "webpack-dev-server --open",
  "build": "NODE_ENV=production webpack --progress",
}`
];

const imageWebpackLoaderCode = [
`yarn add -D image-webpack-loader@^8.1.0`,
`jpegtran: {
  progressive: true
},
optipng: {
  enabled: true
},
gifsicle: {
  interlaced: true,
}`,
`module.exports = {
  module: {
    rules: [
      {
        test: /\\.(gif|jpe?g|webp|png)$/i,
        use: [
          'file-loader?name=[path][name].[ext]',
          {
            loader: 'image-webpack-loader',
            options: {
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
            }
          }
        ]
      },
    ]
  }
}`,
`import React from 'react';

// img
import img01 from '@/assets/images/common/img01.png';
import img02 from '@/assets/images/common/img02.gif';
import img03 from '@/assets/images/common/img03.jpg';

function App() {
  return (
    <div className="App">
      <h1>이미지 최적화</h1>
      <img src={img01} alt="이미지1" />
      <img src={img02} alt="이미지2" />
      <img src={img03} alt="이미지3" />
    </div>
  );
}

export default App`,
`yarn build`,
`yarn start`
];

const spriteSmithCode = [
`yarn add -D webpack-spritesmith@^1.1.0`,
`const SpritesmithPlugin = require('webpack-spritesmith');

module.exports = {
  module: {
    rules: [
      {
        test: /\\.(gif|jpe?g|webp|png)$/i,
        exclude: [/node_modules/, /sprite\\.png$/], /* 이미지 최적화 시 sprite.png 파일 제외 */
        use: [
          'file-loader?name=[path][name].[ext]',
          {
            loader: 'image-webpack-loader',
            options: {
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
            }
          }
        ]
      }
    ]
  },
  plugins: [
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
  ],
};`,
`yarn build`,
`@mixin sprite-retina($sprite, $num) {
  $sprite-offset-x: calc(nth($sprite, 3) / $num);
  $sprite-offset-y: calc(nth($sprite, 4) / $num);
  $sprite-width: calc(nth($sprite, 5) / $num);
  $sprite-height: calc(nth($sprite, 6) / $num);
  $sprite-total-width: calc(nth($sprite, 7) / $num);
  $sprite-total-height: calc(nth($sprite, 8) / $num);
  width: $sprite-width;
  height: $sprite-height;
  background-size: $sprite-total-width $sprite-total-height;
  background-position: $sprite-offset-x $sprite-offset-y;
}`,
`[Selector] {
	@include sprite($이미지 파일명);
}`,
`@import '../lib/sprite'; // 빌드 이후 생성된 sprite
@import './sprite-retina'; // 레티나 스타일

/* icon에 있는 파일명으로 변수명 지정 */
$sprite: (
  profile: $icon-profile,
  favorite: $icon-favorite-on,
  warning: $icon-warning,
  vip: $icon-vip,
  money: $icon-money-on,
  memo: $icon-memo-on
);

.retina {
  @each $key, $icon in $sprite {
    &-1x-#{$key} {
      @include sprite($icon);
      @include sprite-retina($icon, 3);
      display: inline-block;
    }
    &-2x-#{$key} {
      @include sprite($icon);
      @include sprite-retina($icon, 2);
      display: inline-block;
    }
    &-3x-#{$key} {
      @include sprite($icon);
      @include sprite-retina($icon, 1);
      display: inline-block;
    }
  }
}`,
`import React from 'react';

// scss
import '@/assets/scss/tools/_sprite-style.scss'; // sprite style(custom)

function App() {
  return (
    <div className="App">
      <h1>이미지 스프라이트</h1>
      <div className="retina">
        <span className="component-sub-title">@1x (retina)</span>
        <span className="retina-1x-profile"></span>
        <span className="retina-1x-favorite"></span>
        <span className="retina-1x-warning"></span>
        <span className="retina-1x-vip"></span>
        <span className="retina-1x-money"></span>
        <span className="retina-1x-memo"></span>
      </div>
      <div className="retina">
        <span className="component-sub-title">@2x (retina)</span>
        <span className="retina-2x-profile"></span>
        <span className="retina-2x-favorite"></span>
        <span className="retina-2x-warning"></span>
        <span className="retina-2x-vip"></span>
        <span className="retina-2x-money"></span>
        <span className="retina-2x-memo"></span>
      </div>
      <div className="retina">
        <span className="component-sub-title">@3x (retina)</span>
        <span className="retina-3x-profile"></span>
        <span className="retina-3x-favorite"></span>
        <span className="retina-3x-warning"></span>
        <span className="retina-3x-vip"></span>
        <span className="retina-3x-money"></span>
        <span className="retina-3x-memo"></span>
      </div>
    </div>
  );
}

export default App`,
];

const svgIconFontCode = [
`yarn add -D fontagon@^1.1.1`,
`const Fontagon = require('fontagon');

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
});`,
`yarn build`,
`import React from 'react';

// SVG Font sass
import '@/assets/iconfont/his-icon.sass';

function App() {
  return (
    <div className="App">
      <h1>SVG Font</h1>
      <span className="his h-icons h-icon-font-check"></span>
      <span className="his h-icons h-icon-font-envelope"></span>
      <span className="his h-icons h-icon-font-home"></span>
      <span className="his h-icons h-icon-font-marker"></span>
      <span className="his h-icons h-icon-font-phone-call"></span>
      <span className="his h-icons h-icon-font-search"></span>
      <span className="his h-icons h-icon-font-settings"></span>
      <span className="his h-icons h-icon-font-user"></span>
    </div>
  );
}

export default App`,
``,
``,
];

const svgrWebpackCode = [
`yarn add -D @svgr/webpack@^6.5.1`,
`module.exports = {
  module: {
    rules: [
      /* svgr/webpack : img tag, style background 활용 옵션 */
      {
        test: /\\.svg$/i,
        type: 'asset',
        resourceQuery: /url/, // *.svg?url
      },
      /* svgr/webpack : react component 활용 옵션 */
      {
        test: /\\.svg$/i,
        issuer: /\\.[jt]sx?$/,
        resourceQuery: { not: [/url/] }, // exclude react component if *.svg?url
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              svgo: false,
            },
          }
        ],
      },
    ]
  }
}`,
`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.2418 3.62262H12.0001H10.8557M18.4571 3.62262H18.8668V3.62262C20.131 3.62262 21.1557 4.6474 21.1557 5.91153V17.0382C21.1557 19.0608 19.5161 20.7004 17.4935 20.7004H6.50674C4.48413 20.7004 2.84448 19.0608 2.84448 17.0382V5.91153C2.84448 4.6474 3.86926 3.62262 5.13339 3.62262V3.62262H5.54312" stroke="#1C1C1C" stroke-width="1.7" stroke-linecap="round"/>
<path d="M9.01978 12.7782L9.76481 13.5233C10.1763 13.9348 10.8434 13.9348 11.2549 13.5233L14.9801 9.7981" stroke="#1C1C1C" stroke-width="1.7" stroke-linecap="round"/>
<path d="M8.02637 2.84436V4.83113" stroke="#DF1463" stroke-width="1.7" stroke-linecap="round"/>
<path d="M15.9736 2.84436V4.83113" stroke="#DF1463" stroke-width="1.7" stroke-linecap="round"/>
</svg>`,
`import React from 'react';

// SVG Image
import checkUrl from '@/assets/images/svg/check.svg?url'; // img, Style - background-image
import Check from '@/assets/images/svg/check.svg'; // React Component

function App() {
  return (
    <div className="App">
      <h1>SVG Inline</h1>
      <div>
        <img src={checkUrl} width="24" height="24" />
      </div>
      <span className="component-sub-title">React Component</span>
      <div>
        <Check width="24" height="24" />
      </div>
      <span className="component-sub-title">Style - background-image</span>
      <div>
        <div className="svg-inline"></div>
      </div>
    </div>
  );
}

export default App`,
`import check from '@/assets/images/svg/check.svg?url';

...

<img src={check} width="20" height="20" />`,
`import Check from '@/assets/images/svg/check.svg';

...

<Check width="20" height="20" />`,
`<div className="element"></div>`,
`.element {
  width: 20px;
  height: 20px;
  background: url('@/assets/images/svg/check.svg?url') 50% 50% no-repeat;
  background-size: cover;
}`,
``,
];

const commandCode = [
  `yarn build`,
  `yarn start`
];

function Plugin() {
  const location = useLocation();

  return (
    <>
      <Header title={location.state} />
      <h2 className="guide-title"><span>UI Develop</span></h2>
      <div className="guide-box" id="Plugin">
        <h3>Plugin</h3>
        <p><span className="tag">Webpack 5.75.0</span> / <span className="tag">Node 14.19.0</span> / <span className="tag">Sass</span> 개발 환경 설정 후 플러그인 활용 가능 합니다.</p>

        <h4>개발 환경 구성</h4>
        <p>1. React 환경 설정 - <span className="tag">package.json</span> 생성</p>
        <PrismCodePage code={settingCode[0]} language="bash" />
        <p>2. Babel</p>
        <p>• Babel 설정에 필요한 패키지 설치<br />
          (
            <span className="tag">babel/core</span>,
            <span className="tag"> babel/cli</span>,
            <span className="tag"> babel/preset-env</span>,
            <span className="tag"> babel/preset-react</span>
          )
        </p>
        <PrismCodePage code={settingCode[1]} language="bash" />
        <p>• 최상위 경로에 <span className="tag">.babelrc</span> 파일 생성 후 설정 내용 작성 및 저장</p>
        <PrismCodePage code={settingCode[2]} language="js" />
        <p>3. Webpack</p>
        <p>• Webpack 관련 패키지 설치<br />
          (
            <span className="tag">webpack</span>,
            <span className="tag"> webpack-cli</span>,
            <span className="tag"> webpack-dev-server</span>
          )
        </p>
        <PrismCodePage code={settingCode[3]} language="bash" />
        <p>• Webpack 설정에 필요한 Plugin, Loader 설치<br />
          (
            <span className="tag">babel-loader</span>,
            <span className="tag"> style-loader</span>,
            <span className="tag"> sass</span>,
            <span className="tag"> sass-loader</span>,
            <span className="tag"> css-loader</span>,
            <span className="tag"> file-loader</span>,
            <span className="tag"> html-webpack-plugin</span>,
            <span className="tag"> clean-webpack-plugin</span>
          )
        </p>
        <PrismCodePage code={settingCode[4]} language="bash" />
        <p>4. React</p>
        <p>• React, React-DOM 설치</p>
        <PrismCodePage code={settingCode[5]} language="bash" />
        <p>5. <span className="tag">public</span>, <span className="tag">src</span> 폴더 생성</p>
        <p>6. src 폴더 아래에 <span className="tag">App.js</span> 생성</p>
        <PrismCodePage code={settingCode[6]} language="jsx" />
        <p>7. src 폴더 아래에 <span className="tag">index.js</span> 생성</p>
        <PrismCodePage code={settingCode[7]} language="jsx" />
        <p>8. public 폴더 아래에 <span className="tag">index.html</span> 생성</p>
        <PrismCodePage code={settingCode[8]} language="jsx" />
        <p>9. 파일 절대 경로 설정</p>
        <p>• 최상위 경로에 <span className="tag">jsconfig.json</span> 파일 생성 후 path에 관련된 설정 내용 작성 및 저장</p>
        <PrismCodePage code={settingCode[9]} language="js" />
        <p>10. Webpack 설정</p>
        <p>• 최상위 경로에 <span className="tag">webpack.config.js</span> 파일 생성 후 설정 내용 작성 및 저장</p>
        <PrismCodePage code={settingCode[10]} language="js" />
        <p>11. <span className="tag">package.json</span>에 명령 등록</p>
        <p>• build : <span className="tag">yarn build</span>로 사용되며, 배포버전 파일 생성(build)</p>
        <p>• start : <span className="tag">yarn start</span>, <span className="tag">yarn run start</span>로 사용되며, 서버를 가동하고 실시간 서버 재로딩</p>
        <PrismCodePage code={settingCode[11]} language="js" />

        <h4>이미지 크기 최적화</h4>
        <p>1. <span className="tag">image-webpack-loader</span> 설치</p>
        <PrismCodePage code={imageWebpackLoaderCode[0]} language="bash" />
        <p>2. <span className="tag">Webpack (<u>webpack.config.js</u>)</span>에 로더 옵션 추가</p>
        <div className="guide-contents">
          <div className="guide-contents-section" style={{ width: '50%' }}>
            <h5>이미지 압축</h5>
            <table>
              <thead>
                  <tr>
                    <th>이미지 형식</th>
                    <th>손실 압축</th>
                    <th>무손실 압축</th>
                  </tr>
              </thead>
              <tbody>
                <tr>
                  <td>JPEG</td>
                  <td className="red">mozjpeg</td>
                  <td>jpegtran</td>
                </tr>
                <tr>
                  <td>PNG</td>
                  <td className="red">pngquant</td>
                  <td className="red">optipng</td>
                </tr>
                <tr>
                  <td>GIF</td>
                  <td><s>giflossy</s></td>
                  <td className="red">gifsicle</td>
                </tr>
                <tr>
                  <td>SVG</td>
                  <td className="red">svgo</td>
                  <td></td>
                </tr>
                <tr>
                  <td>WebP</td>
                  <td className="blue">webp</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
            <span className="red">기본 옵션</span> / <span className="blue">선택 옵션</span>
          </div>
          <div className="guide-contents-section" style={{ width: '50%' }}>
            <h5>무손실 압축 옵션</h5>
            <PrismCodePage code={imageWebpackLoaderCode[1]} language="js" />
          </div>
        </div>
        <PrismCodePage code={imageWebpackLoaderCode[2]} language="js" />
        <p>3. <span className="tag">assets > images > common</span> 폴더 생성</p>
        <p>4. <span className="tag">assets > images > common</span>에 이미지 삽입</p>
        <p>5. <span className="tag">JS</span> 파일 작성</p>
        <PrismCodePage code={imageWebpackLoaderCode[3]} language="js" />

        <h4>SPRITE 이미지 생성</h4>
        <p>1. <span className="tag">webpack-spritesmith</span> 설치</p>
        <PrismCodePage code={spriteSmithCode[0]} language="bash" />
        <p>2. <span className="tag">assets > images > icon</span>, <span className="tag">assets > scss</span> 폴더 생성</p>
        <p>3. <span className="tag">assets > images > icon</span> 폴더에 sprite로 생성할 아이콘 추가</p>
        <p>4. <span className="tag">Webpack (<u>webpack.config.js</u>)</span>에 플러그인 옵션 추가</p>
        <div className="guide-contents">
          <div className="guide-contents-section" style={{ width: '100%' }}>
            <div className="guide-contents-description">
              <h5>• src</h5>
              <p>cwd: 아이콘이 위치한 경로</p>
              <p>glob: 아이콘 확장자 (png만 가능)</p>
            </div>
            <div className="guide-contents-description">
              <h5>• target</h5>
              <p>image: sprite로 내보낼 이미지 경로</p>
              <p>css: sprite의 각 위치별로 내보낼 scss(css) 파일 경로</p>
            </div>
            <div className="guide-contents-description">
              <h5>• apiOptions</h5>
              <p>cssImageRef: api에서 참조하는 sprite image 경로</p>
            </div>
            <div className="guide-contents-description">
              <h5>• retina</h5>
              <p>retina: 가져 올 이미지(normal)와 레티나 이미지(@2x)가 같은 폴더에 있는 경우 사용 가능.</p>
              <p>'@2x', '@3x' 이미지 모두 설정 할 경우 SpritesmithPlugin 설정을 동일하게 반복해야 함.
              (* 레티나 이미지 묶음이 서로 다른 폴더로 구성되어야 함.)</p>
            </div>
          </div>
        </div>
        <PrismCodePage code={spriteSmithCode[1]} language="js" />
        <p>5. 빌드를 통해 <span className="tag">sprite.png</span>, <span className="tag">_sprite.scss</span> 생성</p>
        <PrismCodePage code={spriteSmithCode[2]} language="bash" />
        <p>6. Retina 이미지 스타일 생성 (<span className="tag">scss > tools > _sprite-retina.scss</span>)</p>
        <div className="guide-contents">
          <div className="guide-contents-section" style={{ width: '100%' }}>
            <div className="guide-contents-description">
              <h5>• Sprite 변수</h5>
              <p>
                빌드 후 선언된 _sprite.scss 내에서 속성 변경이 가능한 변수 정리<br />
                <img src={spriteVariable} alt="스프라이트 변수" />
              </p>
              <p>sprite-offset-x : 스프라이트 x축 위치</p>
              <p>sprite-offset-y : 스프라이트 y축 위치</p>
              <p>sprite-width : 스프라이트 넓이</p>
              <p>sprite-height : 스프라이트 높이</p>
              <p>sprite-total-width : 스프라이트 전체 넓이</p>
              <p>sprite-total-height : 스프라이트 전체 높이</p>
            </div>
          </div>
        </div>
        <PrismCodePage code={spriteSmithCode[3]} language="scss" />
        <p>6. <span className="tag">scss > tools > _sprite-style.scss</span> 생성</p>
        <div className="guide-contents">
          <div className="guide-contents-section" style={{ width: '100%' }}>
            <div className="guide-contents-description">
              • 별도의 커스텀 스타일로 관리 (tools 폴더)<br />
              • 스프라이트 이미지 추가 시 반드시 빌드(<span className="tag">yarn build</span>)하여 업데이트 되어야 함.
            </div>
          </div>
        </div>
        <p>7. <span className="tag">_sprite-style.scss</span> 작성</p>
        <div className="guide-contents">
          <div className="guide-contents-section" style={{ width: '50%' }}>
            <div className="guide-contents-description">
              <h5>• 이미지 변수명 = 파일명</h5>
              <p>
                <img src={spriteName} alt="스프라이트 이름" />
              </p>
            </div>
          </div>
          <div className="guide-contents-section" style={{ width: '50%' }}>
            <div className="guide-contents-description">
              예)
              <table>
                <thead>
                    <tr>
                      <th>파일명</th>
                      <th>변수명</th>
                    </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>icon-favorite-on.png</td>
                    <td>$icon-favorite-on</td>
                  </tr>
                  <tr>
                    <td>icon-memo-on.png</td>
                    <td>$icon-memo-on</td>
                  </tr>
                  <tr>
                    <td>icon-money-on.png</td>
                    <td>$icon-money-on</td>
                  </tr>
                  <tr>
                    <td>icon-profile.png</td>
                    <td>$icon-profile</td>
                  </tr>
                  <tr>
                    <td>icon-vip.png</td>
                    <td>$icon-vip</td>
                  </tr>
                  <tr>
                    <td>icon-warning.png</td>
                    <td>$icon-warning</td>
                  </tr>
                </tbody>
              </table>
              <br /><br />
              <h5>sprite 스타일 작성 방법</h5>
              <PrismCodePage code={spriteSmithCode[4]} language="scss" />
            </div>
          </div>
        </div>
        <PrismCodePage code={spriteSmithCode[5]} language="scss" />
        <p>8. <span className="tag">JS</span> 작성</p>
        <PrismCodePage code={spriteSmithCode[6]} language="js" />

        <h4>SVG 아이콘 폰트</h4>
        <p>1. <span className="tag">fontagon</span> 설치 (참고:
          <span
            className="link"
            onClick={() => {window.open('https://kdydesign.github.io/2020/08/25/web-icon-font/')}}
          >
            https://kdydesign.github.io/2020/08/25/web-icon-font/
          </span>)
        </p>
        <PrismCodePage code={svgIconFontCode[0]} language="bash" />
        <p>2. <span className="tag">assets > iconfont</span> 폴더 생성 (변환한 font, style 저장)</p>
        <p>3. <span className="tag">assets > iconfont</span> 폴더에 font로 생성할 SVG 이미지 삽입</p>
        <p>4. <span className="tag">Webpack (<u>webpack.config.js</u>)</span>에 플러그인 옵션 추가</p>
        <div className="guide-contents">
          <div className="guide-contents-section" style={{ width: '50%' }}>
            <h5>style</h5>
            <p>
            - ‘all’ : 스타일 전체 내보내기 (css, sass, less, stylus)
            - 내보내고자 하는 스타일만 지정해서 내보내기 가능 (’css’, ‘sass’, ‘less’, ‘stylus’)
            </p>
          </div>
          <div className="guide-contents-section" style={{ width: '50%' }}>
            <h5>classOptions</h5>
            <p>
            - baseClass: 스타일 시트의 기본 클래스 이름 지정
            - classPrefix: 스타일 시트의 하위 클래스 요소
            </p>
          </div>
        </div>
        <PrismCodePage code={svgIconFontCode[1]} language="js" />
        <p>5. 빌드를 통해
          font(
          <span className="tag">his-icon.eot</span>,
          <span className="tag">his-icon.ttf</span>,
          <span className="tag">his-icon.woff</span>,
          <span className="tag">his-icon.woff2</span>),
          stylus(
          <span className="tag">his-icon.sass</span>,
          <span className="tag">his-icon.svg</span>) 파일 생성</p>
        <PrismCodePage code={svgIconFontCode[2]} language="bash" />
        <p>6. <span className="tag">JS</span> 작성</p>
        <div className="guide-contents">
          <div className="guide-contents-section" style={{ width: '30%' }}>
            <div className="guide-contents-description">
              <h5>className</h5>
              <table>
                <thead>
                    <tr>
                      <th>속성</th>
                      <th>클래스명</th>
                    </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="blue">classOptions<br />baseClass</td>
                    <td className="blue">his</td>
                  </tr>
                  <tr>
                    <td><span className="blue">classOptions<br />classPrefix<br /></span>-icons</td>
                    <td><span className="blue">h</span>-icons</td>
                  </tr>
                  <tr>
                    <td><span className="blue">classOptions<br />classPrefix<br /></span>[파일명]</td>
                    <td><span className="blue">h</span>-[파일명]</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="guide-contents-section" style={{ width: '70%' }}>
            <div className="guide-contents-description">
              <PrismCodePage code={svgIconFontCode[3]} language="js" />
            </div>
          </div>
        </div>

        <h4>SVG INLINE</h4>
        <p>1. <span className="tag">svgr/webpack</span> 설치</p>
        <PrismCodePage code={svgrWebpackCode[0]} language="bash" />
        <p>2. <span className="tag">Webpack (<u>webpack.config.js</u>)</span> 추가</p>
        <PrismCodePage code={svgrWebpackCode[1]} language="js" />
        <p>3. <span className="tag">assets > images > svg</span>에 check.svg 파일 생성</p>
        <PrismCodePage code={svgrWebpackCode[2]} language="xml" />
        <p>4. <span className="tag">JS</span> 작성</p>
        <PrismCodePage code={svgrWebpackCode[3]} language="jsx" />
        <div className="guide-contents">
          <div className="guide-contents-section" style={{ width: '33%' }}>
            <div className="guide-contents-description">
              <h5>• 이미지 URL 활용 - <span className="tag">&lt;img&gt; tag</span></h5>
              <PrismCodePage code={svgrWebpackCode[4]} language="jsx" />
            </div>
          </div>
          <div className="guide-contents-section" style={{ width: '33%' }}>
            <div className="guide-contents-description">
              <h5>• 컴포넌트 활용 - <span className="tag">React Component</span></h5>
              <PrismCodePage code={svgrWebpackCode[5]} language="jsx" />
            </div>
          </div>
          <div className="guide-contents-section" style={{ width: '33%' }}>
            <div className="guide-contents-description">
              <h5>• 스타일 배경 활용 - <span className="tag">Style: background-image</span></h5>
              <PrismCodePage code={svgrWebpackCode[6]} language="html" />
              <PrismCodePage code={svgrWebpackCode[7]} language="css" />
            </div>
          </div>
        </div>
        <h4>배포 및 실행</h4>
        <p>• 배포 버전 생성 (<span className="tag">build</span>)</p>
        <PrismCodePage code={commandCode[0]} language="bash" />
        <p>• 서버 실행 (<span className="tag">start</span>)</p>
        <PrismCodePage code={commandCode[1]} language="bash" />
      </div>
    </>
  )
}

export default Plugin;

