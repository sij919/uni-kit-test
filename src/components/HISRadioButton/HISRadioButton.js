import React, { useState } from 'react';
import { PREFIX } from '@/contexts/constant';

function HISRadioButton(props) {

  const { children, value, name, id, theme, required, disabled, checked } = props;

  const defaultChecked = checked ? checked : false;
  const [isChecked, setIsChecked] = useState(defaultChecked);

  const CLASSNAME_ROLE = "radio-button";
  const status = required ? "*" : "";

  const styleOption = theme ? `${PREFIX.IS}${theme}` : "";

  return (
    <div className={`${CLASSNAME_ROLE} ${styleOption}`}>
      <input
        type="radio"
        value={value}
        name={name}
        id={id}
        className={`${CLASSNAME_ROLE}-input`}
        required={required}
        disabled={disabled}
        checked={isChecked ? checked : ''}
        onChange={() => setIsChecked((prev) => !prev)}
      />
      <label htmlFor={id} className={`${CLASSNAME_ROLE}-label`}>
        <span className={`${CLASSNAME_ROLE}-icon`}></span>
        {
          required
          ? <span className={`${CLASSNAME_ROLE} ${PREFIX.S}required`}>{status}</span>
          : null
        }
        {children}
      </label>
    </div>
  );
}

HISRadioButton.defaultProps = {
  theme: 'default'
}

export default HISRadioButton