import styled, { css } from 'styled-components';

export const TooltipBox = styled.div`
  position: relative;
  display: inline-block;
  width: ${props => {
    if (props.ellipsisWidth) return `${props.ellipsisWidth}px`;
    return "";
  }};
  cursor: ${props => {
    if (props.click === "on") return "pointer";
  }};
  &.on {
    > span {
      visibility: visible;
      opacity: 1;
    }
  };
  .tooltip-ellipsis {
    display: block;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  };
`;
export const TooltipText = styled.span`
  visibility: hidden;
  line-height: 14px;
  box-sizing: border-box;
  padding: 7px 12px;
  max-width: ${props => {
    if (props.size) return `${props.size}px`
  }};
  /**
   * --------------------------------
   * 툴팁 위치값 정의
   * --------------------------------
   */

  position: fixed;
  z-index: 9999;

  /* fixed 기준 위치값 정의 */
  top: ${props => {
    if (props.tooltipWrapRect !== null && props.tooltipTextRect !== null && props.direction === "top") return `${props.tooltipWrapRect.top - props.tooltipTextRect.height - 10}px`;
    if (props.tooltipWrapRect !== null && props.tooltipTextRect !== null && props.direction === "left") return `${props.tooltipWrapRect.top + props.tooltipWrapRect.height / 2}px`;
    if (props.tooltipWrapRect !== null && props.tooltipTextRect !== null && props.direction === "right") return `${props.tooltipWrapRect.top + props.tooltipWrapRect.height / 2}px`;
    if (props.tooltipWrapRect !== null && props.tooltipTextRect !== null && props.direction === "bottom") return `${props.tooltipWrapRect.top + props.tooltipWrapRect.height + 10}px`;
    if (props.tooltipWrapRect !== null && props.tooltipTextRect !== null && props.direction === "leftTop") return `${props.tooltipWrapRect.top - props.tooltipTextRect.height - 10}px`
    if (props.tooltipWrapRect !== null && props.tooltipTextRect !== null && props.direction === "rightTop") return `${props.tooltipWrapRect.top - props.tooltipTextRect.height - 10}px`
    if (props.tooltipWrapRect !== null && props.tooltipTextRect !== null && props.direction === "leftBottom") return `${props.tooltipWrapRect.top + props.tooltipWrapRect.height + 10}px`;
    if (props.tooltipWrapRect !== null && props.tooltipTextRect !== null && props.direction === "rightBottom") return `${props.tooltipWrapRect.top + props.tooltipWrapRect.height + 10}px`;
    return "";
  }};
  left: ${props => {
    if (props.tooltipWrapRect !== null && props.tooltipTextRect !== null && props.direction === "top") return `${props.tooltipWrapRect.left + props.tooltipWrapRect.width / 2}px`;
    if (props.tooltipWrapRect !== null && props.tooltipTextRect !== null && props.direction === "left") return `${props.tooltipWrapRect.left - props.tooltipTextRect.width - 10}px`;
    if (props.tooltipWrapRect !== null && props.tooltipTextRect !== null && props.direction === "right") return `${props.tooltipWrapRect.left + props.tooltipWrapRect.width + 10}px`;
    if (props.tooltipWrapRect !== null && props.tooltipTextRect !== null && props.direction === "bottom") return `${props.tooltipWrapRect.left + props.tooltipWrapRect.width / 2}px`;
    if (props.tooltipWrapRect !== null && props.tooltipTextRect !== null && props.direction === "leftTop") return `${props.tooltipWrapRect.left}px`;
    if (props.tooltipWrapRect !== null && props.tooltipTextRect !== null && props.direction === "rightTop") return `${props.tooltipWrapRect.right - props.tooltipTextRect.width}px`;
    if (props.tooltipWrapRect !== null && props.tooltipTextRect !== null && props.direction === "leftBottom") return `${props.tooltipWrapRect.left}px`;
    if (props.tooltipWrapRect !== null && props.tooltipTextRect !== null && props.direction === "rightBottom") return `${props.tooltipWrapRect.right - props.tooltipTextRect.width}px`;
    return "";
  }};
  /* absolute 기준 위치값 정의 */
  /* top: ${props => {
    if (props.tooltipTextRect !== null) {
      if (props.direction === "top") return `-${props.tooltipTextRect.height + 12}px`;
      if (props.direction === "left" || props.direction === "right" ) return "50%";
    }
    return "";
  }};
  left: ${props => {
    if (props.tooltipTextRect !== null) {
      if (props.direction === "top" || props.direction === "bottom") return "50%";
      if (props.direction === "left") return `-${props.tooltipTextRect.width + 12}px`
    }
    return "";
  }};
  right: ${props => {
    if (props.tooltipTextRect !== null) {
      if (props.direction === "right") return `-${props.tooltipTextRect.width + 12}px`
    }
    return "";
  }};
  bottom: ${props => {
    if (props.tooltipTextRect !== null) {
      if (props.direction === "bottom") return `-${props.tooltipTextRect.height + 12}px`;
    }
    return "";
  }}; */
  transform: ${props => {
    if (props.direction === "top" || props.direction === "bottom" ) return "translate3d(-50%, 0, 0)";
    if (props.direction === "left" || props.direction === "right" ) return "translate3d(0, -50%, 0)";
    return "";
  }};


  /**
   * --------------------------------
   * 툴팁 테마 정의
   * --------------------------------
   */

  background-color: ${props => {
    if (props.theme === 'default') return '#fff';
    if (props.theme === "dark") return "#333";
    if (props.theme === "red") return "#FFDEDE";
    return "";
  }};
  border: 1px solid;
  border-color: ${props => {
    if (props.theme === "default") return "#a6a6a6";
    if (props.theme === "dark") return "#000";
    if (props.theme === "red") return "#FFDEDE";
  }};
  font-size: 12px;
  color: ${props => {
    if (props.theme === "default") return "#000";
    if (props.theme === "dark") return "#fff";
    return "";
  }};
  text-align: center;
  border-radius: 3px;
  opacity: 0;

  /**
   * --------------------------------
   * 툴팁 화살표 정의
   * --------------------------------
   */

  &::before {
    content: "";
    width: ${props => {
      if (props.direction === "top" || props.direction === "bottom" || props.direction === "leftTop" || props.direction === "rightTop" || props.direction === "leftBottom" || props.direction === "rightBottom") return "12px";
      if (props.direction === "left" || props.direction === "right") return "7px";
      return "";
    }};
    height: ${props => {
      if (props.direction === "top" || props.direction === "bottom" || props.direction === "leftTop" || props.direction === "rightTop" || props.direction === "leftBottom" || props.direction === "rightBottom") return "7px";
      if (props.direction === "left" || props.direction === "right") return "12px";
      return "";
    }};
    background-color: ${props => {
      if (props.theme === "default") return "#fff";
      if (props.theme === "dark") return "#333";
      if (props.theme === "red") return "#FFDEDE";
      return "";
    }};
    position: absolute;
    z-index: 2;
    top: ${props => {
      if (props.direction === "bottom" || props.direction === "leftBottom" || props.direction === "rightBottom") return "0";
      if (props.direction === "left" || props.direction === "right") return "50%";
      return "";
    }};
    bottom: ${props => {
      if (props.direction === "top" || props.direction === "leftTop" || props.direction === "rightTop") return "0";
      return "";
    }};
    left: ${props => {
      if (props.direction === "top" || props.direction === "bottom") return "50%";
      if (props.direction === "leftTop" || props.direction === "leftBottom") return "3%";
      if (props.direction === "right") return "0";
      return "";
    }};
    right: ${props => {
      if (props.direction === "left") return "0";
      if (props.direction === "rightTop") return "3%";
      if (props.direction === "rightBottom") return "6%";
      return "";
    }};
    transform: ${props => {
      if (props.direction === "top" || props.direction === "bottom") return "translateX(-50%)";
      if (props.direction === "left" || props.direction === "right") return "translateY(-50%)";
    }};
  }
  &::after {
    content: "";
    position: absolute;
    z-index: 1;
    width: 7px;
    height: 7px;
    background-color: ${props => {
      if (props.theme === "default") return "#fff";
      if (props.theme === "dark") return "#333";
      if (props.theme === "red") return "#FFDEDE";
    }};
    top: ${props => {
      if (props.direction === "left" || props.direction === "right") return "50%";
      if (props.direction === "bottom" || props.direction === "leftBottom" || props.direction === "rightBottom") return "-4.5px";
      return "";
    }};
    bottom: ${props => {
      if (props.direction === "top" || props.direction === "leftTop" || props.direction === "rightTop") return "-4.5px"
      return "";
    }};
    left: ${props => {
      if (props.direction === "bottom" || props.direction === "top") return "50%";
      if (props.direction === "leftTop" || props.direction === "leftBottom") return "10%";
      if (props.direction === "right") return "-4.5px";
      if (props.direction === "left") return "";
      return "";
    }};
    right: ${props => {
      if (props.direction === "left") return "-4.5px";
      if (props.direction === "rightTop") return "0";
      return "";
    }};

    transform: ${props => {
      if (props.direction === "top" || props.direction === "bottom" || props.direction === "leftTop" || props.direction === "rightTop" || props.direction === "leftBottom" || props.direction === "rightBottom") return "translateX(-50%) rotate(135deg)"
      if (props.direction === "left" || props.direction === "right") return "translateY(-50%) rotate(135deg)";
      return "";
    }};
    border: ${props => {
      if (props.theme === 'default') return '1px solid #a6a6a6';
      if (props.theme === "dark") return "1px solid #000";
      if (props.theme === "red") return "1px solid #FFDEDE";
      return "";
    }};
  }
`;