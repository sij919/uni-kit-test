import React from "react";
import {
  HISRadioButton, HISRadioButtonGroup
} from "components/HISRadioButton";


function HISCheckboxOptionBorder () {

  return (
    <>
      <HISRadioButtonGroup>
        <HISRadioButton
          id="border1"
          name="border"
          size="xsmall"
          width="thin"
        >
          Thin Border
        </HISRadioButton>
        <HISRadioButton
          id="border2"
          name="border"
          size="large"
          width="normal"
        >
          Normal Border
        </HISRadioButton>
        <HISRadioButton
          id="border3"
          name="border"
          size="xlarge"
          width="bold"
        >
          Bold Border
        </HISRadioButton>
      </HISRadioButtonGroup>
    </>
  )

}

export default HISCheckboxOptionBorder