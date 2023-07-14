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
      labelText: "전체선택 상태",
    },
    checkBoxAllList: [
      {
        id: "inputCheckBox1",
        value: "inputCheckBox1",
        checked: inputData.inputCheckBox1,
        name: "checkBoxGroup",
        labelText: "Default",
      },
      {
        id: "inputCheckBox2",
        value: "inputCheckBox2",
        checked: inputData.inputCheckBox2,
        name: "checkBoxGroup",
        labelText: "Default",
      },
      {
        id: "inputCheckBox3",
        value: "inputCheckBox3",
        checked: inputData.inputCheckBox3,
        name: "checkBoxGroup",
        labelText: "Default",
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