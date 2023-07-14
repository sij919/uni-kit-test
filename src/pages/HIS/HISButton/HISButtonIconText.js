import React from 'react';
import {
  HISButton
} from 'components/HISButton';
import { PrismCodePage } from '@/pages/PrismCode';
import iconDefault from '@/assets/images/icon/icon-check-default.svg?url';
import iconOver from '@/assets/images/icon/icon-check-over.svg?url';
import iconClick from '@/assets/images/icon/icon-check-click.svg?url';
import iconDisable from '@/assets/images/icon/icon-check-disable.svg?url';

const HISButtonIconTextLeftCode =
`// Default
<HISButton
  labelText="Default"
  type="icon"
  position="left"
  icon={{
    normal: "icon-default",
    over: "icon-over",
    click: "icon-click"
  }}
/>

// Disable
<HISButton
  labelText="Disable"
  type="icon"
  position="left"
  icon={{
    normal: "icon-default",
    disable: "icon-disable"
  }}
/>

// Custom Default
import iconDefault from '@/assets/images/icon/icon-check-default.svg?url';
import iconOver from '@/assets/images/icon/icon-check-over.svg?url';
import iconClick from '@/assets/images/icon/icon-check-click.svg?url';

<HISButton
  labelText="테스트"
  type="icon"
  position="left"
  icon={{
    normal: iconDefault,
    over: iconOver,
    click: iconClick
  }}
/>

// Custom Disable
import iconDefault from '@/assets/images/icon/icon-check-default.svg?url';
import iconDisable from '@/assets/images/icon/icon-check-disable.svg?url';

<HISButton
  labelText="테스트"
  type="icon"
  position="left"
  icon={{
    normal: iconDefault,
    disable: iconDisable
  }}
/>`;
const HISButtonIconTextRightCode =
`// Default
<HISButton
  labelText="Default"
  type="icon"
  position="right"
  icon={{
    normal: "icon-default",
    over: "icon-over",
    click: "icon-click"
  }}
/>

// Disable
<HISButton
  labelText="Disable"
  type="icon"
  position="right"
  icon={{
    normal: "icon-default",
    disable: "icon-disable"
  }}
/>

// Custom Default
import iconDefault from '@/assets/images/icon/icon-check-default.svg?url';
import iconOver from '@/assets/images/icon/icon-check-over.svg?url';
import iconClick from '@/assets/images/icon/icon-check-click.svg?url';

<HISButton
  labelText="테스트"
  type="icon"
  position="right"
  icon={{
    normal: iconDefault,
    over: iconOver,
    click: iconClick
  }}
/>

// Custom Disable
import iconDefault from '@/assets/images/icon/icon-check-default.svg?url';
import iconDisable from '@/assets/images/icon/icon-check-disable.svg?url';

<HISButton
  labelText="테스트"
  type="icon"
  position="right"
  icon={{
    normal: iconDefault,
    disable: iconDisable
  }}
/>`;
const HISButtonIconTextTopCode =
`// Default
<HISButton
  labelText="Default"
  type="icon"
  position="top"
  icon={{
    normal: "icon-default",
    over: "icon-over",
    click: "icon-click"
  }}
/>

// Disable
<HISButton
  labelText="Disable"
  type="icon"
  position="top"
  icon={{
    normal: "icon-default",
    disable: "icon-disable"
  }}
/>

// Custom Default
import iconDefault from '@/assets/images/icon/icon-check-default.svg?url';
import iconOver from '@/assets/images/icon/icon-check-over.svg?url';
import iconClick from '@/assets/images/icon/icon-check-click.svg?url';

<HISButton
  labelText="테스트"
  type="icon"
  position="top"
  icon={{
    normal: iconDefault,
    over: iconOver,
    click: iconClick
  }}
/>

// Custom Disable
import iconDefault from '@/assets/images/icon/icon-check-default.svg?url';
import iconDisable from '@/assets/images/icon/icon-check-disable.svg?url';

<HISButton
  labelText="테스트"
  type="icon"
  position="top"
  icon={{
    normal: iconDefault,
    disable: iconDisable
  }}
/>`;
const HISButtonIconTextBottomCode =
`// Default
<HISButton
  labelText="Default"
  type="icon"
  position="bottom"
  icon={{
    normal: "icon-default",
    over: "icon-over",
    click: "icon-click"
  }}
/>

// Disable
<HISButton
  labelText="Disable"
  type="icon"
  position="bottom"
  icon={{
    normal: "icon-default",
    disable: "icon-disable"
  }}
/>

// Custom Default
import iconDefault from '@/assets/images/icon/icon-check-default.svg?url';
import iconOver from '@/assets/images/icon/icon-check-over.svg?url';
import iconClick from '@/assets/images/icon/icon-check-click.svg?url';

<HISButton
  labelText="테스트"
  type="icon"
  position="bottom"
  icon={{
    normal: iconDefault,
    over: iconOver,
    click: iconClick
  }}
/>

// Custom Disable
import iconDefault from '@/assets/images/icon/icon-check-default.svg?url';
import iconDisable from '@/assets/images/icon/icon-check-disable.svg?url';

<HISButton
  labelText="테스트"
  type="icon"
  position="bottom"
  icon={{
    normal: iconDefault,
    disable: iconDisable
  }}
/>`;

