import React from "react";
import {
  HISCheckbox,
} from "components/HISCheckbox";

function HISCheckboxOptionColor () {

  return (
    <>
      <HISCheckbox id="option6">
        Blue
      </HISCheckbox>
      <HISCheckbox id="option7" color="green">
        Green
      </HISCheckbox>
      <HISCheckbox id="option8" color="pink">
        Pink
      </HISCheckbox>
    </>
  )

}

export default HISCheckboxOptionColor