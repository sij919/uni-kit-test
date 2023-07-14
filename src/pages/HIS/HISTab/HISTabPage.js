import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/pages/Header/Header';
import {
  HISTabDefault,
  HISTabEdition,
  HISTabCustom,
  HISTabToolTip
} from '@/pages/HIS/HISTab';
import { PrismCodePage } from '@/pages/PrismCode';

const HISTabDefaultCode = `
  import React from "react";
  import { HISTab, HISTabMenuGroup, HISTabMenu, HISTabPanel } from 'components/HISTab';

  function HISTabDefault () {
    return (
      <>
        <HISTab>
          <HISTabMenuGroup>
            <HISTabMenu tabTitle="HISTabMenu1" tabValue={1} />
            <HISTabMenu tabTitle="HISTabMenu2" tabValue={2} />
            <HISTabMenu tabTitle="HISTabMenu3" tabValue={3} />
          </HISTabMenuGroup>
          <HISTabPanel panelValue={1}>HISTabPanel1</HISTabPanel>
          <HISTabPanel panelValue={2}>HISTabPanel2</HISTabPanel>
          <HISTabPanel panelValue={3}>HISTabPanel3</HISTabPanel>
        </HISTab>
      </>
    )
  }

  export default HISTabDefault;
`;

const HISTabEditionCode = `
  import React from "react";
  import { HISTab, HISTabMenuGroup, HISTabMenu, HISTabPanel } from 'components/HISTab';

  function HISTabEdition () {
    return (
      <>
        <HISTab>
          <HISTabMenuGroup theme="tab-edition">
            <HISTabMenu tabTitle="HISTabMenu1" tabValue={1} />
            <HISTabMenu tabTitle="HISTabMenu2" tabValue={2} />
            <HISTabMenu tabTitle="HISTabMenu3" tabValue={3} />
          </HISTabMenuGroup>
          <HISTabPanel panelValue={1}>HISTabPanel1</HISTabPanel>
          <HISTabPanel panelValue={2}>HISTabPanel2</HISTabPanel>
          <HISTabPanel panelValue={3}>HISTabPanel3</HISTabPanel>
        </HISTab>
      </>
    )
  }

  export default HISTabEdition;
`;

const HISTabCustomCode = `
  import React from "react";
  import { HISTab, HISTabMenuGroup, HISTabMenu, HISTabPanel } from 'components/HISTab';

  function HISTabCustom () {
    return (
      <>
        <HISTab fontSize="font-large" activeColor="green" gapBarHeight="bar-large">
          <HISTabMenuGroup>
            <HISTabMenu tabTitle="HISTabMenu1" tabValue={1} />
            <HISTabMenu tabTitle="HISTabMenu2" tabValue={2} />
            <HISTabMenu tabTitle="HISTabMenu3" tabValue={3} />
          </HISTabMenuGroup>
          <HISTabPanel panelValue={1}>HISTabPanel1</HISTabPanel>
          <HISTabPanel panelValue={2}>HISTabPanel2</HISTabPanel>
          <HISTabPanel panelValue={3}>HISTabPanel3</HISTabPanel>
        </HISTab>

        <HISTab theme="tab-edition" fontSize="font-small" gapBarHeight="bar-small" activeColor="orange" dividedWidth={true}>
          <HISTabMenuGroup>
            <HISTabMenu tabTitle="HISTabMenu1" tabValue={1} />
            <HISTabMenu tabTitle="HISTabMenu2" tabValue={2} />
            <HISTabMenu tabTitle="HISTabMenu3" tabValue={3} />
          </HISTabMenuGroup>
          <HISTabPanel panelValue={1}>HISTabPanel1</HISTabPanel>
          <HISTabPanel panelValue={2}>HISTabPanel2</HISTabPanel>
          <HISTabPanel panelValue={3}>HISTabPanel3</HISTabPanel>
        </HISTab>
      </>
    )
  }

  export default HISTabCustom;
`;

const HISTabToolTipCode = `
  import React from "react";
  import { HISTab, HISTabMenuGroup, HISTabMenu, HISTabPanel } from 'components/HISTab';

  function HISTabToolTip () {
    return (
      <>
        <HISTab>
          <HISTabMenuGroup>
            <HISTabMenu tabTitle="HISTabMenu1 Lorem ipsum dolor sit amet, consectetur adipiscing elit." tabValue={1} maxWidth="180px" />
            <HISTabMenu tabTitle="HISTabMenu2 Sed eu felis vitae est congue lobortis." tabValue={2} maxWidth="180px" />
            <HISTabMenu tabTitle="HISTabMenu3 Fusce suscipit gravida fermentum." tabValue={3}  maxWidth="180px" />
          </HISTabMenuGroup>
          <HISTabPanel panelValue={1}>HISTabPanel1</HISTabPanel>
          <HISTabPanel panelValue={2}>HISTabPanel2</HISTabPanel>
          <HISTabPanel panelValue={3}>HISTabPanel3</HISTabPanel>
        </HISTab>
      </>
    )
  }

  export default HISTabToolTip;
`;

function HISTabPage () {
  const location = useLocation();

  return (
    <>
      <Header title={location.state} />
      <h2 className="guide-title"><span>UI Kit</span></h2>
      <div className="guide-box" id="HISTab">
        <h3>HISTab</h3>
        <h4>HISTabDefault</h4>
        <div className="component-wrap">
          <HISTabDefault />
        </div>
        <PrismCodePage code={HISTabDefaultCode} language="javascript" />

        <h4>HISTabEdition</h4>
        <div className="component-wrap">
          <HISTabEdition />
        </div>
        <PrismCodePage code={HISTabEditionCode} language="javascript" />

        <h4>HISTabCustom</h4>
        <div className="component-wrap">
          <HISTabCustom />
        </div>
        <PrismCodePage code={HISTabCustomCode} language="javascript" />

        <h4>HISTabToolTip</h4>
        <div className="component-wrap">
          <HISTabToolTip />
        </div>
        <PrismCodePage code={HISTabToolTipCode} language="javascript" />
      </div>
    </>
  )
}


export default HISTabPage;