import React from "react";
import {
  HISRadioButton, HISRadioButtonGroup
} from "components/HISRadioButton";


function HISCheckboxOptionSize () {

  return (
    <>
      <HISRadioButtonGroup>
        <HISRadioButton id="size1" name="size" size="xsmall">
          Xsmall
        </HISRadioButton>
        <HISRadioButton id="size2" name="size" size="small">
          Small
        </HISRadioButton>
        <HISRadioButton id="size3" name="size">
          Medium
        </HISRadioButton>
        <HISRadioButton id="size4" name="size" size="large">
          Large
        </HISRadioButton>
        <HISRadioButton id="size5" name="size" size="xlarge">
          Xlarge
        </HISRadioButton>
      </HISRadioButtonGroup>
    </>
  )

}

export default HISCheckboxOptionSize;