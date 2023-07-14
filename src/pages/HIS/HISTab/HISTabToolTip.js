import React from "react";
import { HISTab, HISTabMenuGroup, HISTabMenu, HISTabPanel } from 'components/HISTab';

function HISTabToolTip () {
  return (
    <>
      <p>
        Noto Sans CJK KR / Font Size 12px / Line height 1.3 / Scale 1.2<br />
        Default - Font Size Medium(14px)
      </p>
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