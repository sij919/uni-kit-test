import React, { useContext } from "react";

import {TabContext} from './HISTab';

function HISTabPanel({children, panelValue}) {
  const CLASSNAME_ROLE = 'tab-panel';
  const { activeTab } = useContext(TabContext);

  return(
    <>
        {
          activeTab === panelValue &&
          <div className={`${CLASSNAME_ROLE}`} aria-hidden="false">
            <div className={`${CLASSNAME_ROLE}-inner`}>{children}</div>
          </div>
        }
    </>
  )
}

export default HISTabPanel;