import React from "react";
import { PREFIX } from "@/contexts/constant";
import { CheckboxCheck } from "@/assets/images/svg";

function HISCheckboxGroupItems({ items, onChange, theme }) {

  const CLASSNAME_ROLE = 'checkbox';

  const styleOption = theme ? `${PREFIX.IS}${theme}` : "";

  return (
    <>
      {items.map((item, index) => {
        const {
          id,
          name,
          value,
          checked,
          labelText,
        } = item;

        return (
          <div key={`${id}-${index}`} className={`${CLASSNAME_ROLE} ${styleOption}`}>
            <input
              type="checkbox"
              id={id}
              className={`${CLASSNAME_ROLE}-input`}
              name={name}
              value={value}
              checked={checked || ''}
              onChange={onChange}
            />
            <label htmlFor={id} className={`${CLASSNAME_ROLE}-label`}>
              <CheckboxCheck className={`${CLASSNAME_ROLE}-icon`} width="14" height="14" fill="#fff" />
              {labelText}
            </label>
          </div>
        );
      })}
    </>
  );
}

HISCheckboxGroupItems.defaultProps = {
  theme: 'default'
}

export default HISCheckboxGroupItems;
