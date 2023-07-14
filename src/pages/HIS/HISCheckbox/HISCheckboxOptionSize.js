import React from "react";
import {
  HISCheckbox,
} from "components/HISCheckbox";

function HISCheckboxOptionSize () {

  return (
    <>
      <HISCheckbox id="option1" size="xsmall">
        XSmall
      </HISCheckbox>
      <HISCheckbox id="option2" size="small">
        Small
      </HISCheckbox>
      <HISCheckbox id="option3">Medium</HISCheckbox>
      <HISCheckbox id="option4" size="large">
        Large
      </HISCheckbox>
      <HISCheckbox id="option5" size="xlarge">
        XLarge
      </HISCheckbox>
    </>
  )

}

export default HISCheckboxOptionSize