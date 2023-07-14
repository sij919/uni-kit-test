import React from "react";
import {
  HISRadioButton, HISRadioButtonGroup
} from "components/HISRadioButton";


function HISCheckboxOptionColor () {

  return (
    <>
      <HISRadioButtonGroup>
        <HISRadioButton id="color1" name="color">
          Blue
        </HISRadioButton>
        <HISRadioButton id="color2" name="color" color="green">
          Green
        </HISRadioButton>
        <HISRadioButton
          id="color3"
          name="color"
          color="pink"
        >
          Pink
        </HISRadioButton>
      </HISRadioButtonGroup>
    </>
  )

}

export default HISCheckboxOptionColor;