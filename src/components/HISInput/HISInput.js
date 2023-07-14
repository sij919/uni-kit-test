import React, {useState} from "react";
import { PREFIX } from "@/contexts/constant";
import { CheckboxCheck } from "@/assets/images/svg"

function HISInput( {children, id, name, theme, value, disabled, onChange, validate} ) {

  const CLASSNAME_ROLE = 'input';
  const [focus, setFocus] = useState(false)

  const themeData = theme ? `${PREFIX.IS}${theme}` : "";
  const validateData = validate ? `${PREFIX.IS}${validate}` : "";
  const styleOption = [themeData, validateData].join(' ').trimEnd();

  const handleFocus = () => {
    setFocus(true)
  }
  const handleBlur = () => {
    setFocus(false)
  }

  return(
    <div className={`${CLASSNAME_ROLE} ${styleOption}`}>
      <span className={`${CLASSNAME_ROLE}-subject`}>
        <label htmlFor={id} className={`${CLASSNAME_ROLE}-label`}>{children}</label>
      </span>
      <span className={`${CLASSNAME_ROLE}-outline ${focus ? PREFIX.IS+'focus' : ""}`}>
        <input
          type="text"
          id={id}
          className={`${CLASSNAME_ROLE}-element`}
          value={value}
          name={name}
          disabled={disabled}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        {validate === 'success' && (
          <span className={`${CLASSNAME_ROLE}-validate`}>
            <CheckboxCheck fill="green" />
          </span>
        )}
        {validate === 'warning' && (
          <span className={`${CLASSNAME_ROLE}-validate`}>
            <CheckboxCheck fill="yellow" />
          </span>
        )}
        {validate === 'error' && (
          <span className={`${CLASSNAME_ROLE}-validate`}>
            <CheckboxCheck fill="red" />
          </span>
        )}
      </span>
    </div>
  )
}

HISInput.defaultProps = {
  theme: 'default',
}

export default HISInput;
