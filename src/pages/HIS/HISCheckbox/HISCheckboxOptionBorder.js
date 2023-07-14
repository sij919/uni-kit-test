import React from "react";
import {
  HISCheckbox,
} from "components/HISCheckbox";

function HISCheckboxOptionBorder () {

  return (
    <>
      <HISCheckbox id="option13" size="small" width="thin">
        Thin Border
      </HISCheckbox>
      <HISCheckbox id="option14" size="medium">
        Normal Border
      </HISCheckbox>
      <HISCheckbox id="option15" size="large" width="bold">
        Bold Border
      </HISCheckbox>
    </>
  )

}

export default HISCheckboxOptionBorder