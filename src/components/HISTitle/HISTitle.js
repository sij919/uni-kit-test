import React from "react";
import { PREFIX } from "@/contexts/constant";

function HISTitle({
  type,
  purpose,
  theme,
  title,
  size,
  color,
  lineHeight,
  letterSpacing,
  bullet,
  subTitle,
  subTitleCustom,
  subTitleAlign,
  })
{
  const CLASSNAME_ROLE = 'title';

  const TypeChanger = type.as || type;

  const themeData = theme ? `${PREFIX.IS}${theme}` : "";
  const purposeData = purpose ? `${PREFIX.IS}${purpose}` : "";
  const styleOption = [themeData, purposeData].join(' ').trimEnd();

  const colorData = color ? `${color}` : "";
  const sizeData = size ? `${size}` : '';
  const lineheightData = lineHeight ? `${lineHeight}` : '';
  const letterSpacingData = letterSpacing ? `${letterSpacing}` : '';

  return (
    <div className={`${CLASSNAME_ROLE}-container ${styleOption}`}>
      {bullet && <>{bullet}</>}
      <TypeChanger
        className={`${CLASSNAME_ROLE}-${TypeChanger}`}
        style={{
          color:`${colorData}`,
          fontSize:`${sizeData}px`,
          lineHeight:`${lineheightData}`,
          letterSpacing:`${letterSpacingData}`,
        }}
      >
        {title}
      </TypeChanger>
      {subTitle &&
        <span
          data-type={type}
          className={`${CLASSNAME_ROLE}-sub`}
          style={{
            verticalAlign:`${subTitleAlign}`
          }}
        >
          {subTitle}
        </span>
      }
      {subTitleCustom && <>{subTitleCustom}</>}
    </div>
  )
}

HISTitle.defaultProps = {
  theme: 'default',
  purpose: 'page',
  bullet: null,
}

export default HISTitle;
