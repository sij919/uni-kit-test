import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/pages/Header/Header';
import {
  HISInputDefault,
  HISInputValidator
} from '@/pages/HIS/HISInput';
import { PrismCodePage } from "@/pages/PrismCode";

const HISInputState = `
  import React from "react";
  import { HISInput } from "components/HISInput";

  const HISInput = () => {
    return (
      <>
        <HISInput value={value} id="inputValue" name="inputValue" onChange={handleChange}>LABEL1</HISInput>
        <HISInput value={value} id="inputValue" name="inputValue" theme="success" onChange={handleChange}>LABEL SUCCESS</HISInput>
        <HISInput value={value} id="inputValue" name="inputValue" theme="warning" onChange={handleChange}>LABEL WARNING</HISInput>
        <HISInput value={value} id="inputValue" name="inputValue" theme="error" onChange={handleChange}>LABEL ERROR</HISInput>
      </>
    )
  }

  export default HISInput;
`;

const HISInputValidatorState = `
  import React from "react";
  import { HISInput } from "components/HISInput";

  const HISInput = () => {
    return (
      <>
        <HISInput value={value} id="inputValue" name="inputValue" validator="success" onChange={handleChange}>LABEL SUCCESS</HISInput>
        <HISInput value={value} id="inputValue" name="inputValue" validator="warning" onChange={handleChange}>LABEL WARNING</HISInput>
        <HISInput value={value} id="inputValue" name="inputValue" validator="error" onChange={handleChange}>LABEL ERROR</HISInput>
      </>
    )
  }

  export default HISInput;
`;

function HISInputPage() {
  const location = useLocation();

  return (
    <>
      <Header title={location.state} />
      <h2 className="guide-title"><span>UI Kit</span></h2>
      <div className="guide-box" id="HISInput">
        <h3>Input</h3>
        <h4>state</h4>
        <div className="component-wrap">
          <HISInputDefault />
        </div>
        <PrismCodePage code={HISInputState} language="javascript" />
        <h4>validator</h4>
        <div className="component-wrap">
          <HISInputValidator />
        </div>
        <PrismCodePage code={HISInputValidatorState} language="javascript" />
      </div>
    </>
  )
}

export default HISInputPage
