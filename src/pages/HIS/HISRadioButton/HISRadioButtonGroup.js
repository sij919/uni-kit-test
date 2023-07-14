import React from "react";
import {
  HISRadioButton, HISRadioButtonGroup
} from "components/HISRadioButton";


function HISCheckboxDefault () {

  return (
    <>
      <HISRadioButtonGroup label="그룹 내 라디오 버튼들을 묶습니다.">
        <HISRadioButton id="group1" name="group">
          a
        </HISRadioButton>
        <HISRadioButton id="group2" name="group">
          b
        </HISRadioButton>
        <HISRadioButton id="group3" name="group">
          c
        </HISRadioButton>
        <HISRadioButton id="group4" name="group">
          d
        </HISRadioButton>
        <HISRadioButton id="group5" name="group">
          e
        </HISRadioButton>
      </HISRadioButtonGroup>
    </>
  )

}

export default HISCheckboxDefault