import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/pages/Header/Header';

function GridFlex () {
  const location = useLocation();

  return (
    <>
      <Header title={location.state} />
      <h2 className="guide-title" id="GridFlex"><span>UI KIT</span></h2>
      <div className="guide-box">
        <div className="color-guide">
          <ul>
            <li><span className='column'></span>Column</li>
            <li><span className='gutter'></span>Gutter</li>
            <li><span className='margin'></span>Margin</li>
            <li><span className='gutter2'></span>Gutter</li>
          </ul>
        </div>
        <div className="show-grid">
          <div className="grid-background">
            <div className="grid-container-fluid">
              <div className="info-text">
                <h1>컬럼 <b>가변형</b> 그리드 레이아웃</h1>
                <h2 className="guide">그리드 사이즈</h2>
                <p className="sub">
                  1px ≤ <b>Mobile</b> &lt; 860px<br />
                  861px ≤ <b>Tablet</b> &lt; 1360px<br />
                  1361px ≤ <b>Desktop</b> &lt; 1920px<br />
                  1921px ≤ <b>Wide</b>
                </p>

                <h2 className="guide">그리드 개수</h2>
                <p className="sub">
                  1px ≤ <b>4개</b> &lt; 860px<br />
                  861px ≤ <b>8개</b> &lt; 1360px<br />
                  1361px ≤ <b>12개</b> &lt; 1920px<br />
                  1921px ≤ <b>14개</b>
                </p>

                <h2 className='guide'>예시</h2>
                <p className="sub">리사이징 해보면서 그리드 개수와 레이아웃 변화를 확인하세요.</p>
              </div>
              <div className="row">
                <div className="col-m-4 col-t-4 col-d-6">
                  <div className="row">
                    <div className="col-m-4 col-t-8 col-d-6 gutter-no">Column</div>
                    <div className="col-m-4 col-t-8 col-d-6">Column</div>
                  </div>
                </div>
                <div className="col-m-4 col-t-4 col-d-6">
                  <div className="row">
                    <div className="col-d-6 col-t-8 col-m-4">Column</div>
                    <div className="col-d-6 col-t-8 col-m-4">Column</div>
                  </div>
                </div>
                <br /><br /><br /><br /><br />
                <div className="col-m-4 col-t-4 col-d-6">
                  <div className="row">
                    <div className="col-m-4 col-t-8 col-d-6 gutter-no before-no after-no">gutter-no<br />(좌우 여백 삭제)</div>
                    <div className="col-m-4 col-t-8 col-d-6 after-no gutter-suffix-no">gutter-suffix-no<br />(우측 여백 삭제)</div>
                  </div>
                </div>
                <div className="col-m-4 col-t-4 col-d-6">
                  <div className="row">
                    <div className="col-d-6 col-t-8 col-m-4 before-no gutter-prefix-no">gutter-prefix-no<br />(좌측 여백 삭제)</div>
                    <div className="col-d-6 col-t-8 col-m-4 before-no after-no gutter-no">gutter-no<br />(좌우측 여백 삭제)</div>
                  </div>
                </div>
                <br /><br /><br /><br /><br />
                <div className="col-2 prefix-1 suffix-2">prefix-1, suffix-2 block<br />(좌측 1, 우측 2)</div>
                <div className="col-2 suffix-2">suffix 1 block<br />(우측 1)</div>
                <div className="col-2 prefix-1">prefix 2 block<br />(좌측 2)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default GridFlex;