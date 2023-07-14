import React, { createContext, useState } from "react";

export const TabContext = createContext();

function HISTab({children}) {
  const [activeTab, setActiveTab] = useState(1);
  const tabController = (tab) => {
    setActiveTab(tab);
  };

  return (
    <TabContext.Provider value={{ activeTab, tabController }}>
      <div className="tab-group">
        {children}
      </div>
    </TabContext.Provider>
  )
}

export default HISTab;