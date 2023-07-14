import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/pages/Header/Header';

function Grid () {
  const location = useLocation();

  return (
    <>
      <Header title={location.state} />
      <h2 className="guide-title" id="GridFlex"><span>UI KIT</span></h2>
      <div className="grid-system">
        <div className="guide-infomation">
          <div className="guide-grid-calculation">
            <span className="title">DESKTOP-WIDE</span>width: 1920px, column: 16, margin: 40px, gutter: 12px<br />
            <span className="title">DESKTOP-STANDARD</span>width: 1360px, column: 12, margin: 30px, gutter: 10px<br />
            <span className="title">TABLET</span>width: 960px, column: 8, margin: 20px, gutter: 8px<br />
            <span className="title">MOBILE</span>width: 480px, column: 4, margin: 15px, gutter: 6px<br />
          </div>
          <ul className="guide-color">
            <li className="color-chip column">Column</li>
            <li className="color-chip margin">Margin</li>
            <li className="color-chip gutter">Gutter</li>
          </ul>
        </div>
        <div className="grid-wrap grid-line">
          <div className="grid-show">
            <div className="grid-container-wrap">
              <div className="grid-unit grid-column-1start-2end grid-row-1start-2end">
                <div className="inner">
                  gutter 없는 unit<br /><br />
                  column 1번째에서 2개<br />
                  row 1번쨰에서 2개
                </div>
              </div>
              <div className="grid-unit grid-has-gap grid-column-3start-2end grid-row-2start-6end">
                <div className="inner">
                  gutter 있는 unit<br /><br />
                  column 3번째에서 2개<br />
                  row 2번쨰에서 6개
                </div>
              </div>
            </div> {/* end_grid-container-wrap */}
          </div> {/* end_grid-show */}
        </div> {/* end_grid-wrap */}
      </div> {/* end_grid-system */}
    </>
  )
}

export default Grid;