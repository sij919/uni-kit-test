import React, { useEffect, useRef, useState } from "react";
import GridLayout from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import styled, { css } from "styled-components";

const GridContainer = styled.div`
  ${props => {
    const columns = props.columns;
    const gridGapX = props.gridGap[0] + "px";
    const gridGapY = props.gridGap[1] + "px";
    return css`
      height: ${props.gridContainerHeight}px;
      .grid-style-wrap {
        width: calc(100% - (${props.gridContainerMargin[0]}px * 2));
        margin: ${props.gridContainerMargin[1]}px ${props.gridContainerMargin[0]}px;
        gap: ${gridGapY} ${gridGapX};
      }
      .grid-style-item {
        width: calc((100% - (${gridGapX} * (${columns} - 1))) / ${columns} );
        height: ${props.gridItemHeight}px;
      }
    `
  }}
`;

export default function HISGridLayout(props) {
  const { gridContainerHeight, gridContainerMargin, gridGap, columns, rows, widgetOption, children, active } = props;

  const layout = widgetOption;
  const [gridRect, setGridRect] = useState(null);
  const gridSystem = useRef(null);

  const gridSystemRect = () => {
    const grid = gridSystem.current.getBoundingClientRect().width;
    setGridRect(grid);
  };

  useEffect(() => {
    gridSystemRect();
    window.addEventListener("resize", gridSystemRect);
  }, []);

  const gridBackgroundCount = columns * rows;
  const gridItemHeight = (gridContainerHeight - ((rows + 1) * gridGap[0])) / rows;

  /* ================================================================================== */
  /* render() : Front html
  /* ================================================================================== */
  return (
    <>
      <GridContainer
        className="grid-layout-container"
        ref={gridSystem}
        {...props}
        gridItemHeight= {gridItemHeight}
      >
      {active && (
        <div className="grid-style-wrap">
          {[...Array(parseInt(gridBackgroundCount))].map((item, index) => {
            return (
              <div key={index} className="grid-style-item"></div>
            )
          })}
        </div>
      )}
        <div className="grid-system-wrap">
          <GridLayout
            layout={layout}
            rowHeight={gridItemHeight}
            maxRows={rows}
            cols={columns}
            width={gridRect}
            isResizable={active}
            isDraggable={active}
            margin={gridGap} //gutter
            containerPadding={gridContainerMargin} //margin
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            {children}
          </GridLayout>
        </div>
      </GridContainer>
    </>
  );
}

HISGridLayout.defaultProps = {
  gridContainerHeight: 826, //container height
  gridContainerMargin: [10,10], //container margin
  active: false,
  columns: 12,
  rows: 10,
  // rowHeight: 50,
  gridGap: [5,5] //grid-item gap
};
