import React, { useEffect, useRef, useState } from 'react'

function HISPopOverPanel(props) {
  const {position, active, width, height, borderColor, bgColor, innerButton, innerButtonToggle, children, dimmed} = props;

  const CLASSNAME_ROLE = 'popover';

  const [popOver, setPopOver] = useState();
  const popOverRef = useRef(null);

  const popOverRect = () => {
    const rect = popOverRef.current?.getBoundingClientRect().height;
    setPopOver(rect)
  }

  useEffect(() => {
    popOverRect()
  }, [])

  const popOverWidth = `-${width}`;
  const positionTop = "0";
  const popOverHeight = `-${height}`;
  const popInnerBtnWidth = width;

  return (
    <div className={`${CLASSNAME_ROLE} ${position && active === "on" && position}`}
      style={{width: width, height: height,
        left: `${position === "left" ? popOverWidth : null}`,
        top: `${position === "left" ? positionTop :
          position === "right" ? positionTop :
          position === "top" ? popOverHeight : null
        }`,
        right: `${position === "right" ? popOverWidth : null}`,
        bottom: `${position === "bottom" ? popOverHeight : null}`,
        borderColor: `${borderColor}`,
        backgroundColor: `${bgColor}`,
        zIndex: `${dimmed ? "9999" : ""}`
        }}
      active={active}>
      <div className={`${CLASSNAME_ROLE}-content-wrap`}>{children}</div>
      {innerButton && (
        <div className={`${CLASSNAME_ROLE}-btn ${position}`} ref={popOverRef}
          style={{
            left: `${position === "left" ? popInnerBtnWidth : null}`,
            bottom: `${position === "top" ? `-${popOver}px` : null}`,
            right: `${position === "right" ? popInnerBtnWidth : null}`,
            top: `${position === "bottom" ? `-${popOver}px` : null}`
          }}
        >
          {innerButton !== "left" && innerButton !== "right" && innerButton !== "top" && innerButton !== "bottom" ? (
            <>{innerButton}</>
          ):(<></>)}
          {innerButton === "left" && position === "left" ? (
            <>
              <div onClick={innerButtonToggle} active={active} className={`${CLASSNAME_ROLE}-btn-inner left`}><span className={`${CLASSNAME_ROLE}-btn-inner-triangle ${active === "on" ? "on" : "off"}`}></span></div>
            </>
          ):(<></>)}
          {innerButton === "right" && position === "right" ? (
            <>
              <div onClick={innerButtonToggle} active={active} className={`${CLASSNAME_ROLE}-btn-inner right`}><span className={`${CLASSNAME_ROLE}-btn-inner-triangle ${active === "on" ? "on" : "off"}`}></span></div>
            </>
          ):(<></>)}
          {innerButton === "top" && position === "top" ? (
            <>
              <div onClick={innerButtonToggle} active={active} className={`${CLASSNAME_ROLE}-btn-inner top`}><span className={`${CLASSNAME_ROLE}-btn-inner-triangle ${active === "on" ? "on" : "off"}`}></span></div>
            </>
          ):(<></>)}
          {innerButton === "bottom" && position === "bottom" ? (
            <>
              <div onClick={innerButtonToggle} active={active} className={`${CLASSNAME_ROLE}-btn-inner bottom`}><span className={`${CLASSNAME_ROLE}-btn-inner-triangle ${active === "on" ? "on" : "off"}`}></span></div>
            </>
          ):(<></>)}
        </div>
      )}
      </div>
  )
}


export default HISPopOverPanel

HISPopOverPanel.defaultProps = {
  position: "right",
  width: "200px",
  height: "100%",
  bgColor: "#fafafa",
  borderColor: "#c4c4c4",
}