import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/pages/Header/Header';
import {
  HISTableDefault,
  HISTablePosition,
  HISTableSize,
  HISTableDesign
} from 'pages/HIS/HISTable';
import { PrismCodePage } from "@/pages/PrismCode";

const HISTableDefaultCode = `
  import React from "react";
  import { HISTable } from 'components/HISTable'

  function HISTableDefault () {
    return (
      <>
        <div className="component-wrap">
          <HISTable />
        </div>
      </>
    )
  }

  export default HISTableDefault;
`;

const HISTablePositionCode = `
  import React from "react";
  import { HISTable } from 'components/HISTable'

  function HISTablePosition () {
    return (
      <>
        <h2 className="component-sub-title">HISTablePosition</h2>
        <div className="component-wrap">
          <span className="component-sub-title">heading style - column(default)</span>
          <HISTable />
          <span className="component-sub-title">heading style - row</span>
          <HISTable headingPosition="row" />
          <span className="component-sub-title">heading style - both</span>
          <HISTable headingPosition="both" />
        </div>
      </>
    )
  }

  export default HISTablePosition;
`;

const HISTableSizeCode = `
  import React from "react";
  import { HISTable } from 'components/HISTable'

  function HISTableSize () {
    return (
      <>
        <h2 className="component-sub-title">HISTableSize</h2>
        <div className="component-wrap">
          <span className="component-sub-title">h1 사이즈 - 17px</span>
          <HISTable type="h1" />
          <span className="component-sub-title">h2 사이즈 - 14px</span>
          <HISTable type="h2" />
          <span className="component-sub-title">h3 사이즈 - 12px(default)</span>
          <HISTable />
        </div>
      </>
    )
  }

  export default HISTableSize;
`;

const HISTableDesignCode = `
  import React from "react";
  import { HISTable } from 'components/HISTable'

  function HISTableDefault () {
    return (
      <>
        <h2 className="component-sub-title">HISTableDesign</h2>
        <div className="component-wrap">
          <HISTable thAlign="th-align-left" tdAlign="td-align-lfet" thBgColor="th-bg-grey" tdBgColor="td-bg-grey" borderRadius="border-small" />
          <br />
          <HISTable thBgColor="th-bg-pink" tdBgColor="td-bg-pink" borderRadius="border-medium" />
          <br />
          <HISTable thAlign="th-align-right" tdAlign="td-align-right" thBgColor="th-bg-blue" tdBgColor="td-bg-blue" borderRadius="border-big" />
          <br />
          <HISTable headingPosition="row" tdAlign="td-align-lfet" thBgColor="th-bg-green" tdBgColor="td-bg-green" borderRadius="border-small" />
          <br />
          <HISTable headingPosition="both" tdAlign="td-align-lfet" thBgColor="th-bg-blue" tdBgColor="td-bg-pink" borderRadius="border-medium" />
        </div>
      </>
    )
  }

  export default HISTableDefault;
`;

function HISTablePage () {
  const location = useLocation();

  return (
    <>
      <Header title={location.state} />
      <h2 className="guide-title"><span>UI Kit</span></h2>
      <div className="guide-box" id="HISTable">
        <h3>HISTable</h3>

        <h4>HISTableDefault</h4>
        <HISTableDefault />
        <PrismCodePage code={HISTableDefaultCode} language="javascript" />

        <h4>HISTablePosition</h4>
        <HISTablePosition />
        <PrismCodePage code={HISTablePositionCode} language="javascript" />

        <h4>HISTableSize</h4>
        <HISTableSize />
        <PrismCodePage code={HISTableSizeCode} language="javascript" />

        <h4>HISTableDesign</h4>
        <HISTableDesign />
        <PrismCodePage code={HISTableDesignCode} language="javascript" />
      </div>






    </>

  )
}


export default HISTablePage;