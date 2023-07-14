import React from "react";
import { HISTable } from 'components/HISTable'

function HISTableSize () {
  return (
    <>
      <div className="component-wrap">
        <HISTable type="h1" />
        <br /><br />
        <HISTable type="h2" />
        <br /><br />
        <HISTable />
      </div>
    </>
  )
}

export default HISTableSize;