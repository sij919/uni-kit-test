import React from 'react'
import { PREFIX } from "@/contexts/constant";

function HISParagraph({children, theme, fontSize, color, verticalRhythm, weight}) {
  const CLASSNAME_ROLE = 'paragraph';
  const themeData = theme ? `${PREFIX.IS}${theme}` : "";
  const fonSizeData = fontSize ? `${PREFIX.IS}size-${fontSize}` : "";
  const verticalLineData = verticalRhythm ? `${PREFIX.IS}${CLASSNAME_ROLE}-rhythm` : "";
  const weightData = weight? `${PREFIX.IS}${weight}` : "";
  const colorData = color ? `${PREFIX.IS}color-${color}` : "";
  const styleOption = [themeData, fonSizeData, verticalLineData, weightData, colorData].join(' ').trimEnd();

  return (
    <>
      <p className={`${CLASSNAME_ROLE}-wrap ${styleOption}`}>
        {children}
      </p>
    </>
  )
}

HISParagraph.defaultProps = {
  theme: "default",
  verticalRhythm: true,
  fontSize: "default", // small, medium, large

  // weight - light, regular, medium, bold, extra-bold
  // color - black, gray01, gray02, gray03, gray04, point, success, warning, information, error, message

}

export default HISParagraph;