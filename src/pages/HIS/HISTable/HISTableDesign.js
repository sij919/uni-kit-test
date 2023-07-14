import React from "react";
import { HISTable } from 'components/HISTable'

function HISTableDefault () {
  return (
    <>
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