import React, { useContext } from "react";
import { PREFIX } from "@/contexts/constant";
import HISToolTip from '@/components/HISToolTip/HISToolTip'

import {TabContext} from './HISTab';

function HISTabMenu({ tabTitle, tabValue, maxWidth}) {
  const CLASSNAME_ROLE = 'tab-menu';
  const { activeTab, tabController } = useContext(TabContext);
  const handleTabClick = () => tabController(tabValue);

  const buttonStyleSet = (itemValue) => {
    let styleArray = [`${CLASSNAME_ROLE}-item`];
    activeTab === tabValue && styleArray.push(`${PREFIX.IS}active`);
    maxWidth && styleArray.push(`${PREFIX.IS}max-width`);
    styleArray = styleArray.join(' ').trimEnd();
    return {
      className: styleArray,
      'aria-hidden': `${activeTab === tabValue? "false" : "true"}`
    };
  }

  return(
    <>
      <button
        type="button"
        onClick={handleTabClick}
        {...buttonStyleSet(tabValue)}
        style={{maxWidth: `${maxWidth}`}}
      >
      {
        maxWidth ?
        <HISToolTip label={tabTitle} toolTipClassName="tooltip-content">
          <span className="text ellipsis">
            {tabTitle}
          </span>
        </HISToolTip>
        :
        <span className="text">
          {tabTitle}
        </span>
      }
      </button>
    </>
  )
}

HISTabMenu.defaultProps = {
  maxWidth: null
}

export default HISTabMenu;