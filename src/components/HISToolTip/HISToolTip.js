import React, { useEffect, useRef, useState } from 'react'
import * as S from './style';

const DefaultColor = "#666";

export default function HISToolTip(props) {
  const { color = DefaultColor, theme, label, direction, children, click, size, toolTipClassName, ellipsis, ellipsisWidth } = props;

  const CLASSNAME_ROLE = 'tooltip';

  const [open, setOpen] = useState()

  const toolTipToggle = () => {
    if (click === "on") {
      if (!ellipsis) {
        setOpen((prev) => !prev)
      } else if (ellipsisWidth <= textEllipsis) {
        setOpen((prev) => !prev)
      }
    }
  }
  const hanldeTooltipClose = () => {
    setOpen(false);
  }
  const hanldeTooltipOpen = () => {
    if (click === "off") {
      if (!ellipsis) {
        setOpen(true);
      } else if (ellipsisWidth <= textEllipsis) {
        setOpen(true);
      }
    }
  }

  const tooltipBox = useRef(null);
  const tooltipText = useRef(null);
  const tooltipEllipsisRef = useRef(null);

  const [offset, setOffset] = useState(null);
  const [tooltip, setTooltip] = useState(null);
  const [textEllipsis, setTextEllipsis] = useState(null);

  useEffect(() => {
    window.addEventListener('click', tooltipPosition)
    window.addEventListener('mouseover', tooltipPosition)
  }, [tooltipBox.current])

  useEffect(() => {
    window.addEventListener('scroll', hanldeTooltipClose)
  }, [])

  useEffect(() => {
    tooltipTextEllipsis()
  }, [tooltipEllipsisRef.current])

  const tooltipPosition = () => {
    const tooltipWrapRect = tooltipBox.current?.getBoundingClientRect()
    const tooltipTextRect = tooltipText.current?.getBoundingClientRect()
    setOffset(tooltipWrapRect)
    setTooltip(tooltipTextRect)
  }

  const tooltipTextEllipsis = () => {
    const tooltipEllipsisRect = tooltipEllipsisRef.current?.getBoundingClientRect().width;
    setTextEllipsis(tooltipEllipsisRect)
  }



  /* ================================================================================== */
  /* render() : Front html
  /* ================================================================================== */
  return (
    <S.TooltipBox className={`${CLASSNAME_ROLE} ${open ? "on" : "off" || click === "off" ? "off" : ""}`} onMouseEnter={hanldeTooltipOpen} onMouseLeave={hanldeTooltipClose} onClick={toolTipToggle} ref={tooltipBox} ellipsisWidth={ellipsisWidth} ellipsis={ellipsis}>
      {ellipsis ? (
        <>
          <span className="tooltip-ellipsis" ref={tooltipEllipsisRef}>{children}</span>
        </>
      ):(
        <>
          {children}
        </>
      )}
      <S.TooltipText className={`${toolTipClassName ? toolTipClassName : ""}`} color={color} theme={theme} direction={direction} tooltipWrapRect={offset} tooltipTextRect={tooltip} ref={tooltipText} size={size} toolTipClassName={toolTipClassName} >
        {label}
      </S.TooltipText>
    </S.TooltipBox>
  )
}

HISToolTip.defaultProps = {
  theme: 'default',
  direction: 'top',
  click: 'off',
}