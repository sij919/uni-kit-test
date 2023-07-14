import React, { useState } from "react";
import { HISInput } from "components/HISInput"


const initialDatas = {
  inputValue1: "",
  inputValue2: "",
  inputValue3: "",
  inputValue4: "",
}

function HISInputVaildator () {
  const [value, setValue ] = useState(initialDatas)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue({ ...value, [name]: value })
  }
  return (
    <>
      <HISInput value={value.inputValue2} id="inputValue6" name="inputValue6" onChange={handleChange} validate={"success"}>LABEL SUCCESS</HISInput>
      <HISInput value={value.inputValue3} id="inputValue7" name="inputValue7" onChange={handleChange} validate={"warning"}>LABEL WARNING</HISInput>
      <HISInput value={value.inputValue4} id="inputValue8" name="inputValue8" onChange={handleChange} validate={"error"}>LABEL ERROR</HISInput>
    </>
  )
}

export default HISInputVaildator