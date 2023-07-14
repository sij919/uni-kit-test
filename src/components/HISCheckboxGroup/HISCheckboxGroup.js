import React from "react";
import { PREFIX } from "@/contexts/constant";
import { CheckboxCheck } from "@/assets/images/svg";

function HISCheckboxGroupAll({items, checkItems, handleCheckedItem, theme, size, border, color}) {
  const {id, value, name, labelText} = items
  const checkBoxSelectFindIndex = checkItems.findIndex(item => item.checked === true)
  const checkBoxSelectFileter = checkItems.filter(item => item.checked === true)
  const isCheckBoxItemLength = checkItems.length;
  const isCheckBoxSelectFindIndex = checkBoxSelectFindIndex > -1;
  const isCheckBoxSelectFileter = checkBoxSelectFileter.length;
  const isAllSelectBox = checkBoxSelectFindIndex !== -1;

  const CLASSNAME_ROLE = 'checkbox';

  const themeData = theme ? `${PREFIX.IS}${theme}` : "";
  const sizeData = size ? `${PREFIX.IS}${size}` : "";
  const colorData = color ? `${PREFIX.IS}${color}` : "";
  const styleOption = [themeData, sizeData, colorData].join(' ').trimEnd();

  const selectClear =
    isCheckBoxSelectFindIndex &&
    isCheckBoxSelectFileter !== isCheckBoxItemLength
      ? `${PREFIX.IS}minus` : "";

  const handleAllChecked = (e) => {
    handleCheckedItem(isAllSelectBox)
  }

  return(
    <>
      <div className={`${CLASSNAME_ROLE} ${styleOption} ${selectClear}`}>
        <input
          type='checkbox'
          id={id}
          className={`${CLASSNAME_ROLE}-input`}
          name={name}
          value={value || ''}
          onChange={handleAllChecked}
          checked={isAllSelectBox}
        />
        <label htmlFor={id} className={`${CLASSNAME_ROLE}-label`}>
          <CheckboxCheck className={`${CLASSNAME_ROLE}-icon`} width="14" height="14" fill="#fff" />
          {labelText}
        </label>
      </div>
    </>
  )

}

export default HISCheckboxGroupAll;