/* ----------------------------------------
* [ Title            ] HISButton
* [ Author           ] 선인장
* [ Date of Creation ] 2023.06.12
*
* @  Order
* 1. state : useState
* 2. Hook & Function : useEffect
* 3. render : Front html
*
* @  Naming
* 1. Import Component : PascalCase
* 2. Import Module & JS : camelCase
* 3. Style : 화면 ID + kebab-case
* 4. Image : kebab-case
* ---------------------------------------- */

import React, { useState } from 'react';
import { PREFIX } from '@/contexts/constant';

function HISButton(props) {
  const { theme, type, position, state, labelText, size, disabled, icon } = props;

  const CLASSNAME_ROLE = "btn";

  const themeData = theme ? `${PREFIX.IS}${theme}` : "";
  const stateData = state ? `${PREFIX.IS}${state}` : "";
  const sizeData = size ? `${PREFIX.S}${size}` : "";

  let styleOption;
  let styleArray = [themeData, stateData, sizeData];
  styleArray = styleArray.filter((d) => d !== null && d !== undefined && d !== '')
  styleArray.forEach((d) => {
    styleOption = [styleOption, d].join(' ');
  });

  const iconNormal = icon !== undefined && icon.normal ? icon.normal : '';
  const iconOver = icon !== undefined && icon.over ? icon.over : '';
  const iconClick = icon !== undefined && icon.click ? icon.click : '';
  const iconDisable = icon !== undefined && icon.disable ? icon.disable : '';

  let iconData;
  let iconArray = [iconNormal, iconOver, iconClick, iconDisable];
  iconArray = iconArray !== null
              ? iconArray.filter((i) => i !== null && i !== undefined && i !== '')
              : null;
  if (iconArray !== null) {
    iconArray.forEach((i) => {
      iconData = [iconData, i].join(' ').trimStart();
    });
  }

  const [imgSrc, setImgSrc] = useState(iconNormal);

  const handleClick = () => {
    setImgSrc(iconClick);
  }

  const handleDefault = () => {
    setImgSrc(iconNormal);
  }

  const handleOver = () => {
    setImgSrc(iconOver);
  }

  function checkUrl(strUrl) {
    let expUrl = /^data.+,/g;
    return strUrl.match(expUrl);
  }

  return (
    <>
      <button
        className={`${CLASSNAME_ROLE}${styleOption}`}
        type={type}
        position={position}
        disabled={disabled}
      >
      {
        checkUrl(iconNormal) &&
        checkUrl(iconOver) &&
        checkUrl(iconClick) &&
        type === "icon"
        ? <div
            className="img-icon"
            onMouseOver={handleOver}
            onClick={handleOver}
            onMouseDown={handleClick}
            onMouseOut={handleDefault}
          >
            <img src={imgSrc} alt="아이콘" />
              {labelText}
          </div>
        : checkUrl(iconDisable) &&
          type === "icon"
        ? <div
            className="img-icon disable"
          >
            <img src={iconDisable} alt="아이콘" />
            {labelText}
          </div>
        : type === "icon"
        ? <div className={iconData}>{labelText}</div>
        : <>{labelText}</>
      }
      </button>
    </>
  )
}

HISButton.defaultProps = {
  type: 'button',
  theme: 'default'
}

export default HISButton