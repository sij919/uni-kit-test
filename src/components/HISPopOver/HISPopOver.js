import React from 'react'

function HISPopOver(props) {
  const { children, active, dimmed, dimmedClose } = props;

  const CLASSNAME_ROLE = 'popover';

  return (
    <>
      <div className={`${CLASSNAME_ROLE}-container-draw`}>
        {children}
        {dimmed && active === "on" ? (
          <div className={`${CLASSNAME_ROLE}-dimmed`} onClick={dimmedClose}></div>
        ):(<></>)}
      </div>
    </>
  )
}

export default HISPopOver