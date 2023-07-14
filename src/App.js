import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Setting, Plugin } from '@/pages/SettingsUiDevelop/index';
import { HISCheckboxPage, HISCheckboxGroupPage, HISTitlePage, HISRadioButtonPage, HISTablePage, HISTabPage, HISToggleSwitchPage, HISInputPage, HISToolTipPage, HISGridLayoutPage, HISParagraphPage, HISPopOverPage, HISButtonPage } from '@/pages/HIS/HISPage';
import { GridFlex } from '@/pages/GridSystemFlex/index';
import { Grid } from '@/pages/GridSystemGrid/index';
import "@/assets/scss/style.scss";

function App() {
  return (
    <>
      <div className="guide-wrap">
        <div className="contents">
          <Routes>
            {/* Settings - UI Develop */}
            <Route path="/" element={<Setting />} />

            <Route path="/Setting" element={<Setting />} />
            <Route path="/Plugin" element={<Plugin />} />
            {/* Components - UI Kit */}
            <Route path="/HISCheckbox" element={<HISCheckboxPage />} />
            <Route path="/HISCheckboxGroup" element={<HISCheckboxGroupPage />} />
            <Route path="/HISTitle" element={<HISTitlePage />} />
            {/* <Route path="/HISPopupTitle" element={<HISPopupTitle />} /> */}
            <Route path="/HISRadioButton" element={<HISRadioButtonPage />} />
            <Route path="/HISTable" element={<HISTablePage />} />
            <Route path="/HISTab" element={<HISTabPage />} />
            <Route path="/HISToggleSwitch" element={<HISToggleSwitchPage />} />
            <Route path="/HISInput" element={<HISInputPage />} />
            <Route path="/HISToolTip" element={<HISToolTipPage />} />
            <Route path="/HISGridLayout" element={<HISGridLayoutPage />} />
            <Route path="/HISParagraph" element={<HISParagraphPage />} />
            <Route path="/HISPopOver" element={<HISPopOverPage />} />
            <Route path="/HISButton" element={<HISButtonPage />} />

            {/* Components - Blocks */}


            {/* Components - Templates */}


            {/* Styles - UI Kit */}
            <Route path="/GridFlex" element={<GridFlex />} />
            <Route path="/GridGrid" element={<Grid />} />
          </Routes>
        </div>
      </div>
      <div className="app-container">
      </div>
    </>
  );
}

export default App
