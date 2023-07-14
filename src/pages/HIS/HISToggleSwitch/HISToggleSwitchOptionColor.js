import React from "react";
import {
  HISToggleSwitch,
} from "components/HISToggleSwitch";

function HISToggleSwitchOptionColor () {

  return (
    <>
      <HISToggleSwitch id="toggle-switch10" checked>
        Blue(Default)
      </HISToggleSwitch>
      <HISToggleSwitch id="toggle-switch11" color="green" checked>
        Green
      </HISToggleSwitch>
      <HISToggleSwitch id="toggle-switch12" color="pink" checked>
        Pink
      </HISToggleSwitch>
    </>
  )

}

export default HISToggleSwitchOptionColor