function HISButtonIconText() {
  return (
    <>
      <div className="component-wrap-subject">Left</div>
      <p>
        높이는 Medium 24px, 좌우 패딩 8px, 아이콘과 텍스트 사이 패딩 4px
      </p>
      <div className="component-wrap component-wrap-horizontal component-wrap-gap">
        <HISButton
          labelText="Default"
          type="icon"
          position="left"
          icon={{
            normal: "icon-default",
            over: "icon-over",
            click: "icon-click"
          }}
        />
        <HISButton
          labelText="Over"
          type="icon"
          position="left"
          icon={{
            normal: "icon-default",
            over: "icon-over"
          }}
        />
        <HISButton
          labelText="Click"
          type="icon"
          position="left"
          icon={{
            normal: "icon-default",
            click: "icon-click"
          }}
        />
        <HISButton
          labelText="Disable"
          type="icon"
          position="left"
          icon={{
            normal: "icon-default",
            disable: "icon-disable"
          }}
        />
        <HISButton
          labelText="테스트"
          type="icon"
          position="left"
          icon={{
            normal: iconDefault,
            over: iconOver,
            click: iconClick
          }}
        />
        <HISButton
          labelText="테스트"
          type="icon"
          position="left"
          icon={{
            normal: iconDefault,
            disable: iconDisable
          }}
        />
      </div>
      <PrismCodePage code={HISButtonIconTextLeftCode} language="jsx" />

      <div className="component-wrap-subject">Right</div>
      <p>
        높이는 Medium 24px, 좌우 패딩 8px, 아이콘과 텍스트 사이 패딩 4px
      </p>
      <div className="component-wrap component-wrap-horizontal component-wrap-gap">
        <HISButton
          labelText="Default"
          type="icon"
          position="right"
          icon={{ normal: "icon-default", over: "icon-over", click: "icon-click" }}
        />
        <HISButton
          labelText="Over"
          type="icon"
          position="right"
          icon={{ normal: "icon-default", over: "icon-over" }}
        />
        <HISButton
          labelText="Click"
          type="icon"
          position="right"
          icon={{ normal: "icon-default", click: "icon-click" }}
        />
        <HISButton
          labelText="Disable"
          type="icon"
          position="right"
          icon={{ normal: "icon-default", disable: "icon-disable" }}
        />
        <HISButton
          labelText="테스트"
          type="icon"
          position="right"
          icon={{ normal: iconDefault, over: iconOver, click: iconClick}}
        />
        <HISButton
          labelText="테스트"
          type="icon"
          position="right"
          icon={{ normal: iconDefault, disable: iconDisable }}
        />
      </div>
      <PrismCodePage code={HISButtonIconTextRightCode} language="jsx" />

      <div className="component-wrap-subject">Top</div>
      <p>
        높이는 52px, 최소 폭 54px(최소 폭 넘길시 텍스트기준 좌우패딩 8px), 아이콘 16px 기준
      </p>
      <div className="component-wrap component-wrap-horizontal component-wrap-gap">
        <HISButton
          labelText="Default"
          type="icon"
          position="top"
          icon={{
            normal: "icon-default",
            over: "icon-over",
            click: "icon-click"
          }}
        />
        <HISButton
          labelText="Over"
          type="icon"
          position="top"
          icon={{
            normal: "icon-default",
            over: "icon-over"
          }}
        />
        <HISButton
          labelText="Click"
          type="icon"
          position="top"
          icon={{
            normal: "icon-default",
            click: "icon-click"
          }}
        />
        <HISButton
          labelText="Disable"
          type="icon"
          position="top"
          icon={{
            normal: "icon-default",
            disable: "icon-disable"
          }}
        />
        <HISButton
          labelText="테스트"
          type="icon"
          position="top"
          icon={{
            normal: iconDefault,
            over: iconOver,
            click: iconClick
          }}
        />
        <HISButton
          labelText="테스트"
          type="icon"
          position="top"
          icon={{
            normal: iconDefault,
            disable: iconDisable
          }}
        />
      </div>
      <PrismCodePage code={HISButtonIconTextTopCode} language="jsx" />

      <div className="component-wrap-subject">Bottom</div>
      <p>
        높이는 52px, 최소 폭 54px(최소 폭 넘길시 텍스트기준 좌우패딩 8px), 아이콘 16px 기준
      </p>
      <div className="component-wrap component-wrap-horizontal component-wrap-gap">
        <HISButton
          labelText="Default"
          type="icon"
          position="bottom"
          icon={{
            normal: "icon-default",
            over: "icon-over",
            click: "icon-click"
          }}
        />
        <HISButton
          labelText="Over"
          type="icon"
          position="bottom"
          icon={{
            normal: "icon-default",
            over: "icon-over"
          }}
        />
        <HISButton
          labelText="Click"
          type="icon"
          position="bottom"
          icon={{
            normal: "icon-default",
            click: "icon-click"
          }}
        />
        <HISButton
          labelText="Disable"
          type="icon"
          position="bottom"
          icon={{
            normal: "icon-default",
            disable: "icon-disable"
          }}
        />
        <HISButton
          labelText="테스트"
          type="icon"
          position="bottom"
          icon={{
            normal: iconDefault,
            over: iconOver,
            click: iconClick
          }}
        />
        <HISButton
          labelText="테스트"
          type="icon"
          position="bottom"
          icon={{
            normal: iconDefault,
            disable: iconDisable
          }}
        />
      </div>
      <PrismCodePage code={HISButtonIconTextBottomCode} language="jsx" />
    </>
  )
}

export default HISButtonIconText