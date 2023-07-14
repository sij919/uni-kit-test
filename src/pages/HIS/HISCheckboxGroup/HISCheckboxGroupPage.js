import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/pages/Header/Header';
import { HISCheckboxGroupDefault } from "pages/HIS/HISCheckboxGroup";
import { PrismCodePage } from "@/pages/PrismCode";

const HISCheckboxGroup = `
  import React, { useState } from "react";
  import {
    HISCheckboxGroup,
    HISCheckboxGroupItems,
  } from "components/HISCheckboxGroup";

  const initialDatas = {
    inputAllCheckBox: false,
    inputCheckBox1: false,
    inputCheckBox2: false,
    inputCheckBox3: false,
    inputName: "김환자",
    inputPhone: "0101112222"
  };

  function HISCheckboxGroupTemplate () {

    const [inputData, setInputData] = useState(initialDatas);

    const inputDataList = {
      isCheckBoxAllList: {
        id: "inputAllCheckBox",
        value: "inputAllCheckBox",
        checked: inputData.inputAllCheckBox,
        name: "allCheck",
        labelText: "체크박스All",
      },
      checkBoxAllList: [
        {
          id: "inputCheckBox1",
          value: "inputCheckBox1",
          checked: inputData.inputCheckBox1,
          name: "checkBoxGroup",
          labelText: "체크박스1",
        },
        {
          id: "inputCheckBox2",
          value: "inputCheckBox2",
          checked: inputData.inputCheckBox2,
          name: "checkBoxGroup",
          labelText: "체크박스2",
        },
        {
          id: "inputCheckBox3",
          value: "inputCheckBox3",
          checked: inputData.inputCheckBox3,
          name: "checkBoxGroup",
          labelText: "체크박스3",
        }
      ]
    }

    const handleChange = (e) => {
      const target = e.target;
      const checked = target.checked;
      const value = target.value;
      setInputData({
        ...inputData,
        [value]: checked
      })
    }

    const handleCheckedItem = (selectItem) => {
      const allSelectCheckBox = {
        inputCheckBox1: true,
        inputCheckBox2: true,
        inputCheckBox3: true,
      }

      const allClearCheckBox = {
        inputCheckBox1: false,
        inputCheckBox2: false,
        inputCheckBox3: false,
      }

      if(!selectItem) {
        setInputData({
          ...inputData,
          ...allSelectCheckBox
        })
      } else {
        setInputData({
          ...inputData,
          ...allClearCheckBox
        })
      }
    }

    return (
      <>
        <HISCheckboxGroup
        items={inputDataList.isCheckBoxAllList}
        checkItems={inputDataList.checkBoxAllList}
        theme="all-check"
        handleCheckedItem={handleCheckedItem}
        />
        <HISCheckboxGroupItems
          items={inputDataList.checkBoxAllList}
          onChange={handleChange}
        />
      </>
    )
  }

  export default HISCheckboxGroupTemplate;
`;

function HISCheckboxGroupPage() {
  const location = useLocation();

  return (
    <>
      <Header title={location.state} />
      <h2 className="guide-title"><span>UI Kit</span></h2>
      <div className="guide-box" id="HISCheckboxGroup">
        <h3>Checkbox All</h3>
        <p>
          - HISCheckboxGroup : https://www.notion.so/douzone-tes/HISCheckboxGroup-3522a2fd658c438c9482419b22bf5808?pvs=4<br />
          - 목록에서 하나 이상의 옵션을 선택하는 기능 (Checkbox 사이즈 14px, 텍스트 크기 12px)
        </p>
        <h4>State</h4>
        <div className="component-wrap component-wrap-vertical">
          <HISCheckboxGroupDefault />
        </div>
         <PrismCodePage code={HISCheckboxGroup} language="javascript" />
      </div>
    </>

  )
}

export default HISCheckboxGroupPage
