import React from "react";
import { HISTab, HISTabMenuGroup, HISTabMenu, HISTabPanel } from 'components/HISTab';

function HISTabCustom () {
  return (
    <>
      <p>
        Noto Sans CJK KR / Font Size 12px / Line height 1.3 / Scale 1.2<br />
        Default Custom - Font Size - large(17px) / Active Color - green(#008003) / Gap Bar Height - large(18px)
      </p>
      <HISTab>
        <HISTabMenuGroup fontSize="font-large" activeColor="green" gapBarHeight="bar-large">
          <HISTabMenu tabTitle="HISTabMenu1" tabValue={1} />
          <HISTabMenu tabTitle="HISTabMenu2" tabValue={2} />
          <HISTabMenu tabTitle="HISTabMenu3" tabValue={3} />
        </HISTabMenuGroup>
        <HISTabPanel panelValue={1}>HISTabPanel1</HISTabPanel>
        <HISTabPanel panelValue={2}>HISTabPanel2</HISTabPanel>
        <HISTabPanel panelValue={3}>HISTabPanel3</HISTabPanel>
      </HISTab>
      <br />
      <p>
        Noto Sans CJK KR / Font Size 10px / Line height 1.3 / Scale 1.2<br />
        Edition Custom - Font Size - small(10px) / Active Color - orange(#ffa500) / Gap Bar Height - large(10px) / divided whole width - true
      </p>
      <HISTab>
        <HISTabMenuGroup theme="tab-edition" fontSize="font-small" gapBarHeight="bar-small" activeColor="orange" dividedWidth={true}>
          <HISTabMenu tabTitle="HISTabMenu1" tabValue={1} />
          <HISTabMenu tabTitle="HISTabMenu2" tabValue={2} />
          <HISTabMenu tabTitle="HISTabMenu3" tabValue={3} />
        </HISTabMenuGroup>
        <HISTabPanel panelValue={1}>HISTabPanel1</HISTabPanel>
        <HISTabPanel panelValue={2}>HISTabPanel2</HISTabPanel>
        <HISTabPanel panelValue={3}>HISTabPanel</HISTabPanel>
      </HISTab>
    </>
  )
}

export default HISTabCustom;