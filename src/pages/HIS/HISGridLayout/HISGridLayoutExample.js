import React, { useState, useEffect } from 'react';
import { HISGridLayout } from '@/components/HISGridLayout';

function HISGridLayoutExample(props) {

  const [action, setAction] = useState(false);

  const handleToggleAction = () => {
    setAction((prev) => !prev);
  };

  const list = [
    { i: "a", x: 0, y: 0, w: 1, h: 2, maxW: 3, maxH: 3 },
    { i: "b", x: 0, y: 0, w: 1, h: 2 },
    { i: "c", x: 0, y: 0, w: 2, h: 2, minW: 2, minH: 2 },
    { i: "d", x: 0, y: 0, w: 1, h: 1, static: true },
  ];

  const handleKeyDown = e => {
    if(e.altKey && e.keyCode === 71) {
      handleToggleAction();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    }
  }, [ action ]);

  return (
    <>
      <button onClick={handleToggleAction} style={{padding: "5px 10px", backgroundColor: "#ffd175", borderRadius: "4px", cursor: "pointer" }}>{action ? "비활성화" : "활성화"}</button> windows : alt + g, mac os : option + g
      <HISGridLayout widgetOption={list} active={action} gridGap={[8,8]} columns={20} rows={11}>
        <div key="a" style={{background: "rgba(87, 219, 255, 0.25)"}}>
          A <br/>
          maxWidth: 3, maxHeight: 3
        </div>
        <div key="b" style={{background: "rgba(87, 219, 255, 0.25)"}}>
          B
        </div>
        <div key="c" style={{background: "#fff", border: "1px solid #000"}}>
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

