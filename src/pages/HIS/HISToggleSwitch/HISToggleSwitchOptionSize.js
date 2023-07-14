import React from "react";
import {
  HISToggleSwitch,
} from "components/HISToggleSwitch";

function HISToggleSwitchOptionSize () {

  return (
    <>
      <HISToggleSwitch id="toggle-switch5" size="xsmall">
        XSmall
      </HISToggleSwitch>
      <HISToggleSwitch id="toggle-switch6" size="small">
        Small
      </HISToggleSwitch>
      <HISToggleSwitch id="toggle-switch7">Medium(Default)</HISToggleSwitch>
      <HISToggleSwitch id="toggle-switch8" size="large">
        Large
      </HISToggleSwitch>
      <HISToggleSwitch id="toggle-switch9" size="xlarge">
        XLarge
      </HISToggleSwitch>
    </>
  )

}

export default HISToggleSwitchOptionSize