import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/pages/Header/Header';
import {
  HISToggleSwitchDefault
} from '@/pages/HIS/HISToggleSwitch';
import { PrismCodePage } from "@/pages/PrismCode";

const ToggleSwitchState = `
  import React from 'react';
  import {
    HISToggleSwitch,
  } from 'components/HISToggleSwitch';

  function HISToggleSwitch () {
    return (
      <>
                  // Toggle - OFF
                  <HISToggleSwitch
                    id="toggle-switch-off"
                  />
                  // Toggle - ON
                  <HISToggleSwitch
                    id="toggle-switch-on"
                    theme="hover"
                    checked
                  />
              </>
    )
  }

  export default HISToggleSwitch
`;

const ToggleSwitchTextType1 = `
  import React from 'react';
  import {
    HISToggleSwitch,
  } from 'components/HISToggleSwitch';

  function HISToggleSwitch () {
    return (
      <>
                  // Toggle + Text Type 1 - OFF
                  <HISToggleSwitch
                    id="off-out"
                    theme="on-off-out"
                  />
                  // Toggle + Text Type 1 - ON
                  <HISToggleSwitch
                    id="on-out"
                    theme="on-off-out"
                    checked
                  />
              </>
    )
  }

  export default HISToggleSwitch`;

const ToggleSwitchTextType2 = `
  import React from 'react';
  import {
    HISToggleSwitch,
  } from 'components/HISToggleSwitch';

  function HISToggleSwitch () {
    return (
      <>
                  // Toggle + Text Type 2 - OFF
                  <HISToggleSwitch
                    id="off-in"
                    theme="on-off-in"
                  />
                  // Toggle + Text Type 2 - ON
                  <HISToggleSwitch
                    id="on-in"
                    theme="on-off-in"
                    checked
                  />
              </>
    )
  }

  export default HISToggleSwitch`;

const ToggleSwitchTextOutsideLeft = `
  import React from 'react';
  import {
    HISToggleSwitch,
  } from 'components/HISToggleSwitch';

  function HISToggleSwitch () {
    return (
      <>
                  // Toggle + Text Left - OFF
                  <HISToggleSwitch
                    id="off-left-1"
                    theme="on-off-left"
                  >
                    Text Left
                  </HISToggleSwitch>
                  // Toggle + Text Left - ON
                  <HISToggleSwitch
                    id="on-left"
                    theme="on-off-left"
                    checked
                  >
                    Text Left
                  </HISToggleSwitch>
              </>
    )
  }

  export default HISToggleSwitch`;

const ToggleSwitchTextOutsideRight = `
  import React from 'react';
  import {
    HISToggleSwitch,
  } from 'components/HISToggleSwitch';

  function HISToggleSwitch () {
    return (
      <>
                  // Toggle + Text Right - OFF
                  <HISToggleSwitch
                    id="off-right"
                    theme="on-off-right"
                  >
                    Text Right
                  </HISToggleSwitch>
                  // Toggle + Text Right - ON
                  <HISToggleSwitch
                    id="on-right"
                    theme="on-off-right"
                    checked
                  >
                    Text Right
                  </HISToggleSwitch>
              </>
    )
  }

  export default HISToggleSwitch`;

function HISToggleSwitchPage() {
  const location = useLocation();

  return (
    <>
      <Header title={location.state} />
      <h2 className="guide-title"><span>Toggle Switch</span></h2>
      <div className="guide-box" id="HISToggleSwitch">
        <h3>HISToggleSwitch</h3>
        <p>
          - https://www.notion.so/douzone-tes/HISToggleSwitch-1e9171c550bb4580ae34c62e0eb39d8f<br />
          - 단일 옵션의 활성화/비활성화 기능, 텍스트 변경 가능
        </p>
        <h4>State</h4>
        <div className="component-wrap component-wrap-horizontal">
          <HISToggleSwitchDefault />
        </div>
        <h4>Toggle</h4>
        <PrismCodePage code={ToggleSwitchState} language="jsx" />
        <h4>Toggle+Text Type 1</h4>
        <PrismCodePage code={ToggleSwitchTextType1} language="jsx" />
        <h4>Toggle+Text Type 2</h4>
        <PrismCodePage code={ToggleSwitchTextType2} language="jsx" />
        <h4>Toggle+Text Outside Left</h4>
        <PrismCodePage code={ToggleSwitchTextOutsideLeft} language="jsx" />
        <h4>Toggle+Text Outside Right</h4>
        <PrismCodePage code={ToggleSwitchTextOutsideRight} language="jsx" />
      </div>
    </>
  )
}

export default HISToggleSwitchPage
