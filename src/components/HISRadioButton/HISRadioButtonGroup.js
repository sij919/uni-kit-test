import React from "react";

function HISRadioButtonGroup( {children, label} ) {

  const CLASSNAME_ROLE = 'radio-button';

  return(
    <div className={`${CLASSNAME_ROLE}-group`}>
      {label ? <div className={`${CLASSNAME_ROLE}-group-label`}>{label}</div> : ''}
      <div className={`${CLASSNAME_ROLE}-group-items`}>{children}</div>
    </div>
  )
}

export default HISRadioButtonGroup;