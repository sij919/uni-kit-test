import React from "react";
import { PREFIX } from "@/contexts/constant";

function HISTabMenuGroup({children, theme, fontSize, gapBarHeight, activeColor, dividedWidth}) {
  const CLASSNAME_ROLE = 'tab-menu';
  const themeData = theme ? `${PREFIX.IS}${theme}` : "";
  const fontSizeData = fontSize ? `${PREFIX.IS}${fontSize}` : "";
  const gapBarHeightData = gapBarHeight ? `${PREFIX.IS}${gapBarHeight}` : "";
  const activeColorData = activeColor? `${PREFIX.IS}${activeColor}` : "";
  const dividedWidthData = dividedWidth? `${PREFIX.IS}divided-width` : "";
  const styleOption = [themeData, fontSizeData, gapBarHeightData, activeColorData, dividedWidthData].join(' ').trimEnd();

  return(
    <>
      <div className={`${CLASSNAME_ROLE} ${styleOption}`}>
        {children}
      </div>
    </>
  )
}

HISTabMenuGroup.defaultProps = {
  theme: "tab-default", // tab-edition
  gapBarHeight: "bar-medium", // bar-small, bar-medium, bar-large
  fontSize: "font-medium", // font-small, font-medium, font-large
  activeColor: "blue", // green, orange, pink
  dividedWidth: false
}

export default HISTabMenuGroup;