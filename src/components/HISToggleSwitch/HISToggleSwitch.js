import React, { useState } from 'react';
import { PREFIX } from '@/contexts/constant';

function HISToggleSwitch({ children, checked, id, size, color, value, disabled, theme}) {
  const defaultChecked = checked ? checked : false;
  const [isChecked, setIsChecked] = useState(defaultChecked);

  const CLASSNAME_ROLE = 'toggle-switch';

  const themeData = theme ? `${PREFIX.IS}${theme}` : "";
  const sizeData = size ? `${PREFIX.IS}${size}` : "";
  const colorData = color ? `${PREFIX.IS}${color}` : "";
  const styleOption = [themeData, sizeData, colorData].join(' ').trimEnd();

  return (
    <div className={`${CLASSNAME_ROLE} ${styleOption}`}>
      <input
        type="checkbox"
        id={id}
        className={`${CLASSNAME_ROLE}-input`}
        value={value}
        checked={isChecked ? checked : ''}
        disabled={disabled}
        onChange={() => setIsChecked((prev) => !prev)}
      />
      <label htmlFor={id} className={`${CLASSNAME_ROLE}-label`}>
        <div>{children}</div>
      </label>
    </div>
  );
}

HISToggleSwitch.defaultProps = {
  theme: 'default'
}

export default HISToggleSwitch;