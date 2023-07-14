import React from 'react'

function HISPopOverContent(props) {
  const {children, sideBar, active, position, width, height} = props;

  const CLASSNAME_ROLE = 'popover';

  return (
    <div className={`${CLASSNAME_ROLE}-content`}
      style={{
        paddingLeft: `${sideBar && active === "on" && position === "left" ? `${width}` : ""}`,
        paddingRight: `${sideBar && active === "on" && position === "right" ? `${width}` : ""}`,
        paddingTop: `${sideBar && active === "on" && position === "top" ? `${height}` : ""}`,
        paddingBottom: `${sideBar && active === "on" && position === "bottom" ? `${height}` : ""}`,
        }}
    >
      {children}
    </div>
  )
}

export default HISPopOverContent