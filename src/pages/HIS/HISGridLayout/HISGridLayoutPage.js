import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/pages/Header/Header';
import { PrismCodePage } from "@/pages/PrismCode";
import HISGridLayoutExample from './HISGridLayoutExample'

const GridSystemExample = `
  import HISGridLayout from '@/components/HISGridLayout/HISGridLayout'
  import React, { useState } from 'react'

  function HISGridLayoutExample(props) {

    const [action, setAction] = useState(false);

    const list = [
      { i: "a", x: 0, y: 0, w: 1, h: 2, maxW: 3, maxH: 3 },
      { i: "b", x: 0, y: 0, w: 1, h: 2 },
      { i: "c", x: 0, y: 0, w: 2, h: 2, minW: 2, minH: 2 },
      { i: "d", x: 0, y: 0, w: 1, h: 1, static: true },
    ];

    const handleToggleAction = () => {
      setAction((prev) => !prev);
    };

    return (
      <>
        <button onClick={handleToggleAction}>{action ? "비활성화" : "활성화"}</button>
        <HISGridLayout widgetOption={list} active={action} gridGap={[3,3]} rowHeight={60} columns={12} row={10}>
          <div key="a" style={{background: "rgba(87, 219, 255, 0.25)"}}>
            A <br/>
            maxWidth: 3, maxHeight: 3
          </div>
          <div key="b" style={{background: "rgba(87, 219, 255, 0.25)"}}>
            B
          </div>
          <div key="c" style={{background: "rgba(87, 219, 255, 0.25)"}}>
            C <br/>
            minWidth: 2, minHeight: 2
          </div>
          <div key="d" style={{background: "rgba(87, 219, 255, 0.25)"}}>
            D <br/>
            Static
          </div>
        </HISGridLayout>
      </>
    )
  }

  export default HISGridLayoutExample;


`

function HISGridLayoutPage() {
  const location = useLocation();

  return (
    <>
      <Header title={location.state} />
      <h2 className="guide-title"><span>UI Kit</span></h2>
      <div className="guide-box" id="HISGridLayout">
        <h3>GridLayout</h3>
        <h4>GridSystem</h4>
        <div className="component-wrap">
          <HISGridLayoutExample />
        </div>
        <PrismCodePage code={GridSystemExample} language="javascript" />
      </div>
    </>
  )
}

export default HISGridLayoutPage
