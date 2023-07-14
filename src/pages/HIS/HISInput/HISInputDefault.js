import React, { useState } from "react";
import { HISInput } from "components/HISInput"


const initialDatas = {
  inputValue1: "",
  inputValue2: "",
  inputValue3: "",
  inputValue4: "",
}

function HISInputDefault () {
  const [value, setValue ] = useState(initialDatas)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue({ ...value, [name]: value })
  }
  return (
    <>
      <HISInput value={value.inputValue1} id="inputValue1" name="inputValue1" onChange={handleChange}>LABEL1</HISInput>
      <HISInput value={value.inputValue2} id="inputValue2" name="inputValue2" theme="success" onChange={handleChange}>LABEL2</HISInput>
      <HISInput value={value.inputValue3} id="inputValue3" name="inputValue3" theme="warning" onChange={handleChange}>LABEL3</HISInput>
      <HISInput value={value.inputValue4} id="inputValue4" name="inputValue4" theme="error" onChange={handleChange}>LABEL4</HISInput>
    </>
  )
}

export default HISInputDefault