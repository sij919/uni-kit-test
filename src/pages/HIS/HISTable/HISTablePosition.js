import React from "react";
import { HISTable } from 'components/HISTable'

function HISTablePosition () {
  return (
    <>
      <div className="component-wrap">
        <HISTable />
        <br /><br />
        <HISTable headingPosition="row" />
        <br /><br />
        <HISTable headingPosition="both" />
      </div>
    </>
  )
}

export default HISTablePosition;