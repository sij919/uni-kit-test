import React from "react";
import { PrismCodePage } from "@/pages/PrismCode";

const JSCode = `const App = props => {
  return (
    <div>
      <h1> Prism JS </h1>
      <div>Awesome Syntax Highlighter</div>
    </div>
  );
};
`;

const htmlCode = `<div>
  <h1> PrismJS Tutorial </h1>
  <p>
    Prism is a lightweight, extensible syntax highlighter, built with modern web standards in mind.
  </p>
</div>`;

const CSSCode = `.app-container {
  padding-bottom: 100px;
}

.quick-link {
  width: 1000px;
  margin: 0 auto;
  ul {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    li {
      margin-right: 20px;
      a {
        font-size: 18px;
        color: #000;
        display: block;
        list-style: none;
        text-decoration: none;
      }
    }
  }
}`;

const JSXCode = `<div className="HISCheckBox">
    <h1 className="component-title">HISCheckBox</h1>
    <h2 className="component-sub-title">State</h2>
    <div className="component-wrap component-wrap-horizontal">
      <HISCheckBoxDefault />
    </div>
    <h2 className="component-sub-title">[Option] Size</h2>
    <div className="component-wrap component-wrap-horizontal">
      <HISCheckBoxOptionSize />
    </div>
    <h2 className="component-sub-title">[Option] Color</h2>
    <div className="component-wrap component-wrap-horizontal">
      <HISCheckBoxOptionColor />
    </div>
    <h2 className="component-sub-title">[Option] Border Width</h2>
    <div className="component-wrap component-wrap-horizontal">
      <HISCheckBoxOptionBorder />
    </div>
</div>`;

const BashCode = `$ yarn add mini-css-extract-plugin -D`;

const GitCode = `git push -u origin publishing`;

const XMLCode = `<?xml version="1.0" encoding="EUC-KR" ?>
<address-book>
  <entry>
    <name>Gwyneth Paltrow</name>
    <country>United States of America</country>
    <tel>011-329-9919</tel>
  </entry>
</address-book>`;

const SVGCode = `<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.2418 3.62262H12.0001H10.8557M18.4571 3.62262H18.8668V3.62262C20.131 3.62262 21.1557 4.6474 21.1557 5.91153V17.0382C21.1557 19.0608 19.5161 20.7004 17.4935 20.7004H6.50674C4.48413 20.7004 2.84448 19.0608 2.84448 17.0382V5.91153C2.84448 4.6474 3.86926 3.62262 5.13339 3.62262V3.62262H5.54312" stroke="#1C1C1C" stroke-width="1.7" stroke-linecap="round"/>
<path d="M9.01978 12.7782L9.76481 13.5233C10.1763 13.9348 10.8434 13.9348 11.2549 13.5233L14.9801 9.7981" stroke="#1C1C1C" stroke-width="1.7" stroke-linecap="round"/>
<path d="M8.02637 2.84436V4.83113" stroke="#DF1463" stroke-width="1.7" stroke-linecap="round"/>
<path d="M15.9736 2.84436V4.83113" stroke="#DF1463" stroke-width="1.7" stroke-linecap="round"/>
</svg>`;

function PrismCodeStyle() {
  return (
    <div className="PrismCodeStyle">
      <h1 className="component-title">코드 스타일 스크립트</h1>
      <div className="component-wrap">
        <span className="component-sub-title">코드 스타일 스크립트</span>
        <PrismCodePage code={JSCode} language="javascript" />
        <PrismCodePage code={htmlCode} language="html" />
        <PrismCodePage code={CSSCode} language="scss" />
        <PrismCodePage code={JSXCode} language="jsx" />
        <PrismCodePage code={BashCode} language="bash" />
        <PrismCodePage code={GitCode} language="git" />
        <PrismCodePage code={XMLCode} language="xml" />
        <PrismCodePage code={SVGCode} language="svg" />
      </div>
    </div>
  );
}

export default PrismCodeStyle