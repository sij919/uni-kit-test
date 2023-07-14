import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/pages/Header/Header';
import { PrismCodePage } from "@/pages/PrismCode";
import {
  HISToolTipDirectionCorner,
  HISToolTipClick,
  HISToolTipSize,
  HISToolTipTheme,
  HISToolTipDirection
} from '@/pages/HIS/HISToolTip';


const ToolTipDirection = `
  import HISToolTip from '@/components/HISToolTip/HISToolTip'
  import React from 'react'

  function HISToolTipDirection(props) {

    return (
      <>
        <HISToolTip label="애국가 1절" direction="top" ellipsis ellipsisWidth="100">
          동해물과 백두산이 마르고 닳도록
        </HISToolTip>
        <HISToolTip label="애국가 2절" direction="left">
          남산위에 저소나무 철갑을 두른듯
        </HISToolTip>
        <HISToolTip label="애국가 3절" direction="right">
          가을하늘 공활한데 높고 구름없이
        </HISToolTip>
        <HISToolTip label="애국가 4절" direction="bottom">
          이 기상과 이 맘으로 충성을 다하여
        </HISToolTip>
      </>
    )
  }
  export default HISToolTipDirection;
`;

const ToolTipDirectionCorner = `
  import HISToolTip from '@/components/HISToolTip/HISToolTip'
  import React from 'react'

  function HISToolTipDirectionCorner(props) {

    return (
      <>
        <HISToolTip label="애국가 1절" direction="leftTop">
          동해물과 백두산이 마르고 닳도록
        </HISToolTip>
        <HISToolTip label="애국가 2절" direction="rightTop">
          남산위에 저소나무 철갑을 두른듯
        </HISToolTip>
        <HISToolTip label="애국가 3절" direction="leftBottom">
          가을하늘 공활한데 높고 구름없이
        </HISToolTip>
        <HISToolTip label="애국가 4절" direction="rightBottom">
          이 기상과 이 맘으로 충성을 다하여
        </HISToolTip>
      </>
    )
  }

  export default HISToolTipDirectionCorner;
`;

const ToolTipTheme = `
  import HISToolTip from '@/components/HISToolTip/HISToolTip'
  import React from 'react'

  function HISToolTipTheme(props) {

    return (
      <>
        <HISToolTip label="애국가 1절" theme="default">
          동해물과 백두산이 마르고 닳도록
        </HISToolTip>
        <HISToolTip label="애국가 2절" theme="dark">
          남산위에 저소나무 철갑을 두른듯
        </HISToolTip>
        <HISToolTip label="애국가 3절" theme="red">
          가을하늘 공활한데 높고 구름없이
        </HISToolTip>
      </>
    )
  }

  export default HISToolTipTheme;
`;

const ToolTipSize = `
  import HISToolTip from '@/components/HISToolTip/HISToolTip'
  import React from 'react'

  function HISToolTipSize(props) {

    return (
      <>
        <HISToolTip label="하느님이 보우하사 우리나라만세 무궁화 삼천리 화려강산 대한사람 대한으로 길이보전하세">
          동해물과 백두산이 마르고 닳도록
        </HISToolTip>
        <HISToolTip label="하느님이 보우하사 우리나라만세 무궁화 삼천리 화려강산 대한사람 대한으로 길이보전하세" size="200">
          동해물과 백두산이 마르고 닳도록
        </HISToolTip>
        <HISToolTip label="하느님이 보우하사 우리나라만세 무궁화 삼천리 화려강산 대한사람 대한으로 길이보전하세" size="100">
          동해물과 백두산이 마르고 닳도록
        </HISToolTip>
      </>
    )
  }

  export default HISToolTipSize;
`;

const ToolTipClick = `
  import HISToolTip from '@/components/HISToolTip/HISToolTip'
  import React from 'react'

  function HISToolTipClick(props) {

    return (
      <>
        <HISToolTip label="하느님이 보우하사 우리나라만세 무궁화 삼천리 화려강산 대한사람 대한으로 길이보전하세" click="off">
          동해물과 백두산이 마르고 닳도록
        </HISToolTip>
        <HISToolTip label="하느님이 보우하사 우리나라만세 무궁화 삼천리 화려강산 대한사람 대한으로 길이보전하세" click="on">
          동해물과 백두산이 마르고 닳도록
        </HISToolTip>
      </>
    )
  }

  export default HISToolTipClick;
`;

function HISToolTipPage() {
  const location = useLocation();

  return (
    <>
      <Header title={location.state} />
      <h2 className="guide-title"><span>UI Kit</span></h2>
      <div className="guide-box" id="HISToolTip">
        <h3>ToolTip</h3>
        <h4>Direction</h4>
        <div className="component-wrap component-wrap-horizontal">
          <div className="tooltip-wrap">
            <HISToolTipDirection />
          </div>
        </div>
        <PrismCodePage code={ToolTipDirection} language="javascript" />

        <h4>Direction Corner</h4>
        <div className="component-wrap component-wrap-horizontal">
          <div className="tooltip-wrap">
            <HISToolTipDirectionCorner />
          </div>
        </div>
        <PrismCodePage code={ToolTipDirectionCorner} language="javascript" />

        <h4>Theme</h4>
        <div className="component-wrap component-wrap-horizontal">
          <div className="tooltip-wrap">
            <HISToolTipTheme />
          </div>
        </div>
        <PrismCodePage code={ToolTipTheme} language="javascript" />

        <h4>Size</h4>
        <div className="component-wrap component-wrap-horizontal">
          <div className="tooltip-wrap">
            <HISToolTipSize />
          </div>
        </div>
        <PrismCodePage code={ToolTipSize} language="javascript" />

        <h4>Click</h4>
        <div className="component-wrap component-wrap-horizontal">
          <div className="tooltip-wrap">
            <HISToolTipClick />
          </div>
        </div>
        <PrismCodePage code={ToolTipClick} language="javascript" />
      </div>
    </>
  )
}

export default HISToolTipPage
