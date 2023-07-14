import React, { useState } from 'react';
import { PREFIX } from '@/contexts/constant';
import { CheckboxCheck } from '@/assets/images/svg';

function HISCheckbox(props) {

  const { children, id, theme, value, required, disabled, checked } = props;

  const defaultChecked = checked ? checked : false;
  const [isChecked, setIsChecked] = useState(defaultChecked);

  const CLASSNAME_ROLE = "checkbox";

  const themeData = theme ? `${PREFIX.IS}${theme}` : "";
  const requiredData = required ? "*" : "";
  const styleOption = [themeData].join(' ').trimEnd();

  return(
    <div className={`${CLASSNAME_ROLE} ${styleOption}`}>
      <input
        type="checkbox"
        id={id}
        className={`${CLASSNAME_ROLE}-input`}
        value={value}
        required={required}
        disabled={disabled}
        checked={isChecked ? checked : ''}
        onChange={() => setIsChecked((prev) => !prev)}
      />
      <label htmlFor={id} className={`${CLASSNAME_ROLE}-label`}>
        <CheckboxCheck className={`${CLASSNAME_ROLE}-icon`} width="14" height="14" fill="#fff" />
        {
          required
          ? <span className={`${CLASSNAME_ROLE} ${PREFIX.S}required`}>{requiredData}</span>
          : null
        }
        {children}
      </label>
    </div>
  )
}

HISCheckbox.defaultProps = {
  theme: 'default'
}

export default HISCheckbox
